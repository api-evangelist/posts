---
published: true
layout: post
title: Mintlify Put Signup in the CLI When It Was Already in the Protocol
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/mintlify-put-signup-in-the-cli-when-it-was-already-in-the-protocol.png
date: 2026-08-31
author: Kin Lane
tags:
  - Onboarding
  - Agents
  - AI
  - Mintlify
  - APIs.io
  - Authentication
  - OAuth
  - Discovery
  - Standards
---
Mintlify [shipped `mint signup`](https://www.mintlify.com/blog/mint-signup), a CLI command that creates a Mintlify account from the terminal so a coding agent never has to open a browser to get started. Their reasoning is hard to argue with: they measured 250+ million agent queries across Mintlify-powered docs in July 2026, roughly 66% of their total measured traffic, and they name Claude Code, Cursor, and Devin as the clients they are building for. If two out of every three readers of your documentation is a machine, the front door probably should not be a signup form.

I have been running [a series on programmatic API onboarding for the agentic moment](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) for a few months now — thirty-six providers deep, retrofitting a single-file auth script onto every gateway, identity platform, and developer platform I could get an account with. So a vendor shipping a terminal-first account creation command is squarely my thing, and I want to be clear up front that I am glad they did it. But I read the announcement, then went and probed their edge, and the thing I came away with is not what the post is about. Mintlify already had a machine-readable signup door. It just was not the one they wrote the blog post about.

## What `mint signup` actually is

The [command](https://www.mintlify.com/docs/cli/commands#mint-signup) is `mint signup`, with four optional flags — `--firstName`, `--lastName`, `--company`, `--email` — and if you leave them off it prompts you interactively. It follows the same pattern as `mint login`, and it drops credentials into `~/.config/mintlify/config.json` for every subsequent CLI call. Nice ergonomics. Two things about it are worth sitting with.

The first is in Mintlify's own docs, stated plainly: "`mint signup` does not return until you click the verification link, which can take several minutes." The docs then tell you to run it as a background process rather than blocking on it. So the agent-native signup command is still gated on a human opening an email client and clicking. That is not a criticism of the gate — verifying that a real person is behind a new account is a reasonable thing to want, and I said as much [eleven years ago](https://apievangelist.com/2015/11/30/i-like-being-able-to-verify-a-developer-is-real-before-giving-them-access-to-my-apis/). The criticism is that an agent finds this out by hanging for several minutes. There is nothing it can read beforehand that says *a human will need to be present at step three*.

The second is that this is a CLI command, not a standard. It works if, and only if, you have Mintlify's CLI installed and you know the command exists. There are 27,464 providers in the [APIs.io](https://apis.io) catalog right now. An agent cannot install 27,464 CLIs and read 27,464 blog posts to learn 27,464 bespoke signup verbs. Every vendor that solves onboarding inside its own tool has solved it for exactly one row of the table.

## The door they already had open

Here is the part that got no announcement. Mintlify serves this, right now, at `https://mintlify.com/.well-known/oauth-authorization-server`:

```json
{
  "issuer": "https://mcp.mintlify.com",
  "authorization_endpoint": "https://mcp.mintlify.com/oauth/authorize",
  "token_endpoint": "https://mcp.mintlify.com/oauth/token",
  "registration_endpoint": "https://mcp.mintlify.com/oauth/register",
  "scopes_supported": ["docs:read","docs:write","nav:write","config:write",
    "session:write","deployment:read","deployment:write","members:read",
    "members:write","billing:read","integrations:write","analytics:read","offline_access"],
  "code_challenge_methods_supported": ["S256"],
  "token_endpoint_auth_methods_supported": ["none"]
}
```

That is RFC 8414 authorization server metadata with a live `registration_endpoint` — RFC 7591 dynamic client registration — public clients, PKCE with S256, and thirteen real scopes including `billing:read` and `members:write`. It is there for their MCP server. An agent that speaks the MCP authorization spec can find that document, register itself as a client, and walk a scoped OAuth flow without anybody writing a vendor-specific command for it.

The protocol door was already open and got zero press. The proprietary CLI verb got the announcement. I understand why — the CLI is the thing a developer can feel, and the well-known document is invisible plumbing. But the plumbing is the part that composes.

Meanwhile `https://www.mintlify.com/.well-known/api-onboarding` returns a 404, which is the file that would have told an agent all of the above without it having to guess which well-known path to try.

## What we do on APIs.io instead

I am not holding up APIs.io as finished. I am holding it up because it is the same problem, and because I have to eat what I cook.

**The best signup is no signup.** The base tier of the APIs.io API is keyless. No account, no form, no email, no verification link:

```bash
curl "https://apis.io/api/v1/search?q=sms"
```

That returns results, on the Free tier, at 1,000 requests a day. The OpenAPI contract says so structurally — `security: [{}, {ApiKeyAuth: []}]`, where the empty object declares that a keyless call is acceptable and the second entry says a key is understood. There is no read path in the catalog that requires an identity, so there is no reason to make a machine prove one. When you do send a key it raises your quota and unlocks the tier-gated resources, and asking for something above your tier returns `402 Payment Required` — not a `403`, not a `429`. A payment signal, distinct from a permission failure and distinct from being throttled, so a client can tell the difference without parsing prose.

**Where a human genuinely is required, we say so and we use the same protocols everyone else has.** A Starter key is free with a GitHub sign-in; `GET /api/v1/auth/providers` lists GitHub, Google, and LinkedIn. That is a browser flow with a person in it, exactly like Mintlify's email click. For the MCP surface we run our own OAuth 2.1 authorization server with RFC 9728 protected resource metadata and RFC 8414 server metadata, including a `registration_endpoint` at `https://apis.io/api/v1/auth/register` — the same dynamic registration door Mintlify has, arrived at from the same reading of the MCP spec.

**And then the layer that is actually the point.** All of that is declared in one machine-readable file at `https://apis.io/.well-known/api-onboarding`, an [API Onboarding Descriptor](https://apicommons.org/onboarding/). It states the maturity of the onboarding path, whether an account is required at all, what the plans cost and what each one unlocks, an explicit `agentPolicy` saying agents are allowed, the registration mechanisms available, how credentials map to header names, what the scope model is, an executable flow an agent can run, and — the field I care about most — a `gaps` array where I write down what does not work yet. An agent reads the door before it knocks. It never has to hang for several minutes to discover that a human is needed.

## The gap in my own file

Being honest about this is the entire reason the descriptor has a `gaps` array, so here it is. Our published descriptor is stale. It still lists a `console-only` mechanism saying keyed tiers are issued by a human at info@apis.io and that "a self-serve GitHub OAuth + billing flow is built and pending deployment." That flow shipped. The human documentation page says a Starter key is free with a GitHub sign-in and that Pro and Business are self-serve from your account page. The machine-readable file drifted away from the human page, which is precisely the failure I spend my days pointing at in other people's catalogs. It is going to be corrected, and I would rather write that sentence than quietly fix it and pretend the drift never happened.

**Update, later the same day.** It is corrected. `apis.io/.well-known/api-onboarding` now declares `browser-oauth` — honestly labelled as needing a human — in place of the `console-only` fiction. I am leaving the paragraph above as I wrote it, because the fix is not the interesting part.

This is: while correcting it I found we had been committing *exactly the sin I just accused Mintlify of*. The apis.io authorization server has supported RFC 7591 dynamic client registration and Client ID Metadata Documents all along, and **no artifact anywhere said so**. An agent reading our descriptor could not discover the better of our two registration paths — the same shape as Mintlify shipping a live `registration_endpoint` that only appears if you go looking for a well-known file nobody mentions. I wrote three sections of this post about that failure without knowing I was standing in it. Both are now declared.

Then we went one further, because the argument obliges it. apis.io is now an [AAuth](https://www.aauth.dev/) resource: an agent holding its own Ed25519 keypair, carrying a token in which an agent provider vouches for its `aauth:local@domain` identifier, signing the request per RFC 9421, gets recognised by a service it has never registered with. No account, no key, no browser, at any step. The descriptor declares that door too, and says exactly what it is worth — the free tier and attribution, GET and HEAD only. Identity is not payment.

Two things I will not dress up. There is one agent provider in that allowlist and we run it; a probe of 1,486 hosts found no other AAuth resource document anywhere in our catalog, so this is a worked example and not an ecosystem. And an agent can now arrive with no human at all and *still cannot buy anything*, because our token endpoint offers `authorization_code` and `refresh_token` and nothing else. The last human-shaped step in the chain is the one where money changes hands, which is a more interesting place for it to be than the signup form — but it is still there, and the descriptor says so in a `gaps` array that got longer today, not shorter.

## The ask

`mint signup` is a good command. Keep it. But Mintlify is not just an API provider, it is the documentation layer for a very large number of API providers, and that makes this a much bigger lever than one CLI verb. If Mintlify emitted an onboarding descriptor for every docs site it hosts — reading what it already knows about a customer's auth setup, their plans, their OAuth metadata, their MCP server — thousands of API providers would get a machine-readable front door for free, on the same day, without any of them writing a line of code. That is the version of this that scales past one company's terminal.

The agents are already at 66% of the traffic. They are not going to learn everybody's CLI. They are going to read a file at a known path, or they are going to guess.
