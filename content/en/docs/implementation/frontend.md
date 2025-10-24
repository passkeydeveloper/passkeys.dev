---
title: "Frontend Requirements"
description: "Guidance on handling passkeys registration and authentication in the browser"
date: 2025-01-02T12:00:00.000Z
---

The website's frontend plays the following roles in facilitating use of WebAuthn:

1. Call `navigator.credentials.create()`
2. Send the registration response to the server
3. Call `navigator.credentials.get()`
4. Send the authentication response to the server

The guidance below identifies best practices to fulfill these responsibilities
and securely incorporate passkeys-based authentication into your website.

{{< alert type="info" color="warning" icon="fa-solid fa-triangle-exclamation" >}}
**Please note that this is general guidance; it does not account
for any one specific browser implementation.**
It is intended to be a launching point. Care should be taken as you consider
how best to adapt this guidance for your particular site.
{{< /alert >}}

## Using JSON between frontend and backend

Some of the options that get passed in to WebAuthn's `navigator.credentials.create()`
and `navigator.credentials.get()` must be of type `Uint8Array`. Unfortunately `Uint8Array` values
do not serialize well into a JSON representation, making it tricky to receive and send them
between the backend to the frontend.

It is suggested that options and responses be shuttled between frontend and backend using
**Base64URL** encoding on `Uint8Array` values. Base64URL `string` representations of these values
are easier to transmit when passed back and forth as JSON.

The following `base64URLStringToBuffer()` and `bufferToBase64URLString()` methods
can be used to account for the lack of native JavaScript support
in web platforms to encode and decode between `Uint8Array` and Base64URL `string` values:

### base64URLStringToBuffer()

```ts
/**
 * Convert from a Base64URL-encoded string to an Array Buffer. Best used when converting a
 * credential ID from a JSON string to an ArrayBuffer, like in allowCredentials or
 * excludeCredentials
 *
 * Helper method to compliment `bufferToBase64URLString`
 */
export function base64URLStringToBuffer(base64URLString: string): ArrayBuffer {
  // Convert from Base64URL to Base64
  const base64 = base64URLString.replace(/-/g, '+').replace(/_/g, '/');
  /**
   * Pad with '=' until it's a multiple of four
   * (4 - (85 % 4 = 1) = 3) % 4 = 3 padding
   * (4 - (86 % 4 = 2) = 2) % 4 = 2 padding
   * (4 - (87 % 4 = 3) = 1) % 4 = 1 padding
   * (4 - (88 % 4 = 0) = 4) % 4 = 0 padding
   */
  const padLength = (4 - (base64.length % 4)) % 4;
  const padded = base64.padEnd(base64.length + padLength, '=');

  // Convert to a binary string
  const binary = atob(padded);

  // Convert binary string to buffer
  const buffer = new ArrayBuffer(binary.length);
  const bytes = new Uint8Array(buffer);

  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return buffer;
}
```

### bufferToBase64URLString()

```ts
/**
 * Convert the given array buffer into a Base64URL-encoded string. Ideal for converting various
 * credential response ArrayBuffers to string for sending back to the server as JSON.
 *
 * Helper method to compliment `base64URLStringToBuffer`
 */
export function bufferToBase64URLString(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let str = '';

  for (const charCode of bytes) {
    str += String.fromCharCode(charCode);
  }

  const base64String = btoa(str);

  return base64String.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
```

## 1. Call `navigator.credentials.create()`

TODO

## 2. Send the registration response to the server

TODO

## 3. Call `navigator.credentials.get()`

TODO

## 4. Send the authentication response to the server

TODO
