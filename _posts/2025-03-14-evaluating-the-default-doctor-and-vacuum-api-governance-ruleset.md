---
published: true
layout: post
title: Evaluating the Default Doctor and Vacuum API Governance Ruleset
date: 2025-03-14T09:00:00.000Z
tags:
  - Doctor
  - Vacuum
  - Rules
  - Functions
  - JSON Schema
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/eugenics-old-church-police-car.jpeg
---
Alongside [evaluating the default ruleset that comes with Spectral](https://apievangelist.com/2025/03/14/evaluating-the-default-spectral-api-governance-ruleset/) I wanted to evaluate the default ruleset that comes with Vacuum. I am looking to do a diff between the rulesets, but also diff against my own set of rules so that I can establish a baseline for conversations with customers. This is my walk through of each of the available rules which you can find natively part of the OpenAPI Doctor, adding my thoughts as I contrast with the Spectral default set.

## Info Description
As with Spectral, the Vacuum rules div right into the description for the API, making sure it has one and does not have an eval or script tags present.

- info-description
- no-eval-in-markdown
- no-script-tags-in-markdown

### Info Contact
Then it covers some of the same contract information, but has one catch all for the contact properties you want to make sure are present.

- info-contact
- contact-properties

### Licensing
Next, up is the licensing, which reflects Spectral with the basics, but then pushes for the SPDX license as the default which is an interesting play.

- info-license
- info-license-spdx
- license-url

### Servers
Pretty similar not he server front to make sure that there are instances defined and aren’t just demo settings to make sure it is actually usable.

- oas3-api-servers
- oas3-server-trailing-slash
- oas3-host-not-example

### Tags
Identical on the tagging front, just making sure there is tags with description, but also makes sure that they are in an alphabetical order.

- openapi-tags
- tag-description
- openapi-tags-alphabetical

### Paths
The default ruleset for the Doctor goes a little beyond the Spectral and ensures you have a tighter and more case sensitive path are present.

- path-declarations-must-exist
- paths-kebab-case
- no-ambiguous-paths
- path-item-refs
- path-keys-no-trailing-slash
- path-not-include-query
- no-http-verbs-in-path

### Operations
Pretty basic on the operations, just making sure the description is there, but gets a little more specific on the operationId along the way.

- operation-description
- operation-operationId
- operation-operationId-unique
- operation-operationId-valid-in-url

Again, surprised nobody cares about the summary, which plays an important role in making documentation for usable and making sense.

### Operation Parameters
The parameter rules are pretty basic, just making sure they exist and have descriptions without going any deeper into schema.

- operation-parameters
- path-params
- oas3-parameter-description

### Operation Parameter Enumerators
A couple of rules that apply to enumerators ensuring they are standardized for any parameter or property.

- duplicated-entry-in-enum
- typed-enum

### Operation Request Bodies
A single rule to make sure the DELETE and GET methods do not have a request body present, but doesn’t go beyond that.

- no-request-body

### Operation Tags
Similar to Spectral, just making sure that each operation has a tag, ensuring we can organize the properties.

- operation-singular-tag
- operation-tag-defined
- operation-tags

### Operation Security
Just the single requisite property to ensure that every API operation is properly secured along the way.

- oas3-operation-security-defined

### Responses
Similar to Spectral, not very opinionated on responses, but goes a little further with a 4xxx requirement as well as opinions on POST methods. 

- operation-success-response
- post-response-success
- operation-4xx-response

### Additional
This started being for components, but kind of became a catch-all for an interesting description duplication as well as additional properties when $ref is used.

- component-description
- description-duplication
- oas3-no-$ref-siblings
- no-$ref-siblings

### Examples
The pretty standard checks for examples, but also an interesting added dimension of validating the example of schema as well as external check for examples.

- oas3-missing-example
- oas3-valid-schema-example
- oas3-example-external-check
- oas3-unused-component

I like the validation of examples a lot and the unused components is an important one to make sure you are producing very clean examples.

### Schema
Again, the schema guidance is pretty anemic, but it makes sense as this one is hard to lay the baseline and define how people will be using the schema properties.

- oas-schema-check
- oas3-schema

### Swagger
As with the Spectral ones I don’t care about version 2.0, and consider the requirement of using 3.x the first governance rule of governance rule club.

- oas2-anyOf
- oas2-api-host
- oas2-api-schemes
- oas2-discriminator
- oas2-host-not-example
- oas2-host-trailing-slash
- oas2-oneOf
- oas2-operation-formData-consume-check
- oas2-operation-security-defined
- oas2-parameter-description
- oas2-schema
- oas2-unused-definition

### Conclusion
I would say the default ruleset for the Doctor and Vacuum is comparable with the Spectral default ruleset. Vacuum has a couple of really compelling additions though, most notably the layering in of more JSON Schema validation, but also heavy reliance on custom functions—or I guess delivering a new set of default functions. 

There is no implication that the default ruleset for Spectral and Vacuum are what they recommend, and I am guessing they came together in a pretty ad hoc and organic way. What I am working to understand is what the baseline is that the users of these API governance linting solutions begin with, so that I can help agument and move conversations forward with teams. Next, I am going to look at APIMATIC and Redocly who both have their own approach to defining these rules.



