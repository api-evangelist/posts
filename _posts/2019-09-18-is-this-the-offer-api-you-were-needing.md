---
published: true
layout: post
title: Is This The Offer API You Were Needing?
image: https://kinlane-productions2.s3.amazonaws.com/postman/new-api/api-response.png
author:
  name: kinlane
tags:
  - Offers
---
Going from an idea for an API, to something you can actually share with another team member or stakeholder is historically something that can take hours, days or even weeks. Even if you manage to convey your idea to another or team member, you can’t always guarantee they’ll understand the API design as intended. The best way to convey your thoughts is to mock and document your API as if it was a real API, letting your intended audience actually review the documentation, make actual calls to the API, and provide feedback on each individual request, or even begin changing the design and implementation as part of their feedback.  
  
I wanted to see how easy it was to take a new idea for an API and make it something that can be easily shared and worked with using Postman. I had recently been updating the JSON Schema for my Schema.org objects, so I quickly wrote a script to generate JSON samples from each of the standardized objects, and picked a random object to use in my demonstration—Offers. Now that I have a JSON example I can get to work generating a new mock API using my JSON snippet, creating a single API GET request, with the JSON as the request response. First I create a new mock server using the orange new button.  
![](https://kinlane-productions2.s3.amazonaws.com/postman/new-api/new-mock.png)

Then I create a single GET endpoint for my API, and paste the JSON Schema for my Schema.org offers snippet into the response body for my new API endpoint.  
![](https://kinlane-productions2.s3.amazonaws.com/postman/new-api/new-request.png)

Then I just follow the rest of the wizard, giving my mock API a name, and leaving most other settings as their default before moving on to actually being able to use my mock API.  
![](https://kinlane-productions2.s3.amazonaws.com/postman/new-api/publish-mock.png)  
  
Now I have a an API collection with a mock server that I can make calls to and see my JSON returned as part of the API response, making my offers API come to life.  
  
![](https://kinlane-productions2.s3.amazonaws.com/postman/new-api/api-response.png)  
  
I can now share this API collection with any team member, but why stop there. I want to actually provide documentation for the offers API along with my working Postman collection that they can put to work in a shared or personal Postman workspace.  
![](https://kinlane-productions2.s3.amazonaws.com/postman/new-api/api-docs.png)  
  
I went from idea for an API, to a working API and documentation in less than 5 minutes. That is pretty significant. It allows me to quickly share an API idea with anyone before I ever invest too much time into what it will do. I can give the API documentation and collection to anyone I want to work with on the API or any application that will be using the API. Demonstrating why API mocking and documentation generated from an API definition can change how we deliver our APIs.  
  
I expected Postman to excel at doing this, but I was a little surprised that it was less than 5 minutes to go from schema to mocked and documented API. I am going to play around with the possibilities using some of my other Schema.org schemas. I’m working to establish the right template for a collection that I can programmatically create from all of the Schema.org JSON Schema I have, publishing a usable collection that can be easily mocked and have documentation published by anyone who downloads the Postman collection for the Schema.org object they desire. Helping streamline how we deliver APIs, but also help standardize them along the way using a standard schema vocabulary.