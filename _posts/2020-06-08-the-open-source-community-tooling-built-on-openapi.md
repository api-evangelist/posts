---
published: true
layout: post
title: The Open Source Community Tooling Built on OpenAPI
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stalin-time-shipping-docks_36331347010_o.jpg
author:
  name: kinlane
tags:
  - OpenAPI
---
I am finally finding time to pick up some old work quantifying the open source that has risen up around API specifications. I am pulling all of the open source tooling available on GitHub when you search for "OpenAPI". [I just published the same assessment of searching for "Postman"](http://apievangelist.com/2020/06/08/the-open-source-community-tooling-built-on-postman/), but since Postman's API builder is centered around OpenAPI, it makes sense to do the same for OpenAPI. I'm looking to develop a understanding with many of the tooling provider listed here, but I am also looking to understand what developers are needing when it comes to OpenAPI. I have gone through the cream off the top of the search for "OpenAPI" on GitHub and here is what I have come up with so far.

### Specifications

*   [**OpenAPI Specification**](https://github.com/OAI/OpenAPI-Specification) - (forks: 6456) (stars: 17676) (watchers: 17676) - the openapi specification repository

### Parser

*   [**swagger parser**](https://github.com/APIDevTools/swagger-parser) - (forks: 96) (stars: 604) (watchers: 604) - swagger 2.0 and openapi 3.0 parser/validator
*   [**kin openapi**](https://github.com/getkin/kin-openapi) - (forks: 111) (stars: 503) (watchers: 503) - openapi 3.0 implementation for go (parsing, converting, validation, and more)
*   [**oas kit**](https://github.com/Mermade/oas-kit) - (forks: 84) (stars: 436) (watchers: 436) - convert swagger 2.0 definitions to openapi 3.0 and resolve/validate/lint
*   [**openapi.tools**](https://github.com/apisyouwonthate/openapi.tools) - (forks: 114) (stars: 174) (watchers: 174) - a collection of editors, linters, parsers, code generators, documentation, testing

### Validator

*   [**swagger parser**](https://github.com/APIDevTools/swagger-parser) - (forks: 96) (stars: 604) (watchers: 604) - swagger 2.0 and openapi 3.0 parser/validator
*   [**kin openapi**](https://github.com/getkin/kin-openapi) - (forks: 111) (stars: 503) (watchers: 503) - openapi 3.0 implementation for go (parsing, converting, validation, and more)
*   [**oas kit**](https://github.com/Mermade/oas-kit) - (forks: 84) (stars: 436) (watchers: 436) - convert swagger 2.0 definitions to openapi 3.0 and resolve/validate/lint
*   [**openapi cop**](https://github.com/EXXETA/openapi-cop) - (forks: 10) (stars: 325) (watchers: 325) - a proxy that validates responses and requests against an openapi document.
*   [**express openapi validator**](https://github.com/cdimascio/express-openapi-validator) - (forks: 51) (stars: 253) (watchers: 253) - 🦋 auto-validates api requests, responses, and securities using expressjs and an openapi 3.x specification
*   [**openapi.tools**](https://github.com/apisyouwonthate/openapi.tools) - (forks: 114) (stars: 174) (watchers: 174) - a collection of editors, linters, parsers, code generators, documentation, testing

### Generators

*   [**openapi generator**](https://github.com/OpenAPITools/openapi-generator) - (forks: 1946) (stars: 5383) (watchers: 5383) - openapi generator allows generation of api client libraries (sdk generation), server stubs, documentation and configuration automatically given an openapi spec (v2, v3)
*   [**NSwag**](https://github.com/RicoSuter/NSwag) - (forks: 703) (stars: 3501) (watchers: 3501) - the swagger/openapi toolchain for .net, [asp.net](http://asp.net/) core and typescript.
*   [**flasgger**](https://github.com/flasgger/flasgger) - (forks: 299) (stars: 2104) (watchers: 2104) - easy openapi specs and swagger ui for your flask api
*   [**drf yasg**](https://github.com/axnsan12/drf-yasg) - (forks: 233) (stars: 1588) (watchers: 1588) - automated generation of real swagger/openapi 2.0 schemas from django rest framework code.
*   [**rswag**](https://github.com/rswag/rswag) - (forks: 194) (stars: 709) (watchers: 709) - seamlessly adds a swagger to rails-based api's
*   [**apispec**](https://github.com/marshmallow-code/apispec) - (forks: 117) (stars: 723) (watchers: 723) - a pluggable api specification generator. currently supports the openapi specification (f.k.a. the swagger specification)..
*   [**OpenAPI.NET**](https://github.com/microsoft/OpenAPI.NET) - (forks: 85) (stars: 666) (watchers: 666) - the [openapi.net](http://openapi.net/) sdk contains a useful object model for openapi documents in .net along with common serializers to extract raw openapi json and yaml documents from the model.
*   [**django rest swagger**](https://github.com/marcgibbons/django-rest-swagger) - (forks: 179) (stars: 0) (watchers: 517) - swagger documentation generator for django rest framework
*   [**openapi.tools**](https://github.com/apisyouwonthate/openapi.tools) - (forks: 114) (stars: 174) (watchers: 174) - a collection of editors, linters, parsers, code generators, documentation, testing

### Conversion

*   [**openapi to graphql**](https://github.com/IBM/openapi-to-graphql) - (forks: 80) (stars: 738) (watchers: 738) - translate apis described by openapi specifications (oas) into graphql
*   [**gnostic**](https://github.com/googleapis/gnostic) - (forks: 76) (stars: 625) (watchers: 625) - a compiler for apis described by the openapi specification with plugins for code generation and other api support tasks.
*   [**api spec converter**](https://github.com/LucyBot-Inc/api-spec-converter) - (forks: 91) (stars: 616) (watchers: 616) - convert api descriptions between popular formats such as openapi(fka swagger), raml, api blueprint, wadl, etc.
*   [**openapi2proto**](https://github.com/nytimes/openapi2proto) - (forks: 71) (stars: 594) (watchers: 594) - a tool for generating protobuf v3 schemas and grpc service definitions from openapi specifications
*   [**kin openapi**](https://github.com/getkin/kin-openapi) - (forks: 111) (stars: 503) (watchers: 503) - openapi 3.0 implementation for go (parsing, converting, validation, and more)
*   [**oas kit**](https://github.com/Mermade/oas-kit) - (forks: 84) (stars: 436) (watchers: 436) - convert swagger 2.0 definitions to openapi 3.0 and resolve/validate/lint
*   [**openapi to postman**](https://github.com/postmanlabs/openapi-to-postman) - (forks: 58) (stars: 223) (watchers: 223) - plugin for converting openapi 3.0 specs to the postman collection (v2) format

### Change Management

*   [**optic**](https://github.com/opticdev/optic) - (forks: 15) (stars: 257) (watchers: 257) - apis that document & test themselves

### Rules

*   [**speccy**](https://github.com/wework/speccy) - (forks: 70) (stars: 576) (watchers: 576) - well spectually 🤓 enforce quality rules on your openapi 3.0.x specifications.
*   [**spectral**](https://github.com/stoplightio/spectral) - (forks: 58) (stars: 565) (watchers: 565) - a flexible json/yaml linter for creating automated style guides, with baked in support for openapi v2 & v3.

### Documentation

*   [**redoc**](https://github.com/Redocly/redoc) - (forks: 1108) (stars: 9444) (watchers: 9444) - 📘 openapi/swagger-generated api reference documentation
*   [**swagger ui**](https://github.com/swagger-api/swagger-ui) - (forks: 1522) (stars: 0) (watchers: 2627) - swagger ui is a dependency-free collection of html, javascript, and css assets that dynamically generate beautiful documentation from a swagger-compliant api.
*   [**spectacle**](https://github.com/sourcey/spectacle) - (forks: 232) (stars: 1097) (watchers: 1097) - beautiful static documentation generator for openapi/swagger 2.0
*   [**widdershins**](https://github.com/Mermade/widdershins) - (forks: 208) (stars: 665) (watchers: 665) - openapi / swagger, asyncapi & semoasa definitions to slate / shins compatible markdown
*   [**springdoc openapi**](https://github.com/springdoc/springdoc-openapi) - (forks: 97) (stars: 607) (watchers: 607) - library for openapi 3 with spring-boot
*   [**dapperdox**](https://github.com/DapperDox/dapperdox) - (forks: 39) (stars: 267) (watchers: 267) - beautiful, integrated, openapi documentation.
*   [**RapiDoc**](https://github.com/mrin9/RapiDoc) - (forks: 51) (stars: 211) (watchers: 211) - rapidoc - custom-element for openapi spec

### Editor

*   [**intellij swagger**](https://github.com/zalando/intellij-swagger) - (forks: 57) (stars: 1005) (watchers: 1005) - a plugin to help you easily edit swagger and openapi specification files inside intellij idea
*   [**openapi gui**](https://github.com/Mermade/openapi-gui) - (forks: 96) (stars: 733) (watchers: 733) - gui / visual editor for creating and editing openapi / swagger definitions
*   [**apicurio studio**](https://github.com/Apicurio/apicurio-studio) - (forks: 224) (stars: 534) (watchers: 534) - open source api design
*   [**studio**](https://github.com/stoplightio/studio) - (forks: 26) (stars: 271) (watchers: 271) - the modern editor for api design and technical writing.

### Explorer

*   [**oax**](https://github.com/darosh/oax) - (forks: 38) (stars: 216) (watchers: 216) - openapi specification explorer

### Visualizations

*   [**openapi map**](https://github.com/arno-di-loreto/openapi-map) - (forks: 46) (stars: 234) (watchers: 234) - the openapi map (fka. openapi specification visual document) aims to help you find your way in the openapi specification (fka. swagger specification) documentation.

### Mocking

*   [connexion](https://github.com/zalando/connexion) - (forks: 542) (stars: 3150) (watchers: 3150) - swagger/openapi first framework for python on top of flask with automatic endpoint validation & oauth2 support
*   [mockoon](https://github.com/mockoon/mockoon) - (forks: 105) (stars: 1938) (watchers: 1938) - mockoon is the easiest and quickest way to run mock apis locally. no remote deployment, no account required, open source.
*   [prism](https://github.com/stoplightio/prism) - (forks: 105) (stars: 1188) (watchers: 1188) - turn any openapi2/3 and postman collection file into an api server with mocking, transformations and validations.
*   [apisprout](https://github.com/danielgtaylor/apisprout) - (forks: 49) (stars: 416) (watchers: 416) - lightweight, blazing fast, cross-platform openapi 3 mock server with validation

### Deployment

*   [**go restful**](https://github.com/emicklei/go-restful) - (forks: 577) (stars: 3761) (watchers: 3761) - package for building rest-style web services using go
*   [**connexion**](https://github.com/zalando/connexion) - (forks: 542) (stars: 3150) (watchers: 3150) - swagger/openapi first framework for python on top of flask with automatic endpoint validation & oauth2 support
*   [**loopback next**](https://github.com/strongloop/loopback-next) - (forks: 499) (stars: 2810) (watchers: 2810) - loopback makes it easy to build modern api applications that require complex integrations.
*   [**light 4j**](https://github.com/networknt/light-4j) - (forks: 468) (stars: 2789) (watchers: 2789) - a fast, lightweight and more productive microservices framework
*   [**full stack fastapi postgr**](https://github.com/tiangolo/full-stack-fastapi-postgresql) - (forks: 293) (stars: 1838) (watchers: 1838) - full stack, modern web application generator. using fastapi, postgresql as database, docker, automatic https and more.
*   [**flask restplus server exa**](https://github.com/frol/flask-restplus-server-example) - (forks: 298) (stars: 1133) (watchers: 1133) - real-life restful server example on flask-restplus
*   [**tsoa**](https://github.com/lukeautry/tsoa) - (forks: 238) (stars: 1045) (watchers: 1045) - build openapi-compliant rest apis using typescript and node
*   [**flask smorest**](https://github.com/marshmallow-code/flask-smorest) - (forks: 31) (stars: 232) (watchers: 232) - db agnostic framework to build auto-documented rest apis with flask and marshmallow
*   [**api generator**](https://github.com/SoliDry/api-generator) - (forks: 41) (stars: 218) (watchers: 218) - php-code generator for laravel framework, with complete support of json-api data format
*   [**oax**](https://github.com/darosh/oax) - (forks: 38) (stars: 216) (watchers: 216) - openapi specification explorer
*   [**php openapi**](https://github.com/cebe/php-openapi) - (forks: 27) (stars: 213) (watchers: 213) - read and write openapi yaml/json files and make the content accessible in php objects.
*   [**hapi openapi**](https://github.com/krakenjs/hapi-openapi) - (forks: 70) (stars: 185) (watchers: 185) - build design-driven apis with openapi (formerly swagger) 2.0 and hapi.

### Database

*   [**php crud api**](https://github.com/mevdschee/php-crud-api) - (forks: 801) (stars: 2428) (watchers: 2428) - single file php script that adds a rest api to a sql database
*   [**full stack fastapi postgr**](https://github.com/tiangolo/full-stack-fastapi-postgresql) - (forks: 293) (stars: 1838) (watchers: 1838) - full stack, modern web application generator. using fastapi, postgresql as database, docker, automatic https and more.

### Management

*   [**dreamfactory**](https://github.com/dreamfactorysoftware/dreamfactory) - (forks: 259) (stars: 1078) (watchers: 1078) - dreamfactory api management platform
*   [**fusio**](https://github.com/apioo/fusio) - (forks: 121) (stars: 843) (watchers: 843) - open source api management platform

### Testing

*   [**dredd**](https://github.com/apiaryio/dredd) - (forks: 262) (stars: 3371) (watchers: 3371) - language-agnostic http api testing tool

### Code

*   [**autorest**](https://github.com/Azure/autorest) - (forks: 545) (stars: 2861) (watchers: 2861) - openapi (f.k.a swagger) specification code generator. supports c#, powershell, go, java, node.js, typescript, python, ruby
*   [**restful react**](https://github.com/contiamo/restful-react) - (forks: 78) (stars: 1362) (watchers: 1362) - a consistent, declarative way of interacting with restful backends, featuring code-generation from swagger and openapi specs
*   [**gnostic**](https://github.com/googleapis/gnostic) - (forks: 76) (stars: 625) (watchers: 625) - a compiler for apis described by the openapi specification with plugins for code generation and other api support tasks.
*   [**spectral**](https://github.com/stoplightio/spectral) - (forks: 58) (stars: 565) (watchers: 565) - a flexible json/yaml linter for creating automated style guides, with baked in support for openapi v2 & v3.
*   [**oapi codegen**](https://github.com/deepmap/oapi-codegen) - (forks: 97) (stars: 440) (watchers: 440) - generate go client and server boilerplate from openapi 3 specifications
*   [**guardrail**](https://github.com/twilio/guardrail) - (forks: 83) (stars: 341) (watchers: 341) - principled code generation from openapi specifications
*   [**SwagGen**](https://github.com/yonaskolb/SwagGen) - (forks: 83) (stars: 302) (watchers: 302) - openapi/swagger 3.0 parser and swift code generator
*   [**pyswagger**](https://github.com/pyopenapi/pyswagger) - (forks: 62) (stars: 307) (watchers: 307) - an openapi (fka swagger) client & converter in python, which is type-safe, dynamic, spec-compliant.
*   [**SwagGen**](https://github.com/yonaskolb/SwagGen) - (forks: 83) (stars: 302) (watchers: 302) - openapi/swagger 3.0 parser and swift code generator
*   [**swagger to ts**](https://github.com/manifoldco/swagger-to-ts) - (forks: 38) (stars: 195) (watchers: 195) - generate typescript types from swagger openapi specs

### Command Line Interface

*   [**swagger cli**](https://github.com/APIDevTools/swagger-cli) - (forks: 35) (stars: 241) (watchers: 241) - swagger 2.0 and openapi 3.0 command-line tool
*   [**Pode**](https://github.com/Badgerati/Pode) - (forks: 29) (stars: 218) (watchers: 218) - pode is a cross-platform powershell web framework for creating rest apis, web sites, and tcp/smtp servers

### IDE

*   [**raml dotnet tools**](https://github.com/mulesoft-labs/raml-dotnet-tools) - (forks: 59) (stars: 170) (watchers: 170) - visual studio extension to work with raml and oas (openapi) specifications. you can consume rest apis, scaffold [asp.net](http://asp.net/) implementations and extract raml specifications from existing [asp.net](http://asp.net/) apps.

### Integration

*   [**DataFire**](https://github.com/DataFire/DataFire) - (forks: 62) (stars: 401) (watchers: 401) - a framework for building integrations and apis
*   [**sway**](https://github.com/apigee-127/sway) - (forks: 84) (stars: 171) (watchers: 171) - a library that simplifies openapi (fka swagger) integrations/tooling.

### Proxy

*   [**openapi cop**](https://github.com/EXXETA/openapi-cop) - (forks: 10) (stars: 325) (watchers: 325) - a proxy that validates responses and requests against an openapi document.

### Discovery

*   [**openapi directory**](https://github.com/APIs-guru/openapi-directory) - (forks: 346) (stars: 1936) (watchers: 1936) - 🌐 wikipedia for web apis. directory of rest api definitions in openapi 2.0/3.0 format
*   [**azure rest api specs**](https://github.com/Azure/azure-rest-api-specs) - (forks: 1991) (stars: 712) (watchers: 712) - the source for rest api specifications for microsoft azure.
*   [**optic**](https://github.com/opticdev/optic) - (forks: 15) (stars: 257) (watchers: 257) - apis that document & test themselves

OpenAPI definitely has more expanded stops along the API lifecycle being serviced here than Postman does. This is partially due to the momentum OpenAPI has from it's own evolution from Swagger, but it also has to do with the fact that you can import OpenAPI into Postman. For me, OpenAPI is how you define what the API can do, and Postman collections are how you do it. Next, I am going to take a look at Swagger, and I think my view of the landscape will be significantly increased in ways I didn't anticipate, and I will see other ways in which we still need to see investment in OpenAPI, as well as Postman collections.