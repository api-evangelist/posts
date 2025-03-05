---
published: true
layout: post
title: What API Tools Should I Be Running in My Pipelines for API Governance?
date: 2025-03-05T09:00:00.000Z
tags:
  - Pipelines
  - CI/CD
  - Validation
  - Generation
  - Linting
  - OpenAPI
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/leaflets-of-the-russian-revolution-gears-pipes-plumbing.jpg
---
I am needing to answer a question for a customer regarding what they should be running in their CI/CD pipelines. It is a question I have to answer regularly, and I am always needing to refresh my memory of what is available out there, as well as the different ways you can approaching managing the delivery of APIs using GitHub, GitLab, or BitBucket pipelines, but also any other CI/CD solution. I have organized the tools that I am working with as part of the [API Evangelist Engineering Platform Builder](https://engineering-platform-builder.apievangelist.com/), but like everything else it is a perpetual work in progress.

### Rules-Based Linting (Any Schema)
Starting with API governance, these are the three tools you should be looking at to approach API governance using a rules based approach. All three of these solutions center around the adoption and usage of Spectral rules, but Vacuum is evolving the rule, and Redocly supports Spectral, but has their own approach as well.

- [**Spectral**](https://github.com/stoplightio/spectral)
- [**Vacuum**](https://github.com/daveshanley/vacuum)
- [**Redocly**](https://redocly.com/docs/cli)

This could be the foundation for API governance at the pipeline layer all on it's own, but there are many ways to approach the automation of pipelines in service of API development, so I wanted to explore some of the other dimensions of how pipelines are being used to deliver API governance.

### Validation (OpenAPI)
The overlap between linting and validation can get murky, but I wanted to separate OpenAPI validation from JSON Schema validation. I think what APIMATIC is doing is also rules based linting, but I similar to Redocly, there is some other voodoo going on in there.

- [**APIMATIC**](https://docs.apimatic.io/apimatic-cli/getting-started/)
- [**Redocly**](https://redocly.com/docs/cli)

I may end up just merging this into other areas, but the validation of OpenAPI aside from it's validation using it's JSON Schema seems like an areas that needs more consideration.

### Validation (JSON Schema)
This is where we could be validating OpenAPI using it's JSON Schema, but you can also be validating requests and responses using the JSON Schema in the OpenAPI, which would also overlap with the testing areas below.

- [**Blaze**](https://github.com/sourcemeta/blaze)
- [**AJV**](https://ajv.js.org)

This area can be extended to using the JSON Schema for the OpenAPI, Spectral and Vacuum Rules, Arazzo, Overlays, APIs.json, and other specs to validate artifacts being generated and commited.

### Manipulation (OpenAPI)
This is where you can start generating, manipulating, bundling, unbundling, and working other magic or voodoo on an OpenAPI. I don't like the word manipulation, but this is where the full range of the OpenAPI spec can be managed in an automated way.

- [**libopenapi**](https://pb33f.io/libopenapi/)
- [**Redocly**](https://redocly.com/docs/cli)

There is a lot of multi-file opportunity here, but also likely multi-repo opportunities when it comes to managing and manipulating OpenAPI and JSON Schema in modular but also bundled ways to management many API resources.

### Transformations (OpenAPI)
Here is where you can transform across versions of OpenAPI, but also across other specifications like WSDL, RAML, Blueprint, Collections, Kong and many other specs, ideally settling in on OpenAPI 3.1 as the common lanugage.

- [**APIMATIC**](https://docs.apimatic.io/apimatic-cli/getting-started/)
- [**Redocly**](https://redocly.com/docs/cli)

This shouldn't be a substitute for teams  migrating to the latest version of OpenAPI, but it can be used to automate teams and legacy APIs in that direction.

### Testing (Collections)
API governance in our CI/CD pipelines often resembles or is API testing. One could argue that custom Spectral or Vacuum rules are just API tests. You can also run JSON Schema as a rule to further blur the lines. It is also easy to run Spectral in a Postman or Bruno testing, and you see Microcks further spreading across testing, validation, and governance.

- [**Postman Newman**](https://github.com/postmanlabs/newman)
- [**Bruno**](https://docs.usebruno.com/bru-cli/overview)
- [**Insomnia**](https://docs.insomnia.rest/inso-cli/introduction)
- [**Microcks**](https://microcks.io/)

I break out collections into it's own bucket to come to terms with a lot of API automation is generally seen as API test automaton and often associated with Postman, and the other clients that have emerged to compete with Postman. 

### Testing (OpenAPI)
Now to just focus on testing using only the OpenAPI specification, which Microcks excels at. I recommend taking a look at Microcks approach to examples outside the OpenAPI specification, as well as inside.

- [**Microcks**](https://microcks.io/)
- [**Scalar**](https://github.com/scalar/scalar/blob/main/packages/cli/README.md)

I am just learning about Scalar, and wanted to include in there to keep learning about their OpenAPI centered approach. I am seeing a lot of investments into OpenAPI at this layer and will continue to expand on this.

### Code Generation
This is where API design-first overlaps here and you begin to take a complete OpenAPI specification and generating SDKs. APIMATIC's approach blends the transformation, validation, and repair of your OpenAPI as part of this approach because they understand the need for a complete and accurate API contract.

- [**APIMATIC**](https://docs.apimatic.io/apimatic-cli/getting-started/)
- [**Kiota**](https://github.com/microsoft/kiota)
- [**OpenAPI Generator**](https://github.com/OpenAPITools/openapi-generator)

I included Kiota in here because they have an interesting concumer focused, and they support APIs.json. ;-) I leave OpenAPI Generator on here because that is where many companies begin their journey, but then end up purchasing something like APIMATIC because it becomes a lot of work to produce the SDKs they need.

### API Gateway
I wasn't going to get into the gateway portion of this, but really this is where the rubber meets the road with API governance. Meaning that the more of your OpenAPI is used as a configuraton for the gateway, the stronger your API governance will be. All three of the API gateways I recommend have their own approach to your OpenAPI contract being deployed to the gateway.

- [**Kong**](https://docs.konghq.com/gateway/latest/reference/cli/)
- [**Tyk**](https://tyk.io/docs/api-management/automations/sync/)
- [**Zuplo**](https://zuplo.com/docs/cli/installation)

In my opinion the SDK and gateway are kind of the "oracles" of the OpenAPI specification at the pipeline level. This is why you want to lint, transform, manipulate, and test your OpenAPI contract in your pipeline. This post is getting too long, so I am going to cut it off there, but obviously there is a lot more work to be done here.

Stopping Short Of...

- **Annotations** - Approaching this discussion from a code-first perspective, which takes me into specific programming language realms.
- **Documentation** - This will come next, and there are plenty of interesting approaches to documentation, but this is often still bundled.
- **Mocking** - This will come next too. I almost included it in there because of validation and testing, but it seemed like a place to stop.
- **Security** - Can't forget security. I almost did. I know 42Crunch and others are doing things here, and OWASP can be applied above.

OK. That quickly became a rabbit hole. Couple of additional thoughts.. 

- Need more detail on each tools capabilities.
- We need to develop a pipeline vocabulary for capabilities.
- There is an opportunity for someone to help manage as service.
- Each area here is worthy of it's own story to further flesh out.
- This is all very heavily design-first, but should support code-first.
- Opportunity for APIs.json to act as a manifest to help standardize.

That concludes this spelunking down the API tooling pipeline rabbit hole. If you feel I've missed an important tool, please let me know. No better way to get people to come out of the woodwork than to publish a story without them in it. In addition to looking at the individual capabilities of each of these tools, I am going to revisit work I've done with various enterprises around pipeline governance, and the platformitizaton of pipelines to help provide more guardrails and give teams more value for free. Honestly, I think the pipeline should replace the central API governance documentation and just provide teams with whatever they need in motion.
