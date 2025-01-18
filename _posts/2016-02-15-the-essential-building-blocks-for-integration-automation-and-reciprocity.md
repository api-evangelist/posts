---
layout: post
title: The Essential Building Blocks For Integration, Automation, and Reciprocity
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/zapier-zaps-orchestration.png
tags:
  - Automation
  - Integration
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/zapier-zaps-orchestration.png)](https://zapier.com)I'm spending some time going through [v2 docs for the Zapier API](https://zapier.com/developer/documentation/v2/reference/), following the release of [multi steps work flow](https://zapier.com/blog/workflow-automation/)s, and code steps for calculating, converting, and manipulating data and content, last week. While IFTTT gets a significant amount of the attention of the API reciprocity platforms I track on, I feel like Zapier is the most successful, and reflects most of what I'd lie to see in an API driven integration, and automation platform--specifically, the fact they have an API.

Along with keeping track of what Zapier is up to, I'm spending more time thinking about the increasing number of [API driven bot platforms](http://bots.apievangelist.com/) I'm seeing emerge, and [API enabled voice](http://voice.apievangelist.com) platforms like [Alexa Voice Service](https://developer.amazon.com/public/solutions/alexa/alexa-voice-service). As I was reading Zapier's platform documentation, I couldn't help but see what I'd consider to be the essential building blocks for any integration, automation, and reciprocity platform emerge:

*   **Authentication** - Providing the mechanisms for the most common approaches to API authentication, including basic auth, digest auth, session based, oAuth.
*   **Triggers** - Provide the framework to use verbs and nouns, with help text, and webhook infrastructure to trigger anything users will desire.
*   **Actions** - Provide the framework to use verbs and nouns, with help text, and webhook infrastructure to accomplish an action users will desire.
*   **Searches** -Allowing for simple questions to be asked, and provide a framework to allow APIs to e employed in answering any question asked.
*   **Webhooks** - Putting the automation in API integration, allowing for webhooks that can be triggered, and used as part of actions.
*   **Notification** - Using notifications throughout the process to keep the platform, developers, and end-users informed about anything that is relevant.
*   **Scripting** - Allowing for code integration for calculating, converting, and manipulating data as part of any step of the process.
*   **Multi-step** - Going beyond just just triggers and actions, and allowing for multi-step workflows that put multiple APIs to use.
*   **Activation** - Allowing developers and end-users of the integration, and automation to decide whether the process is invite only, private, or publicly available.

While the scripting, multi-step, and activation pieces are pretty localized to Zapier, and other implementing platforms, the authentication, triggers, actions, searches, webhooks, and notifications are something that all API providers should be thinking about, as touch points with their own infrastructure. You should be supporting common approaches to API authentcation, using meaningful verbs and nouns in your API design, and have a robust webhooks workflow available for your platform.

As I do my research, I'm constantly looking for the common building blocks of any single area of my research--in this case API reciprocity. I'm adding these to the common building blocks in this research, but as you can see the webhooks portion also overlaps with my webhooks research. In addition to this overlap I am also looking for how these building blocks also overlap other existing research areas like bots, and real time, then even as part of some new areas I'm considering adding, like around serverless technology.

I am intrigued by these interesting overlaps in my core research right now, between reciprocity, bots, real time, voice, webhooks, and virtualizations. I'm also very interested in understanding more around how these areas are being applied in some of the areas I am research as part of my API stack work in messaging, social, and other sectors where APIs are making an impact.