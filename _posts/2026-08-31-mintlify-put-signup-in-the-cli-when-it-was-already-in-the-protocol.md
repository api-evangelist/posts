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

**Where a human genuinely is required, we say so.** A Starter key is free with a GitHub sign-in; `GET /api/v1/auth/providers` lists GitHub, Google, and LinkedIn. That is a browser flow with a person in it, exactly like Mintlify's email click, and the descriptor labels it as such rather than dressing it up.

**Where one is not, an agent can now arrive with no human at all.** apis.io is an [AAuth](https://www.aauth.dev/) resource. An agent holds its own Ed25519 keypair, carries a token in which an agent provider vouches for its `aauth:local@domain` identifier, signs the request per RFC 9421, and is recognised by a service it has never registered with. No account, no key, no browser, at any step. What that earns is stated precisely, because vagueness here is how people get misled: the free tier and *attribution*, GET and HEAD only. The request becomes rate-limitable and auditable as an identifier instead of an IP address. Identity is not payment.

**And then the layer that is actually the point.** All of it is declared in one machine-readable file at `https://apis.io/.well-known/api-onboarding`, an [API Onboarding Descriptor](https://apicommons.org/onboarding/). It states whether an account is required at all, what the plans cost and what each unlocks, an explicit `agentPolicy`, every registration mechanism that exists and what each one is worth, how credentials map to header names, an executable flow an agent can run, and — the field I care about most — a `gaps` array where I write down what does not work yet. An agent reads the door before it knocks. It never has to hang for several minutes to discover that a human is needed.

## The sin I was standing in

I had that file wrong when I started writing this, and the way it was wrong is worth more than the fix.

The descriptor advertised a `console-only` mechanism saying keyed tiers were issued by hand at info@apis.io, and carried a gap reading "built but not yet deployed." That self-serve flow had shipped days earlier. The machine-readable file had drifted away from the human documentation page, which is precisely the failure I spend my days pointing at in other people's catalogs. Fine — I corrected it, and `browser-oauth` now sits where the fiction was.

Then I went looking at what else the file did not say, and found I had been committing *exactly the sin I spent three sections of this post accusing Mintlify of*.

The apis.io authorization server has supported RFC 7591 dynamic client registration and Client ID Metadata Documents **all along**. No artifact anywhere said so. Not the descriptor, not the OpenAPI, not the documentation. An agent evaluating apis.io could not discover the better of our two registration paths — the same shape as Mintlify running a live `registration_endpoint` that only surfaces if you already know to fetch a well-known file nobody mentions. I wrote the paragraph about their unannounced door without noticing I was standing in front of my own. Both are declared now.

That is the more useful version of this post's argument, and I would rather hand it over than keep it. **The gap between what your infrastructure does and what your artifacts say it does is invisible from the inside.** It is invisible precisely because you know what you built, so you never go and read your own front door as a stranger would. Mintlify has an excellent team and shipped a genuinely good CLI command, and still nobody wrote down the protocol they already speak. I run a catalog whose entire purpose is measuring this, published a descriptor about it, and had two undeclared mechanisms and one stale one.

Two things I will not dress up, because a `gaps` array that only ever shrinks is marketing. There is one agent provider in that AAuth allowlist and we run it — a probe of 1,486 hosts turned up no other AAuth resource document anywhere in the catalog, so this is a worked example and not an ecosystem, and the draft it implements expires in February 2027. And an agent can now arrive with no human at all and *still cannot buy anything*, because our token endpoint offers `authorization_code` and `refresh_token` and nothing else. The last human-shaped step in the chain is the one where money changes hands. That is a more interesting place for it to be than the signup form — but it is still there, and the descriptor says so. That array got longer today, not shorter.

## The ask

`mint signup` is a good command. Keep it. But Mintlify is not just an API provider, it is the documentation layer for a very large number of API providers, and that makes this a much bigger lever than one CLI verb. If Mintlify emitted an onboarding descriptor for every docs site it hosts — reading what it already knows about a customer's auth setup, their plans, their OAuth metadata, their MCP server — thousands of API providers would get a machine-readable front door for free, on the same day, without any of them writing a line of code. That is the version of this that scales past one company's terminal.

The agents are already at 66% of the traffic. They are not going to learn everybody's CLI. They are going to read a file at a known path, or they are going to guess.
