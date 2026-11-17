---
published: true
layout: post
title: 'Measuring Agents On Your Docs: Markdown Requests Are The New Signal'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/measuring-agents-on-your-docs-markdown-requests-are-the-new-signal.png
date: 2026-11-24 13:30:00 +0000
author: Kin Lane
tags:
  - Agents
  - Documentation
  - Analytics
  - Markdown
  - Discovery
---
API providers are starting to ask me the same question in different ways: how do we know agents are actually using our documentation, and what are they doing with it once they read it? It is a good question, and the honest answer is that we are only just starting to be able to see the first part of it.

## The first signal is the format being requested

The easiest new signal to capture is whether someone asked for the HTML version of a page or the markdown version. Humans come in through a browser and get HTML. Agents increasingly ask for markdown, follow an llms.txt, or request the `.md` twin of a docs page directly. If your docs platform serves both, you can count both, and that ratio is the first real number you have about agent consumption of your documentation.

It isn't perfect. Plenty of crawlers still pull the HTML, and some agents render pages like a browser would. But the markdown request is a deliberate act. Something asked for the version of your docs built to be read by a machine, and that tells you more than a user agent string ever did.

## My own sites tell the same story

I watch this on my own properties. Both of my websites went from roughly 80% human and 20% bot to 20% human and 80% bot over the last five years. That is a pretty radical shift. But many of those bots still rely on the human-readable pages and index them. So I am not turning anything off. I am publishing both, and watching which one gets asked for.

That is why I keep telling people it isn't about replacement, it is about balancing. Your docs should be available as an OpenAPI and as HTML, as markdown and as a page. The format request is how you learn how that balance is shifting for your audience, not an excuse to pick one.

## The second signal is the one nobody has yet

Counting markdown requests tells you an agent read your docs. It doesn't tell you what the agent did next. Did it recommend your API to the human who sent it? Did it pick one of your capabilities over a competitor's? Did the integration work on the first try? That is the part providers really want, because the first successful workflow is what should drive the next recommendation, and right now there is no clean way to connect a docs request to an outcome.

I am in the same boat. I have the [APIs.io](https://apis.io) analytics, and I run my own tests against Gemini, Claude and ChatGPT to see what they say about a provider when I ask them to get something done. I use Stripe as my test case a lot. I look at whether the agents come back with the business capabilities, whether they find the plain-language phrasing I've mapped onto the OpenAPI paths as overlays, whether they pick up the Arazzo workflows, the JSON-LD, the agent cards and the skills. Some days the results line up with what I published. Some days they don't. It is more art than science right now.

## What I would instrument today

If I were running a developer portal right now, this is what I would put in place:

- **Count HTML versus markdown requests per page.** Not just in aggregate. Which pages agents read tells you which capabilities they are trying to understand.
- **Publish a machine-readable twin of everything.** llms.txt, OpenAPI, examples, pricing, rate limits. You can't measure requests for things you don't serve.
- **Watch your well-known paths.** Requests to `/.well-known/` and your API catalog are agents looking for the front door. If they 404, you have learned something.
- **Tie keys to first calls.** The closest thing you have to an outcome is a new credential that makes a successful call shortly after a burst of markdown reads. It's a correlation, not proof, but it's a start.
- **Ask the agents yourself.** Run the same handful of prompts against the major models on a schedule and record what they recommend. It is crude, but it is the only way I know to see the recommendation side today.

## Analytics is moving from people to patterns

For fifteen years we measured developer portals by page views, signups and time to first call. Those still matter. But a growing share of the reading is being done by something on behalf of a person, and that something leaves a different trail. The markdown request is the first footprint we can reliably see. The recommendation and the workflow are the footprints we still need to learn to follow.

I'm going to keep publishing what I'm learning from my own sites and from the [APIs.io agent readiness](https://apis.io/rating/) work as I figure out more of it. If you are tracking this on your own docs, I'd love to compare notes, because none of us has this figured out yet.
