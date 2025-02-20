---
published: true
layout: post
title: JSON Schema, Examples, And Postman Collections For 600 Schema.org Objects
image: >-
  https://kinlane-productions2.s3.amazonaws.com/schema-org/schema-org-schema-screenshot.png
author:
  name: kinlane
tags:
  - JSON Schema
  - Examples
  - Schema.org
---
I wanted a ready to go supply of JSON examples from a variety of industries for me to use in my storytelling. No better place to begin with a project like this than with [Schema.org](https://schema.org/), who provides a schema for just about anything you can think of. Karate Studio API anyone? I already had some scripts setup for creating Swagger 2.0 files from Schema.org, so [I got to work retrofitting my Schema.org index to produce JSON Schema representations for each of the 600 objects in the index](http://schema.org.apievangelist.com/). Providing me with wealth of schema to choose from when I am defining new APIs, and telling stories about how APIs can make an impact across many different industries.  
  
After generating [JSON Schema for 600 Schema.org objects](http://schema.org.apievangelist.com/), I worked to generate an example JSON for each of the objects, so I can demonstrate the schema as well as what it will look like while in use. The challenge with this work is how deep do you go when following the wormhole of Schema.org object properties—I opted to only do one level at the moment. I started hydrated each property that was an object, but then after going 5 levels deep I realized I should probably put more thought into this before creating massive JSON objects. I’ll work on this as a separate task, tackle a handful of the objects to better understand just how deep things can go, and come up with a better strategy for handling.  
  
Next I wanted to take each JSON example and create a simple one request Postman Collection, so I wrote a script to generate 600 basic collection producing just a single GET request, with the single level JSON example as a response. I’m not going to actually import my collections in Postman until I get them a little more polished, but so far the process has provided me with a nice proof of concept for starting new APIs from Schema.org using Postman. Next I will republish each Postman API Collection with POST, PUT, and DELETE methods, rounding off the CRUD nature of each of my Schema.org org API definitions. Providing simple seeds that anyone can use to quickly define and deploy an API that uses standardized schema, increasingly the interoperability between APIs, and realizing the value that Schema.org brings to the table.  
  
After having JSON Schema, JSON examples, and Postman Collections defined I am going to generate OpenAPI 3.0 definitions to round things off. Then I’ll see what is possible for turning my Postman Collections into mock servers, and creating tests, monitors, and other API contract enablement elements. If you have any needs around these Schema.org seeds that might help you deliver new APIs, and standardize the schema you have in play across your API infrastructure. I’ll be investing a couple of hours a week into my Schema.org API definitions, evolving them into a robust toolbox for me to use across my API storytelling. Hopefully along the way I can also provide a robust set of schema than anyone can use to power their API development, and most importantly help demonstrate the power of Schema.org, which is something that I feel strongly is under-represented across the API sector.