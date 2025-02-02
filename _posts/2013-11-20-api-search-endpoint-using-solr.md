---
layout: post
title: API Search Endpoint Using Solr
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apache-solr-logo.png
author:
  name: kinlane
tags:
  - Search
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/apache-solr/apache-solr-logo.png)](http://lucene.apache.org/solr/)

I was going through the [Free Law Project Court Opinion API](https://www.courtlistener.com/api/rest-info/#search-endpoint) today, playing with the API and data, while developing some server and client side tooling. All the API endpoints are pretty consistence because they used their Django model and the [Tastypie framework](http://django-tastypie.readthedocs.org/en/latest/) to generate most of the API.

There is one endpoint that is radically different from the rest of the opinion API: the /search endpoint. The Free Law Project used [Apache Solr](http://lucene.apache.org/solr/) to generate the /search endpoint results and instead of directly hitting just the database for information it utilized Solr index to do the heavy lifting.

Using Solr opens up a whole world of search by introducing common concepts like AND, OR, NOT, fielded queries, wildcards, fuzzy searches and much more when it comes to searching for court opinions.

While the on-boarding of Solr newbies to an endpoint like this takes some education, and the opinion API /search endpoint docs could use a little more polishing to make it easier to start using, but the concept of a Solr driven endpoint is still very interesting.

Using Solr like this might not work for all API providers, but for some who are heavily using data stores that include document repositories as well, it might be a good idea. 

While [I have advocated for using Solr to generate an API before](http://apievangelist.com/2013/08/13/have-a-bunch-of-documents-launch-an-api-with-apache-solr/ "Have A Bunch Of Documents? Launch An API With Apache Solr"), this is the first time I've seen it bundled alongside another API offering so seamlessly, just to drive the search endoint. I'll be keeping an eye out for others during my regular monitoring.