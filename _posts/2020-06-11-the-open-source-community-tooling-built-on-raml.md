---
published: true
layout: post
title: The Open Source Community Tooling Built on RAML
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stalin-time-docks-big-cosco-ship.jpg
author:
  name: kinlane
tags:
  - RAML
  - Tooling
---
I have made my way through the open source community around [Postman](http://apievangelist.com/2020/06/08/the-open-source-community-tooling-built-on-postman/), [OpenAPI](http://apievangelist.com/2020/06/08/the-open-source-community-tooling-built-on-openapi/), [Swagger](http://apievangelist.com/2020/06/08/the-open-source-community-tooling-built-on-swagger/), [AsyncAPI](http://apievangelist.com/2020/06/11/the-open-source-community-tooling-built-on-asyncapi/), [JSON Schema](http://apievangelist.com/2020/06/11/the-open-source-community-tooling-built-on-json-schema/), [GraphQL](http://apievangelist.com/2020/06/09/the-open-source-community-tooling-built-on-graphql/), [gRPC](http://apievangelist.com/2020/06/09/the-open-source-community-tooling-built-on-grpc/), [Protocol Buffers](http://apievangelist.com/2020/06/11/the-open-source-community-tooling-built-on-protocol-buffers/), and [Avro](http://apievangelist.com/2020/06/11/the-open-source-community-tooling-built-on-avro/). Next up is RAML. Looking at the open source tooling built around the API specification, providing another look at how enterprise organizations are defining their APIs. Here is the current listing of open source tools built on to of RAML, loosely broken down by the areas of API operations that they serve.

**Specification**

*   [**raml spec**](https://github.com/raml-org/raml-spec) - (forks: 815) (stars: 3610) (watchers: 3610) - raml specification

**Code Generation**

*   [**autorest**](https://github.com/Azure/autorest) - (forks: 545) (stars: 2861) (watchers: 2861) - openapi (f.k.a swagger) specification code generator. supports c#, powershell, go, java, node.js, typescript, python, ruby
*   [**osprey**](https://github.com/mulesoft/osprey) - (forks: 71) (stars: 425) (watchers: 425) - generate node.js api middleware from a raml definition
*   [**guardrail**](https://github.com/twilio/guardrail) - (forks: 83) (stars: 341) (watchers: 341) - principled code generation from openapi specifications
*   [**raml client generator**](https://github.com/mulesoft-labs/raml-client-generator) - (forks: 25) (stars: 119) (watchers: 119) - template-driven generator of clients for apis described by a raml spec
*   [**raml\_ruby**](https://github.com/coub/raml_ruby) - (forks: 27) (stars: 96) (watchers: 96) - raml ruby
*   [**nsxramlclient**](https://github.com/vmware/nsxramlclient) - (forks: 28) (stars: 41) (watchers: 41) - a pseudo dynamic client in python that takes the raml file as input, and composes the api call needed
*   [**raml java client generato**](https://github.com/mulesoft-labs/raml-java-client-generator) - (forks: 31) (stars: 25) (watchers: 25) - raml java client generator
*   [**raml javascript generator**](https://github.com/mulesoft-labs/raml-javascript-generator) - (forks: 17) (stars: 28) (watchers: 28) - generate a javascript api client from raml

**Deployment**

*   [**light 4j**](https://github.com/networknt/light-4j) - (forks: 468) (stars: 2789) (watchers: 2789) - a fast, lightweight and more productive microservices framework
*   [**ramses**](https://github.com/ramses-tech/ramses) - (forks: 32) (stars: 305) (watchers: 305) - raml + elasticsearch / postgres / mongodb / your data store™ + pyramid = restful api
*   [**proteus**](https://github.com/noboomu/proteus) - (forks: 14) (stars: 163) (watchers: 163) - lean, mean, and incredibly fast jvm framework for web and microservice development.
*   [**spring rest ecommerce**](https://github.com/vatri/spring-rest-ecommerce) - (forks: 84) (stars: 119) (watchers: 119) - java spring boot - ecommerce rest api
*   [**go raml**](https://github.com/Jumpscale/go-raml) - (forks: 33) (stars: 125) (watchers: 125) - raml 1.0 implementation
*   [**gemini**](https://github.com/gemini-projects/gemini) - (forks: 17) (stars: 131) (watchers: 131) - model driven rest framework to automatically generate crud apis

**Documentation**

*   [**raml2html**](https://github.com/raml2html/raml2html) - (forks: 261) (stars: 1080) (watchers: 1080) - raml to html documentation generator.
*   [**php raml2html**](https://github.com/mikestowe/php-raml2html) - (forks: 22) (stars: 63) (watchers: 63) - a simple php library for publishing .raml files as html api documentation
*   [**ramlo**](https://github.com/PGSSoft/ramlo) - (forks: 16) (stars: 66) (watchers: 66) - documentation generator for raml 1.0
*   [**django rest raml**](https://github.com/tomchristie/django-rest-raml) - (forks: 5) (stars: 54) (watchers: 54) - raml documentation generator for django rest framework
*   [**raml2html**](https://github.com/raml-leanlabsio/raml2html) - (forks: 9) (stars: 34) (watchers: 34) - raml2html documentation generator

**Editors**

*   [**api designer**](https://github.com/mulesoft/api-designer) - (forks: 261) (stars: 997) (watchers: 997) - a web editor for creating and sharing raml api specifications
*   [**intellij swagger**](https://github.com/zalando/intellij-swagger) - (forks: 57) (stars: 1005) (watchers: 1005) - a plugin to help you easily edit swagger and openapi specification files inside intellij idea

**Consoles**

*   [**api console**](https://github.com/mulesoft/api-console) - (forks: 228) (stars: 821) (watchers: 821) - an interactive rest console based on raml/oas files

**Converters**

*   [**api spec converter**](https://github.com/LucyBot-Inc/api-spec-converter) - (forks: 91) (stars: 616) (watchers: 616) - convert api descriptions between popular formats such as openapi(fka swagger), raml, api blueprint, wadl, etc.
*   [**API Flow**](https://github.com/luckymarmot/API-Flow) - (forks: 19) (stars: 181) (watchers: 181) - universal data structure and converter for api formats (swagger, raml, paw, postman…)
*   [**api spec converter**](https://github.com/stoplightio/api-spec-converter) - (forks: 76) (stars: 108) (watchers: 108) - this package helps to convert between different api specifications (postman, swagger, raml, stoplight).
*   [**ramldt2jsonschema**](https://github.com/raml-org/ramldt2jsonschema) - (forks: 19) (stars: 41) (watchers: 41) - cli & library to convert a raml 1.0 data type to a json schema, and back

**Gateways**

*   [**aws apigateway importer**](https://github.com/amazon-archives/aws-apigateway-importer) - (forks: 142) (stars: 512) (watchers: 512) - tools to work with amazon api gateway, swagger, and raml

**Authentication**

*   [**js client oauth2**](https://github.com/mulesoft/js-client-oauth2) - (forks: 106) (stars: 390) (watchers: 390) - a javascript implementation of an oauth2 client, for inclusion in the javascript client generator for apis described with raml.

**Generators**

*   [**raml for jax rs**](https://github.com/mulesoft-labs/raml-for-jax-rs) - (forks: 189) (stars: 295) (watchers: 295) - this project is all about two way transformation of jax-rs-annotated java code to raml api description and back.
*   [**springmvc raml plugin**](https://github.com/phoenixnap/springmvc-raml-plugin) - (forks: 82) (stars: 134) (watchers: 134) - spring mvc - raml spec synchroniser plugin. a maven plugin designed to generate server & client code in spring from a raml api descriptor and conversely, a raml api document from the springmvc server implementation.
*   [**pyraml parser**](https://github.com/an2deg/pyraml-parser) - (forks: 32) (stars: 82) (watchers: 82) - pyraml-parser - python parser to raml, the restful api modeling language.
*   [**raml generator**](https://github.com/mulesoft-labs/raml-generator) - (forks: 13) (stars: 31) (watchers: 31) - generate files from a raml document and handlebars templates

**Testing**

*   [**abao**](https://github.com/cybertk/abao) - (forks: 65) (stars: 353) (watchers: 353) - rest api automated testing tool based on raml
*   [**hikaku**](https://github.com/codecentric/hikaku) - (forks: 9) (stars: 137) (watchers: 137) - a library that tests if the implementation of a rest-api meets its specification.
*   [**vigia**](https://github.com/nogates/vigia) - (forks: 9) (stars: 96) (watchers: 96) - adaptable api integration test suite that supports api blueprint and raml files
*   [**raml tester**](https://github.com/nidi3/raml-tester) - (forks: 16) (stars: 71) (watchers: 71) - test if a request/response matches a given raml definition

**Parsers**

*   [**ramlfications**](https://github.com/spotify/ramlfications) - (forks: 46) (stars: 234) (watchers: 234) - python parser for raml
*   [**raml php parser**](https://github.com/raml-org/raml-php-parser) - (forks: 78) (stars: 195) (watchers: 195) - community-maintained raml parser for php
*   [**raml**](https://github.com/go-raml/raml) - (forks: 38) (stars: 145) (watchers: 145) - an implementation of a raml parser for go. compliant with raml 0.8.

**Examples**

*   [**raml examples**](https://github.com/raml-org/raml-examples) - (forks: 174) (stars: 137) (watchers: 137) - this repository contains valid raml 1.0 examples. these examples are not only part of the spec, but also represent raml features in different scenarios.

**IDE**

*   [**raml dotnet tools**](https://github.com/mulesoft-labs/raml-dotnet-tools) - (forks: 59) (stars: 170) (watchers: 170) - visual studio extension to work with raml and oas (openapi) specifications. you can consume rest apis, scaffold [asp.net](http://asp.net/) implementations and extract raml specifications from existing [asp.net](http://asp.net/) apps.

**Mocks**

*   [**raml server**](https://github.com/farolfo/raml-server) - (forks: 33) (stars: 159) (watchers: 159) - run a mocked server just based on a raml api's definition .. zero coding
*   [**osprey mock service**](https://github.com/mulesoft-labs/osprey-mock-service) - (forks: 38) (stars: 105) (watchers: 105) - generate an api mock service from a raml definition using osprey
*   [**raml mocker**](https://github.com/repocho/raml-mocker) - (forks: 32) (stars: 93) (watchers: 93) - node module to create random responses to requests based on raml rest definition.

**Directories**

*   [**raml store**](https://github.com/brianmc/raml-store) - (forks: 19) (stars: 52) (watchers: 52) - this project provides an persistent store for raml files created using then embedded api designer

**Syntax Highlighter**

*   [**raml sublime plugin**](https://github.com/mulesoft-labs/raml-sublime-plugin) - (forks: 11) (stars: 49) (watchers: 49) - syntax highlighter for the restful api modeling language
*   [**raml mockup**](https://github.com/tacoss/raml-mockup) - (forks: 12) (stars: 48) (watchers: 48) - express-based mocking service for raml development
*   [**smockin**](https://github.com/mgtechsoftware/smockin) - (forks: 11) (stars: 46) (watchers: 46) - dynamic api mocking for web, mobile and microservice development

RAML is a pretty concise set of tools. For this research I was just looking at the top tier of RAML tooling, but resulted in a pretty solid stack of solutions. I am working to better understand who is building on RAML, but also what problems they are looking to solve. Since Postman supports RAML, as well as OpenAPI and Swagger, it makes sense to be understanding what is going on within this neck of the woods.