---
title: "macOS"
description: "Resources for passkeys in Apple macOS"
date: 2022-09-03T16:09:38.358Z
type: docs
layout: docs
---

{{< card-group padding="3" gutter="3" cols="2">}}
    {{< card title="Local Authenticator" align="center" color="body" icon="fas fa-circle-check fa-2xl" icon-style="text-success">}}
        (create and use passkeys from the local device)
    {{< /card >}}
    {{< card title="External Authenticator" align="center" color="body" icon="fas fa-circle-check fa-2xl" icon-style="text-success">}}
        (create and use passkeys from another device)
    {{< /card >}}
{{< /card-group >}}

## Overview

The platform authenticator in macOS Ventura (13) has the following capabilities:

- creating and using passkeys saved to Apple Passwords
- creating and using passkeys on/from another device, such as:
  - an iPhone or iPad signed in to a different Apple Account, using FIDO [Cross-Device Authentication](/terms#cross-device-authentication-cda)
  - an Android device, using FIDO [Cross-Device Authentication](/terms#cross-device-authentication-cda)
  - a FIDO2 security key{{< sup 1 >}}

{{< unsafe >}}
<!-- markdownlint-disable no-inline-html -->
<p class="fs-6 text-muted text-end">{{< sup 1 >}} On macOS, user verification methods (device PIN, biometric, etc) must already be configured on the security key prior to credential creation</p>
<!-- markdownlint-enable no-inline-html -->
{{< /unsafe >}}

## Platform Notes

### Cross-Device Authentication

macOS does not currently support persistent linking of external authenticators for [Cross-Device Authentication](/terms#cross-device-authentication-cda) at the operating system level.

Persistent linking is available between Android devices (authenticator) and Chrome and Edge (clients) on macOS.

When an authenticator is not persistently linked, a QR code must be scanned on every use.

### Legacy Credentials

WebAuthn credentials created using the platform authenticator in macOS Monterey (12) and earlier ***will not*** be converted to passkeys but will remain available for the lifetime of the device.

<!--  TODO: cross link to generic content about "upgrading to a passkey" -->
To replace a legacy platform credential with a passkey, start a credential registration ceremony and pass **the same user handle** (user.id) in the request. macOS will overwrite the legacy credential with a new passkey that will be saved to Apple Passwords.

### WebViews

#### Embedded WebViews

`WKWebView` is the embedded WebView (EWV) on macOS. Embedded WebViews allow the calling app full control over the embedded web session, including modifying and intercepting requests, so many web platform features are limited in these contexts.

> **NOTE:**
>
> Embedded WebViews run in the context of the calling app, meaning only passkeys for the linked web domain (RP ID) can be created or used for sign in.
>
> Said differently, only use EWV when sign in is handled by your own service (non-federated). When supporting multiple identity providers, System WebView should be used (see below).

{{< button color="light" button-size="sm" icon="fab fa-apple" cue=false order="first" tooltip="Go to the Apple developer docs" href="https://developer.apple.com/documentation/webkit/wkwebview" >}}WKWebView docs @ Apple Developer{{< /button >}}

<!-- TODO: add screenshot example -->

#### System WebViews

`ASWebAuthenticationSession` is the System WebView (SWV) on macOS for authentication flows. The user's default web browser will be invoked, allowing any supported Web Platform features, including WebAuthn, for the `ASWebAuthenticationSession` instance.

Sites loaded in `ASWebAuthenticationSession` are isolated from the calling app and run in the context of the top level site, just like in a full browser instance. This means that sign in flows on third party domains, such as a federated identity provider, can use passkeys for signing in.

{{< button color="light" button-size="sm" icon="fab fa-apple" cue=false order="first" tooltip="Go to the Apple developer docs" href="https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession" >}}ASWebAuthenticationSession docs @ Apple Developer{{< /button >}}

<!-- TODO: add screenshot example -->

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
