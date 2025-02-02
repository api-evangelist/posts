---
layout: post
title: Using Excel As An API Datasource And An API Client For The Masses
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-excel-icon.jpg
author:
  name: kinlane
tags:
  - Data
  - Client
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-excel-icon.jpg)](http://spreadsheets.apievangelist.com)

I’ve been tracking on the usage of spreadsheets in conjunction with APIs for several years now. Spreadsheets are everywhere, they are the number one data management tool in the world, and whether API developers like or not, spreadsheets will continue to collide with the API space, as both API providers, and consumers try to get things done using APIs.

APIs are all about getting access to the resources you need, and spreadsheets are being used by both API providers and consumers to accomplish these goals. It makes complete sense to me that business users would be looking for solutions via spreadsheets, as they are one potential doorway to hacking for the average person—writing macros, calculations, and other dynamic features people execute within the spreadsheet.

I know IT would like to think their central SQL, MySQL, Postgres, Oracle and other database are where the valuable data and content assets are stored at a company, but in reality the most valuable data resources are often stored in spreadsheets across an organization. When it comes time to deploying APIs, this is the first place you should look for your datasources, resulting in Microsoft Excel and Google Spreadsheet to API solutions like we’ve seen from [API Spark](http://bit.ly/1sgwGpq).

I’m seeing spreadsheets used by companies to deploy APIs in some of the following ways:

*   **Microsoft Excel -** Turning Microsoft Excel spreadsheets directly into APIs. by taking a spreadsheet, and generating an API is the fastest way to go from closed data resource to an API for anyone to access, even without programming experience.
*   **Google Spreadsheet -** Mounting public and private Google Spreadsheets is an increasingly popular way to publish smaller datasets as APIs. Since Google Spreadsheets is web-based, it becomes very easy to use the Google Spreadsheet API to access any Spreadsheet in a Google account, then generate a web API interface that can allow for reading or writing to a spreadsheet data source via a public, or privately secured API.

Beyond deploying APIs I’m seeing API providers provide some innovative ways for users to connect spreadsheets to their APIs:

*   **Spreadsheet as Client -** Electronic parts search API Octopart has been providing a bill of materials (BOM) solution via [Microsoft Excel](http://apievangelist.com/2013/07/31/giving-excel-power-users-the-api-driven-resources-they-need/), and now [Google Spreadsheets](http://apievangelist.com/2014/08/25/ocotoparts-open-source-google-spreadsheet/) for their customers--providing a distributed parts catalog in a spreadsheet, that is kept up to date via public API.
*   **Spreadsheet as Cache -** I’ve talked with U.S. Census and other data providers about how they provide Microsoft Excel and Google Spreadsheet caches of API driven data, allowing users to browse, search and establish some sort of subset of data, then save as a spreadsheet cache for offline use.
*   **Spreadsheet as Catch-All -** Spreadsheets aren’t always being used just about data, you can see [Twilio storing SMS](http://apievangelist.com/2014/08/20/route-sms-messages-to-google-spreadsheets-via-twilio-api-with-twiliosheet/), [NPR using as crowdsourced engine](http://apievangelist.com/2013/09/13/using-excel-for-crowdsourced-data-gathering-and-reporting/), making spreadsheets into a nice bucket for catching just about anything an API can input or output.

Moving out of the realm of what API providers can do for their API consumers with spreadsheets, and into the world of what API consumers can do for themselves, you start to see endless opportunities for API integration with spreadsheets using reciprocity providers:

*   **[Zapier](https://zapier.com) -** There are five pages of recipes on the popular API reciprocity provider Zapier that allow you to work with Google Docs, and 57 pages that are dealing directly with Google Drive, providing a wealth of tools that non-developers (or developers) can use when connecting common APIs up to Google Spreadsheets.

I’ve seen enough movement in the area of Microsoft Excel and Google Spreadsheets being used with APIs to warrant closer monitoring. To support this I've started publishing most of my research to an [API Evangelist spreadsheet research site](http://spreadsheets.apievangelist.com/), which will allow me to better track, curate, tag, and tell stories around spreadsheets and APIs.

As I do with my [60+ API research projects](http://kinlane.com/projects/), I will update this site when I have time, publishing anything I've read, written, and companies I think are doing interesting things spreadsheets and APIs. I'm pretty convinced that spreadsheets will be another one of those bridge tools we use to connect where we are going with APIs, with the reality of where the everyday person is, just trying to get their job done.

_**Disclosure:** API Spark is an API Evangelist partner._