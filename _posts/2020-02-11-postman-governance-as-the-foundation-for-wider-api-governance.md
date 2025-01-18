---
published: true
layout: post
title: Postman Governance as the Foundation for Wider API Governance
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stalin-time-supreme-court_36341562380_o.jpg
author:
  name: kinlane
tags:
  - Governance
---
This an overview of possible strategies for governing how Postman is used across a large organization. It is common for Postman to be already in use across an organization by individuals operating in isolation using a free tier of access. Governance of not just Postman, but also the end to end API life cycle begins with getting all developers using Postman under a single organizational team, working across master planned workspaces. If there are concerns about how Postman is being used across an enterprise organization, governance of this usage begins by focusing on bringing all enterprise Postman users together under a single license, and team, so that activity can be managed collectively.

### Postman Users

Over the last five years Postman has become an indispensable tool in the toolbox of developers. 10 million developers have downloaded the application and are using it to authorize and make requests to APIs then debug the responses. The benefit to API operations for the enterprise is clear, but the challenge now for enterprise organizations is to identify their individual Postman users and encourage them to operate under a single pro, team, or enterprise license. 

Currently users are operating in isolation, defining, storing, and applying secrets and PII locally on their own workstations within Postman, and syncing to the cloud as part of their regular usage of Postman—isolating details about APIs, secrets, potentially PII, and other sensitive data within these three areas.

*   **[Personal Workspaces](https://api-evangelist.postman.co/workspaces)** - Storing collections, and environments within their localized personal workspaces and individual Postman account.
*   **[Personal Collections](https://api-evangelist.postman.co/me/collections)** - Developing API collections in isolation, leaving them inaccessible to other teams, and reusable across operations.
*   **[Personal Environments](https://api-evangelist.postman.co/me/environments)** - Using environments to store secrets, PII, and other data within their localized personal workspaces and individual Postman account. 

When it comes to enterprise API governance, observability, and security, the problem isn’t with Postman being used by developers, the problems is developers are not using Postman together under a single license, across managed shared workspaces. Putting individual developers into Postman teams, and incentivizing them to collaborate and share Postman collections and environments, while also making everything observable through centralized auditing and governance.

**Actions** - Identifying some actions that can be taken to begin evolving users towards centralized governance.

*   **Identify Users** - Understand who is already using Postman, and begin considering how to bring them under a single license.
*   **Educate Users** - Once users are identified, then they can be made aware of efforts to use Postman in more organized way.

Individual users of Postman within the enterprise are ground zero for governance efforts. API governance and Postman governance will overlap. But it will all depend on bringing together individual users underneath a single team, and getting them to work in concert across many managed Postman workspaces. Getting more organized when it comes to how Postman is being put to work across the enterprise.

### Postman Teams

To realize governance of Postman usage, and how APIs are delivered and consumed across the enterprise all Postman users should be added to a centralized Postman team, allowing for more visibility into API operations, and control over how individual users are working.  Postman provides a variety of UIT tooling for managing teams underneath pro, team, or enterprise access tiers.

*   **[Invites (UI)](https://api-evangelist.postman.co/settings/team/manage-invite-links)** - Inviting all individual users to operate under a single team.
*   **[Members (UI)](https://api-evangelist.postman.co/team)** - Managing the members of teams, bringing all users under a single license.
*   **[Roles (UI)](https://api-evangelist.postman.co/settings/team/roles)** \- Properly define the rules of each user when they are added to a team.
*   **[Activity (UI)](https://api-evangelist.postman.co/team/activity)** \- Tuning into the activity for all users who have been added to a team.

Currently there is no API for managing teams, but the Postman web account provides what is needed to invite users, manage team members, and maintain administrative control through role and activity management. Setting up other actions that can be taken to govern Postman usage and how enterprise users are putting Postman to work as part of their daily work. 

**Actions** - Identifying some actions that can be taken begin governing individual Postman users under one team.

*   **Invite Users** \- Invite individual new and existing Postman users to a designated team.
*   **Manage Roles** \- Effectively define and assign roles to team members for an organization.
*   **Audit Users** \- Regularly review and audit team members to understand an individuals usage.
*   **Remove Users** \- Remove any inactive users, and manage team membership regularly.

Defining a centralized team helps establish visibility into what users are doing, and what they have access to. Providing the foundation for how Postman, and wider API governance can be realized across operations. Connecting the dots between all the individual Postman users, applying roles and access control, and allowing for additional Postman runtime features to be used in concert, instead of in isolation. 

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stalin-time-supreme-court-columns.jpg)

### Postman Workspaces

Like teams, Postman workspaces allow for not just better organizing team members, but also the artifacts they will be working on to define the APIs they are delivering or consuming. Providing another dimension to how APIs and Postman can be governed, made more observable, providing more awareness and control over how APIs are moved along throughout the API life cycle, and how existing APIs are consumed as part of the integration process.

**GUI** - You can manage team workspaces through he Postman web interface, defining how team members work together. 

*   **[All Workspaces](https://api-evangelist.postman.co/workspaces?type=team)**  \- Manage all the workspaces through the Postman web interface.
*   **[Workspace Settings](https://api-evangelist.postman.co/settings/team/general)**  - Understanding and configuring all the workspace settings properly.
*   **[Workspace Roles](https://api-evangelist.postman.co/settings/team/roles)** - Tuning into what all of the workspace roles are for use across teams.

**API** - You can also automate the management and governance of operations using the Postman teams API.

*   **[All Workspaces](https://docs.api.postman.com/?version=latest#5b53aa96-042d-4bc2-8c85-c10bc7ea0553)** - Programmatically pull all workspaces.
*   **[Single Workspace](https://docs.api.postman.com/?version=latest#feefc577-d86b-4a71-8c06-9816e0df970d)** - Programmatically pull a single workspace.
*   **[Update Workspace](https://docs.api.postman.com/?version=latest#34edebd3-8a53-4927-8ed6-4874a298c2e3)** - Programmatically manage and update a single workspace.
*   **[Delete Workspace](https://docs.api.postman.com/?version=latest#ebba8fd1-da24-4987-aa3a-00d803baee93)** - Remove old and unused workspaces.

**Actions** - Identifying some of the actions that can be taken to govern how collections and environments are accessed and stored.

*   **Audit Workspaces** \- Audit the purpose and usage of an individual workspace.
*   **Define Workspaces** \- Define workspaces as part of overall governance activities.
*   **List Workspace Collections** \- List the collections that exist within a single workspace.
*   **List Workspace Environments** - List the environments that exist within a single workspace.
*   **Backup Collections in Workspaces** \- Backup collections that exist within a workspace.
*   **Backup Environments in Workspaces** - Backup environments that exist within a workspace.
*   **Sync Collections in Workspaces** - Sync collections between workspaces.
*   **Sync Environments in Workspaces** - Sync environments between workspaces.
*   **Manage Workspace Members & Roles** \- Regularly manage workspace members and their roles.
*   **Clean Up Unused Workspaces** - Actively clean up workspaces that are no longer being used.

Postman workspaces are designed to keep teams working on collections, and applying environments logically organized and protected with teams and workspace roles and access management. Thoughtfully defining spaces that reflect how teams are structured, lines of business operate, and how products or services are delivered. Providing manual and automated management of workspaces is critical for realizing governance across teams.

### Collections

Collections are how individual requests are organized and then access by developers, and executed as part of CI/CD pipelines as well as using monitors. Ideally collections are defined, developed, and evolved in concert, and reused across teams using workspaces, instead of completely within the isolation of each individual users personal account. With team and workspaces setup, collections can then be organized in more useful ways that are in alignment overall governance. With a handful of ways to manage via the web interface, and further automate using the Postman API.

**GUI** - Managing all collections and access control for team members via the Postman web interface.

*   **[All Collections](https://api-evangelist.postman.co/me/collections)** - Quickly getting at a list of all collections in the web UI.
*   **[Collection Roles](https://api-evangelist.postman.co/settings/team/roles)** - Being able to manage the roles associated with collections.

**API** - Automating the management of our collections using the Postman API.

*   **[All Collections](https://docs.api.postman.com/?version=latest#3190c896-4216-a0a3-aa38-a041d0c2eb72)** - Pulling all collections via the Postman API.
*   **[Single Collections](https://docs.api.postman.com/?version=latest#647806d5-492a-eded-1df6-6529b5dc685c)**  - Pulling details of single collection using the Postman API.
*   **[Update Collection](https://docs.api.postman.com/?version=latest#aa3701e8-7f99-b421-7d74-0d571b051f3c)** - Update the details of a collection using the aPI.
*   **[Delete Collection](https://docs.api.postman.com/?version=latest#af648b8e-236c-b9e8-dd6c-3d7058d5c04b)** - Delete a collection using the API.

**Actions** - Identifying some of the actions that can be taken when governing collections being defined, developed, and ran across operations.

*   **List Collections** \- Pulling all collections that exist across workspaces.
*   **Discover APIs** - Searching and discovering APIs defined within collections.
*   **Backup Collection** \- Backing up collections to other locations and workspaces.
*   **Sync Collection** \- Automatically syncing collections to other locations and workspaces.
*   **Scan Collection** \- Look inside of collection for specific patterns and data points.
*   **Scrub Collection** - Scrub secrets, PII, and other sensitive data from within collections.
*   **Extract Tests** \- Pull tests from collections and publish them to centralized location.
*   **Validate Collection** - Ensure that collections are compliant with any governance rules.
*   **Identify Unused Collections** \- Find and flag collections that are no longer being used.
*   **Enforce Encryption** - Make sure the https is being used by default across all collections.
*   **Cleanup Collection** - Remove collections that are not longer being used by teams.

As the number of collections grow across a team and an organization, the need to automate the governance of collections will only increase. Going beyond what is possible via the Postman web and desktop interfaces to govern how APIs are delivered and consumed, with collections as the defining artifact. Establishing visibility and control over how all teams are working with APIs, and injecting governance into how teams work.

### Postman Environments

Environments are the final building block to be considered as part of wider API and Postman governance. Like collection, environments will need the greatest amount of governance to provide the most observability, reliability, and security across API operations. When used right, Postman environments help isolate and standardize how secrets, PII, and other sensitive information is used across the delivery and integration of APIs. Postman allows for the management of environments through the interface and the API.

**GUI** - Managing all of the environments in use with the Postman web interface.

*   **[All Environments](https://api-evangelist.postman.co/me/environments)** - Manually manage all of the environments in use.

**API** - Automating the management of environments using the Postman API.

*   **[All Environments](https://docs.api.postman.com/?version=latest#d26bd079-e3e1-aa08-7e21-66f55df99351)** - Programmatically pulling all environments via Postman API.
*   **[Single Environment](https://docs.api.postman.com/?version=latest#96c34392-1e36-d1cb-af89-1c95365184ab)** - Programmatically pulling a single environment.
*   **[Update Environment](https://docs.api.postman.com/?version=latest#6517e0d6-3bc3-3da5-ab57-7a578a8504ce)** - Updating a single environment using the Postman API.
*   **[Delete Environment](https://docs.api.postman.com/?version=latest#c943a79b-0c36-c003-5f22-1c8b1998188e)** - Remove old and unused environments using the API.

The value of governing environments manually or automatically via the API is only as valuable as how consistently environments are used. If developers put secrets directly inside of collections then environment governance is diminished. But if governance dictates that all secrets should be managed using Postman environments than automated governance and management of Postman environments becomes much more effective.

**Actions** - Identifying some of the common actions that exist for governing environment usage across operations.

*   **List Environments** - Providing a list of all environments in use across operations.
*   **Aggregate Variables** - Aggregating variables that are in use across all environments.
*   **Govern Variables** - Evaluate and govern how variables are defined and used.
*   **Scrub Secrets** \- Automatically scrub secrets that are published as part of environments.
*   **Scrub PII** \- Automatically scrub PII that are published as part of environments.
*   **Merge Environments** \- Merge one or more environments together into a single one.
*   **Refresh Tokens** \- Automatically refresh tokens and turn over keys to maintain security.
*   **Backup Environments** - Backup environments to external locations and workspaces.
*   **Sync Environments** \- Sync environments to external locations and workspaces.

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stalin-time-statue-supreme-court.jpg)

The proper usage of environments along with a healthy amount of manual and automated governance represents one of the greatest opportunities for helping secure and stabilize API operations. Isolating how secrets, PII, and other essential data is stored and applied across API operations. Which when combined with effective governance of collections, workspaces, and teams, makes for a pretty effective approach to not just defining how Postman gets used, but how APIs are used across an organization.

### Postman Runtime Governance

The governance of Postman usage, as well as the overall API life cycle begins with the establishment of a Postman team, and the aggregation of all individual Postman users underneath that team. Then you can begin to define workspaces that reflect organizational objectives around how teams are structured, lines of businesses operate, and projects, products, and services are delivered. With all of this in motion, the wider governance of the API life cycle, and how developers, testers, QA, DevOps, and other roles are using Postman becomes possible. Enabling teams to collaborate and work together within designated teams and workspaces, allowing them to be as organized and efficient as possible when it comes to how APIs are delivered and consumed across the enterprise. 

Governance does not just happen. Effective governance takes laying the groundwork for how APIs are delivered and consumed. Postman is a ubiquitous tool across the enterprise API landscape, making it the best place to start when it comes to governance. Making Postman governance, and the thoughtful, well-planned defining and management of Postman users, teams, workspaces, collections, and environments where every organization should be starting when it comes to API governance. If you are effectively governing Postman, then you have the groundwork laid for effectively governing the entire API life cycle. Providing the observability needed to understand how teams are working (or not), while incentivizing collaboration, reuse, and governance of all the key artifacts that are in use across the API factory floor across the enterprise.