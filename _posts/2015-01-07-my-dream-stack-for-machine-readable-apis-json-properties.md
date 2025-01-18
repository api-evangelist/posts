---
published: true
layout: post
title: My Dream Stack For Machine Readable APIs.json Properties
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-stacks.png
author:
  name: kinlane
tags:
  - My
  - Stack
  - APIs.json
  - APIs
  - Properties
  - APIs.jso
---
The properties of each API that is listed in an [APIs.json file](http://apisjson.org/) can be called anything, as long as you preface it with X-, and the URL can point to anything you wish--to me [this is one of the most flexibile aspects of APIs.json](http://apisjson.org/2014/07/09/the-power-in-api-discovery-for-apisjson-will-be-in-the-api-url-type/). The majority of APIs.json API properties are going to be to URLs designed for human consumption, but the ultimate goal of the project is to establish a core set of machine readable URIs that will help move the API discovery conversation forward.

The first three machine readable properties for APIs listed in an APIs.json are:

*   **[API Blueprint](https://apiblueprint.org/ "API Blueprint")** - The machine readable API definition format in markdown.
*   **[Swagger](http://swagger.io/)** - The machine readable API definition format in JSON and YAML.
*   **[RAML](http://raml.org/)** - The machine readable API definition format in YAML.

APIs.json is not looking to provide the solution for the same thing that sensibly designed hypermedia APIs would bring to the table, and only interested in bridging the indexing of the API resources that are currently available. In this context, think of APIs.json as a switchboard, allowing us to navigate each of the popular API definition formats available to use in 2015.

The fourth machine readable property for APIs listed in an APIs.json is:

*   **[API Commons](http://apicommons.org) -** A machine readable format for associating licensing fo ran API interface (aka CC, Apache).

[![](https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png)](http://apisjson.org/)

With [APIs.json version .014](http://apisjson.org/format/apisjson_0.14.txt), we now have a glimpse of the surface area of APIs present within each APIs.json file, via the API Blueprint, Swagger, and RAML properties, and a basic awarness of the licensing of this surface area using the API Commons property.

I’m not 100% sure what is next for APIs.json property types, but if I had my vote (which I probably do ;-), I’d be interested in seeing machine readable references to:

*   **API Monetization Value -** Units of measurement, allowing me to understand the value delivered by an API. I do not think monetization is an apt title for this area, as money is such a limiting constraint, and value is a more expansive headspace to approach this aspect of API integration.
*   **API Terms of Service Questions -** I feel that questions about the terms of service from API providers gets a lot of airplay, but this conversation is much like the TOS themselves, and are heavily weighted in discussion through a provider lens, drowning in legaleze. I’m confident that this area needs distillation from its current legaleze format, and be framed as simple questions that span TOS, Privacy Policies, SLA, Copyright, Deprecation, Branding, and other legal layers to API operations.
*   **API Clients Connectivity -** Give me a machine readable list of connecitivty options that are available for an API. I want to know what languages area available, as well as links to licensing, code repositories, and Zapier integrations. This is a layer of the conversation that would be better served through a hypermedia conversation, but since we have the world we have, this is a layer of the APIs.json conversation.

For me, APIs.json takes the [API discovery](http://discovery.apievangelist.com) conversation beyond just the meta, which, don’t get me wrong is super valuable, with titles, description, tags, and other characteristics of APIs are critical to discovery, but I want to also be able to go deeper than just a simple keyword search. I want to be able to dig in on the areas above, but in a machine readable, bottom up, organic way.

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-discovery.png)

I want to be able to ask for:

*   All image APIs, that have a per MB storage, and bandwidth API Value model vs. free or advertising based approaches. I also want to make sure they allow me to set the licensing for my photos, delete my account when done, and have a PHP client, or even better a WordPress plugin.
*   All video APIs, that have a revenue share model for their own advertising network, as a API Value model. Same as my images I want to make sure they let me set the licensing for videos, and retain ownership over my model. In this case I don’t care about specific language clients for integrations, I want to see connectivity for Vimeo, Facebook, Twitter, and other distribution channels.

A number of conversation I have had around APIs.json with technologists almost always begins with a very technical API discovery discussion, something that quickly expands to the wider vision opened up by APIs.json around value generated by APIs, limitations imposed by the legal layer of platform operations, and into how we actually connect with valuable API resources. There are many more influences that prevent me from connecting to APIs, than just the technical aspects of integration—pricing, TOS, privacy, rate limits, and other business and political limitations often trump the tech when I select API platforms.

I’m still working through exactly how to best articulate Steve and mine’s vision for APIs.json. I appreciate you listening to my thoughts, as I work through the details, and I would love to hear more of your thoughts around what APIs.json means to you.