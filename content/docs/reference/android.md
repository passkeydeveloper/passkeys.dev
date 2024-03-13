---
title: "Android"
description: "Resources for passkeys in Android"
date: 2022-09-03T16:09:38.358Z
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 1001
toc: true
---

{{% ds-pa %}}

## Overview

The platform authenticator in Android 9+ has the following capabilities:

- creating and using passkeys that are backed up to Google Password Manager
- using a passkey from the local Android device to sign into services on another device (such as a laptop or desktop), using FIDO [Cross-Device Authentication](../terms#cross-device-authentication-cda)

Android 14 adds the following capabilities:

- creating and using passkeys in a [third-party passkey provider](../terms/#third-party-passkey-provider)

### Cross-Device Authentication

Android devices can be an [authenticator](../terms/#cda-authenticator) for [FIDO Cross-Device Authentication (CDA)](../terms#cross-device-authentication-cda).

Android devices can be persistently linked to the browsers/platforms below:

- Chrome OS
- Windows 11 23H2
- Chrome & Edge on Windows 11 <23H2
- Chrome & Edge on Windows 10
- Chrome on macOS
- Edge on macOS
- Chrome on Ubuntu
- Edge on Ubuntu

macOS (Safari and native apps), iOS (global), and iPadOS (global) do not support persistent linking.

When an authenticator is not persistently linked, a QR code must be scanned on every use.

## Platform Notes

- **Credential Manager** is a new Android Jetpack API that supports multiple sign-in methods, including passkeys, in a single API, thus simplifying the integration for developers.<br><br><a href="https://developer.android.com/training/sign-in/passkeys" target="_blank"><button type="button" class="btn btn-light">Credential Manager API <i class="bi bi-box-arrow-up-right ms-2"></i></button></a><br><br><a href="https://developer.android.com/training/sign-in/fido2-migration" target="_blank"><button type="button" class="btn btn-light">FIDO2 API to Credential Manager Migration <i class="bi bi-box-arrow-up-right ms-2"></i></button></a>

### User Verification Behavior

When a user tries to interact with a passkey on Android, one of screen lock methods is used for user verification. Users can configure a device PIN or a pattern and biometric (fingerprint or face) as their screen lock.

Where these biometrics are not configured or available, both passkey creation and authentication fall back to asking for the device PIN or pattern.

#### Chrome 120

- When biometrics are not configured on Android, or not available on the device:
  - The behavior with both `userVerification='required'` and `userVerification='preferred'` are the same: it asks for the device PIN or pattern for both passkey creation and authentication. Since they fail locally if user verification fails, the server can always expect the UV flag to be `true`.
  - Calling `PublicKeyCredential.isUserVerifyingPlatformAuthenticator()` returns `true`.
- When a device PIN or pattern are not configured on Android:
  - The behavior with both `userVerification='required'` and `userVerification='preferred'` are the same:
    - It asks for an external security key on passkey creation. The UV flag the server receives depends on the result of user verification with the external security key.
    - It asks the user to set up a device PIN or pattern on passkey authentication. Since they fail locally before a PIN or a pattern is configured, the server does not receive a response.
  - Calling `PublicKeyCredential.isUserVerifyingPlatformAuthenticator()` returns `false`.

## Resources

### Docs

- Adding passkeys support to native Android apps: [User authentication with passkeys](https://developer.android.com/design/ui/mobile/guides/patterns/passkeys)
- [Security of Passkeys in the Google Password Manager](https://security.googleblog.com/2022/10/SecurityofPasskeysintheGooglePasswordManager.html)

### Videos

- [Passkeys: a simpler and safer sign-in (Google I/O 2023)](https://www.youtube.com/watch?v=SF8ueIn2Nlc)
- [Reduce reliance on passwords in Android apps with passkey support (Google I/O 2023)](https://www.youtube.com/watch?v=36peNZUlgzU)
- [Learn how to implement passkeys with form autofill in a web app(Google I/O 2023)](https://www.youtube.com/watch?v=_qSCYiU_Yr4)

### Sample Code

- [Credential Manager Sample app](https://github.com/android/identity-samples/tree/main/CredentialManager)

### Community Resources

- [Sample native app with passkey support from Dashlane](https://github.com/Dashlane/android-passkey-example)
