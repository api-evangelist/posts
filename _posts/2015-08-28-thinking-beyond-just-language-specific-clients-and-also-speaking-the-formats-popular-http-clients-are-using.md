---
layout: post
title: >-
  Thinking Beyond Just Language Specific Clients and Also Speaking the Formats
  Popular HTTP Clients Are Using
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Client
  - HTTP
  - Clients
  - Speaking
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-postman.png)](https://www.getpostman.com/)

I was given an introduction to the Microsoft Graph [A concept being applied to Office 365 APIs](https://msdn.microsoft.com/en-us/office/office365/howto/develop-office-graph), other Microsoft APIs, and potentially beyond, to map out segments of users and every day objects. As I learn more about this unifying, graph API effort, I will write more, but this particular story is about how we communicate around the first steps taken by developers when integrating with any API. As an API provider, how you talk about integration, and craft your on-boarding resources, can significantly impact how developers view your resources, something that I think still will always need some work across the space.

After being introduced to the Microsoft Graph APIs, we were given a list of code resources, that we could use to hack against the API. The API integration overview had all the modern elements of API integration, with C#, Java, PHP, Node.js, Ruby, and other "coming soon" libraries. The resource toolkit, even had a sandbox account we could use, helping us on-board with less friction. While this approach is very progressive for the Microsoft world I've known, evolving us beyond the endless sea of C# focused WSDLs we all have seen historically, I would like to point what I think should be the next step in our evolution.

It makes me happy that we now speak in multiple programming languages, and provide sandbox or simulation environments. +1 What I'd like to see next, is that we also speak more HTTP, than just language specific clients. I'd like to see these types of API on-boarding toolkits start providing a Postman Collection for the API, or even better, a Swagger or API Blueprint definition that can allow me to not just on-board using the HTTP client of my choice, like [Postman](https://www.getpostman.com/), [PAW](https://luckymarmot.com/paw), or [Insomnia REST](http://insomnia.rest/). I agree that we should be speaking the native language of the developers we are courting, but I like to nudge things forward, and encourage speaking a more generic language of HTTP, for those of us who program in many different languages.

Just like being multi-lingual with APIs has moved us out of our web service silos, I'm hopeful that if more developers speak HTTP, it will help move us into the future, where API developers are more HTTP literate, are are really leveraging the strengths of HTTP, or even better--HTTP/2 in their everyday worlds. [I started including Postman collections, along with my Swagger definitions, for my APIs](https://kin-lane.github.io/api/). I'm also working to include API Blueprint, and other API definition formats, something that will allow potential API consumers to onboard using my language specific libraries, or the HTTP client of their choice.