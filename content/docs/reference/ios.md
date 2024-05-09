---
title: "iOS & iPadOS"
description: "Resources for passkeys in Apple's iOS and iPadOS"
date: 2022-09-03T16:09:38.358Z
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 1003
toc: true
---

{{% ds-full %}}

## Overview

The platform authenticators in iOS 16+ and iPadOS 16+ have the following capabilities:

- creating and using passkeys that are backed up to iCloud Keychain
- creating and using passkeys on/from another device, such as:
  - an iPhone or iPad signed in to a different iCloud account, using FIDO [Cross-Device Authentication](../terms#cross-device-authentication-cda)
  - an Android phone or tablet, using FIDO [Cross-Device Authentication](../terms#cross-device-authentication-cda)
  - a FIDO2 security key<sup>1</sup>
- using a passkey from the local iOS or iPadOS device to sign into services on another device (such as a laptop or desktop), using FIDO [Cross-Device Authentication](../terms#cross-device-authentication-cda)

<p class="fs-6 text-muted"><sup>1</sup> On iOS and iPadOS, user verification methods (device PIN, biometric, etc) must already be configured on the security key prior to credential creation</p>

## Platform Notes

### Cross-Device Authentication

iOS and iPadOS support both [client](../terms/#cda-client) and [authenticator](../terms/#cda-client) roles for [Cross-Device Authentication (CDA)](../terms#cross-device-authentication-cda).

iOS and iPadOS devices (as authenticators) do not support persistent linking for Cross-Device Authentication. When an authenticator is not persistently linked, a QR code must be scanned on every use.

### Legacy Credentials

WebAuthn credentials created using the platform authenticator in iOS/iPadOS 15 and earlier ***will not*** not be converted to passkeys but will remain available for the lifetime of the device.

<!-- TODO: cross link to generic content about "upgrading to a passkey" -->
To replace a legacy platform credential with a passkey, start a credential registration ceremony and pass **the same user handle** (user.id) in the request. iOS/iPadOS will overwrite the legacy credential with a new passkey that will be backed up to iCloud Keychain.

### WebViews

#### Embedded WebViews

`WKWebView` is the embedded WebView (EWV) on iOS and iPadOS. Embedded WebViews allow the calling app full control over the embedded web session, including modifying and intercepting requests, so many web platform features are limited in these contexts.

> **NOTE:**<br>
> Embedded WebViews run in the context of the calling app, meaning only passkeys for the linked web domain (RP ID) can be created or used for sign in.
>
> Said differently, only use EWV when sign in is handled by your own service (non-federated). When supporting multiple identity providers, System WebView should be used (see below).

<a href="https://developer.apple.com/documentation/webkit/wkwebview" target="_blank"><button type="button" class="btn btn-light">WKWebView docs @ Apple Developer {{< icon-external-link size=24 >}}</button></a>

<!-- TODO: add screenshot example -->

#### System WebViews

`ASWebAuthenticationSession` is the System WebView (SWV) on iOS and iPadOS for authentication flows. All web platform features that are available in Safari, including WebAuthn, are available in a `ASWebAuthenticationSession` instance.

Sites loaded in `ASWebAuthenticationSession` are isolated from the calling app and run in the context of the top level site, just like in a full browser. This means that sign in flows on third party domains, such as a federated identity provider, can use passkeys for signing in.

<a href="https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession" target="_blank"><button type="button" class="btn btn-light">ASWebAuthenticationSession docs @ Apple Developer {{< icon-external-link size=24 >}}</button></a>

<!-- TODO: add screenshot example -->

### User Verification Behavior

When a user tries to interact with a passkey on iOS or iPadOS, an available screen unlock method is used for user verification. Users can configure a passcode and Touch ID or Face ID as their screen unlock.

Both passkey creation and authentication ask for Touch ID or Face ID if one is configured, but fallback to a passcode if they are not. iOS asks the user to configure a passcode (and Touch ID or Face ID) if not yet set up.

#### Safari on iOS / iPadOS 17

- When Touch ID or Face ID are not configured, but a passcode is configured on iOS:
  - The behavior with both `userVerification='required'` and `userVerification='preferred'` are the same: iOS asks for tapping on a "Confirmation" button, then a passcode for both passkey creation and authentication. Since they fail locally if user verification fails, the server can always expect the UV flag to be `true`.
  - Calling `PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()` always returns true.
- When a passcode is not configured on iOS:
  - The behavior with both `userVerification='required'` and `userVerification='preferred'` are the same: User verification fails, iOS asks the user to set up a passcode and then Touch ID or Face ID for both passkey creation and authentication. Since the failure happens locally, the server can expect at least a passcode is already configured and the UV flag to be `true`.
  - Calling `PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()` always returns true.

## Resources

- [Apple landing page for passkeys](https://developer.apple.com/passkeys/)
- [About the security of passkeys](https://support.apple.com/en-us/HT213305)
- [Supporting passkeys](https://developer.apple.com/documentation/authenticationservices/public-private_key_authentication/supporting_passkeys)
- [Supporting device-bound passkeys on security keys](https://developer.apple.com/documentation/authenticationservices/public-private_key_authentication/supporting_security_key_authentication_using_physical_keys)
- [Sample Code](https://developer.apple.com/documentation/authenticationservices/connecting_to_a_service_with_passkeys)
