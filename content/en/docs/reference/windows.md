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

- creating and using [***device-bound*** passkeys](/docs/reference/terms/#device-bound-passkey) on the local device
- creating and using [***device-bound*** passkeys](/docs/reference/terms/#device-bound-passkey) on a FIDO2 security key

The following is also possible in both Windows 10 and 11:

- using passkeys from iOS and iPadOS devices in Chrome (108+) and Edge (108+) for signing in to web services using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- using passkeys from Android devices in Chrome (108+) and Edge (108+) for signing in to web services using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)

## Platform Notes

### Cross-Device Authentication

Windows does not currently support [FIDO Cross-Device Authentication (CDA)](/docs/reference/terms/#cross-device-authentication-cda) globally at the operating system level. CDA is available, however, directly in both Chrome and Edge on Windows 10 and 11.

Persistent linking is available between Android devices (authenticator) and Chrome and Edge (clients) on Windows. iOS and iPadOS do not support persistent linking.

## Resources

> Coming Soon
