---
published: true
layout: post
title: Applying Domain-Driven Driven Design to Integration and Consumption
date: 2025-10-14T09:00:00.000Z
tags:
 - Domain-Driven Design
 - Domains
 - Ubiquitous Language
 - Boundaries
 - Integration
 - Consumption
image: https://kinlane-images.s3.amazonaws.com/shared/bf-skinner-nyc-public-library.jpeg
---
At Naftiko, we are reshaping integrations as business capabilities through the alignment of the technical details with business strategy using domain-driven design. Domain-driven design is a fundamental concept from the world of software development and heavily used in shaping how we produce APIs, but it is something that when you mention out of an API producer context, making things more about API consumers, people seem to get stuck and confused. We have had conversations with folks who possess a strong grasp of domain-driven design, one could say domain experts, but fail to see and understand how and why the methodology applies to other side of the integration conversations with the consumers of 3rd-party APIs.

I wanted to better understand why folks find it difficult to think about domain-driven design when it comes to API consumption, and explore the common definitions and practices in use, to see if there is something I am missing, and what I can do to help make our intent more clear. I recently read Learning Domain-Driven Design from by Vlad Khononov from O'Reilly media, and have been browsing a lot of the common material available-—while also poking at Gemini, ChatGPT, and Claude for answers. I can’t find any reason why it wouldn’t make sense to apply domain-driven design to the realm of software integration and consumption, and I find it strange that people who produce certain types of infrastructure would gate keep around a concept that is focused on alignment and establishing a common language for the software we produce.

Personally, I find the concepts of models, ubiquitous language, bounded context, aggregates, events, repositories, and services in the context of 3rd-party Cloud, SaaS, and APIs very compelling. As an API producer you “potentially” have a lot more control over your domain(s), but as an API consumer, you do not have near as much control. You have to cede a significant amount of control over the “design” of the APIs you are using for any given domain, but you do have control over how you use many different services and their APIs in concert—which isn’t something each API service provider have always thought critically about. Some have, but most do not. This is where the concept of boundaries and a ubiquitous language really comes into play, empowering and giving you more control over the services you use and do not use, and which individual API resources you apply to stitch together the variety of business capabilities you will need from your 3rd-party suppliers.

