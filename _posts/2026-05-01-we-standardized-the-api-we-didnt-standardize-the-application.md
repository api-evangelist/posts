---
layout: post
title: "We Standardized the API. We Didn't Standardize the Application."
date: 2026-05-01
author: "Kin Lane"
image: "/assets/img/blog/we-standardized-the-api-not-the-application.png"
category: "Blog"
excerpt: "I walked through the application sign-up flow for six API providers in one sitting — Notion, Slack, LinkedIn, GitHub, Cloudflare, Google — and recorded every required field, every gate, every credential type. Six providers. Six different worlds. This was tolerable when we managed ten APIs. It is not tolerable for the agents and copilots we are about to point at hundreds of them."
---
A few days ago I sat down at my Thursday office hours and opened six developer portals back to back: Notion, Slack, LinkedIn, GitHub, Cloudflare, and Google. The plan was simple — create an application against each one, the same way any developer would when wiring a new integration. I had Claude open in a side panel as a co-tracker, capturing every URL, every form field, every required input, every gating dialog. Three hours later I had a fairly complete map of what it actually takes to onboard six common APIs.

The map is not encouraging.

## Six providers, six different worlds

Every provider exposes the same conceptual thing: a configurable container that holds the credentials, scopes, and metadata required to consume their API. None of them call it the same thing. None of them shape it the same way. None of them gate it on the same conditions. None of them export it in the same format.

Notion calls it an "internal connection." It has a single Configuration page with capability checkboxes (read content, update content, insert content, read comments, insert comments, user info), a Content Access tab where you select individual pages and teamspaces, and a single installation access token. There is no client ID, no client secret, no verification gate. For internal use it's the cleanest shape of the six.

Slack calls it an "App." Slack has the largest surface area of any provider in the experiment — seventeen distinct configuration pages spread across two host domains, three sidebar groups (Settings, Features, Submit to Marketplace), and two scope namespaces (bot token vs. user token). It has a Socket Mode option that routes events over WebSockets instead of public HTTP. It has a Block Kit framework for app home tabs. It has a JSON or YAML manifest that exports the entire app config — and that manifest is the most agent-friendly artifact across all six providers. No one else has anything like it.

LinkedIn calls it an "App," gated behind a "company-page verification" flow you complete by sending a magic URL to a Page Admin who has thirty days to act. Your scopes are not free-form — they are bundled inside "products" (Default tier, Standard tier, Development tier) and only the Default tier products are available without verification. The default access token TTL is sixty days. If you accidentally type a personal profile URL into the LinkedIn Page field instead of a Company Page URL, the form lets you submit and then warns you it cannot be undone.

GitHub gives you two completely separate paths. Personal Access Tokens — fine-grained or classic — are the path of least resistance for any single-user agent: name, expiration, repos, permission matrix. OAuth Apps are the path for multi-user or distributed scenarios: client ID, client secret, callback URL, optional Device Flow toggle. There is no verification gate on either. There is also no auto-cleanup; my own account had expired tokens piling up and one with no expiration date at all, which is its own problem.

Cloudflare doesn't have an "App" abstraction at all. It has profile-scoped API tokens. The entire authorization surface is a single flat list under your user profile, with permissions × resources × IP filtering × TTL configurable per token. Cloudflare is the only provider in this set that exposes TTL and IP allowlist as first-class fields on token creation. It is also the only one that ships a curated set of token templates — pre-built "common shapes" that bypass the full permission matrix.

Google has eight surfaces. Credentials, OAuth Overview, Branding, Audience, Clients, Data Access (scopes), Verification Center, and the APIs Dashboard — split across two product groups, APIs & Services and the Google Auth Platform. You can have API Keys, OAuth 2.0 Client IDs, and Service Accounts coexisting on the same project. Verification has two independent axes — branding verification and data-access verification — surfaced as separate cards. There is a hard, irreversible 100-user cap for unapproved sensitive scopes that applies over the entire lifetime of the project.

Six providers. Six different vocabularies for the same primitive.

## Why no standard ever emerged

OpenAPI exists. We have a shared way to describe what an API does. We do not have a shared way to describe what it takes to use one.

Part of the answer is incentives. The application-creation flow is the developer's first prolonged exposure to a provider's brand and product. It is where Slack shows you Block Kit, where LinkedIn shows you their product tiers, where Google shows you the consent screen they want you to brand. None of them are motivated to commodify that surface. It is also where the provider's monetization model first becomes visible — what's gated, what's free, what triggers a verification queue, what requires an account upgrade. That is product surface, and product surfaces resist standardization.

Part of it is history. Each of these portals accreted over a decade or more, layer by layer. Slack's seventeen pages did not appear at once; they grew as the platform shipped App Home, Socket Mode, Workflow Steps, Org Level Apps, MCP support. Google's eight surfaces are the geological record of OAuth 2.0 evolution, the GDPR-driven verification regime, the post-2020 Audience publishing model, and the per-API enablement architecture. There was never a moment when all of this could have been frozen into a clean standard, because none of it was finished.

Part of it is that we did try. Mehdi Medjaoui and the API Days community ran OAuth.io for a few years — a unified OAuth implementation that let you register many applications under a single normalized abstraction. It worked, technically. It died because it couldn't keep up with the per-provider quirks the providers themselves kept adding, and because none of the providers had any reason to help. The shape of an OAuth flow turns out to be the smallest part of the problem; the much larger part is the verification gates, the scope vocabularies, the resource selection models, and the per-provider lifecycle of an "app."

## The cost was bearable when we managed ten APIs

Most of us internalized this divergence years ago without noticing. You learned the GitHub OAuth flow once and re-used it for ten years. You learned where Google hides the consent screen and you came back to it twice a year. You learned that LinkedIn product tiers existed because you had to once, for one integration, and then you forgot. The cost was distributed thin enough across a long enough time horizon that it never registered as a tax.

Then the number of APIs we touch in a given quarter went from ten to fifty, and the cost stopped being bearable. I have eight Google API Keys on my personal account, three of which are flagged as unrestricted, two of which date back to 2017 and have no business still being active. I have six Cloudflare API tokens, two of which were last used in 2019 and 2021 and somehow still have permissions. I have an OAuth client on my Google project that hasn't been used in five months and is scheduled for automatic deletion. None of these portals talked to each other when I created the credentials, none of them talk to each other now, and none of them will talk to each other when the credentials expire or get revoked.

That was the state of the world before agents.

## Agents make this acute

When you point an agent or a copilot at the tools you actually use to do your work — Notion for notes, Slack for communication, GitHub for code, Google for everything else — you are asking it to navigate exactly this divergence. The agent does not have ten years of muscle memory for where Google hides the OAuth client editor. It does not remember that LinkedIn requires Page-Admin verification before the Products tab unlocks. It does not know that Slack's Token Rotation requires Redirect URLs to be configured first.

You can paper over this with bespoke per-provider integrations — every major agent harness today does — but that is the same trap we hit with the ten-to-fifty-API transition, just one layer up. Every new provider is bespoke. Every change to a provider's portal silently breaks the integration. The cost compounds with the number of providers, not the number of agents, which means it gets worse faster as the agent ecosystem expands.

What we actually need is a manifest. Slack already has one — a JSON or YAML document that captures the full application configuration in a portable, inspectable format. Of the six providers I walked through, Slack's manifest is the only artifact that an agent could read, modify, and re-apply without scraping a web UI. The other five require either browser automation or per-provider SDKs that wrap the underlying portal APIs (when those APIs exist at all, which is not always).

A cross-provider application manifest would not need to be ambitious. It would need to capture the things that recur — the credential type (PAT, OAuth app, internal connection, service account), the scope vocabulary (with provider-specific mappings), the resource selection model (repos, pages, workspaces, accounts, projects), the verification state, the TTL and rotation policy. It would not need to flatten every provider into one shape. It would need to be lossless enough that an agent could understand what an application is, what it can do, and what it would take to provision it against a new provider.

That is the part of the API standardization story we never finished. We standardized how to describe an API. We did not standardize how to *become* a consumer of one. For ten APIs that didn't matter. For five hundred APIs and an agent at the keyboard, it is the entire problem.
