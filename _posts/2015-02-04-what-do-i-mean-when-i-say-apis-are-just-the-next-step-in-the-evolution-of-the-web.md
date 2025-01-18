---
layout: post
title: >-
  What Do I Mean When I Say APIs Are Just The Next Step In The Evolution Of The
  Web?
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Web
  - APIs
---
[![](https://s3.amazonaws.com/kinlane-productions2/federal-government/global-change-information-system/global-change-information-system.png)](https://data.globalchange.gov/)

I remember the vision clearly from 2004, when I first changed the URL for my Delicious social bookmarking account to make it return a list of bookmarks as XML instead of HTML. It was a vision of the programmable web--where everything I explored on the Internet, wasn’t just consumable, and right below the surface of any website or application I was using, there was also a machine readable version, allowing me to build whatever I desired.

People are often surprised when they realize I do not have anything to sell them, and that I evangelize that APIs are not some new product, but just the next step in the evolution of the web. This is easy to say, however it can be much harder to demostrate to the “normals”, leaving me always hundting for easy to understand API implementations I can use to help bring me people closer to understanding.

Steve Ziegler ([@stevezieglerva](https://twitter.com/Stevezieglerva)) introduced to me to a great new example of this in the wild. An API I haven’t come across before, and I was pleasantly surprised to see it was a partnership between Department of Commerce, Energy, Interior, State Department, Transportation, EPA, Health & Human Services, NASA, National Science Foundation, Smithsonian, USAID, and USDA.

According to their own description the [Global Change Information System](https://data.globalchange.gov/) is:

> _The US Global Change Research Program (USGCRP) has established the Global Change Information System (GCIS) to better coordinate and integrate the use of federal information products on changes in the global environment and the implications of those changes for society._

For me the Global Change Information System is an example of how websites, linked data, and APIs should work in concert, but is something I understand very little about how to actually do. The _GCIS_ platform organizes an amazing amount of information, all the people, organizations, and relationships involved, in a very elegant way-you can start seeing in action by browsing the database, by clicking on the menu in top left corner.

[![](https://s3.amazonaws.com/kinlane-productions2/federal-government/global-change-information-system/gcis-api-report-view.png)](https://data.globalchange.gov/)

Immediately I notice how structured everything, then as I scroll to bottom I see that everything is available in a machine readable format. What is even cooler, is that it isn’t just available as JSON, you get it in YAML, Turtle, RDF, and some formats I’m not familiar with. Then of course, you get a robust, yet simple web API as well.

[![](https://s3.amazonaws.com/kinlane-productions2/federal-government/global-change-information-system/gcis-api-reference.png)](https://data.globalchange.gov/api_reference)

I’m impressed with the amount of detail available in the Global Change Information System, and the amount thought put into the relationships between all the information, and actors involved. It makes me optimistic for what can come out of government, and that something so forward thinking is being applied to an area as import as the environment.

I’m just getting going reviewing the [Global Change Information System API](https://data.globalchange.gov/api_reference), and will make more time to evaluate how it works under the hood, maybe generating a Swagger spec for the interface, to help me better understand how it works. I’m also going to reach out to them and see if I can get more information on the story behind, and possibly what the roadmap looks like—making it likely you will see more stories about it in the near future.