---
title: "Frequently Asked Questions"
description: ""
lead: "put some intro text here"
date: 2022-08-04T18:01:38.505Z
draft: true
images: []
toc: true
---

## Intro to passkeys

{{< details "What is a passkey?" >}}
Commodo pariatur laboris excepteur excepteur ut nostrud voluptate.
{{< /details >}}

{{< details "What is the difference between a passkey and a multi-device credential?" >}}
They are the same. "Multi-device credential" is the official name in the WebAuthn specification, whereas "passkey" is a more user friendly term (similar to "password").
{{< /details >}}

{{< details "What is the difference between a single-device passkey and a passkey?" >}}
A single-device passkey is bound to a device and cannot be backed up or synced.
{{< /details >}}

{{< details "Do security keys support passkeys?" >}}
Today, security keys can hold single-device passkeys, as they are bound to the authenticator. Security key vendors may decide to offer multi-device passkey authenticators in the future.

Security keys also support second-factor only credentials (often referred to as U2F credentials), which are _not_ passkeys.
{{< /details >}}

{{< details "What is the difference between a passkey and a multi-device credential?" >}}
Pariatur aliquip ea ea ea.
{{< /details >}}

## Ecosystem and Compatibility

{{< details "Which platforms support passkeys?" >}}
Aliquip pariatur qui dolore proident cillum officia. See the [Ecosystem](/ecosystem) page for more details.
{{< /details >}}

{{< details "Can I use passkeys to authenticate across different platforms and/or ecosystems?" >}}
Lorem aute quis laborum non adipisicing sit anim minim laborum reprehenderit deserunt aliquip culpa.
{{< /details >}}

{{< details "How does the user sign-in if a passkey for the Relying Party (RP) is not already available on the device?" >}}
This is best understood with an example: say the user has an Android phone where they already have a credential for the [RP](/docs/reference/terms/#relying-party-rp). Now they want to sign-in to the RP’s website on Windows where they have never signed into the website before.

For existing devices, the user will point their browser to the RP’s website in Windows. They see a 'sign-in' button on the login web page and hit that button.The user sees the option to link a new phone or use a previously linked one. If the user selects the linked phone and the phone is physically close to the Windows device, the user sees a pop-up from Android asking in essence “I see you are trying to sign-in on this nearby computer, here are the accounts I have.” The user chooses an account at which point Android asks "Please perform your unlock to approve sign-in to the computer with this account". The user performs the unlock and they are signed-in to the website.

Alternatively, the user can use a security key that has been enrolled with the RP. In this instance, the user will point their browser to the RP website on the Windows computer. They see a ‘sign-in’ button on the RP’s login web page and hit that button. When the RP asks for FIDO authentication, the user is able to insert or tap their Security Key to unlock and they are signed-in to the website.

The flow described in this example would work regardless of the OS the user’s mobile phone is running and the OS and browser available on the target device for login (eg, computer, tablet, TV etc). The target user experience is very similar to that of a phone push notification approval prompt commonly used today as a second-factor today. The crucial difference is that the approval is now phishing-resistant — this is because, when you approve a login on another device on a conventional phone approval, you don’t really know whether your other device is pointed to the correct website or a look-alike phishing site relaying information in real-time. In addition, the mobile device approval also replaces the password (as opposed to being used as a second factor adjunct).
{{< /details >}}

{{< details "How can the user switch to a new mobile platform using passkeys (eg, from iOS to Android or vice versa)?" >}}
If the user still has their old device, they can use it to sign into their new device (using the FIDO Cross Device Authentication flow). If they don’t, then the [RP](/docs/reference/terms/#relying-party-rp) can treat sign-in from the new device (which might be from a different vendor) as a normal account recovery situation and take appropriate steps to sign in the user. The RP would then usually create a new multi-device credential on the new device (which runs a different platform OS than the user’s previous device). If the user no longer plans to use their old device, they can let the RP know, and the RP can then delete the credential of the old device from their server records — thus, the credential on the old device will no longer be accepted for sign-in.

If the user is still in possession of their old device, the RP can also use the credential on that old device (say, an Android device) to sign the user into the new device (say, an iOS device) without going through an account recovery step. See previous question for more detail the old mobile can be used to sign-in to the new mobile in a simple phishing resistant way.

Additionally, a user can use a security key to securely authenticate to a new device.
{{< /details >}}

## Security

{{< details "Why are passkeys better than password + second factor?" >}}
Passwords and second-factors, such as one time passwords (OTPs) and phone push notification approvals, are inconvenient and insecure. They can be phished, and they are being phished at scale today. Passkeys are designed to solve this problem. They have three fundamental advantages over using passwords (even when used with traditional second-factors):

**Sign-in is easier for the user:** It’s the same biometric or PIN users use to unlock their device. The user doesn’t need to deal with typing passwords or OTPs.

**Sign-in is fundamentally safer (phishing-resistant):** Phishing-resistance of sign-in is a core design goal of FIDO and is built into every sign-in event that leverages FIDO. Furthermore, breaches of password databases (which can be an attractive target for hackers) no longer pose a threat.<br>

**Sign-in is more robust:** Users often forget passwords and don’t set up backup emails and phone numbers. With passkeys, the credentials are backed up and are therefore protected from loss. If the user gets a new phone the credentials can easily be restored to the new phone. When signing in from a new device, the existence of a passkey is a powerful trust signal that websites can leverage to make recovering access to the account radically safer and simpler, since it means that the platform vendor has already verified the user.
{{< /details >}}

{{< details "Are passkeys considered multi-factor authentication?" >}}
Passkeys are present on a user’s devices (something the user "has") and – if the Relying Party requests this – can only be exercised by the user with a biometric or PIN (something the user “is” or ”knows”). Thus, authentication with a passkey embodies the core principle of multi-factor security.
{{< /details >}}

{{< details "Can I use passkeys to authenticate across different platforms and/or ecosystems?" >}}
Lorem aute quis laborum non adipisicing sit anim minim laborum reprehenderit deserunt aliquip culpa.
{{< /details >}}

## Privacy

{{< details "Do passkeys change FIDO's privacy posture?" >}}
We expect all platforms implementing passkeys to adhere to FIDO’s [Privacy Principles](https://media.fidoalliance.org/wp-content/uploads/2014/12/FIDO_Alliance_Whitepaper_Privacy_Principles.pdf), including usage of personal data for the sole purpose of FIDO operations.
{{< /details >}}

{{< details "Is the user's biometric information safe?" >}}
Yes, there are no changes to user verification methods or their security properties as part of the effort – and user biometrics will never leave the device.
{{< /details >}}

{{< details "Can I use passkeys to authenticate across different platforms and/or ecosystems?" >}}
Lorem aute quis laborum non adipisicing sit anim minim laborum reprehenderit deserunt aliquip culpa.
{{< /details >}}
