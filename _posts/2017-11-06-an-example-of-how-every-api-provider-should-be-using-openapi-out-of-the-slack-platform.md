---
published: true
layout: post
title: >-
  An Example Of How Every API Provider Should Be Using OpenAPI Out Of The Slack
  Platform
date: 2017-11-06T09:00:00.000Z
tags:
  - API Evangelist
  - Definitions
  - Documentation
  - Messaging
  - SDK
  - Virtualization
image: >-
  https://s3.amazonaws.com/kinlane-productions2/slack/slack-standard-practice.png
---
<p><a href="https://medium.com/slack-developer-blog/standard-practice-slack-web-openapi-spec-daaad18c7f8"><img src="https://s3.amazonaws.com/kinlane-productions2/slack/slack-standard-practice.png" align="right" width="45%" style="padding: 15px;" /></a></p>[The Slack team has published the most robust and honest story about using OpenAPI, providing a blueprint that other API providers should be following](https://medium.com/slack-developer-blog/standard-practice-slack-web-openapi-spec-daaad18c7f8). What I like most about approach by Slack to develop, publish, and share their OpenAPI, is the honesty behind why their are doing it to help standardize around a single definition. [They publish and share the OpenAPI to Github](https://github.com/slackapi/slack-api-specs), which other API providers are doing, and I think should be standard operating procedure for all API providers, but they also go into the realities regarding the messy history of their API documentation--an honesty that I feel ALL API providers should be embracing.

My favorite part of the story from Slack is the opening paragraph that honestly portrays how they've got here: _"The Slack Web API’s catalog of methods and operations now numbers nearly 150 reads, writes, rights, and wrongs. Its earliest documentation, much still preserved on api.slack.com today, often originated as hastily written notes left from one Slack engineer to another, in a kind of institutional shorthand. Still, it was enough to get by for a small team and a growing number of engaged developers."_ Even though we all wish we could do APIs correctly, and supporting API document perfectly from day one, this is never the reality of API operations, and something OpenAPI will not be a silver bullet for fixing all of this, but can go a long way in helping standardize what is going on across teams, and within an API community.

Slack focuses on SDK development, Postman client usage, alternative forms of documentation, and mock servers as the primary reasons for publishing the OpenAPI for their API. They also share some of the back story regarding how they crafted the spec, and their decision making process behind why they chose OpenAPI over other specifications. They also share a bit of their road map regarding the API definition, and that they will be adopting v3.0 of OpenAPI v3.0, providing _"more expressive JSON schema response structures and superior authentication descriptors, specifications for incoming webhooks, interactive messages, slash commands, and the Events API tighter specification presentation within api.slack.com documentation, and example spec implementation in Slack’s own SDKs and tools"_.

I've been covering leading API providers move towards OpenAPI adoption for some time. Writing about [the New York Times publishing of their OpenAPI definition to Github](https://apievangelist.com/2017/03/01/new-york-times-manages-their-openapi-using-github/), and [Box doing the same, but providing even more detail behind the how and why of doing OpenAPI](https://apievangelist.com/2017/05/22/box-goes-all-in-on-openapi/). Slack continues this trend, but showcases more of the benefits it brings to the platform, as well as the community. All API providers should be publishing and up to date OpenAPI definition to Github by default like Slack does. They should also be standardizing their documentation, mock and virtualized implementations, generating SDKs, and driving continuous integration and testing using this OpenAPI, just like Slack does. They should be this vocal about it too, encouraging the community to embrace, and ingest the OpenAPI across the on-boarding and integration process. I know some folks are still skeptical about what OpenAPI brings to the table, but increasingly the benefits are outweighing the skepticism--making it hard to ignore OpenAPI.

Another thing I want to highlight in this story, is that Taylor Singletary ([@episod](https://twitter.com/episod)), reality technician, documentation & developer relations at Slack, brings an honest voice to this OpenAPI tale, which is something that is often missing from the platforms I cover. This is how you make boring ass stories about mundane technical aspects of API operations like API specifications something that people will want to read. You tell an honest story, that helps folks understand the value being delivered. You make sure that you don't sugar coat things, and you talk about the good, as well as some of the gotchas like Taylor has, and connect with your readers. It isn't rocket science, it is just about caring about what you are doing, and the human beings your platform impacts. When done right you can move things forward in a more meaningful way, beyond what the technology is capable of doing all by itself.
