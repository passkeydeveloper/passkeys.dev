---
title: "Android"
description: "Resources for passkeys in Android"
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

The platform authenticator in Android 9+ has the following capabilities:

- creating and using passkeys that are backed up to Google Password Manager
- using a passkey from the local Android device to sign into services on another device (such as a laptop or desktop), using FIDO [Cross-Device Authentication](/terms#cross-device-authentication-cda)

Android 14 adds the following capabilities:

- creating and using passkeys in a [third-party passkey provider](/terms/#third-party-passkey-provider)
  - NOTE: some Android devices from a small number of OEMs do not support third party passkey providers in Android 14

## Platform Notes

### Cross-Device Authentication

Android devices can be an [authenticator](/terms/#cda-authenticator) for [FIDO Cross-Device Authentication (CDA)](/terms#cross-device-authentication-cda).

Android devices can be persistently linked to the browsers/platforms below:

- Windows 11 23H2+

macOS (Safari, Chromium-based browsers, and native apps), iOS (global), and iPadOS (global) do not support persistent linking.

When an authenticator is not persistently linked, a QR code must be scanned on every use.

### Native APIs

- **Credential Manager** is a new Android Jetpack API that supports multiple sign-in methods, including passkeys, in a single API, thus simplifying the integration for developers.

  {{< button color="light" button-size="sm" icon="fab fa-android" cue=false order="first" tooltip="Go to the Android developer docs" href="https://developer.android.com/training/sign-in/passkeys" >}}Credential Manager API{{< /button >}}

### WebViews

#### Embedded WebViews (EWV)

`WebView` is the embedded WebView (EWV) on Android. Embedded WebViews allow the calling app full control over the embedded web session, including modifying and intercepting requests, so many web platform features are limited in these contexts.

WebAuthn is currently not directly supported in embedded WebViews on Android, but adding additional code can allow you to break out of the EWV to call the platform's Credential Manager APIs.

This is documented at [Android Developer: "Integrate Credential Manager with WebView](https://developer.android.com/training/sign-in/credential-manager-webview).

> **NOTE:**
>
> Embedded WebViews run in the context of the calling app, meaning only passkeys for the linked web domain (RP ID) can be created or used for sign in.
>
> Said differently, only use EWV when sign in is handled by your own service (non-federated). When supporting multiple identity providers, System WebView should be used (see below).

{{< button color="light" button-size="sm" icon="fab fa-android" cue=false order="first" tooltip="Go to the Android developer docs" href="https://developer.android.com/develop/ui/views/layout/webapps/webview" >}}WebView docs @ Android Developer{{< /button >}}

<!-- TODO: add screenshot example -->

#### System WebViews (SWV)

`Custom Tabs` is the System WebView (SWV) on Android. All Web Platform features that are available in the user's default browser, including WebAuthn, are available in a custom tab.

Sites loaded in `Custom Tabs` are isolated from the calling app and run in the context of the top level site, just like in a full browser. This means that sign in flows on third party domains, such as a federated identity provider, can use passkeys for signing in.

{{< button color="light" button-size="sm" icon="fab fa-android" cue=false order="first" tooltip="Go to the Android developer docs" href="https://developer.chrome.com/docs/android/custom-tabs/guide-get-started" >}}Custom Tabs docs @ Android Developer{{< /button >}}

<!-- TODO: add screenshot example -->

### User Verification Behavior

Users can configure a device PIN, pattern, and/or biometric (fingerprint or face) as their device screen lock. When a user interacts with a passkey on Android, one of these available screen unlock methods is used for user verification.

When biometrics are not configured or available, both passkey creation and authentication fall back to asking for the device PIN or pattern.

#### Chrome 120

- When biometrics are not configured on Android, or not available on the device:
  - The behavior with both `userVerification='required'` and `userVerification='preferred'` are the same: it asks for the device PIN or pattern for both passkey creation and authentication. Since they fail locally if user verification fails, the server can always expect the UV flag to be `true`.
  - Calling `PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()` returns `true`.
- When a device PIN or pattern are not configured on Android:
  - The behavior with both `userVerification='required'` and `userVerification='preferred'` are the same:
    - It asks for an external security key on passkey creation. The UV flag the server receives depends on the result of user verification with the external security key.
    - It asks the user to set up a device PIN or pattern on passkey authentication. Since they fail locally before a PIN or a pattern is configured, the server does not receive a response.
  - Calling `PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()` returns `false`.

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
