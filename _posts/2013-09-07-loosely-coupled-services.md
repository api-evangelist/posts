---
layout: post
title: Loosely Coupled Services
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-gears.png
author:
  name: kinlane
tags:
  - Services
---
Building off a similar topic this week, I was asked to dumb down or explain what I meant by "Loosely Coupled Services", alongside a "[Library of Modular Services](http://apievangelist.com/2013/09/07/library-of-modular-services/)". In this case, loosely couple means independent technical and data services, in the same way you would access services that people are familar with in the mainstream business world.

Think of the services you would access and put to use around your home. Common household services like electrician, plumber, tile layer and sheet rocker. These each represent independent services you would access to tackle a home improvement project. While there is some overlap in these services, generally each service technician specializes in one area, doing one thing and doing it well. The slight overlap between an electrician and plumber would be considered the "loosely coupled" part, where there are dependencies between each specialized service, ie. the plumber needs an electrician to wire the dishwasher after he /she plumbs it.

The concept of loosely coupled services works well when it comes to APIs. The goal is to define APIs to do one thing and do it well, establishing a library of modular services that can be used across a company and organization, its partners as well as provide public access to the most commonly requested resources. A simple example might be product catalog. You can deliver a web service that allows for accessing, searching and pulling details of products a company offers. All the web service knows how to do is find, list and provide info on products, nothing else. This product catalog will have loosely coupled dependencies with other inventory, shopping cart and coupon services, but in the end its very specialized.

Any organization or company will have a wide variety of potential services that can be defined. It is best to define these in as granular of a way as possible, keeping them entirely independent of other services, except for slightly coupling that allow them to consider certain interactions and facilitate interoperability. A loosely coupled services approach will allow you to mix and match different services for different project, minimizing dependencies and introducing complexity that down the road can be very hard to untangle.