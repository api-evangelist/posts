---
published: true
layout: post
title: Providing Source Metadata as Part of the API.json Index for Data APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_10_06_at_2.03.22_pm.png
author:
  name: kinlane
tags:
  - APIs.json
  - Metadata
  - Data
---
[The COVID-19 API resource center we launched back in April at Postman](https://covid-19-apis.postman.com/) was a success. It generated a lot of traffic and API usage, but also brought in about 75 API submissions from the community. One of the things we learned as part of this work is that more APIs doesn’t always mean better outcomes. More APIs means they have to be properly described and tagged, making them more discoverable, but you also need to make they are all “good” APIs. Which, once you begin to dive in, you realize that it becomes quite a can of worms, but luckily we have [the APIs.yaml specification](http://apisyaml.org/) to help us map things out in a way that allows to slowly evolve things from human to machine readable. When it came to the COVID-19 data APIs were were making available one key element of “good” was knowing a little more about provenance behind each of the APIs, helping us see the overlap between all of the APIs, as well as the unique outliers who were providing new and novel resources.

First, to make sure everyone is up to speed, [APIs.json](http://apisjson.org/) / [APIs.yaml](http://apisyaml.org/) is a simple machine readable index for defining collections of APIs, and mapping out API operations. In this scenario I am [using APIs.json as the core of an API toolbox](https://github.com/postman-toolboxes/covid-19/blob/master/_data/apis.yaml) that runs 100% on GitHub using Jekyll and Github Pages. In addition to indexing the documentation and Postman collections for each API, I am adding a provenance property to help define where the data behind each API originate, producing YAML that looks like this.

Right now the x-sources APIs.yaml property just provides an array of name and urls for each of the data sources behind each API. Mostly just providing a list of URL sources that can be displayed, but it is a property that could be evolved to provide more machine readable capabilities like grouped by domain, rating, public or private sector, and other things you might be considered with when discovering data APIs. Eventually I will add a way for me to easily filter by all of the APIs that pull from Johns Hopkins, but for right now I am just looking to list the sources on the website for each resource center.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_10_06_at_2.03.22_pm.png)

Initially I thought this would be a provenance type of property, but really it is just about the source of the data in this moment. I am trying to keep each property focused on solving a specific problem, and answering a meaningful set of questions, and I can always evolve the schema for a property or create new ones for addressing other issues. Right now I am just giving each API a bonus point if they have sources listed—even just one. I am finding that little meta details like this help out in search and discovery, but also are a great way to identify the API owners and curators who actually care about their APIs--which always demonstrates the potential for a better quality API in the end.

Using the APIs.yaml source property to rank COVID-19 and U.S. Election APIs is just the beginning of this renewed work around APIs.json / APIs.yaml. I am working on a number of other human and machine readable properties for a variety of APIs. Helping me map out different layers of the API universe from COVID-19 to banking, and back again. If you have any questions about [APIs.json](http://apisjson.org/) / [APIs.yaml](http://apisyaml.org/)head over to the website to learn more, and if [you have any questions head over to the GitHub repo for each of the repositories](https://github.com/postman-toolboxes) I have setup to power this API resource centers. Feel free to fork and play with any of the projects, or visit the home repo for my API toolbox prototypes to suggest new types of resource centers, or industry API catalogs