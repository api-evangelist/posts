---
published: true
layout: post
title: "Obtaining the Control Over Your LinkedIn Data That You Desire"
date: 2026-06-03
author: "Kin Lane"
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/server-cloud-server-racks-clouds-copper-circuit.jpg
category: "Blog"
tags:
 - LinkedIn
 - Personal Data
 - Data Ownership
 - Data Portability
 - Fiddler Everywhere
 - Claude
 - Agent Skills
 - APIs
 - Privacy
excerpt: "I have ranted several times about how tightly LinkedIn controls our personal user data. They refuse to give you access to your personal profile data via the LinkedIn API. I simply want access to MY data via the platform. I am not asking for much. I am not one to be deterred, and I usually will find a way to get what I want. I finally did, and you don't have to be a programmer to do this — but you have to be technically brave."
---

I have ranted several times about how tightly LinkedIn controls our personal user data. They refuse to give you access to your personal profile data via the LinkedIn API. You can access your company pages via the API, but everything is centered around your desire to run LinkedIn ads. I simply want access to MY data via the platform. I am not asking for much. I have tried every SaaS and Chrome extension out there that promises to do this for you, and have been unable to obtain access to my data daily in the manner that I wish. It is unacceptable.

I am not one to be deterred, and usually will find a way to get what I want. I finally did. You don't have to be a programmer to do this, but you have to be technically brave. Another caveat and assumption. I use the Claude VSCode extension to do this, which gives you more file-level access to many files—which transforms how you use Claude. I highly recommend it, even if you aren't a programmer. Like GitHub, you don't have to write code to use VSCode—it is just an editor. I don't have the time right now to work out all the details using Claude desktop, web, or via ChatGPT or Gemini—if you need that, let me know, maybe sweet talk or pay me, and I may be able to prioritize one of these solution paths. Let me know.

## Fiddler Everywhere

This journey begins with downloading [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere), a modern, cross-platform web debugging proxy and traffic analyzer available for Windows, macOS, and Linux. It captures, inspects, mocks, and modifies HTTP and HTTPS traffic between your machine and the internet.

Turn it on and capture all traffic. Again, you don't have to be a programmer, but you need to be technically unafraid, and it is a tool that will open up a whole new world for you if you do. It is a gateway drug to APIs, and you will see the digital world differently once you get acquainted with it.

## LinkedIn

Once you've downloaded and installed Fiddler Everywhere, open it up and you will immediately see traffic from across EVERY website you visit, and everything behind it flowing through Fiddler. Now visit LinkedIn. Spend some time browsing through all of the types of data you wish to capture. Here is a list of the LinkedIn entities I browse to get what I needed.

- **Posts** - Posts I submitted or shared. I try to stay off the home page.
- **Reactions** - Opening up the full list of reactions to each post.
- **Profiles** - Clicking open the profile pages of people I am interested in.
- **Messages** - Opening up messages, replying, and scrolling up and down.
- **Groups** - Opening up the groups I manage or am part of and scrolling down.

Fiddler will only record what you load, so scroll around, click and load what you want. Stay off the things you don't want. I recommend staying in your notifications, mentions, and groups, but you can open up the profile of people you want to "profile" and view their page and activity. I regularly use this to find out what people are interested in, by gathering what they have posted and what they have shared.

## Filtering

Once you are done exploring LinkedIn and are ready to process your activity for the day or any given moment, maybe after research, click on the filters button in Fiddler, and add a URL Contains filter for `https://www.linkedin.com`. It will list all of the traffic just for LinkedIn. Highlight everything by hitting command or control all, right click and choose export RAW file. Put it somewhere you remember, so you can direct Claude to it via a path you will need to update via the Agent Skill I have provided below.

This is a process you can do for any website. It isn't limited to LinkedIn, but the Agent Skill I provide is only for LinkedIn. The same approach will work for any website or application you use, but the entities you capture will be relative to the platform. It just depends on what you capture and are looking to mine. This is what makes Fiddler so powerful. You can leave it on all day and paint a picture of your entire digital footprint. Warning though, there are some sites where having a proxy open will screw with things, so be aware. I leave it on all the time and then a website doesn't load or I get wonky things.

## Agent Skill

I have created an Agent Skill to guide each time I do this, and I am happy to share it with you. I've pasted it here via a GitHub Gist, but you will need to download it locally and edit it. You will need to update the `[local path]` location which exists throughout the skill with the local path where you save your Fiddler RAW file containing all your LinkedIn traffic. Make sure to read the entire Agent Skill. Again, you don't need to be a coder to do this, it is plain enough English that you should be able to follow. NEVER trust an Agent Skill file from anyone—even me. It is easy to put malicious things in there that can mess with your world.

I save the Agent Skill to the `.claude/skills` folder in the project I have VSCode open to, which I then save my Fiddler file to `social/linkedin/*`—you will have to navigate this on your end, and update the path accordingly. Like I said earlier, if you want to do this via Claude desktop, web, or Gemini and ChatGPT, it is a separate process, but the same approach and skills will work, but the file system voodoo will vary.

<script src="https://gist.github.com/kinlane/fa938f842c7b0a75432685a1a9b87c34.js"></script>

## Market Files

The reason I like using Claude as an extension in VSCode is that it is easy for Claude to work with entire folders of files, like the Fiddler RAW export, but also it can then easily output multiple markdown files. I had it dump a `groups.md`, `messages.md`, `posts.md`, `profiles.md`, and `reactions.md`, as well as a `README.md` and `data.json` dump for each time I run a report. Then I can reference the context for a specific research session, day, or other bounded context I wish. It gives me full control over my data, within the bounded context that matters to whatever I am trying to accomplish.

## My LinkedIn Data

I've done this work to satisfy my needs. Giving me control over my LinkedIn data. But I am sharing it in response to a couple friends who have asked for how to do it. They've been struggling to get control of their data, frustrated with having to request their entire archive from LinkedIn, or getting warned for using Chrome extensions and other methodologies. This approach gives you full control over your data locally on a daily or other basis, and what you do with the data is up to you. Claude can easily work across the folders and markdown files in VSCode, but you will need to refine if you don't use VSCode.

I've published a video below to walk through some of it to try and outline the steps. But it would need much more work to refine and turn into a tutorial that anyone can follow. So you will have to accept this unpolished story and video, and if you need more help feel free to reach out. I am happy to help and make more time to refine, but for my purposes it has accomplished what I needed, and I am using it daily to align my LinkedIn reality with my Gmail, Google Calendar, Bluesky, YouTube, and other activities. Storing all my data locally as markdown, which I then sync using GitHub and Amazon S3, and then using Claude to help me make sense of my world in real-time, without having to play the games that LinkedIn, and many other platform providers, make us play.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6HktUZdnMBU?si=plfd1sQX9ylQU8Vx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>