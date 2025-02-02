---
layout: post
title: A Quick Example Of An API Provider Putting Content Type Negotiation To Work
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Content
---
While there are numerous examples of APIs that successfully offer more than one option when it comes to the content types their API returns, the concept is missing from the large portion of the APIs I review. When I see good examples of this in the wild, I try to make time to showcase, and share, to help with the HTTP literacy of my readership.

One API which is rocking several fronts when it comes to API design for me, is the [Global Change Information System](http://data.globalchange.gov/), which interestingly is an alliance between government agencies, not something born out of Silicon Valley. When requesting resources from the GCIS API, the following HTTP accept headers are honored:

*   application/json
*   application/x-turtle
*   text/turtle
*   application/n-triples
*   text/n3
*   text/rdf-n3
*   application/ld-json
*   application/rdf+xml
*   application/rdf+json

When integrating with the GCIS API, it all begins with some basic JSON, but then look at all the other linked data goodness in there! JSON-LD, RDF, Turtle!! Discovering APIs that support robust content type negotiation like this can be hard to find, most APIs don't talk about it, so even if they do, there is no way to know about it. Thankfully the GCIS API shares it via email, as well as describes in the [GCIS Swagger definition](/admin/blog/view-source:http:/data.globalchange.gov/api_reference.json), which is how I learned about it. 

Content-Type negotiation is one of those HTTP literacy areas that need a lot of discussion, helping on-board API newbies to the power and possibilities that are present here, and that you can go beyond just plain ol JSON, and receive much richer API responses.