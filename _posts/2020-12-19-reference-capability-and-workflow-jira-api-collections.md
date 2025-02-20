---
published: true
layout: post
title: Reference, Capability, and Workflow Jira API Collections
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_12_19_at_3.17.51_pm.png
author:
  name: kinlane
tags:
  - Collections
  - Capabilities
  - Workflows
---
I have struggled to properly articulate to partners the potential of publishing API collections to the Postman API network, as well as via public workspaces. Most folks I talk to see Postman collections similar to how they see an OpenAPI—a reference of every path available via an API. While Postman collections excel at being in the service of publishing reference documentation, or used as an interactive API client, they can be much more.  I am seeing a natural progression in the types of collections API providers are  publishing, which results in a robust mix of collections that describe everything that is possible with an API, but also what capabilities an API platform provides, as well as workflow collections that accomplish specific business tasks. [To help me demonstrate the different types of Postman collections I wanted to take the JIRA Cloud Platform API and publish a variety of collections to a public workspace](https://www.postman.com/api-evangelist/workspace/atlassian-jira/overview)—helping make the concept more relative to people across the enterprise landscape.

### Reference API Collections

Most API Providers begin with publishing what is a reference API collection, providing a full menu of what is possible across the entire surface area of an API. This is where collections most reflect OpenAPI by providing an entire machine readable menu of what an API delivers so that it can be used to publish documentation. While some API Providers hand craft Postman collections for their entire menu of APIs in this way I recommend defining the surface area of your API using OpenAPI ,then generate a collection from the OpenAPI truth—something Postman will help you do, and then keep in sync with the OpenAPI source. For this story, I have downloaded Atlassian Jira’s OpenAPI, imported into Postman, and selected the option to automatically generate a collection for the purposes of documentation. [You can view all of this via the public workspace I have setup](https://www.postman.com/api-evangelist/workspace/atlassian-jira/overview), or you can run in your Postman using the button below.

(function (p,o,s,t,m,a,n) { !p\[s\] && (p\[s\] = function () { (p\[t\] || (p\[t\] = \[\])).push(arguments); }); !o.getElementById(s+t) && o.getElementsByTagName("head")\[0\].appendChild(( (n = o.createElement("script")), (n.id = s+t), (n.async = 1), (n.src = m), n )); }(window, document, "\_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));

A collection providing a complete reference of the Jira Cloud Platform API, containing all of the possible APIs calls that you can make using the Jira API.

I use this Jira reference collection as the seed for all of my other collections. It provides me with the menu for the entire Jira "kitchen", from which I can make many different meals, serving them up as part of my regular operations. When it comes to creating this type of API collection for consumers, there will be a portion of developers who want this full menu so that they can decide what they’d like to make. But, the majority of API consumers will prefer to have prepared dishes defined for them, providing just the most commonly used Jira ingredients put into separate containers and labeled to help them accomplish what they are looking to get done. Not everyone will have the time, bandwidth, and awareness of the entire Jira API to be able to make this collection work, which is why it helps to pull out individual capabilities for developers to put to work.

### API Capability Collections

Once I have my full menu of Jira ingredients available, I can start pulling out some of the most commonly used features of Jira for individual use, or as part of workflow collections. While I can just reference these requests as part of the larger reference collection, it helps to have them defined as individual capabilities so that they can be used in a more modular way across API operations, documentation, and training. To get started, I am looking for the key capabilities that Jira provides me when it comes to moving forward API projects across teams, giving me the fundamental units of value reflecting why I use JIra, defined as individual collections that I can reuse and remix across other collection, but then more importantly use as part of API documentation and training. Here are a handful of Jira API capability collections I have created to help me in my work, and storytelling.

(function (p,o,s,t,m,a,n) { !p\[s\] && (p\[s\] = function () { (p\[t\] || (p\[t\] = \[\])).push(arguments); }); !o.getElementById(s+t) && o.getElementsByTagName("head")\[0\].appendChild(( (n = o.createElement("script")), (n.id = s+t), (n.async = 1), (n.src = m), n )); }(window, document, "\_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));

**Jira - Capability - Add Label to Issue** - Providing a way to just add a single label to an issue.

(function (p,o,s,t,m,a,n) { !p\[s\] && (p\[s\] = function () { (p\[t\] || (p\[t\] = \[\])).push(arguments); }); !o.getElementById(s+t) && o.getElementsByTagName("head")\[0\].appendChild(( (n = o.createElement("script")), (n.id = s+t), (n.async = 1), (n.src = m), n )); }(window, document, "\_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));

**Jira - Capability - Create Issue** - Creating new Jira issues for a variety of use cases.

(function (p,o,s,t,m,a,n) { !p\[s\] && (p\[s\] = function () { (p\[t\] || (p\[t\] = \[\])).push(arguments); }); !o.getElementById(s+t) && o.getElementsByTagName("head")\[0\].appendChild(( (n = o.createElement("script")), (n.id = s+t), (n.async = 1), (n.src = m), n )); }(window, document, "\_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));

**Jira - Capability - Get Issue** - Pulling a single issue from Jira to work with in a variety of ways.

(function (p,o,s,t,m,a,n) { !p\[s\] && (p\[s\] = function () { (p\[t\] || (p\[t\] = \[\])).push(arguments); }); !o.getElementById(s+t) && o.getElementsByTagName("head")\[0\].appendChild(( (n = o.createElement("script")), (n.id = s+t), (n.async = 1), (n.src = m), n )); }(window, document, "\_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));

**Jira - Capability - Remove a Label from an Issue** - Remove a label that has been applied to a single issue.

(function (p,o,s,t,m,a,n) { !p\[s\] && (p\[s\] = function () { (p\[t\] || (p\[t\] = \[\])).push(arguments); }); !o.getElementById(s+t) && o.getElementsByTagName("head")\[0\].appendChild(( (n = o.createElement("script")), (n.id = s+t), (n.async = 1), (n.src = m), n )); }(window, document, "\_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));

**Jira - Capability - Search for Jira Issues** - Searching for Jira issues to find specific types of APIs using JQL.

(function (p,o,s,t,m,a,n) { !p\[s\] && (p\[s\] = function () { (p\[t\] || (p\[t\] = \[\])).push(arguments); }); !o.getElementById(s+t) && o.getElementsByTagName("head")\[0\].appendChild(( (n = o.createElement("script")), (n.id = s+t), (n.async = 1), (n.src = m), n )); }(window, document, "\_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));

**Jira - Capability - Update Issue** - Updating the details of a single Jira Issue.

This list represents the core value for me of Jira, but also the capabilities I am wanting to use in a variety of workflow collections. As I do more API demos and workshops that involve the JIra API, or storytelling like this around what the Jira API enables, I will create more capability collections beyond these six. This list provides me what I need right now for demonstrating the difference between reference and capability collections, while also providing me with modular Jira capabilities I can use to on-board folks with the Jira API and Postman functionality with relevant API capabilities they put to use as part of their daily work. Allowing anyone who uses Jira to transcend the user interface and begin automating and orchestrating with the Jira platform without having to write any code—using modular Postman API capability collections to drive API integration conversations.

### API Workflow Collections

Now that I have the beginning of my API capability collection catalog for the JIRA API I can start assembling a variety of workflows I am looking at running manually, or as part of scheduled monitors. I have Jira pretty dialed in when it comes to managing my work at Postman, but I am looking to further automate, orchestrate, and augment my work using a variety of Jira API workflow collections. Defining workflow collections takes a whole other set of API design skills, going beyond what any single API provider or request can do, and stitching together a variety of API calls to accomplish a specific business task. Here are just a handful of API workflow collections I am playing around with to help me automate some of my daily work.

(function (p,o,s,t,m,a,n) { !p\[s\] && (p\[s\] = function () { (p\[t\] || (p\[t\] = \[\])).push(arguments); }); !o.getElementById(s+t) && o.getElementsByTagName("head")\[0\].appendChild(( (n = o.createElement("script")), (n.id = s+t), (n.async = 1), (n.src = m), n )); }(window, document, "\_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));

**Workflow - Pull Jira Issue and Publish to Slack** - Pulling a single Jira issue then pulling specific details and publishing to a Slack conversation.

(function (p,o,s,t,m,a,n) { !p\[s\] && (p\[s\] = function () { (p\[t\] || (p\[t\] = \[\])).push(arguments); }); !o.getElementById(s+t) && o.getElementsByTagName("head")\[0\].appendChild(( (n = o.createElement("script")), (n.id = s+t), (n.async = 1), (n.src = m), n )); }(window, document, "\_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));

**Workflow - Pull Tweets and Create Jira Task** - Pulling tweets from Twitter, grabbinb a single or several tweets and then publishing as a Jira task to track work around the tweet thread.

 The more time I spend carving off specific capability collection from the Jira API, the better I get at identifying what I need when it comes to crafting my workflows. If you look in [the public workspace for my Jira API work](https://www.postman.com/api-evangelist/workspace/atlassian-jira/overview) you will notice there are individual capabilities for Twitter and Slack in there as well. Providing me with additonal modular API capability collections I can use as part of different workflows. This level of collection building is really the most meaningful and impactful, going beyond just APIs and speaking to the business value they generate each day. A complete reference collection for an API holds a lot of untapped potential, but as a consumer you will need have to have the motivation to make sense of the API and do the hard work of defining what the core capabilities are, and how they’ll be used to add real world business value. It becomes easier when you have a variety of modular capability collections, and growing experience sticking these capabilities together across a variety of API platforms.

### Reference, Capability, and Workflow Collections are a Journey

The thing I love about this process is everything that I learn along the way. I have similar workspaces setup for Confluence, Github, Twitter, Postman, and other API platforms I depend on. While operating these public worksspaces I learn so much about each platform, but also how I put each platform to work as part of my operations. This is a journey that every API provider should be on with their own API, bringing their consumers along for the ride via a public workspace if possible. I known that many API providers feel that publishing documentation is enough for getting developers to build the next generation of applications and integrations, but few developers are going to understand the value present in your API like you do, and going through the motions of breaking your API resources out into more meaningful API-driven capabilities, then using those capabilities to accomplish specific business workflows will go a long way to demonstrating what is possible with your developers. You never know what this type of collection building and ultimately storytelling around it will inspire with your API consumers, unless you embark on this journey for your own stack of API resoiurces.

There are several critical dimensions to this journey. First there is the different types of collections, but then there is the collaboration and engagement that these collections bring to the table. You’ll notice that all of this work is available out in the open as a public workspace, so anyone from the community can learn from what is going on, and even pitch in by commenting or forking any of the collections. Additionally, I have published run in Postman buttons enabled for all of these collections so that I can publish the entire reference API collection, or any of the modular capability collections and resulting workflow collections to any wiki, website, portal, or Github repository for use by my readers. Remixing API capabilities into different workflows is pretty powerful juju, but once you augment this with documentation, blog posts, social media, demos, workshops, and other storytelling activities, you really begin to see the potential of this collection driven API journey. Then once you realize the potential of this journey when built on top of an OpenAPI platform, generating reference, capability, and workflow collections from a souurce of truth, you will find that a whole new world of API orchestration, automation, integration, and storytelling emerges—changing not just how you consume APIs, but also produce APIs as part of your regular operations