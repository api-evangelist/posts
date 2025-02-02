---
published: true
layout: post
title: Gathering My Thoughts on Public API Workspaces
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-thinking-man-statue.jpg
author:
  name: kinlane
tags:
  - Workspaces
---
I have been neck deep in the release of [Postman public workspaces](https://blog.postman.com/introducing-postman-public-workspaces/) lately. So much so, I haven't had much time to gather my thoughts about what exactly they are, and why they matter. Time for a burst of storytelling to help me make sense of just what is a public APIi workspace. One of the most common responses I've heard from folks that I talk with about public workspaces is that they are most comparable to a public GitHub repository, but designed just for APIs. Fair enough. While I see Postman public workspaces as much more than a Github public repository, it provides a great place to start when it comes to helping folks understand the potential. To help me be more articulate when it comes to speaking about why public workspaces matter, let me compare them to public repositories, and speak of the impact that GitHub has had on my reality, as well as on the wider API community.

### GitHub Changed My Life

I have been using Github since 2010, but beginning in 2014 I began operating a significant portion of my API operations via GitHub. I ran all of my public presence there from 2014 through 2020, and I still regularly use it as a base for many API projects, and for publishing JSON and YAML files. In the last year I have pulled back much of my web presence for API Evangelist back from Github, but I still depend on it for most of my projects for the following reasons. 

*   **Free** - It is free to publish repos to Github, making it a pretty sweet place to publish APIs, schema, JSON, YAML, code, and other artifacts.
*   **Network** - The network effect of Github is huge. Developers get it, and the access and discoverability that comes with the platform are worth it. 
*   **Social** - The social layer GitHub added to Git is really what makes the platform as powerful as it is, making things more collaborative by default.
*   **Source** = Github is designed to be the source for code, but it works just as well for OpenAPIs, JSON Schema, and other artifacts you are managing.
*   **README** - The readme for each repository provides a great hello world for each idea and project, allowing everything to be born as a repo.
*   **Issues** - I use Github issues for everything! It is how I aggregate tasks, features, bugs, and engage with people via the hundreds of repos ii have.
*   **Pages** - Github Pages combined with Jekyll has transformed how I publish data-driven websites, dashboards, and tools for others to use.
*   **SEO** - Early on GitHub repos didn't index well, but eventually it became better to publish things to Github than it was to your own properties.

Github changed my life. Github is how I built API Evangelist. Github is how I made sense of the API lifecycle. All my ideas for the last five years have been born and raised as a Github repository. Repositories provided me with a standardized, yet extensible way to define and move forward an API. A repo, combined with Github Pages, Jekyll, and powered by the Github API gave me a robust platform that provided me with about 60% of what I needed to manage my API operations. Github was the factory floor of my API operation, as well as the public performance of those operations. It is not an understatement to say that Github changed my life—it did. 

### Comparing Postman Public Workspaces to GitHub Public Repositories

Github gave me a pretty extensible base for my API operations, but I found myself always hacking at the edges of what the platform could do to actually deliver what I needed. I had a lot of custom code running on AWS that was required to automate and orchestrate the API factory floor I was operating on Github. This comparison between Postman public workspaces and Github public repositories provides a good starting point for many conversations, but will quickly fall short when it comes to actually describing what is possible. Yes, public workspaces are publicly available like public repositories, and you can store and collaborate around artifacts, but Github was designed for developing open source software and Postman is designed explicitly for APIs. Providing a much more powerful set of tools that help you define the factory floor of your API operations, with each workspace possessing the following resources.

*   **APIs** - Defining APIs using Swagger, OpenAPI, GraphQL, and RAML, providing the contracts for each of the APIs you are providing or consuming as part of operations.
*   **Collections** - Developing and generating collections of API requests which may or may not be defined by OpenAPI contracts, and used across the API lifecycle.
*   **Environments** - Defining different sets of key / value pairs that provide variables that can be applied across collections, applied to authentication and other needs.
*   **Mock Servers** \- Generating mock servers from collections, providing mocks of APIs that can be used to design, develop, and testing of APIs across operations.
*   **Monitors** - Allowing for the running of collections on a schedule via different cloud regions, executing collections across the API lifecycle to automate operations.

I can store OpenAPIs, collections, and other artifacts on Github, but it doesn't provide me with the ability to execute and iterate upon the purpose of each of those artifacts. GIthub provided us with a number of things that help us change how we deliver software, by opening things up, making things more social and collaborative. There is definitely an essence of Github repos present in Postman workspaces, but we are taking what we've learned about optimizing the software development lifecycle, and community aspects of the open source world, but then applying them the next generation of the API lifecycle, which in turn will continue to define how we deliver software applications. To understand the implications of these API centered resources available within Postman public workspaces, it helps to walk through a handful of use cases for public API workspaces, and see them in action.

### API Provider Public Presence Workspace - Salesforce

Like with the Postman public API network, the first place people will go when thinking of a public API workspace will be providing a place for public API providers like Salesforce to publish their APIs, collections, and engage with their consumers. While there is just a lone collection in [this official Salesforce public workspace](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/overview), I think it represents how we'll see most API providers begin their public API workspace journey.

[![](https://kinlane-productions2.s3.amazonaws.com/public-workspaces/salesforce-public-workspace.png)](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/overview)

One of the things our partners are dealing with in their own way is how complete, ready, or polished a workspace needs to be. With some of them realizing that it is first and foremost a workspace, which means it will be a place to do the work to complete, ready, and polish the APIs, collections, and other moving parts of a public workspace. Realizing that iit is a journey, and you are best to just get something stood up, then spend the time polishing what is happening using the feedback from your community--not opting for the perfect workspace.

### API Provider Public Support Workspace - Dropbox

[Dropbox has also published a public workspace](https://www.postman.com/dropbox-api/workspace/dropbox-public-workspace/overview) under their team page, but they have applied a different level of prioritization when it comes to what they are publishing to the Postman network, but also to their workspace. In the Dropbox public workspace you'll find a single collection designed for supporting Dropbox admins, helping automate some of the most common support requests from their admin API consumers.

[![](https://kinlane-productions2.s3.amazonaws.com/public-workspaces/dropbox-public-workspace.png)](https://www.postman.com/dropbox-api/workspace/dropbox-public-workspace/overview)

This reflects where I think that API providers should be headed with their API collections as well as public workspaces. Every API provider should start by publishing an OpenAPI and/or a reference collection for all of their APIs, but then quickly get to work on collections that put their APIs to work to solve real world business problems. I think the Dropbox approach demonstrates the diversity that will exist even amongst this most common definition of what a public workspace i'll be for an API provider.

### API Blueprint Public Workspace - Products

When I first got the ability to publish a public workspace I immediately thought about being able to use demos, webinars, and workshops to show people how to build APIs. I have one private workspace that you will see me use in all of my demos to demonstrate an API-first lifecycle, and the potential of Postman as an API development tool--a reference implementation for a simple product API. [Something I made sure to fire up as a public workspace](https://www.postman.com/cs-demo/workspace/products-api-blueprint/overview), showing one possible way to develop APIs.

[![](https://kinlane-productions2.s3.amazonaws.com/public-workspaces/products-public-workspace.png)](https://www.postman.com/cs-demo/workspace/products-api-blueprint/overview)

I feel like this is the type of workspace that will have the greatest impact on the API community, but I am a little biased towards workspaces being educational. Regardless, I plan on publishing a variety of these types of public workspaces to demonstrate how someone can approach the API lifecycle in a more structured and consistent way using Postman public workspaces, using OpenAPI, collections, and other key Postman platform resources.

### Industry API Standards Public Workspace - UK Public Banking

One project I am working with our runtime partner [APIMetrics](https://apimetrics.io/) on is showcasing how API regulation is being applied in the United Kingdom to make banks more transparent, observable, and consistent. Resulting in a [UK public banking API workspace](https://www.postman.com/api-evangelist/workspace/uk-public-banking/overview) with a handful of OpenAPIs and collections for a handful of the public APIs in which the UK government mandates all banks possess.

[![](https://kinlane-productions2.s3.amazonaws.com/public-workspaces/uk-bank-public-workspace.png)](https://www.postman.com/api-evangelist/workspace/uk-public-banking/overview)

This type of API workspace demonstrates how APIs can be standardized to help drive a specific industry. Showing how one OpenAPI can be used in conjunction with Postman collections to move forward the design of APIs, but also move them forward across the API lifecycle, and demonstrate how they can be applied across multiple API providers. 

### Industry API Standards Public Workspace - FHIR API Specification

Continuing to build on this type of industry public API workspace for defining an API that can be used by many API providers, I fired up [a public API workspace](https://www.postman.com/api-evangelist/workspace/fast-healthcare-interoperability-resources-fhir) for the [Fast Healthcare Interoperability Resources (FHIR)](https://www.hl7.org/fhir/overview.html) API. With this workspace I am looking to demonstrate how a workspace can be used to move forward an industry wide standard for the healthcare space, while also showing it in action with documentation, mock servers, and suite of testing to validate the instance.

[![](https://kinlane-productions2.s3.amazonaws.com/public-workspaces/fhir-public-workspace.png)](https://www.postman.com/api-evangelist/workspace/fast-healthcare-interoperability-resources-fhir)

The FHIR API specification is one of the most important API specifications out there right now. You can see this API being applied as part of the [Department of Veterans Affairs (VA) APIs](https://developer.va.gov/), as well as [Center for Medicare and Medicaid Blue Button APIs](https://bluebutton.cms.gov/). LIke many of the workspaces listed here, there is a lot of work needed on this OpenAPI, it's collection(s), examples, and other moving parts of demonstrating what is possible with the API.

### Municipal API Standards Public Workspace - 211

Following a similar approach to the UK banking and FHIR API public workspaces, next up is the Human Services Data API (HSDA) which is used to deliver 211 services within cities. Helping make human services across the community accessible by those who need it to deliver a variety of web and mobile applications. I am the technical lead on the HSDA API, and will be using [this workspace to move forward the specification](https://www.postman.com/api-evangelist/workspace/open-referral-human-services-data-api-hsda/overview), while demonstrating what is possible with the API.

[![](https://kinlane-productions2.s3.amazonaws.com/public-workspaces/211-public-workspace.png)](https://www.postman.com/api-evangelist/workspace/open-referral-human-services-data-api-hsda/overview)

HSDA is a pretty critical API for helping ensure our communities are healthy and liveable. Ensuring that critical organizations, locations, and services are accessible by citizens within a community. Providing a common interface that can be used within a single community, but also used to harmonize web and mobile applications across many different cities. 

### Municipal API Standards Public Workspace - 311

Complimenting the HSDA 211 API above is the same but for 311 services, helping provide a common API that communities can use to engage with the community around the reporting and servicing of non emergency events that occur across a community. Adding to the stack of API standards that municipalities can use to effectively manage a city and all of the goings on across them each day via a [311 public workspace](https://www.postman.com/api-evangelist/workspace/open311/overview).

[![](https://kinlane-productions2.s3.amazonaws.com/public-workspaces/311-public-workspace.png)](https://www.postman.com/api-evangelist/workspace/open311/overview)

I am working with the technical lead, and other stakeholders of the 311 standard to move the specification forward, showcase the cities that have embraced the standard, and demonstrate what the potential is when you put this API standard to work. Both the 211 and 311 API standards provide us pretty solid examples of the importance that APIs and public API workspaces can play in making our lives more livable.

### API Business Sector Public Workspace - Commerce

I am working my way through the thousands of APIs I have indexed and publishing and aggregating APIs into a variety of business sector public workspaces. I started with all of the commerce related APIs I have available, and publishing the OpenAPI for each one, then generating a collection for the purposes of documentation as part of a single workspace. Making it easier to browse through and kick the tires on all of these APIs, side by side in [a single public workspace](https://www.postman.com/api-evangelist/workspace/commerce/overview).

[![](https://kinlane-productions2.s3.amazonaws.com/public-workspaces/commerce-public-workspace.png)](https://www.postman.com/api-evangelist/workspace/commerce/overview)

Commerce is the original reason for doing APIs, so I figured I'd start here when it comes to showcasing the potential of public workspaces. Seeing APIs side by side like this, then being able to assess the potential available across all of them is something that is going to continue to evolve how I see APIs in these sectors, but also how I see public API workspaces.

### API Business Sector Public Workspace - Message

After commerce I was eager to see all of the messaging APIs side by side to better understand this sector. Aggregating all the different types of SMS, email, and other APIs [into a single public workspace](https://www.postman.com/api-evangelist/workspace/messaging/overview) so that they can be used together, or just used to understand this slice of the API pie. 

[![](https://kinlane-productions2.s3.amazonaws.com/public-workspaces/messaging-public-workspace.png)](https://www.postman.com/api-evangelist/workspace/messaging/overview)

Messaging is one of the most relevant sectors of the API space, providing a suite of APIs that will resonate with a wide audience. Providing a public workspace that I can use to help drive conversations with developers as well as business users. Messaging comes in many shapes and sizes, and this workspaces helps bring the sector into focus for me, and I will keep aggregating, publishing, and evolving APIs to show what is possible.

### API Topic or Trend Public Workspace - COVID-19

Driven by the success of our [COVID-19 resource center](https://covid-19-apis.postman.com/), as soon as public workspaces were available we [published the best of the collections from the resource center into a single public workspace](https://www.postman.com/postman/workspace/covid-19/overview). Showing how a single topic, trend, or other bounded context can be applied to a public workspace, making a variety of APIs available in a single place for developers and other users to put to use in their applications.

[![](https://kinlane-productions2.s3.amazonaws.com/public-workspaces/covid-public-workspace.png)](https://www.postman.com/postman/workspace/covid-19/overview)

I am looking forward to adding more automation, visualizations, and other elements to this workspace. Showing how public workspaces can be used to make these types of APIs available, but can also be used to better make sense of what is happening around the world when it comes to COVID-19.

### API Topic or Trend Public Workspace - US Election

After we launched the COVID-19 resource center we wanted to apply the same approach to making sense of the US election this year. Aggregating the best of the election related APIs into [a single workspace where developers can fork and put to use](https://www.postman.com/postman/workspace/us-2020-election/overview), while also engaging with each other when it comes to getting their questions answered.

[![](https://kinlane-productions2.s3.amazonaws.com/public-workspaces/election-public-workspace.png)](https://www.postman.com/postman/workspace/us-2020-election/overview)

Now that the election is over I am looking forward to showing why these APIs matter during an election, but also afterwards to help us make sense of what is happening. Demonstrating the importance of APIs in each election, and that we should be investing in standards as well as individual implementations in perpetuity, not just as we ramp up for the next election.

### API Automation and Orchestration Public Workspaces - OpenAPIs

I spend a lot of time answering OpenAPI related questions which are a collection. Helping demonstrate a specific aspect of working with OpenAPIs to Postman customers and the community. To help me be more organized around publishing, evolving, sharing, and collaborating around these collection driven capabilities [I published a single workspace for managing my OpenAPI collections, orchestrations, and automation](https://www.postman.com/api-evangelist/workspace/openapi).

[![](https://kinlane-productions2.s3.amazonaws.com/public-workspaces/openapi-public-workspace.png)](https://www.postman.com/api-evangelist/workspace/openapi)

As the number of my workspaces increases the importance of having these types of collections organized in a single workspace becomes even more important. I normally would just organize these across a variety of personal and team workspaces, then share them as needed, occasionally publishing to the API network as a template, but now that I have a public workspace I am being a little more organized about publishing them to a single place and then linking to them via a single URL.

### API Automation and Orchestration Public Workspaces - Collections

I spend a lot of time answering collection related questions. Helping demonstrate a specific aspect of working with collections to Postman customers and the community. To help me be more organized around publishing, evolving, sharing, and collaborating around these collection driven capabilities [I published a single workspace for managing my "collection collections", orchestrations, and automation](https://www.postman.com/api-evangelist/workspace/collections/overview).

[![](https://kinlane-productions2.s3.amazonaws.com/public-workspaces/collection-public-workspace.png)](https://www.postman.com/api-evangelist/workspace/collections/overview)

As the number of my workspaces increases the importance of having these types of collections organized in a single workspace becomes even more important. I normally would just organize these across a variety of personal and team workspaces, then share them as needed, occasionally publishing to the API network as a template, but now that I have a public workspace I am being a little more organized about publishing them to a single place and linking to them via a single URL.

### Government API Public Workspaces - Federal Election Commission (FEC)

One area of the API economy I am keenly interested in is when it comes to government, and after publishing the FEC API to the US election public workspace, I figured I'd add it to a workspace for the agency. [Providing a single workspace](https://www.postman.com/api-evangelist/workspace/federal-election-commission-fec/overview) where you can find all of the APIs from this very critical federal agency.

[![](https://kinlane-productions2.s3.amazonaws.com/public-workspaces/fec-public-workspace.png)](https://www.postman.com/api-evangelist/workspace/federal-election-commission-fec/overview)

For me, a workspace provides a reference to each government agency, helping remind me to invest some time in researching what is happening with APIs at this government agency. Allowing the workspace to drive work around the government agency, helping keep things up to date and representing what is going on with APIs and open data in government.

### Government API Public Workspaces - Department of Veterans Affairs (VA)

Next up to demonstrate the potential of APIs in government is out of one of the government agencies that is near and dear to my heart, the Department of Veterans Affairs (VA). [I took all of the OpenAPIs the VA provides as part of their developer area and imported them into a single workspace](https://www.postman.com/api-evangelist/workspace/department-of-veterans-affairs-va/overview), generating collections from them to help document what is available.

[![](https://kinlane-productions2.s3.amazonaws.com/public-workspaces/va-public-workspace.png)](https://www.postman.com/api-evangelist/workspace/department-of-veterans-affairs-va/overview)

The VA Lighthouse effort is one of the solid examples of APIs making a difference in government, and I am keen on demonstrating how public API workspaces can be used to help the VA better serve veterans. Providing a pretty compelling use case for public workspaces that can help make a difference in the lives of Americans. 

### Just the Tip of the Iceberg of What is Possible

It took me building out different types of public workspaces before I began understanding what a public workspace is. Honestly, I don't think I've even touched on 10% of the possibilities with these examples. Like GitHub, it will take me several years, and building out hundreds or thousands of public workspaces before I'll have a handle on what is possible. Honestly, I am hoping that the community will show me what is possible, as I don't always trust my imagination when it comes to mapping to the reality on the ground across enterprise organizations, institutions, and government agencies. I am betting on the innovation and ingenuity of developers to show what is possible within a public workspace when it comes to helping them better achieve their objectives in making APIs available to a public audience. As usual, I am just hoping that my storytelling might just light the fire under the imagination of folks with these examples.

### Bringing Collaboration To API Operations

Collaboration is one area public workspaces reflect a public repositories. It is definitely one of those areas that the open source movement has impacted how we engage across the API lifecycle. However, the public workspace is much more API centered, focusing on the API contracts and the collections that deliver and validate these contracts throughout their lifecycle. Here are a few of the collaborative aspects of public workspaces, that contribute to bridging the gap between provider and consumer.

*   **API Watching -** Being able to watch APIs available in the public API network, and receive updates when it changes.
*   **API Commenting -** Being able to comment on APIs, and the parts of APIs, establishing a feedback loop around APIs.
*   **Collection Commenting -** Being able to comment on collections, and the parts of collections, establishing a feedback loop around collections.
*   **Team Member Mentions -** Being able to mention team members in API or collection comments, allowing for engaging with specific team members around APIs and collections.
*   **Forking -** Allowing team members and the public to be able to fork a collection to their own private or team workspace, and put to use, or make changes to their forked copy.
*   **Pull Requests -** Submit any changes made to a collection back to the collection owner, allowing them to potentially accept and merge changes back in.
*   **Merging -** Allowing the owner of a collection to accept pull requests from team members or public users, merging any changes back into a collection.
*   **Sharing** - Encouraging team members to share APIs and collections to workspaces where they will be needed, or share the URL of a collection to others via email or other messaging.

These collaborative features are available within each workspace, rolling up to the activity feed for team members across workspaces. Making the API lifecycle a much more collaborative process, allowing team members and the public to tune into what is happening around APIs, and then engaging with the process throughout the API lifecycle. Bringing API development out of silos and helping make it much easier for developers and other API stakeholders to work in concert, and stay in tune with what is going on across an organization.

### Automating the API Factory Floor with Public Workspaces

CI/CD have become synonymous with software delivery lifecycle, and while the deployment of APIs has benefited from this evolution, we are going to need much more automation, orchestration, and establishment of repeatable processes as part of the API lifecycle if we are going to continue to reliably deliver the API infrastructure at the scale we'll need for the next generation of applications. Postman workspaces provide three distinct approaches to automating the collections that are defined and available via the API workbench that exists within a private, team, or public workspace.

*   **Runners** - Manually running a collection and all of the requests it contains in a single motion, triggered by a Postman team member.
*   **Monitors** - Scheduling the run of a collection on a specific schedule and from different cloud regions, automating any possible collection.
*   **Pipelines** - Executing a collection as part of a pipeline weaving API automation into the existing automation used in the software delivery lifecycle.

Think of a public workspace as that microbrewery restaurant that has the view into how the beer you are drinking is actually brewed. Letting everyone see the entire process from start to finish, instilling confidence in consumers that they are getting the best possible beer, made from the best possible ingredients, using the most streamlined process possible--it is so good, we want to show you all how it works.

![](https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-factory-road.jpg)

### Observability By Default with Public Workspaces

In addition to the collaborative possibilities of public workspaces, they inject observability into the conversation by default. All workspaces have outputs that can be used to understand what is going on in real time across operations. Allowing API operations to be understood by capturing the exhaust from regular activity, then using it to stay in tune with what is going on, and respond to changing conditions. Introducing more visibility and accountability into the API lifecycle, without making people do anything extra, other than just getting their regular work down around providing and consuming APIs--here are the elements of a public workspace that contribute to observability out of the gate.

*   **Workspaces** - Just the fact of having a workspace provides a place to find out what is going on within a single bounded context.
*   **History** - Showing all of the requests made by collections across team members, recording every API call made, and allow it to be filtered and used.
*   **Activity** - Having real time visibility into all the activity from across all elements of a workspace, providing true API observability using the Postman platform outputs.
*   **Reporting** - Providing default reporting all the elements within a workspace, providing a visual dashboard for what is going on in real time across teams.
*   **Visualizer** - Using the visualizer tab for each request, making API calls to better understand what is going on with each API, or across APIs, and rendering using a custom JavaScript library.
*   **Comments** - If conversations are localized to workspaces, and made even more precise around the parts of each API and collection defining the API lifecycle, you end up with a powerful feedback loop that makes operations more observable by all.

Being able to understand API operations using the outputs of your API operations is essential to developing an awareness of what is going on at scale. APIs are abstract and difficult to see. When you have hundreds or thousands of APIs, the challenge becomes even greater. API observability begins with monitoring the APIs themselves, and the infrastructure behind them, but then observability should mature to be also about what teams are up to, and being able to observe, guide, and respond to what is happening across operations in real time. 

### Multiple Dimensions of API Collaboration

One of the things that stands out for me across these example workspaces I've created is that there are multiple levels of collaboration, depending on what you are looking to accomplish with your public API workspace. I am sure there are more dimensions than what I have fleshed out here, but these three dimensions of collaboration that really stand out for me as how we optimize operations to work for eveyrone involved.

*   **Provider** - API providers can use workspaces to better define the different parts of their operations, being more public in their operations when possible--walking the walk when it comes to operating the API infrastructure in a way that you want to showcase to others.
*   **Consumer** - You don't have to be an API provider to operate a public workspace, and as shown above you can aggregate, automate, and orchestration using many different workspaces via a dedicated public workspace.
*   **Standards** - Public workspaces are great for moving forward API standards, helping ensure there is the necessary collaboration in place to move a specification forward, while also demonstrating how an API works to providers and consumers.

You can accomplish this type of collaboration via Github repositories, but you just won't find this level attention to the API details in a repository. Github is designed for an open source software development lifecycle. Postman public workspaces have been defined by both API providers and consumers over the last 5+ years, resulting in a workspace approach that already works for industry, government, and other standards bodies looking to guide both API providers and consumers to all move within the same direction--using a tool that is already ubiquitous across development teams.

### API Discoverability Baked Into API Operations

Public workspaces makes your APIs, collections, and the working occurring around them more discoverable. The new Postman search takes discoverability to an entirely new level all by itself, but operating your APIs in a public way adds a whole new level of discoverability. The ability for APIs to open up enterprise organization and push teams to evolve beyond their internal siloes is one of the reasons I started studying APIs in the first place. There are benefits of letting the sunlight into our operations, and operating our API infrastructure out in the open. Sure, not all APIs should operate this way, but most will dramatically benefit from being exposed to the watchful eye of the community it serves. Making the workspace in which APIs, collections, documentation, testing, mock servers, monitors, and other moving parts of our operations public by default helps ensure consumers can find APIs in the first place, but then it also goes a long to build and maintain trust with consumers without doing much more than being more discoverable, accessible, and transparent in everything you do.

### The Versatility of Collections and Environments

There are so many possibilities of what a public API workspace can be because of the unlimited possibilities in how a collection can be defined. Anything an API can do, a collection can do. Once you start daisy chaining multiple APIs together within a collection the possibilities become pretty dizzying. Transcending what is possible with any single API resource or provider and really showing the potential of a distributed API economy. A collection isn't like an OpenAPI in that it tends to represent a single set of API resources or capabilities, it is something that can reflect a series of API calls that reflect a set of business objectives. Providing a unit of valye that can be applied one time, on a schedule, or as part of the regular software development lifecycle. Once you begin to establish abd evikve a=tiyr workbench for crafting, evolving, collaborating and orchestrating out in the open with your community around APIs, and collections around them, the possibilities really are limitless. 

### Pulling Back the Curtain of Our API Operations

Public API workspaces have the potential to pull back the curtain of our API operations. I know that this makes some folks nervous. If your APIs are being consumed by 3rd party applications and integrations you should be working to be as public with your efforts as you can. The least amount of distance between you and your consumers is optimal for putting APIs to work, as well as evolving them. Having a feedback loop in place around each of your APIs, but also the moving parts of your API operations like documentation, mock servers, testing, and other elements helps grease the wheels of your operations. Supporting API consumers in this way will be foreign for some API providers, but as I said before, it will let in some much needed sunlight on your operations, bring your API consumers closer, and give them a voice in the design and delivery of your API infrastructure. The distance between API consumer and producer, as well as the lack of a two way feedback loop is the top deficiencies that plague API platforms tidat. Public API workspaces help pull back the curtain on your API operations, helping bring in the communication that is required to optimize your API factory floor, as well as the supply chain betweeb you and your consumers.

![](https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/curtain-curtain-blue-circuit.jpg)

### Emulating the Best API Patterns Across the Landscape

After playing this API game for over a decade I notice that most people just emulate what they see. If people have consumed a number of different APIs, and are exposed to a wide variety of conversations around APIs, they tend to provide APIs, and run their operations similar to what they've seen. If people haven't consumed a number of different APIs, and have been exposed to a variety of conversations, they tend to not understand what makes APIs work. The more isolated API providers are in their API journey, the more friction and instability will be present across API operations. APIs are all about using the web to make digital resources and capabilities available to the widest possible audience, while striking a balance between being publicly accessible, but secured and generating revenue, ensuring APIs remain sustainable for everyone involved. Being comfortable with operating your APIs out in the open takes a certain amount of confidence and expertise, but it is what helps an API ecosystem thrive. It allows all of us to learn from each other. I help us share the healthiest patterns for operating our APIs. Not just telling people how they should operate their APIs, but demonstrating how to do it. Then API providers can decide which approach suits their needs, and will help them best serve their consumers. Allowing us all to emulate the best of what we are exposed to, pushing us all to be a little better in our own operations because we know that our consumers, and the wider community are watching.

### Using Workspaces to Define Your API Narrative

A public API workspace is just that, a workspace. It is a place to work on your APIs. A public workbench is for defining the contracts for your API, as well as the collections you need to document, mock, and test your APIs. Then the environments, runners, and monitors you need to move each API forward from design to production, while also providing you with what you need to manage change across this API factory floor. How big or small your workspaces are is up to you. Just exactly what goes into a workspace and how it operates is up to your team. You can have as many or as few workspaces as you need to get the work you need done around providing and consuming the APIs you depend on. APIs are a journey, and not a destination. You will never be done delivering APIs. You will never be done with needing to discover and use 3rd party and partner APIs.You will never be done with using APIs if you are going to do business in a digital world. Public API workspaces reveal that this work is never done, and that we will need to setup and maintain private, team, and public workspaces for defining all the digital resources and capabilities we need to do business each day.

I am very accustomed to operating in a very public way. Not because I am in search of page views, more followers, or user signups. I am public in this way because I know that I learn more from this type of production, and that others in the community will learn from it as well. I depend on the feedback loop it creates to find new people, work, ideas, and energy to keep going. Github was one the top platforms from the last decade which have transformed the way I do business, and influenced how I see and use APIs. I am fully aware that I am biased, but I see Postman public workspaces doing this as well. Public workspaces have already changed how I do my storytelling. You'll notice many of the blog posts I am writing now contain a link to one or more APIs or collections in a Postman workspace. You'll see that some of the overview pages for my public workspaces contain todo lists of collections I want to build, as well as the stories I want to tell. Public workspaces are making my storytelling more hands-on, interactive, and even forkable. I see this as being transformative in not just how I support my community, but how API providers and API service providers support their communities as well--seismically shifting how we engage with each other in this API-driven world.