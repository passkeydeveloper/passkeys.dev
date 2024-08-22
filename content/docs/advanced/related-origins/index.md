---
title: "Related Origin Requests"
description: "The Related Origin Requests (RoR)feature allows an RP to enable a passkey to be created and used across a limited set of related origins."
lead: "The Related Origin Requests (RoR) feature allows an RP to enable a passkey to be created and used across a limited set of related origins."
date: 2024-08-22T15:20:51.937Z
draft: false
images: []
menu:
  docs:
    parent: "advanced"
#weight: 
toc: true
---

## Use Cases

The two use cases for Related Origin Requests (RoR) are deployments which use different country code top-level domains (ccTLD) across the world, and deployments where different branding is used for different services.

To address these use cases, it is recommended to leverage industry-standard federation protocols such as [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html). This approach facilitates a centralized login experience, by using a dedicated login page (e.g., login.example.com) that serves as the authentication point for all origins and services.

<strong>RoR is designed to be used when federation is <i>not</i> possible.</strong>

{{< callout context="note" title="Websites vs Apps" icon="outline/note" >}} RoR is a WebAuthn feature for the web. App platforms have existing mechanisms for mapping native apps to one or more web origins: [Digital Asset Links](https://developers.google.com/identity/credential-sharing/set-up) for Android and [Associated Domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains) on Apple platforms. {{< /callout >}}

### Country Code Top Level Domains (ccTLDs) {#cctld}

Many global organizations utilize [country code top level domains (ccTLDs)](https://icannwiki.org/Country_code_top-level_domain#Current_ccTLDs) to cater to their international services. For instance, a shopping website might use `shopping.com` for users in the United States, while also having `shopping.ca` for Canada, `shopping.co.uk` for the United Kingdom, `shopping.ie` for Ireland, and `shopping.sg` for Singapore, among others. However, a passkey created on `shopping.com` can't be used  on `shopping.sg`, and vice versa.

### Alternate Branding

Some organizations offer additional services with different or extended branding and share the same accounts. For instance, a shopping site might have their own credit card or their own travel services, which are accessed via different websites.

## How It Works

Related Origin Requests (RoR) works by allowing a Relying Party (RP) to provide a list of valid origins for a given Relying Party ID (RP ID).

During a WebAuthn ceremony, if the RP ID and origin do not match, the WebAuthn client can query the RP for a list of valid origins. The client processes that origin list and then re-evaluates the binding based on this additional context. If an origin is matched, the client will continue with the request in the context of the RP ID.

Labels are the portion of a domain name to the left of the [effective top level domain](https://developer.mozilla.org/en-US/docs/Glossary/eTLD) (commonly referred to as "eTLD+1"). For instance, `shopping` is the label for `shopping.com`, `shopping.co.uk`, `shopping.co.jp`, `shopping.net`, and `shopping.org`. Labels are used as a way to support the large number of entries required to support [ccTLDs](#cctld), while enabling clients to restrict the number of unique origins to prevent abuse.

If there are 30 origins in the list, all with the same label, these count as 1 unique label. WebAuthn requires client implementations to support at least 5 unique labels, however there are no known clients which support more than 5, so that should be treated as the maximum for deployments.

Below are three examples of origin lists and their respective label counts.

{{< tabs "label-examples" >}}
{{< tab "1 Label" >}}

1. `shopping`

```json
{
  "origins": [
    "shopping.com",
    "shopping.co.uk",
    "shopping.co.jp",
    "shopping.ie",
    "shopping.ca",
    "shopping.net",
    "shopping.org",
    "shopping.github.io"
  ]
}
```

{{< /tab >}}
{{< tab "3 Labels" >}}

1. `shopping`
1. `myshoppingrewards`
1. `myshoppingtravel`

```json
{
  "origins": [
    "shopping.com",
    "shopping.co.uk",
    "shopping.co.jp",
    "shopping.ie",
    "shopping.ca",
    "myshoppingrewards.com",
    "myshoppingrewards.co.uk",
    "myshoppingrewards.co.jp",
    "myshoppingrewards.ie",
    "myshoppingrewards.ca",
    "myshoppingtravel.com",
    "myshoppingtravel.co.uk",
    "myshoppingtravel.co.jp",
    "myshoppingtravel.ie",
    "myshoppingtravel.ca"
  ]
}
```

{{< /tab >}}
{{< tab "5 Labels" >}}

1. `shopping`
1. `myshoppingcard`
1. `myshoppingrewards`
1. `myshoppingcreditcard`
1. `myshoppingtravel`

```json
{
  "origins": [
    "shopping.com",
    "shopping.co.uk",
    "shopping.co.jp",
    "shopping.ie",
    "shopping.ca",
    "myshoppingcard.us",
    "myshoppingrewards.com",
    "myshoppingrewards.co.uk",
    "myshoppingrewards.co.jp",
    "myshoppingrewards.ie",
    "myshoppingrewards.ca",
    "myshoppingcreditcard.co.uk",
    "myshoppingcreditcard.co.jp",
    "myshoppingcreditcard.ie",
    "myshoppingcreditcard.ca",
    "myshoppingtravel.com",
    "myshoppingtravel.co.uk",
    "myshoppingtravel.co.jp",
    "myshoppingtravel.ie",
    "myshoppingtravel.ca"
  ]
}
```

{{< /tab >}}
{{< /tabs >}}

## Requirements

### Client Support

The [Device Support matrix](/device-support/#ror) lists the browsers which support Related Origin Requests. The [Passkeys Feature Detect page](https://featuredetect.passkeys.dev) will also attempt to detect RoR support in the browser in which the page was loaded.

To dynamically detect support for Related Origin Requests on an enrollment or login page, Relying Parties should check for `relatedOrigins` in the [WebAuthn Get Client Capabilities (`PublicKeyCredential.getClientCapabilities()`)](https://w3c.github.io/webauthn/#sctn-getClientCapabilities) response.

### Relying Party Changes

A JSON document must be hosted at the WebAuthn well-known path for the Relying Party ID, `/.well-known/webauthn`.

For example, if the RP ID is `shopping.com`, the full URL would be `https://shopping.com/.well-known/webauthn`.

The server must respond with a content type of `application/json`.

The JSON document must have a member named `origins`, containing an array of valid origins for use with passkeys scoped for the RP ID.

> See [Deployment Considerations](#deployment-considerations) below for details on choosing an RP ID.

Below is an example for the RP ID `shopping.com`.

```json {title="https://shopping.com/.well-known/webauthn"}
{
  "origins": [
    "shopping.com",
    "myshoppingrewards.com",
    "myshoppingcreditcard.com",
    "myshoppingtravel.com",
    "shopping.co.uk",
    "shopping.co.jp",
    "shopping.ie",
    "shopping.ca"
  ]
}
```

## Deployment Considerations

### Greenfield Deployments

The most important design decision for a greenfield deployment using RoR is picking a common Relying Party ID (RP ID) to be used for passkeys across all origins. All WebAuthn requests across all related origins will use that as `rp.id`.

It is recommended to pick the most commonly used and/or understood domain for the common RP ID. This is typically the domain closely associated with the organization's brand, and is often the `.com`.

### Existing Deployments

For deployments where passkeys are already rolled out with multiple RP IDs, there are some unique considerations and requirements.

__Considerations__

- Users with a passkey for the "local" RP ID / origin will be able to use all passkeys experiences as normal.
- Users with a passkey for another RP ID / related origin, will require an identifier first flow and a backend lookup.

__Requirements__

- Each existing RP ID will need to host the WebAuthn well-known document, with all of the other origins listed in it. This will allow reciprocal use of passkeys
- The account database will need to know which RP ID was used for each passkey (this could be an explicit property or inferred based on other data)
- The username field on the login page will need to support fallback to an identifier first flow with backend lookup

#### Flow

This flow assumes the [autofill UI](/docs/reference/terms/#autofill-ui) for passkeys is being used.

1. Make a conditional WebAuthn request normally on page load
2. If the promise resolves, process the WebAuthn response as normal and sign the user in
3. If the the user enters a username and continues:
      - abort the conditional WebAuthn request
      - send a request to your backend to retrieve the RP ID for the username
4. Fetch fresh WebAuthn parameters from the backend
5. Call WebAuthn with the fresh parameters and the correct RP ID

#### Example

In this example, passkeys have previously been rolled out to the following users:

- `shopping.com` users, with an RP ID of `shopping.com`
- `shopping.co.uk` users, with an RP ID or `shopping.co.uk`

A user with a passkey for `shopping.com` navigates to `shopping.com`, clicks into the username field, selects their passkey, performs user verification, and is then signed in!

A user with a passkey for `shopping.co.uk` has traveled to the US and navigates to `shopping.co.uk`. Based on location data, the user is redirected to `shopping.com`. They click into the username field and do not see any passkey available. They then type their username and click continue. A backend lookup occurs, and WebAuthn is now invoked with an RP ID of `shopping.co.uk` and the user selects their passkey, performs user verification, and is signed in!

## Additional Information

<a href="https://w3c.github.io/webauthn/#sctn-related-origins" target="_blank"><button type="button" class="btn btn-light">WebAuthn Spec Reference {{< icon-external-link size=24 >}}</button></a>