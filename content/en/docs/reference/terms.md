---
title: "Terms"
description: "A list of terms which are used frequently throughout this site and in discussions about passkeys, FIDO2, and WebAuthn."
lead: "Here's a list of terms which are used frequently throughout this site and in discussions about passkeys, FIDO2, and WebAuthn."
date: 2020-11-12T13:26:54+01:00
lastmod: 2022-10-16T18:33:25.877Z
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 1101
toc: true
---

## 2FA user

A user whose account has [2FA](#2-factor-authentication-2fa) turned on, i.e., who must present 2 authentication factors during sign-in.

## 2-Factor Authentication (2FA)

> _also sometimes referred to as MFA: multi-factor authentication or 2SV: two-step verification_

This refers to a contract between a user and a [Relying Party (RP)](#relying-party-rp) where the RP must collect at least two distinct authentication factors from the user during a [bootstrap](#account-boostrapping) sign-in.

## Account bootstrapping

A [Relying Party (RP)](#relying-party-rp) authenticates a user without any prior knowledge of who the user is. This means that the RP not only has to verify the identity of the user (checking the password, verifying cryptographic signatures, etc), it also has to establish the identity of the user (figure out the user id, username, etc. of the user who’s signing in). This may happen when a user signs into an existing account for the first time on a newly-purchased device; or when a user logs into a website for the first time in a given browser instance. Or when a user logs into a website in a private browsing session. Or when a user signs into a mobile app for the first time on a given device (contrast this with [reauthentication](#reauthentication) below).

> Note that this is different from creating an account with a service in the first place.

## Authentication factor

Information provided by a user (or one of the user’s devices) for purposes of authentication, usually in response to a login challenge. Often categorized into "knowledge factors" (e.g. passwords), "something you have" factors (e.g. another already signed-in device), and "something you are" factors (e.g. biometrics). Note that a single login challenge may collect multiple factors simultaneously.

## Cross-Device Authentication (CDA)

FIDO Cross-Device Authentication (CDA) allows a passkey from one device to be used to sign in on another device. For example, your phone can be linked to your laptop, allowing you to use a passkey from your phone to sign into a service on your laptop.

CDA is powered by the FIDO Client-to-Authenticator Protocol (CTAP) using "hybrid" transport. CTAP is implemented by authenticators and client platforms, not Relying Parties.

## Device Public Key (DPK)

A Device Public Key (DPK) is a device-bound key that can be requested by a [Relying Party (RP)](#relying-party-rp) for higher assurance scenarios where device contintuity signals are desired. If supported by the authenticator, a signature from both the passkey and DPK are returned.

> Example: Say that a sign-in request appears at a website along with some geolocation signal that has not been seen for this user account before, and is outside of the typical usage hours observed for the account. The risk may be deemed high enough not to allow the request, even with an assertion by a passkey on its own. But if a signature by a device-bound key that is well established for this user can also be presented, then that may tip the balance.

Just like a passkey, DPKs are unique to each RP.

<a href="https://w3c.github.io/webauthn/#device-public-key" target="_blank"><button type="button" class="btn btn-light">Spec Reference (L3 Draft) <i class="bi bi-box-arrow-up-right ms-2"></i></button></a>

## Discoverable Credential

A Discoverable Credential (previously known as a "resident credential" or "resident key") is a FIDO2/WebAuthn credential that is entirely stored in the authenticator (private key, credential ID, user handle, and other metadata). The [Relying Party (RP)](#relying-party-rp) also stores a copy of the _public_ key and credential ID

[Passkeys](#passkey) (and [single-device passkeys](#single-device-passkey)) are Discoverable Credentials.

In contrast, a non-discoverable credential (also known as a U2F credential) is encrypted by the authenticator and stored by the RP. The RP must know something about the user in advance, typically a username, in order to request an assertion for the credential from the authenticator.

Many deployments that predate passkeys use non-discoverable credentials for a second factor.

<a href="https://www.w3.org/TR/webauthn-2/#discoverable-credential" target="_blank"><button type="button" class="btn btn-light">Spec Reference <i class="bi bi-box-arrow-up-right ms-2"></i></button></a>

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

> _sometimes referred to as a multi-device passkey_

Short version:

A passkey is a FIDO2 [Discoverable Credential](#discoverable-credential) that requires [user verification](#user-verification-uv) and is protected against device loss.

Longer version:

A FIDO2/WebAuthn credential that can reliably be used for bootstrap sign-in, without requiring other login challenges such as passwords. "Reliable" here means that the passkey should be available to, and usable by, the user whenever they need to sign in. This availability can be achieved through different means: for example, platforms could restore passkeys from a backup whenever a user sets up a new device, offer passkeys across different contexts (a passkey established from an app can be used in the browser when visiting the app’s website), or allow users to [exercise passkeys across devices](#cross-device-authentication-cda) (by, say, using the passkey from a nearby phone when signing in from a laptop).

The important thing is that a passkey is there when the user needs it, and that it can be used without other login challenges. A WebAuthn credential that was created in a private browsing context and disappears when that browsing context is dismissed would not be considered a passkey (since it won’t be there for the user next time they’re trying to sign in). Nor would a U2F credential on a security key (since it requires additional factors for sign-in).

## Platform authenticator

A FIDO authenticator that is built-in to a user's device.

<a href="https://www.w3.org/TR/webauthn-2/#sctn-authenticator-taxonomy" target="_blank"><button type="button" class="btn btn-light">Spec Reference <i class="bi bi-box-arrow-up-right ms-2"></i></button></a>

## Reauthentication

Reauthentication happens when a [Relying Party (RP)](#relying-party-rp) already knows who the user is, but would like to reconfirm this.

For example, this can happen before making sensitive changes to an account (adding a recovery email address, changing authentication methods, etc.): a relying party would typically ask the user to re-enter their password or perform some other action to reconfirm their control of the session. Likewise, when a mobile app asks the user to sign in every time the app starts (or a web site asks the user to sign in again after a period of inactivity), this is technically a reauthentication, since the app or web site can choose to remember the user's identity after the account has been bootstrapped on the device (using things like cookies or local storage).

## Relying Party (RP)

The website that is trying to ascertain and verify the identity of the user or perform FIDO authentication.

<a href="https://www.w3.org/TR/webauthn-2/#webauthn-relying-party" target="_blank"><button type="button" class="btn btn-light">Spec Reference <i class="bi bi-box-arrow-up-right ms-2"></i></button></a>

## Roaming authenticator

A FIDO authenticator usable with any device the user is trying to sign-in from. Roaming authenticators attach to users' devices in using USB, NFC, and/or Bluetooth. These authenticators are often referred to as "security keys". A smartphone can also act as a roaming authenticator using [FIDO Cross-Device Authentication](#cross-device-authentication-cda).

<a href="https://www.w3.org/TR/webauthn-2/#sctn-authenticator-taxonomy" target="_blank"><button type="button" class="btn btn-light">Spec Reference <i class="bi bi-box-arrow-up-right ms-2"></i></button></a>

## Signing in

This can refer to either account [bootstrapping](#account-boostrapping) or [reauthentication](#reauthentication).

## Single-device passkey

A FIDO2 [Discoverable Credential](#discoverable-credential) that requires [user verification](#user-verification-uv) and is bound to a single authenticator. For example, FIDO2 security keys hold single-device passkeys as the credential cannot leave the device.

## User Presence (UP)

A test of User Presence (UP) is used to ensure the user is in local proximity to the authenticator during an authentication or credential creation ceremony. UP is often satisifed by pressing a button or metallic area of a security key, or interacting with a platform authenticator on a device.

<a href="https://www.w3.org/TR/webauthn-2/#test-of-user-presence" target="_blank"><button type="button" class="btn btn-light">Spec Reference <i class="bi bi-box-arrow-up-right ms-2"></i></button></a>

## User Verification (UV)

User Verification (UV) requires the user to either perform a biometric guesture or enter the device PIN for the authenticator to authorize creation and use of the credential. In some cases, UV also satifies a test of [User Presence](#user-presence-up) (such as when the authenticator itself has a biometric built-in or the device PIN is entered directly into the authenticator).

<a href="https://www.w3.org/TR/webauthn-2/#user-verification" target="_blank"><button type="button" class="btn btn-light">Spec Reference <i class="bi bi-box-arrow-up-right ms-2"></i></button></a>

## User-Verifying Roaming Authenticator

A User-Verifying Roaming Authentication (UVRA), also known as a first-factor roaming authenticator, can [verify individual](#user-verification-uv) users through the use of biometrics, or through the user entering a device PIN. An important class of UVRAs are smartphones, in which case the “attachment” typically happens over a wireless connection.

<a href="https://www.w3.org/TR/webauthn-2/#first-factor-roaming-authenticator" target="_blank"><button type="button" class="btn btn-light">Spec Reference <i class="bi bi-box-arrow-up-right ms-2"></i></button></a>
