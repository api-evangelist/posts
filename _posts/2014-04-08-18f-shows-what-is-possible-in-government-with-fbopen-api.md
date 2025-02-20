---
layout: post
title: 18F Shows What Is Possible In Government With FBOpen API
image: >-
  https://s3.amazonaws.com/kinlane-productions2/federal-government/18f/18F_logo.png
author:
  name: kinlane
tags:
  - Government
  - Open
---
[![](https://s3.amazonaws.com/kinlane-productions2/federal-government/18f/18F_logo.png)](https://18f.gsa.gov/)

There has been some [great coverage of the new group of tech specialists out of the GSA](http://e-pluribusunum.com/2014/03/12/at-18f-in-gsa-u-s-seeks-to-tap-the-success-of-the-u-k-s-government-digital-services/), dubbed [18F](https://18f.gsa.gov/). According to their own home page, 18F:

> _...builds effective, user-centric digital services focused on the interaction between government and the people and businesses it serves. We help agencies deliver on their mission through the development of digital and web services._

I know most of the team members from my work with the GSA, and my own time (albeit short) as a Presidential Innovation Fellow, and I am extremely optimistic about the potential of the team. This optimism is being seriously validated after looking through the groups recent release of the [FBOpen API](http://docs.fbopen.apiary.io/), which is a simple API resource to get access to opportunities to do business with the U.S. Federal Government.

**Use Existing Tools**  
The 18F demonstrates their tech chops by not re-inventing the wheel when it comes to designing and developing the FBOpen API. After they downloaded the existing business opportunity XML dumps from [FBO.gov](http://fbo.gov), they employed [Apache Solr](https://lucene.apache.org/solr/) to develop a thin API layer on top of the files. Solr does two things well, it provides a REST interface on top of document stores, and supports the Lucene query syntax, which provides a powerful query interface on top of the simple API. Beyond Solr, 18F also used [Apiary](http://apiary.io) and [Github](http://github.com), to cobble together a platform for API operations, demonstrating their dedication to agility and speed.

**Simplicity Rules**  
The FBOpen API interface adheres to API simplicity by providing logical, versioned URI for accessing the government business opportunities, with a query and data source parameter allowing you to tailor the source of your query. Then you can filter by noncompetes or closed opportunities, as well as controlling the number of results returned, including common pagination controls developers are used to when working with APIs. FBOpen API does one thing, and does it well--the calling card of successful APis.

[![](https://s3.amazonaws.com/kinlane-productions2/federal-government/fbopen/fbopen-pilot-logo.png)](https://fbopen.gsa.gov/)

**Modern Design Lifecycle**  
Again, demonstrating their grasp of modern technology, 18F employs Apiary to model and design the FBOpen API interface--using [API Blueprint](http://apiblueprint.org/) allowed them to define the API interface in markdown, then deploy a mock interface, interactive API documentation and code samples in a variety of languages. This approach to designing APIs in government is the future for not just providing a machine readable definition of the API, but delivers the documentation and code necessary to onboard any developer in minutes—increasing the chances the API will be integrated with.

**Open By Default**  
The FBOpen API sets the bar for all government APIs, by making sure not just the API is public and accessible, but so is the API design, source code and underlying tooling—allowing anyone to deploy an instance of the FBOpen API. Since FBOpoen is built on Solr, publicly available XML data source, and published on Github, anyone can download or fork, and deploy their own instance of the FBOpen API. This is the definition of an open API.

**Central Key Management With api.data.gov**  
Before you can make calls on the central FBOpen API instance, you must obtain an API key from [api.data.gov](https://api.data.gov/). This should be standard business operations for ALL federal government APIs. Developers shouldn't have to manage separate accounts with each agency, they should be able to request credentials in a single location, and use across all APIs they consume within in the federal government. api.data.gov uses [API Umbrella](https://github.com/NREL/api-umbrella), an open source API management solution developed by National Renewable Energy Laboratory (NREL), and is employed by the GSA in the common API infrastructure available to all agencies.

**Read / Write APIs in Government (kindasorta)**  
I started to cry when I saw that there was not just a GET method for FBOpen, but here was a POST method, allowing for users to add or update opportunities via the API—then I saw it was disabled, and the tears dried up. The option is only available if you deploy your own instance of the API, which in my opinion actually represents the future of read / write APIs in government. I just don't think government can move fast enough, and manage the responsibility of write APIs in all scenarios, and providing open source APIs like FBOpen, that anyone can download, install and allow for adding and updating data can bridge this canyon. If enough trusted instances of the FBOpen can be established outside the federal government firewall, agencies can make their own decision around which sources they want to trust and pull opportunities back into internal systems. With proper certification of API deployments by our government, APIs lie FBOpen can share the load of managing data with private sector, without the risk that comes with doing it all internally.

[![](https://s3.amazonaws.com/kinlane-productions2/federal-government/gsa/gsa-logo.jpeg)](http://gsa.gov/)

**Examples Of What Is Possible With FBOpen API**  
Along with all the essential technical building blocks, 18F provides three examples of what you can build with the FBOpen API, stimulating the imagination of would be developers. While developers are very innovative when it comes to APIs, they often need stimulation when it comes to understanding what is possible within specific domains—the FBOpen examples achieve this, planting seeds of what developers can do, increasing the chance that meaningful integrations with the API will occur.

**Using Their Own API**  
The ulitmate example of what is possible with the FBOpen API, is the fact that they use it for driving the [FBOpen website](https://fbopen.gsa.gov/). Nothing shows developers the value that an API delivers, and that it is a resource that they can depend on, than seeing an API provider use their own API. When government agencies use their own APIs it sends the right signal to developers, while also helping agencies see what developers face when putting government API resources to use.

**Telling The Story Behind FBOpen**  
Via the [FBOpen Github repository](https://github.com/18f/fbopen), 18F tells the story behind the API. Walking us through where the idea came from, what technology went into its development, and demonstrates how to get started, examples of how it can be used, where there are limitations, and what is on the roadmap. This type of storytelling behind an API, especially APIs that are open at every level (which should be default for all government), helps developer put these valuable, open government resources to work—without the story, the API will still be a black box, no matter how open the source code is.

**Humble And Honest**  
As part of the FBOpen documentation and story, 18F is open and honest about their work, stating _"This project is brand new and very incomplete. No guarantees of data completeness or functionality are implied or should be assumed. There is lots to do!”._ This is soooooooo important! APIs will never be perfect, and government agencies should never wait until things are perfect to release in the public sphere--APIs are about iteration and learning, and setting expectations with developers will help them iterate and learn, but also will assist agency owners in iterating and learning as well.

**Clear Licensing**  
The policy restrictions and licensing around government open data and APIs can be confusing. Not all government resources are openly licensed by default, despite what you might think. 18F clearly lays out the license for FBOpen, _"This project constitutes an original work of the United States Government. This is free and unencumbered software released into the public domain. see the LICENSE file for more.”_ This is critical to setting the tone for how developers will integrate with an API, and publishing this front and center is the right way to get it out of the way, eliminating friction with new developers.

I’m trying hard to find some critical feedback for the 18F team, and I really can’t. Sure there are more building blocks I could suggest, but the essential ones are there. FBOpen provides clear value (access to government business opportunities), simple interface, documentation, code samples, on-boarding, and licensing. I guess the only thing I'd recommend is clearer contact and support info—do I go to api.data.gov, 18F or publish issues via the Github repository? Maybe providing a simple block that lays this out for developers on the Github README page.

FBOpen is a model for all government APIs, and shows that 18F the real deal. This approach to deploying API resources in government, one that allow you to use as is in the cloud, or deploy your own instance, IS THE FUTURE OF GOVERNMENT RESOURCES! As I stated above the opportunities for establishing federated networks around government resources, that give birth to new public and private sector partnerships, similar to what is available within the IRS modernized e-file system, is the future of government and the API economy—one where we all share the load.

Nice work 18F, if you can continue this type of work across agencies, you will be the change we've all been talking about in government.