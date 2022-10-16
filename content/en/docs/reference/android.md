---
title: "Android"
description: "Resources for passkeys in Android"
date: 2022-09-03T16:09:38.358Z
lastmod: 2022-10-12T17:26:50.879Z
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 1001
toc: true
---

{{% ds-la_b-ea_p %}}

## Overview

Passkey support in Android is currently in beta!

<a href="https://android-developers.googleblog.com/2022/10/bringing-passkeys-to-android-and-chrome.html" target="_blank"><button type="button" class="btn btn-light">Announcement <i class="bi bi-box-arrow-up-right ms-2"></i></button></a>

## Platform Notes

### Beta Notes

- The [Device Public Key (DPK)](../terms#device-public-key-dpk) extension is supported in the beta, but is currently gated behind a flag in Chrome. Developers can enable `chrome://flags/#enable-experimental-web-platform-features` to experiment with DPK on Android, or on desktop Chrome when using Cross-Device Authentication with an Android device.

## Resources

- [Security of Passkeys in the Google Password Manager](https://security.googleblog.com/2022/10/SecurityofPasskeysintheGooglePasswordManager.html)
- [Beta announcement](https://android-developers.googleblog.com/2022/10/bringing-passkeys-to-android-and-chrome.html)
- [FIDO2 API for Android](https://developers.google.com/identity/fido/android/native-apps)
- [Sample app](https://github.com/android/security-samples/tree/master/Fido)
