---
published: true
layout: post
title: 'Identity Beat Rate Limiting'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/identity-beat-rate-limiting.png
date: 2026-11-25 18:00:00 +0000
author: Kin Lane
tags:
  - Identity
  - Rate Limiting
  - API Management
  - Abuse
  - SoundCloud
---
Back in August I talked with Danny Preussler at SoundCloud about why they reopened their public API and how they did it. I already wrote about the biggest stories from that hour in [Agents Will Make Everything You Left Undone Visible](https://apievangelist.com/2026/08/31/agents-will-make-everything-you-left-undone-visible/), which covered agents scraping their way to a token, deprecated endpoints coming back from the dead, and stale docs generating support tickets. This post is about a smaller moment, about fifteen minutes in, that I think deserves its own space, because it is about what actually stops abuse.

## The Scrapers Noticed First

SoundCloud's API went quiet for a while. Danny explained that the pause got longer than planned for a few reasons: major label content that needed to be much more protected, and the fact that when you looked at the most famous apps out there, "it was scrapers and downloaders."

When they started a soft reopening, the scrapers noticed. In Danny's words, they "registered a lot of apps even when there was like some delay." The delay was supposed to be friction. It was not enough friction. People who want to scrape a music platform at scale are patient, and they will happily wait in a queue.

## What Actually Worked

So what helped? Not a tighter rate limit. Not a lower quota. Danny said: "for now we put it behind a subscription. A subscription, we kind of know who you are, which helped a lot."

That is the whole lesson in one sentence. It is still an open API, as he put it: "you just need to have a subscription with us." And he pointed out that Spotify gates the same way.

## Why Rate Limits Are Not An Identity Strategy

I have spent a lot of years watching providers reach for rate limiting as their primary abuse control. Rate limits are good and necessary. SoundCloud put [Tyk](https://apievangelist.com/2026/07/14/tyk-and-programmatic-api-onboarding/) in front of the API before reopening precisely so they could measure which endpoints and which apps were being used, and handle authentication and rate limiting. Danny called that control "a big thing."

But a rate limit is a ceiling on an anonymous key. If registering a new app is cheap, then a rate limit just tells a scraper how many apps to register. Every key gets its slice, and the abuser multiplies the slices. The limit protects your infrastructure from one runaway client. It does not tell you who is on the other end, and it does nothing about someone who is willing to be a hundred clients.

A subscription changes the economics. It ties the key to a person or a business with a payment relationship and an account you can reach. Now registering a hundred apps is not free, and when one of them misbehaves, you know who to talk to. Identity is what makes the rest of your controls mean anything.

## The Tension With Openness

I want to be careful here, because I am also the person who keeps arguing that onboarding should be easier, not harder, especially now that agents are the ones signing up. The same conversation made that case: when an agent could not get a key, it scraped the website for a token. Make the front door too hard and people go around it.

I do not think these are in conflict. The goal is not friction. The goal is knowing who is calling. Programmatic onboarding, OAuth, verified accounts and subscriptions can all be fast and still produce an identity at the end. What fails is the middle ground: anonymous keys handed out with a waiting period, which slows down your honest developers and barely inconveniences the people you were worried about.

## What I Would Tell Providers

If you are opening or reopening an API that has something worth stealing, start with identity, then layer rate limits and quotas on top of it. Ask yourself whether you could email the owner of your noisiest key today. If the answer is no, a better rate limit is not going to fix it.

Measure first, the way SoundCloud did with a gateway, so you can see which apps are doing what. Then decide how much you need to know about each consumer, and make that the cost of entry. For a lot of APIs, a free account with a verified email is enough. For a music catalog with major label content, it was a subscription.

## The Takeaway

Rate limiting tells you how much someone can do. Identity tells you who they are. SoundCloud's experience is that the second one is what kept the scrapers in check, and that the API could stay open as long as they knew who was on the other end. Know who your consumers are first, and the rest of your controls start working.
