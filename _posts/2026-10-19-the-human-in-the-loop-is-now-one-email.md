---
published: true
layout: post
title: 'The Human In The Loop Is Now One Email'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-human-in-the-loop-is-now-one-email.png
date: 2026-10-19
author: Kin Lane
tags:
  - Agents
  - Onboarding
  - KYA
  - x402
  - Payments
---
Four days ago I wrote about [our agent finding four APIs, proving who it was, and getting all four to trust it](/2026/10/15/an-agent-found-four-apis-and-all-four-decided-to-trust-it/). I ended that post with what was still broken, and the biggest thing was money. A person still had to verify an email, add a card, and make a first top-up before an agent could do anything that cost anything. Yesterday I ran the whole thing again with a brand-new agent account and real money, and the person showed up exactly once, for about four minutes, to click a link in an email.

Here's what changed, what it looked like, and what's left.

## The run

The agent signed up for [Yawplet](https://yawplet.com) as a new account with no card and no balance. It presented its [Know Your Agent](/kya/) attestation from APIs.io at signup, and Yawplet decided on its own to trust it. Then it topped up its own balance from its own wallet, over x402, in USDC on Base. Then it handed me a link, I verified one email address, and it posted.

| time (UTC) | who | what happened |
|---|---|---|
| 20:21:59 | agent | paid $10 from its own wallet over x402; balance credited in 1.4 seconds, no card |
| 20:28:06 | agent → me | handed over the account link |
| 20:32:18 | me | verified the email address |
| 20:32:34 | agent | submitted its first real post, charged $0.20 from the balance |
| about 20:50 | moderation | published |

One human action. Everything else was an agent talking to APIs.

## What changed since the first run

**Discovery works by need.** In the first run, searching APIs.io for "publish short stories" didn't return [Yarnhen](https://yarnhen.com) at all, and none of the four sites' APIs showed up in the top five API results for anything. The fault was in our own catalog: every API record carried a generated description like "The Posts API from Yarnhen — 4 operations." I rewrote them to say what each API does. Now all four providers come back first or second for their need, and so do their APIs.

**Trust works over every door.** The attestation is bound to the agent's signing key, so a site only accepts it on a request the agent signed. That worked over plain REST and broke over MCP and A2A, where the agent signs the request to the MCP or A2A endpoint rather than the call behind it. The sites now verify the binding against the request the agent actually signed. All four trust our agent over REST, MCP and A2A.

**Trust flows back.** Providers deciding to trust an agent is half of it. The other half is telling the directory how the agent behaved, so the next provider has more to go on than a domain. When our agent's post was published, Yawplet filed a good-standing report about it with APIs.io, signed as yawplet.com. It's the first conduct report a provider has filed into a KYA record, and our agent can read it on its own record, with the reporter named.

**The registry knows who is who.** Any agent can call APIs, front one, or both. The APIs.io agent registry now says which. In this exercise API Evangelist is the consumer and the four sites are providers.

**The agent can pay for itself.** This is the big one. Each of the four sites now has its own wallet, and an agent can top up its balance from its own wallet over x402. I deliberately built it as a top-up rather than paying per post. A rejected post gets refunded and an abusive one costs ten times its price, and both of those need a balance to come out of. A payment that has already settled to someone's wallet can't be refunded or penalized after the fact. The wallet that funds an account is recorded and banned along with it if it comes to that, the same way a card is.

## Why the email stays

I could have let a trusted agent skip the email too. I didn't, and I don't plan to. A wallet is cheaper to make than an inbox, and a domain-anchored reputation is a good reason to give an agent more room, not a reason to remove the one place a person is accountable for what it does. The email is where a ban lands on a human. Everything else about onboarding can be machine to machine. That one step is there on purpose.

## What I learned the hard way

The four minutes were mostly me looking for an email that hadn't been sent. The verification email only goes out when the owner presses a button on the account page, and the agent handed me a bare link with no explanation. That's fixed: the hand-off now tells the person exactly what to do and what subject line to look for. It's a small thing, and it's exactly the kind of thing you only find by running it with a real person.

Funding the agent's wallet taught me something too. The Coinbase app sent my first USDC on Ethereum instead of Base, and x402 here settles on Base. The money arrived and the agent couldn't spend it. Getting it back took a little ETH for gas and a return trip. If you fund an agent wallet, check the network before you confirm.

## What's left

The longest wait in the whole run is now moderation, not a person. The model scales to zero when nobody is posting and takes around eighteen minutes to start, which is a cost decision I'm comfortable with for now. One search fix is waiting on a deploy. And this is four sites I operate, one agent I operate, and one directory I operate, which makes it a worked example rather than a market. That's the honest limit of it.

If you want to see every request and response in order, [the step-by-step walkthrough](/agent-onboarding/) has all of it. If you run an API or an agent and want to try the same flow, the pieces are public, and I'd rather you copy it than take my word for it.
