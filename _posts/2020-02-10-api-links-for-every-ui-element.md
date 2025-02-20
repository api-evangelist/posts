---
published: true
layout: post
title: API Links For Every UI Element
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/cloudflare_ssl_tls_encryption_levels_1.png
author:
  name: kinlane
tags:
  - Discovery
  - Onboarding
---
I’ve showcased ClokudFlare's approach making their API available as part of their user interface several times now. It is a practice I want to see replicated in more desktop, web, and mobile applications, so I want to keep finding new ways of talking about, and introducing to new readers. If you sign up or use CloudFlare, and navigate your way to their SSL/TLS section, you will see a UI element for changing the levels of your SSL/TLS encryption, and below it you see some statics on the traffic that has been served over TLS over the last 24 hours. Providing you full control over SSL/TLS within the CloudFlare UI.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/cloudflare_ssl_tls_encryption_levels_1.png)

At the bottom of the UI element for managing your SSL/TLS you will see an API link, which if you click you get three API calls for getting, changing, and verifying the SSL/TLS status of your domain. Providing you with one click access to the API calls behind the UI elements, giving you two separate options for managing your DNS.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/cloudflare_ssl_tls_encryption_levels_2.png)

This is how all user interfaces within applications should be. The API shouldn’t just be located via some far off developer portal, they should be woven into the UI experience, revealing the API pipes behind the UI at every opportunity. This allows for the automation of any activity a user is taking through the interface using the platform's API. You could also consider embedding a simple [Postman Collection](https://www.postman.com/collection) for each API capability, allowing a user to run in Postman—to further support, you could also make a [Postman environment](https://learning.postman.com/docs/postman/environments-and-globals/manage-environments/) available, pre-populated with a users API Key, making execution of each platform capability outside of the platform possible in just one or two clicks.

Once each UI capability is defined as a Postman collection it can immediately be executed by a user in a single click. It can also be executed using a [Postman runner](https://learning.postman.com/docs/postman/collection-runs/starting-a-collection-run/) as part of an existing CI/CD process, or on a schedule using a [Postman monitor](https://learning.postman.com/docs/postman/monitors/intro-monitors/). This extends the reach of any UI feature, making it portable, sharable, and executable outside of the UI by any consumer. Can you imagine if all UI elements had this approach baked in by default? If every UI element was API-driven and had a link to the API call behind, with an environment that provides the user context which the API call should be ran. This would change the API game, making APIs more about single use execution and automation, even before they are used within other applications—drastically changing who APIs serve.