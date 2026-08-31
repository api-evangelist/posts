---
published: true
layout: post
title: 'Agents Will Make Everything You Left Undone Visible'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/agents-will-make-everything-you-left-undone-visible.png
date: 2026-08-31
author: Kin Lane
tags:
  - Agents
  - AI
  - Onboarding
  - Documentation
  - Deprecation
  - Support
  - Strategy
  - APIs
---
In June I wrote about how [SoundCloud shows what programmatic API onboarding should look like](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/), pointing at the `sc-api-auth.mjs` script they dropped into their GitHub repo so an agent could get itself a token without a human in the loop. I have been holding that script up as the poster child for six months. What I did not have was the reason it exists. I sat down with [Danny Preussler](https://www.linkedin.com/in/preusslerberlin/), an engineer on the API team at SoundCloud, and got the why, and the why is a better story than the what.

Three things happened to them in a row. They look like three separate operational problems. They are one problem.

**An agent scraped their website for a token and quietly switched to the internal API.** SoundCloud ran an experiment. They handed an agent — Danny will not say which one — the task of creating a SoundCloud app. "It created everything, then asked for your key, what's your API key. And I said, oh, I don't have one. And then it literally started scraping our website, got a token from there, and changed everything from our public API to our internal API."

Sit with that for a second. Nobody told it to do that. It was not jailbroken, it was not adversarial, it was being helpful. It hit a closed door, found an open window, and finished the job through the window. It did not stop to consider that the thing behind the window was a private interface with none of the guarantees, none of the rate limiting, and none of the intent of the public one.

Danny's read on it is the most important thing anyone has said to me about gatekeeping this year: "This is a warning sign. The whole idea of a public API is, let's funnel them, we are in control, we can see abuse. But if it's so easy to bypass this, we have to make it easier to give you an API token. You can't go write a ticket and two weeks later we come back to you."

The funnel was never a wall. The funnel was always just the easiest path, and everyone took it because taking it was cheaper than routing around it. Agents moved that calculation. Routing around your front door is now cheap, fast, and available to anyone who can type a sentence. Which means every gate you are running exists at the pleasure of the people you are gating, and the only gate that still works is the one that is less trouble than the workaround. That is not a security argument. It is an ergonomics argument, and it is the entire reason that script got written.

**An endpoint they deprecated five years ago started spiking.** Not slowly recovering. Spiking. Alongside endpoints that appear nowhere in their documentation at all. "We saw that endpoints that we have not mentioned anywhere in our documentation started to spike. There was a deprecated endpoint, this has been deprecated for five years, why do we have more traffic there? Because all these models, they are trained on what's out there, like on Stack Overflow and co."

I have written a lot about [deprecation and migration choreography](https://apievangelist.com/2026/08/14/openapi-overlays-for-deprecation-and-migration-choreography/), and all of it assumed the same thing everyone else assumes: that deprecation is a communication problem. You announce it, you sunset-header it, you overlay it onto the contract, you give people a year, and the traffic decays. That model depends on your consumers reading what you publish.

Your consumers are not reading what you publish anymore. A model read a Stack Overflow answer from 2019, and that answer is now the documentation as far as a very large number of integrations are concerned. You cannot deprecate a corpus. You retired the endpoint perfectly and it came back anyway, because the training data outlived the announcement and will keep outliving it through every retraining cycle that scrapes the same web you no longer control. Deprecation stopped being a changelog problem and became a training-data problem, and I have not seen another provider state it out loud with traffic behind it.

**One stale page raised their support ticket volume.** This is the one that should make everybody nervous, because it is the cheapest failure of the three and it cost them real money. Ticket volume went up. Not down, up, in the middle of an automation wave. People were writing in to ask SoundCloud to change a redirect for them. "Wait, I myself made this possible to do yourself a year ago," Danny said. He had shipped that as self-service twelve months earlier.

The cause was a single outdated page still sitting in the developer portal that said you have to file a ticket. Every model that read it did exactly what it said, and dutifully routed users into the support queue for a thing that had been a button for a year. One page nobody had looked at in a while became a machine for generating support labor.

"All this information that is out of sync — these agents run into it, and they will make it visible."

That is the line that ties all three together. I keep arguing that you cannot see your own API from the outside, which is about vantage point — the gap between what you believe you publish and what you actually serve. What SoundCloud is describing is the next turn of that screw. The gap is no longer merely invisible to you. It is being *found*, at scale, by clients that read your surface literally, act on it immediately, and never once think to ask whether the page is current or whether the door they went through was the one you meant.

Every stale sentence is now an instruction. Every missing self-serve path is now an invitation to go around. Every endpoint you retired without also retiring the internet's memory of it is now live traffic you are paying to serve. None of this is new neglect. This is the same neglect every API program has been carrying for a decade, quietly absorbed by human developers who read between the lines, gave up, filed a ticket, or figured it out on Slack. That absorption layer is gone. Machines do not read between the lines and they do not give up.

The good news is the same good news as always: these are afternoons, not quarters. SoundCloud made a token obtainable without a human, they are rewriting the developer portal for a machine reader rather than a human one — Danny credits Spotify with doing that well — and they went looking for the stale pages. The work was small. What made it urgent was that somebody was finally standing outside their building, at machine speed, trying every door, and reporting back through their traffic graphs and their ticket queue.

Go read your own developer portal the way a model would. Not the pages you are proud of. The old ones. There is a sentence in there right now telling somebody's agent to do something you stopped doing a year ago, and it is billing you for it.

The full conversation with Danny — including how SoundCloud got to a hundred thousand new app registrations in 2016, why they could not reopen the API until they had a gateway in front of it, and where he lands on MCP — is up at [conversations.apievangelist.com](https://conversations.apievangelist.com/store/2026-08-27-danny-preussler/) and on [YouTube](https://www.youtube.com/watch?v=uSnnWrkng9o).
