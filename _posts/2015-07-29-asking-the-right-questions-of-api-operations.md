---
layout: post
title: Asking The Right Questions Of API Operations
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-questions-ask.png
author:
  name: kinlane
tags:
  - Operations
---
I ask a lot of questions about the API space. In m quest to make sense of the growing number of APIs in the space, I partnered with 3Scale to define the [APIs.json format](http://apisjson.org). In the year since we launched, I've used it to help me define almost 1000 companies that I keep an eye on in the space. 

To be able to understand APIs at scale, I had to develop a way to ask questions about a companies API operations, while also asking them of my own APIs. This project was born out of some research into making API terms of service (TOS) machine readable, which led me to the project [Terms of Service Didn't Read](https://tosdr.org/)\--a very important project you should know about. Long story short, I realized how much work it would be to make APIs TOS machine readable, and distilled things down to just be able to ask simple questions about APIs like:

*   Is there self-service registration?
*   Can I delete my account?
*   Do I own my data?

I then quickly realized the potential for my api-questions format, and that it could help me avoid getting tangle up in the legaleze of API TOS, and speed up making sense of how APIs work. I also saw that I could apply api-questions to other areas of API operations that I already track on like code resources, pricing, and support. api-questions would be a machine readable index of the questions I ask most about APIs, from A-Z. 

To begin with I compiled almost 60 of the most common questions I ask about APIs, and launched an API to support the adding, editing, and modifying of these questions. I broken these questions down into two groups:

*   **[APIs.json Questions](http://apievangelist.com/2015/07/29/my-new-api-for-asking-questions-of-apis--the-apisjson-edition/)** \- Things I generally wanted to know about API operations.
*   **[Swagger Questions](http://apievangelist.com/2015/06/09/my-new-api-for-asking-questions-of-apis--the-swagger-edition/)** \- Things I wanted to know specifically about the API, and since I profile them using Swagger...

I have started apply an api-questions approach to the APIs that I depend on to run API Evangelist. You can see this in action with the Alchemy API. I ask the same two groups of questions:

*   **[APIs.json Questions](http://question.api.kinlane.com/questions/ask/organization/?apisjson_url=http://theapistack.com/data/alchemyapi/apis.json&questions=19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45) -** I want to understand how complete the Alchemy API operations is, and where all the moving parts are in a machine readable way.
*   **[Swagger Definitions](http://question.api.kinlane.com/questions/ask/organization/?apisjson_url=http://theapistack.com/data/alchemyapi/apis.json&questions=46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,66,67,68,69,70,71,72,73) -** I want to be able to ask the Swagger questions of each of the Alchemy APIs, where you really start seeing the need for automation here. 

[If you look at the APIs.json I maintain for the Alchemy API you will also notice I added both these api-questions to the main API index](http://theapistack.com/data/alchemyapi/apis.json). I'm still working on the format, and the best way to reference the questions for each API, as well as the whole collection. However the goal is to provide a machine readable list of questions, anyone can put to use when evaluating what API they want to use, while also making the questions available in [APIs.io](http://apis.io).

While formulating api-questions as a way to automate the questions I was asking of public APIs, I felt it should also be asked of my own internal APIs. I wanted to make sure my APIs meet the bar I set for the APIs I monitor in the API sector. This is where api-questions move from an external discovery thing for me, to an internal discovery plus operational quality of service.

api-questions gives me the ability to ask consistent questions of all of my APIs, knowing that they are indexed in each centralized APIs.json index. Right now I just have APIs.json and Swagger related questions, but I will be adding to these groups, as well as establishing entirely new groups from the business and politics of API operations. 

When applied to API operations, api-questions takes on a different lens when you are looking at external APIs, but when applied to your own internal APIs it changes views again, and helps you understand potentially where the gaps are, and helps you establish a checklist for overall operations. 

[I am using api-questions to make sure my APIs have consistently designed interfaces, interactive documentation, complete SDKs in all languages, Postman collections for integration, and monitors that keep my APIs as available as possible](https://kin-lane.github.io/master/). While I'm still working out a lot of kinks, this approach is helping me manage my own operations at scale, which also involves understanding thousands of public APIs, establishing a pretty virtuous cycle for me. 

Another layer I am adding to api-questions is the concept of api-certification, [which I have deployed another API to support](https://kin-lane.github.io/certification/), which basically groups questions together, but looks for specific answers to those questions, and certifies an API meets these requirements on a regular schedule. Stay tuned for that...

The purpose of this story is to help me grasp whats next for this work, while also sharing this methodology, and the tooling I have developed with my partner team at [APIWare](http://apiware.io). I want to make sure all APIs that are deployed and managed in a consistent way, with all the essential building blocks for success.