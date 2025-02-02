---
layout: post
title: Setting rel=api Into Motion With Latest APIs.json Release
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-icon.jpg
author:
  name: kinlane
tags:
  - APIs.json
  - APIs
  - APIs.jso
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-icon.jpg)](http://apisjson.org/)Bruno Pedro ([@bpedro](/admin/blog/bpedro)) who has been building [APIs.json](http://apisjson.org/) into his [API Changelog service](https://www.apichangelog.com), made a pull request to the specification recently, pushing forward the link relation conversation for APIs.json. As listed in the specification, we have long intended to make APIs.json an official media type:

**3.5.  Media Type**

It is intended that if there is sufficient traction, the media type "application/apis+json" will be   submitted to IANA as per RFC: http://tools.ietf.org/html/rfc4288

However when it came to expressing your APIs.json as a link relation, we didn't even really have a plan in our road-map, resulting in a very generic allocation of a link relation for APIs.json.

**3.8. Link Relation**

 In order for an API to reference its own description, it is recommended that it include header or in-line references to the APIs.json file using the existing described by link relation:

\[Note, this is a generic link relation but seems to fit the bill\]

What Bruno is suggesting that we get a little more precise when it comes to our link relation, something the rest of the governing group for APIs.json agrees with. Here is the last update to the link relation:

**3.8. Link Relation** 

In order for a Web site to reference its API description, it is recommended that it includes a header or   in-line reference to the APIs.json resource using the api link relation, e.g.: 

It is intended that if there is sufficient traction, the link relation “api” will be   submitted to IANA as per RFC: http://tools.ietf.org/html/rfc5988

As with the media type, we intend to submit the link relation to Iana, per its RFC. Bruno's pull request sets in motion the formal link relation, but then also escalates the media type submission as well. 

With the interest and usage we have seen in the first year of the specification, we are confident the API discovery format will get traction. We are already seeing exploration around the link relation, achieving RSS like experience in the browsers, when visiting websites that have an active API program.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-evangelist-link-relation.png)

I have added a link relation to my [API Evangelist](http://apievangelist.com), [Kin Lane](/admin/blog/Kin Lane), and [Master API project](https://kin-lane.github.io/master/), all pointing to my [central APIs.json](https://kin-lane.github.io/master/apis.json), which provides an index of not just each of the APIs I use to operate the API Evangelist network, but also the supporting building blocks of API operations like pricing, support, etc. 

Thanks Bruno for the pull request, pushing out a minor release of the APIs.json spec, [moving us to 0.15](http://apisjson.org/format/apisjson_0.15.txt). This release primes the pump, for a queue of APIs.json requests that are in the works, like more API property types, country origin, and much more.