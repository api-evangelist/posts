---
layout: post
title: 'JCI &amp; Panoptix APIs: Write APIs Are Much Harder Than Read APIs'
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/panoptix/johnson-control-panoptix.png
author:
  name: kinlane
tags:
  - APIs
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/panoptix/johnson-control-panoptix.png)](https://whatspossible.johnsoncontrols.com/community/panoptix "building efficiency API")

When I [last talked with the Panoptix API team over at Johnson Controls (JCI)](http://apievangelist.com/2012/12/17/making-an-impact-on-environment-with-building-management-apis/), they were working hard on new features, including the possibility of writing data to the [building efficiency API(s)](https://whatspossible.johnsoncontrols.com/community/panoptix "building efficiency APIs").

A year later, I wanted to see where the team was at with their API efforts and was intrigued to learn that their work to make their API writable hadn’t gone exactly as they had planned.

On the surface it sounds like an easy task. You can pull data from an API, now using POST, PUT and DELETE you should be able to write data back into the system. Easier said than done, says John Bernd ([@jkbernd](https://twitter.com/jkbernd)) and Simone Vigano ([@viganosimone](https://twitter.com/viganosimone))  of the Panoptix API team.

First you have all the technical issues around data storage, indexing, accessibility and the usual problems you face with managing lots of data. Working with known data from their own systems and devices is one thing, but opening it up to wider audience takes some extra work.

Second you have to think about the legal issues. Who’s data is it? Do they have the right to publish it. What are the legal responsibility of JCI and Panoptix? Once you open up a system for publishing of data, you open yourself up to a whole new world of legal headaches.

Once you allow write capabilities for Panoptix API users, whats next? What features are needed. How much will all this cost to develop, manage and evolve? Opening up a lot of business questions.

I’m a big proponent of APIs being not just read, but also write. I rail on city, state and federal governments, stating this is one of the biggest problems with government APIs--the lack of writeable APis. However I understand it is not as easy as it seems, and agree with the Panoptix team, that it is something you have to think through all the pros and cons. Then take your time, build a proper strategy, and do it right.