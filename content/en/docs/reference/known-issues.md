---
title: "Known Issues"
description: "A list of known issues with passkey implementations"
date: 2022-09-03T16:09:38.358Z
weight: 406
toc: false
type: docs
layout: docs
---

## User Verification

The following list of passkey providers have not implemented [User Verification](terms#user-verification-uv) in a spec-compliant manner.

{{< table >}}

| **Provider**  | **Architecture** | **`uv`=`required`**                                    | **`uv`=`preferred`**                  |
| ------------- | ---------------- | ------------------------------------------------------ | ------------------------------------- |
| 1Password     | Extension        | ❌ Handles request without performing UV, sets UV true | ❌ Sets UV true without performing UV |
| 1Password     | Native           | ✅ Performs UV                                         | ✅ UV flag accurate                   |
| Bitwarden     | Extension        | ❌ Handles request without performing UV, sets UV true | ❌ Sets UV true without performing UV |
| KeepassXC     | Extension        | ❌ Handles request without performing UV, sets UV true | ❌ Sets UV true without performing UV |
| Okta Personal | Extension        | ❌ Handles request without performing UV, sets UV true | ❌ Sets UV true without performing UV |
| Okta Personal | Native           | ✅ Performs UV                                         | ✅ UV flag accurate                   |
| Proton Pass   | Extension        | ❌ Handles request without performing UV, sets UV true | ❌ Sets UV true without performing UV |
| Proton Pass   | Native           | ❌ Handles request without performing UV, sets UV true | ❌ Sets UV true without performing UV |
| Strongbox     | Native           | ❌ Handles request without performing UV, sets UV true | ❌ Sets UV true without performing UV |
{{< /table >}}

> **Architecture**: `Extension` = web browser extension, `Native` = OS native app using provider APIs
