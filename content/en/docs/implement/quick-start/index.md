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

Passkeys are a modern authentication solution designed to replace traditional passwords, offering a simpler and more secure sign-in experience across websites and applications. Based on FIDO standards and utilizing biometric or device lock mechanisms (such as fingerprints, Face ID, or Touch ID) to authenticate users, passkeys are inherently phishing-resistant and remove the need for complex passwords or one-time SMS codes. Each passkey, unique to the website or app it's created for, ensures strong, non-reusable credentials. Built on cryptographic key pairs and aligned with W3C WebAuthn, passkeys integrate easily with existing sign-in flows through form autofill functionalities in browsers, streamlining the transition from passwords to a more secure, convenient authentication method.

## Overview

This guide will provide a detailed path for integrating passkeys into your applications, leveraging the intuitive nature of passkey creation and use, as well as their compatibility with biometric authentication methods like Face ID or Touch ID.

### Implement Your Flow

- [**Passkey Onboarding:**](#passkey-onboarding) This section guides you through introducing users to passkeys and helping them create a passkey for your service.
- [**Signing-in with Passkeys:**](#signing-in-with-passkeys) Learn how to create seamless sign-in experiences that utilize passkeys. This includes understanding how passkeys are inherently linked to the app or website they were created for, providing an added layer of security against phishing.

### Prerequisites

- **Existing System Compatibility:** Ensure your application's current sign-in mechanisms are compatible with passkey integration. This may involve updating your sign-in pages to support passkey authentication alongside traditional password inputs.
- **Dedicated Management Interface:** Develop a user interface within your application that allows users to manage their passkeys. This interface should provide users with control and transparency over their authentication methods.
- **Platform Compatibility:** Check out the [Support Matrix](https://passkeys.dev/device-support/#matrix) to verify the compatibility of passkeys across different devices and platforms.
- **Seamless Transition Strategy:** Plan for a smooth transition from passwords to passkeys. This includes leveraging AutoFill UI functionality for a frictionless user experience.

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

   ```javascript
   // Example setup of publicKeyCredentialCreationOptions on the server
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

3. **Create a Passkey by calling the WebAuthn API:**  
   Use `navigator.credentials.create()` with the registration options to initiate the creation of a passkey. This step involves user interaction for consent.
   ```javascript
   navigator.credentials.create({
        publicKey: publicKeyCredentialCreationOptions
    }).then((newCredential) => {
        // Handle the newly created credential
    }).catch((error) => {
        // Handle errors in passkey creation
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

5. **Processing the Credential:**
   It's advisable to use a server-side library to process this credential. The key components to store on your server include the Credential ID, User ID, Public Key, and possibly other flags like Backup Eligibility and State, as well as supported Transports. This data is vital for identifying the user in future authentication processes and managing the passkey lifecycle.

## Signing-in with Passkeys

### Steps for Signing In with Passkeys

1. **Request User Account Identifier:**  
   Start by asking the user for their account identifier, typically a username or email address. Enhance the user experience by using an input field with autocomplete attributes to support passkey suggestions.
   ```html
   <input type="text" name="username" autocomplete="username webauthn">
   ```

2. **Check for Autofill UI Availability:**  
   On page load, check if the browser supports WebAuthn and if conditional mediation is available. This step ensures compatibility with passkey functionality.
   ```javascript
   if (window.PublicKeyCredential && PublicKeyCredential.isConditionalMediationAvailable) {
    const isCMA = await PublicKeyCredential.isConditionalMediationAvailable();
    if (isCMA) {
        // Proceed with WebAuthn authentication
        }
    }  
   ```

3. **Initiate Authentication with Conditional UI:**  
   Make a conditional WebAuthn get call, including the rpId to ensure the passkey is used on the correct domain.
   ```javascript
   const challenge = /* Fetch challenge from your server which prevents replay attacks and is crucial for security */;
   const rpId = /* Your website's domain name which is the same RP ID as used during registration*/;
   const options = {
        rpId: passkyes.dev, 
        challenge: challenge,
        allowCredentials: [], // For choosing a passkey
        userVerification: "preferred", // Or "required"
        mediation: "conditional" // Enables conditional UI
    };
    navigator.credentials.get({ publicKey: options })
        .then((credential) => {
            // Authentication successful, process credential
        })
        .catch((error) => {
            // Handle errors
        });
   ```

4. **Process the WebAuthn Response:**  
   After the user selects an account and consents using their device's screen lock, the browser returns a `PublicKeyCredential` object. Handle any potential errors and then verify the response on your server.
   ```javascript
   navigator.credentials.get({ publicKey: options })
   .then((credential) => {
        // Send credential to server for verification
    })
    .catch((error) => {
        // Handle errors such as NotAllowedError
    });
   ```
   Verify the signature against the user's public key on your server. Upon successful verification, the user is authenticated.

## Implementation Hints

- **Cross-Platform Experience:** When implementing passkeys, consider the user experience across different platforms and devices. Passkeys created on one platform can be used seamlessly across others, such as iOS passkeys being usable on Macs and even Windows devices via FIDO Cross-Device Authentication. Regularly consult the [Support Matrix](https://passkeys.dev/device-support/#matrix) for up-to-date information on passkey support across systems.
- **Conditional UI Integration:** Leverage the browser's form autofill functionality to integrate passkeys into traditional password-based flows seamlessly. This approach allows users to sign in with a passkey as easily as entering a password, enhancing security without disrupting familiar user interfaces.
- **Community Resources:** Utilize community-driven resources, such as the [list of passkey provider AAGUIDs](https://github.com/passkeydeveloper/passkey-authenticator-aaguids/blob/main/aaguid.json), to assist with identifying and managing passkeys in user interfaces.
- **Fallback Options:** As per [FIDO Alliance UX guidelines]((https://fidoalliance.org/ux-guidelines-for-passkey-creation-and-sign-ins/)), consider including fallback options like OTPs sent via email, especially for users who may be hesitant to embrace passkeys immediately.

## Security Considerations

- **User Verification Settings:** When setting up `userVerification`, opt for `preferred` to balance security and usability. This approach ensures robust security checks on capable devices while maintaining user convenience where biometrics aren't available.
- **Strong Authentication Pre-Passkey Creation:** Emphasize strong authentication methods, such as multi-factor authentication, before passkey creation. This step is crucial to verify the legitimacy of the user, safeguarding against unauthorized access.
- **Informed Consent:** Ensure that users are fully aware of the implications of passkey creation, particularly regarding access and synchronization across different devices. It's crucial that users understand how passkeys function within the broader ecosystem of their devices and accounts.

## References

- [Passkeys.dev Bootstrapping](https://passkeys.dev/docs/use-cases/bootstrapping)
- [FIDO Alliance UX Guidelines for Passkey Creation and Sign-ins](https://fidoalliance.org/ux-guidelines-for-passkey-creation-and-sign-ins/)
- [Supporting Passkeys - Apple](https://developer.apple.com/documentation/authenticationservices/public-private_key_authentication/supporting_passkeys/)
- [Passkeys on the Web - Chrome for Developers](https://developer.chrome.com/docs/identity/passkeys/)
- [Web Authentication: An API for accessing Public Key Credentials - W3C](https://www.w3.org/TR/webauthn/)
- [Sign in with a passkey through form autofill - web.dev](https://web.dev/articles/passkey-form-autofill)