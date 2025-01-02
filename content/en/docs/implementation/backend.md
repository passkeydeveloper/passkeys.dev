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
  // A human-readable name for your website (e.g. "Passkeys Developer Resources")
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
const regOptions = await generateRegistrationOptions(currentUser);

await pseudocodeSaveCurrentRegistrationOptions(currentUser, regOptions);
```

`regOptions` can then be transmitted to the frontend (docs coming soon) as JSON for the frontend
to eventually pass them in to `navigator.credentials.create()`.

## 2. Verify registration responses

## 3. Generate authentication options

## 4. Verify authentication responses

## Third-Party Libraries

Many third-party libraries exist to simplify the job of generating options and verifying responses.
These libraries can help reduce your maintenance burden of supporting passkeys by virtue of
their ability to keep up with WebAuthn API changes. Head over to
{{< link "../tools-libraries/libraries" >}}Tools &amp; Libraries > Libraries{{< /link >}}
for a list of maintained libraries in your backend's language.
