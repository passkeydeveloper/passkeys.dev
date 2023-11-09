---
title: "Device Support"
description: "Detailed information about passkey support across devices and ecosystems"
lead: ""
date: 2022-08-05T18:08:48.678Z
draft: false
images: []
weight: 100
---

## Overview

Support for passkeys is currently rolling out across major operating systems and browsers. This page will be updated as the ecosystem evolves. The [matrix below](#matrix) maps out the various features that support the passkey experience. Additional information about each platform is available in the [Reference section of Docs](/docs/reference/android).

Passkeys created in **iOS or iPadOS** can be used on:

- The same iPhone or iPad
- iPhones and iPads using the same Apple ID (synced automatically)
- Macs using the same Apple ID (synced automatically)
- Macs using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- Windows devices in Edge and Chrome using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- Chromebooks and other ChromeOS devices using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- Ubuntu devices in Edge and Chrome using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)

Passkeys created in **Android** can be used on:

- The same Android device
- Android devices using the same Google account (synced automatically)
- Macs using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- Windows devices in Edge and Chrome using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- iPhones and iPads using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- Chromebooks and other ChromeOS devices using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- Ubuntu devices in Edge and Chrome using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)

Passkeys created in **macOS** can be used on:

- Macs using the same Apple ID (synced automatically)
- iPhones and iPads using the same Apple ID (synced automatically)
  - Passkeys created on a Mac and synced to an iPhone and/or iPad via iCloud Keychain can be used in all the places listed above under "iOS or iPadOS"

[Device-bound passkeys](/docs/reference/terms/#device-bound-passkey) created in **Windows** can be used on:

- the same Windows device that created them

## Matrix

<div id="device-support-table" class="table-responsive">
  <table class="table table-striped mt-0">
    <thead>
      <tr class="fw-bold">
        <td>Capability</td>
        <td class="text-center">
          <a href="/docs/reference/android/">Android</a>
        </td>
        <td class="text-center">Chrome OS</td>
        <td class="text-center">
          <a href="/docs/reference/ios/">iOS/iPad OS</a>
        </td>
        <td class="text-center"><a href="/docs/reference/macos/">macOS</a></td>
        <td class="text-center">Ubuntu</td>
        <td class="text-center">
          <a href="/docs/reference/windows/">Windows</a>
        </td>
      </tr>
    </thead>
    <tr>
      <td>
        <span class="fw-bold">
          <a href="../docs/reference/terms/#synced-passkey" target="_blank">
            Synced Passkeys
          </a>
        </span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v9+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-calendar-plus fs-4" title="Planned" alt="calendar icon"></i>
        <br />
        Planned <sup>1</sup>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v16+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4"></i>
        <br />
        <span class="fs-6 text-muted"> v13+ <sup>2</sup> </span>
      </td>
      <td class="text-center">
        <i class="bi bi-x-circle-fill text-danger fs-4"></i>
        <br />
        <span class="fs-6 text-muted"> Not Supported </span>
      </td>
      <td class="text-center">
        <i class="bi bi-calendar-plus fs-4" title="Planned" alt="calendar icon"></i>
        <br />
        Planned <sup>1</sup>
      </td>
    </tr>
    <tr>
      <td class="fw-bold">
        <a href="../docs/reference/terms/#autofill-ui" target="_blank">
          Browser Autofill UI
        </a>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4"></i>
        <br />
        Chrome
        <br />
        <br />
        <i class="bi bi-calendar-plus fs-4" title="Planned" alt="calendar icon"></i>
        <br />
        Edge
        <br />
        <br />
        <i class="bi bi-x-circle-fill text-danger fs-4"></i>
        <br />
        Firefox
      </td>
      <td class="text-center">
        <i class="bi bi-calendar-plus fs-4" title="Planned" alt="calendar icon"></i>
        <br />
        Planned
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4"></i>
        <br />
        Safari
        <br />
        Chrome
        <br />
        Edge
        <br />
        Firefox
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4"></i>
        <br />
        Safari
        <br />
        Chrome
        <br />
        <i class="bi bi-calendar-plus fs-4" title="Planned" alt="calendar icon"></i>
        <br />
        Edge
        <br />
        Firefox
      </td>
      <td class="text-center">
        <i class="bi bi-x-circle-fill text-danger fs-4"></i>
        <br />
        <span class="fs-6 text-muted">Not Supported</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4"></i><br />Chrome
        <sup>3</sup>
        <br />
        <br />
        <i class="bi bi-calendar-plus fs-4" title="Planned" alt="calendar icon"></i>
        <br />
        Edge
        <br />
        Firefox
      </td>
    </tr>
    <tr class="align-middle">
      <td>
        <a href="../docs/reference/terms/#cross-device-authentication-cda" target="_blank">
          Cross-Device Authentication
        </a>
        <br />
        <a href="../docs/reference/terms/#cda-authenticator" target="_blank">
          <span class="fst-italic fw-bold">Authenticator</span>
        </a>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v9+</span>
      </td>
      <td class="text-center">
        <span class="fs-6 text-muted">n/a</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v16+</span>
      </td>
      <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
      <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
      <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
    </tr>
    <tr>
      <td>
        <a href="../docs/reference/terms/#cross-device-authentication-cda" target="_blank">
          Cross-Device Authentication
        </a>
        <br />
        <a href="../docs/reference/terms/#cda-client" target="_blank">
          <span class="fst-italic fw-bold">Client</span>
        </a>
      </td>
      <td class="text-center">
        <i class="bi bi-calendar-plus fs-4" title="Planned" alt="calendar icon"></i>
        <br />
        Planned
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v108+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v16+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v13+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4"></i
        ><br />Chrome<br />Edge
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v23H2+</span>
      </td>
    </tr>
    <tr>
      <td>
        <a href="../docs/reference/terms/#third-party-passkey-provider" target="_blank">
          Third-Party Passkey Providers
        </a>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v14+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle text-muted fs-4"></i>
        <br />
        <span class="text-muted">Browser<br>Extensions</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4" title="Supported" alt="green check"></i>
        <br />
        <span class="fs-6 text-muted">v17+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-4" title="Supported" alt="green check"></i>
        <br />
        <span class="fs-6 text-muted">v14+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle text-muted fs-4"></i>
        <br />
        <span class="text-muted">Browser<br>Extensions</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle text-muted fs-4"></i>
        <br />
        <span class="text-muted">Browser<br>Extensions</span>
        <br />
        <i class="bi bi-calendar-plus fs-4" title="Planned" alt="calendar icon"></i>
        <br />
        Native Support<br>Planned
      </td>
    </tr>
  </table>
  <details>
    <summary>Advanced Capabilities</summary>
    <div id="device-support-table" class="table-responsive">
      <table class="table table-striped mt-0">
        <thead>
          <tr class="fw-bold">
            <td>Capability</td>
            <td class="text-center">
              <a href="/docs/reference/android/">Android</a>
            </td>
            <td class="text-center">Chrome OS</td>
            <td class="text-center">
              <a href="/docs/reference/ios/">iOS/iPad OS</a>
            </td>
            <td class="text-center">
              <a href="/docs/reference/macos/">macOS</a>
            </td>
            <td class="text-center">Ubuntu</td>
            <td class="text-center">
              <a href="/docs/reference/windows/">Windows</a>
            </td>
          </tr>
          <tr class="align-middle">
            <td class="fw-bold">
              <a href="../docs/reference/terms/#device-bound-passkey" target="_blank">
                <span class="fst-italic">Device-bound</span> Passkeys
              </a>
            </td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill text-danger fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill text-danger fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center">
              <i class="bi bi-usb-drive fs-4"></i>
              <br />
              on security keys
            </td>
            <td class="text-center">
              <i class="bi bi-usb-drive fs-4"></i>
              <br />
              on security keys
            </td>
            <td class="text-center">
              <i class="bi bi-usb-drive fs-4"></i>
              <br />
              on security keys
            </td>
            <td class="text-center">
              <i class="bi bi-check-circle-fill text-success fs-4"></i>
            </td>
          </tr>
          <tr class="align-middle">
            <td class="fw-bold">
              <a href="../docs/reference/terms/#attestation" target="_blank">
                Device-bound Passkey Attestation
              </a>
            </td>
            <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
            <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
            <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
            <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
            <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
            <td class="text-center">
              <i class="bi bi-check-circle-fill text-success fs-4"></i>
            </td>
          </tr>
          <tr class="align-middle">
            <td class="fw-bold">
              <a href="../docs/reference/terms/#attestation" target="_blank">
                Synced Passkey Attestation
              </a>
            </td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill text-danger fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill text-danger fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill text-danger fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
            <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
          </tr>
        </thead>
      </table>
    </div>
  </details>
</div>
<div class="text-end mb-5 mt-5">
  <sup>1</sup>
  Device-bound passkeys supported
  <br />
  <sup>2</sup>
  See
  <a href="/docs/reference/macos/#browser-behavior" target="_blank">
    macOS browser behavior
  </a>
  for caveats
  <br />
  <sup>3</sup>
  Chrome M108 and Windows 11 22H2
</div>
