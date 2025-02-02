---
published: true
layout: post
title: The Open Source Community Tooling Built on Swagger
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/copper-circuit-working-waterfront-2.jpg
author:
  name: kinlane
tags:
  - Swagger
  - Tooling
---
I am finally finding time to pick up some old work quantifying the open source that has risen up around API specifications. I just pulled all the GitHub repos when you search for "[Postman](http://apievangelist.com/2020/06/08/the-open-source-community-tooling-built-on-postman/)" and "[OpenAPI](http://apievangelist.com/2020/06/08/the-open-source-community-tooling-built-on-openapi/)", and now I wanted to do "Swagger". I'm looking to evaluate the cream off the top of what is going on in each of these buckets, but also eventually evaluate the long tail of what is going on. I've been trying to understand the evolution of Swagger 2.0 to OpenAPI 3.0 from a tooling perspective for some time now--this is me getting a handle on what is happening. Here is the top repositories when you search for "Swagger" on GitHub, roughly broken down by the stops along the API lifecycle they are serving.

### Deployment

1.  [**fastapi**](https://github.com/tiangolo/fastapi) - (forks: 942) (stars: 14208) (watchers: 14208) - fastapi framework, high performance, easy to learn, fast to code, ready for production
2.  [**connexion**](https://github.com/zalando/connexion) - (forks: 542) (stars: 3150) (watchers: 3150) - swagger/openapi first framework for python on top of flask with automatic endpoint validation & oauth2 support
3.  [**surging**](https://github.com/fanliang11/surging) - (forks: 860) (stars: 2875) (watchers: 2875) - surging is a micro-service engine that provides a lightweight, high-performance, modular rpc request pipeline. the service engine supports http, tcp, ws, grpc, mqtt, udp, and dns protocols. it uses zookeeper and consul as a registry, and integrates it. hash, random, polling, fair polling as a load balancing algorithm, built-in service governance to ensure reliable rpc communication, the engine contains diagnostic, link tracking for protocol and middleware calls, and integration skywalking distributed apm
4.  [**light 4j**](https://github.com/networknt/light-4j) - (forks: 468) (stars: 2789) (watchers: 2789) - a fast, lightweight and more productive microservices framework
5.  [**loopback next**](https://github.com/strongloop/loopback-next) - (forks: 499) (stars: 2810) (watchers: 2810) - loopback makes it easy to build modern api applications that require complex integrations.
6.  [**swag**](https://github.com/swaggo/swag) - (forks: 386) (stars: 2668) (watchers: 2668) - automatically generate restful api documentation with swagger 2.0 for go.
7.  [**scalatra**](https://github.com/scalatra/scalatra) - (forks: 337) (stars: 2454) (watchers: 2454) - tiny scala high-performance, async web framework, inspired by sinatra
8.  [**full stack fastapi postgr**](https://github.com/tiangolo/full-stack-fastapi-postgresql) - (forks: 293) (stars: 1838) (watchers: 1838) - full stack, modern web application generator. using fastapi, postgresql as database, docker, automatic https and more.
9.  [**spring boot plus**](https://github.com/geekidea/spring-boot-plus) - (forks: 479) (stars: 1676) (watchers: 1676) - :fire: spring-boot-plus is a easy-to-use, high-speed, high-efficient, feature-rich, open source spring boot scaffolding. :rocket:
10.  [**core**](https://github.com/api-platform/core) - (forks: 518) (stars: 1559) (watchers: 1559) - the server component of api platform: hypermedia and graphql apis in minutes
11.  [**aspnetcore angular univer**](https://github.com/TrilonIO/aspnetcore-angular-universal) - (forks: 492) (stars: 1427) (watchers: 1427) - [asp.net](http://asp.net) core & angular universal advanced starter - pwa w/ server-side rendering for seo, bootstrap, i18n internationalization, typescript, unit testing, webapi rest setup, signalr, swagger docs, and more! by @trilonio
12.  [**faygo**](https://github.com/henrylee2cn/faygo) - (forks: 241) (stars: 1512) (watchers: 1512) - faygo is a fast and concise go web framework that can be used to develop high-performance web app(especially api) with fewer codes. just define a struct handler, faygo will automatically bind/verify the request parameters and generate the online api doc.
13.  [**bee**](https://github.com/beego/bee) - (forks: 759) (stars: 995) (watchers: 995) - bee is a tool for helping develop with beego app framework.
14.  [**L5 Swagger**](https://github.com/DarkaOnLine/L5-Swagger) - (forks: 233) (stars: 1223) (watchers: 1223) - swagger integration to laravel 5
15.  [**flask restplus server exa**](https://github.com/frol/flask-restplus-server-example) - (forks: 298) (stars: 1133) (watchers: 1133) - real-life restful server example on flask-restplus
16.  [**rest hapi**](https://github.com/JKHeadley/rest-hapi) - (forks: 123) (stars: 1026) (watchers: 1026) - 🚀 a restful api generator for node.js
17.  [**spring boot rest example**](https://github.com/khoubyari/spring-boot-rest-example) - (forks: 568) (stars: 476) (watchers: 476) - rest apis implemented using spring boot, in-memory database, embedded tomcat, swagger 2, jsonpath, hamcrest and mockmvc
18.  [**phpboot**](https://github.com/caoym/phpboot) - (forks: 137) (stars: 614) (watchers: 614) - :coffee: 🚀 tiny & fast php framework for building microservices/restful apis, with useful features: ioc, hook, orm, rpc, swagger, annotation, parameters binding, validation, etc.
19.  [**api platform**](https://github.com/api-platform/api-platform) - (forks: 669) (stars: 5853) (watchers: 5853) - rest and graphql framework to build modern api-driven projects (server-side and client-side)
20.  [**go swagger**](https://github.com/go-swagger/go-swagger) - (forks: 816) (stars: 5179) (watchers: 5179) - swagger 2.0 implementation for go
21.  [**goa**](https://github.com/goadesign/goa) - (forks: 433) (stars: 3828) (watchers: 3828) - design-based apis and microservices in go
22.  [**swagger node**](https://github.com/swagger-api/swagger-node) - (forks: 579) (stars: 3686) (watchers: 3686) - swagger module for node.js
23.  [**flask restx**](https://github.com/python-restx/flask-restx) - (forks: 63) (stars: 515) (watchers: 515) - fork of flask-restplus: fully featured framework for fast, easy and documented api development with flask
24.  [**swagger py codegen**](https://github.com/guokr/swagger-py-codegen) - (forks: 125) (stars: 454) (watchers: 454) - a python web framework generator supports flask, tornado, falcon, sanic
25.  [**cookiecutter flask restfu**](https://github.com/karec/cookiecutter-flask-restful) - (forks: 104) (stars: 418) (watchers: 418) - flask cookiecutter template for builing apis with flask-restful, including jwt auth, cli, tests, swagger, docker and more
26.  [**spring swagger2markup dem**](https://github.com/Swagger2Markup/spring-swagger2markup-demo) - (forks: 216) (stars: 343) (watchers: 343) - a demo project template using swagger2markup, spring boot, springfox and spring-restdocs
27.  [**awesome openapi3**](https://github.com/APIs-guru/awesome-openapi3) - (forks: 37) (stars: 398) (watchers: 398) - 😎 a list of awesome projects related to openapi 3.0.x, curated by the community

### Documentation

1.  [**redoc**](https://github.com/Redocly/redoc) - (forks: 1108) (stars: 9444) (watchers: 9444) - 📘 openapi/swagger-generated api reference documentation
2.  [**Swashbuckle.AspNetCore**](https://github.com/domaindrivendev/Swashbuckle.AspNetCore) - (forks: 783) (stars: 3186) (watchers: 3186) - swagger tools for documenting api's built on [asp.net](http://asp.net) core
3.  [**swagger2markup**](https://github.com/Swagger2Markup/swagger2markup) - (forks: 336) (stars: 2104) (watchers: 2104) - a swagger to asciidoc or markdown converter to simplify the generation of an up-to-date restful api documentation by combining documentation that’s been hand-written with auto-generated api documentation.
4.  [**swagger ui**](https://github.com/swagger-api/swagger-ui) - (forks: 1522) (stars: 0) (watchers: 2627) - swagger ui is a dependency-free collection of html, javascript, and css assets that dynamically generate beautiful documentation from a swagger-compliant api.
5.  [**swagger bootstrap ui**](https://github.com/xiaoymin/swagger-bootstrap-ui) - (forks: 361) (stars: 1788) (watchers: 1788) - swagger-bootstrap-ui is the swagger front-end ui implementation, the purpose is to replace the swagger default ui implementation swagger-ui, make the document more friendly....
6.  [**spectacle**](https://github.com/sourcey/spectacle) - (forks: 232) (stars: 1097) (watchers: 1097) - beautiful static documentation generator for openapi/swagger 2.0
7.  [**gin swagger**](https://github.com/swaggo/gin-swagger) - (forks: 93) (stars: 1078) (watchers: 1078) - gin middleware to automatically generate restful api documentation with swagger 2.0.
8.  [**bank**](https://github.com/pietrzakadrian/bank) - (forks: 201) (stars: 876) (watchers: 876) - full stack web application using reactjs (with hooks) + redux + redux-saga with nodejs (express+typeorm), restful api, mysql and swagger documentation
9.  [**swagger jsdoc**](https://github.com/Surnet/swagger-jsdoc) - (forks: 131) (stars: 831) (watchers: 831) - generates swagger doc based on jsdoc.
10.  [**widdershins**](https://github.com/Mermade/widdershins) - (forks: 208) (stars: 665) (watchers: 665) - openapi / swagger, asyncapi & semoasa definitions to slate / shins compatible markdown
11.  [**node typescript koa rest**](https://github.com/javieraviles/node-typescript-koa-rest) - (forks: 82) (stars: 571) (watchers: 571) - rest api boilerplate using nodejs and koa2, typescript. logging and jwt as middlewares. typeorm with class-validator, sql crud. docker included. swagger docs, actions ci and valuable readme
12.  [**shins**](https://github.com/Mermade/shins) - (forks: 316) (stars: 247) (watchers: 247) - shins is not slate - port of slate markdown renderer to node.js

### Gateway

1.  [**grpc gateway**](https://github.com/grpc-ecosystem/grpc-gateway) - (forks: 1120) (stars: 8514) (watchers: 8514) - grpc to json proxy generator following the grpc http spec
2.  [**MagicOnion**](https://github.com/Cysharp/MagicOnion) - (forks: 242) (stars: 1732) (watchers: 1732) - unified realtime/api engine for .net core and unity.
3.  [**aws apigateway importer**](https://github.com/amazon-archives/aws-apigateway-importer) - (forks: 142) (stars: 512) (watchers: 512) - tools to work with amazon api gateway, swagger, and raml

### Mock

1.  [**easy mock**](https://github.com/easy-mock/easy-mock) - (forks: 1118) (stars: 7764) (watchers: 7764) - a persistent service that generates mock data quickly and provids visualization view.
2.  [**connexion**](https://github.com/zalando/connexion) - (forks: 542) (stars: 3150) (watchers: 3150) - swagger/openapi first framework for python on top of flask with automatic endpoint validation & oauth2 support
3.  [**mockoon**](https://github.com/mockoon/mockoon) - (forks: 105) (stars: 1938) (watchers: 1938) - mockoon is the easiest and quickest way to run mock apis locally. no remote deployment, no account required, open source
4.  [**prism**](https://github.com/stoplightio/prism) - (forks: 105) (stars: 1188) (watchers: 1188) - turn any openapi2/3 and postman collection file into an api server with mocking, transformations and validations.
5.  [**swagger express middlewar**](https://github.com/APIDevTools/swagger-express-middleware) - (forks: 192) (stars: 495) (watchers: 495) - swagger 2.0 middlware and mocks for express.js

### Generator

1.  [**EquinoxProject**](https://github.com/EduardoPires/EquinoxProject) - (forks: 1096) (stars: 3760) (watchers: 3760) - full [asp.net](http://asp.net) core 3.1 application with ddd, cqrs and event sourcing concepts
2.  [**autorest**](https://github.com/Azure/autorest) - (forks: 545) (stars: 2861) (watchers: 2861) - openapi (f.k.a swagger) specification code generator. supports c#, powershell, go, java, node.js, typescript, python, ruby
3.  [**flasgger**](https://github.com/flasgger/flasgger) - (forks: 299) (stars: 2104) (watchers: 2104) - easy openapi specs and swagger ui for your flask api
4.  [**drf yasg**](https://github.com/axnsan12/drf-yasg) - (forks: 233) (stars: 1588) (watchers: 1588) - automated generation of real swagger/openapi 2.0 schemas from django rest framework code.
5.  [**swagger core**](https://github.com/swagger-api/swagger-core) - (forks: 837) (stars: 0) (watchers: 2501) - examples and server integrations for generating the swagger api specification, which enables easy access to your rest api
6.  [**grape swagger**](https://github.com/ruby-grape/grape-swagger) - (forks: 441) (stars: 970) (watchers: 970) - add oapi/swagger v2.0 compliant documentation to your grape api
7.  [**hapi swagger**](https://github.com/glennjones/hapi-swagger) - (forks: 366) (stars: 813) (watchers: 813) - a swagger interface for hapi
8.  [**rswag**](https://github.com/rswag/rswag) - (forks: 194) (stars: 709) (watchers: 709) - seamlessly adds a swagger to rails-based api's
9.  [**apispec**](https://github.com/marshmallow-code/apispec) - (forks: 117) (stars: 723) (watchers: 723) - a pluggable api specification generator. currently supports the openapi specification (f.k.a. the swagger specification)..
10.  [**swagger ui express**](https://github.com/scottie1984/swagger-ui-express) - (forks: 124) (stars: 594) (watchers: 594) - adds middleware to your express app to serve the swagger ui bound to your swagger document. this acts as living documentation for your api hosted from within your app.
11.  [**phoenix\_swagger**](https://github.com/xerions/phoenix_swagger) - (forks: 132) (stars: 483) (watchers: 483) - swagger integration to phoenix framework
12.  [**create openapi repo**](https://github.com/Redocly/create-openapi-repo) - (forks: 59) (stars: 419) (watchers: 419) - 🤖 generator for gh repo to help you manage the openapi definition lifecycle
13.  [**flask swagger**](https://github.com/gangverk/flask-swagger) - (forks: 81) (stars: 391) (watchers: 391) - a swagger 2.0 spec extractor for flask
14.  [**play swagger**](https://github.com/iheartradio/play-swagger) - (forks: 104) (stars: 353) (watchers: 353) - swagger spec generator for play framework

### Toolchains

1.  [**NSwag**](https://github.com/RicoSuter/NSwag) - (forks: 703) (stars: 3501) (watchers: 3501) - the swagger/openapi toolchain for .net, [asp.net](http://asp.net) core and typescript.
2.  [**api development tools**](https://github.com/yosriady/api-development-tools) - (forks: 298) (stars: 1979) (watchers: 1979) - :books: a collection of useful resources for building restful http+json apis.

### Testing

1.  [**dredd**](https://github.com/apiaryio/dredd) - (forks: 262) (stars: 3371) (watchers: 3371) - language-agnostic http api testing tool
2.  [**flagr**](https://github.com/checkr/flagr) - (forks: 106) (stars: 1121) (watchers: 1121) - flagr is a feature flagging, a/b testing and dynamic configuration microservice
3.  [**schemathesis**](https://github.com/kiwicom/schemathesis) - (forks: 34) (stars: 412) (watchers: 412) - a tool that generates and runs test cases for open api / swagger based apps

### Database

1.  [**php crud api**](https://github.com/mevdschee/php-crud-api) - (forks: 801) (stars: 2428) (watchers: 2428) - single file php script that adds a rest api to a sql database

### Code

1.  [**azure sdk for net**](https://github.com/Azure/azure-sdk-for-net) - (forks: 1932) (stars: 1779) (watchers: 1779) - this repository is for active development of the azure sdk for .net. for consumers of the sdk we recommend visiting our public developer docs at [https://docs.microsoft.com/en-us/dotnet/azure/](https://docs.microsoft.com/en-us/dotnet/azure/) or our versioned developer docs at [https://azure.github.io/azure-sdk-for-net](https://azure.github.io/azure-sdk-for-net).
2.  [**restful react**](https://github.com/contiamo/restful-react) - (forks: 78) (stars: 1362) (watchers: 1362) - a consistent, declarative way of interacting with restful backends, featuring code-generation from swagger and openapi specs 🔥
3.  [**bravado**](https://github.com/Yelp/bravado) - (forks: 109) (stars: 509) (watchers: 509) - bravado is a python client library for swagger 2.0 services
4.  [**swagger codegen**](https://github.com/swagger-api/swagger-codegen) - (forks: 408) (stars: 0) (watchers: 718) - swagger-codegen contains a template-driven engine to generate client code in different languages by parsing your swagger resource declaration.
5.  [**oapi codegen**](https://github.com/deepmap/oapi-codegen) - (forks: 97) (stars: 440) (watchers: 440) - generate go client and server boilerplate from openapi 3 specifications
6.  [**guardrail**](https://github.com/twilio/guardrail) - (forks: 83) (stars: 341) (watchers: 341) - principled code generation from openapi specifications

### Discovery

1.  [**openapi directory**](https://github.com/APIs-guru/openapi-directory) - (forks: 346) (stars: 1936) (watchers: 1936) - 🌐 wikipedia for web apis. directory of rest api definitions in openapi 2.0/3.0 format
2.  [**azure rest api specs**](https://github.com/Azure/azure-rest-api-specs) - (forks: 1991) (stars: 712) (watchers: 712) - the source for rest api specifications for microsoft azure.

### GraphQL

1.  [**core**](https://github.com/api-platform/core) - (forks: 518) (stars: 1559) (watchers: 1559) - the server component of api platform: hypermedia and graphql apis in minutes

### Hypermedia

1.  [**core**](https://github.com/api-platform/core) - (forks: 518) (stars: 1559) (watchers: 1559) - the server component of api platform: hypermedia and graphql apis in minutes

### Editor

1.  [**intellij swagger**](https://github.com/zalando/intellij-swagger) - (forks: 57) (stars: 1005) (watchers: 1005) - a plugin to help you easily edit swagger and openapi specification files inside intellij idea
2.  [**openapi gui**](https://github.com/Mermade/openapi-gui) - (forks: 96) (stars: 733) (watchers: 733) - gui / visual editor for creating and editing openapi / swagger definitions
3.  [**apicurio studio**](https://github.com/Apicurio/apicurio-studio) - (forks: 224) (stars: 534) (watchers: 534) - open source api design

### Education

1.  [**spring cloud netflix exam**](https://github.com/yidongnan/spring-cloud-netflix-example) - (forks: 349) (stars: 736) (watchers: 736) - spring-cloud-netflix-example is an example for microservices system
2.  [**swagger samples**](https://github.com/swagger-api/swagger-samples) - (forks: 799) (stars: 468) (watchers: 468) - samples for the various swagger projects under swagger-api
3.  [**Angular SpringBoot REST J**](https://github.com/mrin9/Angular-SpringBoot-REST-JWT) - (forks: 400) (stars: 543) (watchers: 543) - springboot, angular and jwt security - example project based on northwind order processing
4.  [**awesome openapi3**](https://github.com/APIs-guru/awesome-openapi3) - (forks: 37) (stars: 398) (watchers: 398) - 😎 a list of awesome projects related to openapi 3.0.x, curated by the community

### Converters

1.  [**swagger to graphql**](https://github.com/yarax/swagger-to-graphql) - (forks: 131) (stars: 717) (watchers: 717) - swagger to graphql api adapter
2.  [**openapi to graphql**](https://github.com/IBM/openapi-to-graphql) - (forks: 80) (stars: 738) (watchers: 738) - translate apis described by openapi specifications (oas) into graphql
3.  [**generate schema**](https://github.com/nijikokun/generate-schema) - (forks: 108) (stars: 705) (watchers: 705) - 🧞 convert json objects to mysql, json schema, mongoose, google bigquery, swagger, and more.
4.  [**api spec converter**](https://github.com/LucyBot-Inc/api-spec-converter) - (forks: 91) (stars: 616) (watchers: 616) - convert api descriptions between popular formats such as openapi(fka swagger), raml, api blueprint, wadl, etc.
5.  [**kin openapi**](https://github.com/getkin/kin-openapi) - (forks: 111) (stars: 503) (watchers: 503) - openapi 3.0 implementation for go (parsing, converting, validation, and more)
6.  [**oas kit**](https://github.com/Mermade/oas-kit) - (forks: 84) (stars: 436) (watchers: 436) - convert swagger 2.0 definitions to openapi 3.0 and resolve/validate/lint

### Routers

1.  [**reitit**](https://github.com/metosin/reitit) - (forks: 111) (stars: 656) (watchers: 656) - a fast data-driven router for clojure/script

### Parsers

1.  [**swagger parser**](https://github.com/APIDevTools/swagger-parser) - (forks: 96) (stars: 604) (watchers: 604) - swagger 2.0 and openapi 3.0 parser/validator
2.  [**kin openapi**](https://github.com/getkin/kin-openapi) - (forks: 111) (stars: 503) (watchers: 503) - openapi 3.0 implementation for go (parsing, converting, validation, and more)
3.  [**oas kit**](https://github.com/Mermade/oas-kit) - (forks: 84) (stars: 436) (watchers: 436) - convert swagger 2.0 definitions to openapi 3.0 and resolve/validate/lint

### Validators

1.  [**kin openapi**](https://github.com/getkin/kin-openapi) - (forks: 111) (stars: 503) (watchers: 503) - openapi 3.0 implementation for go (parsing, converting, validation, and more)
2.  [**oas kit**](https://github.com/Mermade/oas-kit) - (forks: 84) (stars: 436) (watchers: 436) - convert swagger 2.0 definitions to openapi 3.0 and resolve/validate/lint
3.  [**zally**](https://github.com/zalando/zally) - (forks: 83) (stars: 422) (watchers: 422) - a minimalistic, simple-to-use api linter

### Rules

1.  [**spectral**](https://github.com/stoplightio/spectral) - (forks: 58) (stars: 565) (watchers: 565) - a flexible json/yaml linter for creating automated style guides, with baked in support for openapi v2 & v3.

### Database

1.  [**eliasdb**](https://github.com/krotik/eliasdb) - (forks: 29) (stars: 568) (watchers: 568) - eliasdb is a graph-based database.

### Themes

1.  [**swagger ui themes**](https://github.com/ostranme/swagger-ui-themes) - (forks: 139) (stars: 415) (watchers: 415) - :boom: a collection of css themes to spice up your swagger docs

### Analytics

1.  [**swagger stats**](https://github.com/slanatech/swagger-stats) - (forks: 75) (stars: 446) (watchers: 446) - api observability

It is tough to organize these because so many of them overlap. Deployment is definitely top heavy because there are tools in there that deploy APIs, but then publish documentation from a generated Swagger 2.0 document. Where others actually generate your API from a Swagger 2.0. There are many paradoxes in here like that, but I am going to keep organizing and refining my view of the landscape. Each of these tools are relevant, but I am very interested in getting a better lay of the landing when it comes to all of the specifications. Since Postman speaks collection, Swagger, and OpenAPI, all of these slices of the API matter to my perspective of what is going on.