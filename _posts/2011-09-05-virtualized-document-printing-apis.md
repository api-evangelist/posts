---
layout: post
title: Virtualized Document Printing APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/mimeo-logo-400.png
author:
  name: kinlane
tags:
  - APIs
  - Print
---
[![](http://kinlane-productions2.s3.amazonaws.com/mimeo-logo.jpg)](http://www.mimeo.com/)Even though I cover the entire industry around APIs here on [API Evangelist](http://www.apievangelist.com "API Evangelist"), I also am the API Evangelist for [Mimeo Connect](http://developer.mimeo.com "Mimeo Connect").   Mimeo is a printing API that allows you to print a wide variety of business documents, using your Mimeo.com account.  Its pretty powerful stuff, if you think about it, an API that is connected to 3 print facilities.  

The API seems pretty straightforward at first glance, but developers seem to be encountering three major obstacles:

*   **Mimeo.com Accounts** - Users don’t like having to get a developer account as well as sandbox and live Mimeo.com accounts to work with the API
*   **Mimeo Documents** - Developers don’t really have time to build and define the documents before integration, they just want to print a specific document, and pass some settings to change it up.
*   **Sandbox and Live Environments** \- It is great that Mimeo has sandbox and live environments, but developers were expected to maintain two separate environments, just to use the system.

[![](http://kinlane-productions2.s3.amazonaws.com/mimeo/posters-sample.png)](http://mimeoconnect.3scale.net/wiki/poster-printing-api) These three areas proved to be the difference between some users adopting, and others walking away.  There was too much work in navigating the world of Mimeo accounts and documents.  This isn’t hard if your already a Mimeo web to print user, but if your a developer you just want to print.    
  
So I created four virtualized print APIs.   I took a REST framework and deployed four separate “[document printing APIs](http://mimeoconnect.3scale.net/ "Document Printing APIs")”:

*   [Poster Printing API](../../2011/09/05/api-stack-large-format-printing-with-the-mimeo-connect-poster-printing-api/ "Poster Printing API")
*   [Flyer & Brochure Printing API](../../2011/09/05/api-stack-single-sheet-printing-with-the-mimeo-connect-flyer-&-brochure-printing-api/ "Flyer & Brochure Printing API")
*   [Card Printing API](../../2011/09/05/api-stack-card-printing-with-the-mimeo-connect-card-printing-api/ "Card Printing API")
*   [Spiral Notebook API](../../2011/09/05/api-stack-bound-document-printing-with-the-mimeo-connect-spiral-notebook-printing-api/ "Spiral Notebook API")

Then using [3Scale self-service API management solution](../../serviceproviders/3scale.php "3Scale API Management Solution") I deployed an API area to handle documentation, forum and developer registration and API key management.  Each API has seven methods for ordering print documents:

*   Proof (POST)
*   Proof (GET)
*   Quote (GET)
*   Shipping Options (GET)
*   Order Quote (GET)
*   Place Order (POST)
*   Order Status (GET)

[![](http://kinlane-productions2.s3.amazonaws.com/mimeo/Spiral-Notebook-Example-Image.png)](http://mimeoconnect.3scale.net/wiki/spiral-notebook-printing-api) All a developer has to do is [register for a set of keys](http://mimeoconnect.3scale.net/plans "register for a set of keys"), grab a code sample and get to work.  They don’t have to setup a Mimeo account or build the documents they want to use.  If they want a poster, they use the [Poster Printing API](http://mimeoconnect.3scale.net/wiki/poster-printing-api "Poster Printing API") and pass the size, paper, mounting and lamination settings, along with the URL of the PDF they want to print.  
  
These four APIs represent a process I will use to virtualize other API instances on top of the Mimeo Connect REST API, and possibly other APIs too.  It is pretty quick for me to bundle the data, settings, and code for a new virtualized API and deliver an entirely new type of document printing API.   

This will give me an agile way to play around with new configurations of APIs, measure their response using the [3Scale API](http://www.3scale.net/ "3Scale") analytics, and decide whether or not I put more resources into an specific type of API.