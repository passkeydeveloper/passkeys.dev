---
title: "Known Issues"
description: "A list of known issues with passkey implementations"
date: 2022-09-03T16:09:38.358Z
toc: false
type: docs
layout: docs
---

## Passkey Metadata

### Samsung Pass

According to Samsung documentation ([source](https://www.samsung.com/us/apps/samsung-pass/)), Samsung Pass creates [synced passkeys](terms#synced-passkey) which are available on other devices where Samsung Pass is installed.

During testing on 2024-09-05, it was observed that passkeys created in Samsung Pass return the backup eligible flag as false, signaling a [device-bound passkey](terms#device-bound-passkey).

{{< accordion id="accordion-default" >}}
  {{< accordion-item header="Sample passkey registration from Samsung Pass" show="false" >}}
Test device details:

- Galaxy S22
- Android 14 (UP1A.231005.007.S901USQS6EXG8)
- One UI 6.1
- Samsung Pass 4.4.02.7

[View decoded details](https://debugger.simplewebauthn.dev/?credential=ewogICJpZCI6ICJ6NnBMNU11UXdrWGxtOHc1ZWtBaXlWT0ZsTmplUXlsWWhULTd6TTdqN1dVIiwKICAicmF3SWQiOiAiejZwTDVNdVF3a1hsbTh3NWVrQWl5Vk9GbE5qZVF5bFloVC03ek03ajdXVSIsCiAgInJlc3BvbnNlIjogewogICAgImF0dGVzdGF0aW9uT2JqZWN0IjogIm8yTm1iWFJtY0dGamEyVmtaMkYwZEZOMGJYU2pZMkZzWnlaamMybG5XRWN3UlFJZ1dYemEtYmUwRDFQRU83MVZtTDBzSzB2c0ZMMjN2WG11RVdzSU1EQzYzMGNDSVFESTk0TGk4M3RDOU9iWXNsX0tMZWV0SllKRjFMWWhYNFA0LUxyUGxlVVFKbU40TldPQldRSm9NSUlDWkRDQ0FnaWdBd0lCQWdJSkFQVjh2MFc4Q3ZoTU1Bd0dDQ3FHU000OUJBTUNCUUF3Z2FZeEh6QWRCZ05WQkFNVEZsTmhiWE4xYm1jZ1JXeGxZM1J5YjI1cFkzTWdRMEV4SERBYUJnTlZCQW9URTFOaGJYTjFibWNnUld4bFkzUnliMjVwWTNNeEZ6QVZCZ05WQkFzVERsTmhiWE4xYm1jZ1RXOWlhV3hsTVJNd0VRWURWUVFIRXdwVGRYZHZiaUJqYVhSNU1Rc3dDUVlEVlFRR0V3SkxVakVxTUNnR0NnbVNKb21UOGl4a0FRRU1HbE5oYlhOMWJtZEVaWFpwWTJWU2IyOTBRMEZMWlhsZlJVTkRNQjRYRFRJek1Ea3hPVEExTkRreE5Gb1hEVFF6TURreE5EQTFORGt4TkZvd2Z6RUxNQWtHQTFVRUJoTUNTMUl4SERBYUJnTlZCQW9NRTFOaGJYTjFibWNnUld4bFkzUnliMjVwWTNNeElqQWdCZ05WQkFzTUdVRjFkR2hsYm5ScFkyRjBiM0lnUVhSMFpYTjBZWFJwYjI0eExqQXNCZ05WQkFNTUpWTmhiWE4xYm1jZ1JXeGxZM1J5YjI1cFkzTWdSa2xFVHpJZ1FYUjBaWE4wWVhScGIyNHdXVEFUQmdjcWhrak9QUUlCQmdncWhrak9QUU1CQndOQ0FBUVpva0s0ZDVRZGhOOWZGSlRiX1QyMDZVMVdteFFSQ0picWItVUNhcTlzaVBWS0JBNlRhU3JQQ0lVOEdqZVhiVWE4NUZZWUg2RU1XaF9RT25OalFXV2JvME13UVRBTUJnTlZIUk1CQWY4RUFqQUFNQTRHQTFVZER3RUJfd1FFQXdJR3dEQWhCZ3NyQmdFRUFZTGxIQUVCQkFRU0JCQlRRVTFUVlU1SEFBQUFBQUFBQUFBQU1Bd0dDQ3FHU000OUJBTUNCUUFEU0FBd1JRSWhBSUJDWGVfNEFsRUNpcDJHM25UUzBHclJ0SUhiYVZXXzBoTHk4eXMzRWR5b0FpQUVUTWN6NzZncXpMb0hRT0Rra2tfbmJTRXUwV0FHUGg3YkszWS0xbTZ1WldoaGRYUm9SR0YwWVZpa2RLYnFraFBKbkM5MHNpU1NzeURQUUNZcWxNR3BVS0E1ZnlrbEMyQ0VIdkJGQUFBQUFGTkJUVk5WVGtjQUFBQUFBQUFBQUFBQUlNLXFTLVRMa01KRjVadk1PWHBBSXNsVGhaVFkza01wV0lVX3U4ek80LTFscFFFQ0F5WWdBU0ZZSUU1SFFEc0UwWjBLcmV2RW02N3dGd040M285QjhoTlFnbDNWSVctaXVhVE1JbGdnM0JQYVotNjhSOUUwZGwtdmlLUWRqTEJfN1FZOXpXZFBEMTFZb1AwMFQ0SSIsCiAgICAiY2xpZW50RGF0YUpTT04iOiAiZXlKMGVYQmxJam9pZDJWaVlYVjBhRzR1WTNKbFlYUmxJaXdpWTJoaGJHeGxibWRsSWpvaWFHSkJhVXRrY0U1WU9UQkZZVmxaVGxBdGFWRlRiakJHVEdsSFNuRkNVRmRVUVVKRWJrSTRabmh4ZW5OcFF6ZHhObFl4VVVOSmNVWk1UbFZ3ZFRCTVFXeDVXSE14YUUxRVRGaE9WbGQ2TjBoT1FsOHdhbmNpTENKdmNtbG5hVzRpT2lKb2RIUndjem92TDNkbFltRjFkR2h1TG1sdklpd2lZM0p2YzNOUGNtbG5hVzRpT21aaGJITmxMQ0p2ZEdobGNsOXJaWGx6WDJOaGJsOWlaVjloWkdSbFpGOW9aWEpsSWpvaVpHOGdibTkwSUdOdmJYQmhjbVVnWTJ4cFpXNTBSR0YwWVVwVFQwNGdZV2RoYVc1emRDQmhJSFJsYlhCc1lYUmxMaUJUWldVZ2FIUjBjSE02THk5bmIyOHVaMnd2ZVdGaVVHVjRJbjAiLAogICAgInRyYW5zcG9ydHMiOiBbCiAgICAgICJoeWJyaWQiLAogICAgICAiaW50ZXJuYWwiCiAgICBdLAogICAgInB1YmxpY0tleUFsZ29yaXRobSI6IC03LAogICAgInB1YmxpY0tleSI6ICJNRmt3RXdZSEtvWkl6ajBDQVFZSUtvWkl6ajBEQVFjRFFnQUVUa2RBT3dUUm5RcXQ2OFNicnZBWEEzamVqMEh5RTFDQ1hkVWhiNks1cE16Y0U5cG43cnhIMFRSMlg2LUlwQjJNc0hfdEJqM05aMDhQWFZpZ19UUlBnZyIsCiAgICAiYXV0aGVudGljYXRvckRhdGEiOiAiZEticWtoUEpuQzkwc2lTU3N5RFBRQ1lxbE1HcFVLQTVmeWtsQzJDRUh2QkZBQUFBQUZOQlRWTlZUa2NBQUFBQUFBQUFBQUFBSU0tcVMtVExrTUpGNVp2TU9YcEFJc2xUaFpUWTNrTXBXSVVfdTh6TzQtMWxwUUVDQXlZZ0FTRllJRTVIUURzRTBaMEtyZXZFbTY3d0Z3TjQzbzlCOGhOUWdsM1ZJVy1pdWFUTUlsZ2czQlBhWi02OFI5RTBkbC12aUtRZGpMQl83UVk5eldkUEQxMVlvUDAwVDRJIgogIH0sCiAgInR5cGUiOiAicHVibGljLWtleSIsCiAgImNsaWVudEV4dGVuc2lvblJlc3VsdHMiOiB7CiAgICAiY3JlZFByb3BzIjogewogICAgICAicmsiOiB0cnVlCiAgICB9CiAgfSwKICAiYXV0aGVudGljYXRvckF0dGFjaG1lbnQiOiAicGxhdGZvcm0iCn0)

```json
{
  "id": "z6pL5MuQwkXlm8w5ekAiyVOFlNjeQylYhT-7zM7j7WU",
  "rawId": "z6pL5MuQwkXlm8w5ekAiyVOFlNjeQylYhT-7zM7j7WU",
  "response": {
    "attestationObject": "o2NmbXRmcGFja2VkZ2F0dFN0bXSjY2FsZyZjc2lnWEcwRQIgWXza-be0D1PEO71VmL0sK0vsFL23vXmuEWsIMDC630cCIQDI94Li83tC9ObYsl_KLeetJYJF1LYhX4P4-LrPleUQJmN4NWOBWQJoMIICZDCCAgigAwIBAgIJAPV8v0W8CvhMMAwGCCqGSM49BAMCBQAwgaYxHzAdBgNVBAMTFlNhbXN1bmcgRWxlY3Ryb25pY3MgQ0ExHDAaBgNVBAoTE1NhbXN1bmcgRWxlY3Ryb25pY3MxFzAVBgNVBAsTDlNhbXN1bmcgTW9iaWxlMRMwEQYDVQQHEwpTdXdvbiBjaXR5MQswCQYDVQQGEwJLUjEqMCgGCgmSJomT8ixkAQEMGlNhbXN1bmdEZXZpY2VSb290Q0FLZXlfRUNDMB4XDTIzMDkxOTA1NDkxNFoXDTQzMDkxNDA1NDkxNFowfzELMAkGA1UEBhMCS1IxHDAaBgNVBAoME1NhbXN1bmcgRWxlY3Ryb25pY3MxIjAgBgNVBAsMGUF1dGhlbnRpY2F0b3IgQXR0ZXN0YXRpb24xLjAsBgNVBAMMJVNhbXN1bmcgRWxlY3Ryb25pY3MgRklETzIgQXR0ZXN0YXRpb24wWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAAQZokK4d5QdhN9fFJTb_T206U1WmxQRCJbqb-UCaq9siPVKBA6TaSrPCIU8GjeXbUa85FYYH6EMWh_QOnNjQWWbo0MwQTAMBgNVHRMBAf8EAjAAMA4GA1UdDwEB_wQEAwIGwDAhBgsrBgEEAYLlHAEBBAQSBBBTQU1TVU5HAAAAAAAAAAAAMAwGCCqGSM49BAMCBQADSAAwRQIhAIBCXe_4AlECip2G3nTS0GrRtIHbaVW_0hLy8ys3EdyoAiAETMcz76gqzLoHQODkkk_nbSEu0WAGPh7bK3Y-1m6uZWhhdXRoRGF0YVikdKbqkhPJnC90siSSsyDPQCYqlMGpUKA5fyklC2CEHvBFAAAAAFNBTVNVTkcAAAAAAAAAAAAAIM-qS-TLkMJF5ZvMOXpAIslThZTY3kMpWIU_u8zO4-1lpQECAyYgASFYIE5HQDsE0Z0KrevEm67wFwN43o9B8hNQgl3VIW-iuaTMIlgg3BPaZ-68R9E0dl-viKQdjLB_7QY9zWdPD11YoP00T4I",
    "clientDataJSON": "eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoiaGJBaUtkcE5YOTBFYVlZTlAtaVFTbjBGTGlHSnFCUFdUQUJEbkI4ZnhxenNpQzdxNlYxUUNJcUZMTlVwdTBMQWx5WHMxaE1ETFhOVld6N0hOQl8wanciLCJvcmlnaW4iOiJodHRwczovL3dlYmF1dGhuLmlvIiwiY3Jvc3NPcmlnaW4iOmZhbHNlLCJvdGhlcl9rZXlzX2Nhbl9iZV9hZGRlZF9oZXJlIjoiZG8gbm90IGNvbXBhcmUgY2xpZW50RGF0YUpTT04gYWdhaW5zdCBhIHRlbXBsYXRlLiBTZWUgaHR0cHM6Ly9nb28uZ2wveWFiUGV4In0",
    "transports": [
      "hybrid",
      "internal"
    ],
    "publicKeyAlgorithm": -7,
    "publicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAETkdAOwTRnQqt68SbrvAXA3jej0HyE1CCXdUhb6K5pMzcE9pn7rxH0TR2X6-IpB2MsH_tBj3NZ08PXVig_TRPgg",
    "authenticatorData": "dKbqkhPJnC90siSSsyDPQCYqlMGpUKA5fyklC2CEHvBFAAAAAFNBTVNVTkcAAAAAAAAAAAAAIM-qS-TLkMJF5ZvMOXpAIslThZTY3kMpWIU_u8zO4-1lpQECAyYgASFYIE5HQDsE0Z0KrevEm67wFwN43o9B8hNQgl3VIW-iuaTMIlgg3BPaZ-68R9E0dl-viKQdjLB_7QY9zWdPD11YoP00T4I"
  },
  "type": "public-key",
  "clientExtensionResults": {
    "credProps": {
      "rk": true
    }
  },
  "authenticatorAttachment": "platform"
}
```

  {{< /accordion-item >}}
{{< /accordion >}}

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
| Proton Pass   | Extension        | ❌ Handles request without performing UV, sets UV true | ❌ Sets UV true without performing UV |
| Proton Pass   | Native           | ❌ Handles request without performing UV, sets UV true | ❌ Sets UV true without performing UV |
| Strongbox     | Native           | ❌ Handles request without performing UV, sets UV true | ❌ Sets UV true without performing UV |
{{< /table >}}

> **Architecture**: `Extension` = web browser extension, `Native` = OS native app using provider APIs
