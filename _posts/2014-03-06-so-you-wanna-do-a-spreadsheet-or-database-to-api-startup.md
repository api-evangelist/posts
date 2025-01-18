---
layout: post
title: So You Wanna Do a Spreadsheet or Database To API Startup
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-spreadsheet-db.png
author:
  name: kinlane
tags:
  - Database
  - Data
  - Spreadsheet
---
A question I get regularly at API Evangelist is around the need for spreadsheet to API, and database to API services. Every couple weeks I get DMs and emails from someone who ask what tools are available, and that they were thinking about developing a solution. Right now I have three separate people asking this, and rather than just reply in email I figured I’d write a piece to respond, based upon my experience.

First, let me state that there is a need for simple spreadsheet to API solution. Much of the worlds data is locked up in spreadsheets, and in control of data stewards who don't access to API deployment resources. However, I'm not sure there is a lot of money to be made in providing this as a service, i feels like something that should just be default for all spreadsheet operations—you know like Google Spreadsheet.

Google Spreadsheet allows XML and JSON access to spreadsheets by default. in addition to the full blown [Google Spreadsheet API](https://developers.google.com/google-apps/spreadsheets/). The only problem is with Google Spreadsheet you have some size limitations that make it a solution for only the simplest of data sources. I have written several posts on deploying APIs from Google Docs for both [public](http://apievangelist.com/2013/10/22/deploy-api-public-google-spreadsheet-to-api/) and [private](http://apievangelist.com/2013/11/12/deploy-api-private-google-spreadsheet-to-api/) spreadsheets, and have received numerous requests for a cloud version of this functionality, that would allow anyone to quickly deploy APIs from Google Spreadsheet sources.

I think the fact that Google Spreadsheet is free to use, and has API access to is spreadsheets, make this a real tough space to make money in, even if you do smooth out the process. To further convince people to not reinvent the wheel, there is already the “Wordpress” for data management, called [CKAN](http://ckan.org/), which is, "a powerful data management system that makes data accessible – by providing tools to streamline publishing, sharing, finding and using data.” CKAN is open source, and a tool that city, state, county and federal governments around the globe are downloading and deploying in growing numbers.

Even with the availability of Google Spreadsheet and its API, and data portal solutions like CKAN, this is still a problem I try to tackle from time to time, when I get the same itch as the people who have triggered this post. I’ve created what I call my OnGithub solutions, which allows for data management via Github, and API deployment using simple AWS hosted API framework.

*   **[Data.OnGithub.com](http://data.ongithub.com/)** - My attempt at providing users with a free (if publicly licensed) place to upload and manage their open data that originates in spreadsheets and CSVs within Github repositories. The entire app runs on Github Pages, using HTML, CSS ad JavaScript for core functionality, making it something that can be forked and implemented by anyone.
*   **[API.OnGithub.com](http://api.ongithub.com/)** - My attempt to provide the API layer on top of data.ongithub.com, separating the data management from the API deployment. This application runs as simple PHP API framework, deployed on Linux on AWS.

[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/socrata/socrata-vertical.jpeg)](http://www.socrata.com/)

While this work was interesting, it still didn’t solve the problem of allowing the average data steward to easily manage their data that is warehoused in spreadsheets, and deploy APIs with no technical experience required. However it was a fun exercise to see what is possible for developing open tooling around this problem.

When it actually comes to deploying services that address data management I’ve watched providers like [InfoChimps](http://www.infochimps.com/) try and end up pivoting, and others such as Kasabi and Emergent One try, then go out of business. There are successful providers like [SlashDB](http://www.slashdb.com/), [Junar](http://www.junar.com/), and [Socrata](http://www.socrata.com/), who focus on providing open data platforms, whether it originates from a database or a spreadsheet. In 2014 I predict we will continue to see new startups emerge that promise to solve this problem, but will run into walls when it comes to monetization. There is money to be made in delivering APIs from spreadsheets, there just won’t be VC level money to be made when it comes to converting spreadsheets to APIs, but if you want to provide some open tooling and provide professional services, I think you can make an acceptable living.

The moral of this story is that if you want to do a startup, get funding and offer a data solution, you better demonstrate you have something really new and innovative, otherwise don’t bother, the space is saturated. If you want to develop some open tools, or use existing open tools and help organizations tackle their open data problems, I think there is plenty of opportunity to make both significant change, but also make some money offering sensible consulting services.