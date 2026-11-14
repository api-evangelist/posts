---
published: true
layout: post
title: 'Testing A Million API Operations Starts With Forty Thousand Sign-Ups'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/testing-a-million-api-operations-starts-with-forty-thousand-sign-ups.png
date: 2026-11-16 17:00:00 +0000
author: Kin Lane
tags:
  - Certification
  - Onboarding
  - Drift
  - Kin Score
  - Agent Readiness
  - APIs.io
---
Someone asked me last week whether we test each API operation on [APIs.io](https://apis.io) for drift from the provider documentation we found it in. It's a good question, and the honest answer is: for a small slice of them, yes, and for the rest, not yet. I want to lay out why, because the reason isn't technical. It's the scope of the request, and what stands between us and the operations.

## The scope

As of the latest build, APIs.io indexes more than 41,300 providers, 203,000 APIs and 1,090,000 operations. Testing an operation for drift means actually calling it and checking that what comes back matches what the contract says it should: the status code, the content type, and a response body that validates against the schema.

Calling an operation is the cheap part. Being allowed to call it is the expensive part. Most of those operations sit behind an API key, an OAuth token, or an account of some kind. So testing every operation for drift really means obtaining credentials for tens of thousands of providers.

## What one set of credentials actually takes

Think about what it takes for me to get a working key for a single provider:

- Find the sign-up page, if there is one. Many providers don't have self-service sign-up at all. You talk to sales, fill out a partner application, or wait for an approval queue.
- Create an account, verify an email, sometimes a phone number, and sometimes a credit card, even for a free tier.
- Accept terms of service, some of which forbid exactly this kind of automated testing.
- For regulated industries, go through KYC or a business verification.
- For OAuth, register an application, pick scopes, and sometimes submit the app for review.
- Then get the right objects into the account so there's something to read. A brand new account has no customers, invoices or repositories, so most `GET /things/{id}` operations have nothing to fetch.
- And then keep it all working. Tokens expire, refresh tokens get revoked, free tiers get discontinued, and keys rotate.

Even at an optimistic half hour per provider, forty thousand providers is twenty thousand hours of sign-ups before the first test runs, and the maintenance never ends. Then there's the question of storing tens of thousands of live credentials, every one of them a liability.

## What we've done so far

We have made some inroads as part of what we're calling certification. The first wave went after everything we could reach without a key: the operations providers publish openly, and the public corners of keyed APIs. Then we ran a keyed wave using credentials we already hold for our own work, providers like Stripe in test mode, GitHub, Cloudflare and Postman, with strict rules: GET and HEAD only, no billable reads, sandbox credentials over live ones, one request a second, and never storing any values from the responses. Where a test account needed objects to read, we created a few through tracked write lifecycles and deleted them afterward.

After the latest rollup, 9,153 operations across 1,712 providers are conformant: they returned a successful response that validates against a substantive schema in their contract. Against a million operations, that's under one percent.

It's also already turned up plenty of drift. Thousands of operations where the contract says no authentication is needed, but the API answers 401 or 403. Thousands more where the contract says a key is required, but the API happily answers without one. Required parameters with no examples, responses with no schema, and contracts pointing at the wrong base URL. Every one of those is a fix to push back to the provider, not a reason to quietly correct our copy.

## Where it stalls

The first wave of keyed testing was only possible because we already had the keys. The next tier is providers with a free developer account or sandbox that we just haven't signed up for yet, around fifty of the most important ones. After that is a long tail of enterprise and paid-only providers with no self-serve key at all, where the only way in is a conversation. That's roughly where certification stops being a script and becomes a sales process, repeated forty thousand times.

That doesn't scale for us, and it doesn't scale for anyone else. It doesn't scale for an agent either.

## Onboarding has to be programmable

This is the part I care about. If testing every operation means a human signing up for every API, the answer isn't to hire more humans. The answer is for API providers to make their onboarding programmable.

That means a machine-readable way to discover how to get access: what plans exist, what each costs, what the rate limits are, and where to sign up. It means self-service sign-up that doesn't dead-end in a sales form. It means OAuth with discovery metadata and, ideally, dynamic client registration, so a client can register itself without a human filling out a form. It means published sandboxes with seeded data, so there's something to read on day one. And it means documented scopes, so you can ask for exactly what you need.

That's a big part of why the [Kin Score](https://apis.io/rating/) exists. Access Clarity asks what it costs, what you're allowed to do, and how you get in. It checks for self-service sign-up, published plans and pricing, and documented authentication. Agent Readiness goes further and asks whether an agent could get in without a person, including whether there's registration without a human. Those checks aren't there to grade providers for the sake of it. They measure the exact thing that would have to be true for anyone, us included, to test a million operations.

## Certification is also the provider's job

The other half of the answer is that we shouldn't be the only ones calling these operations. Providers already test their own APIs, and API consumers call them all day long. Certification is designed to take evidence from more than our own probes: provider contract tests, Postman and Bruno runs, and the exhaust from SDKs and clients. The plan is for providers who claim their listing to attest to their own results, with us spot-checking them.

So the honest answer to "are you testing every operation for drift?" is that we're testing the ones we can reach, publishing what we find, and pushing the fixes back to providers. Doing it for all of them at once depends on providers making it possible for a machine to get in the door. When they do, testing for drift becomes a matter of compute, and so does everything an agent wants to do with their API.
