---
published: true
layout: post
title: 'The Four Ways Providers React To A Kin Score'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-four-ways-providers-react-to-a-kin-score.png
date: 2026-09-28
author: Kin Lane
tags:
  - Kin Score
  - Providers
  - Storytelling
  - Provenance
  - Open Source
  - APIs.io
  - APIs
---
On a planning call a few weeks ago I said something out loud that I had been sorting in my head for months: there are four ways a company reacts when I publish a [Kin Score](https://apis.io/rating/) about it. It ignores the score. It asks me to take it down, usually because it knows exactly how bad things are. It treats the score as a roadmap. Or it fixes the problem itself and sends me a pull request. I mentioned the list in [The "We Are All In On Agentic" Shame Game](https://apievangelist.com/2026/09/25/the-we-are-all-in-on-agentic-shame-game/), and this week handed me fresh public examples of the two reactions I care about most, plus a case where the right reaction is a fifth one I had not named.

## Silence

This is the default, and by a wide margin. The catalog profiles roughly twenty-six thousand companies, and almost none of them ever say anything to me. I know through the grapevine that some of them read what I write. Silence is not agreement and it is not dismissal. It is just the absence of a signal, and it is the bucket I cannot count directly, because it is everyone who is not in the other three.

## Take it down

The catalog keeps a delisting registry, and every removal records why. Of 92 entries, **18 are owner requests**: a company asked to be removed. The rest are catalog hygiene (dead domains, spam, junk) and a handful of policy refusals where I declined a listing myself. I honor owner requests, because a catalog that refuses to let anyone leave is not one people will trust. But I read each one as information. A company that asks to be taken down rather than asking what would move its score is usually telling me the score was accurate.

## Treat it as a roadmap

[Kong](https://apis.io/providers/kong/) is the best example I have. In June I wrote [Kong Konnect Has Two Front Doors and Neither One Is the One I Want](https://apievangelist.com/2026/06/30/kong-konnect-has-two-front-doors/): a platform admin API behind a personal access token, a Dev Portal that hands out credentials, and no single door an agent could walk up to. Kong's engineers engaged, corrected me where I was wrong, and took the rest as roadmap items. Last week they shipped per-portal MCP servers, which I covered in [Kong Answered The Two Front Doors Post With A Door For Agents](https://apievangelist.com/2026/09/24/kong-answered-the-two-front-doors-post-with-a-door-for-agents/). That is the whole loop, in public: a critique, a conversation, a product release.

This bucket is the hardest to count, because a roadmap item leaves no trace in my catalog until it ships. When it does, it shows up as a score moving for a reason I did not cause.

## Fix it yourself

The fourth reaction is my favorite, and the easiest to count. Every provider in the catalog has its own public repository under the API Evangelist GitHub organization, and anyone can open a pull request against it. [Nylas](https://apis.io/providers/nylas/) did exactly that. Their developer documentation team opened [a pull request to their own repo](https://github.com/api-evangelist/nylas/pull/1) unprompted, with fourteen files and every claim checkable against a live URL. They did not ask me to change their score. They changed the evidence the score reads, and let the score follow.

They are not alone. Since August 1st, **17 providers have opened 22 pull requests** against their own repos. They declared MCP servers, self-hosted their `apis.yml`, published changelogs and status pages, and corrected their own profiles. AppStoreSpy sent five in a single day. Separately, when I answer a provider by email about their listing, I mirror the reply onto their repo as a `provenance` issue, so the conversation is public too; there are twelve of those so far.

## The counter-case: when the catalog is wrong

The taxonomy assumes the score is right. Sometimes it is not, and this week gave me a clean example. Checkout.com published a good explainer on account-to-account payments, and when I went to write about it for apis.io, I found that the catalog was [scoring the wrong contract](https://apis.io/2026/09/28/checkout-com-explains-a2a-payments-and-the-catalog-scored-the-wrong-contract/). We had scored Checkout.com on thirteen stub paths from a small, thin original, while their portal serves a 227-operation OpenAPI. I filed that as [roadmap #805](https://github.com/api-evangelist/roadmap/issues/805).

If Checkout.com had pushed back on its score, it would have been right to. That is the reaction I left off the list, and it deserves its place: **correct the catalog.** It is not a takedown, and it is not a roadmap. It is a provider telling me my evidence is wrong, and it is the reaction the rest of the system depends on. The Kin Score is only worth anything if I treat that pushback as seriously as I expect providers to treat the score.

## What I want

Silence is fine. Takedowns are your right. But the two reactions that move the whole market are the roadmap and the pull request: a company that ships the thing the score says is missing, or a company that shows me the thing already exists and I missed it. Both are in the open, both are auditable, and both make the next provider's score more honest. If your score is wrong, send the pull request. If it is right, ship the fix. Either way, the conversation belongs in public.
