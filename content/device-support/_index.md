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
        <td class="fst-italic">Capability</td>
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
        <span>
          <a href="../docs/reference/terms/#synced-passkey" target="_blank">
            Synced Passkeys
          </a>
        </span>
      </td>
      <td class="text-center">
        {{< icon-circle-check-filled fill="green" size=30 >}}
        <br />
        <span class="fs-6 text-muted">v9+</span>
      </td>
      <td class="text-center">
        {{< icon-calendar-clock size="30" >}}
        <br />
        <span class="fs-6">
        Planned <sup><a href="#fn1">1</a></sup>
        </span>
      </td>
      <td class="text-center">
        {{< icon-circle-check-filled fill="green" size=30 >}}
        <br />
        <span class="fs-6 text-muted">v16+</span>
      </td>
      <td class="text-center">
        {{< icon-circle-check-filled fill="green" size=30 >}}
        <br />
        <span class="fs-6 text-muted"> v13+ <sup><a href="#fn2">2</a></sup>
      </td>
      <td class="text-center">
        {{< icon-circle-check stroke="grey" size=30 >}}
        <br />
        <span class="fs-6 text-muted">Browser<br>Extensions</span>
      </td>
      <td class="text-center">
        {{< icon-calendar-clock size="30" >}}
        <br />
        <span class="fs-6">
        Planned <sup><a href="#fn1">1</a></sup>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <a href="../docs/reference/terms/#autofill-ui" target="_blank">
          Browser Autofill UI
        </a>
      </td>
      <td class="text-center">
        {{< icon-circle-check-filled fill="green" size=30 >}}
        <span class="fs-6">
        <br />
        Chrome 108+
        <br />
        Edge 122+
        <br />
        </span>
        <br />
        {{< icon-circle-x-filled fill="red" size=30 >}}
        <span class="fs-6">
        <br />
        Firefox
        </span>
      </td>
      <td class="text-center">
        {{< icon-calendar-clock size="30" >}}
        <span class="fs-6">
        <br />
        Planned
        </span>
      </td>
      <td class="text-center">
        {{< icon-circle-check-filled fill="green" size=30 >}}
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
        {{< icon-circle-check-filled fill="green" size=30 >}}
        <span class="fs-6">
        <br />
        Safari
        <br />
        Chrome 108+
        <br />
        Firefox 122+
        <br />
        Edge 122+
        <br />
        </span>
      </td>
      <td class="text-center">
        {{< icon-circle-check stroke="grey" size=30 >}}
        <br />
        <span class="fs-6 text-muted">Browser<br>Extensions</span>
      </td>
      <td class="text-center">
        {{< icon-circle-check-filled fill="green" size=30 >}}
        <span class="fs-6">
        <br />
        Chrome 108+ <sup><a href="#fn3">3</a></sup>
        <br />
        Firefox 122+ <sup><a href="#fn3">3</a></sup>
        <br />
        Edge 122+ <sup><a href="#fn3">3</a></sup>
        </span>
        <br />
      </td>
    </tr>
    <tr class="align-middle">
      <td>
        <a href="../docs/reference/terms/#cross-device-authentication-cda" target="_blank">
          Cross-Device Authentication
        </a>
        <br />
        <a href="../docs/reference/terms/#cda-authenticator" target="_blank">
          <span class="fst-italic">Authenticator</span>
        </a>
      </td>
      <td class="text-center">
        {{< icon-circle-check-filled fill="green" size=30 >}}
        <br />
        <span class="fs-6 text-muted">v9+</span>
      </td>
      <td class="text-center">
        <span class="fs-6 text-muted">n/a</span>
      </td>
      <td class="text-center">
        {{< icon-circle-check-filled fill="green" size=30 >}}
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
          <span class="fst-italic">Client</span>
        </a>
      </td>
      <td class="text-center">
        {{< icon-calendar-clock size="30" >}}
        <br />
        <span class="fs-6">Planned</span>
      </td>
      <td class="text-center">
        {{< icon-circle-check-filled fill="green" size=30 >}}
        <br />
        <span class="fs-6 text-muted">v108+</span>
      </td>
      <td class="text-center">
        {{< icon-circle-check-filled fill="green" size=30 >}}
        <br />
        <span class="fs-6 text-muted">v16+</span>
      </td>
      <td class="text-center">
        {{< icon-circle-check-filled fill="green" size=30 >}}
        <br />
        <span class="fs-6 text-muted">v13+</span>
      </td>
      <td class="text-center">
        {{< icon-circle-check-filled fill="green" size=30 >}}
        <span class="fs-6"><br />Chrome<br />Edge</span>
      </td>
      <td class="text-center">
        {{< icon-circle-check-filled fill="green" size=30 >}}
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
        {{< icon-circle-check-filled fill="green" size=30 >}}
        <br />
        <span class="fs-6 text-muted">v14+</span>
      </td>
      <td class="text-center">
        {{< icon-circle-check stroke="grey" size=30 >}}
        <br />
        <span class="fs-6 text-muted">Browser<br>Extensions</span>
      </td>
      <td class="text-center">
        {{< icon-circle-check-filled fill="green" size=30 >}}
        <br />
        <span class="fs-6 text-muted">v17+</span>
      </td>
      <td class="text-center">
        {{< icon-circle-check-filled fill="green" size=30 >}}
        <br />
        <span class="fs-6 text-muted">v14+</span>
      </td>
      <td class="text-center">
        {{< icon-circle-check stroke="grey" size=30 >}}
        <br />
        <span class="fs-6 text-muted">Browser<br>Extensions</span>
      </td>
      <td class="text-center">
        {{< icon-circle-check stroke="grey" size=30 >}}
        <br />
        <span class="fs-6 text-muted">Browser<br>Extensions</span>
        <br />
        <br />
        {{< icon-calendar-clock size="30" >}}
        <br />
        <span class="fs-6">Native Planned</span>
      </td>
    </tr>
  </table>

## Native Apps

  <table class="table table-striped mt-0">
    <thead>
      <tr>
        <td class="fw-bold fst-italic">Invocation Method</td>
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
        <td>
            Native Platform APIs
        </td>
        <td class="text-center">
          {{< icon-circle-check-filled fill="green" size=30 >}}
        </td>
        <td class="text-center">
          <span class="fs-6 text-muted">n/a</span>
        </td>
        <td class="text-center">
          {{< icon-circle-check-filled fill="green" size=30 >}}
        </td>
        <td class="text-center">
          {{< icon-circle-check-filled fill="green" size=30 >}}
        </td>
        <td class="text-center">
          {{< icon-circle-x-filled fill="red" size=30 >}}
        </td>
        <td class="text-center">
          {{< icon-circle-check-filled fill="green" size=30 >}}
        </td>
      </tr>
      <tr class="align-middle">
        <td>
            Default Browser
        </td>
        <td class="text-center">
          {{< icon-circle-check-filled fill="green" size=30 >}}
        </td>
        <td class="text-center">
          {{< icon-circle-check-filled fill="green" size=30 >}}
        </td>
        <td class="text-center">
          {{< icon-circle-check-filled fill="green" size=30 >}}
        </td>
        <td class="text-center">
          {{< icon-circle-check-filled fill="green" size=30 >}}
        </td>
        <td class="text-center">
          {{< icon-circle-check-filled fill="green" size=30 >}}
        </td>
        <td class="text-center">
          {{< icon-circle-check-filled fill="green" size=30 >}}
        </td>
      </tr>
      <tr class="align-middle">
        <td>
          System WebView
        </td>
        <td class="text-center">
          {{< icon-circle-check-filled fill="green" size=30 >}}
          <br />
          <span class="fs-6 text-muted"><a href="https://developer.chrome.com/docs/android/custom-tabs/guide-get-started" target="_blank">Custom Tabs</a></span>
        </td>
        <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
        <td class="text-center">
          {{< icon-circle-check-filled fill="green" size=30 >}}
          <br />
          <span class="fs-6 text-muted"><a href="https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession" target="_blank">ASWebAuthentication<wbr>Session</a></span>
        </td>
        <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
        <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
        <td class="text-center">
          {{< icon-circle-check-filled fill="green" size=30 >}}
          <br />
          <span class="fs-6 text-muted"><a href="https://developer.microsoft.com/en-us/microsoft-edge/webview2/" target="_blank">Edge WebView2</a></span>
        </td>
      </tr>
      <tr class="align-middle">
        <td>
          Embedded WebView
        </td>
        <td class="text-center">
          {{< icon-circle-check stroke="green" size=30 >}}
          <br />
          <span class="fs-6 text-muted">WebView </span><sup><a href="#fn6">6</a></sup>
        </td>
        <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
        <td class="text-center">
          {{< icon-circle-check stroke="green" size=30 >}}
          <br />
          <span class="fs-6 text-muted">WKWebView </span><sup><a href="#fn7">7</a></sup>
        </td>
        <td class="text-center">
          {{< icon-circle-check stroke="green" size=30 >}}
          <br />
          <span class="fs-6 text-muted">WKWebView </span><sup><a href="#sup8">8</a></sup>
        </td>
        <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
        <td class="text-center">
          {{< icon-circle-x-filled fill="red" size=30 >}}
        </td>
      </tr>
    </thead>
  </table>

## Advanced Capabilities

  <details>
    <summary><strong>Details</strong></summary>
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
              {{< icon-circle-x-filled fill="red" size=30 >}}
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center">
              {{< icon-circle-x-filled fill="red" size=30 >}}
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center">
              {{< icon-device-usb size=30 >}}
              <br />
              <span class="fs-6">on security keys</span>
            </td>
            <td class="text-center">
              {{< icon-device-usb size=30 >}}
              <br />
              <span class="fs-6">on security keys</span>
            </td>
            <td class="text-center">
              {{< icon-device-usb size=30 >}}
              <br />
              <span class="fs-6">on security keys</span>
            </td>
            <td class="text-center">
              {{< icon-circle-check-filled fill="green" size=30 >}}
            </td>
          </tr>
          <tr class="align-middle">
            <td class="fw-bold">
                Client Hints
            </td>
            <td class="text-center">
              {{< icon-circle-x-filled fill="red" size=30 >}}
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center">
              {{< icon-settings-code size=30 >}}
              <br />
              <span class="fs-6">Chrome</span> <sup><a href="#fn4">4</a></sup>
            </td>
            <td class="text-center">
              {{< icon-circle-x-filled fill="red" size=30 >}}
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center">
              {{< icon-settings-code size=30 >}}
              <span class="fs-6">
              <br />
              Chrome <sup><a href="#fn4">4</a></sup>
              <br />
              Edge <sup><a href="#fn4">4</a></sup>
              <br />
              <br />
              {{< icon-circle-x-filled fill="red" size=30 >}}
              <br />
              Safari
              <br />
              Firefox
              </span>
            </td>
            <td class="text-center">
              {{< icon-settings-code size=30 >}}
              <span class="fs-6">
              <br />
              Chrome <sup><a href="#fn4">4</a></sup>
              <br />
              Edge <sup><a href="#fn4">4</a></sup>
              <br />
              <br />
              {{< icon-circle-x-filled fill="red" size=30 >}}
              <br />
              Firefox
              <br />
              <br />
              </span>
            </td>
            <td class="text-center">
              {{< icon-settings-code size=30 >}}
              <span class="fs-6">
              <br />
              Chrome <sup><a href="#fn5">4</a> <a href="#fn5">5</a></sup>
              <br />
              Edge <sup><a href="#fn4">4</a> <a href="#fn5">5</a></sup>
              <br />
              <br />
              {{< icon-circle-x-filled fill="red" size=30 >}}
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
              {{< icon-circle-check-filled fill="green" size=30 >}}
            </td>
          </tr>
          <tr class="align-middle">
            <td class="fw-bold">
              <a href="../docs/reference/terms/#attestation" target="_blank">
                Synced Passkey Attestation
              </a>
            </td>
            <td class="text-center">
              {{< icon-circle-x-filled fill="red" size=30 >}}
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center"><span class="fs-6 text-muted">n/a</span></td>
            <td class="text-center">
              {{< icon-circle-x-filled fill="red" size=30 >}}
              <br />
              <span class="fs-6 text-muted">Not Supported</span>
            </td>
            <td class="text-center">
              {{< icon-circle-x-filled fill="red" size=30 >}}
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
  <sup id="fn1">1</sup>
  Device-bound passkeys supported
  <br />
  <sup id="fn2">2</sup>
  See
  <a href="/docs/reference/macos/#browser-behavior" target="_blank">
    macOS browser behavior
  </a>
  for caveats
  <br />
  <sup id="fn3">3</sup>
  Windows 11 22H2+
  <br />
  <sup id="fn4">4</sup>
  Experimental (behind flag)
  <br />
  <sup id="fn5">5</sup>
  Partial support (requires Windows changes)
  <br />
  <sup id="fn6">6</sup>
  See details on the <a href="/docs/reference/android/#webviews" target="_blank">Android reference page</a>
  <br />
  <sup id="fn7">7</sup>
  See details on <a href="/docs/reference/ios/#webviews" target="_blank">iOS reference page</a>
  <br />
  <sup id="fn8">8</sup>
  See details on <a href="/docs/reference/macos/#webviews" target="_blank">macOS reference page</a>
</div>
