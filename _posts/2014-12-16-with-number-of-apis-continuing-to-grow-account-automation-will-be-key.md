---
layout: post
title: With Number Of APIs Continuing To Grow Account Automation Will Be Key
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-gears.png
author:
  name: kinlane
tags:
  - Automation
  - APIs
---
I personally depend on over 40 APIs, all of which I have to manage my developer account, apps, and API key access for. This can be a lot of work, and as I continue to add APIs to my stack, this work is only going to grow. Putting on my [API broker](http://apievangelist.com/2014/10/10/exploring-the-possibilities-of-being-an-api-broker/) hat, and thinking about a future, where you will need to gather and organize potentially hundreds of APIs, across multiple companies, things are going to start breaking down if we don't do something to bridge these services.

**Standard API Developer Accounts**  
First, API onboarding will have to always include a standard API developer account, providing a common data model, and approach to managing developer accounts. Luckily many API platforms use [API management providers like 3Scale](http://www.3scale.net/), so this shouldn't be too much work, but I still come across plenty of APIs who do not even have basic developer account building blocks like analytics, or billing management. I wrote about this, [using Google as potential blueprint for how we could possibly standardize developer accounts](http://kinlane.com/2014/06/05/google-accounts-as-blueprint-for-all-software-as-a-service-applications/), and I know that [service providers like Auth0 are working to help provide plug and play services](https://auth0.com/blog/2014/12/02/using-json-web-tokens-as-api-keys/) that address this as well.

**API For Developer Accounts**  
I recently wrote about the email API Mallet, a couple of weeks back, and how they [have an API for their API developer accounts](http://apievangelist.com/2014/11/12/an-api-for-developers-to-access-their-api-account-information/). This allows users to manage apps, their keys, as well as stay in tune with their API usage, and able to understand when they are hitting their limits, allowing them manage their access tier, and billing information programmatically. Imagine that, an API for accessing account resources?? API providers need to follow their own lead, and make sure all accounts have API by default--all aspects of your API platform should have an API in 2014, there really is no excuse.

**Automated Account Registration And Key Provisioning.**  
I’m always pushing API providers to offer single sign for the creation of API developer accounts, allowing developers to sign up for API access with a single click, using their Github or Twitter accounts. This helps alleviate onboarding friction, and prevents developers from having to create yet another username and password. We have to go beyond even this approach, and begin to allow single API call, registration for API developer accounts. I want a way to just POST to example.com/auth, with my Github credentials, or other means, and have my developer account instantly setup, and my first app and keys returned. Account setup can be finished later, but this type of API account automation would speed up onboarding and the integration of applications.

These are just three of the ways that I feel we need to improve on the account creation, management, automation, and interoperability, for the APIs we are increasingly depending on. Since onboarding friction has been a stumbling block for many developers, and influencing their decision of which APIs they use in the past, I predict if API providers don't continue to improve on their API developer account workflow, developers will look elsewhere.

If you are an API provider, it can be easy to miss this layer of API integration, but us API consumers, and the growing number of us who are using numerous APIs, feel the pain. With the rapid growth in the industry, API account management will continue to grow as an area that needs a more sophisticated approach, and is something that makes the argument for using API infrastructure platforms like 3Scale, over hand-rolling your own API management solution.

_**Disclosure:** 3Scale is an API Evangelist partner_