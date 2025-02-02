---
layout: post
title: Chartboost&#039;s API Driven Approach to Application Development
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Chartboost-Logo.png
author:
  name: kinlane
tags: []
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/chartboost/Chartboost-Logo.png)](http://chartboost.com)

The team over at [Chartboost](http://chartboost.com) have a pretty forward thinking [blog post about what they see as the next generation of web application development](http://blog.chartboost.com/post/36221629171/web-3-0-help-site?hn).

They feel that the future is about creating web applications, not sites. The server side should be an API and the client should be a self-contained app which uses the API as its back-end. With mobile applications following the same pattern.

To practice what they preach, Charboost is overhauling their help site to be an API driven web app using the following approach:

*   **Push State** - Provide site navigation without page refreshes by faking navigation and inserting JavaScript callbacks
*   **JSON-API** \- A REST API providing JSON to drive the site
*   **Responsive Design** \- Providing an application design that responds to mobile as well as it does laptops or desktop computers
*   **Vector (Icon Fonts & CSS)** - Using a combination of icon fonts and CSS3 to deliver the UI. SCSS - A new technology that uses CSS-preprocessing to make the CSS code cleaner and res-usable
*   **Markdown** - Using the simple markup language to allow anyone on their team to write and edit help articles
*   **GitHub** - Using Github to manage the help center as an open project

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/chartboost/Chartboost-Help-Center-Screenshot.png)](http://chartboost.com)

I agree that their metholody has the potential to be one possible future of web and mobile application development. JavaScript and API development have both matured in the last 10 years, getting us to this point where you can build some damn sexy, but simple apps that run smoothly on the web or mobile devices.  

Or as Chartboost puts it:

> _We believe that the web is finally reaching a tipping point. The culmination of a decade of incremental improvements to web technologies is upon us, and lets us do things in a way that is radically new and better._

I’m also playing around with my own approach to delivering apps in this way using Github + Jeckyll + Mustache Templates with JSON data stores, all running as open repositories using Github Pages.

I’ll have more to publish on this in the near future.