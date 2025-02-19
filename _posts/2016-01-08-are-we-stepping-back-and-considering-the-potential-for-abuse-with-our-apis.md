---
layout: post
title: Are We Stepping Back And Considering The Potential For Abuse With Our APIs?
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-evil.png
author:
  name: kinlane
tags:
  - APIs
---
I see a lot of APIs, and honestly I'm not excited about all of them. Some are public. Some are private. I am feeling that I could put the APIs I see into 3 different buckets: valuable, some value, and no value. Obviously there is going to be much more nuance to it that that, but this post is about the APIs that generate no value.

First, let me clarify--I am speaking value to everyone involved. This is my own personal measurement. Examples of APIs that offer no value, are usually about the exploitation of developers and/or end-users, while giving the lion share of value to the platform. I put a lot of Internet of Things APIs into this bucket, and other leading APIs from companies like Snapchat or LinkedIn. I'd also put APIs like facial recognition technology, some machine learning APIs, and APIs that may seemingly offer a lot of value to everyone involved, because of the opportunities for abuse, any value that has generated is cancelled out.

I' not going to point fingers at the specific API that triggered this post. I will just say that after reviewing an API, the opportunity for abuse is pretty huge, by the platform, as well as with 3rd party developers. It reminded me that I need to work to provide more [ethical best practices as part of my API design research](http://design.apievangelist.com/building-blocks.html), reminding API architects to step back early on in the process, and consider the big picture--asking themselves should we be doing building this API in the first place.

We have what it takes to do almost anything we want, but I don't think we ask ourselves: "should we be doing this" enough. We aren't look at the big picture, and considering privacy, security, surveillance, and what the overall potential for abuse might be. When I am considering the potential for API abuse, I ask myself "what would Keith Casey ([@CaseySoftware](https://twitter.com/CaseySoftware)) be able to do?" Keith is a wicked smart friend of mine, with a unique view on the world, which, well....gives him some unique super powers for causing trouble. As I'm reviewing existing APIs, or crafting my own, I just think about what kind of trouble could Keith get into if I gave him this API.

I poke fun at my friend, but this post comes from a serious place, and I know he'd agree. If you are an API architect, try to consider the wider potential for abuse using yout API resources. There are many wicked smart developers out there who aren't as stand-up as Keith, and could really cause some serious damage with the resources made available via your APIs. Make sure you have modern API infrastructure, and processes in place, that will give you visibility into how everyone is putting your resources to work, and that it is alignment with your business goals.