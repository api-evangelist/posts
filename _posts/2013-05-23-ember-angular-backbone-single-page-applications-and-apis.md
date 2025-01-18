---
layout: post
title: Ember, Angular, Backbone, Single Page Applications and APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/single-page-web-applications.png
author:
  name: kinlane
tags:
  - Applications
  - APIs
---
[![](https://s3.amazonaws.com/kinlane-productions2/single-page-applications/single-page-web-applications.png)](http://www.slideshare.net/3scale/the-api-and-appification-of-the-web)

I was looking through [Steve Willmott's slide deck](http://www.slideshare.net/3scale/the-api-and-appification-of-the-web) from his talk at [GlueCon](http://www.gluecon.com/ "GlueCon") this week, called [The API- & App-ification of the Web](http://www.slideshare.net/3scale/the-api-and-appification-of-the-web).

He talks about the evolution towards Single Page Web Applications (SPA). Which is the migration from static web pages and database driven web apps to dynamically driven HTML, CSS and JavaScript apps designed using popular JavaScript frameworks and libraries like:

*   **[Ember.js](http://emberjs.com/)** - Ember.js is an open-source client-side JavaScript web application framework based on the model-view-controller (MVC) software architectural pattern. It allows developers to create scalable single-page applications\[1\] by incorporating common idioms and best practices into a framework that provides a rich object model, declarative two-way data binding, computed properties, automatically-updating templates powered by Handlebars.js, and a router for managing application state
*   **[Angular.js](http://angularjs.org/)** - AngularJS is an open-source JavaScript framework, maintained by Google, that assists with running what are known as single-page applications. Its goal is to augment browser-based applications with model–view–controller (MVC) capability, in an effort to make both development and testing easier.
*   **[Backbone.js](http://backbonejs.org/)** - Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface

Single page applications have benefits like speed, no page reloads, mobile optimization, real-time pushes, notifications and they just look freak'n cool. But there are also downsides like needing some healthy JavaScript talent to maintain, SEO issues and a general deviation from the linked, document driven web we are used to.

The popularity of frameworks and libraries like Ember, Angular and Backbone, and the Single Page Application approach isn't something just developers are noticing. Some top platforms are seeing the potential, and providing code and toolkits for integrating using Ember, Angular and Backbone:

*   At **[Crowdflower](http://crowdflower.com/)** with [Ember.js at CrowdFlower](http://blog.crowdflower.com/2013/04/ember-js-at-crowdflower/)
*   At **[Firebase](https://www.firebase.com/)** with [Firebase Bindings for Angular](https://www.firebase.com/blog/2013-03-29-firebase-bindings-for-angular.html) and [Firebase Bindings for Backbone.js](https://www.firebase.com/blog/2013-01-29-backfire-firebase-bindings-for-backbonejs.html)
*   At [Salesforce](http://salesforce.com) with [Using JavaScript with Force.com](http://blogs.developerforce.com/developer-relations/2013/03/using-javascript-with-force-com.html) & [HTML5, Angular and Backbone Mobile Service Packs](http://blogs.developerforce.com/developer-relations/2013/04/html5-angularjs-backbone-mobile-service-packs.html)

With the popularity of JavaScript libraries and frameworks, and growing number of SPAs, there is a huge opportunity for API providers to offer API driven libraries and widgets that are plug and play with frameworks like Angular and Ember, and are compatible with libraries like Backbone.

As I monitor the API space I will continue looking for examples of APIs doing interesting things with Ember, Angular and Backbone. Let me know if you see anything I should take a look at.

**Disclosure:**  3Scale is an API Evangelist partner