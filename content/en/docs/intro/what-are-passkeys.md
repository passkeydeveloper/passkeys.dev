---
title: "What are passkeys?"
description: "Passkeys are a replacement for passwords. A password is something that can be remembered and typed, and a passkey is a secret stored on one’s devices, unlocked with biometrics."
date: 2022-09-24T16:02:27.390Z
layout: docs
weight: 10
aliases:
  - "/docs/intro/"
  - "/docs/"
---



## Passkeys are:

{{< card-group padding="3" gutter="3" cols="2" wrapper="mt-4 mb-5">}}
    {{< card title="Intuitive" icon="fa-solid fa-wand-magic-sparkles" align="center">}}
        Creating and using passkeys is as simple as consenting to save and use them. No having to create a password.
    {{< /card >}}
    {{< card title="Automatically unique" icon="fa-regular fa-snowflake" align="center">}}
        By design, passkeys are unique per-service. There’s no chance to reuse them.
    {{< /card >}}
    {{< card title="Breach-resistant" icon="fa-solid fa-people-robbery" align="center">}}
        A passkey is only stored on a user’s devices. [Relying Party (RP)](/docs/reference/terms/#relying-party-rp) servers store public keys. Even servers that assist in the syncing of passkeys across a user’s devices never have the ability to view or use the private keys for a user's passkeys.
    {{< /card >}}
    {{< card title="Phishing-resistant" icon="fa-solid fa-user-shield" align="center">}}
        Rather than trust being rooted in a human who has to verify they’re signing into the right website or app, browsers and operating systems enforce that passkeys are only ever used for the appropriate service.
    {{< /card >}}
{{< /card-group >}}

> The guidance on this site is currently targeted towards sites and services that are using either password only or password + OTP (SMS, app TOTP, app push, magic link) sign in flows. Future guidance will include more advanced and higher assurance scenarios.
