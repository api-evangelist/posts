---
published: true
layout: post
title: The Open Source Community Tooling Built on JSON Schema
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stalin-time-old-remington-typewriter.jpg
author:
  name: kinlane
tags:
  - JSOn Schema
  - Tooling
---
I am picking up my research into the open source tooling that is built around the common API specifications, and after looking at Postman collections, OpenAPI, Swagger, GraphQL, and gRPC, I wanted to look at JSON Schema. OpenAPI, AsyncAPI, and others use JSON Schema, and the ways in which JSON is used applies acros sthe API lifecycle. Here is the cream off the top of the open source tooling that I found being built on top of JSON Schema--providing another interesting dimension of what is happening.

**Normalization**

*   [**normalizr**](https://github.com/paularmstrong/normalizr) - (forks: 774) (stars: 19032) (watchers: 19032) - normalizes nested json according to a schema

**Forms**

*   [**react jsonschema form**](https://github.com/rjsf-team/react-jsonschema-form) - (forks: 1365) (stars: 8497) (watchers: 8497) - a react component for building web forms from json schema.
*   [**angular schema form**](https://github.com/json-schema-form/angular-schema-form) - (forks: 662) (stars: 2422) (watchers: 2422) - generate forms from a json schema, with angularjs!
*   [**jsonform**](https://github.com/jsonform/jsonform) - (forks: 456) (stars: 2025) (watchers: 2025) - build forms from json schema. easily template-able. compatible with bootstrap 3 out of the box.
*   [**alpaca**](https://github.com/gitana/alpaca) - (forks: 360) (stars: 1122) (watchers: 1122) - alpaca provides the easiest way to generate interactive html5 forms for web and mobile applications. it uses json schema and simple handlebars templates to generate great looking, dynamic user interfaces on top of twitter bootstrap, jquery ui, jquery mobile and html5.
*   [**ncform**](https://github.com/ncform/ncform) - (forks: 110) (stars: 853) (watchers: 853) - 🍻 ncform, a very nice configuration generation way to develop forms ( vue, json-schema, form, generator )
*   [**react form generator**](https://github.com/SteveVitali/react-form-generator) - (forks: 45) (stars: 607) (watchers: 607) - generate, validate, and parse react forms using mongoose-inspired json schemas
*   [**json forms**](https://github.com/brutusin/json-forms) - (forks: 154) (stars: 494) (watchers: 494) - json schema to html form generator, supporting dynamic subschemas (on the fly resolution). extensible and customizable library with zero dependencies. bootstrap add-ons provided
*   [**ngx schema form**](https://github.com/guillotinaweb/ngx-schema-form) - (forks: 153) (stars: 398) (watchers: 398) - html form generation based on json schema
*   [**angular2 json schema form**](https://github.com/dschnelldavis/angular2-json-schema-form) - (forks: 189) (stars: 282) (watchers: 282) - angular 2 json schema form builder
*   [**native**](https://github.com/formschema/native) - (forks: 51) (stars: 348) (watchers: 348) - generate a form using json schema and vue.js
*   [**react schema form**](https://github.com/networknt/react-schema-form) - (forks: 100) (stars: 303) (watchers: 303) - react form based on json schema for form generation and validation
*   [**react schema form**](https://github.com/networknt/react-schema-form) - (forks: 100) (stars: 303) (watchers: 303) - react form based on json schema for form generation and validation
*   [**vue json ui editor**](https://github.com/yourtion/vue-json-ui-editor) - (forks: 64) (stars: 305) (watchers: 305) - edit json in ui form with json schema and vue.js
*   [**shape form**](https://github.com/takeshape/shape-form) - (forks: 4) (stars: 295) (watchers: 295) - a form library that uses json schema and works with redux. originally a part of the takeshape react web client.
*   [**vuetify jsonschema form**](https://github.com/koumoul-dev/vuetify-jsonschema-form) - (forks: 66) (stars: 205) (watchers: 205) - generate forms for the vuetify ui library (vuejs) based on annotated json schemas.

**Validation**

*   [**ajv**](https://github.com/ajv-validator/ajv) - (forks: 565) (stars: 7479) (watchers: 7479) - the fastest json schema validator. supports draft-04/06/07
*   [**jsonschema**](https://github.com/Julian/jsonschema) - (forks: 415) (stars: 2808) (watchers: 2808) - an(other) implementation of json schema for python
*   [**json schema**](https://github.com/justinrainbow/json-schema) - (forks: 309) (stars: 2827) (watchers: 2827) - php implementation of json schema.
*   [**gojsonschema**](https://github.com/xeipuuv/gojsonschema) - (forks: 230) (stars: 1515) (watchers: 1515) - an implementation of json schema, draft v4 v6 & v7 - go language
*   [**json schema validator**](https://github.com/java-json-tools/json-schema-validator) - (forks: 356) (stars: 1269) (watchers: 1269) - a json schema validation implementation in pure java, which aims for correctness and performance, in that order
*   [**resume schema**](https://github.com/jsonresume/resume-schema) - (forks: 192) (stars: 1332) (watchers: 1332) - json-schema is used here to define and validate our proposed resume json
*   [**jsonschema**](https://github.com/tdegrunt/jsonschema) - (forks: 212) (stars: 1289) (watchers: 1289) - json schema validation
*   [**json schema**](https://github.com/ruby-json-schema/json-schema) - (forks: 209) (stars: 1179) (watchers: 1179) - ruby json schema validator
*   [**tv4**](https://github.com/geraintluff/tv4) - (forks: 183) (stars: 1101) (watchers: 1101) - tiny validator for json schema v4
*   [**NJsonSchema**](https://github.com/RicoSuter/NJsonSchema) - (forks: 300) (stars: 693) (watchers: 693) - json schema reader, generator and validator for .net
*   [**JSV**](https://github.com/garycourt/JSV) - (forks: 79) (stars: 611) (watchers: 611) - a javascript implementation of an extendable, fully compliant json schema validator.
*   [**json schema**](https://github.com/everit-org/json-schema) - (forks: 203) (stars: 518) (watchers: 518) - json schema validator for java, based on the org.json api
*   [**revalidator**](https://github.com/flatiron/revalidator) - (forks: 88) (stars: 569) (watchers: 569) - a cross-browser / node.js validator powered by json schema
*   [**schema inspector**](https://github.com/Atinux/schema-inspector) - (forks: 46) (stars: 469) (watchers: 469) - schema-inspector is an json api sanitisation and validation module.
*   [**JSON Schema Test Suite**](https://github.com/json-schema-org/JSON-Schema-Test-Suite) - (forks: 121) (stars: 356) (watchers: 356) - a language agnostic test suite for the json schema specifications
*   [**json**](https://github.com/webmozart/json) - (forks: 25) (stars: 349) (watchers: 349) - a robust json decoder/encoder with support for schema validation.
*   [**z schema**](https://github.com/zaggino/z-schema) - (forks: 91) (stars: 288) (watchers: 288) - json schema validator written in javascript for nodejs and browsers
*   [**json schema benchmark**](https://github.com/ebdrup/json-schema-benchmark) - (forks: 34) (stars: 314) (watchers: 314) - benchmarks for node.js json-schema validators
*   [**schematic**](https://github.com/interagent/schematic) - (forks: 33) (stars: 305) (watchers: 305) - a go point of view on json schema
*   [**djv**](https://github.com/korzio/djv) - (forks: 24) (stars: 264) (watchers: 264) - dynamic json schema validator - supports draft-04/06
*   [**postgres json schema**](https://github.com/gavinwahl/postgres-json-schema) - (forks: 20) (stars: 263) (watchers: 263) - json schema validation for postgresql
*   [**python fastjsonschema**](https://github.com/horejsek/python-fastjsonschema) - (forks: 39) (stars: 253) (watchers: 253) - fast json schema validator for python.
*   [**json schema**](https://github.com/opis/json-schema) - (forks: 21) (stars: 261) (watchers: 261) - json schema validator for php
*   [**pykwalify**](https://github.com/Grokzen/pykwalify) - (forks: 73) (stars: 234) (watchers: 234) - python yaml/json schema validation library
*   [**JSONSchema.swift**](https://github.com/kylef/JSONSchema.swift) - (forks: 43) (stars: 210) (watchers: 210) - json schema validator in swift
*   [**json schema validator**](https://github.com/networknt/json-schema-validator) - (forks: 90) (stars: 186) (watchers: 186) - a fast java json schema validator that supports draft v4, v6, v7 and v2019-09
*   [**jayschema**](https://github.com/natesilva/jayschema) - (forks: 21) (stars: 219) (watchers: 219) - \[unmaintained\] - a comprehensive json schema validator for node.js

**Editor**

*   [**json editor**](https://github.com/jdorn/json-editor) - (forks: 1084) (stars: 5388) (watchers: 5388) - json schema based editor
*   [**json schema editor visual**](https://github.com/YMFE/json-schema-editor-visual) - (forks: 84) (stars: 486) (watchers: 486) - a json-schema editor of high efficient and easy-to-use, base on react.
*   [**json schema**](https://github.com/jsonsystems/json-schema) - (forks: 39) (stars: 402) (watchers: 402) - [jsonschema.net](http://jsonschema.net/) public repository

**Code Generator**

*   [**jsonschema2pojo**](https://github.com/joelittlejohn/jsonschema2pojo) - (forks: 1379) (stars: 5078) (watchers: 5078) - generate java types from json or json schema and annotates those types for data-binding with jackson, gson, etc
*   [**quicktype**](https://github.com/quicktype/quicktype) - (forks: 417) (stars: 4718) (watchers: 4718) - generate types and converters from json, schema, and graphql
*   [**typescript json schema**](https://github.com/YousefED/typescript-json-schema) - (forks: 166) (stars: 1208) (watchers: 1208) - generate json-schema from your typescript sources
*   [**json schema to typescript**](https://github.com/bcherny/json-schema-to-typescript) - (forks: 150) (stars: 1241) (watchers: 1241) - compile jsonschema to typescript type declarations
*   [**python jsonschema objects**](https://github.com/cwacek/python-jsonschema-objects) - (forks: 74) (stars: 274) (watchers: 274) - automatic python binding generation from json schemas
*   [**Schema.NET**](https://github.com/RehanSaeed/Schema.NET) - (forks: 49) (stars: 275) (watchers: 275) - [schema.org](http://schema.org/) objects turned into strongly typed c# poco classes for use in .net. all classes can be serialized into json/json-ld and xml, typically used to represent structured data in the head section of html page.
*   [**dtsgenerator**](https://github.com/horiuchi/dtsgenerator) - (forks: 65) (stars: 255) (watchers: 255) - typescript d.ts file generate from json schema file
*   [**php json schema**](https://github.com/swaggest/php-json-schema) - (forks: 35) (stars: 249) (watchers: 249) - high definition php structures with json-schema based validation
*   [**generate**](https://github.com/a-h/generate) - (forks: 61) (stars: 206) (watchers: 206) - generates go (golang) structs from json schema.

**Fake Data**

*   [**mimesis**](https://github.com/lk-geimfari/mimesis) - (forks: 246) (stars: 2812) (watchers: 2812) - mimesis is a package for python, which helps generate big volumes of fake data for a variety of purposes in a variety of languages.
*   [**json schema faker**](https://github.com/json-schema-faker/json-schema-faker) - (forks: 241) (stars: 2269) (watchers: 2269) - json-schema + fake data generators

**Documentation**

*   [**prmd**](https://github.com/interagent/prmd) - (forks: 175) (stars: 2037) (watchers: 2037) - json schema tools and doc generation for http apis
*   [**jsonschema2md**](https://github.com/adobe/jsonschema2md) - (forks: 94) (stars: 186) (watchers: 186) - convert complex json schemas into markdown documentation

**Specifications**

*   [**json schema spec**](https://github.com/json-schema-org/json-schema-spec) - (forks: 171) (stars: 1847) (watchers: 1847) - the json schema i-d sources

**Registry**

*   [**schema registry**](https://github.com/confluentinc/schema-registry) - (forks: 736) (stars: 1234) (watchers: 1234) - confluent schema registry for kafka

**Education**

*   [**understanding json schema**](https://github.com/json-schema-org/understanding-json-schema) - (forks: 250) (stars: 1174) (watchers: 1174) - a website aiming to provide more accessible documentation for json schema.

**Discovery**

*   [**schemastore**](https://github.com/SchemaStore/schemastore) - (forks: 494) (stars: 865) (watchers: 865) - a collection of json schema files including full api

**Generator**

*   [**NJsonSchema**](https://github.com/RicoSuter/NJsonSchema) - (forks: 300) (stars: 693) (watchers: 693) - json schema reader, generator and validator for .net
*   [**schema org**](https://github.com/spatie/schema-org) - (forks: 86) (stars: 744) (watchers: 744) - a fluent builder [schema.org](http://schema.org/) types and ld+json generator
*   [**generate schema**](https://github.com/nijikokun/generate-schema) - (forks: 108) (stars: 705) (watchers: 705) - 🧞 convert json objects to mysql, json schema, mongoose, google bigquery, swagger, and more.
*   [**jsonschema**](https://github.com/alecthomas/jsonschema) - (forks: 93) (stars: 506) (watchers: 506) - generate json schemas from go types
*   [**schemapack**](https://github.com/phretaddin/schemapack) - (forks: 31) (stars: 406) (watchers: 406) - create a schema object to encode/decode your json in to a compact byte buffer with no overhead.
*   [**jackson module jsonSchema**](https://github.com/FasterXML/jackson-module-jsonSchema) - (forks: 122) (stars: 267) (watchers: 267) - module for generating json schema (v3) definitions from pojos
*   [**json\_schema\_generator**](https://github.com/perenecabuto/json_schema_generator) - (forks: 57) (stars: 215) (watchers: 215) - a simple json schema generator from any json source

**Parser**

*   [**NJsonSchema**](https://github.com/RicoSuter/NJsonSchema) - (forks: 300) (stars: 693) (watchers: 693) - json schema reader, generator and validator for .net

**Query**

*   [**Json Function**](https://github.com/aykutkardas/Json-Function) - (forks: 23) (stars: 603) (watchers: 603) - it allows you to use methods such as schema, innerjoin, where, limit, select, orderby on json data.

**Middleware**

*   [**committee**](https://github.com/interagent/committee) - (forks: 79) (stars: 568) (watchers: 568) - a collection of rack middleware to support json schema.

**Resolvers**

*   [**json schema ref parser**](https://github.com/APIDevTools/json-schema-ref-parser) - (forks: 113) (stars: 426) (watchers: 426) - parse, resolve, and dereference json schema $ref pointers in node and browsers

**Converters**

*   [**typson**](https://github.com/lbovet/typson) - (forks: 32) (stars: 289) (watchers: 289) - converts typescript to json-schema
*   [**enjoi**](https://github.com/tlivings/enjoi) - (forks: 52) (stars: 241) (watchers: 241) - converts a json schema to a joi schema.

**Universal**

*   [**piqi**](https://github.com/alavrik/piqi) - (forks: 37) (stars: 228) (watchers: 228) - piqi – universal schema language: json, xml, protocol buffers data validation and conversion

It is interesting to see how forms is one of the top areas of investment, then of course validation. I am very interested in the long tail of query languages, registries, documentation and others. I still have a few more of these top API specification listings to do, and then I'll move on to better understand the long tail of what is being built, as well as where the opportunity and challenges lie in moving forward the API conversation at scale using open source tooling.