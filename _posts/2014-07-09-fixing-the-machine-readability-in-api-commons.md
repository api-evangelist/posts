---
layout: post
title: Fixing The Machine Readability in API Commons
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-machine-learning.png
author:
  name: kinlane
tags:
  - API Commons
---
When I first published 11 simple API definitions, I had developed using [schema.org](http://schema.org/), into the [API Commons](http://apicommons.org/), I made a mistake when I referenced the Swagger specifications for each of the APIs. I linked to the machine readable Swagger spec, but not the raw JSON stored on Github, errorneously I linked directly to the Github page.

I want the [machine readable API datastore](https://raw.githubusercontent.com/api-commons/api-commons/gh-pages/data/apis.json), at API Commons, which is used to drive the [API listing page](http://apicommons.org/apis.html), to be completely machine readable, referencing all APIs, their machine readable API Commons manifest, as well as machine readable API definition. As the smart folks over at [APIMatic](https://www.apimatic.io/) pointed out to me, I had been flip-flopping on this. Some of my later entries were machine readable pointers, but my earlier entries were not.

Now all of the entries in the commons, have machine readable references to both their API Commons manifest, and API definition. I've also added a “[format](http://apicommons.org/format.html)” page, to explain each of the fields, in the the API Commons manifest format, to help API providers better understand, and not make the same mistake I made.

The API Commons manifest is meant to be a standalone, machine readable pointer to an APIs central truth (a machine readable API definition), and associated CC-BY-SA or CC0 licensing, and now, I think we have achieved our original goals around making this happen.