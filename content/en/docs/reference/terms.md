---
title: "Terms"
description: "Regularly update the installed npm packages to keep your Doks website stable, usable, and secure."
lead: "Regularly update the installed npm packages to keep your Doks website stable, usable, and secure."
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 610
toc: true
---

## 2FA user

a user whose account has 2FA turned on, i.e., who must present 2 authentication factors during sign-in.

## 2-Factor Authentication (2FA)

> _also sometimes referred to as MFA: multi-factor authentication or 2SV: two-step verification_

This refers to a contract between a user and a [relying party](#relying-party-rp) where the relying party must collect at least two distinct authentication factors from the user during a bootstrap sign-in.

## Account boostrapping

A [relying party](#relying-party-rp) authenticates a user without any prior knowledge of who the user is. This means that the [relying party](#relying-party-rp) not only has to verify the identity of the user (checking the password, verifying cryptographic signatures, etc), it also has to establish the identity of the user (figure out the user id, username, etc. of the user who’s signing in). This may happen when a user signs into an existing account for the first time on a newly-purchased phone. Or when a user logs into a website for the first time in a given browser instance. Or when a user logs into a website in a private browsing session. Or when a user signs into a mobile app for the first time on a given device. (Contrast this with reauthentication below.) Note that this is different from creating an account with a service in the first place.

## Authentication factor

Information provided by a user (or one of the user’s devices) for purposes of authentication, usually in response to a login challenge. Often categorized into "knowledge factors" (e.g. passwords), "something you have" factors (e.g. another already signed-in device), and "something you are" factors (e.g. biometrics). Note that a single login challenge may collect multiple factors simultaneously.

## Login challenge

A prompt served to the user that they need to pass. For example, a prompt asking the user for their password is a login challenge. A prompt asking the user to confirm sign-in on another device (e.g., their phone) is a login challenge. A prompt asking the user to insert and activate their security key is a login challenge. Account bootstrapping and reauthentication usually consist of serving the user one or more login challenges.

## Logging in

see [_Signing in_.](#signing-in)

## Passkey

> _sometimes referred to as a multi-device passkey_

A WebAuthn credential that can reliably be used for bootstrap sign-in, without requiring other login challenges such as passwords. “Reliable” here means that the passkey should be available to, and usable by, the user whenever they need to sign in. This availability can be achieved through different means: for example, platforms could restore passkey credentials from a backup whenever a user sets up a new device, offer passkeys across different contexts (a passkey established from an app can be used in the browser when visiting the app’s website), or allow users to exercise passkeys across devices (by, say, using the passkey credential on a nearby phone when signing in from a laptop). The important thing is that a passkey is there when the user needs it, and that it can be used without other additional login challenges. A webauthn credential that was created in a private browsing context and disappears when that browsing context is dismissed would not be considered a passkey (since it won’t be there for the user next time they’re trying to sign in). Nor would a U2F credential on a physical Security Key (since it requires additional factors for sign-in).

## Platform authenticator

A FIDO authenticator that is built-in to a user's device.

## Reauthentication

Reauthentication happens when a relying party already knows who the user is, but would like to reconfirm this. For example, this happens before making sensitive changes to an account (add a recovery email address, change the passwords, etc.): a relying party would typically ask the user to re-enter their password or perform some other action to reconfirm their control of the session. Likewise, when a mobile app asks the user to sign in every time the app starts (or a web site asks the user to sign in again after a period of inactivity), this is technically a reauthentication, since the app or web site can choose to remember the user's identity after the account has been bootstrapped on the device, e.g., by setting cookies.

## Relying Party (RP)

The website that is trying to ascertain and verify the identity of the user or perform FIDO authentication.

## Roaming authenticator

A FIDO authenticator usable with any device the user is trying to sign-in from. Roaming authenticators attach to users' devices in varying fashions. For example: via USB, NFC, or Bluetooth. These authenticators are often referred to as "security keys". A smartphone can also act as a roaming authenticator.

## Signing in

This can refer to either account bootstrapping or reauthentication. When in doubt, we will use the latter, more descriptive, terms in the sections below.

## Single-device passkey

## User-Verifying Roaming Authenticator (UVRA)

UVRAs can verify individual users through the use of biometrics, or through the user typing a PIN or password, etc. An important class of UVRAs are smartphones, in which case the “attachment” typically happens over a wireless connection.
