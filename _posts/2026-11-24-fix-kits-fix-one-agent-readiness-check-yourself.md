---
published: false
layout: post
title: 'Fix Kits: Fix One Agent Readiness Check on Your API, Yourself'
date: 2026-11-24 15:00:00 +0000
author: Kin Lane
tags:
  - Agent Readiness
  - API Rating
  - OpenAPI
  - Fix Kits
---
Every API provider on [APIs.io](https://apis.io) has an Agent Readiness score, and every provider page has a **Raise your score** panel that names the checks you aren't meeting and how many points each one is worth. The most common reply I get when I talk to a provider about that panel isn't "we disagree". It's "OK, so how do we actually fix that?"

Until now the answer was a conversation with me. That works, but it doesn't scale for either of us, and a lot of these fixes don't need a consultant. They need the exact rule, a working example and a way to check your work. So I've packaged them.

## What a fix kit is

A [fix kit](https://kits.apievangelist.com) covers **one** Agent Readiness check. Each one gives you:

- **The exact scoring rule**, the same one the scorer runs, in plain language.
- **How to find out what your API already does**, before you change a thing. Several of these checks are about describing behaviour you already have, and declaring behaviour you don't have is worse than declaring nothing.
- **A step-by-step fix**, with starter files you can edit.
- **An OpenAPI Overlay** that applies the change across your contract without touching your source, which matters if your contract is generated.
- **A check script** that tests your contract the way the scorer does, so you know it passes before you publish.
- **Notes for your docs platform**: ReadMe, Mintlify, Docusaurus and others.

## The first five

| Kit | Points | What it fixes |
|---|---:|---|
| [Stable Error Semantics](https://kits.apievangelist.com/kits/stable-error-semantics/) | 8 | One typed error shape, so an agent can branch on errors instead of retrying blindly |
| [Idempotency](https://kits.apievangelist.com/kits/idempotency/) | 9 | An idempotency key on writes, so a retry never charges a card twice |
| [Rate-Limit Signaling](https://kits.apievangelist.com/kits/rate-limit-signaling/) | 7 | Declaring the rate-limit headers your gateway already sends |
| [Request/Response Examples](https://kits.apievangelist.com/kits/request-response-examples/) | 7 | Real examples on at least half your operations |
| [Typed Event Surface](https://kits.apievangelist.com/kits/typed-event-surface/) | 6 | Describing the webhooks you already send, in your contract |

Most providers in the catalog miss most of these. Stable Error Semantics alone is missing for nearly 37,000 of the 41,000 providers we score. The good news is that several are contract-only changes: your API already behaves correctly, and the contract just doesn't say so.

Each kit is $149, and the first three are $349 as a bundle.

## What a kit doesn't do

A kit teaches the fix. **Buying one never moves a score.** Your score changes when you publish the change and the public pipeline reads it, the same as for everyone else. Then ask for a re-check from your provider page.

Writing these kits also meant reading the scorer line by line against real contracts, and that turned up places where the scorer was wrong. One gave zero credit to providers who share error responses the way the OpenAPI spec recommends. Another counted the word "example" in a description as an example. Those are filed and being fixed in the rubric, and each kit tells you exactly where today's scorer stands, so you aren't working around a guess.

## If you want it done for your API

If you'd rather have it applied to your own contract, use **Ask about this** next to the check on your provider page. I'll reply with a fixed-price plan for that one check, written against your actual contract, and the kit price is credited against it.

More kits are coming, one check at a time, until every check in the rubric has one. [Start here](https://kits.apievangelist.com).
