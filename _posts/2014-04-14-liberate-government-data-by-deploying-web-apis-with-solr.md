---
layout: post
title: Liberate Government Data By Deploying Web APIs With Solr
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/apache-solr/apache-solr-logo.png
author:
  name: kinlane
tags:
  - Data
  - Web
  - Government
  - APIs
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/apache-solr/apache-solr-logo.png)](https://lucene.apache.org/solr/)

I [reviewed the deployment the FBOpen API the other day](http://apievangelist.com/2014/04/08/18f-shows-what-is-possible-in-government-with-fbopen-api/), which is a simple API resource of business opportunities with the U.S. Federal Government. An interesting aspect of the FBOpen implementation was that [18F](https://18f.gsa.gov/) used [Solr](https://lucene.apache.org/solr/) to deploy the API layer.

Solr is an [open source search tool developed by the Apache Software Foundation](https://lucene.apache.org/solr/), which can take any document store and easily generate a simple, yet pretty powerful web API—opening up access to content, without costly infrastructure. I showcased how the [Free Law Project launched the Court Opinion API, using Solr](http://apievangelist.com/2013/11/20/api-evangelist-endpoint-using-solr/), opening up access to archives of legal documents from across the country.

18F took XML dumps of business opportunities from [FBO.gov](https://www.fbo.gov/), then deployed Apache Solr as the API layer. You can [download or fork 18F’s FBOpen API](https://github.com/18f/fbopen), and deploy the API in your own infrastructure. This provides a pretty interesting blueprint for how government can easily open up data, then launch an API for developers to build on top of.

I’m thinking that government data dumps, plus web API deployed using Solr, plus interactive documentation deployed via Github, combined with frictionless API access via api.data.gov or 3Scale, open licensing and terms of use—all sounds like a pretty health formula for open, reusable government API infrastructure.

Along with other healthy patterns for API design, deployment, management and evangelism I find out in the API space, I think what 18F has done with the FBOpen API, needs highlighting. I think government data plus web API using Solr is a recipe I’d like to see used across all government projects.