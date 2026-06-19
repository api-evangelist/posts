---
published: true
layout: post
title: SoundCloud Shows What Programmatic API Onboarding Should Look Like
date: 2026-06-19
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - OpenAPI
  - GitHub
  - Agents
  - AI
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/uncle-sam-working-waterfront-2.jpg
---
I keep coming back to the problem of scaling the onboarding, the setting up of applications, and the obtaining of API keys across many different APIs. The differences in how every API provider handles this keep leaving me hitting a brick wall. When you combine those differences with the anti-bot tactics so many API providers take, and pair that with their contradictory "all-in" stance on this agentic AI moment, I end up stepping away weekly from banging my head against this wall. It is just too big of a problem for me to solve. I can't hack a solution, so I always come back to the most effective tool in my toolbox—stories.

I came across a [post](https://developers.soundcloud.com/blog/api-credentials-cli-openapi-github) from [Danny Preussler](https://www.linkedin.com/in/preusslerberlin/) of SoundCloud on obtaining API credentials using the terminal, and then using the SoundCloud OpenAPI on GitHub to automate onboarding with their API. It doesn't start from ground zero—you still have to have an existing SoundCloud account—but it achieves what I envision for setting up an application and obtaining your API token. They added an `sc-api-auth.mjs` script to their SoundCloud API GitHub repo.

"It opens a browser for OAuth (think aws sso login), registers your app, and prints your Client ID and the credential JSON to stdout. One file, Node.js 18+, no npm install."

"Same rules as the website: Artist Pro, app metadata, API Terms of Use. Already have an app? It returns what you have instead of creating a second one."

It is simple and effective. It is a pattern I will be showcasing and pointing other API providers toward. While this is a problem I'd love to solve with a product or a service, I really believe this is something that API providers should solve. If they are truly embracing this agentic AI moment like they say they are, then you should be able to onboard with their API in a programmatic way—and not with the myriad of ways currently making up the status quo.

Ideally, obtaining an account with each API provider would be automated as well, along with setting up an application and obtaining keys, but I will take what I can get. I am looking for more examples of API providers getting ahead of the curve when it comes to automation. I will keep calling out the contradiction of companies simultaneously saying how they are all in on AI, while also requiring you to prove you are human when onboarding, and while making you jump through all kinds of hoops to set up an application, obtain API keys, and establish scopes for their APIs.
