---
published: true
layout: post
title: An API Toolbox Blueprint
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_covid_19_resource_center.png
author:
  name: kinlane
tags:
  - tag
---
I was needing a simple way to move forward a variety of API conversations I am having, ranging from COVID-19 APIs to API service providers who are using OpenAPI. I need a quick way to be able to flesh out a list of APIs, tooling, and specification that can be leveraged by developers when it comes to tackling a specific problem within an industry, issue, or conversation. This is an evolution in [our strategy for shining a spotlight on the COVID-19](https://covid-19-apis.postman.com/), helping me better figure out how we can keep adding value to the COVID-19 discussion, but also quickly do the same in other areas. For the COVID-19 effort we threw up a landing page and GitHub repository back in March, and since then we’ve seen some pretty interesting submissions and conversation come out of the community.

### **Improving Upon the COVID-19 API Resource Center**

The COVID-19 API Resource Center is a listing of Postman API collection we’ve developed, curated, and accepted from the community.  We seed the resource center with 15 collections, and received 36 collections from the community, with 25 submission awaiting for a Postman collection to be developed so the API can be added to the list. For a total of 51 collections available on the COVID-19 resource center, providing a range of resources from data on COVID-19 cases and deaths to drugs and testing information. We successfully used GitHub to accept community submissions via issues, and evolve a pretty robust list of resources, but some of the APIs and resulting collections were of higher quality than others, and I wanted to understand why. To help me understand I went through all of them identifying the areas the could use more investment when it comes to helping individual collections, as well as the overall toolbox of collections, better serve the mission to help us in the COVID-19 fight.

*   **Narrative** - Collections that do not have a descriptive title, or robust and helpful enough description increase friction for developers, and curators like me when it comes to understanding the value each API delivers.
*   **Domain** - APIs that have their own domain tend to have more investment, providing a more solid foundation to work from. APIs that simply rely on a subdomain from where the API is hosted tend to be less mature.
*   **Ratings** - It is critical to have a rating system established for each API published as part of a toolbox, allowing the best collections to be featured, and the less mature API collections to be moved down in priority in listing.
*   **Provenance** - Understanding where the data behind each API comes from is a critical piece of the puzzle when it comes to defining, filtering, and knowing which APIs you should be working with, ensuring there is always a trail.
*   **Visualizations** - One of the characteristics that really stood out of this work is the role that visualizations play in making sense of what is happening, and Postman visualizer proves to be a critical feature in all of this.
*   **Resources** - Having each API tagged to identify the types resources it possesses is critical for understanding what resources are available across different collections, and being able to map out what is also missing.

When it comes to APIs, more isn’t always better. I am excited that we have over 50 APIs published as part of the Postman COVID-19 Resource Center, but in the end how many different APIs do we need that tells us cases, deaths, and recovered, when we are in such desperate need for more data on testing location, and other vital areas of the world we live in now. Having the ability to rate and prioritize collections to make API discovery more efficient is going to be essential to all of this, and actually working to solve real world problems, otherwise we are just doing APIs for the sake of doing APIs.

### An API Toolbox Blueprint

Once I had published [v2 of the Postman COVID-19 resource center](https://postman-toolboxes.github.io/covid-19/) I wanted to turn the approach to this GitHub hosted single page application (SPA) into a blueprint. I had a handful of projects I wanted to get out the door in some way, providing me with a diverse set of API toolboxes I could use to help me test out my blueprint, but also help me push it to see if it will work for a variety of industries, topics, and use cases. I am looking for a simple, yet versatile blueprint I can quickly replicate and use to curate different sets of API resources forward, so I began with these projects.

*   **[COVID-19 Resource Center (V2)](https://postman-toolboxes.github.io/covid-19/)** \- The next generation Postman COVID-19 resource center, which is the model for this API toolbox blueprint.
*   **[U.S. 2020 Elections](https://postman-toolboxes.github.io/us-2020-elections/) -** I am looking to test out this API blueprint using the 2020 U.S. election, and see how we can apply to helping make sense of the madness.
*   **[Postman Developers](https://postman-toolboxes.github.io/postman/)** \- Pulling together all of the Postman API, open source tools, and other resources into a single landing page for our developers.
*   **[Newman](https://postman-toolboxes.github.io/newman/)** - Aggregating the wealth of open source tooling and other resources being built around the Postman Newman ecosystem.
*   **[API Knowledge](https://github.com/postman-toolboxes/api-knowledge)** \- Providing a single list of the best resources for API knowledge available out there in the space, providing a single resource for folks to tune in.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_us_election_resource_center.png)

In addition to these resource centers, [I am working on healthcare, Fintech, and an authentication / authorization resource centers](https://github.com/postman-toolboxes) using the same API toolbox blueprint. The goal is to use the API toolbox blueprint to help flesh out different sets of APIs, open source tooling, specifications, and other resources across a variety of topics and industries. Helping flesh out these specific areas of the API economy, while also refining and rating the collections that are submitted to describe each API, as well the open source tooling being showcased. This is all still a work in progress, but so far here is what I have when it comes to my API toolbox blueprint.

*   **Single Page Website** \- A single page to view all of the resources being presented in one simple, yet robust landing page for consumers to put to use.
*   **YAML Data Source -** The content available on the single landing page is delivered using a single YAML file, providing one place to make changes.
*   **Simple HTML Template** \- I used the excellent COVID-19 page built by my team, but retrofitted it for Jekyll so it would natively run 100% on GitHub.
*   **Featured Collections** \- All of the APIs which possess collections and have a rating above 6, featuring the best APIs across each area of research.
*   **Additional Collections -** Showcasing all fo the available API collection no matter the quality, highlighting everything that is possible within each area.
*   **Visualizations Feature** \- Be able to highlight and feature the collections which have requests possessing visualizer outputs, to help make sense of data.
*   **Resource Tag Cloud -** Aggregate all of the tags applied to each individual API resource, rolling up and displaying all of the resources available via a toolbox.
*   **Partner Feature -** Allow for the featuring of partners who are helping contribute work, APIs, and data to each of the projects, helping showcase the community.
*   **Call to Action -** Asking the community for suggestions of APIs, datasets, tooling, and other resources that would help each area being targeted with a toolbox.
*   **GitHub Repository -** Each project is hosted in a single GitHub repository within the Postman API toolbox organization, providing a shared organization across stakeholders.
*   **GitHub Issues -** Leveraging the GitHub issues for each project to help gather suggestions from the community, and provide a feedback loop around each of the projects.
*   **Stories** - I have included a simple blog for each toolbox, allowing for the narrative around each API, open source tool, and resource to shared, helping tell the story behind all of the work.
*   **Open Source Tooling** - I added the ability to list open source tooling as well as APIs on each page, providing additional tooling support for specific areas of work.
*   **Open Specifications** \- I added the ability to list out the API specifications that are supported as part of an effort, helping showcase the standards that exist behind the scenes. 
*   **Resources** - I added the ability to just list different types of resources, grouping links, books, social, and other resources into a single set of resources that can be published to the page.
*   **Rating** - There is the ability to rank APIs, open source tools, and other resources using a basic rating score, as well as took first step towards using multiple ratings with a CASC score from API Metrics.
*   **Provenance** - I am adding name and links as provenance to individual APIs, helping showcase those that are using common sources of data to power their APIs, helping provide more value when it comes to searching.

I do not use all of these elements in all of the toolboxes. Depending on the scope of the project I will layer in different building blocks. However, all of these projects are about identifying APIs, open source tools, specifications, and resources that will all contribute to a specific objective that is meaningful in a specific industry or layer of our society. Then being able to refine, polish, rank, and evolve each of the individual resources being made available, as well as the overall toolbox of resources. Helping make sure it isn’t just a listing of APIs and open source tools, and it is a listing of high quality APIs, collections, and maintained open source solutions that add value to the conversation.

There is a lot of work ahead to keep fleshing out this API toolbox blueprint, but I am pretty happy with this first iteration. I’ve been building blueprints like this for the last five years, and this is the most refined one I’ve created so far. It still has some complexities I’d like to smooth out, but that will come with the implementation of more toolboxes. I am pretty confident that the blueprint I’ve created can be quickly applied to a variety of business verticals and topics, but where I am really keen on pushing forward is not just expanding to other areas, but getting more precise in how I rate and influence the API conversation within each of these areas. I’m looking to turn each of these pages into a wider conversation about what is possible with APIs, and leveraging Postman + GitHub to establish a sort of API factory floor for moving forward APIs across many different industries.