---
layout: post
title: Modular APIs Driven From Github Blueprints Using OpenShift
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/openshift-logo.png
author:
  name: kinlane
tags:
  - Github
  - Blueprint
  - Blueprints
  - APIs
  - Modular
  - Open
  - Git
---
[![](https://s3.amazonaws.com/kinlane-productions2/openshift/openshift-logo.png)](https://www.openshift.com/)

I'm working on a variety of ways that anyone can easily deploy API on common cloud platforms. I'm working through a series of [open](http://apievangelist.com/2013/10/22/api-deployment-from-mysql-json-github-and-google-spreadsheets/) and [secure](http://apievangelist.com/2013/11/16/secure-api-deployment-from-mysql-json-github-and-google-spreadsheets/), modular API demos written in PHP, using the Slim framework.

All of these demos are pretty basic, but currently I'm deploying them on Amazon EC2, because it is where most of my infrastructure runs and a top platform with wide user base. Ultimately my goal is to make them as simple to deploy as I possibly can, and while EC2 is definitely the leader, I know there are even simpler ways to launch simple APIs in the clouds.

I was doing a [survey of which PaaS platforms government agencies allow their workers to deploy projects on](https://groups.google.com/forum/#!topic/us-government-apis/1zVJwxQfyBw), via the US government API group and was reminded of [OpenShift](https://www.openshift.com/), from Redhat. If you aren't familiar with OpenShift, it is a PaaS platform that allows you to define applications in a variety of languages, then deploy, automate, manage and scale in a very modular way.

With OpenShift I can define a very modular application, such as an API running PHP, using Slim framework and even apply what is known as a database cartridge, providing MySQL or Postgres storage for the API--all with a single command line. I can instruct each application to derive its code from a Git location, allowing me to manage a central library of applications, then deploy specific instances as needed.

While I'm heavily using Github as the primary place to deploy [single page applications](http://spa.apievangelist.com/), that are completely written in HTML, CSS, JavaScript and JSON, I still need server side locations to rapidly deploy API driven resources in PHP, Python, Ruby and Node. OpenShift is a much more modular approach that AWS, and while I'll still be using Amazon for many of my deployments I'm going to play around more with what is possible on OpenShift.

What I really like about this approach, in addition to the modular design is that I can maintain blueprints for common APIs on Github and reference these designs when deploying APIs via OpenShift. This matches up well with what I'm doing with [api.ongithub.com](http://api.ongithub.com "api.ongithub.com ") and [data.ongithub.com](http://data.ongithub.com "data.ongithub.com") where I working to define simple Git driven approaches to open data and APIs.

Good stuff, I look forward to playing around more.