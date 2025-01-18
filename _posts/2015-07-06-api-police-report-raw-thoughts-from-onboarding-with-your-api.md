---
layout: post
title: 'API Police Report: Raw Thoughts From On-Boarding With Your API'
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - On-Boarding
---
[I am working hard to generate detailed profiles, that include APIs.json indexes, and Swagger definitions, for each of the 1000 companies I have listed in the API Stack](http://theapistack.com/companies.html). I have encouraged anyone to step up and help me profile these companies, join the conversation via the Github issues where the API stack is hosted, resulting in some really nice folks jumping in to hellp me tackle the hard work.

One of these brave souls who stepped up, and get their hands dirty is Bob Salita, who is also sharing his experience, via what he calls an "API Police Report", derived from his experience onboarding with APIs. I thought his condensed thoughts reflect what I see everyday as I onboard with new APIs, and was worth sharing.

**He starts with a simple question: What do developers want?**

*   To use your API. Duh! Don’t get in their way.

**What do we force a developer do?**

*   Google for your website.
*   Sign up as a generic user (usually unstated).
*   Wait for email verification link.
*   Click on verification link.
*   Log into website.
*   Find link to developer site.
*   Find link to API documentation.
*   Register app (usually OAuth).
*   Figure out how to obtain API credentials.
*   Find link to endpoints.
*   Figure out how to use API credentials.
*   Play in playground.
*   Search for SDK in preferred language.
*   Cancel dinner date.
*   How can we improve onboarding?

**What you can do! Anticipate needs, minimize process:**

*   Big button showing “Get Started”. No registration needed.
*   Transfer to Playground with temporary key installed.
*   Offer easy navigation to friendly API Docs, SDKs, permanent credentials.

**The anti-patterns to onboarding**:

*   Secret onboarding. No Google hits.
*   No Developer or API link.
*   No Sign Up button. No Sign Up imperative.
*   No App registration link.
*   No Get Credentials link.
*   No Authorization procedure.
*   No authorization endpoints (shhh, secret).
*   No Rest API documentation link.
*   No Curl link.
*   No API playground
*   No safe sandbox (financial industry).
*   No SDK link. Too few languages choices.
*   Must interview with sales or support rep.
*   Must mail in API registration.
*   SSL certificate warnings. “Get me out of here!”
*   Inability to change locale, language or monetary unit.
*   USS (Ugly Site Syndrome). So 2005.
*   Unclear use case.
*   Uncompelling content.
*   Confusing website.
*   Confusing biz plan.
*   Too much unnecessary registration info requested.
*   Slow registration process, delayed email verification, snail-mail (s/b < 10 seconds).
*   Missing page navigation.
*   IP blacklisting.
*   Short trial – 7/14 days. s/b 30 days.
*   Broken registration, broken authorization process, broken APIs.
*   Too much engagement.

**What Are The Best Practices:**

*   OAuth 2 support.
*   API Playground.
*   Safe sandbox (financial services).
*   Use mashery.com.

**Sometimes you have to be a snob – for good reasons:**

*   Limit registration size. Limit beta size.
*   Vet registrants for reasons of security, accountability (Bitcoin), company size, sales volume.
*   Refuse because of IP location.
*   Refuse because of free email account.
*   Be expensive.

I am just publishing his raw report as is, because I think it reflects what a tough job it is to profile these APIs, and the thoughts that go through your head as you do the work. This work is something API providers should be doing themselves! They should be going through their APIs, putting on their external developer hats, and try to think like a new developer might--experience the friction.

The process of trying to understand what an API does, how to get access, and the process of indexing the API operations using [APIs.json](http://apisjson.org), and craft individual [Swagger](http://swagger.io) definitions for each available APIs is a lot of work, but it represents the work, and thought you should be putting into your API--it is an important journey!

I will be referencing these "_API Police Reports"_ in future stories, because Bob's honest thoughts, as he does this hard work, provide a wealth of detail that all API providers should be tuning into.