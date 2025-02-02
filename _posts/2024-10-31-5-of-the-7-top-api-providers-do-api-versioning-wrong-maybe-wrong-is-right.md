---
published: true
layout: post
title: 5 of the 7 Top API Providers Do API Versioning Wrong — Maybe Wrong is Right?
tags:
  - Change
  - Versioning
  - Headers
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-old-japanese-man-eyebrows.jpeg
---
[I crafted my own API versioning policies, rules, and guidance yesterday](https://apievangelist.com/2024/10/30/api-governance-policies-rules-and-guidance-for-managing-the-versioning-of-openapi-and-apis/). As part of any API policy I craft I conduct research to understand what others are doing inside and outside the industry I operate within to help shape my view of things. [I’ve long subscribed to the right way(s) to version HTTP APIs that I learned back in the day from knowledgeable people whom I respect](https://www.mnot.net/blog/2012/12/04/api-evolution). When it comes to crafting governance for the enterprise I’ve always begun the discussion with NOT versioning in the URI or path, and deciding which header-based approach is optimal. 

As part of my research for my API versioning policy I revisited six leading API providers, as well as the recommendation from Spectral (Stoplight...SmartBear), who actively publish their API design guidelines as well as potentially some Spectral rules they use to govern their APIs — which...5 of the 7 examples support URI, path, and even query parameter based versioning for their APIs.

- [**Adidas**](https://github.com/adidas/api-guidelines/blob/1b52a38e90e1d62b8cb808405b6a5881d05892cd/rest-api-guidelines/evolution/versioning.md]
- [**Microsoft**](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#12-versioning]
- [**Azure**](https://github.com/microsoft/api-guidelines/blob/vNext/azure/Guidelines.md#api-versioning]
- [**Spectral**](https://github.com/stoplightio/spectral-url-versioning/blob/main/src/ruleset.ts]
- [**Google**](https://google.aip.dev/185]
- [**Cisco**](https://github.com/CiscoDevNet/api-design-guide?tab=readme-ov-file#342-user-scoped-endpoints]
- [**Atlassian**](https://developer.atlassian.com/server/framework/atlassian-sdk/atlassian-rest-api-design-guidelines-version-1/]

Spectral and Adidas were the only two who enforced a header-based approach to versioning. I will continue to track other API providers I come across to add more references for my policy, but I thought the initial assessment as part of my research was worth telling a story about. While anecdotal, I assume these API providers made their decision based upon what they knew, what was already in motion with their API programs, and what was easier for the masses of their API producers and consumers to adopt. This is something that I think should be the foundational thinking for almost any API policy you craft, and the rules and guidance you produce to support that policy.

This all leaves me wondering, is API versioning right, the wrong way? And is the wrong way the API-erati has been shaming everyone about, the right way? For me, this is the role of API policies in governance—to ground our approach in the industry and human realities of doing business with APIs. I am all for standards, and leaning in on doing things the “right way”. However, humans are messy, business can be messy, and keeping things simple and intuitive often trumps technological precision. I am not saying you should version your APIs in the path, I am saying the you should be making sure you do the research to understand what leaders in the tech space are doing, what your competition is doing within your industry, and most importantly, what your API consumers will be able to understand and put to work in their applications and integrations. 