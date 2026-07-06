---
published: true
layout: post
title: How Much of Your API Do Your Rules Actually Check?
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/how-much-of-your-api-do-your-rules-actually-check.png
date: 2026-07-17
author: Kin Lane
tags:
  - API Commons
  - Spectral
  - API Governance
  - Coverage
  - Tools
---
I have been walking through the [governance tools I am building under API Commons](https://apicommons.org/tools/) one at a time, and today I want to sit with a question that most governance conversations never get around to asking. You have a ruleset. You run it against your API and it comes back green, or with a handful of warnings you can live with. But how much of your API description did those rules actually look at? Green does not mean governed. It might just mean your rules never went looking. That gap is what [Governance Coverage](https://coverage.apicommons.org) exists to measure.

The analogy I keep reaching for is test coverage. When you write tests, you eventually want to know which lines of code actually got executed, because the untouched lines are where the surprises live. Governance coverage asks the exact same question one altitude up. Of all the addressable locations in your API description — every operation, parameter, response, schema, and property — how many does any rule in your ruleset actually inspect? A whole section sitting at zero percent is a blind spot you did not know you had. It is the part of your API that could drift, degrade, or ship something ugly, and your governance would never say a word.

You point the tool at an OpenAPI, AsyncAPI, or Arazzo document and a ruleset, and it resolves every rule's JSONPath against the document. Then it reports back three things I find myself wanting constantly. It shows coverage by section, so you can see which structural kinds — info, paths, operations, parameters, responses, schemas, properties, security schemes — are reached and how deeply, flagging the ones that look covered but really lean on a single lonely rule. It shows the dead rules for this API, the active rules whose `given` matches nothing at all in your document, which is often the more actionable list because those rules are just decoration here. And it shows per-rule reach, so you can spot the over-broad rule that is technically touching everything while meaningfully governing nothing.

One thing I want to be honest about, because the tool is honest about it. Coverage measures reach, not quality. A node touched by one broad rule counts as covered, but it is barely governed, which is exactly why depth is reported right alongside the percentage. And if you run it against the big bundled API Commons catalog, most node types will get touched, so the sharper signals become depth and dead rules. The real moment this earns its place is when you bring your own ruleset and measure your governance against your API. That is when the honest blind spots show up, and that is the use case I built it for. It all runs in your browser, tokens and documents never leaving the page, just like the rest of these tools.

Go [try it](https://coverage.apicommons.org), paste in your own ruleset, and see how much of your API your rules were actually reading. This is one more in the daily run through the [API Commons tools](https://apicommons.org/tools/), and I think it is one of the quietly clarifying ones — the kind that changes what you thought your governance was doing.
