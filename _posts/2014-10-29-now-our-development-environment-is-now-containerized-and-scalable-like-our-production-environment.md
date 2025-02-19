---
layout: post
title: >-
  Now Our Development Environment Is Now Containerized And Scalable Like Our
  Production Environment
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/codenvy/codenvy-logo.jpg
author:
  name: kinlane
tags:
  - Environment
  - Product
  - ai
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/codenvy/codenvy-logo.jpg)](http://codenvy.com)

The production environment for delivering web and mobile applications has radically evolved in the last couple years, becoming more distributed, scalable, virtualized, and containerized. APIs, and new development frameworks are providing a smorgasbord of resources for developers to put to work, and devops is putting more power and control, throughout the development life cycle, directly into a developers hands. It is time that a developers environment evolves to keep pace with the environment developers are building applications for.

I’ve been talking about [containerization in the API space](http://apievangelist.com/2014/04/07/containers-will-do-for-apis-what-apis-do-for-companies/) for a while now, something that is still a very manual process, so I have been looking out for a potential development environment that matches my vision for orchestration with APIs for some time now. This is why I was stoked when I ran into Tyler Jewell ([@TylerJewell](https://twitter.com/TylerJewell)) back in September, who introduced me to [Codenvy](http://codenvy.co)—"a new SaaS developer environment that allows developers to create hosted environments optimized for creating, editing, compiling, testing and debugging applications authored in different programming languages”.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/codenvy/codenvy-api-ide-screenshot.png)](http://codenvy.com)

At first glance Codenvy appears to be just another web-based IDE, with autocomplete, data source management, and Github integration. As you play with more you begin to realize you can configure and share projects, allowing you to setup environments, share and even clone them. Then you realize the whole IDE is configurable, clone-able, shareable, and scalable using the ever popular Docker, complete with API or CLI access to all work spaces, projects and files. This is the environment I was looking for—this is the orchestration I envision for building applications using APIs.

My head is swimming with ideas of how I can orchestrate application development environments now that both the development and production environments are containerized, scalable, bite-size goodness, complete with a Github layer in the middle. While many users of Codenvy will be using to manage their own devop workflow, I will be pursuing it to manage my own infrastructure, but more importantly using it as a platform to craft [custom API stacks](http://apievangelist.com/2013/01/28/virtualized-api-stacks/), share and publish publicly, and explore more opportunities around being an [API broker](http://apievangelist.com/2014/10/10/exploring-the-possibilities-of-being-an-api-broker/).

_**Disclosure:** I am an adviser to Codenvy._