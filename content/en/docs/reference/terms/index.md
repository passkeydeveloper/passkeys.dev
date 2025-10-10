---
title: "Terms"
description: "A list of terms which are used frequently throughout this site and in discussions about passkeys, FIDO2, and WebAuthn."
date: 2020-11-12T13:26:54+01:00
layout: docs
---

## 2FA user

A user whose account has [2FA](#2-factor-authentication-2fa) turned on, i.e., who must present 2 authentication factors during sign-in.

## 2-Factor Authentication (2FA)

> _also sometimes referred to as MFA: multi-factor authentication or 2SV: two-step verification_

This refers to a contract between a user and a [Relying Party (RP)](#relying-party-rp) where the RP must collect at least two distinct authentication factors from the user during a [bootstrap](#account-bootstrapping) sign-in.

## Account bootstrapping

A [Relying Party (RP)](#relying-party-rp) authenticates a user without any prior knowledge of who the user is. This means that the RP not only has to verify the identity of the user (checking the password, verifying cryptographic signatures, etc), it also has to establish the identity of the user (figure out the user id, username, etc. of the user who’s signing in). This may happen when a user signs into an existing account for the first time on a newly-purchased device; or when a user logs into a website for the first time in a given browser instance. Or when a user logs into a website in a private browsing session. Or when a user signs into a mobile app for the first time on a given device (contrast this with [reauthentication](#reauthentication) below).

> Note that this is different from creating an account with a service in the first place.

## Attestation

Attestation is an optional statement provided by an authenticator which can be used by a Relying Party to identify and verify the provenance of the authenticator.

{{< button color="light" button-size="sm" icon="fas fa-circle-info" cue=false order="first" tooltip="Go to reference in the WebAuthn specification" href="https://www.w3.org/TR/2021/REC-webauthn-2-20210408/#sctn-attestation" >}}WebAuthn Spec Reference{{< /button >}}

## Authentication factor

Information provided by a user (or one of the user’s devices) for purposes of authentication, usually in response to a login challenge. Often categorized into "knowledge factors" (e.g. passwords), "something you have" factors (e.g. another already signed-in device), and "something you are" factors (e.g. biometrics). Note that a single login challenge may collect multiple factors simultaneously.

## Autofill UI

A privacy preserving list UI element that is rendered by the browser (or the OS platform in the case of native apps), in cooperation with the platform authenticator, on username and/or password fields that have the `webauthn` value included in the `autocomplete` attribute.

This UI element provides a list of passkeys that are available for the [Relying Party (RP)](#relying-party-rp) on the local device, and may also provide an option to kick off [Cross-Device Authentication (CDA)](#cross-device-authentication-cda) or use a FIDO2 security key.

{{< image src="pkdd-signin-username-autofill.png" class="col-10 col-md-7" wrapper="text-center" caption="A generic example of an autofill UI for passkeys" title="Sample sign in screen with the autofill UI rendered under the username field, showing a passkey for bob@example.com, an other accounts option and a passkey from another device option">}}

The technical name for this feature in the WebAuthn and Credential Management specifications is "Conditional Mediation".

{{< button color="light" button-size="sm" icon="fas fa-circle-info" cue=false order="first" tooltip="Go to reference in the WebAuthn specification" href="https://w3c.github.io/webauthn/#dom-publickeycredential-isconditionalmediationavailable" >}}WebAuthn Spec Reference{{< /button >}}

{{< button color="light" button-size="sm" icon="fas fa-circle-info" cue=false order="first" tooltip="Go to reference in the Credential Management specification" href="https://w3c.github.io/webappsec-credential-management/#mediation-requirements">}}
   Credential Management Spec Reference
{{< /button >}}

## Credential Manager

The general term for a software or hardware component that securely stores, manages, and controls access to digital credentials and secrets, such as passkeys, passwords, OTP seeds, and verifiable digital credentials (VDCs).

More specific examples of credential managers include password managers, digital identity wallets, [passkeys providers](#passkey-provider), and authenticators.

## Cross-Device Authentication (CDA)

FIDO Cross-Device Authentication (CDA) allows a passkey from one device to be used to sign in on another device. For example, your phone can be linked to your laptop, allowing you to use a passkey from your phone to sign into a service on your laptop.

CDA is powered by the FIDO Client-to-Authenticator Protocol (CTAP) using "hybrid" transport. CTAP is implemented by authenticators and client platforms, not Relying Parties.

### CDA Client

The _client_ in a cross-device authentication flow is the device where the relying party is being actively accessed.

### CDA Authenticator

The _authenticator_ in a cross-device authentication flow is the device generating the FIDO assertion.

## Conditional Mediation

See [_Autofill UI_](#autofill-ui)

## Conditional UI

See [_Autofill UI_](#autofill-ui)

## Conditional Create

A WebAuthn capability which allows a Relying Party to request the creation of a passkey after a successful sign in user another credential from their credential manager, such as a password.

Note:

- The browser, operating system, and credential manager must all support conditional create.
- `conditionalCreate` in getClientCapabilities() represents only the browser's support for the capability and does signal OS and/or credential manager support.

{{< button color="light" button-size="sm" icon="fas fa-circle-info" cue=false order="first" tooltip="Go to reference in the WebAuthn specification" href="https://www.w3.org/TR/webauthn-3/#sctn-createCredential" >}}WebAuthn Spec Reference{{< /button >}}

## Credential Exchange

A standardized process to securely transfer passkeys, passwords, and other types of information from one [passkey provider](#passkey-provider) to another.

{{< button color="light" button-size="sm" icon="fas fa-circle-info" cue=false order="first" tooltip="Go to the FIDO Credential Exchange Specifications" href="https://fidoalliance.org/specifications-credential-exchange-specifications/" >}}FIDO Credential Exchange Specifications{{< /button >}}

## Device-bound passkey

A FIDO2 [Discoverable Credential](#discoverable-credential) that is bound to a single authenticator. For example, FIDO2 security keys typically hold device-bound passkeys as the credential cannot leave the device. Device-bound passkeys have been previously referred to as _single-device passkeys_.

## Discoverable Credential

A Discoverable Credential (known in previous version of WebAuthn as a "resident credential" or "resident key") is a FIDO2/WebAuthn credential that can be used by a user to log in to a relying party without initially providing a user ID. As such, all parts of the credential are entirely stored in the authenticator (private key, credential ID, user handle, and other metadata).

[Passkeys](#passkey) are Discoverable Credentials.

{{< button color="light" button-size="sm" icon="fas fa-circle-info" cue=false order="first" tooltip="Go to reference in the WebAuthn specification" href="https://www.w3.org/TR/webauthn-2/#discoverable-credential" >}}WebAuthn Spec Reference{{< /button >}}

## First-Party Passkey Provider

A [Passkey Provider](#passkey-provider) that is provided by the OS platform vendor and is often enabled by default. Examples include "Windows Hello" on Windows, "Apple Passwords" on macOS and iOS, and "Google Password Manager" or "Samsung Pass" on Android devices.

## Login challenge

A prompt served to the user that they need to satisfy.

Examples:

- a prompt asking the user for their password
- a prompt asking the user to confirm sign-in on another device (e.g., their phone)
- a prompt asking the user to insert and activate their security key

Account bootstrapping and reauthentication usually consist of serving the user one or more login challenges.

## Logging in

see [_Signing in_.](#signing-in)

## Passkey

> Usage: "a passkey" or "passkeys"

The high level, end-user centric term for a FIDO2/WebAuthn [Discoverable Credential](#discoverable-credential). Like "password", "passkey" is a common noun intended to be used in every day conversations and experiences.

Passkeys are designed to be used without additional login challenges. All passkeys can be used with modern sign in experiences like the [Autofill UI](#autofill-ui) or with a "Sign in with a passkey" button.

From the technical side, there are two flavors of passkeys: [synced](#synced-passkey) and [device-bound](#device-bound-passkey).

## Passkey Provider

An app and/or service that is responsible for storing and managing passkeys. Many operating systems include a default passkey provider ([first-party](#first-party-passkey-provider)), and many also support [third-party](#third-party-passkey-provider) providers. A passkey provider is a type of [credential manager](#credential-manager).

## Passkey Upgrades

See [_Conditional Create_](#conditional-create).

## Persistent Linking

The informal name for creating a relationship between a [Cross-Device Authentication authenticator](#cda-authenticator) (typically a phone or tablet) and [Cross-Device Authentication client](#cda-client) (typically a laptop or desktop), which enables future use without having to scan a QR code.

Both the client and authenticator must support the functionality.

{{< image src="pkdd-terms-cda-pl-androidwin.png" class="col-10 col-md-7" wrapper="text-center" caption="Example with an Android phone linked to a Windows 11 device" title="A screenshot of the Windows Hello prompt asking the user to choose where to save their new passkey. The list of options includes an entry with a phone icon titled cappy-p7p as an example of a phone that has been persistently linked to the access device the user is current registering a new passkey from.">}}

## Platform authenticator

A FIDO authenticator that is built-in to a user's device.

{{< button color="light" button-size="sm" icon="fas fa-circle-info" cue=false order="first" tooltip="Go to reference in the WebAuthn specification" href="https://www.w3.org/TR/webauthn-2/#sctn-authenticator-taxonomy" >}}WebAuthn Spec Reference{{< /button >}}

## Reauthentication

Reauthentication happens when a [Relying Party (RP)](#relying-party-rp) already knows who the user is, but would like to reconfirm this.

For example, this can happen before making sensitive changes to an account (adding a recovery email address, changing authentication methods, etc.): a relying party would typically ask the user to re-enter their password or perform some other action to reconfirm their control of the session. Likewise, when a mobile app asks the user to sign in every time the app starts (or a web site asks the user to sign in again after a period of inactivity), this is technically a reauthentication, since the app or web site can choose to remember the user's identity after the account has been bootstrapped on the device (using things like cookies or local storage).

## Relying Party (RP)

The website that is trying to ascertain and verify the identity of the user or perform FIDO authentication.

{{< button color="light" button-size="sm" icon="fas fa-circle-info" cue=false order="first" tooltip="Go to reference in the WebAuthn specification" href="https://www.w3.org/TR/webauthn-2/#webauthn-relying-party" >}}WebAuthn Spec Reference{{< /button >}}

## Roaming authenticator

A FIDO authenticator usable with any device the user is trying to sign-in from. Roaming authenticators attach to users' devices in using USB, NFC, and/or Bluetooth. These authenticators are often referred to as "security keys". A smartphone can also act as a roaming authenticator using [FIDO Cross-Device Authentication](#cross-device-authentication-cda).

{{< button color="light" button-size="sm" icon="fas fa-circle-info" cue=false order="first" tooltip="Go to reference in the WebAuthn specification" href="https://www.w3.org/TR/webauthn-2/#sctn-authenticator-taxonomy" >}}WebAuthn Spec Reference{{< /button >}}

## Signing in

This can refer to either account [bootstrapping](#account-bootstrapping) or [reauthentication](#reauthentication).

## Single-device passkey

see [_Device-bound passkey_.](#device-bound-passkey)

## Synced passkey

A FIDO2 [Discoverable Credential](#discoverable-credential) that can reliably be used for bootstrapping sign-in, without requiring other login challenges such as passwords and OTPs. "Reliable" here means that the passkey should be available to, and usable by, the user whenever they need to sign in. This availability can be achieved through different means: for example, passkey providers could sync passkeys in real-time across a user's devices, restore passkeys from a backup whenever a user sets up a new device, offer passkeys across different contexts (a passkey established from an app can be used in the browser when visiting the app’s website), or allow users to [exercise passkeys across devices](#cross-device-authentication-cda) (by, say, using the passkey from a nearby phone when signing in from a laptop).

## Third-Party Passkey Provider

A [Passkey Provider](#passkey-provider) that plugs in to the OS via platform APIs to store and manage a user's passkeys via the platform authenticator.

> NOTE: Some passkey providers support passkeys via a browser extension that intercepts WebAuthn requests. Providers that bypass browser and/or platform interfaces and features in this manner typically offer a way for the intercepted request to be passed back to the browser and/or platform to handle as usual.

## User Presence (UP)

A test of User Presence (UP) is used to ensure the user is in local proximity to the authenticator during an authentication or credential creation ceremony. UP is often satisfied by pressing a button or metallic area of a security key, or interacting with a platform authenticator on a device.

{{< button color="light" button-size="sm" icon="fas fa-circle-info" cue=false order="first" tooltip="Go to reference in the WebAuthn specification" href="https://www.w3.org/TR/webauthn-2/#test-of-user-presence" >}}WebAuthn Spec Reference{{< /button >}}

## User Verification (UV)

User Verification (UV) requires the user to either perform a biometric gesture, enter the device PIN, or enter the device password for the authenticator to authorize creation and/or use of the credential.

{{< button color="light" button-size="sm" icon="fas fa-circle-info" cue=false order="first" tooltip="Go to reference in the WebAuthn specification" href="https://www.w3.org/TR/webauthn-2/#user-verification" >}}WebAuthn Spec Reference{{< /button >}}

## User-Verifying Roaming Authenticator

A User-Verifying Roaming Authentication (UVRA), also known as a first-factor roaming authenticator, can [verify individual](#user-verification-uv) users through the use of biometrics, or through the user entering a device PIN. An important class of UVRAs are smartphones, in which case the “attachment” typically happens over a wireless connection.

{{< button color="light" button-size="sm" icon="fas fa-circle-info" cue=false order="first" tooltip="Go to reference in the WebAuthn specification" href="https://www.w3.org/TR/webauthn-2/#first-factor-roaming-authenticator" >}}WebAuthn Spec Reference{{< /button >}}
