---
layout: post
title: An API For Developers To Access Their API Account Information
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/mailjet/logo-mailjet.png
author:
  name: kinlane
tags:
  - Access
  - Developers
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/mailjet/logo-mailjet.png)](http://dev.mailjet.com/email-api/v3/metadata/)

When I landed on the [version 3.0 landing page for the Mailjet API](http://dev.mailjet.com/email-api/v3/metadata/), the first thing I noticed was their API configuration API. Providing a set of API endpoints for managing my own API usage is definitely something I can get behind, and think it is something worth showcasing.

As part of the API Configuration portion of their email API, Mailjet provides five separate endpoints for users to manage their API developer account.

*   **/apikey -** Manage your Mailjet API Keys. API keys are used as credentials to access the API and SMTP server
*   **/apikeyaccess -** Access rights description on API keys for subaccounts/users.
*   **/apikeytotal -** Global counts for an API Key, since its creation
*   **/apitoken -** Access token for API, used to give access to an API Key in conjunction with our IFrame API
*   **/metadata -** Mailjet API metadata

I like this approach to providing developers with API access to their developer account details. It is an approach I’d like to [explore and standardize using the 3Scale API](https://support.3scale.net/reference/active-docs). I think it is something I've written about before, but I couldn't find it.

API access to a developer account is something I haven't seen anywhere else, but I'll definitely be using [Mailjet](http://dev.mailjet.com) as a blueprint for demonstrating what is possible, and see if I can’t convince other API providers that it is a feature they should consider.