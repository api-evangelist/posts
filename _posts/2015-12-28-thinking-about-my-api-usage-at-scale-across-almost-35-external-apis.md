---
layout: post
title: Thinking About My API Usage At Scale Across Almost 35 External APIs
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-scale-api.png
author:
  name: kinlane
tags:
  - My
  - Scale
  - APIs
  - Usage
---
[As I conclude the first phase of profiling the APIs that I depend on](http://stack.apievangelist.com/companies.html), I am thinking about my API usage at scale, and some new questions are arising, that I wasn't thinking about before. I find my API consumption, and API integration thinking historically has been on an individual API basis, which something that I hope to evolve upon in 2016.

Here are a handful of questions that have arose in my notebook, as I worked to profile these APIs:

*   Where do I login / register for a service?
*   What are the security definitions?
*   Where do I get support?
*   Where do I get updates?
*   How do I manage my keys / tokens?
*   What are the details of applications I have created?
*   What are my rate limits? Plan levels available to me? 
*   Where am I at with my rate limits? Overall consumption?
*   What am I spending across my API usage?
*   Do I have plan B for any of these? Even possible?
*   What SDKs do I depend on for integration?
*   What are my code, content, and data licensing concerns?
*   Am I adhering to branding requirements appropriately?
*   Can I increase my API usage? Are there new fetaures I am not using?

These are just a few of the questions that I wrote down, as I profiled the surface area of each of my APIs. [I'm just creating OADF, API Blueprint, and Postman Collections, that allow me understand each endpoint, and the parameters across this almost 35 APIs I use](http://stack.apievangelist.com/companies.html). The next phase of my work involves profiling the security and data definitions for these APIs--a process which I'm sure will surface even more questions.

I am not confident I will be able to answer all of these questions in the near future. Many API providers just do not make it easy for me, resulting in the addition of another manual process, which in a world of limited resources means it probably won't get done. Even with the added work, I still want to ask these questions, and spend time thinking about my API usage at scale, in preparation for a future where I am depending on not just 3-5, or 30-50 APIs, but 300-500 public APIs to get business done.