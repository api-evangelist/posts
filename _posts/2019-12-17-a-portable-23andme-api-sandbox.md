---
published: true
layout: post
title: A Portable 23andMe API Sandbox
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/23andme_request_1.png
author:
  name: kinlane
tags:
  - DNA
  - Sandbox
  - Onboarding
---
I was creating [a Postman collection for the 23andMe API](https://github.com/api-evangelist/23andme/blob/master/23andme-postman-collection.json). The [23andMe API is still available](https://api.23andme.com/docs/reference/#profile), despite [the company pulling back somewhat when it comes to accessing the DNA and genetics API.](https://blog.23andme.com/news/an-update-to-our-api-program/) You can still get access to the API for research purposes, but you have to email their business development group and convince them of the merits of your research before you’ll get access to the data. It is pretty common for companies to have valuable data like 23andMe does, and there being a significant amount of concern regarding who has access to it. This is why API management exists as a fundamental building block of API operations, so you can have total control over who has access to your data, and possess detailed logs regarding what has been accessed by consumers.

Requiring approval of a developer account before you get your API keys is common, pushing API developers to justify their access and establish a trusted relationship with API providers. This is something you can setup with your API management tooling or services, providing a public sign-up form, yet making each new API consumer wait to be approved before they get their API keys. Even with this security layer in place you may still want to allow API consumers to kick the tires more and see what is possible while awaiting approval for API access. One way you can accomplish this is by creating Postman collections for all the API endpoints, making sure there are one or more examples for each individual API path so that they can be mocked by any consumer using Postman.

I went ahead and did this for the 23andMe API. Their documentation is still available, and there are examples for each individual path. I wanted to create a Postman collection for the API to round of my collection of API definitions, and since their documentation had examples, I thought I’d demonstrate how to create portable API sandboxes using Postman, showing how you can easily allow anyone to mock your API and work with it without actually an API key. To begin, all I needed was a complete reference collection for the 23andMe API, documenting all the available paths.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/23andme_request_1.png)

Once I have each API path defined as a single request within the complete reference collection I just have to make sure each individual path has one or more API examples, showing an example of what each response will look like in production. Providing all of the details the mock server will need to return a response when a request is made to each individual path.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/23andme_example_1.png)

For a couple of the API paths 23andMe provided multiple examples, demonstrating what you would get back if you changed up query parameters for the path. I made sure and included all of the examples provided, giving the mock server more robustness, and reflecting what you can get back with each response in a live environment.  I have [the Postman collection for 23andMe published to GitHub](https://github.com/api-evangelist/23andme/blob/master/23andme-postman-collection.json), which you can import into your Postman, and generate a mock server by managing the collection.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/23andme_generate_mock.png)

Once you created the mock API using the 23andMe Postman collection you can create an environment for 23andMe, add a variable with the key of 23andme\_base\_url, and replace the current value with the URL of your mock API server. Then each of the API paths for the 23andMe API will work, returning examples for each of the responses. 

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/23andme_environment.png)

When working with the collection, if you look at that [Get Report](https://documenter.postman.com/view/35240/SWECWaZy?version=latest#57e1abc7-c774-4ab5-a25c-a7cf4c3fd609) and [Get Profile Report](https://documenter.postman.com/view/35240/SWECWaZy?version=latest#09d49d9f-df5e-4c3d-bf6b-98d57b361f31) requests, you’ll notice there are two examples available. One for wellness, and another for genetic weight. All you have to do is change the parameter value and the mock server will return the example with corresponding parameter value. Demonstrating how you can publish as many examples as you need, demonstrating all of the possible API responses. While it is a static mock, you can get pretty creative when it comes how you define what is possible, publishing as many dimensions as you’d like when it comes to firing up the imagination of your potential consumers—without giving away any access to data you do not wish to share.

Hopefully that demonstrates another way in which you can provide access to your API without giving away the farm. You definitely want API management with accompanying policies in place, but crafting well defined Postman collections intended for specific audiences is another way you can on-board consumers safely. I think the 23andMe API provides a nice example of this, partly because they have a simple yet robust API, complete with examples, but also because of the challenges they’ve faced in making their API public. It provides a powerful lesson for other API providers to consider as they are working to make their APIs available, while reducing friction for potential consumers—striking the balance needed to make sure your APIs are discoverable, but also still adequately secured.