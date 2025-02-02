---
published: true
layout: post
title: Git Is How You Run in Bruno
tags:
  - Git
  - GitHub
  - Bruno
  - Collections
  - Environments
  - Repositories
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-building-art-construction.jpeg
---
I have many different [business](https://github.com/api-evangelist/business-platform/blob/main/apis.yml) and [engineering](https://github.com/api-evangelist/engineering-platform/blob/main/apis.yml) platform APIs I use to manage and automate my one man circus. [As I continue the work to elevate the Bruno API client as a cornerstone of my API operations](https://apievangelist.com/2024/11/14/elevating-the-bruno-api-client-as-a-cornerstone-of-api-operations/) it requires re-engineering many of the Postman collections I have assembled to think like Bruno--meaning think in a GitOps way. With Postman Collections I long ago was indoctrinated into the idea of Run in Postman, which is a genius call to action around both producing and consuming APIs, but you realize it was more about all roads leading to the cloud than it was about me running what I needed, it loses its luster. As I picked up my first collection for pulling feeds across my GitHub organizations, I realized I was going to need to reset how I viewed running my digital resources and capabilities to a more fundamental level—-a Git level.

As I was exploring different top down ways for running collections in [Bruno](https://bit.ly/4fpe6FO) using a URI, I stumbled over my "derpiness" and realized Git is what I was looking for. While I have long drank the GitHub KoolAid (something I will reassess in coming months), Bruno has internalized Git in a way that reboots things in a much purer sense. Bruno’s approach to using Git allows me to still use my Postman Collections, but it forces me to shed the notion of collaboration, run in buttons, and workspaces in favor of simply Git. Forcing me to get back to my roots. Our roots. Rather than organizing my collections by workspace and collaborating around access to them using run buttons, I am organizing them using Git repositories, and relying on bringing in and out of Bruno using Git.

I start with [a GitHub repository where I am defining the purpose of my collection and checking out locally](https://github.com/kinlane/github-feeds).

<a href="https://github.com/kinlane/github-feeds"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/bruno/bruno-repo-1.png" style="padding: 15px;"></a>

I can then click to create a new collection in Bruno and point the location of the collection to my new repo.

<a href="https://bit.ly/4fpe6FO"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/bruno/bruno-repo-import.png" style="padding: 15px;"></a>

I can then add my requests and my environment for helping manage variables and secrets I will be using.

<a href="https://github.com/kinlane/github-feeds"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/bruno/bruno-repo-2.png" style="padding: 15px;"></a>

My world is tied to GitHub, but this works with GitLab, Bitbucket, or any pure form of Git, and of course there are different ways in which you can begin this journey in Git or in Bruno, but I am just working through an approach I can use that will work with my existing approach to manually managing my operations and automating wherever possible. This provides me with the foundational unit of work across my API operations, which I now can replicate across my entire stack of services I depend upon. Next I will think about how I orchestrate around this approach because I don’t want all my repositories open in Bruno at once, and I have automated systems that will be checking in and checking out repos to execute collections for a variety of purposes.

As I work to retool my API platform as Bruno collections in Git, I will spend more time thinking about how I can engage with my stack using buttons, links, events, and scheduled jobs. I will revisit earlier thinking I’ve had around expanding our vocabulary for “Run in Bruno” buttons. [I’ve long held that “run” was a limiting verb, and I am confident that a pure Git approach combined with collections and environments, and possibly some other semantics will provide us with a richer vocabulary](https://apievangelist.com/2020/12/05/expanding-the-vocabulary-for-run-in-postman-buttons/). Regardless, the Git-based approach for bundling up collections and environments for defining, collaborating, and executing against a mix of digital resources holds a lot of potential. I love rebooting how I see the world like this and forcing myself to get back to my roots. Like I said yesterday it took me about a week before the simplicity and utility of Bruno came into focus, but similar to Git, [Bruno](https://bit.ly/4fpe6FO) is forcing me to get back to basics and see the world in a much simpler, yet powerful way.