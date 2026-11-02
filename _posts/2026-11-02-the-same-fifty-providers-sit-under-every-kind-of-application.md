---
published: true
layout: post
title: 'The Same Fifty Providers Sit Under Every Kind Of Application'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-same-fifty-providers-sit-under-every-kind-of-application.png
date: 2026-11-02
author: Kin Lane
tags:
  - Applications
  - APIs.io
  - Integrations
  - Kin Score
  - Agent Readiness
  - MCP
---
A while back I [wrote about a self-hosted fitness app](https://apievangelist.com/2026/08/27/the-self-hosted-seed-is-the-next-business-model/) and the providers it plugs into. Looking at applications that way was useful enough that I kept going, and we now have blueprints for 90 kinds of application on [APIs.io](https://apis.io/applications/), from accounting and dating to farm management and connected cars. Each blueprint lists the providers the leading apps in that category ship in their code or declare as an integration.

Once you line up all 90, the most interesting page isn't any one category. It's [the shared layer](https://apis.io/applications/shared-layer/), the list of providers that keep turning up no matter what the application does.

## Who is in the layer

Firebase and Sentry are at the top, each appearing in 67 of the 90 categories. Then it goes like this:

| Provider | Categories | Apps | Kin Score | Agent readiness |
|---|---|---|---|---|
| Firebase | 67 | 168 | 50.3 | 14.2 |
| Sentry | 67 | 133 | 80.6 | 50.2 |
| Stripe | 57 | 117 | 82.7 | 58.5 |
| Facebook | 52 | 111 | 42.7 | 28.2 |
| Amazon S3 | 47 | 96 | 70.8 | 23.3 |
| Slack | 46 | 98 | 73.2 | 38.7 |
| OpenAI | 44 | 87 | 83.0 | 58.4 |
| Apple | 44 | 71 | 55.2 | 31.9 |

None of this is exotic. An application needs people to sign in, a way to find out when it breaks, a way to get paid, somewhere to put files and a way to tell someone about it. You could have guessed most of the names. What I couldn't have told you before is how far they reach. A dating app and an accounting app have very little in common as products, and a surprising amount in common underneath.

That's the idea I keep coming back to. The application itself is getting easier to produce, so more of what makes one work is its integrations. If you're building something new, this list is a reasonable first draft of what you'll end up depending on, before you've written your first feature.

## Reach and quality aren't the same thing

Being everywhere doesn't track with being easy for an agent to use. Firebase and Sentry have the same reach, and Sentry's agent readiness is 50.2 to Firebase's 14.2. Amazon S3 scores 70.8 overall and 23.3 for agents. Only four rows in the top 50 reach agent-native, and Stripe, OpenAI and Twilio are the three I'd stand behind (I'll get to the fourth).

Four of the 50 sit in the thin band: Branch at 32.0, QuickBooks Online at 34.2, Google sign-in at 36.8 and Telegram at 38.0. Eighteen of the 50 have no verified MCP server on record, including Facebook, Apple, Segment, Zendesk and SendGrid. That doesn't mean none exists. It means we haven't verified one, and I'd rather undercount than credit a server nobody can connect to.

This is where a shared layer matters if you're a provider. An application team usually isn't choosing you on your score. You're in the stack because you were already the default. When those teams start wiring agents into their applications, the gap between being present and being usable by an agent is theirs to work around.

## Google is a layer of its own

Count the rows and Google is 13 of the 50: Firebase, sign-in, Analytics, Cloud Storage, Gemini, Tag Manager, Calendar, Gmail, AdMob, Maps, the API client, Drive and YouTube. Their scores run from 36.8 for sign-in to 72.1 for Analytics. Depending on Google isn't one decision about one vendor, and it doesn't come with one developer experience. It's the same thing I saw when I looked at [estates](https://apis.io/estates/): the company name hides the range.

## What to keep in mind

The counts are categories and reference apps, not traffic. Each category is built from a handful of leading apps, so this shows what those apps integrate with, not how much anyone uses it or how many applications exist in the wild. Only observed and declared integrations count, and inferred candidates never do, so a provider can be used and simply not show up here.

The data is also still rough in places. Row 32 reads "goth twitter", which looks to me like a Go authentication library's name leaking into a label for what is really an integration with X, and it's the fourth agent-native row I mentioned. Some of the "used for" labels look odd too, like Login with Amazon under Books and E-Books. I'd read the category counts with more confidence than the labels, and we'll keep cleaning those up.

## What you can do with it

- **Starting an application:** use the layer as a checklist, then look at the category closest to yours to see what's specific to it.
- **Choosing between defaults:** check the Kin Score and agent readiness side by side before a default becomes a dependency.
- **Wiring in agents:** look at the agent readiness of what you already depend on. That's your real starting point.
- **Running one of these providers:** you're carrying a lot of other people's applications. Your [score](https://apis.io/rating/) shows what those teams and their agents have to work with.

The full list of 50 is on [the shared layer page](https://apis.io/applications/shared-layer/), and each of the 90 categories has its own [blueprint](https://apis.io/applications/). If your application is built on something different, or we've got an integration wrong, let me know.
