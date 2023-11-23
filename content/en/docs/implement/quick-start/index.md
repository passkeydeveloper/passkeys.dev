---
title : "Quick Start"
description: "Getting started with implementing passkeys"
lead: "Getting started with passkey implementation"
date: 2023-11-23T19:48:22.760Z
draft: false
images: []
weight: 310
---

# Implementing Passkeys

Passkeys offer a more secure and simpler alternative to passwords, eliminating the need for users to remember complex passwords or deal with SMS OTPs. They are phishing-resistant, unique for each website, and created using biometric or device lock mechanisms.

## Overview

This guide outlines how to implement passkey onboarding and signing-in processes, focusing on the passkey experience ideal for digital commerce and simple login scenarios.

> **Note:** The FIDO Alliance UX guide suggests using one-time-passwords (OTP) sent by email as a fallback option.

### Implement Your Flow

- [Passkey Onboarding](#passkey-onboarding)
- [Signing-in with Passkeys](#signing-in-with-passkeys)

### Prerequisites

- Implement passkeys in your existing sign-in flows
- Impelemt passkeys on a dedicated interface where a user can manage their passkeys
- Refer to the [Support Matrix](https://passkeys.dev/device-support/#matrix) for current passkey support.

## Passkey Onboarding

### Steps for Onboarding Users to Passkeys

1. **Check for Passkey Support:**  
   Determine if the user's browser running your javascript and the user device supports passkeys by calling `PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()` and determine whether or not to display the passkey onabording flow. For example:
   ```javascript
   if (typeof window.PublicKeyCredential !== 'undefined' &&
       PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()) {
       // Passkeys are supported
   } else {
       // No support for passkeys
       location.href = '...';
   }
   ```
2. **Setup the Registration Options on the server backend:**  
   Set up the `publicKeyCredentialCreationOptions` object which containse the registration options to create a new user credential.
   - **challenge**: server-generated challenge in ArrayBuffer of cryptographically random bytes generated on the server.
   - **rp.name**: The Relying Party which is the entity where the user registers and authenticates
   - **rp.id**: The Relying Party Identifier, for the Relying Party. This is where the relying party can specify either its domain or a registrable suffix. For example, if an RP's origin is https://login.example.com:1337, the RP ID can be either login.example.com or example.com. If the RP ID is specified as example.com, the user can authenticate on login.example.com or on any subdomains on example.com.
   - **user.id**: A user's unique ID. This value must be an ArrayBuffer which does not include personally identifying information, for example, e-mail addresses or usernames. A random, 16-byte value generated per account will work well.
   - **user.name**: This field should hold a unique identifier for the account that the user will recognise, like their email address or username. This will be displayed in the account selector. (If using a username, use the same value as in password authentication.)
   - **user.displayName**: This field is a required, more user-friendly name for the account. It need not be unique and could be the user's chosen name. If your site does not have a suitable value to include here, pass an empty string. This may be displayed on the account selector depending on the browser.
   - **pubKeyCredParams**: This is an array of objects describing what public key types are acceptable to a server. The alg is a number described in the [COSE](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) registry; for example, -7 indicates that the server accepts Elliptic Curve public keys using a SHA-256 signature algorithm.
   - **excludeCredentials**: This is an array of credential IDs tied to this user account to prevent registering the same device.
   - **authenticatorSelection.residentKey**: To request the type of authenticators allowed for registration, in this case to register passkeys you should setup _residentKey: "required"_
   - **authenticatorSelection.userVerification**: This is to ask the authenticator to request user verification using a biometric or device PIN by setting _userVerification: "preferred"_

3. **Create a Passkey by calling the WebAuthn API:**  
   Use `navigator.credentials.create()` call with the registration options. User interaction with a modal dialog is required to provide consent
   ```javascript
   const publicKeyCredentialCreationOptions = {
    challenge: *****,
    rp: {
        name: "Passkeys Developer",
        id: "passkeys.dev",
        },
    user: {
        id: *****,
        name: "jane123",
        displayName: "Jane",
        },
    pubKeyCredParams: [{alg: -7, type: "public-key"},{alg: -257, type: "public-key"}],
    excludeCredentials: [{
        id: *****,
        type: 'public-key',
        }],
    authenticatorSelection: {
        userVerification: "preferred",
        residentKey: "required",
        }
    };
    const credential = await navigator.credentials.create({
        publicKey: publicKeyCredentialCreationOptions
    });
    ```

4. **Finalize Onboarding on the Server:**  
   Once the user authorizes via their device's screen lock, a `PublicKeyCredential` object is returned. This process may fail for various reasons, such as if a passkey already exists (handled as `InvalidStateError`) or if the user cancels the operation (`NotAllowedError`). Other unexpected errors may also arise.

   The `PublicKeyCredential` object contains several critical properties:
   - `id`: A Base64URL encoded identifier for the passkey.
   - `rawId`: The credential ID in binary format.
   - `response`: Contains `clientDataJSON` and `attestationObject`, providing the RP ID, public key, and other metadata.
   - `authenticatorAttachment`: Shows the device's capability for passkey creation.
   - `type`: Always set to "public-key".

   **Processing the Credential:**
   It's advisable to use a server-side library to process this credential. The key components to store on your server include the Credential ID, User ID, Public Key, and possibly other flags like Backup Eligibility and State, as well as supported Transports.

   This data is vital for identifying the user in future authentication processes and managing the passkey lifecycle.

## Signing-in with Passkeys

### Steps for Signing In with Passkeys

1. **Request User Account Identifier:**  
   Start by asking the user for their account identifier, typically a username or email address.

2. **Check for Autofill UI Availability:**  
   On page load, check if autofill UI (conditional mediation) is available, then call `navigator.credentials.get()` with `mediation: "conditional"` and `userVerification: "preferred"`.

3. **Handle Authentication Options and User Interaction:**  
   Retrieve authentication options from your server, including a random `challenge` and `rpId`. Guide the user through the authentication process, which may involve biometric verification or using a passkey from another device.

4. **Process the WebAuthn Response:**  
   Send the WebAuthn response to your server for verification. If verification succeeds, start an authenticated session for the user.

### Implementation Hints

- Consider user experience for different platforms and devices. You can refer to the [Support Matrix](https://passkeys.dev/device-support/#matrix) for current passkey support.
- Implement cross-device authentication for a seamless experience.
- Check out this is a [community-driven list](https://github.com/passkeydeveloper/passkey-authenticator-aaguids/blob/main/aaguid.json) of known passkey provider AAGUIDs to assist with naming passkeys in end user passkey management interfaces.

### Security Considerations

- Consider setting `userVerification` to `preferred` to balance security with usability on devices without biometric sensors.
- Strongly authenticate the user before passkey creation, including multi-factor authentication if needed.

> **Important:** Always ensure that the user is fully informed about the implications of creating a passkey, particularly regarding device access.

#### References

- [Passkeys.dev Bootstrapping](https://passkeys.dev/docs/use-cases/bootstrapping)
- [FIDO Alliance UX Guidelines for Passkey Creation and Sign-ins](https://fidoalliance.org/ux-guidelines-for-passkey-creation-and-sign-ins/)