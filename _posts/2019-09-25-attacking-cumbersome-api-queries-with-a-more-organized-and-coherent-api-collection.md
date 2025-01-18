---
published: true
layout: post
title: >-
  Attacking Cumbersome API Queries With A More Organized and Coherent API
  Collection
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/desert-dragon-light-dali.jpg
author:
  name: kinlane
tags:
  - Queries
  - Collections
---
I’m working extra hard when it comes to creating APIs across every possible industry I can think of to help push my understanding of what Postman collections are all about, and what is possible when putting them to work. As I progress in my work I am quickly realizing how much more versatile they are than OpenAPI definitions, allowing me to do things I wanted to do with OpenAPI, but couldn’t always figure out how to make happen. Some of my dedicated readers might be getting sick of hearing me talk about Postman collections, but since most of my readers don’t follow me regularly and rely weekly updates via email, or stumble across my work as part of search engine exploration—I am going to continue cranking out the stories! [While working with an API collection for the Food and Drug Administration (FDA) National Drug Code (NDC) API](https://www.apievangelist.com/2019/09/24/enabler-mock-data-apis-alongside-other-apis-within-my-collections/), I realized how Postman collections can help flatten some cumbersome API queries I encounter while on-boarding with some of less than well designed APIs out there.  
  
Many APIs are born out of database backends, with very little design applied to the APIs externalizing the database tables. Because of this most APIs offer Create, Read, Update, and Delete (CRUD) functionality with the parameters reflecting the core elements of a SQL Query. In these situations, database developers assume that consumers will possess enough knowledge about the underlying schema and requiring them to fill in the blanks of what fields should be returned, and the details of the where clause determining which records will be returned. Missing the point of what APIs are all about, and workig harder to externalize the rich resources available within database tables by providing intuitive paths, parameters, and other elements that help any consumer understand what is possible. Database developers who deploy APIs make these mistakes over and over again, making many assumptions about what other developers will know and not know, introducing unecessary friction for developers who are on-boarding with their APIs.  
  
[The Food and Drug Administration (FDA) National Drug Code (NDC) API](https://open.fda.gov/apis/drug/ndc/example-api-queries/) possesses a lot of rich data inside of it, but it does a pretty poor job of documenting everything it is capable of its would-be consumers, forcing you to do a significant amount of sleuthing before you can really get at the entire surface of the API. The API provides a search property which allows you to pass in a variety of properties including brand\_name:”{brand name}“ and active\_ingredients:”{active ingredient}“. The approach isn’t too uncommon, and if you have played with many different APIs you can pretty quickly follow what is going on. Where the challenge really comes in is knowing what the values are for brand name and active ingredients—they don’t document them for you. Providing two hurdles for the average consumer when on boarding: 1) figuring out the search properties, and 2) hunting down what the potential values can be. Something not all developers or non-developers will be able to get over.  
  

To help abstract away this complexity I am developing a Postman collection for the Food and Drug Administration (FDA) National Drug Code (NDC) API, possessing folders for each of the search properties, with individual collections that are pre-populated values for each parameter, so consumers do not have to learn the query language or the potential values.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/pharmaceutical_drugs_brands.jpg)

Here are a handful of examples of the queries I’ve populated:

*   **Brands**
    *   Abilifu
    *   Humira
    *   Nexium
    *   Crestor
    *   Enbrel
*   **Active Pharmaceutical Ingredients**
    *   Abiraterone Acetate
    *   Acamprosate Calcium
    *   Acitretin
    *   Adapalene
    *   Adefovir Dipivoxil

All a potential consumer of the Food and Drug Administration (FDA) National Drug Code (NDC) API has to do is click on the Run in Postman Button, open the folder for brands or active pharmaceutical ingredients and click on the option they want, and click “send”, and they get the results. Eliminating the friction for API consumers using a Postman collection. This is one of the features of Postman collection that you can accomplish with an OpenAPI, but because of the historic use cases for OpenAPI, it isn’t something anyone has fully realized. For me, it is a simple, yet potentially powerful feature that can significantly make APIs more accessible to developers, and non-developers alike. This is friction that could be easily addressed through some investment in APIs design as well as API documentation, but for APIs that haven’t done this, Postman collections make for a pretty sweet plan B approach.  
  
This is one of many killer features I’m uncovering while playing around with Postman, while cranking out Postman collections for many different APIs. I am purposely playing around with many different types of APIs because I want to see how I can push the boundaries of what Postman collections are capable of doing, and transcend the technical aspects of API integration, and make APIs more intuitive for consumers who aren’t necessarily up to speed on all the gotchas when it comes to API integration. I have a LOT of work to do on this Food and Drug Administration (FDA) National Drug Code (NDC) API collection before it is ready for publishing. Once I have all the parameters and values added to the collection I will share in another blog post. I’m playing around with dynamically generating the Postman collections from APIs I have created for each of the lists of property values I’ve gathered from other data sources outside of the FDA developer area. I really don’t want to be manually adding each request to the collection, and automated the creation of this type of Postman collection will pay dividends in the future when I come across similar APIs that are missing their parts and pieces, and haven’t gone the distance with their API design--allowing me to make some very useful APIs more accessible using Postman collections.

I’m working extra hard when it comes to creating APIs across every possible industry I can think of to help push my understanding of what Postman collections are all about, and what is possible when putting them to work. As I progress in my work I am quickly realizing how much more versatile they are than OpenAPI definitions, allowing me to do things I wanted to do with OpenAPI, but couldn’t always figure out how to make happen. Some of my dedicated readers might be getting sick of hearing me talk about Postman collections, but since most of my readers don’t follow me regularly and rely weekly updates via email, or stumble across my work as part of search engine exploration—I am going to continue cranking out the stories! [While working with an API collection for the Food and Drug Administration (FDA) National Drug Code (NDC) API](https://www.apievangelist.com/2019/09/24/enabler-mock-data-apis-alongside-other-apis-within-my-collections/), I realized how Postman collections can help flatten some cumbersome API queries I encounter while on-boarding with some of less than well designed APIs out there.  
  
Many APIs are born out of database backends, with very little design applied to the APIs externalizing the database tables. Because of this most APIs offer Create, Read, Update, and Delete (CRUD) functionality with the parameters reflecting the core elements of a SQL Query. In these situations, database developers assume that consumers will possess enough knowledge about the underlying schema and requiring them to fill in the blanks of what fields should be returned, and the details of the where clause determining which records will be returned. Missing the point of what APIs are all about, and workig harder to externalize the rich resources available within database tables by providing intuitive paths, parameters, and other elements that help any consumer understand what is possible. Database developers who deploy APIs make these mistakes over and over again, making many assumptions about what other developers will know and not know, introducing unecessary friction for developers who are on-boarding with their APIs.  
  
[The Food and Drug Administration (FDA) National Drug Code (NDC) API](https://open.fda.gov/apis/drug/ndc/example-api-queries/) possesses a lot of rich data inside of it, but it does a pretty poor job of documenting everything it is capable of its would-be consumers, forcing you to do a significant amount of sleuthing before you can really get at the entire surface of the API. The API provides a search property which allows you to pass in a variety of properties including brand\_name:”{brand name}“ and active\_ingredients:”{active ingredient}“. The approach isn’t too uncommon, and if you have played with many different APIs you can pretty quickly follow what is going on. Where the challenge really comes in is knowing what the values are for brand name and active ingredients—they don’t document them for you. Providing two hurdles for the average consumer when on boarding: 1) figuring out the search properties, and 2) hunting down what the potential values can be. Something not all developers or non-developers will be able to get over.  
  
To help abstract away this complexity I am developing a Postman collection for the Food and Drug Administration (FDA) National Drug Code (NDC) API, possessing folders for each of the search properties, with individual collections that are pre-populated values for each parameter, so consumers do not have to learn the query language or the potential values. Here are a handful of examples of the queries I’ve populated:

*   **Brands**
    *   Abilifu
    *   Humira
    *   Nexium
    *   Crestor
    *   Enbrel
*   **Active Pharmaceutical Ingredients**
    *   Abiraterone Acetate
    *   Acamprosate Calcium
    *   Acitretin
    *   Adapalene
    *   Adefovir Dipivoxil

All a potential consumer of the Food and Drug Administration (FDA) National Drug Code (NDC) API has to do is click on the Run in Postman Button, open the folder for brands or active pharmaceutical ingredients and click on the option they want, and click “send”, and they get the results. Eliminating the friction for API consumers using a Postman collection. This is one of the features of Postman collection that you can accomplish with an OpenAPI, but because of the historic use cases for OpenAPI, it isn’t something anyone has fully realized. For me, it is a simple, yet potentially powerful feature that can significantly make APIs more accessible to developers, and non-developers alike. This is friction that could be easily addressed through some investment in APIs design as well as API documentation, but for APIs that haven’t done this, Postman collections make for a pretty sweet plan B approach.  
  
This is one of many killer features I’m uncovering while playing around with Postman, while cranking out Postman collections for many different APIs. I am purposely playing around with many different types of APIs because I want to see how I can push the boundaries of what Postman collections are capable of doing, and transcend the technical aspects of API integration, and make APIs more intuitive for consumers who aren’t necessarily up to speed on all the gotchas when it comes to API integration. I have a LOT of work to do on this Food and Drug Administration (FDA) National Drug Code (NDC) API collection before it is ready for publishing. Once I have all the parameters and values added to the collection I will share in another blog post. I’m playing around with dynamically generating the Postman collections from APIs I have created for each of the lists of property values I’ve gathered from other data sources outside of the FDA developer area. I really don’t want to be manually adding each request to the collection, and automated the creation of this type of Postman collection will pay dividends in the future when I come across similar APIs that are missing their parts and pieces, and haven’t gone the distance with their API design--allowing me to make some very useful APIs more accessible using Postman collections.