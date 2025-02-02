---
layout: post
title: Continous Integration Platform As A Service At The Command Line
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_04_17_at_12.55.54_pm.png
atomdate: 2017-04-20T16:00:00.000Z
tags:
  - Integration
  - Platform
---
Integration platform as a service (iPaaS) provider Zapier [recently launched a command line tool for managing your integrations](https://zapier.com/engineering/zapier-command-line-interface/), adding an interesting dimension to the platform--leaning in what feels like a continuous integration direction. The integration platform has long had a web builder for managing your integrations with over 750 API-driven services, using their APIs, but the command line interface feels like it's begging to be embedded into your development workflow and life cycle. 

Zapier is catering to engineers by allowing them to:

*   **Bring your Node libraries.** Zapier CLI Apps are made entirely of Node JS code. Use whichever libraries from NPM that you like. You can control every aspect of how Zapier interacts with your API, and our schema defines how authentication, Triggers, Actions, and Searches work.
*   **Run your tests before you deploy**. We believe unit testing is the best way to ensure high-quality code. You can use Mocha or another Node testing framework to feel confident in the code you deploy to Zapier.
*   **Your app can live in source control.** Every aspect of your integration—and every change you make—is written in code. That means you can track changes with Git or other source control like you do on other projects.
*   **Version your app.** You work in releases or sprints for the rest of your projects, why not do the same with your Zapier app? Turn your app updates into versions, then migrate some or all of your users to the latest version.
*   **Collaborate with teammates.** You don’t need to go it alone with your Zapier integration. A CLI app can be owned by more than one Zapier account, with new members quickly added using the tool. That way, the whole team can deploy updates to your Zapier app.

Here are the benefits of the Zapier CLI over the current web builder:

*   **Coding locally.** As mentioned above, you build CLI Apps on your local machine—not on Zapier's website.
*   **Improved control over authentication flow.** CLI Apps give you control over the API calls needed to set up authentication. This is particularly helpful if your API uses a slightly different flow for OAuth2 than what the Web Builder assumes. Now, you can determine the necessary calls and store whatever info your API needs.
*   **Improved Custom Fields.** When setting input fields, you can define static fields as well as functions to compute fields dynamically. These dynamic fields can be the result of API calls, or they can be computed based on the value of a static field.
*   **Middleware.** Tired of including a function call to add a header to each request? Or a call to parse out the responses? Now you can define middleware that runs before requests or after responses to process calls in a standard way.
*   **Resources.** You can define a single resource like a “Contact” and the methods allowed on that resource—like “get, list, create.” From this resource definition, Zapier can automatically generate Triggers and Actions, reusing some of the meta information defined on the resource.

First, I see this significantly benefiting companies and organizations when it comes to the orchestration of internal and partner APIs--your engineering team should be developing Zapier applications for your most important business functions. Second, I see this significantly benefiting companies and organizations when it comes to empowering internal business and technical folks with a complete library of workflows for all the 3rd party services you depend on, like SalesForce, Google, Facebook, Twitter, and other leading SaaS providers.

Providing a Command Line Interface (CLI) alongside an Application Programming Interface (API) seems to be coming back into popularity, partly due to continuous integration (CI) trends. Amazon has always had a CLI alongside their APIs, but it is something other API providers, as well as API service providers like Zapier, seem to be tapping into. I'm going to make some time to build a stack of API Evangelist Zapier apps so I can define some of my most common integrations, and explore further automation as part of my own internal continuous integration workflow.