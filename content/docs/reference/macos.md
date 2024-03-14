---
title: "macOS"
description: "Resources for passkeys in Apple macOS"
date: 2022-09-03T16:09:38.358Z
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 1004
toc: true
---

{{% ds-full %}}

## Overview

The platform authenticator in macOS Ventura (13) has the following capabilities:

- creating and using passkeys that are backed up to iCloud Keychain
- creating and using passkeys on/from another device, such as:
  - an iPhone or iPad signed in to a different iCloud account, using FIDO [Cross-Device Authentication](../terms#cross-device-authentication-cda)
  - an Android device, using FIDO [Cross-Device Authentication](../terms#cross-device-authentication-cda)
  - a FIDO2 security key<sup>1</sup>

<p class="fs-6 text-muted"><sup>1</sup> On macOS, user verification methods (device PIN, biometric, etc) must already be configured on the security key prior to credential creation</p>

## Platform Notes

### Cross-Device Authentication

macOS does not currently support persistent linking of external authenticators for [Cross-Device Authentication](../terms#cross-device-authentication-cda) at the operating system level.

Persistent linking is available between Android devices (authenticator) and Chrome and Edge (clients) on macOS.

When an authenticator is not persistently linked, a QR code must be scanned on every use.

### Legacy Credentials

WebAuthn credentials created using the platform authenticator in macOS Monterey (12) and earlier ***will not*** be converted to passkeys but will remain available for the lifetime of the device.

<!-- TODO: cross link to generic content about "upgrading to a passkey" -->
To replace a legacy platform credential with a passkey, start a credential registration ceremony and pass **the same user handle** (user.id) in the request. macOS will overwrite the legacy credential with a new passkey that will be backed up to iCloud Keychain.

### Browser Behavior

**Edge**: credentials created by Edge are currently [***device-bound*** passkeys](/docs/reference/terms/#device-bound-passkey), are not backed up to iCloud Keychain, and are ***not available outside of Edge***.

### User Verification Behavior

On macOS, the user must set up a local system password. Enabling iCloud Keychain and setting up Touch ID are optional.

#### Safari on macOS 14

- When iCloud Keychain is not enabled and Touch ID is not configured on macOS:
  - The behavior for `userVerification='required'` is:
    - macOS asks the user to enable iCloud Keychain on passkey creation. Since user verification fails locally at this point, the server does not receive a credential.
    - On passkey authentication, macOS asks the user to enter the local system password or use Touch ID (if configured).
  - The behavior on `userVerification='preferred'` is:
    - macOS asks the user to enable iCloud Keychain on passkey creation. Since user verification fails locally at this point, the server does not receive a credential.
    - On passkey authentication:
      - If Touch ID is not configured, macOS skips user verification and returns the UV flag as `false`.
      - If Touch ID is configured, macOS asks for user verification with Touch ID and returns the UV flag as `true`.
  - Calling `PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()` always returns true.
- When iCloud Keychain is enabled, but Touch ID is not configured on macOS or not available on the device (e.g. laptop lid is closed):
  - `userVerification='required'` asks the user to enter the local system password on both passkey creation and authentication. Since they fail locally if Touch ID setup fails, the server can always expect the UV flag to be `true`.
  - `userVerification='preferred'` skips user verification both on passkey creation and authentication. The UV flag is always `false`.
  - Calling `PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()` always returns true.

#### Chrome 120 with iCloud Keychain on macOS 14

- When iCloud Keychain is not enabled and Touch ID is not configured on macOS:
  - The behavior on `userVerification='required'`:
    - macOS asks the user to enable iCloud Keychain on passkey creation. The UV flag sent to the server depends on the fallback user verification result.
    - On passkey authentication, macOS asks the user to enter the system password or use Touch ID (if configured). When user verification succeeds, it returns a credential with the UV flag as `true`, otherwise it fails locally.
  - The behavior on `userVerification='preferred'`:
    - macOS asks the user to enable iCloud Keychain on passkey creation. The UV flag sent to the server depends on the fallback user verification result.
    - On passkey authentication, it skips user verification immediately and returns a credential with the UV flag as `false`.
      - If Touch ID is configured, macOS asks for user verification with Touch ID.The UV flag sent to the server depends on the fallback user verification result.
  - Calling `PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()` always returns `true`.
- When iCloud Keychain is enabled, but Touch ID is not configured on macOS or not available on the device (e.g. laptop lid is closed):
  - `userVerification='required'` asks for the system password on both passkey creation and passkey authentication. Since they fail locally if user verification fails, the server can always expect the UV flag to be `true`.
  - `userVerification='preferred'` skips user verification and returns the UV flag as `false` for both passkey creation and passkey authentication.
  - Calling `PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()` always returns `true`.

## Resources

- [Apple landing page for passkeys](https://developer.apple.com/passkeys/)
- [About the security of passkeys](https://support.apple.com/en-us/HT213305)
- [Supporting passkeys](https://developer.apple.com/documentation/authenticationservices/public-private_key_authentication/supporting_passkeys)
- [Supporting device-bound passkeys on security keys](https://developer.apple.com/documentation/authenticationservices/public-private_key_authentication/supporting_security_key_authentication_using_physical_keys)
- [Sample Code](https://developer.apple.com/documentation/authenticationservices/connecting_to_a_service_with_passkeys)
