---
layout: post
title: Look Across My API Monitoring API Methods By Grouping Them Using Tag
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-monitoring-tag-cloud.png
author:
  name: kinlane
tags:
  - My
  - Monitoring
  - Methods
---
[Last week I was playing with defining API monitoring APIs so I can map to each stop along the API life cycle](http://apievangelist.com/2015/12/16/defining-api-monitoring-apis-so-i-can-map-to-each-stop-along-the-api-life-cycle/). I took three of the API monitoring services I use (APIMetrics, API Science, and Runscope), and like I do for other areas along the API life cycle, and for common API stacks, I profiled their APIs using the OpenAPI Spec. This is standard operating procedure for any of my research areas, in that part of profiling each company's operations, I profile the API surface area in detail.

[For each of my research projects](http://apievangelist.com/), I will include this listing of each API endpoint available as part of the work. As I was adding one for my API monitoring research, I had a thought--I wanted to reorganize the endpoints, across the three API monitoring service providers, and group them by tag. So I started playing with a new way to look at the APIs available in any given APIs.json driven collection.

This is a listing of API resources available in [this projects APIs.json](http://monitoring.apievangelist.com/apis.json), organized by tag.

**Account**

*   Account Resource - (**GET**) - [/account](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Team integrations list - (**GET**) - [/teams/{teamId}/integrations](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Teams Resource - (**GET**) - [/teams/{teamId}/people](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")

**Auth**

*   Delete an Authentication Setting - (**DELETE**) - [/auth/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Get an existing Authentication Setting - (**GET**) - [/auth/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   List Authentication Settings - (**GET**) - [/auth/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Update an existing Authentication Setting - (**PUT**) - [/auth/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")

**Buckets**

*   Create a new bucket - (**POST**) - [/buckets](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Delete a single bucket resource. - (**DELETE**) - [/buckets/{bucketKey}](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Returns a list of buckets. - (**GET**) - [/buckets](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Returns a single bucket resource. - (**GET**) - [/buckets/{bucketKey}](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")

**Calls**

*   Create new API Call - (**POST**) - [/calls/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Delete an API Call - (**DELETE**) - [/calls/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Get an existing API Call - (**GET**) - [/calls/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   List API Calls - (**GET**) - [/calls/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   List API Calls by Authentication - (**GET**) - [/calls/auth/{auth\_id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   List Stats from before a date for an API Call - (**GET**) - [/calls/{id}/stats/before](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   List Stats since a date for an API Call - (**GET**) - [/calls/{id}/stats/since](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Trigger an API Call to run - (**POST**) - [/calls/{id}/run](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Update an existing API Call - (**PUT**) - [/calls/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")

**Checks**

*   Get Checks For A Monitor - (**GET**) - [/monitors/{id}/checks.json](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")

**Contacts**

*   Create a Contact - (**POST**) - [/contacts.json](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")
*   Delete a Contact - (**DELETE**) - [/contacts/{id}.json](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")
*   Get All Contacts - (**GET**) - [/contacts.json](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")
*   Get a Specific Contact - (**GET**) - [/contacts/{id}.json](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")
*   Update a Contact - (**PATCH**) - [/contacts/{id}.json](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")

**Deployments**

*   Create a new Deployment - (**POST**) - [/deployments/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Delete a Deployment - (**DELETE**) - [/deployments/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Get all Deployments for a Workflow - (**GET**) - [/deployments/workflow/{workflow\_id}](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Get all Deployments for an API Call - (**GET**) - [/deployments/call/{call\_id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Get an existing Deployment - (**GET**) - [/deployments/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   List all Deployment - (**GET**) - [/deployments/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Update an existing Deployment - (**PUT**) - [/deployments/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")

**Messages**

*   Clear a bucket (remove all messages). - (**DELETE**) - [/buckets/{bucketKey}/messages](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Create a message - (**POST**) - [/buckets/{bucketKey}/messages](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Retrieve a list of error messages in a bucket - (**GET**) - [/buckets/{bucketKey}/errors](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Retrieve a list of messages in a bucket - (**GET**) - [/buckets/{bucketKey}/messages](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Retrieve the details for a single message. - (**GET**) - [/buckets/{bucketKey}/messages/{messageId}](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")

**Monitors**

*   Apply Actions to Multiple Monitors - (**PUT**) - [/monitors](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")
*   Create a Monitor - (**POST**) - [/monitors](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")
*   Get All Monitors - (**GET**) - [/monitors](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")
*   Get a Specific Monitor - (**GET**) - [/monitors/{id}](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")
*   Testing your Monitor - (**GET**) - [/monitors/{id}/test](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")

**Reports**

*   Create a new Report - (**POST**) - [/reports/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Delete a Report - (**DELETE**) - [/reports/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Get an existing Report - (**GET**) - [/reports/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   List all Reports - (**GET**) - [/reports/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Performance Report - (**GET**) - [/monitors/{id}/performance](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")
*   Update an existing Report - (**PUT**) - [/reports/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Uptime Report - (**GET**) - [/monitors/{id}/uptime.json](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")

**Shared Environments**

*   Create new shared environment. - (**POST**) - [/buckets/{bucketKey}/environments](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Returns list of shared environments for a specified bucket. - (**GET**) -[/buckets/{bucketKey}/environments](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Update the details of a test environment. - (**PUT**) -[/buckets/{bucketKey}/environments/{environmentId}](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")

**Tags**

*   List All Tags - (**GET**) - [/tags](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")

**Templates**

*   Create a Template - (**POST**) - [/monitors/{id}/templates/{templates\]](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")
*   Get a Template - (**GET**) - [/monitors/{id}/templates/{templates\]](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")
*   Show a Monitors Templates - (**GET**) - [/monitors/{id}/templates](http://monitoring.apievangelist.com/apisjson/bytag.html "api.apiscience.com")

**Test Environments**

*   Create new test environment. - (**POST**) - [/buckets/{bucketKey}/tests/{testId}/environments](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Return details of the test's environments (only those that belong to the specified test) - (**GET**) -[/buckets/{bucketKey}/tests/{testId}/environments](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Update the details of a test environment. - (**PUT**) -[/buckets/{bucketKey}/tests/{testId}/environments/{environmentId}](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")

**Test Steps**

*   Add new test step. - (**POST**) - [/buckets/{bucketKey}/tests/{testId}/steps](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Delete a step from a test. - (**DELETE**) - [/buckets/{bucketKey}/tests/{testId}/steps/{stepId}](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   List test steps for a test. - (**GET**) - [/buckets/{bucketKey}/tests/{testId}/steps](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Update the details of a single test step. - (**PUT**) - [/buckets/{bucketKey}/tests/{testId}/steps/{stepId}](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")

**Tests**

*   Create a test. - (**POST**) - [/buckets/{bucketKey}/tests](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Delete a single test. - (**DELETE**) - [/buckets/{bucketKey}/tests/{testId}](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")
*   Returns a list of tests. - (**GET**) - [/buckets/{bucketKey}/tests](http://monitoring.apievangelist.com/apisjson/bytag.html "api.runscope.com")

**Tokens**

*   Create a new Auth Token - (**POST**) - [/tokens/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Delete an Auth Token - (**DELETE**) - [/tokens/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Get all tokens for an Authentication Setting - (**GET**) - [/tokens/auth/{auth\_id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Get an existing Auth Token - (**GET**) - [/tokens/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   List Auth Tokens - (**GET**) - [/tokens/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Update an Auth Token - (**PUT**) - [/tokens/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")

**Workflows**

*   Create a new Workflow - (**PUT**) - [/workflows/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Create new Authentication Settings - (**POST**) - [/workflows/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Delete a Workflow - (**DELETE**) - [/workflows/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Get an existing Workflow - (**GET**) - [/workflows/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   List all Workflows - (**GET**) - [/workflows/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")
*   Trigger a Workflow to run now - (**POST**) - [/workflows/{id}/](http://monitoring.apievangelist.com/apisjson/bytag.html "client.apimetrics.io")

If you mouse over each actual endpoint, it will tell you the host of the API it is for. I am just playing around. I have no idea what value this would present for anyone, except for just helping provide a new dimension for viewing the APIs involved. For me, this particular one helps me understand API resources across many providers, while also encouraging me to think more critically about how I tag the APIs I define using OpenAPI Spec.

You can [view the listing by provider](http://monitoring.apievangelist.com/apisjson/bycollection.html), as well as [listing by tag](http://monitoring.apievangelist.com/apisjson/bytag.html), for my [API monitoring research](http://monitoring.apievangelist.com). I will be adding these two views to all of my core research areas, and the API stacks I define as I have time, but I thought it would be interesting to add to my own API stack, which is probably the most defined of all of my stacks--here is [listing by provider](http://stack.apievangelist.com/apisjson/bycollection.html), and [listing by tag](http://stack.apievangelist.com/apisjson/bytag.html), for [my API Evangelist stack](http://stack.apievangelist.com/companies.html).

We'll see how this plays out as I roll out for more of my research. I am sure I will learn a lot along the way, by adding new APIs.json driven dimensions like these. I'd like to eventually have a whole toolbox of these types of views, and even some APIs.json and OpenAPI Spec driven visualizations.