---
title: "Device Support"
description: "Detailed information about passkey support across devices and ecosystems"
layout: full-page
type: misc
---

This page, along with the rest of passkeys.dev, is targeted at relying party developers and is not intended to be an end user facing resource.

> Said differently, **please don’t link to this page from end user focused resources** 😉

## Matrix {#matrix}

This matrix represents the default capabilities for a user out of the box. Additional capabilities may be available when a user installs a different passkey provider.

{{< button color="dark" href="https://featuredetect.passkeys.dev" size="md" >}}Test this client!{{< /button >}}

### Basic Capabilities {#basics}

{{< unsafe >}}
<!-- markdownlint-disable no-inline-html -->
<div id="device-support-table" class="table-responsive mt-3">
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
        <span>
          <a href="/docs/reference/terms/#synced-passkey" target="_blank">
            Synced Passkeys
          </a>
        </span>
      </td>
      <td class="text-center">
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <br />
          <span class="fs-6 text-muted">v9+</span>
      </td>
      <td class="text-center">
       {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <br />
          <span class="fs-6 text-muted">v129+</span>
      </td>
      <td class="text-center">
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <br />
          <span class="fs-6 text-muted">v16+</span>
      </td>
      <td class="text-center">
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <br />
          <span class="fs-6 text-muted"> v13+</span>
      </td>
      <td class="text-center">
        {{< fa fa-circle-check fa-xl mb-2>}}
          <br />
          <span class="fs-6 text-muted">Browser<br>Extensions</span>
      </td>
      <td class="text-center">
        {{< fa fa-calendar-plus fa-xl mb-2>}}
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
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <span class="fs-6">
            <br />
            Chrome 108+
            <br />
            Edge 122+
            <br />
          </span>
          <br />
          {{< fas fa-circle-xmark fa-xl mb-2 text-danger>}}
            <span class="fs-6">
              <br />
              Firefox
            </span>
      </td>
      <td class="text-center">
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <br />
          <span class="fs-6 text-muted">v129+</span>
      </td>
      <td class="text-center">
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
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
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
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
        {{< fa fa-circle-check fa-xl mb-2>}}
          <br />
          <span class="fs-6 text-muted">Browser<br>Extensions</span>
      </td>
      <td class="text-center">
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
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
    <tr class="align-top">
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
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <br />
          <span class="fs-6 text-muted">v9+</span>
      </td>
      <td class="text-center">
        <span class="fs-6 text-muted">-<br>n/a</span>
      </td>
      <td class="text-center">
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <br />
          <span class="fs-6 text-muted">v16+</span>
      </td>
      <td class="text-center"><span class="fs-6 text-muted">-<br>n/a</span></td>
      <td class="text-center"><span class="fs-6 text-muted">-<br>n/a</span></td>
      <td class="text-center"><span class="fs-6 text-muted">-<br>n/a</span></td>
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
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <br />
          <span class="fs-6 text-muted">v9+</span>
      </td>
      <td class="text-center">
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <br />
          <span class="fs-6 text-muted">v108+</span>
      </td>
      <td class="text-center">
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <br />
          <span class="fs-6 text-muted">v16+</span>
      </td>
      <td class="text-center">
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <br />
          <span class="fs-6 text-muted">v13+</span>
      </td>
      <td class="text-center">
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <span class="fs-6"><br />Chrome<br />Edge</span>
      </td>
      <td class="text-center">
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
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
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <br />
          <span class="fs-6 text-muted">v14+</span>
      </td>
      <td class="text-center">
        {{< fa fa-circle-check fa-xl mb-2>}}
          <br />
          <span class="fs-6 text-muted">Browser<br>Extensions</span>
      </td>
      <td class="text-center">
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <br />
          <span class="fs-6 text-muted">v17+</span>
      </td>
      <td class="text-center">
        {{< fas fa-circle-check fa-xl mb-2 text-success >}}
          <br />
          <span class="fs-6 text-muted">v14+</span>
      </td>
      <td class="text-center">
        {{< fa fa-circle-check fa-xl mb-2>}}
          <br />
          <span class="fs-6 text-muted">Browser<br>Extensions</span>
      </td>
      <td class="text-center">
        {{< fa fa-circle-check fa-xl mb-2>}}
          <br />
          <span class="fs-6 text-muted">Browser<br>Extensions</span>
          <br />
          <br />
          {{< fa fa-calendar-plus fa-xl mb-2>}}
            <br />
            <span class="fs-6">Native Planned</span>
      </td>
    </tr>
  </table>
</div>
<!-- markdownlint-enable no-inline-html -->
{{< /unsafe >}}

### Native Apps {#native-apps}

{{< unsafe >}}
<!-- markdownlint-disable no-inline-html -->
<div id="device-support-native-apps" class="table-responsive">
  <table class="table table-striped mt-0">
    <thead>
      <tr>
        <td class="fw-bold">Invocation Method</td>
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
      <tr class="align-top">
        <td>
          Native Platform APIs
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success >}}
        </td>
        <td class="text-center">
          <span class="fs-6 text-muted">n/a</span>
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success >}}
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success >}}
        </td>
        <td class="text-center">
          {{< fa fa-calendar-plus fa-xl mb-2>}}
            <br />
            <span class="fs-6">Planned</span>
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success >}}
        </td>
      </tr>
      <tr class="align-top">
        <td>
          Default Browser
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success >}}
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success >}}
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success >}}
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success >}}
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success >}}
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success >}}
        </td>
      </tr>
      <tr class="align-top">
        <td>
          System WebView
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success >}}
            <br />
            <span class="fs-6 text-muted"><a
                href="https://developer.chrome.com/docs/android/custom-tabs/guide-get-started" target="_blank">Custom
                Tabs</a></span>
        </td>
        <td class="text-center"><span class="fs-6 text-muted">-<br>n/a</span></td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success >}}
            <br />
            <span class="fs-6 text-muted lh-1"><a
                href="https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession"
                target="_blank">ASWeb<br>Authentication<br>Session</a></span>
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success >}}
            <br />
            <span class="fs-6 text-muted lh-1"><a
                href="https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession"
                target="_blank">ASWeb<br>Authentication<br>Session</a></span>
        </td>
        <td class="text-center"><span class="fs-6 text-muted">-<br>n/a</span></td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success >}}
            <br />
            <span class="fs-6 text-muted"><a href="https://developer.microsoft.com/en-us/microsoft-edge/webview2/"
                target="_blank">Edge<br>WebView2</a></span>
        </td>
      </tr>
      <tr class="align-top">
        <td>
          Embedded WebView
        </td>
        <td class="text-center">
          {{< fa fa-circle-check fa-xl mb-2>}}
            <br />
            <span class="fs-6 text-muted">WebView </span><sup><a href="#fn6">6</a></sup>
        </td>
        <td class="text-center"><span class="fs-6 text-muted">-<br>n/a</span></td>
        <td class="text-center">
          {{< fa fa-circle-check fa-xl mb-2>}}
            <br />
            <span class="fs-6 text-muted">WKWebView </span><sup><a href="#fn7">7</a></sup>
        </td>
        <td class="text-center">
          {{< fa fa-circle-check fa-xl mb-2>}}
            <br />
            <span class="fs-6 text-muted">WKWebView </span><sup><a href="#sup8">8</a></sup>
        </td>
        <td class="text-center"><span class="fs-6 text-muted">-<br>n/a</span></td>
        <td class="text-center">
          {{< fas fa-circle-xmark fa-xl mb-2 text-danger>}}
        </td>
      </tr>
    </thead>
  </table>
</div>
<!-- markdownlint-enable no-inline-html -->
{{< /unsafe >}}

### Advanced Capabilities {#advanced}

{{< unsafe >}}
<!-- markdownlint-disable no-inline-html -->
<div id="device-support-table-adv" class="table-responsive">
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
      <tr class="align-top">
        <td class="fw-bold">
          <a href="../docs/reference/terms/#device-bound-passkey" target="_blank">
            <span class="fst-italic">Device-bound</span> Passkeys
          </a>
        </td>
        <td class="text-center">
          {{< fas fa-key fa-xl mb-2>}}
            <br />
            <span class="fs-6">on security keys</span>
        </td>
        <td class="text-center">
          {{< fas fa-key fa-xl mb-2>}}
            <br />
            <span class="fs-6">on security keys</span>
        </td>
        <td class="text-center">
          {{< fas fa-key fa-xl mb-2>}}
            <br />
            <span class="fs-6">on security keys</span>
        </td>
        <td class="text-center">
          {{< fas fa-key fa-xl mb-2>}}
            <br />
            <span class="fs-6">on security keys</span>
        </td>
        <td class="text-center">
          {{< fas fa-key fa-xl mb-2>}}
            <br />
            <span class="fs-6">on security keys</span>
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success>}}
        </td>
      </tr>
      <tr class="align-top">
        <td class="fw-bold">
          <a href="https://w3c.github.io/webauthn/#enum-hints" target="_blank">Client Hints</a>
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success>}}
            <br />
            <span class="fs-6">Chrome 128+</span>
            <br />
            <span class="fs-6">Edge 128+</span>
            <br />
            <br />
            {{< fas fa-circle-xmark fa-xl mb-2 text-danger>}}
              <br />
              Firefox
              </span>
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success>}}
            <br>
            <span class="fs-6">128+</span>
        </td>
        <td class="text-center">
          {{< fas fa-circle-xmark fa-xl mb-2 text-danger>}}
            <br />
            <span class="fs-6 text-muted">Not Supported</span>
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success>}}
            <br />
            <span class="fs-6">Chrome 128+</span>
            <br />
            <span class="fs-6">Edge 128+</span>
            <br />
            <br />
            {{< fas fa-circle-xmark fa-xl mb-2 text-danger>}}
              <br />
              Firefox
              <br />
              Safari
              </span>
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success>}}
            <br />
            <span class="fs-6">Chrome 128+</span>
            <br />
            <span class="fs-6">Edge 128+</span>
            <br />
            <br />
            {{< fas fa-circle-xmark fa-xl mb-2 text-danger>}}
              <br />
              Firefox
              <br />
              <br />
              </span>
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success>}}
            <br />
            <span class="fs-6">Chrome 128+</span>
            <br />
            <span class="fs-6">Edge 128+</span>
            <br />
            <br />
            {{< fas fa-circle-xmark fa-xl mb-2 text-danger>}}
              <br />
              Firefox
              <br />
              <br />
              </span>
        </td>
      </tr>
      <tr class="align-top">
        <td class="fw-bold" id="ror">
          <a href="/docs/advanced/related-origins/" target="_blank">Related Origin Requests</a>
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success>}}
            <br />
            <span class="fs-6">Chrome 128+</span>
            <br />
            <span class="fs-6">Edge 128+</span>
            <br />
            <br />
            <br />
            {{< fas fa-circle-xmark fa-xl mb-2 text-danger>}}
              <br />
              <span class="fs-6">Firefox</span>
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success>}}
            <br />
            <span class="fs-6">128+</span>
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success>}}
            <br />
            <span class="fs-6">v18+</span>
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success>}}
            <br />
            <span class="fs-6">Chrome 128+</span>
            <br />
            <span class="fs-6">Edge 128+</span>
            <br />
            <span class="fs-6">Safari (macOS 15+)</span>
            <br />
            <br />
            {{< fas fa-circle-xmark fa-xl mb-2 text-danger>}}
              <br />
              Firefox
              </span>
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success>}}
            <br />
            <span class="fs-6">Chrome 128+</span>
            <br />
            <span class="fs-6">Edge 128+</span>
            <br />
            <br />
            <br />
            {{< fas fa-circle-xmark fa-xl mb-2 text-danger>}}
              <br />
              Firefox
              <br />
              <br />
              </span>
        </td>
        <td class="text-center">
          {{< fas fa-circle-check fa-xl mb-2 text-success>}}
            <br />
            <span class="fs-6">Chrome 128+</span>
            <br />
            <span class="fs-6">Edge 128+</span>
            <br />
            <br />
            <br />
            {{< fas fa-circle-xmark fa-xl mb-2 text-danger>}}
              <br />
              Firefox
              <br />
              <br />
              </span>
        </td>
      </tr>
      <tr class="align-top">
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
          {{< fas fa-circle-check fa-xl mb-2 text-success>}}
        </td>
      </tr>
    </thead>
  </table>
</div>
<!-- markdownlint-enable no-inline-html -->
{{< /unsafe >}}

{{< unsafe >}}
<!-- markdownlint-disable no-inline-html -->
<div class="text-end mb-5 mt-5">
  <sup id="fn1">1</sup>
  Device-bound passkeys supported
  <br />
  <sup id="fn3">3</sup>
  Windows 11 22H2+
  <br />
  <sup id="fn4">4</sup>
  Experimental (behind flag)
  <br />
  <sup id="fn5">5</sup>
  Partial support
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
<!-- markdownlint-enable no-inline-html -->
{{< /unsafe >}}
