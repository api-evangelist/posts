---
layout: post
title: >-
  Using Machine Readable API Definitions To Solve A Persistent Question: Are
  There Any Write APIs In Federal Government?
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-question-mark.png
author:
  name: kinlane
tags:
  - Definitions
  - Federal Government
  - Government
  - Definition
  - APIs
---
[A topic I've written about before](http://apievangelist.com/2014/06/03/significance-of-the-we-the-people-api-being-first-modern-read--write-web-api-in-government/), and one that I answer regularly on forums, via email, and on Twitter is, “Are there any write APIs in the federal government?” It is a valid question, and as I said in my [strategy suggestions for the federal government,](http://govfresh.com/2014/01/next-us-government-api-strategy/) write APIs are a critical aspect of all of this moving forward in a healthy way.

Rebecca Williams ([@internetrebecca](https://twitter.com/internetrebecca)) pointed me to a [recent discussion on this topic](https://opendata.stackexchange.com/questions/4466/are-there-good-examples-of-open-read-write-apis-in-federal-government) earlier today, to which I added a couple of suggestions, but ultimately it is something I would like to see a more progressive solution emerge, something that can answer it real-time, and change as the API inventory in the federal government changes and evolves. Keeping a list, [like 18F is doing](http://18f.github.io/API-All-the-X/pages/write_apis-notes), is a start, but we need more.

One of the side projects that I work on a couple of hours each week, is the profiling of federal government APIs using APIs.json, and Swagger, for use in my [federal API stack](http://federal-government.apievangelist.com/stack.html). I only have a handful of the [120+ APIs that I’m profiling](http://apievangelist.com/2014/07/10/low-hanging-fruit-for-api-discovery-in-the-federal-government/) completed, but once done, you will be able to search for APIs based upon whether or not an API uses the verbs GET, POST, PUT, and DELETE—giving you a much more detailed picture of how government APIs function.

Generating machine readable API definitions in Swagger and API Blueprint are time consuming, but once you tie it together using a discovery format like [APIs.json](http://apisjson.org), it opens up a lot more opportunity to answer questions about government APIs. I’m doing a lot of the heavy lifting currently, to establish a critical mass of API definitions in federal government, then I am hoping that each agency will take ownership over maintaining their own definitions--if not, I think it can just as easily be done from the outside-in, by the community.

I’m excited for the potential, when all of the meta-layer of APIs and open data in government is rich, well defined, and machine readable by default. The continuing data.json work out of the government, and our own APIs.json format is looking to help with this over time. There is a lot of work ahead, as well as education to occur, before the meta data layer for government APIs is machine readable by default, but once it is, we’ll be able to answer questions like this in a much more efficient way.