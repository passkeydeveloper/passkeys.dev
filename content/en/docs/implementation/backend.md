---
title: "Backend Requirements"
description: "Guidance on server-side handling of passkeys registration and authentication"
date: 2024-08-13T12:00:00.000Z
---

The backend drives WebAuthn ceremonies through four primary responsibilities:

1. Generate registration options
2. Verify registration responses
3. Generate authentication options
4. Verify authentication responses

The guidance below identifies best practices to fulfill these responsibilities and securely incorporate passkeys-based authentication into your website.

{{< alert type="info" >}}
**Please note that this is general guidance; it does not account for any one specific server implementation.**
It is intended to be a launching point. Care should be taken as you consider how best to adapt this guidance for your particular site.
{{< /alert >}}

## Data Structures

A site that uses passkeys should be prepared to store the following "`PasskeyModel`" database model:

```ts
type PasskeyModel = {
  // SQL: Store as `TEXT`. Index this column
  id: Base64URLString;
  // SQL: Store raw bytes as `BYTEA`/`BLOB`/etc...
  publicKey: Uint8Array;
  // SQL: Foreign Key to an instance of your internal user model
  user: UserModel;
  // SQL: Store as `TEXT`. Index this column. A UNIQUE constraint on
  //      (webAuthnUserID + user) also achieves maximum user privacy
  webauthnUserID: Base64URLString;
  // SQL: `INT` or whatever similar type is supported
  counter: number;
  // SQL: `BOOL` or whatever similar type is supported
  backupEligible: boolean;
  // SQL: `BOOL` or whatever similar type is supported
  backupStatus: boolean;
  // SQL: `VARCHAR(255)` and store string array as a CSV string
  // Ex: ble,cable,hybrid,internal,nfc,smart-card,usb
  transports?: AuthenticatorTransport[];
};
```

The association between an instance of this `PasskeyModel` and an instance of
your site's "`UserModel`" should be established in a way that makes sense
for your site's database architecture.
For the purposes of the documentation below, the following `UserModel` is assumed:

```ts
type UserModel = {
  // No assumption is made of how users are assigned IDs within the database
  id: any;
  // An email address, username, or other identifiable information
  username: string;
};
```


## 1. Generate registration options

Registration options define several values that authenticators need to help associate a passkey with your site. Some of the most important values include the following:

- **RP ID:** A scoped domain name of the site on which the passkey should be available. The browser will require this to be part of the effective domain of the site hosting the registration ceremony.
- **User ID:** A unique, random identifier for the user account that the passkey will be registered to.
  This **should not be personally-identifying information** like an email address/username/`UserModel.username`/etc...!

Some of the options that get passed in to WebAuthn's `navigator.credentials.create()` call need to be of type `Uint8Array`. Unfortunately byte arrays do not serialize well into a JSON representation, making it tricky to get these values from the backend to the frontend.

It is suggested, then, that the "`generateRegistrationOptions()`" method returns a value of type [`PublicKeyCredentialCreationOptionsJSON`](https://w3c.github.io/webauthn/#dictdef-publickeycredentialcreationoptionsjson) that uses **Base64URL** encoding to encode such byte arrays to a value that is easier to transmit to the frontend as JSON:

```ts
/**
 * Generate passkey registration options
 */
async function generateRegistrationOptions(
  currentUser: UserModel,
): PublicKeyCredentialCreationOptionsJSON {
  // A domain name for your site (e.g. "passkeys.dev")
  const rpID: string = process.env.RP_ID;

  // A human-read able name for your website (e.g. "Passkeys Developer Resources")
  const rpName: string = process.env.RP_NAME;

  // Generate one-time-use random bytes for the authenticator to sign
  const challenge: Uint8Array = await pseudocodeGenerateChallenge(currentUser);

  // Generate or retrieve a pseudonymous, WebAuthn-specific user identifier as random bytes
  const userID: Uint8Array = await pseudocodeGetWebAuthnUserID(currentUser);

  // Get a list of the user's currently registered passkeys to prevent re-registration
  const userCurrentPasskeys: PasskeyModel[] = await pseudocodeGetCurrentPasskeys(currentUser);

  return {
    rp: {
      id: rpID,
      name: rpName,
    },
    user: {
      id: pseudocodeBytesToBase64URLString(userID),
      name: currentUser.username,
      displayName: '',
    },
    challenge: pseudocodeBytesToBase64URLString(challenge),
    pubKeyCredParams: [
      { alg: -8, type: 'public-key' },
      { alg: -7, type: 'public-key' },
      { alg: -257, type: 'public-key' },
    ],
    attestation: 'direct',
    excludeCredentials: userCurrentPasskeys.map((passkey) => ({
      id: passkey.id,
      transports: passkey.transports,
      type: 'public-key',
    })),
    authenticatorSelection: {
      residentKey: 'preferred',
      userVerification: 'preferred',
    },
  };
}
```

These options should then be remembered since some values will be needed to verify the registration
response generated for these options:

```ts
// The ID of the user's auth session that was created after the user logged in
const sessionID = request.session.id;

// User data associated with the current auth session
const currentUser: UserModel = await getUserData(sessionID);

const regOptions = await generateRegistrationOptions(currentUser);

// Persist the options so we can reference values in them during verification
await pseudocodeSaveRegistrationOptions(sessionID, regOptions);
```

`regOptions` can then be transmitted to the frontend as JSON for
{{< link "./frontend.md" >}}the frontend to eventually pass in to
`navigator.credentials.create()`.{{< /link >}}

## 2. Verify registration responses

Once the frontend has taken the registration options above and fed them into WebAuthn,
and after the user succeeds in creating a passkey with their chosen passkey provider,
then the subsequent registration response returned from the WebAuthn call
will need to be sent to the backend for verification.

As JSON is a popular way to send the response back,
the backend method "`verifyRegistrationResponse()`" should prepare to accept a value
in the shape of [`RegistrationResponseJSON`](https://w3c.github.io/webauthn/#dictdef-registrationresponsejson).

```ts
/**
 * Check that the WebAuthn registration data represents a well-formed passkey
 */
async function verifyRegistrationResponse(
  registrationOptions: PublicKeyCredentialCreationOptionsJSON,
  registrationResponse: RegistrationResponseJSON,
): VerifiedRegistration {
  try {
    // TODO: Write basic attestation-less response verification here?
  } catch (err) {
    throw new Error(`Couldn't verify registration response`, { cause: err });
  }

  return {
    passkey: {
      id: registrationResponse.id,
      publicKey: new Uint8Array([...]),
      counter: 0,
      backupEligible: true,
      backupStatus: true,
      transports: ['internal', 'hybrid'],
    },
  }
}

type VerifiedRegistration = {
  passkey: {
    id: Base64URLString;
    publicKey: Uint8Array;
    counter: number;
    backupEligible: boolean;
    backupStatus: boolean;
    transports?: AuthenticatorTransport[];
  }
};
```

```ts
// The ID of the user's auth session that was created after the user logged in
const sessionID = request.session.id;

// Retrieve registration options for the current attempt to check for expected values
const regOptions: PublicKeyCredentialCreationOptionsJSON =
  await pseudocodeRetrieveAndDeleteRegistrationOptions(sessionID);

// Assume `RegistrationResponseJSON` was sent back as JSON via a POST command
const regResponse = request.body;

let passkey;
try {
  const verification = await verifyRegistrationResponse(regOptions, regResponse);
  passkey = verification.passkey;
  // User successfully registered a passkey, continue
} catch (err) {
  console.error(err);
  // Something went wrong, notify the user accordingly
}
```

Assuming successful creation, information about the newly-created passkey
should then get stored as a `PasskeyModel` record in the database:

```ts
// User data associated with the current auth session
const currentUser: UserModel = await getUserData(sessionID);

/**
 * - Use `currentUser` for the foreign key needed for `PasskeyModel.user`
 * - Use `regOptions.user.id` for `PasskeyModel.webauthnUserID`
 * - Use the values in `passkey` to populate the remaining `PasskeyModel` fields
 */
await pseudocodeSaveNewPasskey(currentUser, regOptions, passkey);
```

The user is now ready to use their passkey for subsequent authentication.

## 3. Generate authentication options

For similar reasons, authentication options generation should aim to return a value
shaped like [`PublicKeyCredentialRequestOptionsJSON`](https://w3c.github.io/webauthn/#dictdef-publickeycredentialrequestoptionsjson).
This will simplify the work of sending these options to the front end as JSON:

```ts
/**
 * Create authentication options for a user to sign in with a passkey
 */
async function generateAuthenticationOptions(
  currentUser?: UserModel,
): PublicKeyCredentialRequestOptionsJSON {
  // This must be the same value specified during registration (e.g. "passkeys.dev")
  const rpID: string = process.env.RP_ID;

  // Generate one-time-use random bytes for the authenticator to sign
  const challenge: Uint8Array = await pseudocodeGenerateChallenge(currentUser);

  // If you know the user that's trying to log in then get the list of passkeys they can use
  // Hint: You won't know the user if you're using conditional UI...
  let userCurrentPasskeys: PasskeyModel[] = [];
  if (currentUser) {
    userCurrentPasskeys = await pseudocodeGetCurrentPasskeys(currentUser);
  }

  return {
    rpId: rpID,
    challenge: pseudocodeBytesToBase64URLString(challenge),
    allowCredentials: userCurrentPasskeys.map((passkey) => ({
      id: passkey.id,
      transports: passkey.transports,
      type: 'public-key',
    })),
    userVerification: 'preferred',
  }
}
```

Generate options, then store them for *someone* to use to log in with a registered passkey:

```ts
// The ID of an UNAUTHENTICATED user session, established when a user hits the login page
const unknownUserSessionID = request.session.id;

// User data associated with the provided account identifier (email, username, etc...)
let currentUser: UserModel | undefined = undefined;
if (enteredAccountID) {
  currentUser = await getUserData(enteredAccountID);
}

const authOptions = await generateAuthenticationOptions(currentUser);

// Persist the options so we can reference values in them during verification
await pseudocodeSaveAuthenticationOptions(unknownUserSessionID, authOptions);
```

Send these options to the {{< link "./frontend.md" >}}frontend{{< /link >}} to have the user attempt to log in.

{{< alert type="info" >}}
WebAuthn is capable of handling both "passwordless" and "usernameless" authentication flows:

- **Passwordless** authentication often starts with the user typing in an account identifier.
  In this flow the Relying Party should populate `allowCredentials` with that user's
  registered passkeys to lean on the browser to help the user understand when they have a passkey
  for the site.

- **Usernameless** authentication involves initiating a WebAuthn authentication attempt
  without any upfront knowledge about the user's identity.
  Instead, the user first chooses to use a registered passkey in response to a WebAuthn call
  with an empty `allowCredentials.`
  Next the website checks that it recognizes the passkey ID,
  verifies the signature in the response with the public key for that passkey,
  then logs the user in as whatever user is assigned to `PasskeyModel.user`
  when the passkey was created.
{{< /alert >}}

## 4. Verify authentication responses

Assuming successful use of WebAuthn to generate an authentication response on the frontend,
the Relying Party should now verify the instance of
[`AuthenticationResponseJSON`](https://w3c.github.io/webauthn/#dictdef-authenticationresponsejson):

```ts
/**
 * Make sure the authentication response is valid for the specified, registered passkey
 */
async function verifyAuthenticationResponse(
  authOptions: PublicKeyCredentialRequestOptionsJSON,
  authResponse: AuthenticationResponseJSON,
  registeredPasskey: PasskeyModel,
): VerifiedAuthentication {
  try {
    // TODO: Write basic authentication verification here?
  } catch (err) {
    throw new Error(`Couldn't verify authentication response`, { cause: err });
  }

  return {
    passkey: {
      id: registeredPasskey.id,
      newCounter: 0,
      backupEligible: true,
      backupStatus: true,
    },
  }
}

type VerifiedAuthentication = {
  passkey: {
    id: Base64URLString;
    newCounter: number;
    backupEligible: boolean;
    backupStatus: boolean;
  }
};
```

Call the method, then log the user in upon successful verification:

```ts
// The ID of an UNAUTHENTICATED user session, established when a user hits the login page
const unknownUserSessionID = request.session.id;

// Retrieve registration options for the current attempt to check for expected values
const authOptions: PublicKeyCredentialRequestOptionsJSON =
  await pseudocodeRetrieveAndDeleteAuthenticationOptions(unknownUserSessionID);

// Assume `AuthenticationResponseJSON` was sent back as JSON via a POST command
const authResponse = request.body;

// Make sure the credential ID specified in the response is one the site recognizes
let registeredPasskey: PasskeyModel;
try {
  registeredPasskey = await pseudocodeGetRegisteredPasskey(authResponse.id);
} catch (err) {
  console.error(err);
  // Something went wrong, notify the user accordingly
  throw new Error('Unrecognized passkey ID');
}

// Now try to verify the response
let passkey;
try {
  const verification = await verifyAuthenticationResponse(
    authOptions,
    authResponse,
    registeredPasskey,
  );
  passkey = verification.passkey;
  // User successfully registered a passkey, continue
} catch (err) {
  console.error(err);
  // Something went wrong, notify the user accordingly
}
```

Assuming successful verification, log the user in and update information about the passkey:

```ts
// "Log the user in", whatever that looks like for your site
request.session.user = await pseudocodeGetUserForPasskeyID(passkey.id);

// Update `PasskeyModel.counter` and `PasskeyModel.backupStatus` in the database
await pseudocodeUpdatePasskeyRecord(passkey);
```

The user has now successfully used a passkey to log in.

## Third-Party Libraries

Many third-party libraries exist to simplify the job of generating options and verifying responses.
These libraries can help reduce your maintenance burden of supporting passkeys by virtue of
their ability to keep up with WebAuthn API changes. Head over to
{{< link "../tools-libraries/libraries" >}}Tools &amp; Libraries > Libraries{{< /link >}}
for a list of maintained libraries in your backend's language.
