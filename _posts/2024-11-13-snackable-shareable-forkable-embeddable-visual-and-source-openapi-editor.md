---
published: true
layout: post
title: Snackable, Shareable, Forkable, Embeddable Visual and Source OpenAPI Editor
tags:
  - OpenAPI
  - Editor
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-funnel-cake.jpeg
---
I wanted to add one more point on top of [my thinking about what is needed with an OpenAPI editor](https://apievangelist.com/2024/11/13/investing-in-the-future-of-the-visual-openapi-editor/), as well as [specifically what OpenAPI Doctor was doing with API governance rules](https://apievangelist.com/2024/11/13/innovation-at-the-intersection-of-openapi-editor-and-governance-rules-with-openapi-doctor/), and talk about where I believe that the concept of an OpenAPI editor. While I support all the innovation occurring around editors for OpenAPI, I am sticking with my long held belief that OpenAPI is just a bridge to get us to the API future we envision. No, I am not saying that OpenAPI will go away anytime soon or we should work to abstract it away—I am saying, most people don’t care about the OpenAPI specification, and it is just a configuration file to them. We need to build for this, so saying we need an OpenAPI editor is the wrong approach, we need an API editor, or even something more meaningful.

## Snackable
First, an editor should break everything down, the OpenAPI, the JSON Schema, the rules, and every other machine-readable part into the smallest, most understandable and. Meaningful unit possible. I just want to work on operations, parameters, schema, rules, and the other lego bricks that I assemble into API kits. Give me just the ability to work with the smallest most atomic unit all by itself as well as referenced as part of an overall API contract.

## Shareable
Second, an editor should be shareable. You should be able to take any part or piece, or the entirety of an API contract and share that with anyone via the channels that matter most in the moment. API-Fiddle gets this and is building towards this. This is what made the Postman Collection such a powerful force, with the Run in Postman button. API docs should be sharable, but API editors should be sharable, making the production and consumption of APIs a team sport.

## Forkable
Third, Git has to be the underlying foundation of any API editor, so that an editor and the individual component or the entire OpenAPI can be forked, and confidently tweaked, played with, and submitted back as a pull request. Our OpenAPI (and other artifact) editor should not just live in a single place, it should be able to be pulled locally, and take advantage of the source control that is already in place across enterprise organizations to get people working on API contracts.

## Embeddable
Lastly, I want my entire OpenAPI editor or any individual part of that OpenAPI to be something I can embed in a wiki, on a website, portal, tutorial, or anywhere I want. My API editor should live EVERYWHERE while also being centralized via common portals and workspaces. I should be able to bookmark the central locations of my editor in its entirety, but I want to be able to explode that functionality into modular little embeddable bits across all of the stories and workshops I give.

## Resource, Capability, and Experience Editor
Like I said, I think that we shouldn’t be building OpenAPI editors, visual or otherwise. WE should be building editors or visual tooling that allow business and technical stakeholders to manage all the components of API operations. And since everything is defined as APIs, the resources, capabilities, and experiences we are offering to our customers via applications, but also the infrastructure we use to deliver our APIs, OpenAPI and JSON Schema is the default configuration format for our API operations.

I would like an OpenAPI, JSON Schema, APIs.json, and other artifact editor to be delivered using Web Components that can be plugged in anywhere in a adhoc way, or stitched together as part of a larger master plan or paid enterprise tier. I want business stakeholders to be able to stumble across an entire API definition, or the smaller components of APIs, and feel like they can contribute. I don’t want to lose the source view for OpenAPI and other artifacts, as we need to make sure that API stakeholders possess the literacy they need to understand what is happening. 

Ok, last post of the day, and getting back to work on things now...