---
layout: post
title: Quantifying The Community Around The Swagger API Specification
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Community
  - Swagger
---
This post is extracted from a deep dive I've been doing into the Swagger ecosystem, as part of regular conversations I have been having with Tony Tam (@fehguy), trying to understand how we can better tell stories about Swagger. I've been tuned into things for a while now around the Swagger community, and there is a lot going on, but from the outside, some of this can be hard to see. Seeking a better understand what is the Swagger community, I wanted to take a walk through the sites, forum, and Github repositories.

First let’s start with the basics, what is Swagger? Merriam Webster defines Swaggers as: : to walk in a very confident way : to walk with a swagger. ;-) Seriously though, Swagger is a machine readable format (either JSON or YAML), for describing an API, providing a description of API operations, in a way that other applications can read, and understand. Even though Swagger is machine readable, and designed for other applications, it has also become a language for humans to describe and collaborate, around a shared, quantifiable, vision of what an API can do, throughout all stages of the API life cycle. 

If you want to learn about Swagger yourself, you can tune into these channels to learn more:

*   **[Website](http://swagger.io/)**
*   **[Twitter](https://twitter.com/SwaggerApi)**
*   **[Github](https://github.com/swagger-api)**
*   **[Google Group](https://groups.google.com/forum/#!forum/swagger-swaggersocket)**

My goal with this post is evolve my understanding and awareness of what Swagger is, and hopefully along the way I can help increase yours as well. In my experience, many people have a very distorted, and limited understanding of what Swagger is, and I’d like to take some time to evolve that. When I started this research, my objective was to help Tony deliver a new website, and on-boarding materials for Swagger, assisting people of all skill levels in finding all things Swagger. I am just taking this moment to walk through what at I have so far, and craft a more robust version 1.0 narrative about what Swagger is, something that blogging helps me work through.

One of the biggest misconceptions I find when I talk with folks about Swagger, is that it is interactive documentation, when that is actually Swagger UI--when it comes to Swagger all roads start with the Swagger specification:

*   **[Swagger-Spec](https://github.com/swagger-api/swagger-spec\))** \- The goal of Swagger is to define a standard, language-agnostic interface to REST APIs which allows both humans and computers to discover and understand the capabilities of the service.

[You can find version 2.0 of the spec here](https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md), which is the current active version in use. The Swagger spec lets you describe all the essential aspects of API operations, with information about the operator, the host and basePath for the API, details about what type of content it produces or consumes, like JSON or XML. Most importantly it lets you describe each of the paths for an API, with details on parameters, responses, and other details of each specific API path. Swagger also provides you with the ability to describe the underlying data model definitions, describing the valuable resources being served up via APIs.

To grasp the last paragraph, you have to have a pretty solid understanding of the moving parts of an API, but in short the Swagger spec gives us a language to potentially map out all of the common parts of an API. It also allows me to describe the security for each API, and tag to organize APIs into specific buckets. [I use Swagger to describe the almost 20 APIs my business uses daily, with varying amount of detail about each resource, and the information it serves up](https://kin-lane.github.io/master/index.html). All the 20 of the Swagger definitions provide me with a machine readable map of my own IT infrastructure—as well as a common language that almost any other developer, or potentially not developer can learn to read, and work with.

With Swagger we now have a common way to communication around the APIs we develop, and also map out the public APIs we also depend on like Twilio, SendGrid, or even Twitter. Now what? Why do we do this? [There are an increasing number of incentives emerging for why you generate machine readable API definitions like Swagger](http://apievangelist.com/2014/06/05/what-are-the-incentives-for-creating-machine-readable-api-definitions/), which is part of the reason I’m looking to further quantify the Swagger community, so I can add to the master list.

Let’s start with what I’d consider to be the primary building blocks of Swagger, developed by the Swagger team, as part of the core offering:

*   **[swagger-ui](https://github.com/swagger-api/swagger-ui) \-** Generation of interactive API documentation, which Swagger is often known for.
*   **[swagger-codegen](https://github.com/swagger-api/swagger-codegen) -** Generation of client code in a variety of languages using a Swagger definition.
*   **[swagger-js](https://github.com/swagger-api/swagger-js) -** A JavaScript library to connect to swagger-enabled APIs via browser or Node.js.
*   **[swagger-socket](https://github.com/swagger-api/swagger-socket) \-** A REST over WebSocket tool for creating real-time integrations with Swagger.
*   **[swagger-node-express](https://github.com/swagger-api/swagger-node-express) -** Swagger module for Node.js w/express module
*   **[swagger-scala-module](https://github.com/swagger-api/swagger-scala-module) -** Swagger support for Scala.
*   **[swagger-editor](https://github.com/swagger-api/swagger-editor) -** A visual editor for Swagger.
    

Those six repositories represent the core tooling that the Swagger team has evolved around the specification, providing what I’d consider to be three stops along the API life cycle:

*   Documentation
*   Server Code
*   Client Code

Swagger is often known for its interactive API documentation (aka Swagger UI), but there has also been a lot of work done on the codegen platform, and editor, taking things well beyond just API documentation. This is just the beginning of what is possible with Swagger. In an effort to find out what else is being done with Swagger, and what is being built with the specification, I wanted to see what the community is up to, which platforms they are integrating it into, and what other standalone tooling is being built using Swagger.

I want a better understanding of the core group of companies who have embraced the Swagger specification, and baked it into their own platform. I know there are hundreds of them out there, but finding them can be easier said than done, especially when I'm looking some sort of public announcement, blog post, press release, service description, to use as my reference. So far I have **49 companies** that I’m tracking on, who have pulled the Swagger spec, and incorporated into their own platform and infrastructure.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/3scale-logo.jpg)](http://www.3scale.net/)

[**3scale**](http://www.3scale.net/) ([reference](http://www.3scale.net/tag/swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/akana-logo-formerly-soa.png)](http://www.akana.com/)

[**Akana**](http://www.akana.com/) ([reference](https://akana.com/news/press_detail/soa_software_eases_api_management_with_new_multi_api_description_language_s))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/apache-apollo-logo.png)](http://activemq.apache.org/apollo/)

[**Apache Apollo**](http://activemq.apache.org/apollo/) ([reference](http://www.davsclaus.com/2014/09/66th-apache-camel-release-is-out-its.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/apache-camel.jpeg)](http://camel.apache.org/)

[**Apache Camel**](http://camel.apache.org/) ([reference](http://camel.apache.org/swagger.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/apigee-logo.gif)](https://apigee.com/)

[**Apigee**](https://apigee.com/) ([reference](https://blog.apigee.com/taglist/swagge))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/apigility-logo.png)](https://apigility.org/)

[**Apigility**](https://apigility.org/) ([reference](https://apigility.org/documentation/api-doc/swagger))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/apimatic-logo.png)](https://www.apimatic.io/)

[**APIMATIC**](https://www.apimatic.io/) ([reference](https://www.facebook.com/apimatic/posts/94217215247839))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/apis-io.png)](http://apis.io/)

[**apis.io**](http://apis.io/) ([reference](http://apis.io/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/apisdotjson.png)](http://apisjson.org/)

[**APIs.json**](http://apisjson.org/) ([reference](http://apisjson.org/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/apitools-logo.png)](https://www.apitools.com/)

[**APItools**](https://www.apitools.com/) ([reference](https://www.apitools.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/appnow-logo.png)](http://appnow.com/)

[**AppNow**](http://appnow.com/) ([reference](https://appnow.radarconline.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/ardoq-logo.png)](http://ardoq.com/)

[**Ardoq**](http://ardoq.com/) ([reference](http://ardoq.com/visualizing-swagger-api-documentation/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/Axway_Logo_4_Color.jpg)](http://www.axway.com/vordel-products/)

[**Axway**](http://www.axway.com/vordel-products/) ([reference](https://www.axway.com/en/datasheet/axway-api-portal))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/beego_logo.png)](http://beego.me/)

[**Beego**](http://beego.me/) ([reference](http://beego.me/blog/beego_api))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/catch_logo.gif)](http://catchsoftware.com/)

[**Catch Software**](http://catchsoftware.com/) ([reference](http://catchsoftware.com/blogs/2013/08/get-your-swagger-on/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/cloud-elements-logo.png)](http://www.cloud-elements.com/)

[**Cloud Elements**](http://www.cloud-elements.com/) ([reference](https://github.com/cloud-elements/doc-builder))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/django-rest-framework.png)](http://www.django-rest-framework.org/)

[**Django REST**](http://www.django-rest-framework.org/) ([reference](http://www.django-rest-framework.org/topics/documenting-your-api/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/dreamfactory.png)](http://www.dreamfactory.com/)

[**DreamFactory**](http://www.dreamfactory.com/) ([reference](http://blog.dreamfactory.com/blog/bid/294825/why-we-like-swagger-for-api-docs))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/elasticio_logo.png)](http://www.elastic.io/)

[**elastic.io**](http://www.elastic.io/) ([reference](https://github.com/elasticio/sphereio-api/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/esspresso-logic-logic.png)](http://www.espressologic.com/)

[**Espresso Logic**](http://www.espressologic.com/) ([reference](http://docs.espressologic.com/docs/live-api/api-docs/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/gluu-logo.png)](http://www.gluu.org/)

[**Gluu**](http://www.gluu.org/) ([reference](https://github.com/GluuFederation/gluu-flask))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/bw-ibm-logo.jpeg)](https://apim.ibmcloud.com/)

[**IBM**](https://apim.ibmcloud.com/) ([reference](https://developer.ibm.com/answers/questions/27580/swagger-ui-import-and-export-in-api-management.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/Magnolia-CMS-logo.png)](https://www.magnolia-cms.com/)

[**Magnolia CMS**](https://www.magnolia-cms.com/) ([reference](https://documentation.magnolia-cms.com/display/DOCS/REST+API#RESTAPI-SwaggerAPIexplorer))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/microsoft-azure-logo.png)](http://azure.microsoft.com/en-us/services/api-management/)

[**Microsoft Azure**](http://azure.microsoft.com/en-us/services/api-management/) ([reference](http://azure.microsoft.com/en-us/documentation/articles/api-management-howto-import-api/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/neo4j-logo-2015.png)](http://neo4j.com/)

[**Neo4J**](http://neo4j.com/) ([reference](http://neo4j-swagger.tinj.com/docs/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/1620_logo.png)](http://developer.netflix.com/)

[**Netflix**](http://developer.netflix.com/) ([reference](http://www.oscon.com/oscon2014/public/schedule/detail/33481))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/nomos-software-logo.png)](http://nomos-software.com/)

[**Nomos Software**](http://nomos-software.com/) ([reference](http://nomos-software.com/blog/swagger-ui-example))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/open311-logo.jpeg)](http://open311.org/)

[**Open311**](http://open311.org/) ([reference](https://github.com/open311/swagger-open311))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/opendaylight-logo.png)](http://www.opendaylight.org/)

[**OpenDaylight Project**](http://www.opendaylight.org/) ([reference](https://wiki.opendaylight.org/view/OpenDaylight_Controller:MD-SAL:Restconf_API_Explorer))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/openi-logo.png)](http://www.openi-ict.eu/)

[**OPENi**](http://www.openi-ict.eu/) ([reference](https://github.com/OPENi-ict/swagger-def))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/200px-OpenShift-LogoType.svg.png)](https://www.openshift.com/)

[**OpenShift by Red Hat**](https://www.openshift.com/) ([reference](https://blog.openshift.com/visualize-openshift-api-with-swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/pivotal-logo.jpeg)](http://pivotal.io/)

[**Pivotal**](http://pivotal.io/) ([reference](http://gemfire.docs.pivotal.io/latest/userguide/gemfire_rest/using_swagger.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/postman-rest-logo.png)](http://www.getpostman.com/)

[**Postman REST Client**](http://www.getpostman.com/) ([reference](http://blog.getpostman.com/index.php/2014/11/17/postman-1-0-is-out-gorgeous-dark-theme-curlramlswaggerwadl-imports-performance-improvements/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/220px-Quandl_Logol.svg.png)](https://www.quandl.com/)

[**Quandl**](https://www.quandl.com/) ([reference](https://github.com/AnCh7/FinancialCharting))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/rest-united.png)](http://restunited.com/)

[**REST United**](http://restunited.com/) ([reference](http://restunited.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/RESTBase-Logo.png)](http://www.mediawiki.org/wiki/RESTBase)

[**RESTBase**](http://www.mediawiki.org/wiki/RESTBase) ([reference](https://github.com/wikimedia/swagger-router))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/RESTFiddle-Logo.png)](http://www.restfiddle.com/)

[**RESTFiddle**](http://www.restfiddle.com/) ([reference](http://www.restfiddle.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/apispark-logo)](https://apispark.com/)

[**Restlet / APISpark**](https://apispark.com/) ([reference](http://restlet.com/technical-resources/restlet-framework/guide/2.3/extensions/swagger))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/get-sandbox-logo.png)](https://getsandbox.com/)

[**Sandbox**](https://getsandbox.com/) ([reference](https://getsandbox.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/service-stack.png)](https://servicestack.net/)

[**Service Stack**](https://servicestack.net/) ([reference](https://github.com/ServiceStack/ServiceStack/wiki/Swagger-API))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/SmartBear-Logo.png)](http://smartbear.com/)

[**SmartBear Software**](http://smartbear.com/) ([reference](http://smartbear.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/snaplogic-logo.png)](http://www.snaplogic.com/)

[**SnapLogic**](http://www.snaplogic.com/) ([reference](http://video.snaplogic.com/fL5g/the-snaplogic-swagger-snap/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/strongloop-logo.png)](http://strongloop.com/)

[**StrongLoop**](http://strongloop.com/) ([reference](https://strongloop.com/strongblog/enterprise-api-swagger-2-0-loopback/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/synapp-io-logo.png)](http://www.synapp.io/)

[**Synapp.io**](http://www.synapp.io/) ([reference](http://www.synapp.io/blog/2014/11/7/putting-the-api-in-synappio))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/tibco-logo.png)](http://www.tibco.com/)

[**TIBCO Software**](http://www.tibco.com/) ([reference](https://docs.tibco.com/pub/activematrix_businessworks/6.2.0/doc/html/GUID-FDE5F1A2-D4B3-4410-B8E2-2D412C00F596.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/visual-studio-2013-logo.png)](https://www.visualstudio.com/)

[**Visual Studio**](https://www.visualstudio.com/) ([reference](http://blogs.msdn.com/b/visualstudio/archive/2015/03/24/introducing-the-azure-api-apps-tools-for-visual-studio-2013.aspx))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/wavemaker-logo.png)](http://www.wavemaker.com/)

[**WaveMaker, Inc.**](http://www.wavemaker.com/) ([reference](http://www.wavemaker.com/blog/wavemaker-api-designer-brings-api-driven-development-to-custom-built-enterprise-applications/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/wso2-logo-white-800X360.jpg)](http://wso2.com/)

[**WSO2**](http://wso2.com/) ([reference](http://blog.cobia.net/cobiacomm/2013/05/31/swagger-with-wso2-api-manager/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/536_logo.png)](http://www.yelp.com/)

[**Yelp**](http://www.yelp.com/) ([reference](https://github.com/Yelp))

This list represents a pretty interesting mix of folks who understand the potential of Swagger, and have invested in the community by making it a core part of their operations. I know there are more of these out there (a lot more), but they haven’t talked publicly about what they are up to. This is just what I’ve aggregated from going through the Swagger site, group, and Github repositories, and from what I already know of the API space, from my monitoring.  
  
After looking at the platforms who have pulled the Swagger specification into their operations, I wanted to see if I could also begin to quantify the community of APIs who have deployed Swagger UI, providing interactive API documentation for their own API platform. Since this is what Swagger is known for, I knew I would find quite a few to showcase. So far I have found 62:  
  

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/world-population-project.png)](http://population.io/)

[**World Population Project**](http://population.io/) ([reference](http://api.population.io/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/3scale-logo.jpg)](http://www.3scale.net/)

[**3scale**](http://www.3scale.net/) ([reference](https://support.3scale.net/reference/active-docs#/account_management_api))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/ACI_Scholarly_Blog_Index.png)](http://scholar.acindex.com/)

[**ACI Blog Index**](http://scholar.acindex.com/) ([reference](http://developer.acindex.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/api-evangelist-logo-400.png)](http://apievangelist.com/)

[**API Evangelist**](http://apievangelist.com/) ([reference](http://developer.apievangelist.com/core-apis.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/api-2-cart.png)](https://www.api2cart.com/)

[**API2Cart**](https://www.api2cart.com/) ([reference](http://docs.api2cart.com/post/interactive-d))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/appspin_100.png)](http://appsp.in/)

[**AppSpin**](http://appsp.in/) ([reference](http://docs.appsp.in/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/548_logo.jpg)](http://banckle.com/)

[**Banckle**](http://banckle.com/) ([reference](http://chat.banckle.com/api/v2.0/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/betisn-logo.png)](http://www.apiisn.com/betting/)

[**BetISN**](http://www.apiisn.com/betting/) ([reference](http://www.apiisn.com/betting/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/bitdango-logo.png)](https://bitdango.com/)

[**Bitdango**](https://bitdango.com/) ([reference](https://bitdango.com/api))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/BitTitan_100.png)](https://www.bittitan.com/)

[**BitTitan**](https://www.bittitan.com/) ([reference](http://www.bittitan.com/swagger/ui/index.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/CallFire_Logo.png)](http://www.callfire.com/)

[**CallFire**](http://www.callfire.com/) ([reference](https://www.callfire.com/api-documentation/rest/version/1.1))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/carnival-logo-small.png)](http://carnivalmobile.com/)

[**Carnival Mobile**](http://carnivalmobile.com/) ([reference](https://api.carnivalmobile.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/cdscience-logo.png)](http://www.commercedatascience.com/)

[**CDScience**](http://www.commercedatascience.com/) ([reference](http://api.cdscience.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/citygro-logo-color.png)](http://citygro.com/)

[**CityGro**](http://citygro.com/) ([reference](https://api.citygro.com/v1/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/citysdk-logo.png)](http://citysdk.waag.org/)

[**CitySDK**](http://citysdk.waag.org/) ([reference](http://dev.hel.fi/open311-test/swagger/dist/index.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/clarify-logo.png)](http://clarify.io/)

[**Clarify API**](http://clarify.io/) ([reference](http://clarify.io/docs/api/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/textLogoClimateChange.png)](http://www.climatechangecosts.com/)

[**Climate Change Costs**](http://www.climatechangecosts.com/) ([reference](http://www.climatechangecosts.com/docs/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/cloudify-logo.png)](http://getcloudify.org/)

[**Cloudify**](http://getcloudify.org/) ([reference](http://getcloudify.org/guide/3.0/rest-api/index.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/commafeed-logo.png)](https://www.commafeed.com/)

[**CommaFeed**](https://www.commafeed.com/) ([reference](https://www.commafeed.com/api/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/Concur_Logo_HZ_Black_500px.png)](https://www.concur.com/)

[**Concur**](https://www.concur.com/) ([reference](https://www.concursolutions.com/api/docs/index.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/data-validation-api.png)](https://developer.datavalidation.com/)

[**DataValidation API**](https://developer.datavalidation.com/) ([reference](https://developer.datavalidation.com/docs))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/datumbox.png)](http://www.datumbox.com/)

[**Datumbox**](http://www.datumbox.com/) ([reference](http://www.datumbox.com/api-sandbox/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/dreamfactory.png)](http://www.dreamfactory.com/)

[**DreamFactory**](http://www.dreamfactory.com/) ([reference](http://www.dreamfactory.com/developers/live_API))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/3dr-dronekit-logo.png)](http://dronekit.io/)

[**DroneKit**](http://dronekit.io/) ([reference](http://api.3drobotics.com/swagger-ui/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/evercam-logo.png)](http://www.evercam.io/)

[**Evercam**](http://www.evercam.io/) ([reference](http://www.evercam.io/develop/docs))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/195_logo.jpg)](http://developer.ean.com/)

[**Expedia**](http://developer.ean.com/) ([reference](https://www.expedia.com/static/mobile/swaggerui/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/logo3.png)](https://fanart.tv/)

[**fanart.tv**](https://fanart.tv/) ([reference](http://hermes.fanart.tv/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/formaggio-logo.png)](http://formagg.io/)

[**Formagg.io**](http://formagg.io/) ([reference](http://api.formagg.io/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/GeoTrellis-Transit-Logo.png)](http://transit.geotrellis.com/)

[**GeoTrellis**](http://transit.geotrellis.com/) ([reference](http://transit.geotrellis.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/getty-images.jpeg)](http://www.gettyimages.com/)

[**Getty Images**](http://www.gettyimages.com/) ([reference](https://api.gettyimages.com/swagger/ui/index.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/1066_logo.png)](http://groupdocs.com/)

[**GroupDocs**](http://groupdocs.com/) ([reference](http://api.groupdocs.com/v2.0/spec/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/guru-logo.png)](https://www.getguru.com/)

[**Guru**](https://www.getguru.com/) ([reference](http://help.getguru.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/habitrpg_pixel.png)](https://habitrpg.com/)

[**HabitRPG**](https://habitrpg.com/) ([reference](https://habitrpg.com/static/api))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/hapi-js-logo.png)](http://hapijs.com/)

[**hapi.js**](http://hapijs.com/) ([reference](http://hapijs.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/kubernetes-logo.png)](http://kubernetes.io/)

[**Kubernetes**](http://kubernetes.io/) ([reference](http://kubernetes.io/third_party/swagger-ui/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/League_of_legends_logo_transparent.png)](http://gameinfo.na.leagueoflegends.com/en/game-info/)

[**League of Legends**](http://gameinfo.na.leagueoflegends.com/en/game-info/) ([reference](http://na.lolesports.com/api/swagger#!/api))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/league-of-legends-esports.jpeg)](http://na.lolesports.com/)

[**League of Legends eSports**](http://na.lolesports.com/) ([reference](http://na.lolesports.com/api/swagger))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/likibu-logo.png)](http://www.likibu.com/)

[**Likibu**](http://www.likibu.com/) ([reference](http://api.likibu.com/doc/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/Mobovivo_Logo.png)](http://www.mobovivo.com/)

[**Mobovivo**](http://www.mobovivo.com/) ([reference](http://swagger-intel.mobovivo.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/mozilla-open-badges-logo.png)](http://openbadges.org/)

[**Mozilla Open Badges**](http://openbadges.org/) ([reference](http://directory.openbadges.org/developers/api-explorer))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/muckrock_medium.jpg)](https://www.muckrock.com/)

[**MuckRock**](https://www.muckrock.com/) ([reference](https://www.muckrock.com/api_doc/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/myfox-logo.png)](https://www.getmyfox.com/)

[**MyFox**](https://www.getmyfox.com/) ([reference](https://api.myfox.me/dev/documentation))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/myneighbor-logo.png)](https://myneighbor.com/)

[**MyNeighbor**](https://myneighbor.com/) ([reference](http://api.myneighbor.com/docs/index.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/mysms-logo.jpg)](http://www.mysms.com/)

[**MySMS**](http://www.mysms.com/) ([reference](https://api.mysms.com/swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/pingup-logo-horizontal-preview.png)](http://pingup.com/)

[**Pingup**](http://pingup.com/) ([reference](http://developers.pingup.com/#api-explorer))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/popuparchive-logo.png)](https://www.popuparchive.com/)

[**Pop Up Archive**](https://www.popuparchive.com/) ([reference](https://developer.popuparchive.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/Project-Chronos-Logo.png)](http://www.spacexplore.it/)

[**Project Chronos**](http://www.spacexplore.it/) ([reference](http://www.spacexplore.it/api/docs/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/ptisp-logo.png)](https://www.ptisp.pt/)

[**PTisp**](https://www.ptisp.pt/) ([reference](http://api.ptisp.pt/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/puppet-labs-logo.png)](http://puppetlabs.com/)

[**Puppet Labs**](http://puppetlabs.com/) ([reference](https://forgeapi.puppetlabs.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/qi-bench.jpg)](http://qi-bench.org/)

[**QI Bench**](http://qi-bench.org/) ([reference](http://api.qi-bench.org/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/rackspace-logo.jpg)](http://www.rackspace.com/)

[**Rackspace**](http://www.rackspace.com/) ([reference](http://rackerlabs.github.io/wadl2swagger/rackspace.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/reliefweb-logo.jpg)](http://reliefweb.int/)

[**ReliefWeb**](http://reliefweb.int/) ([reference](http://apidoc.rwlabs.org/swagger))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/924_logo.png)](https://sensr.net/api)

[**Sensr.net**](https://sensr.net/api) ([reference](https://api.sensr.net/doc/v3/index.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/480_logo.png)](http://shoeboxed.com/)

[**Shoeboxed**](http://shoeboxed.com/) ([reference](https://api.shoeboxed.com/v2/explorer/index.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/933_logo.png)](http://skimlinks.com/skimlinks)

[**Skimlinks**](http://skimlinks.com/skimlinks) ([reference](https://skimlinks-pi.3scale.net/docs))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/subledger.png)](http://subledger.com/)

[**Subledger**](http://subledger.com/) ([reference](https://api.subledger.com/v2/index.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/tadaweb-logo.png)](http://www.tadaweb.com/)

[**TaDaweb**](http://www.tadaweb.com/) ([reference](https://api.tadaweb.com/v1/index.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/Taxamo_logo-copy.jpg)](http://www.taxamo.com/)

[**taxamo**](http://www.taxamo.com/) ([reference](https://api.taxamo.com/swagger/ui/index.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/resumator-logo.png)](https://theresumator.com/)

[**The Resumator**](https://theresumator.com/) ([reference](http://www.resumatorapi.com/v1/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/uk-commission-for-employment-and-skills.png)](https://www.gov.uk/government/organisations/uk-commission-for-employment-and-skills)

[**UK Commission for Employment and Skills**](https://www.gov.uk/government/organisations/uk-commission-for-employment-and-skills) ([reference](http://api.lmiforall.org.uk/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/wordnik-logo-131gihv.jpeg)](https://www.wordnik.com/)

[**Wordnik**](https://www.wordnik.com/) ([reference](http://developer.wordnik.com/docs.html))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/YunoHost-Logo.png)](https://yunohost.org/)

[**YunoHost**](https://yunohost.org/) ([reference](http://api.yunohost.org/))

Finding websites that have implemented Swagger UI is harder than you think. There are only three search engines I could find that let you search the source code of websites for JavaScript files and code. Ultimately I ended up mostly depending on my own ability to find new APIs, and manually uncover whether or not Swagger was actually in use. I’m working on a stack of Swagger and API Blueprint discovery search engines, but they aren’t quite ready for this dive.  
  
Next I wanted to look through some of the tooling that has evolved as part of the Swagger community, which Github is definitely the place to begin this journey. [When you search Github for the word Swagger, you get almost 1000 repositories](https://github.com/search?utf8=%E2%9C%93&q=swagger). I was going to programmatically explore these results, but found that manually browsing through them was the best path to take, allowing me to make a decision on what each developer was up to.  
  
The one thing I learned doing through this process—Swagger means many different things, to many different people. Most refer to Swagger, and mean Swagger UI, while others refer to it as generating server side code, or maybe client side code. Moving forward, there needs to be a lot of work done helped educate people about first, what Swagger is, a specification, and what are  each of the areas of tooling that are built on top of the Swagger specification.  
  
Even after looking through the almost 1000 Swagger related Github projects, things are still very hazy for me, but I did learn a lot along the way, about what languages, frameworks and platforms developers are using Swagger, and the types of tools and integrations they are developing.

The best way to look at all of these projects is by language—here is the Github breakdown.

*   411 JavaScript
*   135 Java
*   61 Ruby
*   41 Python
*   32 PHP
*   31 Scala
*   22 C#
*   17 Shell
*   13 Clojure
*   8 Groovy

This isn’t accurate, because many of the JavaScript repositories are actually other languages. I forget to make sure Github knows what language a repo is sometimes too. Regardless, it gives you an idea of which programming languages developers are using to work with Swagger—one layer to look consider.  
  
Beyond the programming languages I want to know which platforms and frameworks developers are applying Swagger. Here are 36 frameworks and platforms I’ve identified so far.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/AngularJS_logo.svg.png)](https://angularjs.org/)

[**AngularJS**](https://angularjs.org/) ([reference](http://github.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/apache-ant.png)](http://ant.apache.org/)

[**Apache Ant**](http://ant.apache.org/) ([reference](http://github.com/cstroe/swagger-ant-task/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/apache-camel.jpeg)](http://camel.apache.org/)

[**Apache Camel**](http://camel.apache.org/) ([reference](http://github.com/myfear/CamelEE7RestSwagger))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/apache-maven.png)](https://maven.apache.org/)

[**Apache Maven**](https://maven.apache.org/) ([reference](http://github.com/kongchen/swagger-maven-plugin/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/Apache_Wink_Logo.png)](https://wink.apache.org/)

[**Apache Wink**](https://wink.apache.org/) ([reference](http://github.com/zouzias/swagger-jaxrs-wink/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/arangodb_logo2.png)](https://www.arangodb.com/foxx)

[**ArangoDB Foxx**](https://www.arangodb.com/foxx) ([reference](http://github.com/arangodb/foxx-swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/backbone-rest.png)](https://www.npmjs.com/package/backbone-rest)

[**BackboneREST**](https://www.npmjs.com/package/backbone-rest) ([reference](http://github.com/robblovell/backbone-rest-swagger-example/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/cake-logo.png)](http://cakephp.org/)

[**CakePHP**](http://cakephp.org/) ([reference](http://github.com/dave-newson/cakephp-swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/ckan-logo.png)](http://ckan.org/)

[**CKAN**](http://ckan.org/) ([reference](http://github.com/deepviator/ckan-integrate-swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/django-rest-framework.png)](http://www.django-rest-framework.org/)

[**Django REST**](http://www.django-rest-framework.org/) ([reference](http://github.com/avinash240/django-rest-framework-swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/tastypie2.jpg)](https://django-tastypie.readthedocs.org/en/latest/)

[**Django Tastypie**](https://django-tastypie.readthedocs.org/en/latest/) ([reference](http://github.com/concentricsky/django-tastypie-swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/1910_logo.jpg)](http://www.elasticsearch.org/)

[**elasticsearch**](http://www.elasticsearch.org/) ([reference](http://github.com/timschlechter/swagger-for-elasticsearch/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/express-logo.png)](http://expressjs.com/)

[**Express**](http://expressjs.com/) ([reference](http://github.com/krakenjs/swaggerize-express/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/feathers-logo.png)](http://feathersjs.com/)

[**Feathers**](http://feathersjs.com/) ([reference](http://github.com/Glavin001/feathers-swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/flask-logo.png)](http://flask.pocoo.org/docs/0.10/)

[**Flask**](http://flask.pocoo.org/docs/0.10/) ([reference](http://github.com/martinp/flask-swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/bw-github.png)](http://swagger.apievangelist.com/external-integrations.html)

[**Flask MongoRest**](http://swagger.apievangelist.com/external-integrations.html) ([reference](http://github.com/matchbox/flask-mongorest-swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/flask-restful-logo.png)](https://flask-restful.readthedocs.org/en/0.3.2/)

[**Flask Restful**](https://flask-restful.readthedocs.org/en/0.3.2/) ([reference](http://github.com/rantav/flask-restful-swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/gradle.png)](http://swagger.apievangelist.com/external-integrations.html)

[**Gradle**](http://swagger.apievangelist.com/external-integrations.html) ([reference](http://github.com/dave-ellis/gradle-swagger-plugin))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/grails-logo.jpg)](http://swagger.apievangelist.com/external-integrations.html)

[**Grails**](http://swagger.apievangelist.com/external-integrations.html) ([reference](http://github.com/alvarosanchez/grails-swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/grape-logo.jpeg)](http://intridea.github.io/grape/)

[**Grape**](http://intridea.github.io/grape/) ([reference](http://github.com/tim-vandecasteele/grape-swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/grunt-logo.jpg)](http://gruntjs.com/)

[**Grunt**](http://gruntjs.com/) ([reference](http://github.com/tmalbonph/grunt-swagger-tools/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/guzzle-logo.png)](http://guzzle.readthedocs.org/)

[**Guzzle**](http://guzzle.readthedocs.org/) ([reference](http://github.com/oco/swizzle/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/jersey-logo.png)](https://jersey.java.net/)

[**Jersey**](https://jersey.java.net/) ([reference](http://github.com/salimane/java-jersey2/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/laravel-logo.png)](http://laravel.com/)

[**Laravel**](http://laravel.com/) ([reference](http://github.com/slampenny/Swaggervel/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/linqpad-logo.jpg)](https://www.linqpad.net/)

[**LINQPad**](https://www.linqpad.net/) ([reference](http://github.com/dylanmei/linqpad-swagger-driver/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/mongodb.jpeg)](https://www.mongodb.org/)

[**MongDB**](https://www.mongodb.org/) ([reference](http://github.com/dgiul/node-swagger-express-mongodb/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/nancy-logo.png)](http://nancyfx.org/)

[**Nancy**](http://nancyfx.org/) ([reference](http://github.com/khellang/Nancy.Swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/pyramid-logo.png)](http://www.pylonsproject.org/)

[**Pyramid**](http://www.pylonsproject.org/) ([reference](http://github.com/striglia/pyramid_swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/salesforce-logo.png)](https://developer.salesforce.com/)

[**Salesforce**](https://developer.salesforce.com/) ([reference](http://github.com/thysmichels/force.com-swagger-rest-spring-mvc/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/sequelize-logo.png)](http://swagger.apievangelist.com/external-integrations.html)

[**Sequelize**](http://swagger.apievangelist.com/external-integrations.html) ([reference](https://github.com/mathisonian/swaggerize))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/silex-logo.png)](http://silex.sensiolabs.org/)

[**Silex**](http://silex.sensiolabs.org/) ([reference](http://github.com/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/sinatra-logo.png)](http://www.sinatrarb.com/)

[**Sinatra**](http://www.sinatrarb.com/) ([reference](http://github.com/jphastings/sinatra-swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/spring-by-pivotal.png)](https://spring.io/)

[**Spring**](https://spring.io/) ([reference](http://github.com/wkennedy/swagger4spring-web/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/symfony-logo.png)](http://symfony.com/)

[**Symfony**](http://symfony.com/) ([reference](http://github.com/creads/api2symfony-bundle/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/tornado-logo.png)](http://www.tornadoweb.org/en/stable/)

[**Tornado-JSON**](http://www.tornadoweb.org/en/stable/) ([reference](http://github.com/andyno/tornado-swagger/))

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/veneer-logo.png)](https://github.com/ryanuber/veneer)

[**Veneer**](https://github.com/ryanuber/veneer) ([reference](http://github.com/ryanuber/veneer-swagger/))

Beyond the programming languages, frameworks, and platform integrations I’m looking to also understand the types of tools developers are actually building, and take Swagger beyond what the core development team, and working group could do. It is hard to understand the objectives of each of the developer projects I came across, but here are the X areas I’ve identified so far:

*   Converter
*   Generator
*   Parser
*   Schema
*   Validator
*   Server
*   Command-Line
*   Powershell
*   Client
*   Proxy Generator
*   Aggregator
*   Tester

This added a couple stops along the API life cycle for me, that Swagger is serving. I hadn’t envisioned a Swagger powered CLI or Powershell tool. I’ve only lightly thought about proxies, and aggregators driven by Swagger. When you bundle this with the platforms above who have integrated Swagger into their products and services, it starts to paint an even bigger picture of what is possible with Swagger.  
  
I think I’m going to wrap up this dive into the Swagger ecosystem here. I still have all of the contributors, watchers, and people who have forked the core Swagger products, and well as many of the people involved in Swagger discussions via the Swagger Google Group and Twitter account to consider. Plus I think this article will flush out some other projects that are out there, being executed by my readers. Storytelling along the way is the best way to flush out hidden details in my opinion, and is one of the main reasons I’m so transparent--I depend on people emailing and tweeting at me about stuff.  
  
This exercise has given me a new perspective on the Swagger community, and introduced me to some new companies, and tools. If you are doing anything cool with Swagger, please let me know, and I’ll add it [to my research](http://swagger.apievangelist.com/). Remember, if you don’t tell the story about what your are doing with APIs, nobody knows, including me—API evangelism 101. This is just my first attempt to better quantify the Swagger community, and I’m happy to include what you are up to in future updates.