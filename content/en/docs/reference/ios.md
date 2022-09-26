---
title: "iOS & iPadOS"
description: "Resources for passkeys in Apple's iOS and iPadOS"
date: 2022-09-03T16:09:38.358Z
lastmod: 2022-09-26T18:19:03.365Z
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 915
toc: true
---

{{% ds-full %}}

## Overview

The platform authenticators in iOS 16+ and iPadOS 16+ have the following capabilities:

- creating and using passkeys that are backed up to iCloud Keychain
- creating and using passkeys on/from another device, such as:
  - an iPhone or iPad signed in to a different iCloud account
  - a FIDO2 security key

## Platform Notes

WebAuthn credentials created using the platform authenticator in iOS/iPadOS 15 and earlier ***will not*** not be converted to passkeys but will remain available for the lifetime of the device.

<!-- TODO: cross link to generic content about "upgrading to a passkey" -->
To replace a legacy platform credential with a passkey, start a credential registration ceremony and pass **the same user handle** (user.id) in the request. iOS/iPadOS will overwrite the legacy credential with a new passkey that will be backed up to iCloud Keychain.

## Resources

- [Apple landing page for passkeys](https://developer.apple.com/passkeys/)
- [Supporting passkeys](https://developer.apple.com/documentation/authenticationservices/public-private_key_authentication/supporting_passkeys)
- [Supporting single-device passkeys on security keys](https://developer.apple.com/documentation/authenticationservices/public-private_key_authentication/supporting_security_key_authentication_using_physical_keys)
- [Sample Code](https://developer.apple.com/documentation/authenticationservices/connecting_to_a_service_with_passkeys)
