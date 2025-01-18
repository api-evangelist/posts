---
layout: post
title: Overview of 11 Places Data APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/CityGrid.png
author:
  name: kinlane
tags:
  - Data
  - APIs
  - Overview
---
Since starting as [API Evangelist](http://apievangelist.com "API Evangelist") here at [CityGrid](http://www.citygrid.com "CityGrid"), I have been asked a couple of times how we stack up against other places APIs. So I went through the 11 other places APIs, gathering info, in an attempt to see what each offered.

* * *

**[![](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/citygrid_logo-300x66.jpg "citygrid_logo")](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/citygrid_logo.jpg)**CityGrid Places API****

**Search Overview -** Providing a places search that can be searched by longitude/latitude, "where" using cities, neighborhoods, zip codes, metro areas, addresses and intersections. Details for each places is also available.

*   **Database Size** - 18 Million US Places
*   **Store / Cache Data** -  No Storage.  Cache up to 15 minutes.
*   **Attribution** - Include logo and phrase “powered by CityGrid; data from Infogroup ©\[YEAR\]”
*   **Multi-Provider IDs** - Yes
*   **Meta Data** - No
*   **Rating / Review** - Yes
*   **Deals / Offers** - Yes
*   **Revenue Share** - Yes
*   **Call Limits** - 10M / Month
*   **Response Format** - XML / JSON
*   **Authentication** - Key
*   **Pricing** - Free
*   **Check-In** - No
*   **Write** - No
*   **Delete** - No

**Other**

*   **Places that Pays** - A program that monetizes the display of, and interaction with, CityGrid places is called Places that Pay.

**URL** - [http://docs.citygridmedia.com/](http://docs.citygridmedia.com/)

* * *

**[![](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/facebook_logo-300x99.jpg "facebook_logo")](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/facebook_logo.jpg)Facebook Graph API**

**Search Overview -** Providing the ability to search the Facebook Graph objects with a “type” of place, and longitude/latitude, keyword search and area to find places listed as objects within Facebook.

*   **Database Size** - Not Found
*   **Store / Cache Data** - No
*   **Attribution** - Yes
*   **Multi-Provider IDs** - No
*   **Meta Data** - No
*   **Rating / Review -Yes**
*   **Deals / Offers** - Yes
*   **Revenue Share** - No
*   **Call Limits** - One call per second
*   **Response Format** - XML / JSON
*   **Authentication** - OAuth
*   **Pricing** - FREE
*   **Check-In** - Yes
*   **Write** - Yes
*   **Delete** - No

**URL** - [http://developers.facebook.com/docs/reference/api/](http://developers.facebook.com/docs/reference/api/)

* * *

**[![](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/factual-logo-315x82-300x78.png "factual-logo-315x82")](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/factual-logo-315x82.png)Factual**

**Search Overview -** Providing a places search that can be searched by latitude/longitude, and “where” using full text search query string.

*   **Database Size** - 55 million entities in 47 countries
*   **Store / Cache Data** - Yes
*   **Attribution** - Yes
*   **Multi-Provider IDs** - Yes
*   **Meta Data** - Yes
*   **Rating and Review** - No
*   **Deals** - No
*   **Revenue Share** - No
*   **Call Limits** - cross ref = 10,000 per day / crosswalk = 500 per day / read = 10,000 per day  / resolve = 100 per day
*   **Response Format** - JSON
*   **Authentication** - Unsigned and signed requests w/ 2-legged OAuth.
*   **Pricing** - Free
*   **Write** - Yes
*   **Delete** - No

**Other:**

*   **Select** - What fields to include in the query.
*   **Places API - Resolve** - Resolve is an entity resolution API that makes partial records complete, matches one entity against another, and assists in de-duping and normalizing datasets.
*   **Places API - Crossref** - The Crossref API enables you to find the URLs for pages that mention a specific business or point of interest or vice versa.
*   **Places API - Restaurants** - The U.S. Restaurant table contains Factual's core places attributes in addition to 43 extended attributes on 800,000+ restaurants, bars, and casual eateries including datatypes such as cuisine, ratings, hours of operations, and price.

**URL** - [http://developer.factual.com/](http://developer.factual.com/)

* * *

**[![](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/foursquare_logo-300x93.png "foursquare_logo")](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/foursquare_logo.png)Foursquare Venue API**

**Search Overview -** Providing a places search that can be searched by  hierarchical list of categories, longitude/latitude, “where” using search term, managed by requesting users, over time range, trending and exploration.

*   **Database Size** - Could Not Find
*   **Store / Cache Data** - Okay to keep caches of foursquare data as long as they are refreshed at least every 30 days.
*   **Attribution -Yes**
*   **Multi-Provider** - Yes
*   **Meta Data** - Yes
*   **Rating and Review** - Yes
*   **Deals** - No
*   **Revenue Share** - No
*   **Call Limits** - 5,000 requests per hour
*   **Response Format** - JSON
*   **Authentication** - OAuth 2.0 w/ To make a userless request, specify your consumer key's Client ID and Secret instead of an auth token in the request URL.
*   **Pricing** - Free
*   **Write -Yes**
*   **Delete** - No

**Other**:

*   **Actions** - You can edit, flag, mark to do, propose edit for venues in Foursquare database.

**URL** - [https://developer.foursquare.com/overview/venues](https://developer.foursquare.com/overview/venues)

* * *

**[![](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/fwix_logo_300.jpg "fwix_logo_300")](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/fwix_logo_300.jpg)Fwix**

**Search Overview -** Providing a places search that can be searched by  
latitude/longitude, and text search based upon categories, address, city, province, postal code, country, neighborhood and text keyword.

*   **Database Size** - 23M in US.
*   **Store / Cache Data** - No storage.  Yes to cache.
*   **Attribution** - Yes
*   **Multi-Provider IDs** - No
*   **Meta Data** - Yes
*   **Rating / Review** - No
*   **Deals / Offers** - No
*   **Revenue Share** - Yes
*   **Call Limits** - 5,000 calls per unique user per day
*   **Response Format** - XML / JSON
*   **Authentication** - Key
*   **Pricing** - Free
*   **Write** - Yes
*   **Delete** - Yes

**Other**:

*   **Geotagger Methods** - Returns places geotagged to a given web page.
*   **Content Methods** - Returns geotagged content in or near a location.

**URL** - [http://fwix.com/developer\_tools/api](http://fwix.com/developer_tools/api)

* * *

**[![](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/google-places-logo-square.gif "google-places-logo-square")](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/google-places-logo-square.gif)Google Places API**

**Search Overview -** Providing a places search that can be searched by latitude/longitude, keyword matched against all fields, name of place, type of place restricted by radius.   As well as pulling details for each places.

*   **Database Size** - Could not find
*   **Store / Cache Data -**
*   **Attribution** - "Powered by Google" logo is displayed above or below the data
*   **Multi-Provider IDs** - No
*   **Meta Data** - No
*   **Rating / Review** - Yes
*   **Deals / Offers** - No
*   **Revenue Share** - No
*   **Call Limits** - 1 000 requests per 24 hour period
*   **Response Format** - XML / JSON
*   **Authentication** - Key
*   **Pricing** - Free
*   **Check-In** - Yes
*   **Write** - Yes
*   **Delete** - Yes

**URL** - [http://code.google.com/apis/maps/documentation/places/](http://code.google.com/apis/maps/documentation/places/)

* * *

**[![](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/infochimps-logo-300x122.jpg "infochimps-logo")](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/infochimps-logo.jpg)InfoChimps**

**Search Overview -** Providing a places search that can be searched by longitude/latitude with radius, address, bounding box or IP address.

*   **Database Size** - Could not find
*   **Store / Cache Data** - Yes
*   **Attribution** - Yes
*   **Multi-Provider IDs** - No
*   **Meta Data** -  No
*   **Rating and Review** - No
*   **Deals / Offers** - No
*   **Revenue Share** - No
*   **Call Limits** - Couldn’t Find
*   **Response Format** - XML / JSON
*   **Authentication** - Key
*   **Pricing** - Free w/ Premium Pricing
*   **Check-In** - No
*   **Write** -  Yes
*   **Delete** - Yes

**URL** - [http://www.infochimps.com/datasets/business-places-by-locationary](http://www.infochimps.com/datasets/business-places-by-locationary)

* * *

**[![](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/nokia-developer.jpeg "nokia-developer")](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/nokia-developer.jpeg)Nokia**

**Search Overview -** Providing a JavaScript places search that can be searched by search term, with a detail search for display by JS widget.

*   **Database Size** - Not Found
*   **Store / Cache Data** - No
*   **Attribution** - Yes
*   **Multi-Provider IDs** - No
*   **Meta Data** - No
*   **Rating / Review** - No
*   **Deals / Offers** - No
*   **Revenue Share** - No
*   **Call Limits** - Not Found
*   **Response Format** - JSON
*   **Authentication** - None
*   **Pricing** - Free
*   **Check-In** - No
*   **Write** - No
*   **Delete** - No

**URL** - [http://api.maps.nokia.com/places/index.html](http://api.maps.nokia.com/places/index.html)

* * *

**[![](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/yahoo_geo_logo_med.png "yahoo_geo_logo_med")](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/yahoo_geo_logo_med.png)Yahoo GeoPlanet**

**Search Overview -** Providing a places search that can be searched by type, county, state, country, oceans, seas, continents, hierarchy and full text search.  Also returns places detail by ID.

*   **Database Size** - Could not find
*   **Store / Cache Data** - No
*   **Attribution** - Must contain the copyright notice "Copyright © Yahoo! Inc. 2008, All Rights Reserved"
*   **Multi-Provider IDs -No**
*   **Meta Data** - Yes
*   **Rating / Review** - No
*   **Deals / Offers** - No
*   **Revenue Share** - No
*   **Call Limits** - “Reasonable Request Volume”
*   **Response Format** - JSON / XML
*   **Authentication** - Key
*   **Pricing** - Free
*   **Write** - Yes
*   **Delete** - Yes

**URL** - [http://developer.yahoo.com/geo/geoplanet/](http://developer.yahoo.com/geo/geoplanet/)

* * *

**[![](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/Yelp_Logo-300x153.jpg "Yelp_Logo")](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/Yelp_Logo.jpg)Yelp API**

**Search Overview -** You can search location using geo bounding box, longitude and latitude, neighborhood, address or city and filter listings by “where”, using a list of support categories.   As well as pulling details for each places.

*   **Database Size** - Could not find
*   **Store / Cache Data -No**
*   **Attribution** - Yes with logo
*   **Multi-Provider IDs** - No
*   **Meta Data** - Yes
*   **Rating / Review** - Overall count with 3 review excerpts
*   **Deals / Offers** - Yes
*   **Revenue Share** - Yes with Commission Junction
*   **Call Limits** - 10,000 calls/day
*   **Response Format** - JSON
*   **Authentication** - OAuth
*   **Pricing** - Free
*   **Check-In** - No
*   **Write** - No
*   **Delete** - No

**URL** - [http://www.yelp.com/developers/documentation/v2/overview](http://www.yelp.com/developers/documentation/v2/overview)

* * *

**[![](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/yp-developer-center-300x67.png "yp-developer-center")](http://www.citygridmedia.com/developer/wp-content/uploads/2012/03/yp-developer-center.png)YP**

**Search Overview -** Providing a places search that can be queried by keyword and longitude/latitude, street address, city, postal code, Neighborhood, state, points of interest or by phone number with a radius.  Places details are also provided.

*   **Database Size** - Could not find
*   **Store / Cache Data** - No
*   **Attribution** - Yes
*   **Multi-Provider IDs** - No
*   **Meta Data** - No
*   **Rating / Review** - yes
*   **Deals / Offers** - Yes
*   **Revenue Share** - Yes
*   **Call Limits** -  50,000 requests per day.
*   **Response Format** - XML / JSON
*   **Authentication** - Key
*   **Pricing** - Free
*   **Check-In** - No
*   **Write** - No
*   **Delete** - No

**URL** - [http://developer.yp.com/](http://developer.yp.com/)

If you see anything missing or incorrect, let me know at @citygridapiteam.