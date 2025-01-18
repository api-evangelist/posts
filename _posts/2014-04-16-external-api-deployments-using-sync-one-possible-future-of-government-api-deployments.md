---
layout: post
title: >-
  External API Deployments Using Sync One Possible Future Of Government API
  Deployments
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-external.png
author:
  name: kinlane
tags:
  - Deployment
  - Government
---
I just wrote up a piece about how to [deploy an API driven application backend using Orchestrate.io,](http://apievangelist.com/2014/04/15/api-driven-backend-for-apps-using-orchestrateio/) and wrote a piece last week on [API deployment using Solr and government data](http://apievangelist.com/2014/04/14/liberate-government-data-by-deploying-web-apis-with-solr/). After writing about both of these approaches, I can't shake the thought that external, API driven approaches like this will become commonplace in the next couple of years.

Both the approach using Solr, and the other using Orchestrate.io, identify that data is available via a machine readable data dump and even an API, but neither solution provide the simple web API access that would make application development easy.

In both these stroies, 18F and Orchestrate.io are both looking to just get the job done, achieving their development goals--in one case deploy an API of federal business opportunities, and the other is to build a web application that will make browsing super hero characters easier.

Granted these two scenarios have radically different outcomes, but both share a common approach to meeting their goals:

*   **[Orchestrate.io](http://apievangelist.com/2014/04/15/api-driven-backend-for-apps-using-orchestrateio/)** - Uses Orchestrate.io to extract, store and normalize data from the Marvel API, making it much more accessible, searchable and usable in their MarvelousDB web application
*   **[FBOpen](http://apievangelist.com/2014/04/08/18f-shows-what-is-possible-in-government-with-fbopen-api/)** - Uses Solr to mount and index business opportunities with the federal government in an XML dump, then deliver a web API so they can build the web interface for FBOpen, but also provide an open source API that anyone can use as is, or deploy on their own infrastructure

Both of these approaches are all about making the data and content they need for web and mobile apps, easily accessible via a simple API. Both of these projects acknowledge the data source they have to work with doesn’t meet their exact requirements, but for very different reasons. One project uses open source software to tackle their problems, while the other uses the latest cloud services to provide a solution—both get the job done.

I don’t think there will be one formula for this type of development that will work in all scenarios, but I think the pattern of extracting the data you need via a data dump or an API, and deploying an external API stack, independent of where you get the data, will be a pattern that can be re-used. This is especially ture in our federal government, where I think much of the innovation needs to occur adjacent to the agency who produces and manages valuable data and content resources, estlabishing API driven, public / private sector partnerships.

I envision a healthier API ecosystem where the government, and the private sector both encourage the re-purposing, and wholesale distribution of content and data, opening up a much more federated approach to delivering the resources we need to build both public, and private sector web and mobile applications.