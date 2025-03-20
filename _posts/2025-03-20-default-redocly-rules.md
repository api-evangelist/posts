---
published: true
layout: post
title: Evaluating the Default Redocly Rules
date: 2025-03-20T09:00:00.000Z
tags:
  - OpenAPI
  - HTTP
  - Standardization
  - Experience
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/citizenship-old-church-police-car.jpeg
---
Last up in my series of evaluating the leading API governance rules formats is [Redocly](https://redocly.comhttps://redocly.com/docs/cli/rules/built-in-rules). Like APIMATIC, Redocly has organized their rules, making my post an easy copy / paste, but the work of still going through each rule to compare with [Spectral](https://apievangelist.com/2025/03/14/evaluating-the-default-spectral-api-governance-ruleset/), [Vacuum](https://apievangelist.com/2025/03/14/evaluating-the-default-doctor-and-vacuum-api-governance-ruleset/), and [APIMATIC](https://apievangelist.com/2025/03/19/the-default-apimatic-rules/) is still cumbersome. However, learning the nuance and detail of each rule is important, but also the Venn Diagram of support for Spectral, while slipping in your own special magic is worthwhile.

### Special rules
I like these rules that don't fit into the normal categories, and will likely require a separate story to unpack the logic and reasoning and where they fit in.

*   [no-unresolved-refs](https://redocly.com/docs/cli/rules/oas/no-unresolved-refs): Every `$ref` must exist
*   [no-unused-components](https://redocly.com/docs/cli/rules/oas/no-unused-components): All components must be used
*   [security-defined](https://redocly.com/docs/cli/rules/oas/security-defined): Security rules must be defined, either globally or per-operation
*   [struct](https://redocly.com/docs/cli/rules/oas/struct): Conform to the declared OpenAPI specification version
*   [spec-components-invalid-map-name](https://redocly.com/docs/cli/rules/oas/spec-components-invalid-map-name): Use only alphanumeric and basic punctuation as key names in the components section
*   [spec-strict-refs](https://redocly.com/docs/cli/rules/oas/spec-strict-refs) Restricts the usage of the `$ref` keyword.

### Info
This ffeels pretty light to me when it comes to what is needed by the OpenAPI info object, but just my immediate reaction.

*   [info-contact](https://redocly.com/docs/cli/rules/oas/info-contact): Contact section is defined under `info`
*   [info-license](https://redocly.com/docs/cli/rules/oas/info-license): License section is defined under `info`
*   [info-license-url](https://redocly.com/docs/cli/rules/oas/info-license-url): License section contains a `url` to the license

### Operations
The pretty standard operational, but then also a light touch on the responses which I prefer to separate into own bucket.

*   [operation-2xx-response](https://redocly.com/docs/cli/rules/oas/operation-2xx-response): Every operation needs at least one 2xx response
*   [operation-4xx-response](https://redocly.com/docs/cli/rules/oas/operation-4xx-response): Every operation needs at least one 4xx response
*   [operation-4xx-problem-details-rfc7807](https://redocly.com/docs/cli/rules/oas/operation-4xx-problem-details-rfc7807): All 4xx responses use RFC7807 format
*   [operation-description](https://redocly.com/docs/cli/rules/oas/operation-description): Description field is required for every operation
*   [operation-operationId](https://redocly.com/docs/cli/rules/oas/operation-operationId): OperationId is required for every operation
*   [operation-operationId-unique](https://redocly.com/docs/cli/rules/oas/operation-operationId-unique): OperationId must be unique
*   [operation-operationId-url-safe](https://redocly.com/docs/cli/rules/oas/operation-operationId-url-safe): OperationIds can only contain characters that are safe to use in URLs
*   [operation-summary](https://redocly.com/docs/cli/rules/oas/operation-summary): Summary is required for every operation

### [](#parameters)Parameters
Nice spread of parameter rules that help us get our path and query parameters in order as part of each operation.

*   [array-parameter-serialization](https://redocly.com/docs/cli/rules/oas/array-parameter-serialization): Require `style` and `explode` for parameters with array type
*   [boolean-parameter-prefixes](https://redocly.com/docs/cli/rules/oas/boolean-parameter-prefixes): All boolean paramater names start with a particular prefix (such as "is")
*   [no-invalid-parameter-examples](https://redocly.com/docs/cli/rules/oas/no-invalid-parameter-examples): Parameter examples must match declared schema types
*   [operation-parameters-unique](https://redocly.com/docs/cli/rules/oas/operation-parameters-unique): No repeated parameter names within an operation
*   [parameter-description](https://redocly.com/docs/cli/rules/oas/parameter-description): Parameters must all have descriptions
*   [path-declaration-must-exist](https://redocly.com/docs/cli/rules/oas/path-declaration-must-exist): Paths must define template variables where placeholders are needed
*   [path-not-include-query](https://redocly.com/docs/cli/rules/oas/path-not-include-query): No query parameters in path declarations (declare them as parameters with `in: query`)
*   [path-parameters-defined](https://redocly.com/docs/cli/rules/oas/path-parameters-defined): Path template variables must be defined as parameters

### [](#paths)Paths
Some of the same rules I found with others, but some interesting additions like plural and duplication thrown in there.

*   [no-ambiguous-paths](https://redocly.com/docs/cli/rules/oas/no-ambiguous-paths): No path can match more than one PathItem entry, including template variables
*   [no-http-verbs-in-paths](https://redocly.com/docs/cli/rules/oas/no-http-verbs-in-paths): Verbs like "get" cannot be used in paths
*   [no-identical-paths](https://redocly.com/docs/cli/rules/oas/no-identical-paths): Paths cannot be identical, including template variables
*   [no-path-trailing-slash](https://redocly.com/docs/cli/rules/oas/no-path-trailing-slash): No trailing slashes on paths
*   [path-excludes-patterns](https://redocly.com/docs/cli/rules/oas/path-excludes-patterns): Set a regular expression that cannot be used in paths
*   [path-segment-plural](https://redocly.com/docs/cli/rules/oas/path-segment-plural): All URL segments in a path must be plural (exceptions can be configured)
*   [paths-kebab-case](https://redocly.com/docs/cli/rules/oas/paths-kebab-case): Paths must be in `kebab-case` format

### [](#requests-responses-and-schemas)Requests, Responses, and Schemas
Interesting mix of requests, responses, and schema into a bucket. I prefer keeping all three of these separate, as well as examples, but I will keep grouped as they intended.

*   [component-name-unique](https://redocly.com/docs/cli/rules/oas/component-name-unique): Check for schema-wide unqiue naming of parameters, schemas, request bodies and responses
*   [no-enum-type-mismatch](https://redocly.com/docs/cli/rules/oas/no-enum-type-mismatch): Enum options must match the data type declared in the schema
*   [no-example-value-and-externalValue](https://redocly.com/docs/cli/rules/oas/no-example-value-and-externalValue): Either the `value` or `externalValue` may be present, but not both
*   [no-invalid-media-type-examples](https://redocly.com/docs/cli/rules/oas/no-invalid-media-type-examples): Example request bodies must match the declared schema
*   [no-invalid-schema-examples](https://redocly.com/docs/cli/rules/oas/no-invalid-schema-examples): Schema examples must match declared types
*   [no-required-schema-properties-undefined](https://redocly.com/docs/cli/rules/oas/no-required-schema-properties-undefined): All properties marked as required must be defined
*   [no-schema-type-mismatch](https://redocly.com/docs/cli/rules/oas/no-schema-type-mismatch): Detects schemas with type mismatches between object and items fields, and array and properties fields.
*   [request-mime-type](https://redocly.com/docs/cli/rules/oas/request-mine-type): Configure allowed mime types for requests
*   [response-mime-type](https://redocly.com/docs/cli/rules/oas/response-mime-type): Configure allowed mime types for responses
*   [response-contains-header](https://redocly.com/docs/cli/rules/oas/response-contains-header): List headers that must be included with specific response types
*   [response-contains-property](https://redocly.com/docs/cli/rules/oas/response-contains-property): Specify properties that should be present in specific response types
*   [scalar-property-missing-example](https://redocly.com/docs/cli/rules/oas/scalar-property-missing-example): All required scalar (non-object) properties must have examples defined
*   [required-string-property-missing-min-length](https://redocly.com/docs/cli/rules/oas/required-string-property-missing-min-length): All required properties of type string must have a `minLength` configured

### [](#servers)Servers
A nice robust set of rules for looking at the servers, reflecting the other formats approach to managing API servers.

*   [no-empty-servers](https://redocly.com/docs/cli/rules/oas/no-empty-servers): Servers array must be defined
*   [no-server-example.com](https://redocly.com/docs/cli/rules/oas/no-server-example-com): `example.com` is not acceptable as a server URL
*   [no-server-trailing-slash](https://redocly.com/docs/cli/rules/oas/no-server-trailing-slash): Server URLs cannot end with a slash (paths usually start with a slash)
*   [no-server-variables-empty-enum](https://redocly.com/docs/cli/rules/oas/no-server-variables-empty-enum): Require that enum values are set if variables are used in server definition
*   [no-undefined-server-variable](https://redocly.com/docs/cli/rules/oas/no-undefined-server-variable): All variables in server definition must be defined

### [](#tags)Tags
No surprises here, pretty much the same as others when it comes to the tagging and organization of our operations.

*   [operation-singular-tag](https://redocly.com/docs/cli/rules/oas/operation-singular-tag): Each operation may only have one tag
*   [operation-tag-defined](https://redocly.com/docs/cli/rules/oas/operation-tag-defined): Tags can only be used if they are defined at the top level
*   [tag-description](https://redocly.com/docs/cli/rules/oas/tag-description): Tags must have descriptions
*   [tags-alphabetical](https://redocly.com/docs/cli/rules/oas/tags-alphabetical): Tags in the top-level `tags` section must appear alphabetically

### Conclusion
Redocly feel pretty reflective of Spectral, with a few special rules that make their approach unique. From my knowledge of Redocly I think the power of their governance is beyond the rules and comes with the other capabilities built into the CLI. Similar to the approach of libopenapi from quobix, as well as what you see APIMATIC building out across their services and tooling. It can be difficult to separate the rules from the tools and libraries, but I like it when things are codified as YAML, rather than obscured behind the command line.

Next, I am taking [Spectral](https://apievangelist.com/2025/03/14/evaluating-the-default-spectral-api-governance-ruleset/), [Vacuum](https://apievangelist.com/2025/03/14/evaluating-the-default-doctor-and-vacuum-api-governance-ruleset/), and [APIMATIC](https://apievangelist.com/2025/03/19/the-default-apimatic-rules/), and the Redocly rules and aggregating them into a single reference set. APIMATIC has the most rules and the most coverage. My goal with this work is to strengthen my understand of each approach, connect the dots across them, and shine more of a light on what is needed, helping me understand the rules coverage that exists, but also what the potential gaps in coverage are, while working to drive the conversation more. In the end, the rules don't matter, but the story and conversation around each rule.