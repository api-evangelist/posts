---
layout: post
title: Getting Back To Work On My OpenAPI Toolbox
image: null
atomdate: 2017-03-02T23:00:00.000Z
tags:
  - My
  - OpenAPI
  - Open
  - Toolbox
---
I used to have a Github repository dedicated to Swagger tooling and implementations, but I took it down after Swagger was donated to the Linux Foundation. I've rebooted it as [my OpenAPI Toolbox](http://openapi.toolbox.apievangelist.com/), providing [a single Github repository for managing an active list of open source tooling built on top of the OpenAPI specification](https://github.com/kinlane/openapi-toolbox).

Here is a snapshot of my toolbox of [OpenAPI](https://www.openapis.org/)\-driven solutions, as it stands today. This site is a Jekyll-driven website running on Github, using Github Pages. The tools in this toolbox are driven by a YAML file in [the \_data folder for this repository](https://github.com/kinlane/openapi-toolbox/tree/master/_data), with the HTML pages driven using Liquid.

Here are the tools organized by type of implementation (something that is evolving quickly):

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-documentation-interactive.png)](http://openapi.toolbox.apievangelist.com/documentation/)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-general-gear.png)](http://openapi.toolbox.apievangelist.com/generators/)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-servers.png)](http://openapi.toolbox.apievangelist.com/servers/)

[**Documentation**](http://openapi.toolbox.apievangelist.com/documentation/)

[**Generators**](http://openapi.toolbox.apievangelist.com/generators/)

[**Servers**](http://openapi.toolbox.apievangelist.com/servers/)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-client.png)](http://openapi.toolbox.apievangelist.com/clients/)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-ide-api.png)](http://openapi.toolbox.apievangelist.com/editors/)

 

[**Clients**](http://openapi.toolbox.apievangelist.com/clients/)

[**Editors**](http://openapi.toolbox.apievangelist.com/editors/)

 

Here they are organized by programming language, providing another dimension to look at the tooling being developed on top of OpenAPI.

<!-- .devicon-python-plain { width: 6em; max-width: 6em; } .devicon-ruby-plain { width: 6em; max-width: 6em; } .devicon-php-plain { width: 10em; max-width: 10em; } .devicon-java-plain { width: 6em; max-width: 6em; } .devicon-javascript-plain { width: 6em; max-width: 6em; } .devicon-nodejs-plain { width: 6em; max-width: 6em; } -->

[](http://openapi.toolbox.apievangelist.com/python/)

[](http://openapi.toolbox.apievangelist.com/ruby/)

[](http://openapi.toolbox.apievangelist.com/php/)

[](http://openapi.toolbox.apievangelist.com/javascript/)

[](http://openapi.toolbox.apievangelist.com/java/)

[](http://openapi.toolbox.apievangelist.com/nodejs/)

This project is [forkable using the Github repository](https://github.com/kinlane/openapi-toolbox), and [accessible as JSON](/data/tools.json). If you have a tool you think should be added, or there is something that needs fixing, [you can submit an issue on the Github repository](https://github.com/kinlane/openapi-toolbox/issues), or submit a pull request. It is meant to be a community project, designed to be forkable, shareable, and machine-readable.

I've just started adding the tools I have in my database. I only have 37 so far, but will be adding more as I have time. Once I have it up to date, I will start thinking about other ways to slice and dice the tools, to better understand what is being built on the OpenAPI specification, what tools are being built on the upcoming 3.0 version, as well as working to identify where the gaps and opportunities are for developing tooling.