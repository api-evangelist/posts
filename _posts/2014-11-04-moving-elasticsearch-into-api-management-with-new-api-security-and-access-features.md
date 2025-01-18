---
layout: post
title: >-
  Moving Elasticsearch Into API Management With New API Security And Access
  Features
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/elasticsearch/elastic-search-logo.jpg
author:
  name: kinlane
tags:
  - Security
  - Management
  - API Management
  - Access
  - Features
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/elasticsearch/elastic-search-logo.jpg)](http://www.elasticsearch.org/)

[Elasticsearch](http://www.elasticsearch.org/), the open source, distributed, real-time search and analytics engine just announced that it is introducing a security layer on top of their API driven search platform. Historically you have to secure any APIs exposed via Elasticsearch through your own proxy or firewall solution, now with "[Shield](http://www.elasticsearch.org/overview/shield)" you can natively manage your APIs directly in Elasticsearch.

> _Shield, in the same spirit of Marvel, is built on top of Elasticsearch public extensions points, and is easily installed as a plugin to add security features to any existing Elasticsearch installation. It does not require a different distribution of Elasticsearch, and relies heavily on the open public APIs Elasticsearch already exposes._

The security Elasticsearch is bringing to the table reflects the core features you see in the API space from [API infrastructure providers like 3Scale](http://www.3scale.net/)\--providing the basics of what you need to secure access to API endpoints:

*   **Role-based Access Control -** Set granular cluster, index, and alias-level permissions for each user of your Elasticsearch cluster. For example, allow the marketing department to freely search and analyze social media data with read-only permissions, while preventing access to sensitive financial data.
*   **Authentication System Support -** Shield integrates with LDAP-based authentication systems as well as Active Directory, so your users don’t need to remember yet another password. We also provide a native authentication system, for those who want to manage all access within Elasticsearch.
*   **Encrypted Communications -** Node-to-node encryption protects your data from intruders. With certificate-based SSL/TLS encryption and secure client communications with HTTPS, Shield keeps data traveling over the wire protected.
*   **Audit Logging -** Ensure compliance and keep a pulse on security-related activity happening in your Elasticsearch deployment; record login failures and attempts to access unauthorized information.

I've had Elasticsearch in the [API deployment research project](http://deployment.apievangelist.com/) for some time now, but now I will add it to my [API management research as well.](http://management.apievangelist.com/) If you can manage your API access, user roles, and generate log files for analytics from Elasticsearch API endpoints, the tool is moving squarely into the API management category.

I makes me happy to see open source tools like Elasticsearch improving their security features. Elasticsearch is something I recommend to government agencies to use when looking to open up access to document stores, using APIs. I would like to see more of the API management players working together to allow for interoperability between management platforms, but I’m guessing this is a wish I won’t get anytime soon.

_**Disclosure:** 3Scale is an API Evangelist partner._