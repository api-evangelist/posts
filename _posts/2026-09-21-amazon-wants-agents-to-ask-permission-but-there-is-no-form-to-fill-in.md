---
published: true
layout: post
title: 'Amazon Wants Agents To Ask Permission, But There Is No Form To Fill In'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/amazon-wants-agents-to-ask-permission-but-there-is-no-form-to-fill-in.png
date: 2026-09-21
author: Kin Lane
tags:
  - Agents
  - Agent Readiness
  - Kin Score
  - KYA
  - Onboarding
  - x402
  - Consent
  - Identity
  - Commerce
  - APIs.io
  - APIs
---
Amazon does not want you shopping its website with an agent. It had a public scrap with Perplexity over exactly that, and now it is squaring off with Meta, whose newly launched Muse agent does the same thing. Amazon's position is that agents should get permission before they use the human web. The companies shipping the popular agentic products disagree, mostly because there is nothing to get permission *from*.

Michael Mignano's read on the Amazon and Muse argument was that owning the UI is still a moat, for now, and that the UI is under attack. I agree with both halves. If my agent can read ten thousand merchants and pick for me, what is Amazon for? Shipping, honestly. The storefront was the product because it was the only place a human could compare, and an agent does not need the place.

What I keep coming back to is that the fight is not really about whether agents are welcome. It is about the absence of any way to say yes. We probably need an agent bill of rights, or more precisely a bill of requirements: an opt-in set of rules that an approved agent agrees to follow, and that a website agrees to support. Two halves, one handshake. And I have spent the last year measuring one of those halves across the whole catalog while building the other one into [APIs.io](https://apis.io), so I want to lay out what each half looks like when you stop arguing about it and count it.

## The half a website publishes

The [Agent Readiness](https://apis.io/rating/) layer of the Kin Score is nineteen dimensions of what a provider has to publish before an agent can drive it safely: a contract, an auth scheme a machine can read, idempotency, a stable error envelope, rate-limit signalling, a way to register without a human, a way to say what a bot may do with the content, a way to plan a destructive action before committing it. It is scored across 26,626 providers, read from what each one actually serves. This is the website's side of the bill of requirements, written down and measured, whether or not anyone calls it that.

| What a provider publishes | Of 26,626 providers |
|---|--:|
| Machine-readable contract | 34.7% |
| Machine-readable auth | 39.4% |
| Rate-limit signalling | 37.1% |
| Stable error semantics | 22.2% |
| MCP server | 12.5% |
| Delegated user identity | 10.0% |
| Registration without a human | 5.0% |
| Protected resource metadata | 4.8% |
| Idempotency | 4.2% |
| Well-known API catalog | 2.2% |
| A2A agent card | 1.2% |
| Agentic commerce document | 0.9% |
| Dry-run or simulate mode | 0.6% |
| Consent and bot identity signal | 0.4% |

Read that table from the bottom. The three dimensions that describe *permission*, which is the thing Amazon says it wants, are the three rarest things in the catalog. [Consent and bot identity](https://apis.io/rating/dimensions/consent-identity/) is any machine-readable statement of what an AI agent may do with a surface, or any way to cryptographically identify agent traffic: AIPREF, Content Signals, Web Bot Auth, signed HTTP messages. One hundred and two providers publish one. [Dry-run mode](https://apis.io/rating/dimensions/dry-run-mode/), the only affordance that lets an agent show a human what it is about to do before it does it, exists at 143. [Registration without a human](https://apis.io/rating/dimensions/dynamic-client-registration/) sits at five percent. The web that Amazon wants agents to ask permission of has, at ninety-nine point six percent of the providers I profile, no machine-readable way to be asked.

The three companies in the news are all in the catalog, and their scores say a lot about who is arguing from where.

| Provider | Agent readiness | Band |
|---|--:|---|
| [Perplexity](https://apis.io/providers/perplexity/) | 60.4 | agent-native |
| [Meta](https://apis.io/providers/meta/) | 51.8 | agent-ready, gated from agent-native |
| [Amazon](https://apis.io/providers/amazon/) | 28.0 | agent-aware |

Perplexity and Meta both serve a first-party MCP server, both serve OAuth protected-resource metadata and an authorization server that supports dynamic client registration, and both can issue a token scoped to the human the agent is acting for. That is what agent-native infrastructure looks like when the company building agents also has to let agents in. Meta is held out of the top band by a gate rather than points: agent-native requires idempotency and a verified stable error envelope regardless of score, and Meta has neither, which is a fair thing to hold a company back on when its agent is about to put things in other people's carts. Amazon, across the advertising, Selling Partner and Pay contracts we hold, has a contract, bearer auth, documented rate limits, documented reversibility and verified idempotency, and nothing else. No MCP server, no well-known catalog, no agent card, no delegated identity, no registration without a human, no dry run, and no consent signal of any kind. **Amazon wants agents to ask permission, and publishes nothing an agent could ask.** The company with the most to lose from agents has done the least to describe the terms on which it would accept one.

I do not think that is hypocrisy. I think it is the moat. If you own the UI, publishing the machine-readable terms for bypassing it is not in your interest, and the absence of a consent layer at the protocol level is exactly what makes "get permission first" an unfalsifiable demand. You cannot comply with it. Which is why the agent side of the handshake has to exist before the website side has any reason to.

## The half an agent carries

The other half is what an agent agrees to, and what it can prove about itself when it arrives. This is the part almost nobody is building, because it is the part that constrains the agent builders rather than the websites. I wrote last week that [an agent cannot fill in a form](https://apis.io/2026/09/13/an-agent-cannot-fill-in-a-form/), and that the form was never about authentication anyway. It is where a provider collects what it needs to know about you before it hands over a key. Take the form away and the provider loses the thing it actually wanted, which is a pretty good description of what Amazon is mad about.

[KYA, Know Your Agent](https://apis.io/kya/), is that form turned into data. An agent builds a profile once: who operates it, how to reach them, what it is for, what it has done. Six facets, mirroring the six facets of the provider's Kin Score, each carrying a grade of verified, asserted, inherited or absent, so the grade travels with the fact:

- **Identity anchor.** How strongly the agent is tied to a domain somebody actually runs.
- **Operator accountability.** Who is behind it, and whether you can reach them.
- **Provenance and attestation.** What the agent is made of, and what can be proven about it.
- **Declared intent.** What it says it does, and whether that matches what it does.
- **Operating history.** How long it has operated, at what volume, with what incidents.
- **Standing.** Free or paying, and whether that is verified.

The provider's requirements live in the [API Onboarding Descriptor](https://apicommons.org/onboarding/), a well-known document that states what a provider needs before it will onboard a caller, and APIs.io serves its own at `/.well-known/api-onboarding`. An agent reads the descriptor, compares it against its own profile, and knows *before it tries* whether it can get in and precisely what it is missing if it cannot. Nobody tells the provider whether to trust the agent. The provider gets facts, weighted by its own priorities, and decides. A payments API and a documentation search API should not have to share an opinion about what matters.

I want to be straight about the state of this, because it matters to the argument. The provider half is live and has been scoring for months. The agent half is built, deployed, and dark: the KYA routes answer 404 by design while the surface is tested, no consumer record exists yet, and no provider consumes one. It was published before it was switched on because a consent scheme designed in private is not one anyone should adopt, and the [trust page](https://apis.io/trust/) states each link in the chain with whether it is live, built, or not built. Almost none of it is new. Discovery, registration, request signing, token binding, delegation and revocation all have RFCs behind them, and the slot for "a third party vouches for this client at registration" has existed since RFC 7591. What is missing is a vocabulary for describing a consumer and a way for a provider to say what it needs. That is the bill of requirements. It does not need a standards body to start. It needs a few providers to publish a descriptor and a few agents to carry a profile.

## Why x402 needs it first

The last line of the argument is the one I think is most important. If we are ever going to get x402 running at scale, the agent bill of requirements is not optional. A 402 is a bill, and a bill needs a payer with a name. Right now [nearly a quarter of the 427 providers serving an agent card](https://apievangelist.com/2026/09/21/427-agent-cards-how-they-talk-and-what-they-do/) accept x402, which means an agent can discover them, read what they offer and pay for a single call without a human creating an account. When [I went looking for live x402 services](https://apis.io/2026/09/11/we-found-twenty-five-live-x402-services-one-was-in-our-catalog/) across the catalog, seven of the thirty-two providers that claim it served a real payment challenge, and only one of the twenty-five services on an independent x402 directory was in our catalog at all. It is real and it is tiny.

It stays tiny for the same reason Amazon's demand is unanswerable. A provider will meter an anonymous wallet for a search query. It will not let an anonymous wallet place an order, move money or change an account, and that is the whole commercial surface Amazon is defending. The moment a paid call has consequences, the provider needs to know who is paying and on whose behalf, which is the KYA profile and the delegated-identity dimension in the table above at ten percent. Machine payment without machine identity is a vending machine. Machine payment with it is a customer.

So here is where I land on the Amazon and Muse argument. Owning the UI is a moat exactly as long as there is no form an agent can fill in. Amazon can block Perplexity and it can block Meta, and it will win those fights one at a time because there is no shape for the alternative. But both halves of that shape exist now as drafts in the open: a scored list of what a website publishes, and a graded profile of what an agent carries. If you run an API, [publish an onboarding descriptor](https://apis.io/onboarding/) and let the rubric tell you where you stand. If you run agents, argue with the six facets before they harden. The bill of rights will not come from the company with the most to lose. It will come from the providers who decide that a named, accountable agent with a wallet is a customer they would rather have than a scraper they cannot see.
