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

- creating and using [***single-device*** passkeys](/docs/reference/terms/#single-device-passkey) that are bound to the local device
- creating and using [***single-device*** passkeys](/docs/reference/terms/#single-device-passkey) on a FIDO2 security key

The following is also possible in both Windows 10 and 11:

- using passkeys from iOS and iPadOS devices in Chrome (108+) and Edge (108+) for signing in to web services using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- using passkeys from Android devices in Chrome (108+) and Edge (108+) for signing in to web services using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)

## Platform Notes

- the [authenticatorAttachment property of responses](https://w3c.github.io/webauthn/#dom-publickeycredential-authenticatorattachment), planned for specification delivery in WebAuthn L3, is not currently available in responses to `navigator.credentials.get` when using the platform authenticator or a hardware security key. It is supplied during credential creation, or when using the hybrid flow for authentication.

## Resources

> Coming Soon
