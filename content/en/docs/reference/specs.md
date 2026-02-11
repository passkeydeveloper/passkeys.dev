---
title: "Specifications"
description: "List of specifications that enable passkeys"
date: 2022-08-04T17:33:14.682Z
weight: 407
layout: docs

---

The two primary technical specifications that work together to enable passkeys are Web Authentication, commonly referred to as WebAuthn, and the Client to Authenticator Protocol (CTAP), commonly referred to as FIDO2.

The two specs together are often referred to as one stack, ***FIDO2/WebAuthn***.

## W3C Web Authentication (WebAuthn)

WebAuthn is the primary specification used by developers.

Platforms also create their own platform-specific abstractions of the WebAuthn API for use by native apps.

**Current Version**: [WebAuthn Level 2](https://www.w3.org/TR/webauthn-2/)

***Next Version***: [WebAuthn Level 3](https://www.w3.org/TR/webauthn-3/)

## Client to Authenticator Protocol (CTAP)

The FIDO *Client to Authenticator Protocol*, often referred to by its acronym CTAP, is responsible for communications with the authenticator over a number of transports including USB, NFC, and Bluetooth. Operating systems, and in some cases apps, utilize this protocol to pass requests from WebAuthn to the appropriate authenticator over its desired transport.

CTAP is implemented by authenticator and device vendors and abstracts away all of the complexity of interacting with authenticators from relying parties and developers.

***Current Version***: [CTAP 2.2](https://fidoalliance.org/specs/fido-v2.2-ps-20250714/fido-client-to-authenticator-protocol-v2.2-ps-20250714.html)

***Next Version***: CTAP 2.3

The next version of CTAP is currently under development at the FIDO Alliance.
