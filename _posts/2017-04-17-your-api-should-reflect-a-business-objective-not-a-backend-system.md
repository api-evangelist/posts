---
layout: post
title: Your API Should Reflect A Business Objective Not A Backend System
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-database-new.png
atomdate: 2017-04-17T16:00:00.000Z
tags:
  - Business
  - Backend
---
I'm in the middle of evolving a data schema to be a living breathing API. I just finished generating 130 paths, all with the same names as the schema tables and their fields. It's a natural beginning to any data-centric API. In these situations, it is easy for us to allow the backend system to dictate our approach to API design, rather than considering how the API will actually be used.

[I'm taking the Human Service Data Specification (HSDS) schema, and generating the 130 create, read, update, and delete (CRUD) API paths I need for the API](https://openreferral.github.io/api-specification/definition/). This allows the organizations, location, services, and other details being managed as part of any human service API that will be managed in a very database-driven way. This makes sense to my database administrator brain, but as I sit in a room full of implementors I'm reminded that none of this matters if it isn't serving an actual business objective.

If my API endpoints don't allow a help desk technician properly search for a service, or a website user browse the possibilities to find what they are looking for, my API means nothing. The CRUD is the easy part. Understanding the many different ways my API paths will (or won't) help someone find the services they need or assist a human service organization to better reach their audience is what the API(s) are all about, not just simply reflecting the backend system, and then walking away calling the job done.