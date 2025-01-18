---
published: true
layout: post
title: Quick Walk Through the World of Location &amp; Places APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/local-search-map-pin.png
author:
  name: kinlane
tags:
  - Location
  - APIs
---
[![](https://kinlane-productions2.s3.amazonaws.com/hyp3rl0cal/local-search-map-pin.png)](http://www.designdelux.com/)

[**Photo Credits**](http://www.designdelux.com/)

I took a walk through what I am calling the locations and places API landscape today. Most of these APIs I’m familiar with, but as the [CityGrid API Evangelist](http://www.citygridmedia.com/developer/blog/citygrid-api-evangelist/ "CityGrid API Evangelist"), I’m getting an opportunity to immerse myself into this new local, social mobile world.

As I immerse myself in this semi-new world I want to share my findings with everyone else.  If you have any suggestions make sure and let me know in comments below.

First I started with **[CityGrid APIs](http://developer.citygridmedia.com/ "CityGrid APIs")**, which provide several key location and places APIs:  
[![](https://kinlane-productions2.s3.amazonaws.com/citygrid/citygrid_logo_200.png)](http://developer.citygridmedia.com/)

*   **The Places API** - Provides functionality for information on local businesses, including search, detail, user content submission, and predictive text
*   **The Offers API** - Provides coupons and special offers from businesses based on geography and category
*   **The Reviews API** - Provides access to customer reviews for businesses selected by id or by geography or category

Then I wanted to see what Google was doing, and of course started with the **[Google Maps APIs](https://code.google.com/apis/maps/index.html "Google Maps API"):**  
[![](https://kinlane-productions2.s3.amazonaws.com/google/Google-Maps-Logo.jpg)](https://code.google.com/apis/maps/)

*   **Maps JavaScript API** - The Google Maps Javascript API lets you embed Google Maps in your own web pages
*   **Maps Image API** - The Google Maps Image APIs make it easy to embed a static Google Maps image or Street View panorama into your web page, with no need for JavaScript

Along with Google Maps they offer a set of **[Geo Web Services](https://code.google.com/apis/maps/documentation/geocoding/ "Geo Web Services")** that contain several location and places based APIs:

*   **Directions API** - The Google Directions API is a service that calculates directions between locations
*   **Distance Matrix API** - The Google Distance Matrix API is a service that provides travel distance and time for a matrix of origins and destinations.
*   **Elevation API** - The Google Elevation API provides you an interface to query locations on the earth for elevation data.
*   **Geocoding API** - Geocoding is the process of converting addresses into geographic coordinates
*   **Places API** - The Google Places API is a service that returns information about places, defined as establishments, geographic locations, or prominent points of interest

Already with **[CityGrid](http://www.citygrid.com/ "CityGrid")** and Google I’m seeing that the type of location and places services, really start to get complicated and diverse. With **[Google Latitude](https://code.google.com/apis/latitude/)** I start separating the location from the place, with what are two location specific APIs:[![](https://kinlane-productions2.s3.amazonaws.com/google/google_latitude_icon.jpeg)](https://code.google.com/apis/latitude/)

*   **Curent locations** - Represents the user's most recent known location
*   **Location history** - Represents the list of all recorded user locations

After Google I have to look at another big player, **[Yahoo](https://developer.yahoo.com/everything.html?category=location&view=detail "Yahoo")**. Yahoo has several location based services:[![](https://kinlane-productions2.s3.amazonaws.com/yahoo/yahoo_geo_logo_med.png)](https://developer.yahoo.com/everything.html?category=location&view=detail)

*   **Fire Eagle** - Fire Eagle is a service designed to build and use location-aware applications and services
*   **GeoPlanet** - Yahoo! GeoPlanet is a resource for managing all geo-permanent named places on Earth
*   **Local** **API** - Provides a database of information including business address and phone, category, rating, distance, URL, and traffic alerts
*   **Maps** - Provides interactive maps with driving directions and traffic information
*   **PlaceFinder** - Converts street addresses or place names into geographic coordinates (and vice versa)
*   **Placemaker** - Identifies places mentioned in text, disambiguating them and returning unique identifiers

Naturally after taking a look at Yahoo I have to go see what **[Microsoft](https://msdn.microsoft.com/en-us/library/ff701715.aspx "Microsoft")** is up to in the space:[![](https://kinlane-productions2.s3.amazonaws.com/bing/Bing_Maps_blue_200.jpg)](https://msdn.microsoft.com/en-us/library/ff701715.aspx)

*   **Bing Maps API**\- The API that power Bing Maps, an online mapping service that enables users to search, discover, explore, plan, and share information about specific locations
*   **Bings Maps Location API** - Use the Locations API to get location information (_I love this description!_)

After looking at what local and mobile offerings the big players Google, Yahoo and Microsoft had I started looking at less search and mapping based services to more carrier based location and place services. I started with **[Verizon](http://developer.verizon.com/content/vdc/en/verizon-tools-apis/verizon_apis.html "Verizon")**, who has a single location API:[![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist/verizon/verizon-logo.jpg)](http://developer.verizon.com/content/vdc/en/verizon-tools-apis/verizon_apis.html)

*   **LBS Network API** - The Verizon LBS API allows you to use the user's location to deliver specific services

**[Sprint](http://developer.sprint.com/site/global/home/p_home.jsp "Sprint")** brings three location APIs to the table:

*   **Geofence** - Provides virtual perimeter services
*   **Location** - Determines the location of a Sprint CDMA Device
*   **Presence** - Determines if a device is present on the Sprint CDMA network

**[AT&T](https://kinlane-productions2.s3.amazonaws.com/telcos/att-logo.jpg "AT&T")** has a LBS API:

*   **Terminal Location** - Set of Location-based Services (LBS)

**[Deutsche Telekom](http://www.developergarden.com/startseite "Deutsche Telekom")** has one location API:

*   **IP Location API** - Locate Internet users with their IP addresses

**[Ericsson Labs](https://labs.ericsson.com/apis/ "Ericsson Labs")** provides a developer community around a full suite of APIS:

*   **3D Landscape API** - 3D Landscape API for integration o realistic 3D MAPS
*   **Mobile Location API** - Allows the use a mobile phone user's current CELL-ID to obtain their geographical location
*   **Network Probe API** - Provides services measure certain characteristics of network IP connectivity, firewalls and Network Address Translators
*   **Web Location API** - Provides location data from a mobile phone using the positioning systems of mobile operators
*   **Web Maps API** - Provides dynamic maps for application integration

**[France Telecom](http://www.orangepartner.com/ "France Telecom")** also has a location API:

*   **Location API** - Allows applications to get geographic coordinates of a given Orange France mobile phone or a fleet

Makes sense for every carrier to also provide developers with a set of location services, as they don’t want to just be dumb pipes. They want to be an integrated player in their own customers handset usage.

Next I start looking to put the social in local, mobile, social. Where else to you start but Facebook, which has two location based objects as part of the **[Graph API](https://developers.facebook.com/docs/reference/api/):**[![](https://kinlane-productions2.s3.amazonaws.com/facebook/facebook_logo-icon.png)](https://developers.facebook.com/docs/reference/api/)

*   **Checkin** - A checkin represents a single visit by a user to a location
*   **Places** - A search option before initiating a checkin, returning name and location information from Graph API

I thought I'd consider Twitter next.  They have [Places and Geo](https://dev.twitter.com/docs/api#places-geo "Places & Geo") methods, but it really doesn't seem like its going anywhere, and a really small portion of tweets have geo info recorded.  I will consider in the future if I see action around it.

In the category of location based social network I was investigating **[Foursquare](https://developer.foursquare.com/)** and **[Gowalla](http://gowalla.com/ "Gowalla")**, but with the recent Facebook acquisition of Gowalla I think I will only look at **[Foursquare](https://developer.foursquare.com/)**. Foursquare offers access to four different APIs:

[![](https://kinlane-productions2.s3.amazonaws.com/foursquare/foursquare_logo_200.png)](https://developer.foursquare.com/)

*   **Core API** - Users, Venues, Venue Groups, Checkins, Tips, Lists, Photos, Specials, Campaigns, Events
*   **Real-time API** - Notifies venue managers when users check in to their venues, and our user push API notifies developers when their users check in anywhere
*   **Merchant Platform** - The Merchant Platform allows developers to write applications that help registered venue owners manage their foursquare presence and specials
*   **Venues Platform** - The Venues Platform allows developers to search for places and access a wealth of information about them, including addresses, popularity, tips, and photos

After Foursquare you leave social, getting into the places data world, with popular player **[SimpleGeo](https://simplegeo.com/)**. Similar to Gowalla I was going to overlook SimpleGeo, with their recent [acquisition by Urban Airship](http://blog.simplegeo.com/2011/10/31/taking-our-relationship-with-urban-airship-to-a-cruising-altitude/ "acquisition by Urban Airship"), but I think SimpleGeo is still an important enough of a player, that we should still consider them in the game. SimpleGeo has four distinct web services for location and places:[![](https://kinlane-productions2.s3.amazonaws.com/hyp3rl0cal/simplegeo/simplegeo_logo_200.jpg)](https://simplegeo.com/)

*   **SimpleGeo Storage** - Storage of data in SimpleGeo system
*   **SimpleGeo Features** - Features in SimpleGeo represent real-world places such as businesses, regions, or US states
*   **SimpleGeo Context** - Provides relevant contextual information such as weather, demographics, or neighborhood data for a specific location
*   **SimpleGeo Places** - Businesses and points of interest

In the pure places data game I’d put **[Factual](ttps://www.factual.com)** in the same category as SimpleGeo. Factual has seven location and places APIs:[![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist/factual/factual-logo.png)](ttps://www.factual.com)

*   **Places Category API** - Taxonomy to classify entities in the various Factual point-of-interest (POI) datasets
*   **Places Crossref API** - URLs for pages that mention a specific business or point of interest or vice versa
*   **Places Crosswalk API** - Maps third-party (Yelp, Foursquare, etc.) identifiers for businesses or points of interest to each other where each ID represents the same place
*   **Places Global Database API** - 55 million entities in 47 countries
*   **Places Global Place Attributes API** - The latest schema for the global places dataset
*   **Places Resolve API** - Makes partial records complete, matches one entity against another, and assists in de-duping and normalizing datasets
*   **Places Restaurants API** - Core places attributes in addition to 43 extended attributes on 800,000+ restaurants, bars, and casual eateries including datatypes such as cuisine, ratings, hours of operations, and price

Tied with SimpleGeo and Factual is **[InfoChimps](http://www.infochimps.com/apis/geo)**. InfoChimps is a data marketplace player with some very strong location and places services:[![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist/infochimps/infochimps-logo.jpg)](http://www.infochimps.com/apis/geo)

*   **Wikipedia Articles** - Correlate Wikipedia articles with geographic locations
*   **Business Places by Locationary** - The Business Places by Locationary API delivers quality business information based on your geographically defined query
*   **Foursquare Places** - The Foursquare Places API delivers uniquely rich information about venues, worldwide.
*   **Geonames Places** - The Geonames Places API locates all places within a specified area. Places are any geographic points that can be named
*   **NCDC Weather** - The NCDC Weather API provides detailed weather data based on your geographically defined query. Weather data points for your query may include dew point, precipitation, snow depth, temperature, visibility, and wind speed details
*   **American Community Survey (Topline)** - The 2009 American Community Survey (ACS) Topline API provides basic demographic data based on your geographically defined query
*   **American Community Survey (Drilldown)**\- The 2009 American Community Survey (ACS) Drilldown API provides detailed demographic data based on your geographically defined query
*   **Core Geographic Regions** - The Core Geographic Regions API delivers detailed geodata for any geographically defined query, worldwide
*   **Zillow Neighborhoods** - Zillow Neighborhoods retrieves geo data pertaining to neighborhoods within defined geometric parameters
*   **Digital Element IP Intelligence Demographics** - A geolocation API for all your demographics needs. Search by IP address to return data about a geographical area, including number of households, gender, age groups and language
*   **Digital Element IP Intelligence Domains** - A reverse IP lookup API with 5 fields of search results, all customized to your IP query. Search by IP address to return data about the domain, company, ISP, NAICS industry code and proxy type for an IP
*   **Digital Element IP Intelligence Geolocation** - A geolocation API with 20 fields of search results, all customized to your IP query. Search by IP address to return data about a geographical area, including country, region, city, internet connection speed
*   **Geocoding API** - The Geocoding API is a powerful and useful tool that provides location information for any given address in the United States. Geocoding is a process that assigns geographic data (ie, latitude and longitude) to an address
*   **Latitude Longitude and Zip Code Conversions -** This API returns approximated latitude/longitude centroids for a given zip code, along with the relative city, state, and county

Then moving out of pure data players **[Yelp](https://www.yelp.com/developers/documentation/v2/overview)** has always been centered around reviews, and more recently, with version 2.0 of their API moved to be centered around the businesses. Yelp has two places APIs:[![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist/yelp/Yelp_Logo_200.jpg)](https://www.yelp.com/developers/documentation/v2/overview)

*   **Search API** - Searches for Businesses
*   **Business API** - Returns full details of businesses

Another player in the space is **[Fwix](http://fwix.com/)**. Fwix has a different approach to places, trying to geotag the web. Fwix offers six places and location APIs:[![](https://kinlane-productions2.s3.amazonaws.com/hyp3rl0cal/fwix/fwix_logo_300.jpg)](http://fwix.com/)

*   **Geotagger API** - Returns places geotagged to a given web page
*   **Content API** - Returns geotagged content in or near a location
*   **Categories API** - Returns the list of canonical place categories
*   **Location API** - Returns geographic data for a latitude/longitude point
*   **Places API** - Return, Submit and Delete a list of businesses for a given location

After Fwix I found a couple of other mapping, location and places data services:

*   **[PushPin](http://www.pushpin.com/api/1.3/docs/rest/latlng.html "PushPin")** - The Pushpin Identify Service is a REST service that takes geographic coordinates (latitude and longitude) and resolves them to named locations on the earth
*   **[43 Places](http://www.43places.com/about/view/web_service_api "43 Places") -** Allows users build 43 Places by adding places, asking questions, giving travel advice, uploading pictures of their favorite places and writing stories about the places they've been and want to go.
*   **[MaxMind GeoIP® City Database](https://www.maxmind.com/app/city "MaxMind")** \- Determine country, state/region, city, US postal code, US area code, metro code, latitude, and longitude information for IP addresses worldwide.
*   **[Compass](http://compass.webservius.com/documentation.htm "Compass") -** Allows access to a database of 16 million business establishments in the USA.

These providers either didn’t have clear market share or started deviating into other parallel universes of content and services to location and places, so I'm going to stop here.

These 17 places and location API providers are a lot to process.  I want to spend some time getting a handle on the types of services they offer, before I dive into the peripheral services as well as the players that have less market share. But in my style, I'll keep posting my findings as I pull them together.