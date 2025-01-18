---
layout: post
title: API Deployment as a Service
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/tag-cloud-api-service-providers.png
author:
  name: kinlane
tags:
  - Deployment
---
APIs are all the rage, anyone should be able launch an API from CSV, Microsoft Excel, Google Spreadsheet or the common databases such as MySQL, PostGres, Amazon RDS, Microsoft SQL Server. Right?

I’ve been watching [API service providers](/serviceproviders/) evolve for the last three years, helping companies be successful in managing their APIs. But when you actually going through the list of service providers, looking for someone to help you deploy an API, there are very few options out of the box.

The list of API Players coming from the enterprise:

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/atmosphere-logo-1.png)](http://www.soa.com/atmosphere)

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/layer7-logo.png)](http://www.layer7tech.com/)

[![](https://s3.amazonaws.com/kinlane-productions2/events/api-strategy-practice-conference/sponsors/Intel-IESG-Logo.png)](http://software.intel.com/en-us/articles/REST-Web-Services-API-Security/)

[![](http://kinlane-productions2.s3.amazonaws.com/api-service-providers/vordel/vordel_logo_100x50.jpg)](http://www.vordel.com/)

These enterprise players assume you will have existing infrastructure to publish web services, files and other message systems that they can connect with, to deploy your new APIs that you will manage.

The most recent generation of API service providers:

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/3scale-logo.jpg)](http://www.3scale.net/)

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/apigee-logo.gif)](http://apigee.com/)

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/mashery-logo.png)](http://mashery.com/)

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/APIphany-Logo.png)](http://apiphany.com/)

Are pretty much the same. While they may provide how to [guides for deploying APIs on AWS](/2013/02/03/deploy-and-manage-api-on-amazon-web-services-aws/), like 3Scale, the deployment of API endpoint is still your responsiblity. You need to have existing infrastructure that will do it, or find the REST framework of your choice--both requiring you have the appropriate talent and resources.

Next up you can, deploy one of the open source API solutions, to proxy and manage your APIs:

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/alcatel-lucent-logo.jpg)](http://www.alcatel-lucent.com/open-api-platform/)

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/wso2-logo.jpeg)](http://wso2.com/products/api-manager)

[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/apiaxle-logo.png)](http://apiaxle.com/)

But again, you need the resources and know how to implement, and they are generally management tools, so you still need to “launch” your own API endpoint.

When you start looking at the next generation of API service providers like [Apiary.io](http://apiary.io/), you can really maximize the design, planning, documentation and deployment cycle, but you still need to code up your actual API.

After Apiary.io we start to get to the service providers who can deliver on my vision of APIs for the masses:

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/emergent-one-logo.png)](http://www.emergentone.com/)

[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/APISpark-Logo.png)](http://apispark.com/)

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/apify-logo.png)](http://www.apifydoc.com/)

[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/api-engine-logo.png)](https://apiengine.io/)

It seems like we are getting closer, albeit its not as easy as I think it should be. We need a variety of service providers and open source solutions in this space, so there are numerous, dead simple cloud options for API deployment.

Emergent One definitely was a pleasant surprise in my quest. Their tool needs a little polish, but for deploying an API from a database like MySQL, Postgres or Amazon RDS, those guys nailed it. It is the tool that I will be recommending when people ask me how to launch an API from their database. (story to come)

I'd like to see the Emergent One approach to a dead simple cloud service for going from Microsoft Excel, CSV and Google Spreadsheet. Maybe there is, and I’m missing it. Something like CKAN as a Service. I think there is some more research to be done on this. Of the 3 data API providers I used to showcase:

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/Kasabi-Logo.png)](http://kasabi.com/)

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/socrata_logo.jpg)](http://www.socrata.com/)

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/infochimps/infochimps-logo.jpg)](http://www.infochimps.com/)

Only [Socrata](http://www.socrata.com/) is still deliving in this space, bringing open data to municipal, state, and federal government. Kasabi closed down and InfoChimps is focusing on the enterprise big data. I don’t think there is big VC money in the data API space, but it seems like there is still opportunity.

It seems backwards to me, but it seems from 2005-2010 we needed to define and prove there was API opportunity, and in 2011 and 2012 we defined the API management space, so in 2013 are we needing to better define the API deployment portion of our industry?

I will use Emergent One, APISpark, API Engine and Apify more, and do individual stories on them. Then circle back around and see how I feel.