---
published: true
layout: post
title: The Stops Along a Multi-Protocol API Lifecycle
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/bf-skinner-nyc-subway-train-125th.jpg
author:
  name: kinlane
tags:
  - Protocols
  - Patterns
  - Lifecycle
---
I spent the last week looking through open source tooling built around leading API specifications. If you are tuned into the RSS or Twitter feed from this blog you probably saw the exhaust from my research. People who don’t understand what API Evangelist is about often see these as listicle posts, and are confused by my erratic scheduling and release of these posts. If you understand that API Evangelist isn’t a tech blog in the normal sense, and that it is my professional API workbench, then you understand I am often times working towards some sort of research goal with each post. Well, this post is the next step in that research, taking me 12 separate research sprints to look through the API specification layer of our industry. 

I am very interested in the top open source tools developed on top of these API specifications. However, I am also very interested in understanding how each of these tools contribute value to different stops along the API life cycle. These are the essential building blocks I identify to help me understand what people on the ground within organizations are needing when it comes to delivering APIs. Resulting in a pretty interesting list of capabilities, which are ordered based upon the frequency they are mentioned across all to the tooling for each of these dimensions. The results of this research is all pulled from GitHub, so I recognize it is an incomplete snapshot, but I still see it as the most representative source we have from across the API industry of how people are investing across the API life cycle. 

**Postman **([See Open Source Tools](http://apievangelist.com/2020/06/08/the-open-source-community-tooling-built-on-postman/))****

Collections, Testing, Data, Repos, Run,  CRUD, CLI , Client, Database. Requests, Automation., Framework, Learning, Load, Generate, Integration, Files, Send, Authentication, Scripts, Documentation, Runner , Import, Export, Local , Operations,  Search, Routes, Users, Clone, Design, Examples, Chain, Parse, Template, Mock, Environments , Training, Converter, Browser, Network, Visual

**OpenAPI **([See Open Source Tools](http://apievangelist.com/2020/06/08/the-open-source-community-tooling-built-on-openapi/))****

Generate, CLI , Client, Documentation, Server, Schema. Data, Types, Repos, Codegen, Framework, Files, Definitions, Testing, Validation. Run. Template. Mock , Automatic, Parse, Graph, Package, Search, Gateway, Design, Collection, Load , Parser, Wrapper, Middleware, Models, Requests, Integration, Examples, Boilerplate, Cache, Starter, Process, Visual, Serverless, Database, Sync, Transform, Samples, Router, Local , Import , CRUD. Render, Controller, Converter, Markdown, Security 

**Swagger **([See Open Source Tools](http://apievangelist.com/2020/06/08/the-open-source-community-tooling-built-on-swagger/))****

Documentation, Generate, CLI , Server , Data, Client, Codegen, Framework, Template, Testing, Types, CRUD, Files, Integration , Schema, Repos, Store, Database, Starter, Boilerplate, Mock, Definitions, Run , Automatic, Validation, Security, Package, Gateway, Authentication, Load, Entity, Design, Parse, Graph, Middleware, Controller, Search, Microservices, Architect , Learn, Parser, Sync, Architecture, Local, Collection, Models, Versioning, Annotations, Routes, Examples. Track, Filter. Query, Converter

**JSON Schema **([See Open Source Tools](http://apievangelist.com/2020/06/11/the-open-source-community-tooling-built-on-json-schema/))****

Schema, Data, Generate, Validation, Files. Types, Transform. CLI, Parse, Models, Server, Database, Load, Transforming, Define, Package, Graph, Exploring, Query, Definitions, Meta, Run, Draft, Client, Dynamic, Repos, Collection, Framework, Template, Dates , Documentation, Design, Check, Active, Render, Time, Tables , Store, Converter, Process, Testing, Require, Search, Mock, Automatic, Import, Markdown, Filter, Extract, Examples, Record, Export, Tree, Visual , Event, Row, Match, Middleware, Scheme, Resources, Allows, Fields, Including

**GraphQL **([See Open Source Tools](http://apievangelist.com/2020/06/09/the-open-source-community-tooling-built-on-graphql/))****

Graph, Server, Data, CLI, Client, Schema, Type, Database, Query, Boilerplate, Starter, Learn, Framework, Load, Relay, Clone, Store, Repos, Run, Generate, Time, Authentication, Event, Sync, Fetch, Learning, Search, Template, Serverless, Design, Subscriptions, Parse, CMS, Testing, Mock, CRUD , Wrapper, Users, Files, Track, Playground, Local, Active, Hooks, Integration, Examples, Sources, Sequelize, Aging, Collection, Recipes, Action

**AsyncAPI **([See Open Source Tools](http://apievangelist.com/2020/06/11/the-open-source-community-tooling-built-on-asyncapi/))****

Generate. Template, Schema, Documentation, Parse, Definitions, Action, Examples , Proxy, Markdown, Documents, CLI, Server, Data, Load, Streams, Messages, Codegen, Versions, Filter, Wrapper, Visual, Types, Objects, Converts, Collection, Converter, Bindings, Templates, Repos, Process, Extensions, Playground, Files, Topic, Automatic, Browser, Client, Including, Tasks, Export, Setup, Store, Publishing, Annotate, Artifacts. Readable, Database, Local. Catalog, Memory, Workers, Automate, Consumers

**RAML **([See Open Source Tools](http://apievangelist.com/2020/06/11/the-open-source-community-tooling-built-on-raml/))****

Generate, CLI, Client, Parse, Documentation, Server, Data, Files, Schema, Mock, Design, Repos, Types, Framework, Converter Template, Load, Codegen, Run, Testing, Databas, Modeling, Validation, Store ,Examples, Automatic, Definitions, Security, Integration, Syntax, Local, Markdown, Learn, Package, Check, Export, Render , Process, CRUD, Starter, Search, Time, Collection, Experiment, Action, Requests, Transform, Mocks, Sources. Boilerplate ,Cache, Automate, Import . Converts, Middleware, Usage, Storage, Dates

**gRPC **([See Open Source Tools](http://apievangelist.com/2020/06/09/the-open-source-community-tooling-built-on-grpc/))****

Server, CLI , Client, Protobuf, Data, Framework, Gateway, Microservices, Distributed, Load, Files, Learn, Run, Examples, Generate, Store, Experiment, Proxy, Streaming, Graph, CRUD, Repos, Testing, Sync, Time, Search, Types, Package, Remote, Network, Check, Wrapper, Starter, Architect, Middleware, Process, Async, Architecture, Event, Storage, Servers, Authentication, Running, Performance, Training, Block, Calculator , Chain, Database, Balance, Mock, Collection, Definitions, Requests, Change, Integration, Discovery, Aging, Tracing, Boilerplate, Playground, Action 

**Protobuf **([See Open Source Tools](http://apievangelist.com/2020/06/11/the-open-source-community-tooling-built-on-protocol-buffers/))****

Data. GRPC, CLI , Server, Automatic, Export, Client, Files, Generate, Framework, Schema, Serialization, Messages, Network, Time, Store, Definitions, Run, Parse, Types, Learn, Objects, Storage, Repos, Database, Performance, Sync, Prototype, Package, Change, Embedded, Fork, Track, Distributed, Event, Wrapper, Examples, Binary, Process, Architecture, Architect, Graph, Cache, Common, Tree, Load, Streaming, Aging, Functional, Async, Copy, Remote, Testing, Tracking, Bindings, Documentation, Action

**Thrift **([See Open Source Tools](http://apievangelist.com/2020/06/11/the-open-source-community-tooling-built-on-thrift/))****

CLI, Client, Server, Framework, Data , Generate, Store, Distributed, Run, Parse , Transport, Files, Common, Proxy, Requests, GRPC, Protobuf, Package, Sync, Examples, Automatic, Async, Repos, Clone, Types , Database, Definitions, Track, Time, Export, Wrapper, Search, Aging, Objects, Integration, Row, Load, Binary, Patch, Servers, Compare, Remote, Starter, Performance, Storage, Bindings, Calculator, Local, Mirror, Learn, Messages, Tree, Block, Functions, Running, Fork, Branch, Mock, Query, Template, Schema, Architecture, Architect

**Avro ([See Open Source Tools](http://apievangelist.com/2020/06/11/the-open-source-community-tooling-built-on-avro/))**

Schema, Data, Files, Consume, Generate, Serialization, Consumer, CLI, Streaming, Messages, Record, Streams, Automatic, Export, Client, Topic, Repos, Process, Examples, Conversion, Store, Event, Framework, Storage, Query, Converter, Records, Load, Types, Learn, Server, Objects, Transform, Run, Database, Parse, Common, Search, Local, Topics, Time, Package, Coding, Protobuf, Converting, Binary, Testing, Tables, Integration. Deserialization, Wrapper, Pipeline, Change, Utilities, Performance, Analysis, Encoding, Samples, Cluster, Playground, Row, Logs, Functional

**API Blueprint **([See Open Source Tools](http://apievangelist.com/2020/06/11/the-open-source-community-tooling-built-on-api-blueprint/))****

Collection, Schema, Documentation, Generate, Files, Converts, Server, Descriptions, Data , Export , Controller, Persistence, Parse, Automatic, Wrapper, Maintained, Contracts, Exports, Models, Elements, Integration, Helper, Process, Types, Sources, Collections, Tree, Run, Extensions, Load, Coding, Dates, Transform, Inject, Markdown, Search, Graph, Playground, Attributes, Mock

Some of these words are more meaningful and precise than others, but their order tells a pretty compelling story. It tells me what the priorities are for organizations across the API life cycle, but it also shows me where the challenges and opportunities are when it comes to realizing a diverse API toolbox across an organization. Demonstrating how more mature organizations who have been on their API journey for a lot longer are investing in multiple protocols and patterns across their operations. Fully understanding the HTTP 1.1 is the dominant protocol, and request / response is the leading pattern, but that many more mature organizations are operating across multiple protocols, and are investing in more event-driven and real-time approaches to putting APIs to work. This open source blueprint represents the diverse API toolbox I began talking about a couple years back, coming into focus for me just a little bit more.

I have over 100K open source repositories referenced as part of this research. I’m working on a more intelligent and efficient tagging mechanism to apply across this corpus of data. As part of these last few sprints I hand curated some of what I see as the top tooling providers in each of these communities. Next I will consider the innovation that is occurring in the long tail of it all, but I am eager to identify what some of the most obvious opportunities are across this landscape. Concepts like management and testing for event-driven APIs, or multi-protocol orchestration using common API definitions that use OpenAPI and AsycAPI. Lots of work ahead. I just wanted to take a breather and dump this view of the landscape to help articulate what I am seeing unfold across teh API landscape.