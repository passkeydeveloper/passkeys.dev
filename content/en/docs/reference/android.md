---
title: "Android"
description: "Resources for passkeys in Android"
date: 2022-09-03T16:09:38.358Z
lastmod: 2022-11-21T18:04:47.207Z
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

## Platform Notes

- The [Device Public Key (DPK)](../terms#device-public-key-dpk) extension is supported in beta, but is currently gated behind a flag in Chrome. Developers can enable `chrome://flags/#enable-experimental-web-platform-features` to experiment with DPK on Android, or on desktop Chrome when using [Cross-Device Authentication](../terms#cross-device-authentication-cda) with an Android device.

## Resources

- [Security of Passkeys in the Google Password Manager](https://security.googleblog.com/2022/10/SecurityofPasskeysintheGooglePasswordManager.html)
- [Beta announcement](https://android-developers.googleblog.com/2022/10/bringing-passkeys-to-android-and-chrome.html)
- [FIDO2 API for Android](https://developers.google.com/identity/fido/android/native-apps)
- [Sample app](https://github.com/android/security-samples/tree/master/Fido)
