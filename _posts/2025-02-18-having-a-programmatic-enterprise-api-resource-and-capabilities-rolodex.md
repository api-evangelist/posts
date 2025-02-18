---
published: true
layout: post
title: Having a Programmatic Enterprise API Resource and Capabilities Rolodex
tags:
  - OpenAPI
  - References
  - Modularity
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/america-immigration_dumping-ground-nyc-public-library.jpeg
---
Learning OpenAPI takes time and work. Producing robust and complete OpenAPI for an API takes time and work. Doing this across teams unlocks the power of having an enterprise rolodex of all your API resources and capabilities. One common approach to this is publishing OpenAPIs to a catalog or marketplace associated with your API gateway, but [another more programmatic approach would be to establish a programmatic rolodex using the libopenapi library](https://pb33f.io/libopenapi/rolodex/). libopenapi provides you with a data structure that holds all the references in an OpenAPI specification and dependent files, and knows how to look at them. up, providing you with.

- **Local references** - Looking for references within each OpenAPI.
- **File references** - Looking for references outside each OpenAPI.
- **Remote references** - Looking for references using a valid URL.

[Using libopenapi you can transform any OpenAPI into a rolodex, but with more planning an investment into how you use references across common API resources, capabilities, and components, it can become the rolodex for all of your enterprise digital resources](https://bit.ly/4hAxBf2). Right now you are defining all of your digital resources using OpenAPI across many locations, but once you also begin to organize those resources into capabilities and experiences defined as Arrazzo specification, and libopenapi expands the rolodex to include workflows—this will get interesting. Let’s hope the kids know what a rolodex is, because having one of all your digital resources, capabilities, and experiences will make all of our lives easier.

<center><a href="https://pb33f.io/libopenapi/rolodex/"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/libopenapi/rolodex-architecture.png" style="width: 100%; margin: 10px;"></a></center>