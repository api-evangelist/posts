---
layout: post
title: >-
  API Rate Limits Are Making Me Think More About How I Design My APIs, and How I
  Consume Them
url: >-
  http://apievangelist.com/2015/08/03/api-rate-limits-are-making-me-think-more-about-how-i-design-my-apis-and-how-i-consume-them/
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-rate-limit-api.png
author:
  name: kinlane
tags:
  - My
  - Design
  - Rate Limits
  - APIs
---
[As I migrate the version 1.0 of my internal systems to an API-first version 2.0](https://kin-lane.github.io/master/), one of the challenges I face is the optimization of some of the features in my own system. I have numerous systems I crafted to solve a specific need, at a specific point in time, with very little consideration about the most efficient design. 

About 50% of my version 1.0 systems employed APIs, many systems relied on directly connecting to my MySQL databases. One example of this is my main news curation screen on my dashboard. This was the replacement for Google Reader about 6 months before they killed it off. My reader system is very chatty, every action I take against a single post (archive, curate, tag, etc.) initiates a round-trip to the database--something when you translate to API calls, becomes a very huge blip on my API analytics. 

I treat all my internal apps, just like I would one of my API consumers, and make them sign up for key, and exist within my API service tiers. There are numerous reasons for this, but in the end, it helps me see things through an external lens. When I got my report on my usage, I noticed my curated API usage was through the roof. This is good right? No! It means I have super chatty features in my application, something I need to refactor. 

My curation may involve 1000 to 3000 news articles which needs to be curated or archived, resulting in potentially 3000 API calls, and when you add on applying tags, and managing other details, I can be in the 5,000 to 10,000 range pretty quick. Its obvious I need a better approach, so I'm developing a new queue based system that lets me work with 25 news stories at once, and submit the changes as a single bulk API call--significantly reducing the number of calls I make.

In the end, my API rate limits are forcing me to think through my app design, and how I make API calls. It also is helping me rethink how I design my APIs. I want each API call to be as efficient as it can from app to server. To quote my friend Tyler Singletary ([@harmophone](https://twitter.com/harmophone)), "rate limits on APIs pushes developers to be more creative". Something I agree with 100%, if it truly is a transparent conversation between API provider and consumer--which in my private, schizophrenic ecosystem is pretty easy to achieve.