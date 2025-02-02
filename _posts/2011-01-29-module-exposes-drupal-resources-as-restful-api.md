---
layout: post
title: Module Exposes Drupal Resources as RESTful API
url: >-
  http://apievangelist.com/2011/01/29/module-exposes-drupal-resources-as-restful-api/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - REST
  - Resources
---
A [new Drupal module](http://drupal.org/project/restws) makes use of the [Drupal Entity API](http://drupal.org/project/entity) and then takes information about the entity and delivers it as a [Restful](http://www.kinlane.com/) [Web Service](http://www.apievangelist.com/).

kinlane-productions2.s3.amazonaws.com Features are:[](http://drupal.org)![](http://kinlane-productions.s3.amazonaws.com/drupal-logo.jpg)

*   RESTful compliant
*   Support for all Drupal entity types
*   Provides create, read, update and delete (CRUD) operations
*   Service endpoints are automatically generated for each entity
*   JSON response format

You can [download the module on Github](http://github.com/klausi/restws), but it is also synchronized to the [Drupal.org CVS](http://drupal.org/node/36662).

This module allows Drupal owners to immediately deliver a RESTful API from their existing Drupal site and can also be used by developers looking to quickly deliver an API can build it using the Drupal platform.