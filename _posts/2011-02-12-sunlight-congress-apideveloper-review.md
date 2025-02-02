---
layout: post
title: Sunlight Congress API - [Developer Review]
url: http://apievangelist.com/2011/02/12/sunlight-congress-api--developer-review/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Review
---
[![](http://kinlane-productions2.s3.amazonaws.com/sunlight-labs/sunlight-lab-congress.png)](http://sunlightfoundation.com/)[Sunlight Labs has released an API](http</strong> - //sunlightlabs.com/blog/2011/the-real-time-congress-api/) that will help address the [Sunlight Foundation's](http://sunlightfoundation.com/) mission - making information about government more open and transparent.

The [Sunlight Congress API](http</strong> - //services.sunlightlabs.com/docs/Sunlight_Congress_API/) provides an interface for developers to pull Members of Congress's information, including name, party, location, email addresses, website information, and much more.

The [Sunlight Congress API](http</strong> - //services.sunlightlabs.com/docs/Sunlight_Congress_API/) is a RESTful API that returns JSON or XML, and uses an application key for authentication.

The URL looks like:

*   [http://services.sunlightlabs.com/api/api.method.format?apikey=YOUR\_API\_KEY&params](http</strong> - //services.sunlightlabs.com/api/api.method.format?apikey=YOUR_API_KEY&params)

The Sunlight Congress API provides the following methods:

**Legislator**

*   **legislators.get** - get all information on a single legislator
*   **legislators.getList** - get information on all legislators meeting certain requirements
*   **legislators.search**kinlane-productions2.s3.amazonaws.comtors
*   **legislators.allForZip** - get information on all legislators that represent some portion of a given zip code (typically 2 senators + 1 or more representatives)
*   **legislators.allForLatLong** - get information on all legislators that represent a given latitude/longitude

![](http://kinlane-productions.s3.amazonaws.com/sunlight-labs/sunlight-labs-112th-congress.jpg) **District**

*   **districts.getDistrictsFromZip** - get district(s) that a given zip code falls within
*   **districts.getZipsFromDistrict** - get zip codes that fall within a given district
*   **districts.getDistrictFromLatLong** - get district that contains a location identified by a latitude/longitude

**Committee**

*   **committees.getList** - get list of committees matching certain criteria
*   **committees.get** - get details on a committee including its subcommittees and members
*   **committees.allForLegislator** - get all committees that a given legislators serves on

Sunlight Labs provides official code libraries in [Python](http://github.com/sunlightlabs/python-sunlightapi/) and [Ruby](http://sunlight.rubyforge.org/) and gives links to other PHP and Java code libraries.

In addition to using the API, you can also [download a full dump of all the congressional data](http://github.com/sunlightlabs/apidata/raw/master/legislators/legislators.csv), as well as photos of the [112th Congress](http://en.wikipedia.org/wiki/112th_United_States_Congress "112th United States Congress").

###### Related articles

*   [Sunlight Foundation Releases Real Time Congress API](http://www.readwriteweb.com/hack/2011/02/sunlight-foundation-releases-real-time-api.php) (readwriteweb.com)
*   [Sunlight Labs Needs Your Help to Keep the Fires Burning](http://blog.programmableweb.com/2010/12/16/sunlight-labs-needs-your-help-to-keep-the-fires-burning/) (programmableweb.com)
*   [History of APIs - Birth through Social](http://apievangelist.com/2011/02/10/history-of-apis-birth-through-social/) (apievangelist.com)