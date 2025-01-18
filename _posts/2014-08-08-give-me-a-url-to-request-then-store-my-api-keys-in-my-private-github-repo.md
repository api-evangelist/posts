---
layout: post
title: Give Me A URL To Request Then Store My API Keys In My Private Github Repo
sourceurl: >-
  http://apievangelist.com/2014/08/08/give-me-a-url-to-request-then-store-my-api-keys-in-my-private-github-repo/
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github.jpg
author:
  name: kinlane
tags:
  - My
  - Github
  - Keys
  - Git
---
**Swagger is now Open API Definition Format (OADF) -- [**READ MORE**](http://apievangelist.com/2015/11/05/the-swagger-spec-is-reborn-as-open-api-definition-format-oadf-after-being-put-into-open-api-initiative-oai/)**

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github.jpg)

I went through [77 federal government API developer portals](http://apievangelist.com/2014/07/10/looking-at-77-federal-government-api-developer-portals-and-190-apis/) a couple of weeks ago, as part of some [API discovery](http://discovery.apievangelist.com) work I’m doing with [APIs.json](http://apisjson.org). I ended up [targeting 120 APIs](http://apievangelist.com/2014/07/10/low-hanging-fruit-for-api-discovery-in-the-federal-government/) that I will be generating of [Swagger](http://apievangelist.com/2015/11/05/the-swagger-spec-is-reborn-as-open-api-definition-format-oadf-after-being-put-into-open-api-initiative-oai/) definitions, and [API.json](http://apisjson.org) for their umbrella domain, or subdomain over the next couple months.

As I made my way through each of these developer areas, I began to realize that I would have to sign up for API keys at each of these developer areas. I’m sure some of the APIs will not require a key, but it is still potentially 77 separate API keys (I will let you know the final count when I know), that I will have to register for—the federal government needs a common, yet distributed API management strategy.

To augment this common, yet distribution API management strategy, I would like to be able to just use Github oAuth to ping an API provider, request my application keys, and using the Github API to then store them in a repository of my choosing. I store all of my API keys for my applications, in a central location that my apps can securely put to use, and in many cases these apps are already using a private Github repository as a centralized configuration location.

I shouldn't have to go through 77 separate API registration flows to get the API keys I need. I should be able to get API access in a programmatic way, using my existing Github account, and put Github oAuth to use in an authentication flow, getting the API keys I need in real time, in the location that I need them.

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-key.png)

This API access workflow would allow me to quickly gain access to resources I need for my apps, and store all my API keys in a single, or across multiple Github repositories—potentially giving me a simple, but powerful way to manage all of my API keys, via Github. 

Could someone please build this, so that government, and even the private sector APIs can install on their server, and provide me machine readable access to generate an API account, the API keys I need, and store them in one of my chosen Github repositories. I think it would make both API providers, and API consumers lives much easier. We could even develop some sort of trust layer in there based upon Github profiles, allowing API providers to assess new registrations, and provide didn’t levels of access, based upon their trust of a Github profile.

We are moving beyond the world where we use one or two APIs, we are now using 10 or 20 different APIs, or more, from multiple providers, and there needs to be a better solution for us to manage API key access. I really appreciate you building this, I just don't have the time ;-)

**Updated November 27, 2015:** Links were updated as part of switch from Swagger to OADF ([**READ MORE**](http://apievangelist.com/2015/11/05/the-swagger-spec-is-reborn-as-open-api-definition-format-oadf-after-being-put-into-open-api-initiative-oai/))