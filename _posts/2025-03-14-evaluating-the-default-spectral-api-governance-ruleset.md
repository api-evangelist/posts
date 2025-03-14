---
published: true
layout: post
title: Evaluating the Default Spectral API Governance Ruleset
date: 2025-03-14T09:00:00.000Z
tags:
  - Spectral
  - Rules
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/good-year-home-merchandise-working-on-railroad-1.jpg
---
To help me better understand [the API governance rules I have developed over the last six months](https://rules.apievangelist.com/openapi/) I wanted to walk through what [API governance rules come default with Spectral](https://github.com/stoplightio/spectral/blob/develop/packages/rulesets/src/oas/index.ts). This is a critical hello world moment for API governance teams who have downloaded Spectral, and running it locally at the command line, in their integrated development environment, and possibly baking into CI/CD pipelines. 

### Metadata
There is just a handful of rules covering the metadata that should be present in the OpenAPI info object, ensuring there is a description that is compliant with governance.

- info-description
- no-eval-in-markdown
- no-script-tags-in-markdown

It is interesting that the title isn’t governed by default, making for pretty limited and precise set of governance rules out of the box, which definitely needs expanding upon.

### Contract
The contract rules are pretty straightforward, making sure there someone to get a hold of when it comes to each API being defined, which should be the default for an API.

- info-contact
- contact-properties

### License
Pretty basic licensing rules, and surprised the terms of service property isn’t part of this governance by default, but do force developers to immediately think about the legal side of things.

- info-license
- license-url

### Servers
Provides a good base of managing the instance servers ensuring that you can access the API in a standardized way, which align with the path based rules below, providing a nice base.

- oas3-api-servers
- oas3-server-not-example.com
- oas3-server-trailing-slash
- oas3-server-variables

### Tags
A basic set of tagging rules to ensure there is at least something available with the overall spec to organize operations, and can be expanded upon depending how you are applying tags.

- openapi-tags-alphabetical
- openapi-tags-uniqueness
- openapi-tags

### Paths
There are just a couple of starter rules for the paths without getting to pedantic about REST or other things teams will need, going beyond even what I do at the moment.

- path-declarations-must-exist
- path-keys-no-trailing-slash
- path-not-include-query

### Operations
Minimal definitions for the operations, which includes the description and operation ID, but also barely touches on responses. I'd prefer to break out responses into their own buckets, but there isn't much meat on this bone.

- operation-description
- operation-operationId
- operation-operationId-valid-in-url
- operation-operationId-unique
- operation-success-response

I am surprised there isn’t anything for a summary, and I would think you’d want at least 500 to also be standardized for responses, or even go deeper with media types, schema, etc.

### Parameters
A pretty simple and loose set of guidance for the parameters associated with requests without even touching upon schema, or even getting opinonated regarding the casing of parameters--which is pretty fundamental.

- operation-parameters
- oas3-parameter-description
- path-params

### Operation Security
There is a single rule to make sure you are securing each individual operation, being explicit about API security, but I notice there are not overall security definitions being governed--leaving a gap.

- oas3-operation-security-defined

### Operation Tags
To go with the overall tagging, each individual operation needs to have a single tag defined to organize, aligning with the tags that are being applied to overall OpenAPI.

- operation-tag-defined
- operation-tags
- operation-singular-tag

Not sure I agree with the one tag rule for each operation as a default, but easy to override, and then elaborate upon based upon how you are using tags across your API experiences.

### Types
There are just tree basic rules for helping be more explicit about data types, and specifically enums, providing what I'd barely call a base for the types of data you use as part of your APis.

- duplicated-entry-in-enum
- array-items
- typed-enum

Seems like some basic text, number, integer, and other items would make sense as defaults, but something I will elaborate upon separately as I work my way through these rules.

## Examples
There are some defaults for defining the examples that should be present across the OpenAPI, which help make sure the bits are there you will need for mocking and testing.

- oas3-examples-value-or-externalValue
- oas3-valid-media-example
- oas3-valid-schema-example

### Schema
I was surprised there is only a single schema rule to ensure schema are being defined, and it would be nice to provide a more solid foundation for people to build upon, but is something that should be standardized around OAS 3.1.

- oas3-schema

### Components
I like the unused component rules but would like to see other componentization defaults for examples, parameters, schema, and responses, which would help ensure better practices from the start.

- oas3-unused-component

### Other
Still figuring out why these rules are in there and what buckets I would fit these into the big picture. The callbacks and webhooks look like an after thought, and still considering how the no $ref siblings fits in with my view of componentization.

- no-$ref-siblings
- oas3-callbacks-in-callbacks
- oas3_1-servers-in-webhook
- oas3_1-callbacks-in-webhook

### Swagger
My position is that we are only governing OpenAPI 3.0 and above, and ideally 3.1, so ignoring these, and always recommend just focusing on governing for the latest version 3.1 when at all possible otherwise you are doing double duty on rules.

- oas2-operation-formData-consume-check
- oas2-api-host
- oas2-api-schemes
- oas2-discriminator
- oas2-host-not-example
- oas2-host-trailing-slash
- oas2-parameter-description
- oas2-operation-security-defined
- oas2-valid-schema-example
- oas2-valid-media-example
- oas2-anyOf
- oas2-oneOf
- oas2-schema
- oas2-unused-definition

### Conclusions
It is quite a hodepodge of rules. It reinforces my belief that Spectral rules is primarily just a config for the tooling over being an actual standard. The lack of naming convention and governance for rules is evident. This default ruleset hits on a lot of the basics I recommend, but I go much further and faster in all of the areas. I also don't like how the rules are just default and not really front and center--[there is documentation for all of the rules](https://github.com/stoplightio/spectral/blob/develop/docs/reference/openapi-rules.md), but those descriptions and examples should travel with rules, and there is no real guidance on how to properly extend or the though that went into make these the defaults.

I have taken all of these rules and added references to my corresponding rules that they are indeed Spectral defaults. Next I will do the same for Vacuum rules, and then I'll produce a rubrik across Spectral, Vacuum, and API Evangelist default rules. From this rubrik I will establish a firmer definition of what my default ruleset is for governance and how I recommend evolving and extending it based upon domain, team, experience, and other dimensions. The goal of this work is to be able to speak to what my customers are experience out of the box with Spectral, but then quickly shift into the next gear with the itnroduction of more rules.