---
layout: post
title: Making APIs Accessible to Regular Users with Widgets
url: >-
  http://apievangelist.com/2011/09/25/making-apis-accessible-to-regular-users-with-widgets/
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Recovery-Gov-Logo.png
author:
  name: kinlane
tags:
  - Access
  - APIs
---
kinlane-productions2.s3.amazonaws.com [![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/federal-government/recovery-org/Recovery-Gov-Logo.png)](http://www.recovery.gov/FAQ/Developer/Pages/RecoveryAPI.aspx)

I was reviewing the [Recovery API](http://www.recovery.gov/FAQ/Developer/Pages/RecoveryAPI.aspx) yesterday, which gives you a RESTful API for exploring where all the money went as part of our governments Recovery Act. I have a sort of obsession with this kind of government data, and began playing with, and tracking on where the stimulus money went in my home state of Oregon.

I started hacking on the API by manipulating the query string variables to get different types of responses on how stimulus money was spent by city, county and project types like roads, education and the environment. Since I’m a developer I’m very comfortable with hacking on the URL query string like this, but I noticed they also had a tool they called the, “[Advanced Recipient Data Search Widget](http://www.recovery.gov/FAQ/Developer/Pages/AdvSearchWidget.aspx "Advanced Recipient Data Search Widget")”.

The advanced recipient data search widget allows me to adjust the same fields, but using an actual form. Using the widget anyone can easily build requests against the Recovery API without being a developer, and I even found it allowed me to explore and understand the API quicker and easier. The widget even displays the final request string you can copy and paste and see the XML results in the browser or just as results grid on the screen. And you can also choose to download the results as a CSV when done.

kinlane-productions2.s3.amazonaws.com [![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/federal-government/recovery-org/recovery-org-widget-screenshot.gif)](http://www.recovery.gov/FAQ/Developer/Pages/AdvSearchWidget.aspx)

The form could be better. It does not provide drop-down values for each of the fields, and the pop-up window is a little clunky. It still is a very useful tool helping not only developers get up and running, but allows the average user to come in and use, understand and export results from the Recovery API.

I’m a big fan of [API explorer and console tools](/buildingblocks/api_explorer.php "API Explorer and Console Tools"), but they still often are built for developers, by developers to explore and understand how an API works. The Recovery API’s, advanced recipient data search widget provides a much needed bridge for the average user to take advantage of the power of an API. At [Mimeo](http://www.mimeo.com "Mimeo"), I’m taking many of my code samples and prototypes and making them live to not only show developers what is possible, but it also allows the average user to come in and use the [print and publishing APIs](http://developer.mimeo.com "Print and Publishing APIs") without writing code.

I think it is important for us to provide this type of bridge within our APIs so the average user can come and take advantage of our APIs. APIs are not just for developers, and these types of tools can really demonstrate the value of APIs to the average business person, which might just motivate them to find a developer and commission deeper integration with our APIs.