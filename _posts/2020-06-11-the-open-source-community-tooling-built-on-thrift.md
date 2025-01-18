---
published: true
layout: post
title: The Open Source Community Tooling Built on Thrift
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/uncle-sam-containers-white.jpg
author:
  name: kinlane
tags:
  - Thrift
  - Tooling
---
Continuing my journey through all of the leading API specifications I pulled the top open source projects that I could find via via the GitHub API. Pulling the cream off the top of what is being built, allowing me to loosely organize them by stop along the API life cycle. Resulting in an interesting mix of open source tools in a variety of languages, and platforms.

**Framework**

*   [**finagle**](https://github.com/twitter/finagle) - (forks: 1352) (stars: 7638) (watchers: 7638) - a fault tolerant, protocol-agnostic rpc system
    
*   [**fbthrift**](https://github.com/facebook/fbthrift) - (forks: 475) (stars: 1931) (watchers: 1931) - facebook's branch of apache thrift, including a new c++ server.
    
*   [**zys**](https://github.com/qieangel2013/zys) - (forks: 278) (stars: 813) (watchers: 813) - high performance service framework based on yaf or swoole
    
*   [**spring cloud microservice**](https://github.com/zpng/spring-cloud-microservice-examples) - (forks: 236) (stars: 364) (watchers: 364) - spring-cloud-microservice-examples
    
*   [**hprose**](https://github.com/hprose/hprose) - (forks: 34) (stars: 326) (watchers: 326) - hprose is short for high performance remote object service engine. it's a serialize and rpc library, the serialize library of hprose is faster, smaller and more powerful than msgpack, the rpc library is faster, easier and more powerful than thrift.
    
*   [**workerman thrift**](https://github.com/walkor/workerman-thrift) - (forks: 115) (stars: 265) (watchers: 265) - thrift rpc for php based on workerman.
    
*   [**hibari**](https://github.com/hibari/hibari) - (forks: 24) (stars: 248) (watchers: 248) - hibari is a production-ready, distributed, ordered key-value, big data store. hibari uses chain replication for strong consistency, high-availability, and durability. hibari has excellent performance especially for read and large value operations.
    
*   [**gunicorn\_thrift**](https://github.com/Thriftpy/gunicorn_thrift) - (forks: 75) (stars: 190) (watchers: 190) - thrift app and worker for gunicorn!
    
*   [**elixir thrift**](https://github.com/pinterest/elixir-thrift) - (forks: 31) (stars: 168) (watchers: 168) - a pure elixir thrift implementation
    
*   [**luxun**](https://github.com/bulldog2011/luxun) - (forks: 35) (stars: 137) (watchers: 137) - a high-throughput, persistent, distributed, publish-subscribe messaging system based on memory mapped file and thrift rpc
    
*   [**thrift rpc server**](https://github.com/swoole/thrift-rpc-server) - (forks: 36) (stars: 115) (watchers: 115) - thrift rpc server based on swoole
    
*   [**dapeng soa**](https://github.com/dapeng-soa/dapeng-soa) - (forks: 30) (stars: 83) (watchers: 83) - a lightweight, high performance micro-service framework
    
*   [**disruptor\_thrift\_server**](https://github.com/xedin/disruptor_thrift_server) - (forks: 27) (stars: 66) (watchers: 66) - lmax disruptor backed thrift server implementation (half-sync/half-async).
    
*   [**quasar thrift**](https://github.com/pinterest/quasar-thrift) - (forks: 22) (stars: 41) (watchers: 41) - a thrift server that uses quasar's lightweight threads to handle connections.
    
*   [**sails**](https://github.com/huacnlee/sails) - (forks: 13) (stars: 72) (watchers: 72) - create a thrift server use like rails
    
*   [**Thrifty**](https://github.com/endink/Thrifty) - (forks: 19) (stars: 64) (watchers: 64) - thrifty include interface based remote call, tsl support, load balancing, and automatic service registration & discovery, thrift serializer, etc...
    
*   [**fast object pool**](https://github.com/DanielYWoo/fast-object-pool) - (forks: 38) (stars: 54) (watchers: 54) - a lightweight partitioned object pool, you can use it to pool expensive objects like jdbc connections, thrift clients etc.
    
*   [**nettythrift**](https://github.com/houkx/nettythrift) - (forks: 24) (stars: 54) (watchers: 54) - thrift on netty, support tcp/http/websocket at same port. support multiple protocols at same time. multil simple clients with connection pool.
    
*   [**atc**](https://github.com/adolphlxm/atc) - (forks: 8) (stars: 41) (watchers: 41) - atc is an open-source, development framework for the go programming language.(rest/grpc/queue/thrift/websocket)
    
*   [**ThriftS**](https://github.com/ZeemanHuang/ThriftS) - (forks: 10) (stars: 39) (watchers: 39) - thrifts is a micro rpc framework based on apache thrift.
    

**Code LIbraries**

*   [**armeria**](https://github.com/line/armeria) - (forks: 534) (stars: 2570) (watchers: 2570) - asynchronous rpc/rest library built on top of java 8, netty, http/2, thrift and grpc
    
*   [**swift**](https://github.com/facebookarchive/swift) - (forks: 307) (stars: 856) (watchers: 856) - an annotation-based java library for creating thrift serializable types and services.
    
*   [**go thrift**](https://github.com/samuel/go-thrift) - (forks: 98) (stars: 323) (watchers: 323) - a native thrift package for go
    
*   [**thriftpy2**](https://github.com/Thriftpy/thriftpy2) - (forks: 48) (stars: 336) (watchers: 336) - pure python approach of apache thrift.
    
*   [**riffed**](https://github.com/pinterest/riffed) - (forks: 30) (stars: 289) (watchers: 289) - provides idiomatic elixir bindings for apache thrift
    
*   [**osquery go**](https://github.com/kolide/osquery-go) - (forks: 41) (stars: 212) (watchers: 212) - go bindings for osquery
    
*   [**osquery python**](https://github.com/osquery/osquery-python) - (forks: 35) (stars: 214) (watchers: 214) - python bindings for osquery's thrift api
    
*   [**maven thrift plugin**](https://github.com/dtrott/maven-thrift-plugin) - (forks: 68) (stars: 112) (watchers: 112) - maven thrift plugin that executes the thrift code generator (base on protocol buffers plugin)
    
*   [**thrift4go**](https://github.com/pomack/thrift4go) - (forks: 24) (stars: 128) (watchers: 128) - apache thrift for the go language
    
*   [**sparsam**](https://github.com/airbnb/sparsam) - (forks: 14) (stars: 118) (watchers: 118) - fast thrift bindings for ruby
    
*   [**php thrift sql**](https://github.com/Automattic/php-thrift-sql) - (forks: 38) (stars: 99) (watchers: 99) - a php library for connecting to hive or impala over thrift
    
*   [**thrift typescript**](https://github.com/creditkarma/thrift-typescript) - (forks: 26) (stars: 91) (watchers: 91) - generate typescript from thrift idl files
    
*   [**thriftrw go**](https://github.com/thriftrw/thriftrw-go) - (forks: 34) (stars: 53) (watchers: 53) - a thrift encoding code generator and library for go
    
*   [**goh**](https://github.com/sdming/goh) - (forks: 22) (stars: 52) (watchers: 52) - golang client of hbase (via thrift)
    
*   [**stark**](https://github.com/evanphx/stark) - (forks: 11) (stars: 53) (watchers: 53) - optimized thrift bindings for ruby
    
*   [**Thrift Swift**](https://github.com/apocolipse/Thrift-Swift) - (forks: 24) (stars: 46) (watchers: 46) - apache thrift native swift library
    
*   [**thriftrw node**](https://github.com/thriftrw/thriftrw-node) - (forks: 23) (stars: 46) (watchers: 46) - a thrift binary encoding library using bufrw
    

**Code Generators**

*   [**thrift parser**](https://github.com/creditkarma/thrift-parser) - (forks: 13) (stars: 44) (watchers: 44) - a thrift parser built in typescript that generates a typescript ast that retains the thrift grammar
    
*   [**thrift2flow**](https://github.com/uber-web/thrift2flow) - (forks: 17) (stars: 38) (watchers: 38) - converts thrift specs into flow javascript type definitions
    

**Parsers**

*   [**scrooge**](https://github.com/twitter/scrooge) - (forks: 235) (stars: 710) (watchers: 710) - a thrift parser/generator
    
*   [**go**](https://github.com/thrift-iterator/go) - (forks: 19) (stars: 186) (watchers: 186) - decode/encode thrift message without idl
    

**Generators**

*   [**scrooge**](https://github.com/twitter/scrooge) - (forks: 235) (stars: 710) (watchers: 710) - a thrift parser/generator
    
*   [**go**](https://github.com/thrift-iterator/go) - (forks: 19) (stars: 186) (watchers: 186) - decode/encode thrift message without idl
    
*   [**drift**](https://github.com/airlift/drift) - (forks: 47) (stars: 148) (watchers: 148) - an annotation-based java library for creating thrift serializable types and services.
    
*   [**spring thrift starter**](https://github.com/aatarasoff/spring-thrift-starter) - (forks: 55) (stars: 139) (watchers: 139) - set of cool annotations that helps you building thrift applications with spring boot
    
*   [**thrift generator**](https://github.com/hongliuliao/thrift-generator) - (forks: 51) (stars: 77) (watchers: 77) - a tool to use java interface to generate thrift file
    

**Database**

*   [**pycassa**](https://github.com/pycassa/pycassa) - (forks: 141) (stars: 509) (watchers: 509) - python thrift driver for apache cassandra
    
*   [**kyuubi**](https://github.com/yaooqinn/kyuubi) - (forks: 74) (stars: 211) (watchers: 211) - kyuubi is an enhanced editon of apache spark's primordial thrift jdbc/odbc server.
    

**Benchmarking**

*   [**cpp serializers**](https://github.com/thekvs/cpp-serializers) - (forks: 82) (stars: 484) (watchers: 484) - benchmark comparing various data serialization libraries (thrift, protobuf etc.) for c++
    
*   [**gosercomp**](https://github.com/smallnest/gosercomp) - (forks: 35) (stars: 242) (watchers: 242) - :zap: golang serializer benchmark comparison
    

**Converters**

*   [**turbo**](https://github.com/vaporz/turbo) - (forks: 21) (stars: 239) (watchers: 239) - a lightweight microservice tool, turn your grpc|thrift apis into http apis!
    

**Failovers**

*   [**thrift\_client**](https://github.com/twitter/thrift_client) - (forks: 77) (stars: 194) (watchers: 194) - a thrift client wrapper that encapsulates some common failover behavior
    

**Introspection**

*   [**thrift tools**](https://github.com/pinterest/thrift-tools) - (forks: 36) (stars: 172) (watchers: 172) - thrift-tools is a library and a set of tools to introspect apache thrift traffic.
    

**Command Line Interface**

*   [**FCR**](https://github.com/facebookincubator/FCR) - (forks: 22) (stars: 129) (watchers: 129) - fbnet-command-runner: a thrift service to run commands on heterogeneous network devices with configurable parameters.
    

**Education**

*   [**thrift versioning doc**](https://github.com/bkayser/thrift-versioning-doc) - (forks: 13) (stars: 80) (watchers: 80) - best practices and examples for versioning thrift based services in a service oriented architecture
    
*   [**finagle java example**](https://github.com/jghoman/finagle-java-example) - (forks: 32) (stars: 69) (watchers: 69) - quick example of a java thrift server and client using finagle
    
*   [**ThriftTutorial**](https://github.com/strat0sphere/ThriftTutorial) - (forks: 34) (stars: 40) (watchers: 40) - a tutorial for installing and using apache thrift.
    
*   [**thrift examples**](https://github.com/yuxel/thrift-examples) - (forks: 18) (stars: 48) (watchers: 48) - thrift examples : php client & python server
    
*   [**golang thrift minimal exa**](https://github.com/glycerine/golang-thrift-minimal-example) - (forks: 17) (stars: 37) (watchers: 37) - the apache thrift starter tutorial for golang, as a standalone repo
    

**Mocking**

*   [**thrift mock**](https://github.com/didi/thrift-mock) - (forks: 19) (stars: 63) (watchers: 63) - a lightweight java test library for mocking thrift service
    

**Clusters**

*   [**jack**](https://github.com/XiaoMi/jack) - (forks: 12) (stars: 51) (watchers: 51) - jack is a cluster manager built on top of zookeeper and thrift.
    
*   [**Firefly**](https://github.com/meituan/Firefly) - (forks: 9) (stars: 51) (watchers: 51) - lightweight thrift client code generator and runtime library for android and java.
    

**Store**

*   [**spark parquet thrift exam**](https://github.com/adobe-research/spark-parquet-thrift-example) - (forks: 17) (stars: 44) (watchers: 44) - example spark project using parquet as a columnar store with thrift objects.
    
*   [**mapkeeper**](https://github.com/sears/mapkeeper) - (forks: 58) (stars: 12) (watchers: 12) - thrift based key-value store with various storage backends, including mysql, berkeley db, and leveldb.
    

**Plugins**

*   [**sbt scrooge**](https://github.com/twitter-archive/sbt-scrooge) - (forks: 19) (stars: 43) (watchers: 43) - an sbt plugin that adds a mixin for doing thrift code auto-generation during your compile phase
    
*   [**thrift gradle plugin**](https://github.com/jruyi/thrift-gradle-plugin) - (forks: 15) (stars: 40) (watchers: 40) - a gradle plugin for compiling thrift idl files using thrift compiler
    

**Integrations**

*   [**ThriftBundle**](https://github.com/overblog/ThriftBundle) - (forks: 16) (stars: 44) (watchers: 44) - integrate thrift into symfony project
    
*   [**erlasticsearch**](https://github.com/dieswaytoofast/erlasticsearch) - (forks: 17) (stars: 43) (watchers: 43) - erlang thrift interface to elastic\_search
    
*   [**ngx\_lua\_thrift**](https://github.com/gityf/ngx_lua_thrift) - (forks: 19) (stars: 38) (watchers: 38) - thrift lua for nginx.
    

**Syntax Highlighting**

*   [**thrift.vim**](https://github.com/solarnz/thrift.vim) - (forks: 9) (stars: 44) (watchers: 44) - syntax highlighting for thrift definition files.
    

**Gateways**

*   [**spring thrift api gateway**](https://github.com/aatarasoff/spring-thrift-api-gateway) - (forks: 14) (stars: 37) (watchers: 37) - gateway for apache thrift requests processing that is built on spring cloud stack
    

I am pretty new to Thrift. I'm a data guy, but never got much production experience in the big data wave of things. With that said, I think there is a wealth of interesting patterns to assess when it comes to the Thrift community. The overlap with Avro, Protocol Buffers, and relevance when iti comes to message-driven, and event-driven makes it something worth staying in tune with.