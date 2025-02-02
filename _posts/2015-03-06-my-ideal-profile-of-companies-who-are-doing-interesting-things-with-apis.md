---
layout: post
title: My Ideal Profile Of Companies Who Are Doing Interesting Things With APIs
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-rolodex-card.png
author:
  name: kinlane
tags:
  - My
  - APIs
---
When I come across a new company, during the course of my monitoring and information gathering across the API space, I enter them into my company API. Once a company is in there, and I’ve deemed it worthy enough for a closer look, I profile their operations.

For my own organization, and in the spirit of transparency and collaboration, I wanted to breakdown what I mean by profiling. First I start with the basics:

*   **Name** - The official name for any company or project. APis aren’t always clearly defined corporate entities.
*   **Description** - A short, concise description of what a company does. You’d be surprised how hard this is.
*   **Logo** - A clean, simple, medium resolution logo for company. Again, you’d be surprised how hard this is.

Then I dive into the common URLs that I care about, that provide me with the best signals possible:

*   **Blog** - The heartbeat of any company, and API operations. In my opinion, the blog is one of the most important aspects of operations.
*   **Blog RSS** - A simple, machine readable blog stream — blown away by how many companies don’t have.
*   **Twitter** - An active, engaged Twitter account, providing me easy access via the Twitter API.
*   **Github** - A complete, active Github user or organization, where I can access code, and other aspects of API operations via Github API.
*   **Crunchbase** - A business profile of a company, with a focus on the investment, and runway for company, available via Crunchable API.
*   **Angelist** - Similar to Crunchbase a business profile of a company, with a focus on the investment, and runway for company, available via Angelist API.

Then I tackle the API, or APIs, and profile each API they have by gathering:

*   **Name** - A clean, portable name that describes the API, but keeps context of company or organization running it.
*   **Description** - A short, concise description of what an API does — this is another pain in the ass to find most of the time.
*   **BaseURL** - The base url for API calls. The process of finding this, will often determine for me, whether or not an API is worth monitoring.
*   **Swagger** - Doing the deep dive on an API, and generating a machine readable definition of at least the API surface area, and include underlying data model, and authentication when I can.

Then I sweep through the rest of the API program looking for:

*   **Management Building Blocks -** Run through my list of [common API management building blocks](http://management.apievangelist.com/building-blocks.html), and record if any are present.
*   **Authentication Building Blocks -** Track what type of authentication is available for the API, including supporting building blocks.
*   **Monetization Definition -** Profile how money is made around an API, even if their are indirect benefits when possible.

Once done, I have everything I need to establish a robust profile of an API provider, and add them to my monitoring. To assist me in my profiling, I then generate an [APIs.son](http://apisjson.org) for the company, providing a machine readable version of all the information I’ve gathered in my profiling. This doesn’t always happen all at once, the companies usually queue up, then I go through and do full profiles in controlled sprints.

As with all of my research, y[ou can find the resulting APIs.son files on Github](https://github.com/kinlane/api-stack/tree/gh-pages/data), and as my monitoring continues, I will aggregate more companies doing interesting things with APIs, and as I have the time I will generate full profiles for each one.

If there is a specific company you’d like profiled, please let me know.