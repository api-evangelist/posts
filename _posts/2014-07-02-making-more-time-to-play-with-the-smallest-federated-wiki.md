---
layout: post
title: Making More Time To Play With The Smallest Federated Wiki
image: >-
  https://s3.amazonaws.com/kinlane-productions2/smallest-federated-wiki/smallest-federated-wiki.png
author:
  name: kinlane
tags:
  - Federated
  - Time
---
I'm always working to better understand the best of breed technology solutions available online today, and to me, this means, lightweight, machine readable apps that do one thing and do it well. One solution I’m looking at is called the [Smallest Federated Wiki](http://www.caulfield.pw:3000/view/welcome-visitors), from Mike Caulfield([@holden](https://twitter.com/holden)), which has been on my list for several weeks now, but one of his [latest posts has floated it back onto my priority list](http://hapgood.us/2014/06/20/smallest-federated-wiki-as-a-universal-json-canvas/).

To understand what the Smallest Federated Wiki (SFW) is, [check out the video](https://www.youtube.com/watch?v=ikA5rHA1uDg). I haven’t personally downloaded and installed yet, which is something I do with all solutions that I’m evaluating. SFW is Node.js, and [available on Github](https://github.com/fedwiki/wiki-node-server), if you want to play with as well--I'm going to be installing on AWS if you need an AMI. This post is all about understanding SFW, and light the fire under my own use of SFW, and hopefully stimulating your interest.

**Simple**  
Building off the simplicity of the Wiki, SFW borrows from the best features of Wiki, Github, and rolled together into simple, but ultimately powerful implementation that embraces the latest in technology from Node.js to HTML5. I know how hard it can be to achieve "simple", and while playing with SFW, I can tell a lot of work has gone into keeping things as fucking simple as possible. #win

**Federated**  
I love me some Wikipedia and Github, but putting my valuable content, and hard work into someone else’s silo is proving to be a very bad idea. For all of my projects, I want to be able maximize collaboration, syndication and reach, without giving away ownership of my intellectual exhaust (IE) . SFW reflects this emotion, and allows me to browse other people’s work, fork, re-use, while also maintaining my own projects within my silo, and enable other people to fork, and re-use from my work as well--SFW is a sneak peak at how ALL modern applications SHOULD operate.

**JSON Extensible**  
SFW has the look and feel of a new age wiki, allowing you two generate pages and pages of content, but the secret sauce underneath is JSON. Everything on SFW is JSON driven, allowing for unlimited extensibility. [MIke's latest blog post on how SFW’s extensibility is unlimited](http://hapgood.us/2014/06/20/smallest-federated-wiki-as-a-universal-json-canvas/), due to it's JSON driven architecture, is why I'm floating SFW back on my review list. My 60+ API Evangelist projects all start with basic page, and blog content, but then rely on JSON driven research for companies, building blocks, tools, services, and many other data points that I track on for the space—SFW reflects the JSON extensibility I’ve been embracing for the last couple years, but I'm doing this manually, SFW is by default.

**Simplicity And Complexity**  
SFW achieves a simplicity, combined with the ability to extend the complexity in any way you choose. I can create a simple 3 page project site with it, or I could create a federated news application, allowing thousands of people to publish, curate, fork, remix, and collaborate around links—think Reddit, but federated. I envision SFW templates or blueprints, that allow me to quickly deploy a basic project blog, or CRM, news, research, and other more complex solutions. With [new cloud deployment options like Docker emerging](http://www.docker.com/), I see a future where I can quickly deploy these federated blueprints, on the open web, on-premise, or anywhere I desire.

I have a lot of ideas that I want to contribute to the SFW roadmap, but I need to get more seat hours, playing with the code, before I can intelligently contribute. Once i get my base SFW setup, I will start brainstorming on the role APIs can play in the SFW plugin layer., and scenarios for rapidly building SFW blueprint containers.

**P.S.** While SFW has been on my Evernote todo list for several weeks, it was Mike's continued storytelling which bumped up the priority. Without the storytelling and evangelism, nothing happens--something Mike references in his post.