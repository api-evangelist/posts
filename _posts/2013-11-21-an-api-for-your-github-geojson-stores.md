---
layout: post
title: An API For Your Github GeoJSON Stores
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/git-spatial-2.png
author:
  name: kinlane
tags:
  - Github
  - JSON
  - Git
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/gitspatial/git-spatial-2.png)](http://gitspatial.com/)

I've been pushing the boundaries of open data and API deployment using Github. I have a project I've been evolving since August called [Simple API](http://simple-api.github.io/central/ "Simple API") and its sister implementation [api.ongithub.com](http://api.ongithub.com "api.ongithub.com"), which allows you to launch an API by forking common API definitions that are hosted on Github.

I was recently introduced to similar approach to geospatial API deployment using GeoJSON stored on Github called [GitSpatial](http://gitspatial.com/). Using the same approach, GitSpatial lets allows you to oAuth into the API deployment platform using your Github login, then spiders your repositories and let's you sync the repositories that contain GeoJSON.

Then using three URL parameters:

*   **user\_name** - Your GitHub user name
*   **repo\_name** - A GitHub repo name
*   **feature\_set\_name** - A file in your repo that contains GeoJSON

GitSpatial allows you to construct a geo spatial API resource URI: **_http://gitspatial.com/:user\_name/:repo\_name/:feature\_set\_name_**

Pretty cool stuff! I might be a little biased here, but I think this type of API deployment via Github blueprints, plus JSON data stores is going to be big. I've been experimenting with [API deployments from Github blueprints via Amazon Cloud Formations and Redhat OpenShift](http://apievangelist.com/2013/11/20/server-side-api-templates-on-aws-cloud-formation-and-openshift/ "API deployments from Github blueprints via Amazon Cloud Formations and Redhat OpenShift"), and it seems like the next evolution in cloud driven API deployment to me.

The best part to this approach is that your data, configurations and core elements are maintained within your world as simple, open formats like JSON--then you get to externally connect, using Github, to premium API services that augment and enhance your existing resources.

Lookout for an increase in the number of Github + API solutions in the coming months...