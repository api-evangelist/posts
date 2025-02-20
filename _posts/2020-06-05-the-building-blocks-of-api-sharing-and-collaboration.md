---
published: true
layout: post
title: The Building Blocks of API Sharing and Collaboration
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/america-immigration_dumping-ground-big-antennae-tower.jpg
author:
  name: kinlane
tags:
  - Sharing
  - Collection
---
I am tasked with defining what sharing and collaboration means when it comes to API operations at work. I have never had a tool like Postman to help me define how we work as a team across an organization. Normally, I just do a lot of hand waving and say, “you do it like this”, and call it good. With Postman, I now have an opportunity to anchor what I am talking about using the current state of the Postman platform, as well as help shape the future by influencing the Postman road map. 

To help me prepare for more coherent storytelling on the Postman blog, and as part of other conversations, I want to work my way through what the core features of Postman are when it comes to sharing and collaboration. There are many levels to how you can share and collaborate within Postman, which will have different impacts on the ground within enterprise organizations. To help me map Postman functionality to the real world of API operations, I wanted to break down the different level of sharing and collaboration that exists within Postman.

**Team Level**

The essential ingredient of API sharing and collaboration is a team. You just can’t effectively share and collaborate at the provider level without a team. You can share and collaborate in spontaneous ways amongst API provider stakeholders, as well as API consumer stakeholders, but with a well defined team of stakeholders you can take sharing and collaboration to new levels. Here are a couple of the core Postman features that facilitate sharing and collaboration across API operations.

*   **Create a Team** \- The act of creating a team in Postman, and upgrading your account to support the size and scope of your team is the first thing you can do to help lay a foundation that facilitates sharing and collaboration within a team, but also between teams.
*   **Invite to a Team** \- The process of inviting someone to a team is one of the most meaningful sharing and collaboration steps you can take. Designating a shared space for all provider stakeholders to collaborate when it comes to defining and delivering high quality APIs.

In Postman, teams are how organizations go from many individuals working with APIs in isolation to working together to define what APIs are all about. Well defined teams are the foundation of collaboration and sharing across the enterprise. There can be one or many teams within the enterprise organization. Developers are already using Postman across the organization, it is more just about establishing a common set of teams, and encouraging stakeholders to be more organized, thoughtful, and collaborative about how APIs are being delivered.

**Workspace Level**

Workspaces in Postman help organizations draw lines throughout the legacy monolith that exists across large organizations and begin to break things down into smaller, more manageable chunks. There are a handful of sharing and collaboration features involved with workspaces, but really they are the cornerstone for sharing and collaboration across every other aspect of moving APIs forward.

*   **Create a Team Workspace** - Creating teams is setting the table for sharing and collaboration across an organization There can be as few, or as many workspaces as your organizations envision, but they should all act as hubs for how APIs are being developed and delivered across an organization, providing a single snapshot and slice of what is happening within operations.
*   **Invite to a Workspace** - Inviting a team member to a workspace should be a regular occurrence across an organization, bringing stakeholders into the conversation, and allowing teams to work together within a specific context that is defined by teams themselves.
*   **Share a team workspace via URL** \- You can use the URL of a workspace to quickly identify a deliberate set of artifacts and conversations that exist for specific parts of API operations, providing a canonical URL/URI for various parts of an organization.

Team workspaces are where all API stakeholders will work to define, design, mock, document, and test APIs. You should think of team workspaces as being synonymous with GitHub / GitLab / Bitbucket repositories, but specifically for API artifacts and collaboration. A workspace is how you define the bounded context of your API operations, setting the table for the collaboration that will occur in these workspaces, and the sharing that occurs between workspaces, and with the outside world.

**API Level**

Next up is the API dimension of all of this, and how sharing and collaboration occurs around specific API definitions. Providing the central truth that is being defined, designed, and then used to validate, test, and deliver across the API lifecycle. Making sure there is a well defined contract present for each API being delivered, and ensuring that it is accessible for use across operations in a human and machine readable format--providing a handful of sharing, collaboration, and sync opportunities.

*   **Share an API via Team Workspace -** You can have all of your APIs in a single workspace, and then share them out with the workspace where they are being developed, mocked, documented, tested, or other stops along the API lifecycle.
*   **Sync OpenAPI, Swagger, RAML to GitHub** - This is a really important dimension for sharing and collaborating with other services, tooling, and systems by making sure the central truth for each API is being synced to the repository of choice.

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/america-immigration_dumping-ground-paris-bookstand.jpg)

For an API contract to be effective it has to be accessible, shareable, and iterated upon across all stakeholders. API definitions should be accessible to developers in their local workspaces, while also still being synced and made available in common workspaces and repositories. Reducing the friction that historically occurs around emailing around API snippets, artifacts, and definitions, or API assets not being accessible because they are stored locally by individual developers, or on networks that aren’t accessible by all stakeholders.

**Collection Level**

Postman collections are the essential building block of the API economy. Postman collections have emerged over the last five years as the currency for how you put APIs to work, and more importantly how you communicate and collaborate around the consumption of an API. Providing a machine readable way to define the request and response details of what each API can do, while also saving them into a single collection that can be made available to other stakeholders in a way that they can execute and achieve the same outcomes no matter where you are in the world--providing a handful of ways to share and collaborate when it comes to APIs.

*   **Share a collection via URL -** Every collection has a unique URL that anyone can use to quickly share with other individuals. Providing a simple URL / URI that references specific API-driven capabilities that can be executed as is by anyone using their own Postman client.
*   **Share a collection via documentation -** When you publish documentation a collection is also shared, making the documentation executable, and some each developer can take back to their own space and put to work on their own.
*   **Share a collection via team workspace -** Collections can be shared across different workspaces, allowing for the distribution of collection for use as part of the API lifecycle stops employed to deliver those APIs, or by consumers looking to put them to work.

Collections are built for sharing and collaboration. This is why Postman has become an indispensable tool for developers. Right now many developers are using Postman collections in isolation, but once they realize that their co-workers have built many of the same collections, and they can do less work by sharing and collaborating with their team members, collections become much more about sharing and working together. Reducing the everyday workload when it comes to integrating, testing, and working with APIs across an organization.

**Environment Level**

After a collection the ability to define environments that can be applied across one or many different APIs represents one of the biggest opportunities for sharing and collaborating across an organization. Environments are a fairly new concept (within the last couple of years), providing a single way to share environments across teams who are developing and consuming APIs.

*   **Share an Environment via Team Workspace** \- You can make environments available across multiple workspaces, laying the foundation for how secrets, keys, and other key / value pairs are used across API operations.

Abstracting away keys and secrets, and the variables used to create different contexts, from the collections where they are applied is essential for maximizing team interoperability and collaboration when it comes to putting APIs to work. The velocity at which your teams are able to collaborate will depend on how sophisticated your approach is to defining and putting environments to work.

**Feedback Loop Level**

There is one last dimension of features I wanted to throw into the mix involving the feedback loop that needs to occur around API definitions and collections. There are a handful of features available when it comes to inline commenting for both APIs and for collections.

*   **Commenting on API** \- You can comment directly on each API definition, allowing for the collaboration around its evolution. Connecting many different stakeholders together when it comes to moving each definition forward.
*   **Commenting on Collection** - Like APIs, you can comment inline on individual collections. Keeping the thread around each individual collection being used to move each API forward, feeding the collaboration throughout its evolution.
*   **Viewing History -** Each workspace in Postman has a history, showing every API request made across the collections within a workspace. Providing an automated, self-service way to tune into what is happening across teams, allowing for more asynchronous collaboration. 
*   **Viewing Activity -** Each workspace in Postman also has an activity log showing all the configuration, administration, and other activity that is happening when it comes to managing APIs, collections, environments, and the other building blocks of the API lifecycle.

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/america-immigration_dumping-ground-working-waterfront-2.jpg)

The feedback loop is an essential part of the API sharing and collaboration process. If teams are talking, and those discussions are accessible, things move forward at a much more rapid pace. If you have to go looking around for what it's going on with an API, hunting for details, it is unlikely that they will be tuned into what's going on, and effectively collaborating with team members. If everything is available in a known location, with all developers plugged in via the tooling they already depend on, the velocity of collaboration will increase exponentially.

**Bridging These Feature with the Real World**

Next I want to go beyond just looking at the Postman features. It will take me several posts to bridge what Postman offers and what is actually occurring on the ground within organizations. I want to begin mapping out how these features translate on the ground, and there are several stakeholder considerations I want to begin thinking about. Helping me think more about how these Postman features facilitate sharing and collaboration across API operations, but also how they collide with the real world. These features exist because of what the community has asked for, but they also need to be mapped to real world motivations that individuals will have on the ground within their organizations.

I am going to be continuing this narrative across multiple posts. I want to spend time thinking about how developers see or do not see these features, and will care, or not care about sharing and collaboration across their organizations. It is easy to say that developers should just share and collaborate, but the motivations behind doing this on the ground will vary from team to team and organization to organization. Why I share an API with one workspace and team will be different for each API, with some common patterns emerging after you are doing this work for a sustained amount of time. I’m looking to get at the heart of why we share and collaborate which I fear is more about the business and politics of APIs, than it is about the technology of APIs, and specific features existing or not.