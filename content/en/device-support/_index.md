---
title: "Device Support"
description: ""
lead: ""
date: 2022-08-05T18:08:48.678Z
lastmod: 2022-10-11T21:09:37.692Z
draft: false
images: []
weight: 100
---

## Overview

write a narrative here about current state of affairs

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
<div class="text-end">
    <sup>1</sup> Chrome M108 and Windows 11 2022
    <sup>2</sup> Requires [Google Play Services Beta](https://developers.google.com/android/guides/beta-program)
</div>

## Additional Information

insert additional info here
