---
published: true
layout: post
title: XML, JSON, YAML, and CSV
tags:
  - XML
  - JSON
  - YAML
  - CSV
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/birth-of-a-nation-sierraville-post-office.jpeg
---
I am working with my kiddo on some API work while they are looking for a job after graduating from university, taking advantage of the free labor to help me search for and profile APIs. I enjoy this work, cause despite being around me doing APIs for all these years, it is all still a lot of API blah blah blah to them. I see this as an opportunity for me to help onboard them with some simple concepts, while also stepping back and producing some of the basic building blocks my customers will need to make sense of their own world of APIs.

As I was profiling an API I created an APIs.json, OpenAPI, and JSON Schema, that were all in YAML—-which is pretty confusing when you call something APIs.json JSON Schema. This caused me to step back and better explain the difference between JSON and YAML, which is something that forced me to also expand to XML and CSV to help demonstrate how the serialization of simple address data would happen.

# XML
```
<?xml version="1.0"?>
<street>306 Lincoln St</street>
<city>Sierraville</city>
<state>CA</state>
<zip>96126</zip>
```

# JSON
```
{
  "street": "306 Lincoln St",
  "city": "Sierraville",
  "state": "CA",
  "zip": 20500
}
```

## YAML
```
street: 306 Lincoln St
city: Sierraville
state: CA
zip: 20500
```

## CSV
```
street,city,state,zip
306 Lincoln St,Sierraville,CA,20500
```

Explaining JSON, YAML, and even XML to a normal person felt like it fell flat, but once I added in CSV and connected it to a spreadsheet, I think it felt more relevant. My kiddo has spent a lot of time crafting spreadsheets for the jobs they’ve had, projects and classes they’ve been part of, all priming the pump for what they will encounter in other jobs. [I have another Address API story that supports this narrative](https://apievangelist.com/2023/11/02/a-schema-driven-address-api-negotiation/), but I feel like it is still pretty complex to help demonstrate the potential of APIs to normals. I will spend more time work shopping these examples.

I am going to use this opportunity to work my way through all my API 101 material. I spend so much time at the advanced end of the spectrum I enjoy getting back to basics with APIs. My new found focus on HTTP APIs are going to help apply some meaningful constraints to my storytelling, constantly forcing me to simplify, reduce, and resist complexity all along the way. I think fundamental HTTP APIs and webhooks are still pretty complex, even before we begin piling on GraphQL, Websockets, and all of the authentication and other things you need to do.

