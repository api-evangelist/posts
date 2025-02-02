---
layout: post
title: Providing a Comprehensive API Area Search
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Search
---
One of the new features that Twitter rolled out with the [new Twitter developer area](http://apievangelist.com/2011/07/11/twitter-launches-new-api-developer-area/ "new Twitter developer area") was an enhanced search tool powered by [Apache Solr](http://lucene.apache.org/solr/ "Apache Solr"). The new unified search provides an engine for searching across all areas of the new developer area, including the mailing list historical archives.

Many of us API owners have to cobble together our developer areas from several tools like [Wordpress](http://www.wordpress.org "Wordpress"), [Google Groups](http://groups.google.com/ "Google Groups"), and other tools we can leverage to quickly provide communication and support for our APIs. There is nothing wrong with this approach, however one side effect is that we end up with information available in separate silos, making information harder for developers to find.

Providing a single search interface, that allows developers to search across all systems, delivering comprehensive and relevant search results can make a significant difference in whether or not a developer finds the details they need to successfully integrate.

Apache Solr is one indexing tool you can deploy as part of your API area, but there are also lower impact solutions such as [Google Custom Search](http://www.google.com/cse/ "Google Custom Search") that can be deployed as an external service, without investing in costly equipment or software.

Don't underestimate the power of having a single search interface that developers can use to find the information they are looking for when integrating with your API.