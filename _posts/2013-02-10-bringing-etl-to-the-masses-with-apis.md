---
layout: post
title: Bringing ETL to the Masses with APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Tag-Cloud-API-Automation.png
author:
  name: kinlane
tags:
  - APIs
---
I’m spending a lot of time lately thinking about [emerging trends in API usage](http://apievangelist.com/trends/ "emerging trends in API usage"). One area I’m tracking on, is around companies that are offering simple services that provide interoperability and automation between cloud platforms, using APIs. The best known examples are from companies like [If This Then That (IFTTT)](http://ifttt.com "IFTTT") and [Zapier](http://zapier.com), who provide end users with simple icon based tools for defining tasks that move data between SaaS platforms.

Its tough to define this space, which in enterprise speak is really just [Extract Transform Load (ETL)](http://en.wikipedia.org/wiki/Extract,_transform,_load), which is historically a process to migrate information between systems in an enterprise, using data sources and web services. But with the popularity of web APIs, we need to rethink ETL in the context of the cloud and update how we approach interoperability between the growing number of API driven platforms.

Mike Reich of Seabourne, and I were discussing this last time I was in Washington D.C., and he currently has a great blog post on [rethinking ETL for the API age](http://seabourneinc.com/2013/02/08/rethinking-etl-for-the-api-age/ "rethinking ETL in the API age"). If you don’t know [Seabourne](http://seabourneinc.com/ "Seabourne"), they are behind high profile government projects like [MyFCC](http://my.fcc.gov/ "MyFCC") and [GovInfo](http://govinfo.io/ "GovInfo"). They have been doing a lot of thinking about how to acquire, process and publish content with APIs.

To better help me better understand the space, I’m watching 12 service providers that I’m putting in a bucket of what I consider the next generation of ETL providers:

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/cloudwork-logo.png)

[**Cloudwork**](http://cloudwork.com/ "Cloudwork") - Cloudwork is a service that allows users to automate tasks between Google Apps, Salesforce, Evernote, Zoho, Twitter, Freshbooks, MailChimp, Zendesk, Dropbox, WordPress and others.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/elasticio_logo.png)

[**Elastic.io**](http://elastic.io/ "Elastic.io") - elastic.io helps you to automate routine operations and connect multiple cloud APIs.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/foxweave-logo.png)

[**Foxweave**](http://www.foxweave.com/ "Foxweave") - FoxWeave is a Cloud-Based Data Integration Platform that lets you easily migrate and synchronize data across all your Cloud and On-Premise applications and databases, without having to write any code.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/IFTTT-logo.jpeg)

[**If This Then That (IFTTT)**](https://ifttt.com/ "If This Then That (IFTTT)") - IFTTT is a service that enables customers to connect channels (i.e. Facebook, Evernote, Weather, Dropbox, etc.) with personally created or publicly shared Recipes.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/itduzzit-logo.png)

[**itDuzzit**](http://cloud.itduzzit.com/ "itDuzzit") - itDuzzit is a cloud integration platform like no other; simple enough for non-technical users, yet powerful enough to support the most complex integration.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/mashablelogic-logo.jpeg)

[**MashableLogic**](http://www.mashablelogic.com/ "MashableLogic") - MashableLogic is a mashup development platform that provides a system for leveraging API's by turning them into re-usable components that can be combined to compose software solutions.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/rules-io-logo.jpeg)

[**Rules.io**](https://www.rules.io/ "Rules.io") - Overwhelmed with too much data and too many metrics?  The rules.io team drills into your data with you, giving you a concrete idea of which users you should talk to and how to engage them.At the core of rules.io is a rules and segmentation engine which captures user-centric data such as usage and behavior, purchases, and technical problems, and allows you to act on this information in real-time or via triggered automation.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/snaplogic-logo.png)

[**SnapLogic**](http://www.snaplogic.com/ "SnapLogic") - SnapLogic's modern web architecture, "containerized" Snaps, and thriving SnapStore ecosystem make it the only practical way to continually connect your company to the burgeoning number and diversity of data sources and cloud applications. 

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/sortmybox-logo.png)

[**SortMyBox**](http://www.sortmybox.com/ "SortMyBox") - Like e-mail filters, for your files in the cloud. SortMyBox is a magic folder that moves files to folders based on your rules.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/wappwolf-logo.png)

[**Wappwolf**](http://wappwolf.com/dropboxautomator/ "Wappwolf") - Wappwolf is focused on deconstructing the barriers of the Cloud, by connecting your Evernote, Facebook, Flickr, and other web services / apps to Dropbox, allowing users to drag & drop files into a predefined folder on Dropbox and automatically convert and sync to your favorite places.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/yahoo-pipes-logo.jpg)

[**Yahoo Pipes**](http://pipes.yahoo.com/pipes/ "Yahoo Pipes") - Pipes is a composition tool to aggregate, manipulate, and mashup content from around the web. Like Unix pipes, simple commands can be combined together to create output that meets your needs.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/zapier-logo.png)

[**Zapier**](https://zapier.com "Zapier") - Zapier lets SaaS users create integrations that push data between hundreds of best-in-breed web applications without having to write any code or wrangle APIs.

I feel that this new group of ETL providers are focused sufficiently on the new world of API driven platforms, beyond just "data sources" and "web services". There are more providers like [Apatar](http://apatar.com/) and [Jitterbit](http://www.jitterbit.com/Solutions/etl-data-integration), but I feel these providers are more ETL than, than reflecting new breed of API interoperability providers (which I don’t have proper name for yet). One characteristic I’m looking for is ease of use. I think this new breed should be more for end-users, SaaS users and ultimately empowering the masses--not IT, which I feel ETL is designed for.

This new generation of [interoperability providers](http://apievangelist.com/trends/interoperability.php) should be about solving the problems average users face when operating online and in the cloud, and not just extracting, transforming and loading--making ETL something anyone can understand and put to use.  Further democratizing IT resources, which is a common theme with SaaS, APIs, etc.

I think the new players like Zapier and IFTTT have to be concerned with getting too complex for everyday users, become more ETL, than being about solving end-user problems. I think we will need very specialized, niche implementations--much like we are seeing with [BaaS](http://apievangelist.com/trends/baas.php) and the emergence of specialized versions like [BaaS for gaming](http://apievangelist.com/2013/02/01/new-open-source-backend-as-a-services-platform-for-game-developers/). Very niche versions of ETL like [SortMyBox](http://www.sortmybox.com/ "SortMyBox") and [WapWolf Dropbox Automator](http://wappwolf.com/dropboxautomator/), which focus only on solving file management problem users are facing, will be successful, because they are easy for users to understand and put to work.

I think there is an opportunity to quickly build the next generation ETL solutions that solve a set of automation, integration and interoperability problems for a niche audience using the simple icon based format we are seeing from providers like IFTT and [Elastic.io](http://elastic.io/ "Elastic.io"). If you are considering building one of these new solutions, make sure and evaluate existing open source ETL solutions like:

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/automateit-logo.png)

[**AutomateIt**](http://automateit.org/ "AutomateIt") - AutomateIt is an open source tool for automating the setup and maintenance of servers, applications and their dependencies, providing a way to manage files, packages, services, networks, accounts, roles, templates and more. 

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/cloveretl-logo.png)

[**CloverETL**](http://www.cloveretl.com/ "CloverETL") - CloverETL is open source data integration platform based on Java. It can be used for data migration, data cleansing and other data transformation tasks.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/pentaho-logo.png)

[**Pentaho - Kettle**](http://kettle.pentaho.com/ "Pentaho - Kettle") - Delivers powerful Extraction, Transformation and Loading (ETL) capabilities using an innovative, metadata-driven approach. With an intuitive, graphical, drag and drop design environment, and a proven, scalable, standards-based architecture, Pentaho Data Integration is increasingly the choice for organizations over traditional, proprietary ETL or data integration tools.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/talend-logo.png)

[**Talend**](http://www.talend.com/ "Talend") - Talend offers open source middleware solutions that address big data integration, data management and application integration needs for businesses of all sizes.

Don’t reinvent the wheel, by rolling out your own ETL framework if at all possible. This will allow you to focus on the specific acquire, transform and publish needs of your niche audience. Even some of the new breed of providers are providing open source tools, like the [Geekier project](https://github.com/rulesio/geekier/wiki) from [Rules.io](https://rules.io/), so do your homework. Also consider putting existing API aggregation providers like [Singly](http://singly.com "Singly") to use, providing faster acquire and publish API connections with popular APIs, while also standardizing the objects across all platforms.

I can envision video, photo, quantified-self and other niche services emerge that will empower any user to put APIs to use and acquire, transform and publish the valuable data, information and other content that are central to our increasingly fragmented online lives. These new solutions will be framed in easy to understand terms that speak to specific audiences, putting valuable API resources within reach of the masses.