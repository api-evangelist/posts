---
published: true
layout: post
title: The Trailing Slash on API Paths and Why a API Governance Rule Matter to Business
date: 2025-03-05T09:00:00.000Z
tags:
  - Paths
  - Rules
  - URLs
  - Governance
  - Business
  - Product
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/braceros-domingo-ulloa-central-park-bridge-morning.jpeg
---
I am working rule by rule to try and bridge the technical details of what we are governing with the business reasons why we want to invest in API governance. On deck is a common rule you come across but few, including me, have done much thought about why we govern it, let alone explaining it to product stakeholders why you should or shouldn’t have a trailing slash on your APIs. Here is the Vacuum rule that governs the existence of a trailing on your API paths, as defined in your OpenAPI 3.x definition for your API.

```
oas3-server-trailing-slash:
    id: oas3-server-trailing-slash
    description: server URL should not contain a trailing slash
    given: $.servers[*]
    formats:
        - oas3
        - oas3_1
    type: style
    severity: warn
    then:
        field: url
        function: pattern
        functionOptions:
            notMatch: /$
    category:
        id: information
        name: Contract Information
        description: The info object contains licensing, contact, authorship details and more. Checks to confirm required details have been completed.
    howToFix: Remove the trailing slash from the server URL. This may cause some tools to incorrectly add a double slash to paths.
```

This rule focuses on there not being a trailing slash on your API paths. The simple explanation for this is that every segment of your URL path is considered a segment meaning https://api.example.com/books is a single path segment, and https://api.example.com/books/ is now two path segments. The slash between .com and books is not considered part of your path, but a trailing slash on your path is. So books can be interpreted as a single resource, but books are considered two separate resources—-when there really is no resource there. It’s a tiny detail, but one that has a number of unpredictable downstream effects.

Personally I don’t care whether you require the slash or require no slash, as long as you are consistent. I urge you to go with no trailing slash, but ultimately it is up to you. So why does this matter downstream? When it comes to using standardized libraries for parsing URLs you are going to get inconsistent counts for what an API resource is in mock servers, gateways, validating, testing, and much more. This simple technical detail can result in many inconsistent outcomes across API operations resulting in failed tests, support calls, and other things that will cost your enterprise time and money.

[You can play with the trailing slash API governance rule in The Doctor](https://bit.ly/3UTwuOF). Just add a slash to the first path in the default OpenAPI you get for the Doctor. The rule will show up in the governance pane, and you can learn more about why it matters and how you can fix it—no coding required. This is something both engineers and product owners should be aware of, and be able to speak to. The OAS trailing slash rule is one of hundreds of rules that help stabilize your API operations and help make the delivery of HTTP more predictable and reliable. Make sure you take the time to understand [the who, what, when, where, and why of your API governance rules](https://apievangelist.com/2025/03/04/grounding-your-api-governance-with-the-who-what-when-where-why-of-rules/), as they are essential to the velocity and quality you are looking for.



