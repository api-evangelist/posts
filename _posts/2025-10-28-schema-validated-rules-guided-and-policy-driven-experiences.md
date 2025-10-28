---
published: true
layout: post
title: Schema-Validated, Rules-Guided, and Policy-Driven Experiences
date: 2025-10-28T09:00:00.000Z
tags:
 - Schema
 - Rules
 - Policies
 - Experiences
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/copper-circuit-supreme-court_36341562380_o.jpg
---
I struggle to share the entirety of my vision for API governance as it requires prior awareness of multiple API specifications and the current state of governance within the industry—with some leaning into what could or should be next when it comes to regulating our business operations. I need to distill my work out of Postman, Bloomberg, and API Evangelist down into a series of steps I can articulate to investors, our Naftiko engineering team, and the wider community to help demonstrate how we can shift gears beyond the sprawl we live in today.

I am struggling with the best way to demonstrate this, using a mix of storytelling, artifacts, and visuals. I need to convey it to all levels of enterprise operations as well as to investors and advisors—so I have to keep it concise. This is something that will take time and require several rounds of storytelling to accomplish. That is what this post is for. I'll start with more words than artifacts and visuals, but will eventually craft more visuals that help break things down into smaller bits that help me articulate a much more complex vision.

#### JSON Schema Is a Fundamental Building Block
I will say it over and over again—JSON Schema is the most important building block out there. It is a molecular unit of this vision and our current state of sprawl. To join me in this journey I don't need you to understand all the technical details of JSON Schema, but I need you to understand that: 1) EVERYTHING is being defined by JSON Schema, with much of it also being validated by JSON Schema, and 2) JSON Schema can be JSON or YAML—helping bridge this discussion to product and business leadership. This is the minimal entry to the club for any technical or non-technical person.

```
$schema: https://json-schema.org/draft/2020-12/schema
$id: https://example.com/station
title: Station
description: The schema for a train station.
type: object
xml:
    name: station
required:
    - id
    - name
    - address
    - country_code
properties:
id:
    type: string
    format: uuid
    description: Unique identifier for the station.
    examples:
    - efdbb9d1-02c2-4bc3-afb7-6788d8782b1e
    - b2e783e1-c824-4d63-b37a-d8d698862f1d
name:
    type: string
    description: The name of the station
    examples:
    - Berlin Hauptbahnhof
    - Paris Gare du Nord
address:
    type: string
    description: The address of the station.
    examples:
    - Invalidenstraße 10557 Berlin, Germany
    - 18 Rue de Dunkerque 75010 Paris, France
country_code:
    type: string
    description: The country code of the station.
    format: iso-country-code
    examples:
    - DE
    - FR
timezone:
    type: string
    description: The timezone of the station in the [IANA Time Zone Database format](https://www.iana.org/time-zones).
    examples:
    - Europe/Berlin
    - Europe/Paris
```

This JSON Schema defines the properties of a train station so that you can book train travel. You can describe any digital object using JSON Schema, providing the name, description, and properties, which can be used to validate that object over time to understand whether or not you are moving forward in an agreed-upon way, in which validation can be done automatically.

#### The OpenAPI Specification
Alongside JSON Schema, you have the OpenAPI specification for describing the HTTP access you have for each API. OpenAPI uses JSON Schema to describe the request and response payloads for each API you define. You also use JSON Schema to validate the entire OpenAPI, to ensure you are following the specification while defining the access to any HTTP API.

```
openapi: 3.1.0
info:
  title: Train Travel API
  description: |
    API for finding and booking train trips across Europe.

    ## Run in Postman
    
    Experiment with this API in Postman, using our Postman Collection.

    [<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/9265903-7a75a0d0-b108-4436-ba54-c6139698dc08?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D9265903-7a75a0d0-b108-4436-ba54-c6139698dc08%26entityType%3Dcollection%26workspaceId%3Df507f69d-9564-419c-89a2-cb8e4c8c7b8f)

    ## Run in Insomnia

    Experiment with this API in Insomnia, using our Insomnia Collection.
    
    [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Train%20Travel%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fbump-sh-examples%2Ftrain-travel-api%2Fmain%2Finsomnia%2FInsomnia_2024-05-27.json)
  version: 1.0.0
  contact:
    name: Train Support
    url: https://example.com/support
    email: support@example.com
  license: 
    name: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
    identifier: CC-BY-NC-SA-4.0

servers:
  - url: https://api.example.com
    description: Production

security:
  - OAuth2:
      - read

tags:
  - name: Stations
    description: | 
      Find and filter train stations across Europe, including their location
      and local timezone.

paths:
  /stations:
    get:
      summary: Get a list of train stations
      description: Returns a list of all train stations in the system.
      operationId: get-stations
      tags:
        - Stations
      responses:
        '200':
          description: A list of train stations
          headers:
            RateLimit:
              $ref: '#/components/headers/RateLimit'
          content:
            application/json:
              schema:
                allOf:
                  - $ref: '#/components/schemas/Wrapper-Collection'
                  - properties:
                      data:
                        type: array
                        items:
                          $ref: '#/components/schemas/Station'
                  - properties:
                      links:
                        allOf:
                          - $ref: '#/components/schemas/Links-Self'
                          - $ref: '#/components/schemas/Links-Pagination'
              example:
                data:
                  - id: efdbb9d1-02c2-4bc3-afb7-6788d8782b1e
                    name: Berlin Hauptbahnhof
                    address: Invalidenstraße 10557 Berlin, Germany
                    country_code: DE
                    timezone: Europe/Berlin
                  - id: b2e783e1-c824-4d63-b37a-d8d698862f1d
                    name: Paris Gare du Nord
                    address: 18 Rue de Dunkerque 75010 Paris, France
                    country_code: FR
                    timezone: Europe/Paris
                links:
                  self: https://api.example.com/stations&page=2
                  next: https://api.example.com/stations?page=3
                  prev: https://api.example.com/stations?page=1
            application/xml:
              schema:
                allOf:
                  - $ref: '#/components/schemas/Wrapper-Collection'
                  - properties:
                      data:
                        type: array
                        xml:
                          name: stations
                          wrapped: true
                        items:
                          $ref: '#/components/schemas/Station'
                  - properties:
                      links:
                        allOf:
                          - $ref: '#/components/schemas/Links-Self'
                          - $ref: '#/components/schemas/Links-Pagination'
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '403':
          $ref: '#/components/responses/Forbidden'
        '429':
          $ref: '#/components/responses/TooManyRequests'
        '500':
          $ref: '#/components/responses/InternalServerError'

components:
  securitySchemes:
    OAuth2:
      type: oauth2
      description: OAuth 2.0 authorization code following RFC8725 best practices.
      flows:
        authorizationCode:
          authorizationUrl: https://example.com/oauth/authorize
          tokenUrl: https://example.com/oauth/token
          scopes:
            read: Read access
            write: Write access
  schemas:
    Station:
      type: object
      xml:
        name: station
      required:
        - id
        - name
        - address
        - country_code
      properties:
        id:
          type: string
          format: uuid
          description: Unique identifier for the station.
          examples:
            - efdbb9d1-02c2-4bc3-afb7-6788d8782b1e
            - b2e783e1-c824-4d63-b37a-d8d698862f1d
        name:
          type: string
          description: The name of the station
          examples:
            - Berlin Hauptbahnhof
            - Paris Gare du Nord
        address:
          type: string
          description: The address of the station.
          examples:
            - Invalidenstraße 10557 Berlin, Germany
            - 18 Rue de Dunkerque 75010 Paris, France
        country_code:
          type: string
          description: The country code of the station.
          format: iso-country-code
          examples:
            - DE
            - FR
        timezone:
          type: string
          description: The timezone of the station in the [IANA Time Zone Database format](https://www.iana.org/time-zones).
          examples:
            - Europe/Berlin
            - Europe/Paris
```

This OpenAPI specification provides a full description of the surface area for any HTTP API. It can be used to describe the technical details of any API that uses HTTP as a transport, which can then be used in other services and tooling as a representation of your API—providing what product and engineering people will need when producing or consuming the API.

#### The AsyncAPI Specification
Alongside JSON Schema and OpenAPI, you have the AsyncAPI specification for describing HTTP, but also WebSockets, Kafka, MQTT, and many others. AsyncAPI is a sister specification to OpenAPI, and you can describe any digital object using JSON Schema to describe message payloads being sent to your event-driven APIs, and also use JSON Schema to validate your overall AsyncAPI definition.

```
asyncapi: 3.0.0
info:
  title: Hello world application
  version: '0.1.0'
channels:
  hello:
    address: 'hello'
    messages:
      sayHelloMessage:
        payload:
          type: string
          pattern: '^hello .+$'
operations:
  receiveHello:
    action: 'receive'
    channel:
      $ref: '#/channels/hello'
```

This AsyncAPI specification provides a robust way to express event-driven APIs across many different protocols. The specification goes much further than OpenAPI but has been around half as long as OpenAPI (Swagger) and tends to reflect more internal API infrastructure. In reality, it can be used to describe any type of public, partner, or private API infrastructure.

#### Schema Validated
OpenAPI and AsyncAPI both use JSON Schema to define and validate payloads. They both also use JSON Schema to validate the specification itself. JSON Schema is the fundamental building block of APIs, and OpenAPI and AsyncAPI allow us to describe the access to the digital resources being made available via any API for use in any desktop, web, mobile, and AI application.

JSON Schema can be validated at the command-line interface, via continuous integration and deployment (CI/CD) pipelines, and via any desktop, web, mobile, or AI application. JSON Schema defines, but also validates, EVERYTHING in our world, allowing us to follow the lead of TypeScript, while making our entire operations more strongly typed at every turn—it is key to the reliability we all are searching for.

#### Competing on Hiding Open-Source Specifications
I want to pause a moment before I move into the "rules-guided" portion of this story. I want to highlight that the majority of startup innovation when it comes to interoperability, integration, and automation—ranging from classic iPaaS to agentic is built upon obfuscating and keeping your OpenAPI and AsyncAPI definitions hidden. If a company is hand-crafting integrations for each API they integrate with, they won't be in business long. The rest of the companies are defining these integrations using OpenAPI and AsyncAPI but keeping those hidden and behind the scenes so that competitors cannot easily integrate and build upon their work.

Startups are taking open-source specs and open-source tooling and hiding them in a commercial layer. I know this from seeing the behind-the-scenes of [APIs.guru](https://apis.guru/) for years, as well as my own API Stack and now [API Evangelist](https://github.com/api-evangelist) and [APIs.io](https://apis.io/) OpenAPI generation. People love to take from these repositories, with almost nobody giving back. As I was building the Postman Network, I talked to numerous startups who all told me they'd be willing to share their OpenAPIs if they could benefit from other companies' OpenAPI—otherwise they'd keep them private and generate value only for their platform. This is the common investor wisdom for startups. It is counter-productive, and means we are mostly competing on commodities. 

#### Spectral Rules
Now we move on to the other essential building block—rules. Specifically, Spectral rules. However, any rules engine should be multi-modal and support [Open Policy Agent](https://www.openpolicyagent.org/), and I'd also recommend looking at [Cedar](cedarpolicy.com). A Spectral rule is a JSON or YAML artifact that uses JSON Path to identify specific properties of a JSON Schema, OpenAPI, AsyncAPI, or any JSON or YAML artifact. This rule looks at the presence of an info title, which can be used in both OpenAPI and AsyncAPI to ensure each API has a name.

```
  openapi-info-title-info:
    description: >-
      Having a intuitive and helpful title for your API using the OpenAPI info
      title is the first impression you will make on the consumers of your API
    message: Info Has Title
    severity: info
    given: $.info
    then:
      field: title
      function: falsy
```

There are [hundreds of well-established Spectral rules governing OpenAPI](https://rules.apievangelist.com/0), and many emerging for AsyncAPI. I also have many that are just for JSON Schema, whether it is used in OpenAPI, AsyncAPI, or standalone. Spectral rules are a low-cost way of describing rules for governing any schema that is used as part of API operations to ensure quality and reliability of systems. After the SmartBear acquisition of Stoplight we can expect Spectral to slow, but ultimately it is open-source and that might be a good thing at this stage.

#### Default Rules
Spectral comes with a range of default functions that check for the truthy, falsy, regex, and even JSON Schema of each property you are governing. These functions will get you about 80% of the way with governing the surface area of any JSON or YAML artifact that describes any aspect of our engineering operations and infrastructure that power our worlds. 

#### Custom Rules
Spectral allows you to also write simple JavaScript snippets that run as part of rules, allowing you to customize your rules and go well beyond what the individual functions will accomplish. These custom rules will do almost anything you need, but you should also consider how Open Policy Agent and Cedar will help extend the capabilities of rules being applied to schema.

#### Validation and Completeness
JSON Schema can be validated at the command-line, in your integrated development environment, via CI/CD pipelines, and via any desktop, web, mobile, or AI application using HyperJump, AJV, or other tooling. Spectral can be validated at the command-line, in your integrated development environment, via CI/CD pipelines, and via any desktop, web, mobile, or AI application using the Spectral library. This allows you to validate and govern the completeness of any schema being used to power your business operations.

#### Rule Severity
Spectral rules give you the ability to define four separate severity levels for how rules get evaluated—errors, warnings, info, and hints. These severity levels allow you to block or not block teams as part of CI/CD pipelines. Rule severity can also be set via policy by domain, allowing for changes in severity as defined by the maturity and overall journey of teams and what governance is required or they are ready for.

#### Rule Guidance
Each Spectral rule has a documentation URL property, which allows for guiding developers to a single documentation page to help provide inline guidance to teams encountering some error, warning, info, or hint. This becomes pretty powerful in a world where nobody reads the docs (until they have to), and when combined with policies and experiences as defined below, you end up with a real-time approach to team guidance (governance) wherever they already work.

A common mistake that most services and tooling make when displaying rules is they show you EVERYTHING. You can 250+ errors, warnings, and other info and hints. It is easy to filter rules by policy, experience, tags, as well as just one at a time. Next. Next. Next. Guiding teams towards documentation and prioritizing what matters the most while also not overwhelming them with too much information along the way--guiding individual team members at scale in the right direction.

#### Rule Coverage
The maturity of any individual schema (OpenAPI, AsyncAPI, JSON Schema, custom) can be evaluated based upon the rule coverage available. Meaning, each rule applies to a property, and you can quickly assess which schema properties have rules and which do not. Rule coverage allows you to understand the maturity of all your schemas, as well as the maturity of all your rules and policy areas discussed below.

#### Rule Scoring
It is easy to apply scoring to each individual rule. This allows you to quickly tally all rules applied to a schema, as well as break them down by severity and policy or experience areas below. How well are we doing on documentation? How well are we doing on security? Rule scoring provides a quick way to emphasize and gamify the importance of governance, which can be weighted and applied in different ways across teams.

#### Postive & Negative Rules
The majority of Spectral rules you encounter will be negative. Telling you what you did wrong. I have built my approach on wider behavioral approaches and recommend having a postive definition for every rule you have a negative definition for. It is siomething that isn't always possible. It isn't always easy, but having positive rules helps you better see the coverage of your governance across APIs.

#### Policies
This is where we begin moving into uncharted territory. Everything I've talked about already is ubiquitous and known across the API landscape. I am not making any of it up, just reporting on the facts as they are—or should be. But to move the conversation forward I have added another schema layer I simply [call policy](https://policies.apievangelist.com/) on top of rules, which helps distill down the technical details of API governance into terms that will make sense to business users.

```
name: Names for APIs
slug: api-metadata-names
tags:
  - APIs
  - Discovery
type: none
image: /images/names.png
rules:
  - apis-json-apis-name-info
  - openapi-info-title-info
  - asyncapi-info-title-info
scope: API Contract
guidance: apis/names
property: name
description: >-
  Providing a clear, descriptive, and concise name for each API, as well as the
  APIs it contains, properly defining the scope, with an intuitive first
  impression of an API.
```

Policies are what leadership and product people will care about, and rules are what engineering stakeholders will care about. Policies have many rules. A policy might be "Managing Security," with individual rules focused on encryption of servers, authentication and authorization, headers, and other details. [Policies](https://policies.apievangelist.com/) speak strategically, while [rules](https://rules.apievangelist.com/) speak tactically, but can be automated to support policy work.

#### Experience
Policies and rules can now easily be organized by [experience](https://experiences.apievangelist.com/). Meaning, onboarding, documentation, code generation, client, sandbox, and other essential experiences can be used as a label applied to policies and rules—giving you a new superpower to prioritize and execute the automation of rules based upon what is more important. Code generation sucks? Let's focus on the properties of our OpenAPI, AsyncAPI, and JSON Schema that will help with SDK generation. Just had a security breach? Let's focus on security-related policies and rules this week.

#### Automation
As mentioned several times, all schema can be validated for structure and shape using JSON Schema and governed for completeness over time using Spectral rules. You can automate this at design time via editors, development time using command-line (CLI) and integrated development environments (IDE), build time using CI/CD pipelines, and runtime via gateways, proxies, and engines. Validation and governance should be EVERYWHERE.

#### Not Included
I am trying to keep this narrative as short and concise as I can to help me keep refining for a non-technical audience that doesn't get the whole world of APIs. With this in mind, there are other things I wanted to add but am holding back to see if I can keep it shorter, though I may want to bring them in for different audiences.

- **Extensions** - I did not talk about how OpenAPI and AsyncAPI can be extended, and how we can use [JSON Schema and Spectral rules to validate and govern](https://apievangelist.com/2024/05/07/the-diff-between-what-json-schema-and-spectral-provide-when-mapping-the-api-landscape/) them.
- **Any Schema** - I only lightly mentioned that this all applies to any schema, and the API governance world tends to focus only on OpenAPI and AsyncAPI.
- **Multi-Schema** - The opportunity to validate, govern, and align across multiple schemas is a significant way to help tackle work across areas of operations.
- **Multi-Pattern** - I look forward to exploring more of the opportunity across request/response as well as event-driven and other operational paradigms.
- **Configuration** - Schemas are often configuration for tooling, and when you expand to the open-source tooling we use, you widen what you can govern.
- **Infrastructure** - You can easily apply this to gateway and other infrastructure configuration, validating and governing API infrastructure responses.
- **Discovery** - I haven't even touched on how you find all of this, and the role that registries and catalogs are playing or not playing in helping with sprawl.
- **Search** - All of the rules can be used to provide a pretty rich search filtering interface that helps you prioritize discovery based upon what really matters.

I am sure other things will come out of the woodwork with this post. That is the purpose of it. Shake my brain. Distill down my talking points for social media and in-person conversations. Then repeat. Write again. Until I get much better at articulating this from the tactical to the strategic level. There is a lot going on here.

#### Business Alignment
Schema, rules, and policies are how you align engineering operations with business. It is how you do it header by header, schema property by schema property. Policies are how you give leadership the controls they need to configure federated and distributed API integrations. Policies are how you come to consensus and alignment among business and engineering leadership. Rules are how you enable those policies on the ground floor across thousands of APIs and integrations. Experiences are how you focus this work on what really matters.

#### Producer vs. Consumer
Another significant shift in my view of this landscape is that most experts who understand this landscape are exclusively focused on producing APIs. I am passionately focused on applying this to consuming APIs. It is where we have less control over the landscape. It is the perspective that matters the most. No API produced matters until it is consumed. After being in the API governance trenches for a number of years at the tactical and strategic level, I am convinced we won't be able to govern the production of most APIs. It is at consumption time where we can have the most impact.

#### In Conclusion
OK, I got what I needed out of this post. I was going to do a visual tooling and artifact walkthrough, but I think the narrative did me more good. Sure, only people who read this might have a chance to grok what I am saying, but I need to understand what matters most in the conversations I am having. There is no guarantee that anyone will read this or sit through any video walkthrough I produce either. So the most important thing is that it is on the tip of my tongue when I enter into conversations. 

I do need to continue working on my API Evangelist tooling that helps articulate all the pieces of this puzzle. You can see most of it in motion with the schema, rules, policies, and experience work I've done. But I am glad I put this work down and waited for my switch to the consumer side of things once again. I feel pretty strongly that this is the vantage point that will matter moving forward. But not for the agentic and other reasons people imagine. I just believe that in this age of enshittification, the outside-in is where most of the magic will happen.