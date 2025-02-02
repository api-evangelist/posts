---
layout: post
title: 'Temp API Keys: Leave Them Laying Around The Web Where Devs Will Find Them'
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-key-skeleton.png
author:
  name: kinlane
tags:
  - Web
  - Keys
---
I was reading [Are You Or Your Customers Leaking Your API Keys?](http://www.bizcoder.com/are-you-or-your-customers-leaking-your-api-keys) from Daryl Miller ([@darrel\_miller](https://twitter.com/darrel_miller)) the other day, which spurred me to float up a story in my Evernote, from a couple months back. My thoughts are only related to Daryll’s because it is about API keys, and their accessibility—the similarities stop there. Daryl is talking about a very different layer of key management, which we should all be thinking deeply about.

API key management is an API provider issue, as much as it is an API consumer issue. As an API provider I need to have an easy way to manage all the keys I provide to developers. As an API consumer, I need to have an easy to manage all the API keys I get across the API providers that I depend on. In short, key management isn’t easy, and there are no clear solutions that serve both ends of the key management coin.

As an API provider, I use [3Scale API Infrastructure to manage my API keys](http://bit.ly/13esk6Q). Using my API portal, developers can sign up for their own accounts, manage their apps, and the keys that are issued. 3Scale does all the heavy lifting for me, all I have to do is manage my API service composition, and keep an eye on dev usage, as well as keep an eye on my own app usage. I use all my own APIs for my apps too! Sometimes my apps are the bad actors, it not always the developers who abuse API access. 

As an API consumer, I’m working hard to pull my API key world together, using a [home brew format I’m calling simple api-keys](http://api-keys.apievangelist.com/). I’m am using Github for all of my API and microservice related projects, so I’m beginning to centralize how I store keys, and how I manage them across all my apps. With a central storage, and management process, I’m hoping to get a better handle on which APIs I use, and introduce more regular cycles of key management, where I refresh API keys on a strict schedule.

With the work I’m doing on the API consumption front, and reading Daryll’s post got me thinking about keys. If our API management house is in order, and we can manage different groups of API keys, monitor their usage, and revoke them at will, why can’t we just have a pool of API keys that we can just leave laying around? I’ve seen many APIs provider default keys, embedded in URLs available in API documentation, allowing you to make sample calls, why can’t we apply this a little bit wider? It seems like we could have a rolling pool of API keys, that we leave laying around in code snippets, how-to guides, and stories, which allow instant access to APIs—which we monitor, and if we see abuse we can revoke, and refresh with new set--easily done if you use Github Gists for storytelling (snippet centralization).

I’m going through my entire API stack, and generating Postman Collections, and I’m considering generating some API keys that are designed for use in specific stories, 101 resources, and other public and private evangelism efforts. It is just a thought at this point, that I wanted to put out there for discussion. Seems to me, if we really want to reduce any friction in on-boarding, we could start using “some” API keys in conjunction with SEO, SMM, and other existing evangelism metrics and analysis tools that are in our toolbox.