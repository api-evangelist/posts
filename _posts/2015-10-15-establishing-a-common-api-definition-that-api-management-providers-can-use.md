---
layout: post
title: Establishing A Common API Definition That API Management Providers Can Use
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/3scale-logo.jpg
author:
  name: kinlane
tags:
  - Management
  - API Management
  - Definition
  - Providers
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/3scale-logo.jpg)](http://www.3scale.net/)

[I mentioned the concept of what I call API building blocks coming to life by API service providers yesterday](http://apievangelist.com/2015/10/13/bringing-api-building-blocks-to-life-as-the-apis-of-service-providers/). These are the features provided from API service providers that are made accessible via APIs. Mind blowing right? API service providers having APIs? Which then allows API providers to programmatically manage the operations of their own APIs? Who would have ever thought!! Actually it is a pretty clear example of API service providers who are kind of full of it, when they do not offer their own APIs--meaning they are telling you about the importance of APIs, but not actually practicing what they preach. It is kind of like API providers who do not use their own APIs in their applications (dogfooding).

Anyhoo. [I have done a lot of work to define the common building blocks across API service providers, spanning over 17 stops along the API lifecycle](http://apievangelist.com/), and part of the next phase of my research is to connect these building blocks to actual API definitions that can help automate these vital API features. First up, [I took the 3Scale API, and generated this list of common building blocks represented in the API for their API infrastructure](https://support.3scale.net/reference/active-docs).

**Authorization**

*   **Authorize** (App Id authentication pattern)(GET) - Read-only operation to authorize an application in the App Id authentication pattern
*   **Authorize** (API Key authentication pattern)(GET) - Read-only operation to authorize an application in the App Key authentication pattern
*   **Authorize** (OAuth authentication mode pattern)(GET) - Read-only operation to authorize an application in the OAuth authentication pattern

**Reporting**

*   **Report** (App Id authentication pattern)(POST) - Report the transactions
*   **Report** (API Key authentication pattern)(POST) - Report the transactions
*   **Report** (OAuth authentication pattern)(POST) - Report the transactions to

**Authorization + Reporting**

*   **AuthRep** (Authorize + Report for the App Id authentication pattern)(GET) - Authrep is a 'one-shot' operation to authorize an application and report the associated transaction at the same time
*   **AuthRep** (Authorize + Report for the API Key authentication pattern)(GET) - Authrep is a 'one-shot' operation to authorize an application and report the associated transaction at the same time
*   **AuthRep** (OAuth authentication mode pattern)(GET) - Authrep is a 'one-shot' operation to authorize an application and report the associated transaction at the same time in the OAuth authentication pattern

**Account Management**

*   **Account Feature List**(GET) - Returns the list of the features available to accounts
*   **Account Feature Create**(POST) - Create an account feature
*   **Account Feature Read**(GET) - Returns an account feature
*   **Account Feature Update**(PUT) - Updates an account feature
*   **Account Feature Delete**(DELETE) - Deletes an account feature
*   **Account Plan Feature List**(GET) - Returns the list of the features associated to an account plan
*   **Account Plan Features Create**(POST) - Associate an account feature to an account plan
*   **Account Plan Features Delete**(DELETE) - Deletes the association of an account feature to an account plan
*   **Account Plan List**(GET) - Returns the list of all available account plans
*   **Account Plan Create**(POST) - Creates an account plan
*   **Account Plan Read**(GET) - Returns the account plan by id
*   **Account Plan Update**(PUT) - Updates an account plan
*   **Account Plan Delete**(DELETE) - Deletes and account plan
*   **Account Plan set to Default**(PUT) - Set the account plan to be the default one
*   **Account List**(GET) - Returns the list of the buyer accounts (the accounts that consume your API)
*   **Account Find**(GET) - Find an account by the username or email of its users (username takes precendence over email)
*   **Account Read**(GET) - Returns a buyer account
*   **Account Update**(PUT) - Updates a buyer account by id
*   **Account Delete** (DELETE) - Deletes a buyer account
*   **Account Change Plan**(PUT) - Changes the account plan of the buyer account
*   **Account Approve**(PUT) - Approves the account (changes the state to live)
*   **Account Reject**(PUT) - Rejects the account (changes the state to rejected)
*   **Account Reset to Pending**(PUT) - Resets the state of the account to pending
*   **Account Set Credit Card**(PUT) - Associates credit card tokens and billing address to an account
*   **Account Delete Credit Card**(DELETE) - Removes all credit card info of an account
*   **Account Message**(POST) - Sends a message to the account
*   **Account Read**(GET) - Returns your account

**Application Management**

*   **Application Plan Feature List**(GET) - Returns the list of features of the application plan
*   **Application Plan Feature Create**(POST) - Associates a feature to an application plan
*   **Application Plan Feature Delete**(DELETE) - 
*   **Limits List per Application Plan**(GET) - Returns the list of all limits associated to an application plan
*   **Limit List per Metric**(GET) - Returns the list of all limits associated to a metric of an application plan
*   **Limit Create**(POST) - Adds a limit to a metric of an application plan
*   **Limit Read**(GET) - Returns a limit on a metric of an application plan
*   **Limit Update**(PUT) - Updates a limit on a metric of an application plan
*   **Limit Delete**(DELETE) - Deletes a limit on a metric of an application plan
*   **Pricing Rules List per Metric**(GET) - Returns the list of all pricing rules associated to a metric of an application plan
*   **Pricing Rules List per Application Plan**(GET) - Returns the list of all pricing rules associated to an application plan
*   **Application Plan List** (all services)(GET) - Returns the list of all application plans across services
*   **Application Plan List**(GET) - Returns the list of all application plans of a service
*   **Application Plan Create**(POST) - Creates an application plan
*   **Application Plan Read**(GET) - Returns and application plan
*   **Application Plan Update**(PUT) - Updates an application plan
*   **Application Plan Delete**(DELETE) - Deletes an application plan
*   **Application Plan Set to Default**(PUT) - Makes the application plan the default one
*   **Application List** (all services)(GET) - Returns the list of applications across all services
*   **Application Find**(GET) - Finds an application by keys used on the integration of your API and 3scale's Service Management API or by id (no need to know the account\_id)
*   **Account Fetch Account Plan**(GET) - Returns the account plan associated to an account
*   **Application Key List**(GET) - Lists app keys of the application
*   **Application key Create**(POST) - Adds an key of an application (valid only on the authentication mode app\_id/app\_key or oauth)
*   **Application key Delete**(DELETE) - Deletes an key of an application (valid only on the authentication mode app\_id/app\_key or oauth)
*   **Application Referrer Filter List**(GET) - Lists referrer filters of the application
*   **Application Referrer Filter Create**(POST) - Adds a referrer filter to an application
*   **Application Referrer Filter Delete**(DELETE) - Deletes a referrer filter of an application
*   **Application List**(GET) - Returns the list of application of an account
*   **Application Create**(POST) - Create an application
*   **Application Read**(GET) - Returns the application by id
*   **Application Update**(PUT) - Updates an application
*   **Application Change Plan**(PUT) - Changes the application plan of an application
*   **Application Create Plan Customization**(PUT) - Creates a customized application plan for the application
*   **Application Delete Plan Customization**(PUT) - Deletes the customized application plan of the application
*   **Application Accept**(PUT) - Accepts an application (changes the state to live)
*   **Application Suspend**(PUT) - Suspends an application (changes the state to suspended)
*   **Application Resume**(PUT) - Resume a suspended application

**User Management**

*   **User List**(GET) - Returns the list of users of an account
*   **User Create**(POST) - Creates a new user of the account (account\_id)
*   **User Read**(GET) - Returns the user of an account
*   **User Update**(PUT) - Updates the user of an account
*   **User Delete**(DELETE) - Deletes a user of an account
*   **User change Role to Member**(PUT) - Changes the role of the user to member
*   **User change Role to Admin**(PUT) - Changes the role of the user to admin
*   **User Suspend**(PUT) - Changes the state of the user to suspended
*   **User Unsuspend**(PUT) - Change the state of the user back to active
*   **User Activate**(PUT) - Activate the user of an account
*   **Limit List for End User Plans** (GET) - Returns the list of all limits associated to a metric of an end user plan
*   **Limit Create for End User Plans**(POST) - Adds a limit to a metric of an end user plan
*   **Limit Read for End User Plans**(GET) - Returns a limit on a metric of an end user plan
*   **Limit Update for End User Plans**(PUT) - Updates a limit on a metric of an end user plan
*   **Limit Delete for End User Plans**(DELETE) - Deletes a limit on a metric of an end user plan
*   **End User Plan List** (all services)(GET) - Returns the list of all end user plans across services
*   **End User Plan List**(GET) - Returns the list of all end user plans of a service
*   **End User Plan Create**(POST) - Creates an end user plan
*   **End User Plan Read**(GET) - Returns and end user plan
*   **End User Plan Update**(PUT) - Updates an end user plan
*   **End User Plan set to Default**(PUT) - Makes the end user plan the default one
*   **End User Read**(GET) - Returns the end user by id
*   **End User Create**(POST) - Create an end user
*   **End User Delete**(DELETE) - Deletes a end user
*   **End User Change Plan**(PUT) - Changes the end user plan of an end user
*   **User List** (provider account)(GET) - Lists the users of the provider account
*   **User Create** (provider account)(POST) - Creates a new user in the provider account
*   **User Read** (provider account)(GET) - Gets the user of the provider account by id
*   **User Update** (provider account)(PUT) - Modifies the user of the provider account by id
*   **User Delete** (provider account)(DELETE) - Deletes the user of the provider account by id
*   **User change Role to Member** (provider account)(PUT) - Changes the role of the user of the provider account to member
*   **User change Role to Admin** (provider account)(PUT) - Changes the role of the provider account to admin (full rights and privileges)
*   **User Suspend** (provider account)(PUT) - Changes the state of the user of the provider account to suspended, remove the user's ability to sign-in
*   **User Unsuspend** (of provider account)(PUT) - Revokes the suspension of a user of the provider account
*   **User Activate** (provider account)(PUT) - Changes the state of the user of the provider account to active, to be done after sign-up

**Analytics**

*   **Method List**(GET) - List the methods of a metric
*   **Method Create**(POST) - Creates a method under a metric
*   **Method Read**(GET) - Returns the method of a metric
*   **Method Update**(PUT) - Updates a method of a metric
*   **Method Delete**(DELETE) - Deletes the method of a metric
*   **Metric List**(GET) - Returns the list of metrics of a service
*   **Metric Create**(POST) - Creates a metric on a service
*   **Metric Read**(GET) - Returns the metric of a service
*   **Metric Update**(PUT) - Updates the metric of a service
*   **Metric Delete**(DELETE) - Deletes the metric of a service
*   **Application Usage by Metric**(GET) - Returns the usage data for a given metric (or method) of an application
*   **Service Usage by Metric**(GET) - Returns the usage data of a given metric (or method) of a service
*   **Service Top Applications**(GET) - Returns usage and application data for the top 10 most active applications of a service

**Service Management**

*   **Service Feature List**(GET) - Returns the list of all features of a service
*   **Service Feature Create**(POST) - Creates a feature on a service
*   **Service Feature Read**(GET) - Returns a feature of a service
*   **Service Feature Update**(PUT) - Updates a feature of a service
*   **Service Feature Delete**(DELETE) - Deletes a feature of a service
*   **Service Plan Feature List**(GET) - Returns the list of features of a service plan
*   **Service Plan Feature Add**(POST) - Associates an existing feature to a service plan
*   **Service Plan List** (all services)(GET) - Returns a list of all service plans for all services
*   **Service Plan List**(GET) - Returns a list of service plans for a service
*   **Service Plan Create**(POST) - Creates a new service plan in a service
*   **Service Plan Read**(GET) - Returns a service plan by id
*   **Service Plan Update**(PUT) - Updates a service plan by id
*   **Service Plan Delete**(DELETE) - Deletes a service plan by id
*   **Service Plan set to Default**(PUT) - Sets the service plan as default
*   **Service List**(GET) - Returns the list of all services
*   **Service Create**(POST) - Creates a new service
*   **Service Read**(GET) - Returns the service by id
*   **Service Update**(PUT) - Update the service
*   **Signup Express**(POST) - This request allows to reproduce a sign-up from a buyer in a single API call

**Billing Management**

*   **Invoice List by Account**(GET) - Returns the list of all invoices by account
*   **Invoice by Account**(GET) - Returns an invoice by id
*   **Invoice List(**GET) - Returns the list of all invoices
*   **Invoice**(GET) - Returns an invoice by id
*   **Invoice**(PUT) - Modifies the state of the invoice
*   **Invoice Line Items List**(GET) - Returns the list of all line items of an invoice
*   **Invoice Payment Transactions List**(GET) - Returns the list of all payment transactions of an invoice

**Webhooks**

*   **Webhooks List Failed Deliveries**(GET) - Lists of webhooks that could not be delivered to your end-point after 5 trials
*   **Webhooks Delete Failed Deliveries**(DELETE) - Deletes failed deliveries records

[I've been using a subset of the 3Scale API management API definition as my standard blueprint for other API providers should follow, for a while now](http://apievangelist.com/2015/03/04/adding-four-new-building-building-blocks-providing-an-api-management-api-blueprint/). All API providers should have an API for base API account management--meaning your API consumers should be able to manage their accounts, services, apps, and billing via an API. [This will be a differentiation between API providers in the near future, and if you aren't up to speed, developers will be looking elsewhere](http://apievangelist.com/2014/12/16/with-number-of-apis-continuing-to-grow-account-automation-will-be-key/).

[This portion of my work is in response to a group of open source API management providers looking to encourage interoperability between their platforms, and what better way to do this than a common API management definition](http://apievangelist.com/2015/09/24/how-open-source-api-proxies-and-other-api-services-and-tooling-can-strategically-partner/). While not all API management solutions will have exactly the same features, if they can speak a common, API defined language, the better off the entire API space will be.

This is something I want to encourage across all 17+ of the API service areas I track on. I'm going to take a look at [API monitoring](http://monitoring.apievangelist.com), and also try to generate a common outline from definition across some of the service providers I track on. I'm using API definitions to generate these outlines, and potentially merging across multiple API service providers. If you are one of the API service providers I track on, and have an API definition, make sure I have link so I can include in thi sportion of my research.