---
published: true
layout: post
title: Managing API Secrets Using Postman Environments
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/birth-of-a-nation-P9180054.jpg
author:
  name: kinlane
tags:
  - Environments
  - Secrets
  - Authentication
---
Environments are an essential building block to be considered as part of wider API governance strategy. Like Postman collection, environments will need the greatest amount of governance to inject the most observability, reliability, and security across API operations. When used right, Postman environments help isolate and standardize how secrets, PII, and other sensitive information is used across the delivery and integration of APIs. Allowing for centralized control over environments by leveraging Postman for the managementof environments through the interface and the API.

**GUI** - Managing all of the environments in use with the Postman web interface.

*   **[All Environments](https://api-evangelist.postman.co/me/environments)** - Manually manage all of the environments in use using the central Postman web interface, allowing any member of governance to audit how environments are being used.

**API** - Automating the management of environments using the Postman API, opening up the opportunity for auditing, managing, and enforcing governance at scale across the environments being applied by all enterprise teams engaging with API operations.

*   **[All Environments](https://docs.api.postman.com/?version=latest#d26bd079-e3e1-aa08-7e21-66f55df99351)** - Programmatically pulling all environments via Postman API, so that they can evaluated separated.
*   **[Single Environment](https://docs.api.postman.com/?version=latest#96c34392-1e36-d1cb-af89-1c95365184ab)** - Programmatically pulling a single environment, so that the details of the environment can be used.
*   **[Update Environment](https://docs.api.postman.com/?version=latest#6517e0d6-3bc3-3da5-ab57-7a578a8504ce)** - Updating a single environment using the Postman API, providing centralized control over what environments contain.
*   **[Delete Environment](https://docs.api.postman.com/?version=latest#c943a79b-0c36-c003-5f22-1c8b1998188e)** \- Remove old and unused environments using the API, helping keep environments active and effective.

The value of governing environments manually or automatically via the API is only as valuable as how consistently environments are used. If developers put secrets directly inside of collections then environment governance is diminished, but if governance dictates that all secrets should be managed using Postman environments than automated governance and management of Postman environments becomes much more effective. Governance of API secrets using Postman environment is heavily dependent on how Postman collections and environments are used, and is something that will increase in effectiveness as more governance is realized across operations.

**Actions** - Identifying some of the common actions that exist for governing environment usage across operations.

*   **List Environments** - Providing a list of all environments in use across operations.
*   **Aggregate Variables** - Aggregating variables that are in use across all environments.
*   **Govern Variables** - Evaluate and govern how variables are defined and used.
*   **Scrub Secrets** \- Automatically scrub secrets that are published as part of environments.
*   **Scrub PII** \- Automatically scrub PII that are published as part of environments.
*   **Merge Environments** \- Merge one or more environments together into a single one.
*   **Refresh Tokens** \- Automatically refresh tokens and turn over keys to maintain security.
*   **Backup Environments** \- Backup environments to external locations and workspaces.
*   **Sync Environments** \- Sync environments to external locations and workspaces.

The proper usage of environments along with a healthy amount of manual and automated governance represents one of the greatest opportunities for helping secure and stabilize API operations. Isolating how secrets, PII, and other essential data is stored and applied across API operations. Which when combined with effective governance of collections, workspaces, and teams, makes for a pretty effective approach to not just defining how Postman gets used, but how APIs are used across an organization.

How API secrets are managed across API development teams is one of the biggest challenges that enterprise organizations will face in the next decade. The number of APIs and micro services is only growing, and developers are already creating, applying, storing and sharing these secrets in many different ways across their regular activities. Postman environments provide the opportunity for healthier governance of API secrets through two distinct dimensions, 1) consistently using Postman environments for storing and applying API secrets manually by developers as well as automatically via CI/CD pipeline tests, and 2) through centralized spidering, auditing, review, refresh, and cleanup of Postman environments through the Postman API. Making Postman environments the number on place enterprise security and compliance groups should be started when it comes to locking down how developers are managing and applying API secrets across enterprise operations.