---
layout: post
title: Adding Google To List Of API Deployment Companies
image: >-
  https://s3.amazonaws.com/kinlane-productions2/google-cloud-platform/google-cloud-platform-logo.png
author:
  name: kinlane
tags:
  - Deployment
  - ddi
---
[![](https://s3.amazonaws.com/kinlane-productions2/google-cloud-platform/google-cloud-platform-logo.png)](https://cloud.google.com)

I was taking another look at the [Google Cloud Platform](https://cloud.google.com/) yesterday, and stumbled across [Google Cloud Endpoints](https://developers.google.com/appengine/docs/java/endpoints/?_ga=1.186468064.812314948.1407779892). It was something I saw come across my feeds, but really didn’t give it the time it needed to see what it was all about. With the new Google Cloud Endpoints, Google is making a strong push to be not just an API deployment provider, but their approach also reflects what I’d consider to be an evolution of backend as a service (BaaS) deployment.

I think Google describes their service better than I can do it justice:

> _Google Cloud Endpoints consists of tools, libraries and capabilities that allow you to generate APIs and client libraries from an App Engine application, referred to as an API backend, to simplify client access to data from other applications. Endpoints makes it easier to create a web backend for web clients and mobile clients such as Android or Apple's iOS._

While much of the Google Cloud Platform offering looks a lot like the cloud offering over at Amazon Web Services, AWS definitely does not have API deployment as a service, baked into their cloud stack, like Google does with Google Cloud Endpoints.

![](https://s3.amazonaws.com/kinlane-productions2/google-cloud-platform/google-cloud-endpoints-architecture.png)

Google puts an emphasis on API endpoint deployment for mobile purposes, but leaves it open to be used in JavaScript as well—which seems a little limiting, since you could call same endpoints in any language. Oh well, I’m not writing their marketing.

> _..the API backend is an App Engine app that performs business logic and other functions for Android and iOS clients, as well as JavaScript web clients. The functionality of the backend is made available to clients through Endpoints, which exposes an API that clients can call._

Google provides SDKs for Android, iOS, and JavaScript, as well as a very Java heavy development process using [Maven](https://developers.google.com/appengine/docs/java/endpoints/getstarted/backend/create_project), combined with the [Google Plugin for Eclipse](https://developers.google.com/eclipse/docs/cloud_endpoints), which is used to design, develop, and deploy your APIs to [Google App Engine](https://developers.google.com/appengine/).

All Google has to do now, is open up the [Google Console](https://console.developers.google.com) as a Google Cloud Endpoints management console, giving developers on the Google Cloud Platform the ability to design, deploy, and manage their APIs. Then if Google baked in [Google Discovery](https://developers.google.com/discovery/) services for all Google Cloud Endpoints, developers would have a pretty slick discovery layer on top of their cloud API stacks. Hell, all you need then is to allow generation of [APIs.json](http://apisjson.org/) for each collection, and boom you have a pretty complete API design, deployment, management, and discovery platform in the clouds.

Now that Google is added to my [API deployment research](http://deployment.apievangelist.com), I will be keeping a closer eye on what they are doing in respects to being a cloud API platform.