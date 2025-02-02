---
layout: post
title: 'History Of APIs: NOAA APIs Have Been RESTful For Over 20 Years'
image: http://federal-government.apievangelist.com/images/logos/noaa.png
author:
  name: kinlane
tags:
  - REST
  - History
  - APIs
---
_This post is a comment that was left on my [Low Hanging Fruit For API Discovery In The Federal Government](http://apievangelist.com/2014/07/10/low-hanging-fruit-for-api-discovery-in-the-federal-government/#comment-1725976136) post, showcasing some of the government API work I am doing. I get a lot of people who email me telling me that what I'm saying is nothing new, they've been doing APIs since 1492! ;-) Many of them are pretty hostile to the new API movement, but I love this comment from Bob Simons from NOAA, which is the exact opposite of many of the comments I receive._

* * *

[![](http://federal-government.apievangelist.com/images/logos/noaa.png)](http://www.noaa.gov/)

...a group in the oceanography community was one of the pioneers of web accessible APIs. The original Distributed Oceanographic Data System (DODS) was created in the early 1990's, before the WWW! It defined the dods: protocol for requesting data and getting a response. When the WWW came along, it was revised to use HTTP and renamed to be the Data Access Protocol (DAP), partly because they realized its usefulness in a wide variety of scientific and other disciplines, not just oceanography. DAP is an open source project stewarded by a group called OPeNDAP. DAP was IMHO brilliant and amazingly far-sighted:

*   It is RESTful (since before the WWW!).
*   Like JSON and relational databases, it defines a few data structures (e.g., scalars, multi-dimensional arrays, and database-like tables called "sequences") which can be used for an amazingly wide variety of data.
*   It includes a system for dataset-level and variable-level metadata (stored as a set of key=value). This is essential for the sciences, so, for example, the datasets can include a description of the dataset, and so that the units of individual variables can be specified (e.g., temperature units=degrees\_Celsius) to avoid misunderstandings.
*   It defines a way for a user to request the structure of the dataset (.dds).
*   It defines a way for a user to request the attributes of the dataset (.das).
*   It defines a RESTful way for users to request a subset of the dataset (which is essential, since the datasets are often many TB each (the original Big Data!)). The method for requesting data from database-like tables is essentially SQL's SELECT FROM WHERE reformatted as a URL query.
*   It specifies the system used to return the data.

So instead of having a thousand APIs for a thousand datasets, there is one API. (If I were to find fault with the current wave of Internet dataset APIs, it is the idea that every dataset should have its own API. That's a mistake. The DAP approach is far superior.)

There are several reusable data servers that support DAP (HYRAX, THREDDS, ERDDAP, GRADS, PYDAP, etc.) and numerous client software (including from within R, Matlab, ArcGIS). There are 100's of DAP servers in the world serving >10,000 datasets. The same client software can work with any dataset from any of those servers. The next time you read about the IPCC and their climate models with voluminous output, know that the IPCC scientists use DAP to access and work with that data.

My reusable data server program, ERDDAP, uses DAP (and other protocols) and adds some additional features. Notably, you can also request a specific file type for the response (e.g., csv, htmlTable, xhtml, json, mat, kml, NetCDF). ERDDAP will generate that file on-the-fly. Thus, clients don't need client software; they can just get the data in their preferred file format. You can read about ERDDAP and try it at [ERDDAP](/admin/blog/ERDDAP) can also make graphs and maps on-the-fly. A beautiful sample dataset is at [GRIDDAP](http://coastwatch.pfeg.noaa.gov/erddap/griddap/jplMURSST.graph).

My division within NOAA also hosts an ERDDAP instance that works with the NOAA Unified Access Program (UAF) which seeks to make all of NOAA's data accessible via DAP servers. (We're far from the goal, but we're making progress.) It currently has >5000 datasets. See [NOAA GEO-IDE UAF ERDDAP](http://upwell.pfeg.noaa.gov/erddap/index.html).

* * *

_Thanks Bob for sharing. I love hear, and learning from people who have been doing this for a while. I make fun of the people who tell me they've been doing APIs forevery, its know their experience I'm poking fun at, its their approaach to telling it. I appreciate you sharing the story in a way that we can all learn from. Thanks!_