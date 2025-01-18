---
layout: post
title: Common Data Sources To API Definition
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-google-docs.png
author:
  name: kinlane
tags:
  - Data
  - Definition
---
I've been working through several demos of how to go from common data sources like MySQL and Google Spreadsheet to API over the last couple of weeks. So far I have five basic working demos:

*   [MySQL to API](http://apievangelist.com/2013/10/21/deploy-api-mysql-to-api)
*   [Local JSON to API](http://apievangelist.com/2013/10/21/deploy-api-json-to-api)
*   [Github JSON to API](http://apievangelist.com/2013/10/22/deploy-api-github-json-to-api)
*   [Public Google Spreadsheet to API](http://apievangelist.com/2013/10/22/deploy-api-public-google-spreadsheet-to-api)
*   [Private Google Spreadsheet to API](http://apievangelist.com/2013/11/12/deploy-api-private-google-spreadsheet-to-api/ "Private Google Spreadsheet to API")

These demos are meant to show how easy it is to deploy a simple API from common places you already have data stored. Right now I'm building them in PHP, but will also be building Python, Ruby and Node.JS versions.

These exercises are meant for my newbie readers but are also helping me see API deployment in different ways. I realize how difficult it is to write code that will work for all scenarios. There is a lot of custom work on the data store side, as well as possible the API side, making me feel like it is best to use an API definition in the middle.

With this in mind, the next phase of my API deployment tools will be about generating API definitions, which currently will be [Swagger](http://bit.ly/1j2KERU), but will also develop [RAML](http://bit.ly/16ZTZYt) and [API Blueprint](http://bit.ly/1cl8tCc) versions of the same code eventually.

Once I have some data store to Swagger tooling I will evolve some of the code I have for generating APIs from Swagger definitions.

Then I will have the different custom parts decoupled from each other, all centered around an API definition and data model which I can publish in [API Commons](http://bit.ly/1e27KIc) and evolve in an open, collaborative environment where everyone can benefit, and contribute to my API work.