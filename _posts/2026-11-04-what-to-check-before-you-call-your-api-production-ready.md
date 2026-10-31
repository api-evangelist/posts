---
published: true
layout: post
title: 'What To Check Before You Call Your API Production Ready'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-to-check-before-you-call-your-api-production-ready.png
date: 2026-11-04
author: Kin Lane
tags:
  - Kin Score
  - APIs.io
  - Agent Readiness
  - Idempotency
  - Security
  - Rate Limits
---
Someone from a very new startup asked me a great question recently. They could see the ratings across different areas, but how could they use them to say their API is safe to go to production and safe to scale?

My answer depends on your industry and your definition of production. But if you are small and have to choose, the [Agent Readiness section of the rubric](https://apis.io/rating/) gives you a good order of work.

## The four things I would start with

**Security.** Start with authentication, and make it readable by machines rather than only described in prose.

**Rate limits.** State them, and signal them in your responses. If a client cannot tell it is about to hit a limit, it will find out the hard way, and so will you.

**Idempotency.** Payment APIs have long understood this: if the same call happens three or four times, you make one payment. Now you need it far beyond payments, because agents are going to knock on your door one, two, three, four times trying to get something done.

**Error handling.** Standard errors, like [Problem Details](https://www.rfc-editor.org/rfc/rfc9457), are a quick way to tell an agent what went wrong. An agent cannot read between the lines of a vague 500 the way a developer can.

## An example of why one of these matters

[Sinch](https://apis.io/providers/sinch/) and [Vonage](https://apis.io/providers/vonage/) are close on the [Kin Score](https://apis.io/rating/), at 71.5 and 71.3. Both earn full marks on machine-readable auth, stable error semantics and rate-limit signaling. Sinch earns 9 of 9 for idempotency and Vonage's page currently shows 0 of 9, which accounts for nine of the fifteen points between their Agent Readiness scores of 56 and 41. These numbers come from the public provider pages on APIs.io, most of them scored on October 17, 2026. They will move, so click through for the current reading.

That does not mean one is better to build on for what you need. A zero reflects what the scorer could find published, and the fix might be mostly documentation. It does show how much weight one characteristic carries, and how specific the feedback is.

## A startup version of the checklist

1. Publish an OpenAPI for what you have, even if it is small.
2. Document auth in a way a machine can read.
3. Decide what happens on a retried write, and write it down.
4. Return a consistent error format everywhere.
5. Publish your rate limits, and send them back in headers.
6. [Add your API to APIs.io](https://apis.io/) and see what the reading says.

None of this tells you that you are safe. A score does not know your load, your threat model or your data. It tells you whether the basics are expressed where a client can find them, and being small is the cheapest time to get them right.

I also try to live by this myself. It took me a couple of months to get the score for [APIs.io](https://apis.io/providers/apis-io/) to the top of the page, where it now sits at 93.6, with 78 for agent readiness.
