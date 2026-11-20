---
published: true
layout: post
title: 'The Spectrum Of Agent Onboarding Standards'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-spectrum-of-agent-onboarding-standards.png
date: 2026-11-20 20:45:00 +0000
author: Kin Lane
tags:
  - Onboarding
  - Agents
  - OAuth
  - Identity
  - Standards
---
I've spent years arguing that API onboarding should be programmatic. Sign up, get keys, make a call, without waiting on a human, a sales call or a form. Agents have turned that from a nice-to-have into a requirement. An agent that has to stop and ask someone to fill out a sign-up form isn't going to get very far.

This week I added [auth.md](https://standards.apievangelist.com/store/auth-md/) to the [API Evangelist standards catalog](https://standards.apievangelist.com/). Then I looked at what else the catalog had for agents onboarding themselves, and found four gaps. Each one was referenced by auth.md or by MCP authorization but had no entry of its own. I filled those in too. Laid out together, these standards aren't competing answers to one question. They form a spectrum, and each one handles a different step of getting an agent from "I found your API" to "I have a scoped token for this user."

## Step one: find out how to get in

Before an agent can register for anything, it needs to know where authorization happens. Two documents do that work.

- [Protected Resource Metadata](https://standards.apievangelist.com/store/protected-resource-metadata/) (RFC 9728). The API publishes a document naming the authorization servers that issue its tokens, at `/.well-known/oauth-protected-resource`, or points to it in the `WWW-Authenticate` header of a 401.
- [Authorization Server Metadata](https://standards.apievangelist.com/store/authorization-server-metadata/) (RFC 8414). The authorization server publishes its endpoints, grants and scopes at `/.well-known/oauth-authorization-server`. [OpenID Connect](https://standards.apievangelist.com/store/openid-connect/) discovery is the same idea with identity fields added.

This layer has adoption. In the [November 2 well-known census](https://apis.io/standards/measurements/) on APIs.io, which probed 28,785 provider hosts, 2,033 served `oauth-authorization-server` and 703 served `openid-configuration`. Discovery is the most mature part of the spectrum.

## Step two: get an identity without a form

This is where the spectrum spreads out, because it's where the hard problem lives. The question is how a client that a service has never seen gets credentials.

- [Dynamic Client Registration](https://standards.apievangelist.com/store/dynamic-client-registration/) (RFC 7591) is the original answer. The client POSTs its metadata to a registration endpoint and gets a client ID back. It works, but every client registers with every server, and servers end up holding piles of one-off registrations.
- The [OAuth Client ID Metadata Document](https://standards.apievangelist.com/store/client-id-metadata-document/) (CIMD) flips that around. The client ID *is* an HTTPS URL, and the server fetches the client's metadata from it when needed. There's no registration step, and the client's identity is anchored to a domain it controls. MCP authorization moved to it. It's an IETF OAuth working group draft, at -03 as of November 2.
- [auth.md](https://standards.apievangelist.com/store/auth-md/) from WorkOS goes after the user, not the client. A service publishes a Markdown file at its domain describing how an agent can register a user, which flows it accepts and which scopes exist. It's MIT-licensed, at v0.6.0, and openly built on the OAuth pieces in this post.
- [AAuth](https://standards.apievangelist.com/store/aauth/) and the [AI Agent Authentication and Authorization](https://standards.apievangelist.com/store/ai-agent-auth/) draft come at it from agent identity, giving agents their own first-class identity in OAuth instead of borrowing a client's.

## Step three: prove the user said yes

Once an agent can talk to a service, it has to act on behalf of a person. The standards here differ in how much the human has to do.

- [ID-JAG](https://standards.apievangelist.com/store/id-jag/), the Identity Assertion JWT Authorization Grant, needs no human in the loop at all. The user's identity provider issues a signed assertion, and the agent trades it for a token at a service that already trusts that provider for SSO. This is auth.md's "agent verified" flow. It's at draft -06 in the IETF OAuth working group.
- The [Device Authorization Grant](https://standards.apievangelist.com/store/device-authorization-grant/) (RFC 8628) is how a TV signs in. The agent shows a code, and the person confirms it in a browser they trust. This is the shape of auth.md's "user claimed" flow.
- [CIBA](https://standards.apievangelist.com/store/ciba/) has the service reach the user out of band, given a hint about who they are. auth.md's v0.6.0 `service_auth` path is modelled on it.
- [Token Exchange](https://standards.apievangelist.com/store/token-exchange/) and [Transaction Tokens](https://standards.apievangelist.com/store/transaction-tokens/) carry that delegation along as the agent's call fans out across services.

## Step four: prove the agent is who it says it is

The last band is about the agent itself, not the user it acts for.

- [Web Bot Auth](https://standards.apievangelist.com/store/web-bot-auth/) and [HTTP Message Signatures](https://standards.apievangelist.com/store/http-message-signatures/) let an agent sign its requests. 94 hosts in the November 2 census publish an `http-message-signatures-directory`.
- [WIMSE](https://standards.apievangelist.com/store/wimse/) handles workload identity across systems.
- In commerce, the [Visa Trusted Agent Protocol](https://standards.apievangelist.com/store/visa-trusted-agent-protocol/), [KYAPay](https://standards.apievangelist.com/store/kyapay/) and [Mastercard Agent Pay](https://standards.apievangelist.com/store/mastercard-agent-pay/) bring know-your-agent checks to payments.
- [Shared Signals](https://standards.apievangelist.com/store/shared-signals-framework/) covers what happens after onboarding: revoking access and reporting security events when something changes.

## What I take from the spectrum

Two things stand out to me.

First, very little of this is new. The onboarding layer for agents is being built almost entirely from OAuth parts that already exist: device flow, token exchange, JWT grants, metadata documents. auth.md is the clearest example, and it says so plainly. That's a good sign. It means a provider who has done OAuth well is most of the way to agent-ready onboarding, and the remaining work is publishing the right documents.

Second, the spectrum is uneven. Discovery is widely published. Registration and user consent for agents are still drafts and vendor protocols, moving month to month. If you're a provider, the cheap, durable win today is the discovery layer. Publish your authorization server metadata, and add Protected Resource Metadata to your APIs, so whichever registration approach wins can find you. Then watch CIMD and ID-JAG closely, because that's where agent onboarding is getting decided.

I'll keep the [standards catalog](https://standards.apievangelist.com/) current as these move, and I'll measure the ones with a well-known path in the weekly census on [APIs.io](https://apis.io/standards/measurements/), so we can see which approaches providers actually adopt.
