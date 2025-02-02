---
layout: post
title: A Dictionary To Lookup Web Concepts And Specs For The JavaScript Tooltip
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-dictionary-popup.png
atomdate: 2016-09-08T22:00:00.000Z
tags:
  - Web
  - Specs
---
I am working on taking the [JSON feed of web concepts and specs](http://apievangelist.com/2016/09/06/a-json-feed-of-critical-web-concepts-to-integrate-into-api-design-service-and-tooling/) and developing a [simple website JavaScript tooltip library](http://apievangelist.com/2016/09/07/a-web-concepts-and-specifications-javascript-library-for-api-providers/) that API providers can employ to inject web literacy into their API developer portals and documentation. I have settled in on using an existing [JavaScript tooltip library](http://darsa.in/tooltip/) for the functionality but I needed to brainstorm what I'd like to see as the dictionary lookup for web and API literacy tooling.

First, I want the JavaScript library to be able to copy and paste into an API developer portal HTML header and just work. By default, it should spider the body, look for any words that are already in the [web concepts](http://webconcepts.info/concepts/concepts.json) and [specs](http://webconcepts.info/specs/specs.json) JSON feeds provided by Erik Wilde's (@dret) [webconcepts.info](http://webconcepts.info) work, and turn into a tooltip + link. However, I want API providers to easily be able to add to the dictionary for each web concept or spec, and allow it to find special words, and variations of words, and map to a specific web concept or spec as well.

I picture API providers learning from this tool as they work to craft the content for their API portals, and the documentation for their APIs. I'm picturing a little popup icon for each page where this tool is embedded, allowing you to authenticate and highlight words which you would like added to the dictionary, while also search and autocomplete concept and spec definitions that exist, which you may not have known about (in line education). Ideally, these concepts are injected API design time tools and services, but for right now I want to work on the scope of use at API documentation time.

When I cache the JSON for Erik's web concepts and specs, I will augment with a dictionary array for each entry, so that I can add keywords and phrases, providing the mapping for use in the JavaScript library as it spiders the content of the API portal and documentation page. Replacing out common references to common things like [RFC 6713: gzip](http://webconcepts.info/specs/IETF/RFC/6713), and [Cross-Origin Resource Sharing (CORS)](http://webconcepts.info/specs/W3C/TR/cors), and beyond. I want this dictionary to be manageable for API providers, and performing most of the heavy lifting when mapping and converting keywords and phrases in API content and documentation--making web literacy more of a default state across API portals, both in the planning stages, as well as consumption by developers.

Now for the work of actually coding the dictionary, alongside the tooltip library, after I pull in the JSON feeds for the [web concepts](http://webconcepts.info/concepts/concepts.json) and [specs](http://webconcepts.info/specs/specs.json).