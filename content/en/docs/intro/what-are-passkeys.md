---
title: "What are passkeys?"
description: "Passkeys are a replacement for passwords. A password is something that can be remembered and typed, and a passkey is a secret stored on one’s devices, unlocked with biometrics."
lead: "Passkeys are a replacement for passwords. A password is something that can be remembered and typed, and a passkey is a secret stored on one’s devices, unlocked with biometrics."
date: 2022-09-24T16:02:27.390Z
lastmod: 2022-09-24T16:02:27.390Z
draft: false
images: []
menu:
  docs:
    parent: "intro"
weight: 102
toc: true
---

Passkeys solve every single one of the problems described above.

- **Intuitive**: creating and using passkeys is as simple as consenting to save and use them. No having to create a password.
- **Automatically unique per-service**: By design, passkeys are unique per-service. There’s no chance to reuse them.
- **Breach-resistant**: A passkey is only stored on a user’s devices. RP servers store public keys. Even servers that assist in the syncing of passkeys across a user’s devices never have the ability to view or use the user's WebAuthn private keys.
- **Phishing-resistant**: Rather than trust being rooted in a human who has to verify they’re signing into the right website or app, browser, and operating systems enforce that passkeys are only ever used for the appropriate service.

Passkeys are FIDO credentials, usable in web browsers through the WebAuthn API, and usable in apps through OS-specific APIs that closely resemble WebAuthn.
