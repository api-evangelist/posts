---
layout: post
title: 'Developer Portals On Github: Example From Socrata'
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-service-providers/socrata/socrata-data-experience-logo.png
author:
  name: kinlane
tags:
  - Github
  - Portal
  - Portals
  - Git
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/socrata/socrata-data-experience-logo.png)](http://www.socrata.com/)

Civic data platform [Socrata](http://www.socrata.com/) has launched a [new developer area](http://dev.socrata.com/) to support developers who are building apps on top of city, county, state and federal data, as well as the publishers of this data. A release of a new developer area is always worthy of note in my tracking of the API space—anytime I see a tweet or blog post about the release of new developer area, I will visit to see what is going on.

The first thing I find particularly interesting about Socrata’s approach is that they published as a Github repository, using Github Pages. We are seeing more government developer areas move onto Github, because of the easy site hosting with Github Pages, and the benefits of managing your projects with Git, as well as social benefits of Github and its underlying API.

**Application Developers**  
Socrata provides a wealth of information for application developers, including a getting started guide, robust API documentation, client libraries, and D3.js assistance for those looking to build visualizations on top of government data.

**Data Publishers**  
On the other side of the coin, Socrata also provides data publishers with what they need to get started, clean and organize their data, and the ability publish or sync with the Socrata platform, providing R, Ruby and Java libraries that really jumpstart integration.

The second thing I really like about the new Socrata portal is that it is more educational than it is technical, and tailored to onboard the next generation of government data publishers and consumers. Socrata doesn’t just provide details about API endpoints, they provide information on what is JSON and HTTP verbs. From years of experience, Socrata has a firm grasp of the amount of education the space needs to get up to speed, and it shows in their developer portal.

[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/socrata/socrata-developers.png)](http://dev.socrata.com/)

To provide some critique of the implementation, the formatting of the text wasn’t the easiest to consume. For some reason the font-size, density and layout made it hard to spend too scan and spend time with. I’d recommend taking a look at [FullContact API](http://www.fullcontact.com/developer/docs/) in separate browser tab, then flip back and forth, to demonstrate what I mean. Next I think Socrata could go further with contrasting things between developers and non-developers—the potential is there to really onboard people who don’t write code, an [example of this in action is over at Dwolla](https://developers.dwolla.com/).

As part of my API monitoring, I think I will have to add some sort of tag for APIs that deploy their developer area via Github, so I can keep track of interesting implementations. When your developer area is published on Github, I just think it invites collaboration, and participation from the community.