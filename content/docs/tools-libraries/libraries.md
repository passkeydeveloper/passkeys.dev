---
title: "Libraries"
description: "A list of libraries for passkeys and FIDO2/WebAuthn"
lead: ""
date: 2022-09-24T16:02:27.390Z
draft: false
images: []
menu:
  docs:
    parent: "tools-libraries"
weight: 701
toc: true
---

## Selection criteria

Companies that want to own passwordless authentication internally, or are
looking to implement a turnkey solution for passkeys, will likely look for
libraries or vendors. When selecting a library to implement passkeys, what
should [Relying Party](/docs/reference/terms/#relying-party-rp) developers keep an eye on?

Note: A small set of these criteria are not specific to passkeys, but are useful
to keep in mind when selecting an open-source solution.

### WebAuthn versions and capabilities

-   **Version.** Check which version of the spec the library supports ([Level
    2](https://www.w3.org/TR/webauthn-2/), [Level
    3](https://www.w3.org/TR/webauthn-3/)…)
-   **Features and capabilities**. Check whether the library includes key
    features and capabilities for your use case.
    -   Does the library help with generating registration and authentication
        options? Does it help with verification of the registration and
        authentication response? From a Relying Party perspective, these are the
        key steps of your implementation; make sure the library you select
        provides useful functions for these steps.
    -   If you're thinking of using attestation features:
        -   Does the library help leverage [FIDO
            MDS](https://fidoalliance.org/metadata/) in some way?
        -   Can it verify all attestation statement formats?
    -   Does the library support [conditional
        UI](https://github.com/w3c/webauthn/wiki/Explainer%3A-WebAuthn-Conditional-UI)
        (sending empty `allowCredentials`)?

### Security

This is not a comprehensive security checklist; this only outlines a few
critical elements. Make sure to run the library through your usual security
reviews / audits.

-   **Challenge parameters:** Ensure the solution follows the [challenge
    length](https://www.w3.org/TR/webauthn-3/#sctn-cryptographic-challenges) and
    [timeout](https://www.w3.org/TR/webauthn-3/#sctn-createCredential)
    recommended in the specification.
-   **User ID:** Prioritize solutions that encourage random identifiers, to
    enhance user privacy. Passkeys should be
    [free](https://www.w3.org/TR/webauthn-3/#sctn-user-handle-privacy) of
    personally identifying information (PII). `user.id` should be a [completely
    random
    identifier](https://www.w3.org/TR/webauthn-2/#dom-publickeycredentialuserentity-id),
    and should be different from the ID you've assigned to a user internally.
-   **Verification steps: **Check whether the library follows verification
    steps, during
    [registration](https://developers.devsite.corp.google.com/identity/passkeys/developer-guides/server-registration)
    and
    [authentication](https://developers.devsite.corp.google.com/identity/passkeys/developer-guides/server-authentication).

### UX

If you're looking for a library offering UI elements:

-   **Visual consistency:** Check that the solution uses [standardized
    icons](https://fidoalliance.org/passkeys/#:~:text=a%20user%E2%80%99s%20passkeys.-,Passkey%20Logo,-Look%20for%20the).
-   **Clear language:** Instructions using plain language are critical for
    broader user understanding. Prioritize solutions aligned with the [FIDO UX
    guidelines](https://fidoalliance.org/ux-guidelines-for-passkey-creation-and-sign-ins/).

More UX/UI guidelines can be found on Google Identity: [Communicating passkeys
to
users](https://developers.google.com/identity/passkeys/ux/communicating-passkeys)
and [Passkeys user interface
design](https://developers.google.com/identity/passkeys/ux/user-interface-design).

### Developer experience

-   **Full-stack coverage:** A library that offers tightly-integrated frontend
    and backend components, like in
    [SimpleWebAuthn](https://simplewebauthn.dev/docs/), can streamline your
    integration.
-   **Developer documentation: **Has a maintained docs website to ease the
    integration process.

### Developer involvement and maintenance

-   **Standards participation: **Solution maintainers who are active in shaping
    WebAuthn standards signal expertise. Check whether the maintainers are
    active in the standards process in some way, in groups such as the [Web
    Authentication Working Group (WAWG)](https://www.w3.org/groups/wg/webauthn/)
    or the [WebAuthn Adoption Community Group
    (WACG)](https://www.w3.org/groups/cg/webauthn-adoption/). The w3c webAuthn
    [contributor list](https://github.com/w3c/webauthn/graphs/contributors) can
    be a good place to check.
-   **Open-source maintenance: **For open-source options, investigate their
    community activity. A few active issues, or many issues with up-to-date
    labels (assuming these require manual assignment), and comments by
    contributors, are all signals of an active community.
-   Note that standards can be slow-moving! As a result, WebAuthn/passkey
    libraries can go a long time between updates if there aren't any real issues
    with it—but it doesn't mean they're unmaintained.

### Licensing

Review the solution's licensing model (e.g., MIT, Apache, commercial) in the
context of your project.

## Updated for passkeys

### Rust

- [webauthn_rs: WebAuthn for Rust Server Applications](https://docs.rs/webauthn-rs/latest/webauthn_rs/) (William Brown)

### TypeScript

- [SimpleWebAuthn](https://simplewebauthn.dev/) (Matthew Miller)

### Java

- [java-webauthn-server](https://github.com/Yubico/java-webauthn-server) ([Yubico](https://developers.yubico.com/java-webauthn-server/))

## Other FIDO2/WebAuthn libraries

The ["Awesome WebAuthn"](https://github.com/herrjemand/awesome-webauthn) GitHub repo is also regularly updated with libraries from the community.

### .NET

- [FIDO2 .NET Library](https://fido2-net-lib.passwordless.dev/) (Anders Åberg, Alex Seigler)

### Go

- [Go WebAuthn Library](https://github.com/go-webauthn/webauthn) (Fork of Duo Labs library)

### Java

- [WebAuthn4J](https://github.com/webauthn4j/webauthn4j) (Yoshikazu Nojima)

### Python

- [py_webauthn](https://github.com/duo-labs/py_webauthn) (Duo Labs)

### Ruby

- [webauthn-ruby](https://github.com/cedarcode/webauthn-ruby) (Cedarcode)
- [devise-passkeys](https://github.com/ruby-passkeys/devise-passkeys) (Ruby Passkeys, wrapper around `webauthn-ruby`)
- [warden-webauthn](https://github.com/ruby-passkeys/warden-webauthn) (Ruby Passkeys, wrapper around `webauthn-ruby`)
