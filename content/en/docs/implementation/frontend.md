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

## 1. Call `navigator.credentials.create()`

TODO

## 2. Send the registration response to the server

TODO

## 3. Call `navigator.credentials.get()`

TODO

## 4. Send the authentication response to the server

TODO
