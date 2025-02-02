---
layout: post
title: Bringing My IT Infrastructure Out Of The Shadows With An API-First Approach
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-bright.png
author:
  name: kinlane
tags:
  - My
  - Infrastructure
  - API-First
---
I'm [slowly migrating my own infrastructure, towards a microservice first approach](https://kin-lane.github.io/master/index.html), something you can follow the details of on my [alpha.apievangelist.com blog](http://alpha.apievangelist.com). I've been running on my own custom brew content management system (CMS) since I started API Evangelist in 2010. There are many APIs in use across my system, both external publicly available APIs like Twitter and Crunchbase, and a wide variety of internal APIs I've developed myself.

As I work to replicate each aspect of my CMS, carving off each potential micro service, I'm reminded of how much of what I do lives in the shadows. Little scripts I've written here, and there, jobs I haven't run in months, and just general code exhaust from years of operation. I’m a little different than most shops, as I'm a one person operation, who codes all my own stuff, but based upon my experience in other shops, the same behavior exists in almost any organization.

Throughout this migration I’m reminded of what I'd consider to be one of the biggest security lapses in my world, which is just about things being known. As I build out new features, jobs, bells, and whistles, are they all cataloged, mapped out, and consistently used, or deprecated. Anything that is unknown, unaccounted for, lives in the shadows of my operations, and potentially provides a security risk. Often times the culprit in any security lapse, is an unknown workstation, server, application, or single script.

Having a single doorway (micro service), with a single approach to authentication ([3Scale API Infrastructure](http://bit.ly/13esk6Q)), and a map of my entire surface area, using [Swagger](http://swagger.io) + [APIs.json](http://apisjson.org), I’m getting a much better handle on things. It will take a while to clean up all my legacy stuff, and map everything out, but once I do, I can easily audit, monitor, deprecate, and ultimately secure the entire surface area of my infrastructure, because it is all done with an API first approach. Then I’ll continue to address other aspects of my security like SSL, app management, and other critical areas, but for now, I feel like being able to map out my infrastructure, is doing wonders for bringing my infrastructure out of the shadows.