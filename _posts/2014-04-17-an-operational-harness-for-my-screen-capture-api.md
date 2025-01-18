---
layout: post
title: An Operational Harness For My Screen Capture API
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-harness.png
author:
  name: kinlane
tags:
  - My
  - Screen Capture
---
I am evolving my own approach to deploying my API resources, and I needed an important sounding name for it, so came up with “operational harness” over a couple pints of IPAs. Ok, so what do I mean when I say operational harness?

Based upon the way that I evolve my stories, I evolve my API projects in real-time with the help of Github. For my screen capture API I will be focusing on delivering four separate architectural pieces:

*   **Open Source Version -** An open source, server implementation of my screen capture API, which will PHP initially with other languages next.
*   **API Service -** A publicly accessible, cloud version of the screen capture API, allowing users to a certain amount of calls in a specific time frame before they are charged a per call rate, depending on their service their.
*   **API Containers -** OpenShift and AWS CloudFormation version of the screen capture API for rapid deployment in cloud environment.
*   **Wholesale Service -** A wholesale version of the screen capture that a partner can pay me to deploy and / or manage in mine or theirs cloud environment.

I call this my operational harness because I will be operating live instances of these components, scaling as I need in the cloud, but will also be maintaining the open source version, and container versions on Github, while also supporting wholesale deployment.  My definition will act as a sort of harness holding together all the architectural pieces of the screenshot API, but also in sync with other utility APIs I will be deploying--helping guide me as I push it all forward.

I’m enjoying putting together my strategy around my own API platform. It gives me some good material to work through for stories here on the blog, and helps me push forward with new approaches to API deployment, like [deploying and scaling in virtual containers](http://apievangelist.com/2014/04/07/containers-will-do-for-apis-what-apis-do-for-companies/), and [providing wholesale access to resources](http://apievangelist.com/2014/01/30/what-will-it-take-to-sell-my-api-as-a-wholesale-resource/).