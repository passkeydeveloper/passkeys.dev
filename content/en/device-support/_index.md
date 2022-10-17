---
title: "Device Support"
description: ""
lead: ""
date: 2022-08-05T18:08:48.678Z
lastmod: 2022-10-17T04:41:05.913Z
draft: false
images: []
weight: 100
---

## Overview

Support for passkeys is currently rolling out across major operating systems and browsers, and will continue into 2023. This page will be updated as the ecosystem evolves. The [matrix below](#matrix) maps out the various features that support the passkey experience. Additional information about each platform is available in the [Reference section of Docs](/docs/reference/android).

Passkeys created in **iOS or iPadOS** can be used on:

- The same iPhone or iPad
- iPhones and iPads using the same Apple ID and iCloud Keychain (synced automatically)
- MacBooks using the same Apple ID and iCloud Keychain (synced automatically)
- MacBooks using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- Windows devices in Edge and Chrome using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- Chrome OS devices using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- Ubuntu devices in Edge and Chrome using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)

Passkeys created on **Android** can be used on:

- The same Android device
- Android devices using the same Google account (synced automatically)
- MacBooks using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- Windows devices in Edge and Chrome using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- iPhones and iPads using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)

Passkeys created in **macOS** can be used on:

- MacBooks using the same Apple ID and iCloud Keychain (synced automatically)
- iPhones and iPads using the same Apple ID and iCloud Keychain (synced automatically)

[Single-device passkeys](/docs/reference/terms/#single-device-passkeys) created in **Windows** can be used on:

- the same Windows device that created them

## Matrix

<div id="device-support-table" class="table-responsive">
    <table class="table table-striped">
        <thead>
            <tr class="fw-bold">
                <td>Capability</td>
                <td class="text-center">Android</td>
                <td class="text-center">Chrome OS</td>
                <td class="text-center">iOS/iPad OS</td>
                <td class="text-center">macOS</td>
                <td class="text-center">Ubuntu</td>
                <td class="text-center">Windows</td>
            </tr>
        </thead>
        <tr>
            <td><span class="fw-bold">Passkeys</span></td>
            <td class="text-center"><i class="bi bi-wrench-adjustable-circle-fill" title="Beta" alt="wrench in circle icon"></i><br>Beta<sup>2</sup>
            </td>
            <td class="text-center"><i class="bi bi-calendar-plus" title="Planned" alt="calendar icon"></i><br>Planned
            </td>
            <td class="text-center"><i class="bi bi-check-circle-fill text-success"></i><br>iOS 16+</td>
            <td class="text-center"><i class="bi bi-check-circle-fill text-success"></i><br>macOS 13+</td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-calendar-plus" title="Planned" alt="calendar icon"></i><br>Planned
            </td>
        </tr>
        <tr class="align-middle">
            <td class="fw-bold"><span class="fst-italic">Single-device</span> passkeys <i
                    class="bi bi-info-circle fs-6s"
                    title="Single-device passkeys are traditional FIDO credentials that never leave the device on which they were created"></i>
            </td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-usb-drive fs-4"></i><br>security keys only</td>
            <td class="text-center"><i class="bi bi-usb-drive fs-4"></i><br>security keys only</td>
            <td class="text-center"><i class="bi bi-usb-drive fs-4"></i><br>security keys only</td>
            <td class="text-center"><i class="bi bi-check-circle-fill text-success fs-4"></i></td>
        </tr>
        <tr>
            <td class="fw-bold">Browser Autofill UI</td>
            <td class="text-center"><i class="bi bi-calendar-plus" title="Planned"
                    alt="calendar icon"></i><br>Chrome<br>Edge<br><br><i
                    class="bi bi-x-circle-fill text-danger"></i><br>Firefox</td>
            <td class="text-center"><i class="bi bi-calendar-plus" title="Planned" alt="calendar icon"></i><br>Planned
            </td>
            <td class="text-center"><i class="bi bi-check-circle-fill text-success"></i><br>Safari<br><br><i
                    class="bi bi-x-circle-fill text-danger"></i><br>Edge<br>Chrome<br>Firefox</td>
            <td class="text-center"><i class="bi bi-check-circle-fill text-success"></i><br>Safari<br><br><i
                    class="bi bi-calendar-plus" title="Planned" alt="calendar icon"></i><br>Chrome<br>Edge<br><br><i
                    class="bi bi-x-circle-fill text-danger"></i><br>Firefox</td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-calendar-plus" title="Planned" alt="calendar icon"></i><br>Chrome
                <sup>1</sup><br>Edge<br><br><i class="bi bi-x-circle-fill text-danger"></i><br>Firefox
            </td>
        </tr>
        <tr class="align-middle">
            <td>Cross-Device Authentication<br><span class="fst-italic fw-bold">Authenticator <i
                        class="bi bi-info-circle fs-6"
                        title="The authenticator in a cross-device authentication flow is the device generating the FIDO assertion"></i></span>
            </td>
            <td class="text-center"><i class="bi bi-check-circle-fill text-success"></i><br>Android 9+</td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-check-circle-fill text-success"></i><br>iOS 16+</td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
        </tr>
        <tr>
            <td>Cross-Device Authentication<br><span class="fst-italic fw-bold">Client <i class="bi bi-info-circle fs-6"
                        title="The client in a cross-device authentication flow is the device where the relying party is being actively accessed"></i></span>
            </td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-check-circle-fill text-success fs-4"></i></td>
            <td class="text-center"><i class="bi bi-check-circle-fill text-success"></i><br>iOS 16+</td>
            <td class="text-center"><i class="bi bi-check-circle-fill text-success"></i><br>macOS 13+</td>
                        <td class="text-center"><i class="bi bi-check-circle-fill text-success"></i><br>Chrome<br>Edge</td>
            <td class="text-center"><i class="bi bi-check-circle-fill text-success"></i><br>Chrome<br>Edge<br><br><i
                    class="bi bi-calendar-plus" title="Planned" alt="calendar icon"></i><br>Firefox <br>Windows apps
            </td>
        </tr>
        <tbody class="table-group-divider">
            <tr>
                <td colspan="7" class="fs-5 fw-bold">Advanced Capabilities</td>
            </tr>
        </tbody>
        <tr class="align-middle">
            <td class="fw-bold">Device Public Key (DPK) <a href="" target="_blank"><i class="bi bi-info-circle fs-6"
                        title="The additional (optional) device-bound key that can be used by a relying party for risk analysis"></i></a>
            </td>
            <td class="text-center"><i class="bi bi-wrench-adjustable-circle-fill" title="Beta" alt="wrench in circle icon"></i><br>Beta<sup>2</sup>
            </td>
            <td class="text-center"><i class="bi bi-calendar-plus" title="Planned" alt="calendar icon"></i><br>Planned</td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-calendar-plus" title="Planned" alt="calendar icon"></i><br>Planned
            </td>
        </tr>
        <tr class="align-middle">
            <td class="fw-bold">Passkey attestation <a href="https://w3c.github.io/webauthn/#sctn-attestation"
                    target="_blank"><i class="bi bi-info-circle fs-6"
                        title="Attestation for the primary credential (multi-device credential)"></i></a></td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
        </tr>
        <tr class="align-middle">
            <td class="fw-bold">DPK attestation <a href="" target="_blank"><i class="bi bi-info-circle fs-6"
                        title="Attestation for the device public key"></i></a></td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span>
            </td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-x-circle-fill text-danger"></i><br><span class="fs-6 text-muted">Not
                    Supported</span></td>
            <td class="text-center"><i class="bi bi-calendar-plus" title="Planned" alt="calendar icon"></i><br>Planned
            </td>
        </tr>
    </table>
</div>
<div class="text-end mb-5">
    <sup>1</sup> Chrome M108 and Windows 11 2022
    <br><sup>2</sup> Requires <a href="https://developers.google.com/android/guides/beta-program" target="_blank">Google Play Services Beta</a>
</div>
