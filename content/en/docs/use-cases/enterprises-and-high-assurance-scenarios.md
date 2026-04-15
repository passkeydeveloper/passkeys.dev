---
title: "Enterprise and high assurance scenarios"
description: "Learn how passkeys can be safely adopted in your enterprise use cases and high assurance scenarios"
lead: "Learn how passkeys can be safely adopted in your enterprise use cases and high assurance scenarios"
date: 2022-10-04T10:15:27.390Z
lastmod: 2022-10-04T10:15:27.390Z
draft: false
images: []
menu:
  docs:
    parent: "use-cases"
weight: 102
toc: true
---

# Overview

With the introduction of passkeys, many businesses are beginning to explore how to not only incorporate them into their own environment, but offer them to their customers.The promise of phishing resistant MFA without passwords that increases security and efficiency is too great a prize to pass up. Before committing to a passkey implementation strategy, businesses need to understand all of the potential considerations, especially if they operate in a high risk or regulated industry such as healthcare, finance, or energy. In this article we are going to explore passkeys for enterprises/high risk applications, and possible solutions to meet their security or regulatory requirements.

## Our journey

Through this example we are going to follow the story of Maria. Maria works as an Identity Architect at Acme Inc, a financial services company. Acme’s CISO recently heard about passkeys, and how they’re both phishing resistant, and easier to use than passwords. The CISO has tasked Maria with exploring passkeys, and giving a recommendation on how they can be used in Acme’s enterprise and consumer applications.

Acme Inc. has three applications that they are considering for use in their initial passkey pilot:

1. An internal application where their financial advisors can view accounts, and execute transactions on behalf of their clients
2. A consumer application where customers can view their accounts and execute transactions
3. An internal application where all of their employees can get a summary of their HR benefits

Follow along as we join Maria in learning more about passkeys, and how they can eliminate passwords from Acme’s applications.

## Common terms

Before we start on our journey, let’s go over common terms that will be used in this article. These terms are standard in the industry, and are used by experts, thought leaders, and those responsible for the standards behind passkeys.

| Term                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WebAuthn                | W3C specification that defines an API for the creation and use of public key credentials for authentication. These credentials can be created by an authenticator then registered with a backend server. Once registered the credential can be used to authenticate in concert with the device that created the initial registration                                                                                                                                                                                                                                                                                                                                                     |
| Discoverable credential | A discoverable credential is a WebAuthn credential that can be discovered by your client. It allows an authenticator to say “I have a credential for this user identifier, on this domain”. These are primarily used in authentication ceremonies that don’t require a username.                                                                                                                                                                                                                                                                                                                                                                                                         |
| Passkeys                | A WebAuthn discoverable credential that aims to eliminate the need for passwords. <br><br> Passkey was adopted as the user-friendly term for WebAuthn discoverable credentials, so you may find the two terms used interchangeably.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Single device passkey   | This is a passkey that only exists on one authenticator. This means that the credential is bound to a single authenticator; the authenticator is the only device that can validate and authenticate a given credential <br><br> This is common in security keys                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Multi device passkey    | This is a passkey that can move and be used across different devices. This is typically driven by the ecosystem and technology vendor who manufactured the device <br><br> Multi device passkeys work by having the credential private key backed up to a cloud service, then allowing them to be synced across all of an account’s devices. <br><br> A user who has multiple devices may have a cloud account that is present on all devices, like a Google account. If a user registers a credential using their mobile device, they may be able to access the same credential on their laptop (and vice versa), granted they’ve authenticated to their Google account on both devices |
| Security Key            | Hardware authenticator that is capable of generating and validating WebAuthn credentials. These typically store single device passkeys and can roam between various platforms and devices. <br><br> These devices might also be referred to as roaming or cross platform authenticators                                                                                                                                                                                                                                                                                                                                                                                                  |
| Mobile authenticator    | Authenticator built into a device such as a phone or laptop that is capable of validating WebAuthn credentials. Going forward these will typically hold multi device passkeys.<br><br>Mobile authenticators could also support the hybrid use case where a QR code can be used to bootstrap new devices from a device that contains access to a user’s passkeys <br><br>These may also be referred to as platform authenticators                                                                                                                                                                                                                                                         |
| Attestation             | The ability of an authenticator to prove its own identity and for a backend service to attain details about the authenticator a credential was created on, and which manufacturer actually created said device.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Assurance               | Authenticator assurance, or the ability to prove that the user of an authenticator is the valid owner of the device.<br><br>Our use of assurance is defined by NIST in their Digital Identity Guidelines. More information can be found in section 5-2.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| High assurance          | High assurance provides very high confidence that the user attempting to make the authentication claim is the owner of the authenticator registered to the desired account. This is done by providing proof of an authenticator with at least two different authentication factors, and that the credential is hardware bound to the device as a means of impersonation resistance.                                                                                                                                                                                                                                                                                                      |
| Low assurance           | Low assurance has less strict requirements, where the authenticator only needs to provide a single authentication factor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

[You can find additional terms on this site here](/docs/reference/terms/)

## Single device vs multi device passkeys

We will start by covering the two different types of passkeys: single device, and multi device. While both passkey types offer phishing resistant forms of authentication, there are some inherent differences that should be covered.

### Single device passkeys

We will begin with single device passkeys (SDC). These are passkeys that are bound to a single device, meaning that a credential can only be validated using the device that it was created on. SDC’s have been the standard way that WebAuthn credentials were utilized.

SDC’s will continue to be a part of the WebAuthn conversation as they offer a high assurance that the credential on a device won’t be copied and exported to exploit a user’s account.

SDC’s often come in the form of a hardware authenticator like a security key. Because the authenticator is not embedded in another device, like a phone, it can be freely inserted and removed from different devices, making it ideal for environments with shared workstations, and account recovery flows.

### Multi device passkeys

Multi device passkeys (MDC) are credentials that can be moved and synced between devices. This means that if a user has multiple devices, they can use the built in authenticator to validate a credential regardless if they are using the device that was used to create the credential.

This offers a higher degree of usability as users will be able to utilize any of their devices to authenticate into services without having to individually enroll each one. MDC’s may also be shared between different users; for example you can AirDrop your passkey to another person in the case of shared accounts.

MDC’s are commonly embedded into other devices like a mobile phone, or laptop. Platforms that will support MDC are Windows Hello, Apple Face/Touch ID, and Android Biometrics. Please refer to the [Device Support Matrix](/device-support/) to see if your operating system and devices currently support MDC’s.

## High assurance vs low assurance

Now that we have an understanding of the different types of passkeys, let’s explore what assurance is and how it relates to SDC and MDC.

We’ll begin with a background on assurance. In our context assurance refers to the authenticator assurance level that is defined in the guidance given by NIST in their report [Digital Identity Guidelines](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63-3.pdf). These are the technical requirements for federal agencies implementing digital identity solutions. We are utilizing this guidance as some of the principles should be taken under consideration for applications that operate in high risk scenarios.

### Low assurance

Low assurance authenticators require that a device only requires a single factor. The person attempting to sign in only needs to prove possession and control of the device to authenticate into an account.

It’s important to understand that any WebAuthn is still more secure than a password. So while the experience outlined above seems too seamless to be secure, the authenticator is still phishing resistant, and requires possession and control to gain access to an account.

If an application is lower risk (i.e doesn’t deal with financial data, personal information, or possess personal or safety risks) then it should be free to leverage low assurance authenticators.

### High assurance

High assurance authenticators require that there are two different authentication factors AND that the device is a hard authenticator; providing impersonation resistance. This means that the cryptographic key is only present on one device, and can’t be copied or synced to another authenticator.

High assurance is used for high risk applications that pose critical risk to a variety of areas such as financial risk, personal safety, or exposure of sensitive data.

## Passkey types and assurance levels

Now that we have an understanding of assurance levels, let’s go over how they fit into the different passkey types that we covered in the previous section.

High assurance use cases will require the use of a SDC. The device bound nature of SDCs allow for the requirement of a “hard” authenticator where the credential’s private key cannot be exported, synced, oir backed up across different devices. While both passkey types are driven by WebAuthn, the fact that MDCs private key can be exported and imported across devices and can allow for impersonation by sharing disqualifies their use in high assurance scenarios.

Low assurance use cases can allow for any type of passkey. Many consumer facing applications can be categorized as low assurance use cases. You don’t want to require that your consumer users purchase speciality hardware to use your application. Instead you will want to opt into allowing them to use the authenticator built directly into one of their everyday devices, like a mobile authenticator.

### Determining assurance level

The [NIST Digital Identity Guidelines](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63-3.pdf) offers a decision map to help you determine the authenticator assurance level that you should leverage in your application. This decision map can be found in Figure 6-2 in the aforementioned document.

We are going to explore Maria’s three use cases and attempt to determine the assurance level. This will help in her recommendation for what will need to be implemented for Acme’s three applications.

**Use case 1: Financial advisor application**

The first application that we are going to explore is the tool that allows financial advisors to view accounts, and execute transactions on behalf of their clients. This application is only usable by certain internal Acme employees, and not public facing.

If an account to this application was compromised then it’s possible that:

- Unauthorized financial transactions are executed
- Unauthorized transactions could lead to a huge loss of company reputation
- Acme could be held liable for improperly securing this high risk system

Because this application is highly sensitive, Maria notes that the application requires high assurance authenticators. Her intent is that financial advisors are only able to login to this application using SDCs, in the form of security keys that Acme will distribute.

**Use case 2: Employee benefits summary application**

The next application is one that allows employees to view their employee benefits from personal devices. It’s useful in situations where an employee is curious about company holidays, their number of vacation days remaining, or information related to their health insurance. The application doesn’t allow for the employee to make any changes, and contains no sensitive health related information.

There is not much inherent risk if one of these accounts were compromised. No confidential company data, or personal information is disclosed in this application.

Because the potential risk associated with this application is low, it may be fine to consider the use of low assurance authenticators. This means that Acme may not need to distribute security keys to all of their employees, and will allow them to use the authenticator in their personal devices.

**Use case 3: Customer accounts applications**

The final application is one that allows customers of Acme to view their account and execute financial transactions. What makes this scenario different from the previous is that this application is used by their consumer users not internal to Acme Inc. In some ways the application can still be considered high risk due to the possibility of financial risk to a user who has their account compromised.

If an account in this application was compromised then it’s possible that:

- A user loses a large sum of their finances in their Acme accounts
- Acme risks loss in reputation if multiple accounts are compromised
- Acme may be held liable if they are found at fault for compromising the accounts

Due to the risk, it makes sense to mark this application as high risk, but there is another consideration. Acme doesn’t want to require that all of their users purchase speciality hardware in order to use their accounts nor does Acme want to provide users with such hardware from a cost perspective. Acme wants to ensure that the use of their application is seamless and available to all of their customers.

Maria may want to consider allowing for the use of low assurance authenticators but prompt the user for additional authentication factors such as a password, or a custom authenticator app to execute transactions over a certain threshold. It’s important to note that the password is not the leading factor, and a compromised password will not lead to a compromised account. An attacker will still need control and possession of an authenticator to gain access to an account.

Maria feels comfortable with the decisions that she has made regarding the assurance levels needed for each application. In the next section we are going to help Maria choose an implementation strategy for all three of her scenarios.

## Developing a passkey application for low assurance scenarios

Maria now knows that she will require a mixture of applications to support low assurance and high assurance scenarios. She is now curious about how she not only goes about developing an application that supports passkeys, but accounting for the different assurance levels required by her applications. In this section we are going to cover how to develop a passkey solution, starting with a low assurance use case.

Why are we starting with low assurance scenarios? Because this scenario doesn’t explicitly restrict users to using ONLY low assurance authenticators. In fact, a user is just as free to use a SDC from a security key, as they are when using an MDC on their mobile device. An application that allows for low assurance authenticators is, in a sense, the most standard form of a passkey application.

When looking for implementation guidance, don’t only limit yourself to searching for “passkey developer guidance”. Remember that passkeys are WebAuthn credentials, so if you find developer guidance for WebAuthn, it also applies to passkeys.

Below you will find a curated list of resources to aid you in the development of custom WebAuthn applications.

WebAuthn developer guidance:

- [webauthn.io](https://webauthn.io/)
- [WebAuthn and Passkey Awesome](https://github.com/herrjemand/awesome-webauthn)
- [WebAuthn Starter Kit](https://github.com/YubicoLabs/WebAuthnKit)
- [Yubico java-webauthn-server library](https://github.com/Yubico/java-webauthn-server)

## Developing a passkey application for high assurance scenarios

Maria feels comfortable with the resources that she found in the previous section, but now she is curious how to extend the examples for high assurance use cases. In short, modifications will need to be made to the backend application in order to filter or prevent specific types of authenticators from registering. In this section we are going to explore concepts and features that are necessary to understand when developing for high assurance scenarios.

### Attestation

WebAuthn has a concept referred to as attestation. Attestation is essentially a way for a credential to prove what authenticator it was generated on, and for an application to gather additional details about the authenticator such as the make and model.

Attestation is relevant for high assurance use cases as you will want your application to evaluate each new registration to see if it is aligned with your security requirements.

It should be noted that not all of a device's information is sent along with a registration. A new registration request may send an attestation statement that includes a trust certificate and AAGUID (which notes the unique identifier for the make and model of the authenticator). Your backend application will require a repository of metadata to correlate to the attestation statement.

Developers should be aware that attestation comes with a set of [privacy concerns](https://www.w3.org/TR/webauthn-2/#sctn-attestation-privacy) that could potentially be used to track or link users across multiple web services where a common authenticator is used. While there are mitigating efforts that can be taken by authenticator manufacturers, some users may not be comfortable with sending information about their devices. WebAuthn registration ceremonies typically require the user to consent to sending attestation data when a new credential is created. If you are implementing a strategy that will heavily rely on attestation, ensure that your users are coached to allow attestation to be sent during a device registration.

### FIDO MDS

The next concept to understand is how applications use attestation to correlate the data to a specific authenticator. WebAuthn applications that leverage attestation will require a repository of attestation metadata that can be used to validate attestation statements as they are passed to the application. [The FIDO MDS](https://fidoalliance.org/metadata/) is typically the preferred solution for such a repository. Your application can store the FIDO MDS blob locally and refer to it when making a trust decision on the features present on a device that was used to register a new credential.

The figure below demonstrates an example of an architecture of an application that leverages the FIDO MDS

![Architecture example of a WebAuthn application leveraging the FIDO MDS](/mds-arc.png)

Don’t get overwhelmed with the information above, we will go into greater technical detail further along the page.

In the meantime, more information about Attestation can be found on the [WebAuthn Works blog](https://medium.com/webauthnworks/webauthn-fido2-demystifying-attestation-and-mds-efc3b3cb3651) and the [Yubico Developer Site](https://developers.yubico.com/WebAuthn/WebAuthn_Developer_Guide/Attestation.html)

### Attestation and MDCs

We now know that a WebAuthn application can use attestation to determine the make and model of an authenticator, but how does this fit into the different passkey types?

Remember that attestation is used to prove the device of the credential that it was created on, but MDCs introduce a new paradigm - what happens if the credential won’t always come from the registration device? For this reason, MDC’s will not support attestation during registration.

What this essentially means is that if you block any credential that does not send an attestation statement then you will block the registration of MDCs in your high assurance application.

Now that we have an understanding on attestation, and how it’s used in high assurance scenarios, let’s explore a few different mechanisms that can be used to manage the devices that can be used in your environment.

### Methods for limiting authenticators

In this section we are going to outline a few different mechanisms that can be used by a passkey application to limit the registration of certain authenticators.

**Warning**: Limiting of authenticators should only be reserved for specific business requirements. The approaches below should only be taken into consideration if you are aiming to enable passkeys for high assurance scenarios. For common, low risk scenarios it’s recommended to be highly permissive in the authenticators that you allow to register into your service. Any WebAuthn credential is still better than a password.

If you wish to dive into this topic in more detail, more information can be found on the [Yubico Developer Site](https://developers.yubico.com/WebAuthn/Concepts/Authenticator_Management/)

#### Allow list

An allow list is a curated list of authenticators that should be permitted to register and authenticate to your application. Any authenticator that is not identifiable, or part of your curated list should be rejected. This scenario works well for applications that require a more secure and controlled environment, and where you want to ensure that your users are leveraging high assurance authenticators.

In-depth implementation guidance can be found on the [Yubico Developer Site](https://developers.yubico.com/WebAuthn/Concepts/Authenticator_Management/Implementation_Guidance/Allow_List.html)

#### Deny list

A deny list is a curated list of authenticators that should not be allowed to register and authenticate to your application. Any authenticator that is not part of your curated list should be allowed to register. This scenario works well for applications that want a degree of control to prevent vulnerable authenticators from being used in the application.

It should be noted that if attestation is not required by your application, then the effectiveness of the deny list is reduced. While the deny list aims to be more permissive than an allow list, failure to require attestation may result in a user registering with an unpermitted authenticator by not sending attestation data.

In-depth implementation guidance can be found on the [Yubico Developer Site](https://developers.yubico.com/WebAuthn/Concepts/Authenticator_Management/Implementation_Guidance/Deny_List.html)

#### Vulnerability remediation

When your application allows for a wide variety of authenticators you may run into the issue that one of them is found to have some sort of a vulnerability. This is a two pronged problem as you will need to prevent new registrations, and triage any existing credentials that were created on authenticators with vulnerabilities.

Similar to the deny list, if attestation is not required by your application, then the effectiveness of vulnerability remediation is reduced. If you are unable to detect the make/model of a device then you will be unable to block it, or alert users to potential issues.

The deny list guidance provided above will help to prevent authenticators with vulnerabilities from registering in your application.

In-depth implementation guidance for identifying credentials leveraging vulnerable authenticators can be found on the [Yubico Developer Site](https://developers.yubico.com/WebAuthn/Concepts/Authenticator_Management/Implementation_Guidance/Vulnerability_Remediation.html)

#### Adding additional authentication factors

Most FIDO2 authenticators come packaged as two authentication factors: something you have (which is typically the authenticator), and either a something you know (like a device PIN), or something you are (like a biometric scanner). In most cases the factors protecting a passkey are enough to verify the user. With that said, the ability to add an additional factor may provide the additional assurance that you require to verify that a login attempt is coming from the account owner. This mechanism ensures that a user will leverage all of the available authentication factors present on their device while also providing a separate password to your backend service.

It’s important to note that the password is not the leading factor, and a compromised password will not lead to a compromised account. An attacker will still need control and possession of an authenticator to gain access to an account. With that said, the statements above assume that MFA is always required, and that other 2FA methods have not been compromised. For example, if you allow account recovery through email, then your system is only as secure as the security of the email provider.

In-depth implementation guidance can be found on the [Yubico Developer Site](https://developers.yubico.com/WebAuthn/Concepts/Authenticator_Management/Implementation_Guidance/Adding_Additional_Authentication_Factors.html)

## Determining implementation pattern

Now that Maria has learned about attestation, and the different mechanisms she can use to protect her high risk accounts, let’s dive into her examples to determine what approach she should take. We will only be looking at the high assurance use cases: financial advisor and consumer application. It is assumed that Maria can use the guidance given in the low assurance section to build the HR benefits summary application.

We’ll begin with the financial advisor application. Maria has determined that in order to properly secure this application Acme will be distributing security keys to financial advisors.

We know that Acme will only be using a small set of security keys, provided by a single supplier. With that in mind, what pattern should Maria use to secure the application?

In this case we will recommend the use of attestation combined with an allow list. The allow list will let Maria’s team curate a list of authenticators based on the devices that they have purchased. Once curated they can tell their backend application to only allow the devices they have designated.

When a new passkey is registered, the backend application will check:

1. Did the credential contain attestation data
2. Did the user perform user verification, ensuring that they have leveraged a second device factor
3. Is the device noted by the attestation statement part of our curated list

Her application is now secured as a financial advisor will need to authenticate using a specific device that was provided by Acme.

Lastly we’ll move onto the consumer application. Recall that the primary challenge is that this is a high risk application, but you don’t want to require that your customers purchase specialty hardware in order to authenticate. You want to rely on the mobile authenticator in their personal device, but you need further assurance to provide the validity of the user attempting to login.

In this case you might want to consider adding an additional authentication factor through the application. This means that your backend service will not only issue and verify a challenge from the WebAuthn API but will also leverage another factor. For example, once a user successfully completes a WebAuthn authentication ceremony, they may be prompted to enter in a password.

Note, this password is not in scope of the WebAuthn specification; this means that your requirements for this additional factor will need to meet the standards and criteria of your businesses security principles.

In order to streamline the user experience, Maria has determined that this password will only be required if users attempt to execute a transaction that is above $10,000 after authenticating with a low assurance authenticator. Users leveraging a SDC with user verification will have no limitations on their transactions.

If you are unsure of which approach is right for your use case, you could refer to the following resources:

- [W3C WebAuthn Community Adoption Group](https://www.w3.org/community/webauthn-adoption/)
- [WebAuthn specification](https://www.w3.org/TR/webauthn/)

## Implementation considerations

In this section we are going to briefly cover some implementation considerations that you should take into account when creating a passkey experience.

### Trusted devices

The current paradigm of trusted devices typically relies on the presence of long lived session cookies - meaning that there exists some secret on your browser that notes to a backend service that it’s been used before to access your application. An attacker could use these cookies, in concert with a compromised password, to gain access to your account.

Going forward, developers can begin to rely on the authenticators built into devices to denote a trusted device. Meaning that a user could use a passkey synched to their phone/laptop to seamlessly login to an application without having to store a session cookie that can be exploited.

### Attestation values

If you choose, you can configure the behavior of attestation prompts during WebAuthn ceremonies by setting the `attestation` value in the [PublicKeyCredentialCreateOptions](https://www.w3.org/TR/webauthn-2/#dictdef-publickeycredentialcreationoptions).

Using an attestation value of `none` indicates that the backend service has no interest in attestation. Using this value will typically result in the attestation consent prompt not appearing to the user, marginally improving the user experience. This is the default value if no value is provided during the WebAuthn ceremony.

A value of `direct` will result in the attestation consent prompt appearing. If your strategy utilizes attestation, then your backend service should note to the client that direct attestation is being requested.

### Account recovery

As noted in the previous section, your accounts are only as secure as the least secure authentication method. Your primary flow may be to utilize a passkey plus any other additional factors, but if a user can recover their account through an email then you are at the mercy of the email service not being compromised. There are a few options you can consider in the case of account recovery to ensure that you maintain the integrity of your account security.

The first is having multiple passkey enabled devices. For MDCs this is as simple as ensuring that you login with your cloud account across your different devices. You can utilize the hybrid (QR) login experience to bootstrap additional devices if you happen to break or lose one of your existing devices.

For SDCs it is recommended that you have more than one security key, and that you enroll each in all of your services. This ensures that if one security key breaks, then you can rely on the other to continue using your services.

### Legacy authenticators

There may be users that continue to leverage legacy U2F authenticators. Credentials created with U2F authenticators are backwards compatible, and are valid WebAuthn credentials. One major difference will be the lack of user verification (PIN, biometric), which may not align with the requirements for high assurance applications. As noted in the previous section, you may be able to add an additional authentication factor through your application to allow users to continue to use their U2F devices.

## Future considerations

As the adoption of passkeys continues, there will be support for new features in order to increase the robustness of the technology. Maria wants to ensure that her leadership team is aware of upcoming changes in the landscape, so she is including a section detailing future considerations in her report. In this section we are going to outline some considerations that you should be aware of when planning your own passkey strategy.

### Device public key

The device public key (DPK) is an optional device bound key that can be requested by the relying party for additional analysis. The goal is to provide a mechanism for MDCs to provide an identifier for the device that is attempting to leverage a passkey. If a user has three devices, each device can hold a DPK that can be used to identify the specific device that was being used during a ceremony. For instance, during a registration ceremony device A will pass its DPK to the backend service. Even though the passkey can be accessed by devices B and C, the backend application can reject authentication attempts unless it receives a valid passkey credential and a DPK for device A.

This is a relatively new feature that is planned, but not adopted by any of the major MDC passkey providers.

### Enterprise attestation

This is an [attestation option](https://www.w3.org/TR/webauthn-2/#dom-attestationconveyancepreference-enterprise) that can be requested by the backend service . The primary difference of enterprise attestation is that it can contain uniquely identifying information about the authenticator.This feature will help you to further gate keep your backend applications allow/deny lists as your device will contain attestation statements specific to your enterprise. In consumer use cases this is not ideal as it may be used to track users across multiple different applications.

With that said, there are valid use cases in the enterprise space where you may want to be able to ensure that a user is utilizing a company provided authenticator. In order to enable enterprise attestation you must work with your vendor/manufacturer to enable the feature, and to load your enterprise’s information on the device.

The WebAuthn spec includes a section on [Attestation Privacy](https://www.w3.org/TR/webauthn-2/#sctn-privacy-considerations-authenticator) to help you understand the implications of attestation with unique identifiers.
Attestation from MDCs

### Attestation from MDCs

As noted previously, MDCs will not support attestation in the immediate future. DPK will eventually act as the way to note if a credential is coming from a specific device, but will not provide the attestation statement to determine the make/model of the device. In other words, you will be able to tell it came from device A, but you won’t be able to note that it came from your iPhone and not your Mac or Pixel.

As of now there isn’t any indication that this will be a widely supported feature, but may start popping up in passkey implementations as time goes on.

Hopefully you now have an understanding of the future considerations for your passkey implementation. Please use the [Device Support Matrix](/device-support/) on this site in order to keep up to date on the passkey feature and ecosystem support.

# Conclusion

At this stage, Maria feels comfortable with her findings, and the strategy that she has laid forward for Acme Inc’s passkey implementation. She has learned:

- The different passkey types
- The different assurance levels to consider
- Implementation guidance for different assurance levels
- Future considerations for her implementation

Hopefully this guidance has helped you as well in understanding how your business can adopt passkeys for not just your internal applications, but your consumer ones as well, regardless of the risk level. Stay tuned on this page as the WebAuthn Community Adoption Group continues to create material to help support the adoption of passkeys.
