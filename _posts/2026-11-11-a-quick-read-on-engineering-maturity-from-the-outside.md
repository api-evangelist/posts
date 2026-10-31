---
published: true
layout: post
title: 'A Quick Read On Engineering Maturity From The Outside'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-quick-read-on-engineering-maturity-from-the-outside.png
date: 2026-11-11
author: Kin Lane
tags:
  - Kin Score
  - APIs.io
  - Engineering
  - Vendors
  - Enterprise Software
---
Someone who works at a software vendor told me about an interesting exercise recently. They looked up their own company on APIs.io, then their competitors, then a lot of the software platforms they had used in earlier jobs. Their conclusion was that the [Kin Score](https://apis.io/rating/) works as a quick scan for engineering maturity.

They saw that engineering-led, forward-thinking vendors tend to score high, because API thinking, product release practices and maturity show through. And companies that made their money selling perpetual on-premises licenses often barely register.

## Some examples to look at

Developer-focused infrastructure companies do tend to cluster near the top:

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [Dynatrace](https://apis.io/providers/dynatrace/) | 84.8 | 49 |
| [GitLab](https://apis.io/providers/gitlab/) | 81.0 | 48 |
| [Cloudflare](https://apis.io/providers/cloudflare/) | 80.6 | 73 |
| [GitHub](https://apis.io/providers/github/) | 78.8 | 60 |

The history alone does not decide it, though. [Oracle](https://apis.io/providers/oracle/) and [IBM](https://apis.io/providers/ibm/), about as long-established as enterprise software gets, are in the strong band at 64.5 and 66.4. Oracle's Agent Readiness of 61 is higher than anybody in the table above except Cloudflare. These numbers come from the public provider pages on APIs.io, most of them scored on October 17, 2026. They will move, so click through for the current reading.

So I would treat this as a pattern and not as a rule. Long-established companies can absolutely do this work, and some are.

## Why it shows through

To score well you have to do a lot of unglamorous things consistently. Publish machine-readable contracts. Keep a changelog. Run a status page. State your rate limits. Govern your contracts. A marketing department cannot produce that overnight, and a company usually does it only if somebody inside cares about how the software gets built.

That is the reason I think of it as a signal. It is hard to fake a sustained habit of publishing good artifacts.

## What it cannot tell you

I want to be careful here, because a low score is easy to misread.

- **It reads the public surface.** A company can have excellent engineering and share almost nothing, because of how it sells. Its APIs may sit behind a customer login, where the scorer cannot go.
- **It measures APIs, not the product.** Plenty of great software has a weak API story.
- **A low score is a question.** It tells you what to ask next. It is not a verdict on the people who work there.

## How I would use it

When you are looking at a software vendor, take two minutes on its [provider page](https://apis.io/providers/) before the first sales call. Check the facet breakdown and the date of its last changelog. If the score is high, you have some evidence for the claims in the deck. If it is low, ask them to show you what you could not see. A mature team will have an answer, and how they respond will tell you a lot.
