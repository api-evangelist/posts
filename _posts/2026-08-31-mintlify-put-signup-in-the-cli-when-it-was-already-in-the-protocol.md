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

That returns results, on the Free tier, at 500 requests a day. The OpenAPI contract says so structurally — `security: [{}, {ApiKeyAuth: []}]`, where the empty object declares that a keyless call is acceptable and the second entry says a key is understood. There is no read path in the catalog that requires an identity, so there is no reason to make a machine prove one. When you do send a key it raises your quota and unlocks the tier-gated resources, and asking for something above your tier returns `402 Payment Required` — not a `403`, not a `429`. A payment signal, distinct from a permission failure and distinct from being throttled, so a client can tell the difference without parsing prose.

**Where a human genuinely is required, we say so.** A Starter key is free with a GitHub sign-in; `GET /api/v1/auth/providers` lists GitHub, Google, and LinkedIn. That is a browser flow with a person in it, exactly like Mintlify's email click, and the descriptor labels it as such rather than dressing it up.

**Where one is not, an agent arrives on its own credentials.** apis.io is an [AAuth](https://www.aauth.dev/) resource. An agent holds its own Ed25519 keypair, carries a token in which an agent provider vouches for its `aauth:local@domain` identifier, signs the request per RFC 9421, and is recognised by a service it has never registered with. No account, no key, no browser, at any step. What that earns is stated precisely, because vagueness here is how people get misled: the free tier and *attribution*, GET and HEAD only. The request becomes rate-limitable and auditable as an identifier instead of an IP address. Identity is not payment.

**And it can go the whole way by itself.** That same signature, presented at the token endpoint with `grant_type=client_credentials`, returns an agent principal: its own API key, its own quota, no person at any step. `DELETE /api/v1/auth/me` removes it again in one request, because onboarding you cannot undo is the asymmetry I penalise other providers for. The whole loop — discover, identify, get a credential, call, delete the account — runs without a browser.

The condition on that is the part worth copying. `client_credentials` is reachable **only** by a caller already carrying a verified AAuth identity; anonymous is refused. An account that costs nothing to mint makes any reputation attached to it worthless — abuse the quota, take a fresh identity, repeat — so the price of one is that an agent provider on our allowlist has to vouch for you. That is not a setting. It is the reason the door can be open at all.

**And the layer that is actually the point.** Every one of those doors is declared in one machine-readable file at `https://apis.io/.well-known/api-onboarding`, an [API Onboarding Descriptor](https://apicommons.org/onboarding/). It states whether an account is required, what the plans cost, an explicit `agentPolicy`, every registration mechanism that exists and precisely what each one is worth, how credentials map to header names, an executable flow an agent can run, and — the field I care about most — a `gaps` array where I write down what does not work yet. An agent reads the door before it knocks. It never has to hang for several minutes to discover that a human is needed.

## What I will not dress up

A `gaps` array that only ever shrinks is marketing, so here is what that file says about itself today.

There is one agent provider in that AAuth allowlist and we run it. A probe of 1,486 hosts turned up no other AAuth resource document anywhere in the catalog, so this is a worked example, not an ecosystem, and the draft it implements expires in February 2027. An agent that can onboard itself completely still cannot buy anything: the scope ceiling for an agent principal is `apis:read`, Pro data answers `402`, and machine payment is a problem I have not solved. The `maturity` field still reads `self-serve` because that is the top of the descriptor's own enum, which cannot tell a stranger with a browser apart from a stranger with no human at all — those are now two different doors here, and the vocabulary has not caught up with the deployment.

The last human-shaped step in the chain is the one where money changes hands. That is a far more interesting place for it to be than the signup form. But it is still there, and the file says so.

## The ask

`mint signup` is a good command. Keep it. But Mintlify is not just an API provider, it is the documentation layer for a very large number of API providers, and that makes this a much bigger lever than one CLI verb. If Mintlify emitted an onboarding descriptor for every docs site it hosts — reading what it already knows about a customer's auth setup, their plans, their OAuth metadata, their MCP server — thousands of API providers would get a machine-readable front door for free, on the same day, without any of them writing a line of code. That is the version of this that scales past one company's terminal.

The agents are already at 66% of the traffic. They are not going to learn everybody's CLI. They are going to read a file at a known path, or they are going to guess.
