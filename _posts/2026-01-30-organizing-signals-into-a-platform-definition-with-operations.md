---
published: true
layout: post
title: Organizing Signals Into a Platform Definition with Operations Organized by Role
date: 2026-01-30T09:00:00.000Z
tags:
  - Microcks
  - Mocking
  - Testing
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/john-wayne-the-searchers-cell-tower-satellite-dishes.jpeg
---
I have been gathering signals about what enterprises are invested in as part of my Naftiko Signals work. As I do, I am working out in the open to make sense of the services I am profiling as part of this work, and the most recent work this week focuses on organizing signals into a platform definition with operations organized by role. And what better place to start than with the services that we are using to build Naftiko, building our own platform on top of the signals we are gathering.

## Platform Definition
With this in mind I took the twelve services that Naftiko is using to build our business, establishing a platform definition of the twelve services, and their APIs which were relevant to our engineering and business operations. I wanted an index I could program agains tto extract additional signals and insights regarding what Naftiko is capable of today. In my experience, what any company is capable of is defined by the OpenAPIs for the services they use, which can easily be expressed as sandboxes using Microcks, and explored using Bruno.

- **Anthropic** - We use Anthropic Claude for copilot editing, but also the API to generate artifacts for use in sandboxes and other projects, using JSON Schema to generate and validate the results we get. (Artificial Intelligence, AI) ([Documentation](https://naftiko.github.io/technology/docs/services/anthropic/)) ([API Evangelist](https://contracts.apievangelist.com/store/anthropic/)) ([APIs.json](https://github.com/api-evangelist/anthropic/blob/main/apis.yml)) ([Sandbox](https://github.com/naftiko/anthropic-sandbox))
- **Bluesky** - We use Bluesky as a social network, broadcasting stories, sharing stories from the community, and working to build our network, using it to complement LinkedIn. (Social, Marketing) ([Documentation](https://naftiko.github.io/technology/docs/services/bluesky/)) ([API Evangelist](https://contracts.apievangelist.com/store/bluesky/)) ([APIs.json](https://github.com/api-evangelist/bluesky/blob/main/apis.yml)) ([Sandbox](https://github.com/naftiko/bluesky-sandbox))
- **GitHub** - We use GitHub for source control of code, artifacts, and other content, using Git and the API to manage much of the Naftiko platform. (Source Control, Pipelines, Artifacts, Code) ([Documentation](https://naftiko.github.io/technology/docs/services/github/)) ([API Evangelist](https://contracts.apievangelist.com/store/github/)) ([APIs.json](https://github.com/api-evangelist/github/blob/main/apis.yml)) ([Sandbox](https://github.com/naftiko/github-sandbox))
- **Google** - We use Google Apps as the primary productivity suite for Naftiko, leveraging email, calendar, docs, and the Google Apps suite to conduct business, sharing internally, but also with partners, advisors, and other customers. (Productivity, Documents, Email, Communication) ([Documentation](https://naftiko.github.io/technology/docs/services/google/)) ([API Evangelist](https://contracts.apievangelist.com/store/google/)) ([APIs.json](https://github.com/api-evangelist/google/blob/main/apis.yml)) ([Sandbox](https://github.com/naftiko/google-sandbox))
- **HubSpot** - We use HubSpot as our primary CRM, gathering all leads from the site and other sources, as well as email, then sending our newsletter and other email, and eventually we will be using for sales. (Productivity, CRM, Newsletter) ([Documentation](https://naftiko.github.io/technology/docs/services/hubspot/)) ([API Evangelist](https://contracts.apievangelist.com/store/hubspot/)) ([APIs.json](https://github.com/api-evangelist/hubspot/blob/main/apis.yml)) ([Sandbox](https://github.com/naftiko/hubspot-sandbox))
- **LinkedIn** - We use LinkedIn as the primary business social network, maintaining a Naftiko page, as well as using our personal accounts to engage with the ecosystem, as well as using LinkedIn Sales Navigator for sales pipeline. (Social, Sales, Marketing) ([Documentation](https://naftiko.github.io/technology/docs/services/linkedin/)) ([API Evangelist](https://contracts.apievangelist.com/store/linkedin/)) ([APIs.json](https://github.com/api-evangelist/linkedin/blob/main/apis.yml)) ([Sandbox](https://github.com/naftiko/linkedin-sandbox))
- **Notion** - We use Notion as our primary internal wiki, using it as a collaborative way to manage content, data, and linking to GitHub, Google, and other private or public sources. (Productivity) ([Documentation](https://naftiko.github.io/technology/docs/services/notion/)) ([API Evangelist](https://contracts.apievangelist.com/store/notion/)) ([APIs.json](https://github.com/api-evangelist/notion/blob/main/apis.yml)) ([Sandbox](https://github.com/naftiko/notion-sandbox))
- **OpenAI** - We use OpenAI ChatGPT for copilot editing, but also the API to generate artifacts for use in sandboxes and other projects, using JSON Schema to generate and validate the results we get. (Artificial Intelligence, AI) ([Documentation](https://naftiko.github.io/technology/docs/services/openai/)) ([API Evangelist](https://contracts.apievangelist.com/store/openai/)) ([APIs.json](https://github.com/api-evangelist/openai/blob/main/apis.yml)) ([Sandbox](https://github.com/naftiko/openai-sandbox))
- **Slack** - We use Slack as the primary communication and messaging channel internally at Naftiko, and we have a handful of external channels we are subscribed to or provide. (Communication, Productivity) ([Documentation](https://naftiko.github.io/technology/docs/services/slack/)) ([API Evangelist](https://contracts.apievangelist.com/store/slack/)) ([APIs.json](https://github.com/api-evangelist/slack/blob/main/apis.yml)) ([Sandbox](https://github.com/naftiko/slack-sandbox))
- **YouTube** - We use YouTube to publish all our videos and podcast to different channels, then embedding on social media, blog, and documentation, using the network effect of the platform. (Social, Marketing) ([Documentation](https://naftiko.github.io/technology/docs/services/youtube/)) ([API Evangelist](https://contracts.apievangelist.com/store/youtube/)) ([APIs.json](https://github.com/api-evangelist/youtube/blob/main/apis.yml)) ([Sandbox](https://github.com/naftiko/youtube-sandbox))
- **Zoom** - We use Zoom for meetings and webinars, using the video meetings to engage with partners privately and the public, using the platform to schedule and record the conversations. (Videos, Meetings, Webinars) ([Documentation](https://naftiko.github.io/technology/docs/services/zoom/)) ([API Evangelist](https://contracts.apievangelist.com/store/zoom/)) ([APIs.json](https://github.com/api-evangelist/zoom/blob/main/apis.yml)) ([Sandbox](https://github.com/naftiko/zoom-sandbox))

This represents what Naftiko is capable of in this moment. These are all of the 3rd-party services we depend on right now. This is our business and engineering platform. There is a lot of interesting signals available in here, but there are also a lot of machine-readable artifacts we can use to automate our work, making an APIs.json index pretty valuable when it comes to making sense of our platform.

<style type="text/css">
  .gist .blob-wrapper.data {
    max-height: 300px; /* Set your desired max height */
    overflow: auto;   /* Adds a scrollbar when content exceeds the max height */
  }
</style>
<script src="https://gist.github.com/kinlane/9bf4b8a394b825b928e656b63a806d63.js"></script>

## Platform Resources
With OpenAPIs available for our platform, I loop through all of the tags being applied across the operations available within each sandbox, providing a vocabulary that describes the resources we have available to us, which I add to our APIs.json platform defiition.

<script src="https://gist.github.com/kinlane/e78fe5c7bf2276bee72fee0517fc7e8a.js"></script>

These tags need a lot of refinement across each of the twelve APIs. They do not reflect everything available from these services, but the initial set of resources that we are currently using in one way or another, providing a vocabulary to describe our platform which will grow over time.

<center><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/naftiko-platform-tags.png" width="75%"></center>

## Platform Operations
Next, I was able to loop through each of the OpenAPIs for the twelve services and extract the summary of each operation, providing a more precise look at the available operations, which can then be translated into capabilities (Naftiko), workflows (Arazzo), context (MCP), cards (A2A), skills (Agent Skills), and other more tactical functions.

<script src="https://gist.github.com/kinlane/105a0e6770fe95c0d8c2c2133f9d63af.js"></script>

The operations across the OpenAPIs for these services provide me with all of the available "lego bricks" for the Naftiko platform. I manage the OpenAPIs for each service separate from the Naftiko platform definition, and I am looking to be understand how to keep translating this operations into terms that will make more sense to business stakeholders, while maintaining their connection to the engineering details.

<center><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/naftiko-platform-operations.png" width="75%"></center>

## Platform Roles
I wanted to take one last step today to align what Naftiko is capable of with different roles. Naftiko is just a handful of roles right now, but I wanted to challenge Claude to associate each of the available operations with a role in the list of roles I am using to guide our Naftiko Signals work--further aligning the engineering details with the busienss details.

<script src="https://gist.github.com/kinlane/f53e8117b2dbef28a2b43f2f1073e993.js"></script>

This was just a test. But, I am pretty happy with the results. I'll repeat this process with the services, resources, and operations I am gathering as par tof Naftiko Signals, which will give me a much more robust list of operations to match my robust list of roles, which I can then filter and search on based on company and industry--providing a much richer viewer of what is happening.

<center><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/naftiko-platform-roles.png" width="75%"></center>

## Engineering Context
That is it for now. I am looking to apply this approach to as many of the top services I have harvested as part of Naftiko Signals. Then I will use this approach to get at the intent behind each role--developing some sort of tag cloud or other visual that shows what you are capable of when you select your services and your role, instantly engineering context for you, which you can then dial in with a few tags to describe what you are looking to shape as an individual or aggregate Naftiko capability.

As a result of my work on API governance over the last couple of years, I am convinced that part of the reason we can't properly engineer the context needed to integrate AI into the enterprise, is that we don't have open-source, accessible, complete, and governed OpenAPI, JSON Schema, Arazzo, and other artifacts to use when engineering the desired context. I am looking to change this, but I need a way to also be connected the dots on why these artifacts matter to business and product stakeholders, and this gives me the beginning of what I need to make this happen.