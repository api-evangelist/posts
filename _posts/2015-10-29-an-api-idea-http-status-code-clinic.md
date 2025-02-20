---
layout: post
title: 'An API Idea: HTTP Status Code Clinic'
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-clinic.png
author:
  name: kinlane
tags:
  - HTTP
  - Status
  - Code
---
This is one of my ideas for an API service provider, that I will never get time to do, but would love to see exist in the space, so I am happy to put out there for someone else to do. I'm calling this one an HTTP Status Code Clinic, which would be an API definition driven API service provider (why would you do it any other way in 2015), that would help API providers tailor more useful, and meaningful HTTP status codes.

HTTP Status Code Clinic would be a simple software as a service, complete with its own API (why would you do it any other way in 2015), and CLI for operating as well. You would pass it a Swagger, API Blueprint, RAML, or any other API definition format, and it would return a bunch of feedback on HTTP status codes returned (or not). The process could anchor the feedback in the current API design, while also providing HTTP status code education along the way.

The service would have to get crafty around how it walked through an API, requesting sample data, or requiring default values for query parameters, headers, body, etc. If it was done well it could be done as a kind of wizard that walked the user through each endpoint, what was returned, and might be better solutions, as well as additional status codes that could be used. You could also include examples from popular APIs like Twilio, Twitter, and others, to show what is possible.

I recommend you do this as a standalone service. While it might be nice to have as part of an existing service provider stack, I think it makes more sense to offer as a standalone clinic / service that API providers could use when they are ready. API designers and architects could make it part of the API design and definition portion of their life-cycle, as well as integrate into their existing systems using the HTTP Status Code Clinic API--other API service providers could also integrate the features into their tooling using the API

This is an open API idea, yours for the taking, it you want more detail from me on how I'd approach, I would be willing to do some tech investment for a piece of the action. Good luck!