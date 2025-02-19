---
layout: post
title: >-
  Breaking Down Publication References With The Global Change Information System
  API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Global-Change-Information-System-GCIS-home.png
author:
  name: kinlane
tags:
  - Change
  - Public
  - Reference
  - Global
  - References
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Global-Change-Information-System-GCIS-home.png)](http://data.globalchange.gov/)

[I wrote about the Global Change Information System (GCIS) API earlier this year, and how they what they are doing with their API design represent how APIs are the next step in the evolution of the web](http://apievangelist.com/2015/02/04/what-do-i-mean-when-i-say-apis-are-just-the-next-step-in-the-evolution-of-the-web/). If you have the time, go look at what they have done, it is mind-blowing. I am on their email newsletter, and have had their latest update in my inbox for a few days, with some thoughts attached to it I wanted to blog about, before I archived the email.

I love that they provide updates like this via email, but ultimately this story is about how they are iterating on their API design, making it much more useful, and powerful along the way—with some elements I’d like to see spread across other content and document based APIs. Maybe I should backup, and clarify what GCIS does. The platform _“use identifiers and semantic information to provide points of reference and traceability”_ across the research from 13 US federal agencies, that researchers, citizen scientists, application developers or information theorists can put to work for them.

With their latest release, GCIS provide a very approach to the relationship between publications and its references, enabling some interesting ways of getting at the information contained within publications. First, with any publication you can append /reference to any publication in the API, and receive a list of any references for the publication. For me, where things start getting cool, is that you can then also apply the same to a specific chapter in the publication, or even down to a particular figure.

This is something I’m trying to establish in a coherent way in my own systems. I’m looking to apply this line of thinking beyond just references, and also make it work for specific companies, tooling, and what I consider to be common building blocks for each area of the API space I track on. Keeping an eye on projects like GCIS make my research such a valuable are of my operations, allowing me to learn from the companies, organizations, and government agencies that I monitor, and apply best practices across them to my own projects.

In my opinion there are two parts to this story: 1) The API design lessons around what GCIS team is doing by providing publication level references via their API (in JSON and YAML), while also breaking it down to chapter and figure levels, and 2) the fact that they communicate the story to their community via the email newsletter--personally I’d also like to see more blogging, and tweeting about it as well, but I’m happy just to get what I get.

The more I learn from the API space, the more I realize how much my own API design abilities need to improve.