---
layout: post
title: A Walk Through Data.gov with Some Thoughts on Whats Next
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Datagov.png
author:
  name: kinlane
tags:
  - Data
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/data-gov/Datagov.png)](http://www.data.gov/)

[Data.gov](http://www.data.gov/) for me is like being a kid in a candy store. My experience with data goes back to High School when I got my first programming job right out of Mr. Smiths computer class. I built Cobol database for use by school districts in the State of Oregon, jump-starting my career as a programmer. Ever since I’ve had an obsession with data, and specifically with government data, and [trying to make sense of how our government operates](http://oregonbudget.laneworks.net/ "trying to make sense how government operates").

I have been playing with various data-sets at Data.gov since they launched, but today I finally spent some time evaluating their approach to delivering the Data.gov ecosystem. It is a pretty robust approach to opening up our government, agency by agency.

The Data.gov sites centers around data-sets available by agency, category and topics, with the ability to view as raw data, files & documents, charts, maps, calendars, filtered views and interactive data-sets. Data is made available in a wide range of formats including .csv, .xls, .xml, .rdf, .kml and .shp files when each format applies.

Data.gov is not just for developers, many of the data-sets are available in interactive formats, as well as a wide variety of applications, making the data accessible and usable by anyone. A couple examples of applications include [product recalls](http://explore.data.gov/Wholesale-and-Retail-Trade/All-Product-Recalls/ezdk-xtg7 "product recalls"), [travel warnings](http://explore.data.gov/National-Security-and-Veterans-Affairs/Travel-Warnings/hkvp-3krc "travel warnings") and [hospital compare](http://explore.data.gov/Social-Insurance-and-Human-Services/Hospital-Compare/g4a8-s9zu "hospital compare"). What really makes these apps valuable, is the data-sets are usually available alongside, so if you want to dive in deeper and use the data in other ways, you can.

Since Data.gov is a the top level site for the open data initiative, there is an obvious need to break it down into some smaller communities. These communities include:

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/data-gov/Energy-Data-Gov.png)](http://www.data.gov/communities/energy "Energy")

*   **[Energy](http://www.data.gov/communities/energy "Energy")** - Data, tools, apps, challenges, resources, blog, forums centered around energy data, meant to facilitate public discussion of and awareness on our Nation’s energy activity.
*   **[Health](http://www.data.gov/communities/health "Health")** - Data, apps, blog and forum centered around health and health care, intended to help the public make better informed decisions about their health.
*   **[Law](http://www.data.gov/communities/law "Law")** - Data and tools providing administrative decisions, case filings, legal interpretations and agency directives from the Executive Branch for legal professionals, researchers, the business community and the general public.

The energy, health and law communities at Data.gov represent different areas of our government. I’m assuming they will add education, with data from [data.ed.gov](http://data.ed.gov/ "data.ed.gov") as a community in the near future. There is a “learn” section off the home page of Data.gov, but it doesn’t have the community building tools the other areas have, with just links to external sites and resources.

There are two other communities, that are more focused on technology, as opposed to areas of our government:

*   **[Open Data](http://www.data.gov/communities/opendata "Open Data")** - Blog, forum and Twitter stream dedicate to the concept of open data and the government, and the community being built around it.
*   **[Semantic Web](http://www.data.gov/communities/semantic "Semantic Web")** - Apps, blog and forums dedicated to evolving linked data amongst the Data.gov open data initiative.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/data-gov/Environmental-Compliance-Data.png)](http://explore.data.gov/Geography-and-Environment/EPA-Enforcement-and-Compliance-History-Online-ECHO/c8kh-iqih "Environmental and Compliance Data")

There is one more community called **"[Restore the Gulf](http://www.data.gov/restorethegulf "Restore the Gulf")"**, which is focused around the specific issue that we are facing down in the Gulf of Mexico. Hopefully it is the start of a third type of Data.gov community that can address various issues our country faces, pulling together data, tools and resources to build a community to address the issue.

I can see the work that went into building community around the areas of government, technology and issues, but as its coming together it still looks a little disjointed, with learning not really coming together as an actual education community and “developers corner” off the home page ending up linking to the open data community, creating a little redundancy. Its a great effort to bring together community, with just a little more structure, and presence, the site can really deliver on this vision.

There are other sections tying together the site like an [about page](http://www.data.gov/about "about page"), [frequently asked questions](http://www.data.gov/faq "frequently asked questions") and [contact information](http://www.data.gov/contact "contact information"). Data.gov also addresses [data](http://www.data.gov/datapolicy "data policy") and [privacy](http://www.data.gov/privacypolicy "privacy policy") with policy pages and even speaks to [accessibility](http://www.data.gov/accessibility "accessibility") which is something you don’t see in many data and API ecosystems. There are also [tutorials](http://www.data.gov/developers#TB_inline?height=200&width=400&inlineId=tb_external "tutorials"), [videos](http://www.data.gov/developers#TB_inline?height=200&width=400&inlineId=tb_external "videos") and a [whats new](http://www.data.gov/whatsnew "whats new") section providing other resources to get everyone understanding the vision, how to use the resources available, as well as keeping users engaged with any new announcements.

The site does a great job showcasing applications and important data-sets with a gallery, also using feature displays on the home page and within community pages. These are great for exposing some of the great data-sets and applications available within the site. This kind of discovery is very important to introducing users to whats available without feeling overwhelmed by the large amounts of data available.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/data-gov/Featured-Tool.png)

Overall Data.gov does an amazing job of delivering huge amounts of quality government data-sets in very usable formats, making it interactive and providing applications for working with the data. There are also APIs available for accessing the data, which is extremely important in empowering developers to build web an mobile applications, crunch data and build visualizations that shedding light into how our government operates, increasing participation. The Data.gov platform and APIs are delivered by a service provider called [Socrata](http://www.socrata.com/ "Socrata"). I will provide more coverage of the APIs and Socrata after I work with them a little more, and gain a better understanding of how they work.

A lot of effort has been put into building community around the Data.gov initiative, but as I mentioned in my last post about [bringing awareness to Data.gov with grassroots evangelism](/2011/10/24/bringing-awareness-to-data-gov-with-grassroots-evangelism/ "Bringing Awareness to Data.Gov with Grassroots Evangelism"), I think there is a lot more to do in making sure people everywhere are aware Data.gov exists and do a little more to bring them to the site, by reaching out to the online communities where they already exists, like [Github](http://github.com "Github"), [Stack Exchange](http://stackexchange.com/ "Stack Exchange") and [Hacker News](http://news.ycombinator.com/ "Hacker News"), participating in their community, listening, joining and taking part in their world.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/data-gov/digital-town-hall.png)

There is a lot that can be done online to create awareness around the resources our government is making available, but a robust online presence is not enough. There needs to be a grassroots effort to bring Data.gov to every small town, engaging the public within each community via schools, libraries and other community gathering places--make them aware of the rich resources our government has exposed and challenge them to come together and help us find the answers that make our government operate more efficiently.

[Data.gov](http://www.data.gov/) is a an excellent start, next we need to increase our governments presence online and offline, creating the feedback loop that will bring developers, data scientists and our brightest minds together within the communities available at Data.gov and beyond.