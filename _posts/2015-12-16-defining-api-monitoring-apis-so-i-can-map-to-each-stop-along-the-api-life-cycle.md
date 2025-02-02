---
layout: post
title: >-
  Defining API Monitoring APIs So I Can Map To Each Stop Along The API Life
  Cycle
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-heart-monitor.png
author:
  name: kinlane
tags:
  - Monitoring
  - Life Cycle
  - APIs
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-heart-monitor.png)](http://monitoring.apievangelist.com/)

I am going through each of the [35+ areas of the APi space that I monitor](http://apievangelist.com/), working to bring alive [the over 900 stops along the API life cycle](http://alpha.apievangelist.com/2015/12/15/playing-with-different-subway-journey-experiences-for-my-api-life-cycle-explorer/), that I have identified through my research. I'm still working through prototypes for my life cycle explorer, but [the current version has organizations, tools, links, and questions, along with the title and description of each stop of the life cycle journey I am trying to bring into focus](http://plans.apievangelist.com/journey/beta/).

Part of my approach in [identifying the different lines, areas, and stops along this life cycle](http://apievangelist.com/2015/11/29/the-api-lifecycle-my-talk-from-defrag-and-apistrat/) involves taking a look at the approach of leading API providers, as well as service being offered by companies selling their solutions to these API providers--giving me two sides of the API life cycle coin. In the last couple months I have also found another way to identify potential building blocks, and round off the ones I have, through the API definitions of leading API providers.

All I do, is craft an OADF file for each of the API service providers I track on, within each area of my research. I'm spending time tonight working on my [API monitoring research](http://monitoring.apievangelist.com/), so I look at three of the service providers I track on, who have APIs. The OADF specs are not complete, but provide me a baseline definition for the surface area of each API, something I'll round out with more use. Here are the endpoints I have from each provider so far.

**[API Science Monitors API](https://www.apiscience.com/docs/api)** ([oadf](http://theapistack.com/data/api-science/api-science-monitors-api-swagger.json))

*   **Get All Contacts** - (GET) - /contacts.json
*   **Create a Contact** - (POST) - /contacts.json
*   **Delete a Contact** - (DELETE) - /contacts/{id}.json
*   **Get a Specific Contact** - (GET) - /contacts/{id}.json
*   **Update a Contact** - (PATCH) - /contacts/{id}.json
*   **Get All Monitors** - (GET) - /monitors
*   **Create a Monitor** - (POST) - /monitors
*   **Apply Actions to Multiple Monitors** - (PUT) - /monitors
*   **Get a Specific Monitor** - (GET) - /monitors/{id}
*   **Get Checks For A Monitor** - (GET) - /monitors/{id}/checks.json
*   **Performance Report** - (GET) - /monitors/{id}/performance
*   **Show a Monitors Templates** - (GET) - /monitors/{id}/templates
*   **Get a Template** - (GET) - /monitors/{id}/templates/{templates\]
*   **Create a Template** - (POST) - /monitors/{id}/templates/{templates\]
*   **Testing your Monitor** - (GET) - /monitors/{id}/test
*   **Uptime Report** - (GET) - /monitors/{id}/uptime.json
*   **List All Tags** - (GET) - /tags

**[Runscope API](https://www.runscope.com/docs/api/tests)** ([oadf](http://theapistack.com/data/runscope/runscope-api-swagger.json))

*   **Account Resource** - (GET) - /account
*   **Teams Resource** - (GET) - /teams/{teamId}/people
*   **Team integrations list** - (GET) - /teams/{teamId}/integrations
*   **Returns a list of buckets.** - (GET) - /buckets
*   **Create a new bucket** - (POST) - /buckets
*   **Returns a single bucket resource.** - (GET) - /buckets/{bucketKey}
*   **Delete a single bucket resource.** - (DELETE) - /buckets/{bucketKey}
*   **Retrieve a list of messages in a bucket** - (GET) - /buckets/{bucketKey}/messages
*   **Clear a bucket (remove all messages).** - (DELETE) - /buckets/{bucketKey}/messages
*   **Create a message** - (POST) - /buckets/{bucketKey}/messages
*   **Retrieve a list of error messages in a bucket** - (GET) - /buckets/{bucketKey}/errors
*   **Retrieve the details for a single message.** - (GET) - /buckets/{bucketKey}/messages/{messageId}
*   **Returns a list of tests.** - (GET) - /buckets/{bucketKey}/tests
*   **Create a test.** - (POST) - /buckets/{bucketKey}/tests
*   **Delete a single test.** - (DELETE) - /buckets/{bucketKey}/tests/{testId}
*   **List test steps for a test.** - (GET) - /buckets/{bucketKey}/tests/{testId}/steps
*   **Add new test step.** - (POST) - /buckets/{bucketKey}/tests/{testId}/steps
*   **Update the details of a single test step.** - (PUT) - /buckets/{bucketKey}/tests/{testId}/steps/{stepId}
*   **Delete a step from a test.** - (DELETE) - /buckets/{bucketKey}/tests/{testId}/steps/{stepId}
*   **Return details of the test's environments (only those that belong to the specified test)** - (GET) - /buckets/{bucketKey}/tests/{testId}/environments
*   **Create new test environment.** - (POST) - /buckets/{bucketKey}/tests/{testId}/environments
*   **Update the details of a test environment.** - (PUT) - /buckets/{bucketKey}/tests/{testId}/environments/{environmentId}
*   **Returns list of shared environments for a specified bucket.** - (GET) - /buckets/{bucketKey}/environments
*   **Create new shared environment.** - (POST) - /buckets/{bucketKey}/environments
*   **Update the details of a test environment.** - (PUT) - /buckets/{bucketKey}/environments/{environmentId}

**[APIMetrics Auth API](https://apimetrics.readme.io/)** ([oadf](http://theapistack.com/data/apimetrics/apimetrics-workflows-api-swagger.json))

*   **List Authentication Settings** - (GET) - /auth/
*   **Delete an Authentication Setting** - (DELETE) - /auth/{id}/
*   **Get an existing Authentication Setting** - (GET) - /auth/{id}/
*   **Update an existing Authentication Setting** - (PUT) - /auth/{id}/

**[APIMetrics Calls API](https://apimetrics.readme.io/)** ([oadf](http://theapistack.com/data/apimetrics/apimetrics-workflows-api-swagger.json))

*   **List API Calls** - (GET) - /calls/
*   **Create new API Call** - (POST) - /calls/
*   **List API Calls by Authentication** - (GET) - /calls/auth/{auth\_id}/
*   **Delete an API Call** - (DELETE) - /calls/{id}/
*   **Get an existing API Call** - (GET) - /calls/{id}/
*   **Update an existing API Call** - (PUT) - /calls/{id}/
*   **Trigger an API Call to run** - (POST) - /calls/{id}/run
*   **List Stats from before a date for an API Call** - (GET) - /calls/{id}/stats/before
*   **List Stats since a date for an API Call** - (GET) - /calls/{id}/stats/since

**[APIMetrics Deployments API](https://apimetrics.readme.io/)** ([oadf](http://theapistack.com/data/apimetrics/apimetrics-workflows-api-swagger.json))

*   **List all Deployment** - (GET) - /deployments/
*   **Create a new Deployment** - (POST) - /deployments/
*   **Get all Deployments for an API Call** - (GET) - /deployments/call/{call\_id}/
*   **Get all Deployments for a Workflow** - (GET) - /deployments/workflow/{workflow\_id}
*   **Delete a Deployment** - (DELETE) - /deployments/{id}/
*   **Get an existing Deployment** - (GET) - /deployments/{id}/
*   **Update an existing Deployment** - (PUT) - /deployments/{id}/

**[APIMetrics Reports API](https://apimetrics.readme.io/)** ([oadf](http://theapistack.com/data/apimetrics/apimetrics-workflows-api-swagger.json))

*   **List all Reports** - (GET) - /reports/
*   **Create a new Report** - (POST) - /reports/
*   **Delete a Report** - (DELETE) - /reports/{id}/
*   **Get an existing Report** - (GET) - /reports/{id}/
*   **Update an existing Report** - (PUT) - /reports/{id}/

**[APIMetrics Tokens API](https://apimetrics.readme.io/)** ([oadf](http://theapistack.com/data/apimetrics/apimetrics-workflows-api-swagger.json))

*   **List Auth Tokens** - (GET) - /tokens/
*   **Create a new Auth Token** - (POST) - /tokens/
*   **Get all tokens for an Authentication Setting** \- (GET) - /tokens/auth/{auth\_id}/
*   **Delete an Auth Token** - (DELETE) - /tokens/{id}/
*   **Get an existing Auth Token** - (GET) - /tokens/{id}/
*   **Update an Auth Token** - (PUT) - /tokens/{id}/

**[APIMetrics Workflows API](https://apimetrics.readme.io/)** ([oadf](http://theapistack.com/data/apimetrics/apimetrics-workflows-api-swagger.json))

*   **List all Workflows** - (GET) - /workflows/
*   **Create new Authentication Settings** - (POST) - /workflows/
*   **Delete a Workflow** - (DELETE) - /workflows/{id}/
*   **Get an existing Workflow** - (GET) - /workflows/{id}/
*   **Trigger a Workflow to run now** - (POST) - /workflows/{id}/
*   **Create a new Workflow** - (PUT) - /workflows/{id}/

When you compare the definitions for these API service providers, you are comparing apples to oranges, even though they exist in the same layer of the API space. To me, having them defined, will allow me to slowly weave them into [my master list of common building blocks for API monitoring](http://monitoring.apievangelist.com/building-blocks.html).

What really excites me, is that for each potential stop along the API monitoring line, I might be able to actually link to specific API endpoints, and even down to the verb level. For example, I could link to the endpoint for creating a new test for API Science, APIMetrics, and Runscope, with a single button or widget. 

I find the API definitions for API service providers to be more interesting them some of the features they showcase via their site. I will be continuing to identify the API service providers that I track on who have APIs, and defining them using OADF. [You can find the APIs for my API monitoring research available in the projects APIs.json file](http://monitoring.apievangelist.com/apis.json), as well as [each individual APIs.json and OADF files listed on the API monitoring service providers page](http://monitoring.apievangelist.com/companies.html).