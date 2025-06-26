---
title: "Libraries"
description: "A list of libraries for passkeys and FIDO2/WebAuthn"
date: 2022-09-24T16:02:27.390Z
layout: docs
type: docs
---

## Selection criteria

Companies that want to own passwordless authentication internally, or are looking to implement a turnkey solution for passkeys, will likely look for libraries or vendors. When selecting a library to implement passkeys, what should [Relying Party](/docs/reference/terms/#relying-party-rp) developers keep an eye on?

Note: A small set of these criteria are not specific to passkeys, but are useful
to keep in mind when selecting an open-source solution.

### WebAuthn versions and capabilities

- **Version**: Check which version of the spec the library supports ([Level 2](https://www.w3.org/TR/webauthn-2/), [Level 3](https://www.w3.org/TR/webauthn-3/)…)
- **Features and capabilities**: Check whether the library includes key features and capabilities for your use case.
  - Does the library help with generating registration and authentication options? Does it help with verification of the registration and authentication response? From a Relying Party perspective, these are the key steps of your implementation; make sure the library you select provides useful functions for these steps.
  - If you're thinking of using attestation features:
    - Does the library help leverage [FIDO MDS](https://fidoalliance.org/metadata/) in some way?
    - Can it verify all attestation statement formats?

### Verification steps

Check whether the library follows the necessary verification steps:

- During [registration](https://developers.google.com/identity/passkeys/developer-guides/server-registration#appendix_verification_of_the_registration_response)
- During [authentication](https://developers.google.com/identity/passkeys/developer-guides/server-authentication#appendix_verification_of_the_authentication_response)

### UX

If you're looking for a library offering UI elements:

- **Visual consistency**: Check that the solution uses [standardized icons](https://fidoalliance.org/passkeys/#:~:text=a%20user%E2%80%99s%20passkeys.-,Passkey%20Logo,-Look%20for%20the).
- **Clear language**: Instructions using plain language are critical for broader user understanding. Prioritize solutions aligned with the [FIDO UX guidelines](https://fidoalliance.org/ux-guidelines-for-passkey-creation-and-sign-ins/).

More UX/UI guidelines can be found on Google Identity: [Communicating passkeys to users](https://developers.google.com/identity/passkeys/ux/communicating-passkeys)
and [Passkeys user interface design](https://developers.google.com/identity/passkeys/ux/user-interface-design).

### Developer experience

- **Full-stack coverage**: A library that offers tightly-integrated frontend and backend components, like in [SimpleWebAuthn](https://simplewebauthn.dev/docs/), can streamline your integration.
- **Developer documentation**: Check that the library has a maintained docs website to ease the integration process.

### Developer involvement and maintenance

- **Open-source maintenance**: For open-source options, investigate their community activity. A few active issues, or many issues with up-to-date labels (assuming these require manual assignment), and comments by contributors, are all signals of an active community.
- Note that standards can be slow-moving! As a result, WebAuthn/passkey libraries can go a long time between updates if there aren't any real issues with it—but it doesn't mean they're unmaintained.

### Licensing

Review the solution's licensing model (e.g., MIT, Apache, commercial) in the
context of your project.

## Updated for passkeys

### Rust

- [webauthn_rs: WebAuthn for Rust Server Applications](https://docs.rs/webauthn-rs/latest/webauthn_rs/) (William Brown)

### TypeScript

- [SimpleWebAuthn](https://simplewebauthn.dev/) (Matthew Miller)
- [@passwordless-id/webauthn](https://webauthn.passwordless.id) (Arnaud Dagnelies)

### Java

- [java-webauthn-server](https://github.com/Yubico/java-webauthn-server) ([Yubico](https://developers.yubico.com/java-webauthn-server/))

## Other FIDO2/WebAuthn libraries

The ["Awesome WebAuthn"](https://github.com/herrjemand/awesome-webauthn) GitHub repo is also regularly updated with libraries from the community.

### .NET

- [FIDO2 .NET Library](https://fido2-net-lib.passwordless.dev/) (Anders Åberg, Alex Seigler)
- [Passkeys for ASP.NET](https://www.identityserver.com/products/fido2-for-aspnet) (IdentityServer.com)
- [WebAuthn.Net](https://github.com/dodobrands/WebAuthn.Net) (Dodo Brands)

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

### Swift

- [Swift WebAuthn](https://github.com/swift-server/swift-webauthn) ([Swift Server Workgroup](https://www.swift.org/sswg/))

### Zig

- [Passcay](https://github.com/uzyn/passcay) (U-Zyn Chua)
