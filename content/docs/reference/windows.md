---
title: "Windows"
description: "Resources for passkeys in Microsoft Windows"
date: 2022-09-03T16:09:38.358Z
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 1005
toc: true
---

{{% ds-cdaps %}}

## Overview

Windows Hello, the local platform authenticator in Windows 10 and 11, has the following capabilities:

- creating and using [***device-bound*** passkeys](../terms#device-bound-passkey) on the local device
- creating and using [***device-bound*** passkeys](../terms#device-bound-passkey) on a FIDO2 security key

The following is also possible in both Windows 10 and 11:

- using passkeys from iOS and iPadOS devices in Chrome (108+) and Edge (108+) for signing in to web services using [FIDO Cross-Device Authentication](../terms#cross-device-authentication-cda)
- using passkeys from Android devices in Chrome (108+) and Edge (108+) for signing in to web services using [FIDO Cross-Device Authentication](../terms#cross-device-authentication-cda)

## Platform Notes

- The [authenticatorAttachment property of responses](https://w3c.github.io/webauthn/#dom-publickeycredential-authenticatorattachment), planned for specification delivery in WebAuthn L3, is not currently available in responses to `navigator.credentials.get` when using the platform authenticator or a hardware security key. It is supplied during credential creation, or when using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda) for an authentication ceremony.

### Cross-Device Authentication

Windows does not currently support [FIDO Cross-Device Authentication (CDA)](../terms#cross-device-authentication-cda) globally at the operating system level. CDA is available, however, directly in both Chrome and Edge on Windows 10 and 11.

Persistent linking is available between Android devices (authenticator) and Chrome and Edge (clients) on Windows. iOS and iPadOS do not support persistent linking.

### User Verification Behavior

When a user tries to interact with a passkey on Windows 11, an available screen unlock method is used for user verification via Windows Hello. Starting in Windows 11 22H2, users must set up Windows Hello with at least a device PIN. Setting up facial recognition or fingerprint recognition are optional.

Where these biometrics are not configured or available, both passkey creation and authentication fall back to asking for the Windows Hello PIN.

#### Chrome 120

- When biometrics are not configured on Windows, or not available on the device:
  - The behavior for both `userVerification='required'` and `userVerification='preferred'` are the same: Windows Hello asks for the device PIN for both passkey creation and authentication. Since they fail locally if user verification fails, the server can always expect the UV flag to be `true`.
  - Calling `PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()` returns `true`.

## Resources

> Coming Soon
