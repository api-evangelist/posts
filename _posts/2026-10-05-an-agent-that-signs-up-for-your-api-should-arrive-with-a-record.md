---
published: true
layout: post
title: 'An Agent That Signs Up for Your API Should Arrive With a Record'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/an-agent-that-signs-up-for-your-api-should-arrive-with-a-record.png
date: 2026-10-05
author: Kin Lane
tags:
  - Know Your Agent
  - Agents
  - Identity
  - Onboarding
  - OAuth
  - APIs.io
  - APIs
---
An AI agent cannot fill in a signup form. I have been saying this for a while now, and the longer I sit with it the more I think the form was never really about authentication. OAuth solved authentication a long time ago. The form is where an API provider finds out who it is dealing with before it hands over a key. Take the form away and the provider loses the thing it actually wanted.

So this week we shipped the other half of [Know Your Agent on APIs.io](https://apis.io/kya/). APIs.io already tells agents which APIs exist. Now it can also tell API providers which agents are knocking, in a form that travels with the agent when it signs up somewhere else.

## What an agent does

An agent publishes an [A2A agent card](https://apis.io/a2a/) on its own domain and [registers it with APIs.io](https://apis.io/agents/). The card is public by design. Anyone can read it, and it says what the agent is, where it lives, and how to talk to it. A conformant card gets the agent into the registry.

A card on its own proves very little, though. Anyone can copy one. So the agent also builds a record with APIs.io: who operates it, how to reach them, what it is for. We grade every fact by how we know it. Verified means we confirmed it against something the agent does not control. Attested means the agent signed it. Declared means it told us and nothing checked it. Absent means it is not there. The grade travels with the fact.

The record carries two numbers, never one. Disclosure is how much the agent has told us, and the agent controls it. Verification is how much of that we confirmed, and it does not. If those collapsed into a single score, an agent could look trustworthy just by typing more, which is exactly the failure this has to avoid.

## What an agent carries

When the agent wants to sign up for another API in the catalog, it asks APIs.io for an attestation. It can first ask whether it qualifies at all: `GET /api/v1/kya/match` reads the provider's `/.well-known/api-onboarding` descriptor and tells the agent what it meets, what it is missing, and whether it can sign up now. A missing requirement comes back as a to-do list, not a rejection.

Then `POST /api/v1/kya/attest` returns a signed token that lives for ten minutes and is addressed to one provider. It carries the two numbers, the agent's tier, and a link back to its registry entry. It never carries a disclosed value. If the agent signed its request with its own key, the token names that key, so a copied token is useless without the private key that goes with it.

I wanted to be careful about one thing here. A header that just says "I came from APIs.io" proves nothing, because anyone can type it. The identifier has to be signed, short-lived, and bound to the agent. Everything else is decoration.

## What a provider does

None of this asks a provider to adopt anything new to get started. The attestation fits into slots that already exist: a `software_statement` in an OAuth dynamic client registration ([RFC 7591](https://www.rfc-editor.org/rfc/rfc7591)), which is how UK Open Banking already vouches for clients, or an `APIs-IO-Attestation` header on a signed request ([RFC 9421](https://www.rfc-editor.org/rfc/rfc9421)). The provider verifies it against [our published keys](https://apis.io/.well-known/jwks.json).

Then the provider asks for the record under its own priorities. `POST /api/v1/agents/{sub}/evaluate` takes the provider's weights and returns a score computed under them, both raw numbers, and a ranked list of what is missing. A documentation search API and a payments API should not reach the same decision about the same agent, and with this they will not. We do not tell anyone whether to trust an agent. We tell them what is true, and they decide.

Afterwards the provider can report back how the agent behaved, always with a stated reason, and good standing counts as much as a fault. That is where operating history comes from, the one facet an agent cannot earn on the day it signs up. A report never moves a grade on its own; a person works it first, and the agent can read every report filed about it.

## What is not there yet

I would rather say this plainly than have someone find it. When I first published this post this morning, proof that an agent controls the domain its card is served from was written but not deployed, and key-bound attestations needed an [AAuth](https://datatracker.ietf.org/doc/draft-hardt-oauth-aauth-protocol/) identity from the only agent provider we accept, which is the one we run. When we probed 1,486 hosts in August, none of them served AAuth at all.

**Update, later the same day:** both of those moved. Domain proof at registration is now live, so a card served by a platform on someone else's behalf only registers once its operator proves control of the domain the card names. And [Web Bot Auth](https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture) now works on the Know Your Agent routes. An agent publishes its public keys at `/.well-known/http-message-signatures-directory` on its own domain, signs its requests, and gets a verified identity and key-bound attestations without going through us. The API Evangelist agent was the first through that door: its record now reads anchored, its domain verified, and linked to [its registry entry](https://apis.io/agents/). It still cannot open an account through that door alone; that remains AAuth's job for now.

## Why APIs.io

APIs.io started as a place to find APIs. Over the last year it became a place to judge them, through the [Kin Score](https://apis.io/rating/). This is the mirror image: a way to describe the caller, built from the same six facets, held to the same rule that the numbers are public and recomputable. Discovery, the catalog, the route to the signup door, and now a record of who is walking through it.

The whole flow, with a diagram you can step through and an evaluator you can play with, is on [the Know Your Agent page](https://apis.io/kya/). The rubric is open at [`/api/v1/kya/rubric`](https://apis.io/api/v1/kya/rubric) with no key. If you run an API and this would change how you onboard, or you run agents and it would change how you get in, I would like to hear about it on [the roadmap](https://github.com/api-evangelist/roadmap/issues/110).
