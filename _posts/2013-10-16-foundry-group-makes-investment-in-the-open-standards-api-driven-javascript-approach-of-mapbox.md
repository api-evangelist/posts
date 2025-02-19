---
layout: post
title: >-
  Foundry Group Makes Investment In The Open Standards, API Driven, JavaScript
  Approach Of MapBox
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/mapbox-logo.png
author:
  name: kinlane
tags:
  - Investment
  - Standards
  - Open
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/mapbox/mapbox-logo.png)](https://www.mapbox.com)

On June 29th, 2006, Google launched Google Maps API allowing developers to put Google Maps on their own sites using JavaScript. The API launch was just shy of 6 months after the release of Google Maps as an application, and was in direct response to the number of rogue apps developed that were hacking the application--demonstrating the demand for a JavaScript based, API driven mapping solution for developers.

Fast-forward 7 years, and maps are a central fixture of virtually every web and mobile application we depend on daily. While Google Maps is still the heavyweight in the space, their now classic map interface, proprietary tooling and search centric mindset leaves a huge opportunity for disruption in the app economy, and the venture capital firm [Foundry Group](http://www.foundrygroup.com/wp/) is betting that startup mapping provider [MapBox](https://www.mapbox.com/) is the solution that will de-throne Google, with a [10M investment in MapBox](https://www.mapbox.com/blog/10million-funding-foundry-group/) earlier today.

What makes MapBox such a good investment? At first look, it is clear that MapBox is winning over developers and existing players like Foursquare and Evernote by providing very clean, attractive mapping solutions that contain street, terrain and satellite layers, but when you take a closer look at the platform, you see the MapBox allure isn't just about maps. The value of MapBox is also about their approach to delivering a platform that begins with a heavy focus on open specifications, embracing of APIs, heavy investment in JavaScript, and a knowledge of modern cloud architecture, with strong support for mobile apps.

**Open Specifications**  
In 2013, when you are looking to deploy a true platform, you have to shed your self-centered approach to technology, do your homework on what are the best practices and standards that exist across your industry, and don't re-invent the wheel or try to keep things closed and proprietary, making everything you do a two-way street that benefits the entire ecosystem. This is how you establish a true platform ecossytem, one that developers will believe in and embrace. This is what MapBox has done by building their platform around four very critical open mapping specifications:

*   **[TileJSON](http://github.com/mapbox/tilejson-spec)** - TileJSON is a standard format for describing various aspects of a map and makes for an easy entry point for loading, showing, and describing maps, allowing developers to keep track of information about maps,where their tiles are stored, their centerpoints, bounds, supported zoom levels, markers data, attribution, and more.
*   **[simplestyle-spec](http://github.com/mapbox/simplestyle-spec)** \- The simplestyle spec is a practical approach to describing visual markers on a map, for styling markers and maintaining a distinction between content and visual styling can be tricky when annotating maps. 
*   **[mbtiles-spec](http://github.com/mapbox/mbtiles-spec)** - The mbtiles specification is an open approach to storing tiled map data in [SQLite](http://sqlite.org/) databases for immediate usage and for transfer, making invidual tiles portable and easily migrated between apps and systems.
*   **[utfgrid-spec](http://github.com/mapbox/utfgrid-spec)** - UTFGrid is a format for interactive data that uses JSON and can be transferred tile-by-tile to fit maps of any scale, allowing scalable interaction of maps within applications.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/openstreetmaps/openstreetmap-logo.png)](https://www.mapbox.com)

Open standards help provide grounding anchors for any platform, and MapBox is going all in, by not just employing these four open specifications--MapBox is also entirely powered by [OpenStreetMap](http://www.openstreetmap.org/#map=5/51.500/-0.100 "OpenStreetMap"), an active community of tens of thousands of dedicated open source mappers who keep MapBox maps up to date and accurate in a real-time, crowdsourced way.

The approach MapBox is taking to building their platform on top of an existing open platform, and embracing the best of breed open standards, sends a signal to its fast evolving ecosystem, that MapBox is not just about building out their own intellectual property like Google, Bing, Apple and other providers are. MapBox is about investing in an open ecosystem of maps, standards, tools and resources that benefit the entire world of mapping.

**API Driven Integration**  
MapBox provides static and REST API access to all aspects of the mapping platform providing developers with programmatic interfaces for all aspects of the mapping ecosystem. Developers can work with maps, tiles, markers and geocoding services directly via API interface, and use SSL to secure integration, and JSONP to integrate with mapping services across any domain.

**Custom Layers**  
The ability to customize every layer of a map, making it as meaningful as possible to each application is the future of mapping. MapBox allows for the development of custom maps, markers and related data, allowing developers to define mapping layers as containers of rich context that will benefit the end-user experience and establish millions of virtual map tiles and layers as rich stores of geo and context relevant information.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/mapbox/mapbox-streets.png)

**Next Generation Architecture**  
MapBox reflects the latest approaches to scalable, real-time platform development using Node.js, a JavaScript driven approach that delivers high input / output throughput which naturally scales on top of a redundant, distributed cloud infrastructure deployed using Amazon Web Services. The MapBox approach to architecture is fast becoming the standard for API driven, scalable platforms, something that developers and companies are recognizing provide the elastic base that web and mobile applications are demanding.

**Ubiquitous JavaScript**  
The use of JavaScript is present across all aspects of MapBox, from the server-side Node.js platform to client-side MapBox.js JavaScript API. MapBox has developed MapBox.js as a plugin that leverages Leaflet, an existing, leading open-source JavaScript library that provides the basic ability to embed a map into a page, and handles the fundamental operation of map interaction. MapBox employs JavaScript to provide a resilient back-end, the embeddable and client side tools developers have grown used to, while also extending its embrace of existing open standards, by integrating with the existing mapping frameworks like Leaflet.

**Mobile Focused**  
MapBox identifies that mobile is a major driver of the growing role maps are playing in our daily lives, with a GPS in all of our pockets, and providing realtime location data to applications. MapBox has invested in providing iOS SDKs for developing rich mapping solutions for the iPhone, including native mapping based upon Apple's MapKit with their MapBox MBXMapkit. Beyond mobile specific SDKs, the MapBox API provides many mobile focused resources including the ability to optimize resolution of mapping images and overall access via modern, mobile friendly web APIs.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/mapbox/mapbox-mobile.png)

**Simplicity Rules**  
The simple, attractive approach to mapping that MapBox introduces goes being just the visual, with simplicity being a key aspect in the deployment and management of MapBox integrations. MapBox has expanded the opportunity within map layers for developers with many advanced features, but MapBox also provides a suite of ready-to-go HTML, CSS and JavaScript bundles for rapid copy / paste of maps by publishers and hackers who only know enough tech to be dangerous. MapBox also provides an add-on script for Google Docs Spreadsheets called Geo, that lets anyone geocode arbitrary addresses and export spreadsheets as GeoJSON that works fluently with MapBox maps.

**Priced to Scale**   
The pricing of cloud platforms are always an immediate signal of the potential of an ecosystem, and developers have been trained to be weary and avoid deeply integrating with platforms who do not have a clear business model. MapBox has a four tier pricing framework starting at $5 a month, then stepping up to $49, $149 and up to $499 a month. MapBox base pricing is derived from map views and storage with an additional rate for any overage charges. MapBox pricing reflects modern cloud utility pricing that provide developers with an essential pay-as-you-go model, ensuring a healthy approach to monetization that is doable for developers, covers MapBox operating costs while also generating sensible revenue for the company.

**Serious Client Portfolio**  
MapBox isn't just a favorite for the usual alpha tech developer community. The existing portfolio of MapBox users includes tech heavyweights like Foursquare, Evernote, Github and Uber including leading news and media groups like NPR, US Today, Financial Times and National Geographic. This is just a sampling of some of the best known brands who have embraced MapBox, and understand the importance of custom, open attractive maps that compliment their brand, while also providing the best user experience possible.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/mapbox/mapbox-foursquare.png)

**A Platform Blueprint**  
The MapBox approach to delivering their platform by building it on top of existing open standards, baking in APIs access to all resources, while embracing the latest architectural design patterns that focus on lightweight JavaScript and JSON, and having a mobile focus that operates in the cloud, is more than just a blueprint for a successful mapping platform. MapBox is a model that other cloud platforms can follow in their own operations, focusing on simplicity, customization and all the vital features that make a platform truly an open, vibrant ecosystem, while still employing a viable business model.

The opportunity for mapping solutions in the new app economy makes Foundry Group's investment in MapBox a wise one, but it is the embracing of open standards, APIs, JavaScript, the cloud and mobile that will make that investment return at a scale that I think will surprise even the Foundry Group, and deliver similiar to that of existing platforms like Github.

MapBox is a model of how successful technology ecosystems will deliver the resources developers will need to build the next generation of web and mobile applications.