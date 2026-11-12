---
published: true
layout: post
title: 'The Business Terms Of An API, Made Machine-Readable'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-business-terms-of-an-api-made-machine-readable.png
date: 2026-11-13 16:00:00 +0000
author: Kin Lane
tags:
  - APIs.io
  - API Commons
  - Terms of Service
  - Privacy
  - AI Preferences
  - Licensing
  - Agents
---
We've spent fifteen years making the technical side of an API machine-readable. OpenAPI describes the operations, JSON Schema the shapes, and rate limits, plans and SLAs are getting there. The business side mostly hasn't. Whether you can cache what an API returns, whether you can train a model on it, which countries it's offered in, how much notice you get before something is shut off, who processes your users' data: all of that still lives in a legal page written for a lawyer to read once.

That was fine when a developer read the terms once and made a call. It isn't fine when an agent is choosing an API on its own, in the middle of a task. So I've added a new **Business Terms** section to [APIs.io](https://apis.io), and published the schemas behind it on API Commons.

## Seven layers

The section has seven pages, one for each layer of an API's business terms:

| Layer | What it captures | On APIs.io today |
|---|---|---|
| [Terms of Service](https://apis.io/api-terms/) | Permitted and prohibited use, caching, redistribution, attribution, governing law, liability, and notice for termination and changes | 243 providers |
| [Privacy & Data](https://apis.io/api-privacy/) | Controller or processor, data categories, purposes, retention, residency, transfers, subprocessors, a DPA, deletion and rights | 272 providers |
| [Deprecation](https://apis.io/deprecation/) | Minimum notice, support windows, how changes are announced, `Deprecation` and `Sunset` headers, and what counts as breaking | 3 providers |
| [Compliance](https://apis.io/compliance/) | Attestations like SOC 2, ISO 27001, PCI DSS, HIPAA and FedRAMP, with scope, issuer and whether the report is public | 12 providers |
| [Eligibility](https://apis.io/eligibility/) | Countries served and excluded, who can sign up, restricted uses, KYC or approval, and minimum age | 205 providers |
| [AI Preferences](https://apis.io/ai-preferences/) | Whether you can train AI or generative AI on it, use it for inference or search, and whether agents can sign up, act or buy | 159 providers |
| [Data Licenses](https://apis.io/data-licenses/) | The license on the API's outputs and data, commercial use, and attribution | 189 providers |

The counts are small next to the size of the catalog, and some are very small. Only three providers have a deprecation policy I could read and record. That isn't a gap in the harvest so much as a finding. Most providers don't write down how much notice they give before they break something.

## Never synthetic

There's one rule above everything else here: every document is read from the provider's own page, and nothing is generated to fill a template. Code fetches the page, and a model only transcribes it into rows. Each row carries a `text` field, and that text is checked word for word against the page we fetched. Any row that doesn't match is dropped. Every document records the page it was read from, the date it was read, and the tool and model that did the work.

When the page doesn't say something, the answer is `unstated`. Wherever a permission is described, there are four possible stances: `allowed`, `prohibited`, `conditional` and `unstated`. Anything other than `unstated` has to quote the sentence it came from. Periods like "30 days" or "12 months" are copied exactly as written, never normalized into a number we computed.

Here is part of an AI preferences document, for a provider whose terms address agents directly:

```yaml
ai_preferences: 0.1.0
url: https://0bull.net/terms
source_date: '2026-11-09'
x-apis-io-derivation:
  synthetic: false
  method: harvested
agent_actions:
  stance: conditional
  text: You may run automation, including AI Agents, on Platform Accounts you own,
    at your own risk. ...
agent_purchases:
  stance: conditional
  text: If you set a standing allowance in your API or MCP settings, requests within
    that allowance are placed as orders automatically.
signals:
  aipref_header: false
  content_signals: true
  llms_txt_url: https://0bull.net/llms.txt
```

The `signals` block isn't read by the model at all. It comes from probing the provider's site for an AIPREF header, Content Signals, `ai.txt` and `llms.txt`.

I'll be honest about the limit. The quote is guaranteed to be on the page. The stance is still a judgment about what the quote means, and a judgment can be wrong. That's why the quote travels with it, so you, or your agent, can check.

## The schemas are on API Commons

The section is built against open schemas, and I've published each one in its own repository under [API Commons](https://github.com/api-commons), with a JSON Schema, two examples and a validator:

- [terms-of-service](https://github.com/api-commons/terms-of-service)
- [privacy-policy](https://github.com/api-commons/privacy-policy)
- [deprecation-policy](https://github.com/api-commons/deprecation-policy)
- [compliance](https://github.com/api-commons/compliance)
- [eligibility](https://github.com/api-commons/eligibility)
- [ai-preferences](https://github.com/api-commons/ai-preferences)
- [data-license](https://github.com/api-commons/data-license)

I didn't want to invent vocabularies where good ones exist, so each layer profiles an existing standard. Terms follow ODRL, privacy uses the W3C Data Privacy Vocabulary, deprecation uses the `Sunset` (RFC 8594) and `Deprecation` (RFC 9745) headers, compliance borrows from OSCAL and CSA STAR, eligibility uses ISO 3166 country codes, AI preferences line up with IETF AIPREF and Content Signals, and data licenses use SPDX identifiers. They sit next to the service level schema that already backs the [Service Levels](https://apis.io/sla/) section.

The schemas and examples are licensed CC BY-NC-SA 4.0 and the validators Apache 2.0, the same split as everything else API Evangelist publishes. Each one is at version 0.1, and I already have a list of things I want to fix for 0.2, like accepting region names such as "the EEA" for eligibility, and a proper enum for privacy rights.

## Why this matters

For a person, these pages answer the questions procurement and legal ask before anyone writes code. Can we cache this? Can we use it in our product commercially? Is it offered in our country? Who signs the DPA? How long do we get when something is deprecated?

For an agent, they're the difference between finding an API that can do the job and finding one it's allowed to use. An agent can filter to providers that state agents may sign up, rule out the ones that prohibit training on their outputs, or check that a provider serves the country it's working in, and it can quote the sentence that justifies the decision.

For providers, it's a mirror. If your page appears here, everything on it is a quote from your own terms. If you'd like your terms to say something clearly to agents, the schema shows you every question they're going to ask. And the cleanest version of all of this is the provider publishing these documents itself, next to its OpenAPI, and pointing to them from its `apis.json`.

Browse the seven pages under Business Terms on [APIs.io](https://apis.io), and if something we quoted from your terms is out of date, tell us and we'll read it again.
