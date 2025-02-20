---
layout: post
title: GraphQL Seems Like We Do Not Want To Do The Hard Work Of API Design
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-graphql.png
atomdate: 2016-08-30T18:00:00.000Z
tags:
  - Design
  - GraphQL
---
We were talking about GraphQL in the API Evangelist Slack channel the other day, and the consensus seemed to be that GraphQL is a way to avoid the hard work involved with properly getting to know your API resources, and it is just opening up a technical window to the often messy backend of our database-driven worlds.

As an old database guy (1980s) I love me some SQL, but I am also a believer in what the API design, deployment, and the management life cycle can bring to the table. APIs are about taking often very technically defined resources, and making them accessible, and more intuitive (not always) to the people who are consuming and putting API resources to work. 

Technologists love their new shiny toys that reflect their tech ideology, and this is what GraphQL seems like to me on the surface. I get the reasons behind doing it, and why developers like it, but I think it's missing the important aspects of why we are doing APIs. Sure, you won't know every possible scenario a developer will want to query using your API, but this is why we have feedback loops associated with API operations.

It seems like you would attract 5 very technical API developers who would love it, but then exclude 5 non-technical users. Why not just make a simple and limited API, and have a conversation with all 10 users about what they need, and come up with an agile way to design, deploy, and manage new paths, and additional parameters to your existing paths. GraphQL seems like the numerous TEXTAREAS I've deployed behind the firewall to allow trusted users to write SQL to get at the database--which is just poking a hole, not very evolutionary at all.

GraphQL feels like the DBAs coming out from behind the firewall and rather than adjusting to the world, they are implementing their way of doing things on everyone--which is classic IT / backend behavior. No average user will ever use GraphQL interfaces, where they will copy / paste a URL and put it to work for them--if it is intuitive. Like the TEXTAREA solution, GraphQL feels like a quick fix to me and not one that looks to the future--I think my friend Mehdi Medjaoui ([@medjawii](https://twitter.com/medjawii)) says it well with:

_"When the wise man shows the moon, the idiot looks at the finger” s/moon/REST/ | s/finger/GraphQL/"_

Us developers and IT class are always looking for the quick fix that fits with our ideology, and are resistance to change, and solutions that look outwards and to the future. I am not being critical of GraphQL just to be mean, I'm just asking if it is the forward-looking solution, the simplicity that we need to do this at scale. I feel like GraphQL is just another tech solution, that will have to be executed by tech people in the know, and not a solution that everyone will be able to implement. If you disagree with me, maybe you could help me learn more about the reason behind GraphQL, and understand how this benefits non-technical folks and end-users.