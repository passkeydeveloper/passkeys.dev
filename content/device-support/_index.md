---
layout: fullpage
title: "Device Support"
description: "Detailed information about passkey support across devices and ecosystems"
lead: ""
date: 2022-08-05T18:08:48.678Z
draft: false
images: []
weight: 100
---

This page, along with the rest of passkeys.dev, is targeted at relying party developers and is not intended to be an end user facing resource.

> Said differently, **please don’t link to this page from end user focused resources** 😉

## Overview

Support for passkeys is currently rolling out across major operating systems and browsers. This page will be updated as the ecosystem evolves. The [matrix below](#matrix) maps out the various features that support the passkey experience. Additional information about each platform is available in the [Reference section of Docs](/docs/reference/android).

Passkeys created in **iOS or iPadOS** can be used on:

- The same iPhone or iPad
- iPhones and iPads using the same Apple ID (synced automatically)
- Macs using the same Apple ID (synced automatically)
- Macs using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- Windows devices using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- Chromebooks and other ChromeOS devices using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- Ubuntu devices in Edge and Chrome using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)

Passkeys created in **Android** can be used on:

- The same Android device
- Android devices using the same Google account (synced automatically)
- Macs using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
- Windows devices using [FIDO Cross-Device Authentication](/docs/reference/terms/#cross-device-authentication-cda)
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
        <i class="bi bi-check-circle-fill color-green fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v9+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-calendar-plus fs-4" title="Planned" alt="calendar icon"></i>
        <br />
        <span class="fs-6">
        Planned <sup><a href="#supone">1</a></sup>
        </span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill color-green fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v16+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill color-green fs-4"></i>
        <br />
        <span class="fs-6 text-muted"> v13+ <sup><a href="#suptwo">2</a></sup>
      </td>
      <td class="text-center">
        <i class="bi bi-x-circle-fill color-red fs-4"></i>
        <br />
        <span class="fs-6 text-muted"> Not Supported </span>
      </td>
      <td class="text-center">
        <i class="bi bi-calendar-plus fs-4" title="Planned" alt="calendar icon"></i>
        <br />
        <span class="fs-6">
        Planned <sup><a href="#supone">1</a></sup>
        </span>
      </td>
    </tr>
    <tr>
      <td class="fw-bold">
        <a href="../docs/reference/terms/#autofill-ui" target="_blank">
          Browser Autofill UI
        </a>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill color-green fs-4"></i>
        <span class="fs-6">
        <br />
        Chrome
        <br />
        <br />
        </span>
        <i class="bi bi-calendar-plus fs-4" title="Planned" alt="calendar icon"></i>
        <span class="fs-6">
        <br />
        Edge
        </span>
        <br />
        <br />
        <i class="bi bi-x-circle-fill color-red fs-4"></i>
        <span class="fs-6">
        <br />
        Firefox
        </span>
      </td>
      <td class="text-center">
        <i class="bi bi-calendar-plus fs-4" title="Planned" alt="calendar icon"></i>
        <span class="fs-6">
        <br />
        Planned
        </span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill color-green fs-4"></i>
        <span class="fs-6">
        <br />
        Safari
        <br />
        Chrome
        <br />
        Edge
        <br />
        Firefox
        </span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill color-green fs-4"></i>
        <span class="fs-6">
        <br />
        Safari
        <br />
        Chrome
        <br />
        Firefox <sup><a href="#supfour">4</a></sup>
        <br />
        <br />
        </span>
        <i class="bi bi-calendar-plus fs-4" title="Planned" alt="calendar icon"></i>
        <span class="fs-6">
        <br />
        Edge
        </span>
      </td>
      <td class="text-center">
        <i class="bi bi-x-circle-fill color-red fs-4"></i>
        <br />
        <span class="fs-6 text-muted">Not Supported</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill color-green fs-4"></i>
        <span class="fs-6">
        <br />
        Chrome <sup><a href="#supthree">3</a></sup>
        <br />
        Firefox <sup><a href="#supfour">4</a></sup>
        </span>
        <br />
        <br />
        <i class="bi bi-calendar-plus fs-4" title="Planned" alt="calendar icon"></i>
        <span class="fs-6">
        <br />
        Edge
        </span>
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
        <i class="bi bi-check-circle-fill color-green fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v9+</span>
      </td>
      <td class="text-center">
        <span class="fs-6 text-muted">n/a</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill color-green fs-4"></i>
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
        <span class="fs-6">Planned</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill color-green fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v108+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill color-green fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v16+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill color-green fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v13+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill color-green fs-4"></i>
        <span class="fs-6"><br />Chrome<br />Edge</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill color-green fs-4"></i>
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
        <i class="bi bi-check-circle-fill color-green fs-4"></i>
        <br />
        <span class="fs-6 text-muted">v14+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle text-muted fs-4"></i>
        <br />
        <span class="fs-6 text-muted">Browser<br>Extensions</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill color-green fs-4" title="Supported" alt="green check"></i>
        <br />
        <span class="fs-6 text-muted">v17+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle-fill color-green fs-4" title="Supported" alt="green check"></i>
        <br />
        <span class="fs-6 text-muted">v14+</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle text-muted fs-4"></i>
        <br />
        <span class="fs-6 text-muted">Browser<br>Extensions</span>
      </td>
      <td class="text-center">
        <i class="bi bi-check-circle text-muted fs-4"></i>
        <br />
        <span class="fs-6 text-muted">Browser<br>Extensions</span>
        <br />
        <br />
        <i class="bi bi-calendar-plus fs-4" title="Planned" alt="calendar icon"></i>
        <br />
        <span class="fs-6">Native Planned</span>
      </td>
    </tr>
  </table>
  <details>
    <summary><strong>Native Apps</strong></summary>
    <div id="device-support-table" class="table-responsive">
      <table class="table table-striped mt-0">
        <thead>
          <tr>
            <td>Invocation Method</td>
            <td class="text-center fw-bold">
              <a href="/docs/reference/android/">Android</a>
            </td>
            <td class="text-center fw-bold">Chrome OS</td>
            <td class="text-center fw-bold">
              <a href="/docs/reference/ios/">iOS/iPad OS</a>
            </td>
            <td class="text-center fw-bold">
              <a href="/docs/reference/macos/">macOS</a>
            </td>
            <td class="text-center fw-bold">Ubuntu</td>
            <td class="text-center fw-bold">
              <a href="/docs/reference/windows/">Windows</a>
            </td>
          </tr>
          <tr class="align-middle">
            <td class="fw-bold">
                Native Platform APIs
            </td>
            <td class="text-center">
              <i class="bi bi-check-circle-fill color-green fs-4"></i>
            </td>
            <td class="text-center">
              <span class="fs-6 text-muted">n/a</span>
            </td>
            <td class="text-center">
              <i class="bi bi-check-circle-fill color-green fs-4"></i>
            </td>
            <td class="text-center">
              <i class="bi bi-check-circle-fill color-green fs-4"></i>
            </td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill color-red fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center">
              <i class="bi bi-check-circle-fill color-green fs-4"></i>
            </td>
          </tr>
          <tr class="align-middle">
            <td class="fw-bold">
              System WebView
            </td>
            <td class="text-center">
              <i class="bi bi-check-circle-fill color-green fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Chrome<br>Custom Tabs</span>
            </td>
            <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
            <td class="text-center">
              <i class="bi bi-check-circle-fill color-green fs-4"></i>
              <br />
              <span class="fs-6 text-muted">ASWebAuthentication<wbr>Session</span>
            </td>
            <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
            <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
            <td class="text-center">
              <i class="bi bi-check-circle-fill color-green fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Edge WebView2</span>
            </td>
          </tr>
          <tr class="align-middle">
            <td class="fw-bold">
              Embedded WebView
            </td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill color-red fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill color-red fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill color-red fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill color-red fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  </details>
  <details>
    <summary><strong>Advanced Capabilities</strong></summary>
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
              <i class="bi bi-x-circle-fill color-red fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill color-red fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center">
              <i class="bi bi-usb-drive fs-4"></i>
              <br />
              <span class="fs-6">on security keys</span>
            </td>
            <td class="text-center">
              <i class="bi bi-usb-drive fs-4"></i>
              <br />
              <span class="fs-6">on security keys</span>
            </td>
            <td class="text-center">
              <i class="bi bi-usb-drive fs-4"></i>
              <br />
              <span class="fs-6">on security keys</span>
            </td>
            <td class="text-center">
              <i class="bi bi-check-circle-fill color-green fs-4"></i>
            </td>
          </tr>
          <tr class="align-middle">
            <td class="fw-bold">
                Client Hints
            </td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill color-red fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center">
              <i class="bi bi-wrench-adjustable-circle-fill fs-4"></i>
              <br />
              <span class="fs-6">Chrome</span> <sup><a href="#supfive">5</a></sup>
            </td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill color-red fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center">
              <i class="bi bi-wrench-adjustable-circle-fill fs-4"></i>
              <span class="fs-6">
              <br />
              Chrome <sup><a href="#supfive">5</a></sup>
              <br />
              Edge <sup><a href="#supfive">5</a></sup>
              <br />
              <br />
              <i class="bi bi-x-circle-fill color-red fs-4"></i>
              <br />
              Safari
              <br />
              Firefox
              </span>
            </td>
            <td class="text-center">
              <i class="bi bi-wrench-adjustable-circle-fill fs-4"></i>
              <span class="fs-6">
              <br />
              Chrome <sup><a href="#supfive">5</a></sup>
              <br />
              Edge <sup><a href="#supfive">5</a></sup>
              <br />
              <br />
              <i class="bi bi-x-circle-fill color-red fs-4"></i>
              <br />
              Firefox
              <br />
              <br />
              </span>
            </td>
            <td class="text-center">
              <i class="bi bi-wrench-adjustable-circle-fill fs-4"></i>
              <span class="fs-6">
              <br />
              Chrome <sup><a href="#supfive">5</a> <a href="#supsix">6</a></sup>
              <br />
              Edge <sup><a href="#supfive">5</a> <a href="#supsix">6</a></sup>
              <br />
              <br />
              <i class="bi bi-x-circle-fill color-red fs-4"></i>
              <br />
              Firefox
              <br />
              <br />
              </span>
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
              <i class="bi bi-check-circle-fill color-green fs-4"></i>
            </td>
          </tr>
          <tr class="align-middle">
            <td class="fw-bold">
              <a href="../docs/reference/terms/#attestation" target="_blank">
                Synced Passkey Attestation
              </a>
            </td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill color-red fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill color-red fs-4"></i>
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center">
              <i class="bi bi-x-circle-fill color-red fs-4"></i>
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
  <sup id="supone">1</sup>
  Device-bound passkeys supported
  <br />
  <sup id="suptwo">2</sup>
  See
  <a href="/docs/reference/macos/#browser-behavior" target="_blank">
    macOS browser behavior
  </a>
  for caveats
  <br />
  <sup id="supthree">3</sup>
  Chrome M108 and Windows 11 22H2
  <br />
  <sup id="supfour">4</sup>
  <a href="https://www.mozilla.org/en-US/firefox/122.0/releasenotes/" target="_blank">
    Firefox 122
  </a>
  <br />
  <sup id="supfive">5</sup>
  Experimental (behind flag)
  <br />
  <sup id="supsix">6</sup>
  Partial support (requires Windows changes)
</div>
