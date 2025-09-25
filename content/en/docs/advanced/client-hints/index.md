---
title: "Client Hints"
description: "The WebAuthn Client Hints feature allows a Relying Party to request a more specific credential manager or passkey selection experience from the WebAuthn client."
date: 2025-09-24T05:07:38.473Z
layout: docs
---

## Overview

When creating a passkey, WebAuthn Clients display a credential manager selection screen asking users to choose where to store their new passkey. The selector typically defaults to local credential managers because they offer immediate availability and support for synced passkeys, the default credential type in unmanaged, consumer contexts.

During a sign in flow, the WebAuthn client will do its best to help the user select a passkey which is immediately available, and fall back to an external authenticator selection screen. This typically shows an option for [FIDO Cross-Device Authentication](../reference/terms/#cross-device-authentication-cda) and security keys. In environments where only security keys are allowed, having additional options can confuse users and lead to unnecessary steps.

The WebAuthn Client Hints feature allows a Relying Party to request a more predictable experience based on their requirements. It is important to note that this is only a hint, and is not used to enforce security policy.

## Use Cases and Usage

NOTE: Additional use cases will be added in the future.

### Security Keys

The primary use case for WebAuthn Client Hints is in workforce and high assurance consumer scenarios where creating passkeys on security keys is required by policy for all or a specific group of users. In these scenarios, if a user were to attempt to create a passkey on a different type of authenticator/credential manager (ex: using cross-device and saving to their personal credential manager on their phone), the Relying Party would reject the passkey, creating confusion for the user, and leaving them somewhat stranded.

There are three primary scenarios which will be referenced throughout this page:

1. Passkeys on security keys are required for all users in the organization
2. Passkeys on security keys are required for a limited set of users in the organization (e.g. tied to a directory group)
3. Passkeys on security keys are not required for any users but are encouraged

#### Passkey Creation

Below is a mapping of the scenarios from the beginning of this article and their solutions.

| **SCENARIO**              | **SOLUTION**                                                                   |
|---------------------------|--------------------------------------------------------------------------------|
| **1** (required for all)  | Use Client Hints with your existing enrollment experience                      |
| **2** (required for some) | Use Client Hints with your existing enrollment experience                      |
| **3** (required for none) | Use Client Hints with a dedicated button                                       |

##### Scenarios 1 & 2

In both scenarios 1 and 2, Client Hints is used to prefer the security key experience during passkey creation for all users.

Simply adapt your existing passkey creation flow to use the hints parameter as shown in the sample code below:

```html
-- snip --

<button type="button" onclick="createPasskeyOnSecurityKey()">Create passkey</button>

-- snip --

<script>
  async function createPasskeyOnSecurityKey() {
    const credential = await navigator.credentials.create({
      publicKey: {
        challenge: "challenge-from-server",
        rp: { }, // omitted
        user: { }, // omitted
        pubKeyCredParams: [], // omitted
        timeout: 60000,
        hints: [ "security-key" ], // this is the WebAuthn Client Hints parameter
        authenticatorSelection: {
          residentKey: "required",
          userVerification: "preferred",
          authenticatorAttachment: "cross-platform"
        }
      }
    });
    // omitted
  };
</script>
```

{{< video src="hints-create-seckey.mp4" autoplay="true" loop="true" >}}

##### Scenario 3

For scenario 3, it is recommended to use dedicated buttons for "This device" vs "Security Key". This can help give the user a more predictable experience based on their selection.

Sample code:

```html
-- snip --

<h1>Create a passkey!</h1>

<p>Would you like to create your passkey on this device or an external USB security key?</p>

<button type="button" onclick="createPasskeyOnLocalDevice()">This device</button>

<button type="button" onclick="createPasskeyOnSecurityKey()">USB Security Key</button>

-- snip --

<script>
  async function createPasskeyOnSecurityKey() {
    const credential = await navigator.credentials.create({
      publicKey: {
        challenge: "challenge-from-server",
        rp: { }, // omitted
        user: { }, // omitted
        pubKeyCredParams: [], // omitted
        timeout: 60000,
        hints: [ "security-key" ],
        authenticatorSelection: {
          residentKey: "required",
          userVerification: "preferred",
          authenticatorAttachment: "cross-platform"
        }
      }
    });
    // omitted
  };

    async function createPasskeyOnLocalDevice() {
    const credential = await navigator.credentials.create({
      publicKey: {
        challenge: "challenge-from-server",
        rp: { }, // omitted
        user: { }, // omitted
        pubKeyCredParams: [], // omitted
        timeout: 60000,
        hints: [ "client-device" ],
        authenticatorSelection: {
          residentKey: "required",
          userVerification: "preferred",
          authenticatorAttachment: "platform"
        }
      }
    });
    // omitted
  };
</script>
```

#### Passkey Authentication

While Client Hints primarily targets passkey creation flows, it also supports specific authentication scenarios. Choose your approach based on your configuration and security requirements. Below is a mapping of the scenarios from the beginning of this article and their solutions.

| **SCENARIO**              | **SOLUTION**                                                                   |
|---------------------------|--------------------------------------------------------------------------------|
| **1** (required for all)  | Use Client Hints                                                               |
| **2** (required for some) | Use identifier-first plus an allow list                                        |
| **3** (required for none) | Don't use Client Hints or an allow list; let the WebAuthn Client do its thing  |

##### Scenario 1

In scenario 1, Client Hints is used to prefer the security key experience for all users.

Sample code for scenario 1:

```html
<!-- additional code omitted -->

<button type="button" onclick="signIn()">Sign in with a passkey</button>

<!-- additional code omitted -->

<script>
  async function signIn() {
    const credential = await navigator.credentials.get({
      publicKey: {
        challenge: "challenge-from-server",
        rpId: "", // omitted in example
        timeout: 60000,
        hints: [ "security-key" ]
      }
    });
    // additional code omitted
  };
</script>
```

##### Scenario 2

In scenario 2, an identifier-first flow is used where the user enters their username, and a request is made to the server for a list of credential IDs for the user. These are then passed in to the WebAuthn request (along with their transports) in the `allowCredentials` list. If only passkeys on security keys are included, the WebAuthn Client will show the security key experience.

Sample code:

```javascript
// call this after the user has been identified
// and the credential IDs have been looked up

async function signIn() {
  const credential = await navigator.credentials.get({
    publicKey: {
      challenge: "challenge-from-server",
      rpId: "", // omitted in example
      timeout: 60000,
      allowCredentials: [
        // the passkeys created on security keys
        // that are linked to the user's account
        {
          "id": "qx30Jbh0IJFq4Y3i7r5DY7aECNDnlH4-lldmDeshvTVFZolxwIgIBQfnoxrJKe1z",
          "type": "public-key",
          "transports": [ "nfc", "usb" ]
        },
        {
          "id": "3WiVDBng9vWlRX8Zkarc-4vpVNt8ysHFhHyYNldgf26n7eHJ4TN9AsBOr36Lsnl2",
          "type": "public-key",
          "transports": [ "usb" ]
        }
      ]
    }
  });
  // additional code omitted
};
```

##### Scenario 3

In scenario 3, there is no special configuration, allowing the WebAuthn Client to do what it believes is best based on available context that only it has.

Sample code:

```javascript
async function signIn() {
  const credential = await navigator.credentials.get({
    publicKey: {
      challenge: "challenge-from-server",
      rpId: "", // omitted in example
      timeout: 60000,
    }
  });
  // additional code omitted
};
```

## Client Hints vs Authenticator Attachment

> Coming Soon

## Additional Information

WebAuthn Client Hints support is rolling out across the ecosystem. Details about support WebAuthn Clients can be found in the [Device Support matrix](device-support#advanced).

A presentation by Tim Cappalli at Authenticate 2024 which dives into a WebAuthn Client's selection logic: ["Peeling back the passkeys onion"](https://blog.timcappalli.me/p/preso-authn24-passkeysonion/).

{{< button color="light" button-size="sm" icon="fas fa-circle-info" cue=false order="first" tooltip="Go to reference in the WebAuthn specification" href="https://www.w3.org/TR/webauthn-3/#enum-hints" >}}WebAuthn Spec Reference{{< /button >}}
