---
published: true
layout: post
title: Who Took My API Catalog Last Week, And How Much Of It
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/who-took-my-api-catalog-last-week-and-how-much-of-it.png
date: 2026-10-07
author: Kin Lane
tags:
  - Agents
  - AI
  - APIs
  - Data
  - Discovery
  - APIs.io
---
I spent most of yesterday doing what everyone does with bot traffic right now, which is asking whether any of it comes back. Am I cited in the answer? Do I rank in the AI Overview? Did anybody click through? I built more instruments for that, and at the end of the day I realized I was still asking an SEO question. If a company pulls my data into its systems, I have influenced what those systems know, whether or not they ever say my name. The citation is a courtesy. The copy is the fact.

So I threw the attribution question out and asked a simpler one. For one full week, Monday September 29th through Sunday October 5th, who took the [APIs.io](https://apis.io) catalog, how much of it did each of them get, and did they take it directly or second-hand? APIs.io served **9,969,052 requests and 321.5 GB** that week. The catalog it serves holds **29,170 API providers**. Here is who left with them.

| Operator | What they are | Requests | Providers touched | Share of the catalog |
|---|---|--:|--:|--:|
| *(unnamed — presents as Lightpanda)* | headless scraper | 726,689 | 27,299 | **93.6%** |
| Meta | model builder | 746,473 | 26,392 | **90.5%** |
| Exa | AI search API | 422,159 | 24,773 | **84.9%** |
| Anthropic | model builder | 474,754 | 24,379 | **83.6%** |
| Reflection AI | model builder | 266,546 | 21,004 | 72.0% |
| Microsoft (Bing) | search + model | 230,872 | 20,250 | 69.4% |
| Perplexity | answer engine | 111,724 | 19,682 | 67.5% |
| Ahrefs | SEO data reseller | 228,077 | 18,699 | 64.1% |
| Baidu | search + model | 211,217 | 17,548 | 60.2% |
| Amazon | model builder | 120,032 | 17,409 | 59.7% |
| OpenAI | model builder | 245,113 | 17,007 | 58.3% |
| Parallel | AI search API | 134,113 | 15,038 | 51.6% |
| DataForSEO | SEO data reseller | 197,152 | 14,186 | 48.6% |
| Google | search + model | 270,390 | 13,684 | 46.9% |
| Semrush | SEO data reseller | 78,079 | 12,481 | 42.8% |
| Moz | SEO data reseller | 45,034 | 5,894 | 20.2% |
| Majestic | SEO data reseller | 27,628 | 5,582 | 19.1% |
| You.com | answer engine | 230,314 | 5,113 | 17.5% |
| Apple | model builder | 33,707 | 3,469 | 11.9% |

"Touched" means the operator successfully fetched at least one URL that names that provider — its profile page, one of its APIs, a schema, an example, its rate limits, its plans, or the same thing through the API. An operator is every agent a company declares, so OpenAI is GPTBot, OAI-SearchBot, ChatGPT-User and the Codex coding agent together, and Anthropic is ClaudeBot, Claude-User, Claude-SearchBot and Claude Code. Counted that way, **29,121 of the 29,170 providers left the building in a single week.** Forty-nine providers were not touched by anybody I can name.

## The Most Complete Copy Went To Someone Who Won't Say Who They Are

The top of that table is the part I keep coming back to. The most complete copy of my catalog last week did not go to a model lab. It went to a client that identifies itself only as `Lightpanda/1.0` — an open-source headless browser built for AI agents and scraping — and names no operator at all. It touched 93.6% of the catalog, and it did it from **497,387 different IP addresses**, almost all of them fetching a single page and never coming back. When I resolved a sample of those addresses on October 1st, 89% belonged to one proxy network registered in the Seychelles and the rest to Zenlayer. It barely existed on Monday and Tuesday (630 and 1,409 requests), then made 224,850 on Thursday and 246,171 on Friday.

That is someone harvesting the catalog through a rotating proxy pool, specifically so that no single address stands out. I have no idea who it is or what it is for. I am not going to guess, because a guess here would get repeated as a fact. What I can say is that the largest single copy of my work last week went to a party that made a deliberate effort not to be identified, and that nothing about how I measure "AI traffic" would have surfaced it if I had only counted the names I already knew.

## Meta Took Nine In Ten, And Sped Up While Doing It

Meta is the largest identified taker by requests, and the speed is what stands out. Meta-ExternalAgent made 13,998 requests on Monday, 15,789 on Tuesday, then 76,950, 111,362, and around 175,000 a day through the weekend — more than ten times its rate at the start of the week. By Sunday it had touched 90.5% of the catalog, including the profile page of 26,124 providers. Every one of those requests came from Meta's own network, so I am comfortable that it is Meta.

What it took matters as much as how much. Fifty-five percent of Meta's requests were structured artifacts — schemas, examples, collections, security definitions, plans, rate limits — rather than pages. Anthropic was similar at sixty percent. Anthropic's agents made 215,933 requests on Tuesday alone, almost all of it ClaudeBot, and then settled back down, the same burst-then-baseline pattern I wrote about [in August](https://apievangelist.com/2026/08/26/claudebot-read-my-entire-catalog-in-a-single-day/). Ahrefs was the most extreme: **88% of what Ahrefs pulled was structured artifacts.** The model builders and the data resellers are not reading my writing. They are taking the definitions underneath it.

## Each One Takes A Different Layer

The shape of the take differs enough by operator that it reads almost like a fingerprint:

- **OpenAI** pulled the plain markdown versions of my pages more than anyone — 16% of its requests went to the `.md` twins I publish alongside the HTML.
- **Amazon** took 31% of what it took through the APIs.io API rather than the pages, and **Google** took 25% that way. They found the JSON endpoints and are crawling them as content.
- **Perplexity and Exa** took mostly pages, 68% each — the human-readable layer an answer gets written from.
- **You.com** made 230,314 requests and 86% of them were stylesheets, scripts and images. It is rendering pages, not collecting them, which is why it touched only 17.5% of the catalog despite the volume.

The volume table and the coverage table do not agree, and the gap between them is the useful part. You.com and Google both made more requests than Perplexity and reached far less of the catalog. Requests measure effort. Coverage measures what actually left.

## Second-Hand Is Not Instead Of First-Hand

The routing question is the one I came in most curious about, because there is now a whole layer of companies whose business is crawling the web so that other people's agents do not have to. Exa and Parallel sell search to agents. Ahrefs, Semrush, DataForSEO, Moz and Majestic sell SEO data. Between them, those intermediaries touched 27,436 providers last week, and Exa alone went from 24,197 requests on Monday to 105,579 on Friday.

But they are not a separate route so much as a second copy. The model builders and answer engines reached 29,069 providers directly. Of everything the intermediaries took, only **51 providers** were reached through an intermediary and by no AI company directly. Nearly every provider in my catalog went out the front door to the AI companies *and* out the side door to the resellers, in the same week. The second-hand market is not where my data goes instead of the labs. It is where my data goes as well, so that every agent that does not run its own crawler can buy it from someone who does.

## Who They Say They Are

User agents are self-declared and anyone can type one, so I checked where each operator's traffic actually came from. The big names hold up. Meta's requests came 99.6% from Meta's network, Microsoft's 99.9% from Microsoft's, Apple's 99.2% from Apple's, Amazon's 99.8% from Amazon's. OpenAI's came 92.7% from Microsoft's network and Anthropic's 93.2% from Amazon's — rented infrastructure, which is normal for both. Two did not hold up. **91% of the traffic calling itself Yandex came from an unrelated hosting company**, and roughly 9% of what called itself Google came from hosting providers in South Africa and Canada. Those are impostors borrowing a name that websites tend to let through. And I want to be precise about the limits: a network tells me who owns the address, not who rented it, and I have not matched these addresses against each company's published crawler ranges. Read every name here as "a client presenting as."

## The Half I Cannot Name

Everything above describes the half of the traffic that tells me who it is. **50.9% of last week's requests — 5,069,663 of them — came from clients that declare nothing**, mostly presenting as ordinary browsers. From earlier work I know a lot of that is headless browsers in cloud and proxy networks — Tencent's cloud prominent among them — and that very little of it is people. The share where a human is actually waiting on the other end of an AI assistant was 0.6% of the week. The catalog is overwhelmingly being read by machines, and half of the machines will not tell me whose they are.

## Where That Leaves Me

Here is what I think I can say plainly. In one week, at least four parties — an unnamed scraper, Meta, Exa and Anthropic — each took more than 80% of my catalog, and the full set of operators I can name took effectively all of it. That is not a website being visited. That is a dataset being replicated, weekly, into other people's systems, and resold from there.

What I cannot say is what any of them do with it once they have it. The logs show me the copy leaving. They do not show me what it becomes — a training set, a search index, a feature in a product, a list somebody else sells. That is the honest boundary of this measurement, and I would rather state it than fill it in.

I am not going to block any of it. Openness has been the position here for sixteen years, and my `robots.txt` explicitly allows search, AI answers and training. But I have stopped thinking of this as traffic. It is distribution, and the distribution list is longer and stranger than I assumed — including a party at the very top that does not want to be on it by name.
