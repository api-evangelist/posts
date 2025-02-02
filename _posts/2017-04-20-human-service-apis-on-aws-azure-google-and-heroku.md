---
layout: post
title: Human Service APIs On AWS, Azure, Google, and Heroku
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/open_referral_aws_google_azure_heroku.png
atomdate: 2017-04-20T19:00:00.000Z
tags:
  - AWS
  - Azure
  - APIs
---
[I have several volunteers available to do work on Open Referral's Human Services Data Specification (API)](https://openreferral.github.io/api-specification/definition/). I have three developers who are ready to work on some projects, as well as an ongoing stream of potential developers I would like to keep busy working on a variety of implementations. I am focusing attention on the top four cloud platforms that companies are using today: AWS, Azure, Google, and Heroku. 

I am looking to develop a rolling wave of projects that will run on any cloud platform, as well as taking advantage of the unique features that each provider offers. I've setup Github projects for managing the brainstorming and development of solutions for each of the four cloud platforms:

*   **[AWS](http://open.referral.aws.adopta.agency/)** - A project site outlining the services, tooling, projects, and communication around HSDS AWS development.
*   **[Azure](http://open.referral.azure.adopta.agency/)** - A project site outlining the services, tooling, projects, and communication around HSDS Azure development.
*   **[Google](http://open.referral.google.adopta.agency/)** - A project site outlining the services, tooling, projects, and communication around HSDS Google development.
*   **[Heroku](http://open.referral.heroku.adopta.agency/)** - A project site outlining the services, tooling, projects, and communication around HSDS Heroku development.

I want to incentivize the develop of APIs, that follow v1.1 of the HSDS OpenAPI. I'm encouraging PHP, Python, Ruby, and Node.js implementations, but open to other suggestions. I would like to have very simple API implementations in each language, running on all four of the cloud platforms, with push button (or at least easy) installation from Github for each implementation.

Ideally, we focus on single API implementations, until there is a complete toolbox that helps providers of all shapes and sizes. Then I'd love to see administrative, web search, and other applications that can be implemented on top of any HSDS API. I can imagine the following elements:

*   **API** - Server-side implementations, or API implementation using specialized services available via any of the providers like Lambda, or Google Endpoints.
*   **Validator** - A JSON Schema, andany other suggested validotr for the API definition, helping implementations validate their APIs.
*   **Admin** - Develop an administrative system for managing all of the data, content, and media that is stored as part of an HSDS API implementation.
*   **Website** - Develop a website or application that allows data, content, and media within an HSDS API implementation to be searched, browsed and engaged with by end-users.
*   **Mobile App** - Develop a mobile application that allows data, content, and media within an HSDS API implementation to be searched, browsed and engaged with by end-users via common mobile devices.
*   **Developer Porta**l - Develop an API portal for managing and providing access to an HSDS API Implementation, allowing developers to sign up, and integrate with an API in their web, mobile, or another type of application.
*   **Push Button Deployment** \- The ability to deploy any of the server side API implementations to the desired cloud platform of your choice with minimum configuration.

I'm looking to incentivize a buffet of simple API-driven implementations that can be easily deployment by cities, states, and other organizations that help deliver human services. They shouldn't be too complicated or be trying to do everything for everyone. Ideally, they are simple, easily deployed infrastructure that can provide a seed for organizations looking to get started with their API efforts.

Additionally, I am looking understand the realities of running a single API design across multiple cloud platforms. It seems like a realistic vision, but I know it is one that will be much more difficult than my geek brain thinks it will be. Along the way, I'm hoping to learn a lot more about each cloud platform, as well as the nuance of keeping my API design simple, even if the underlying platform varies from provider to provider.