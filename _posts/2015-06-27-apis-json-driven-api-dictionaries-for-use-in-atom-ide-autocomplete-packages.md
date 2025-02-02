---
published: true
layout: post
title: APIs.json Driven API Dictionaries For Use In Atom IDE Autocomplete Packages
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/atom-editor/atom-editor-logo.jpg
author:
  name: kinlane
tags:
  - IDE
  - APIs.json
  - APIs
  - Packages
  - APIs.jso
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/atom-editor/atom-editor-logo.jpg)](https://atom.io/)

I have been using the [Atom editor](https://atom.io/) when I work on local files on my workstation for some time now. With the latest version 1.0 release I took a fresh look at the architecture, and under the hood at the packages that make the platform so powerful, and extensible. One of the packages I was reverse engineering this weekend, is the [Atom API Autocomplete Package](https://github.com/atom/autocomplete-atom-api).

[The Atom API Autocomplete Package](https://github.com/atom/autocomplete-atom-api) is one of [several autocompete packages](https://atom.io/packages/search?q=autocomplete) that gives Atom some of that IDE feel when you are editing files. I like the feel of Atom autocomplete, and I really dig that this functionality is extensible via Atom packages. This experience got me thinking again about the IDEs role in API design and development, and how I'd like to see more API definition driven dictionaries, defined using [APIs.json](http://apisjson.org), driving IDE autocomplete features like the Atom editor has.

Like everything in my world, my concept of APIs.json driven dictionaries is a work in progress, but to kick things off [I launched a new API I'm calling my dictionary API](https://kin-lane.github.io/dictionary/), that helps me build and manage dictionaries that I can potentially use in an Atom autocomplete package. As I do with all of my work, I want to put my ideas out there early to get feedback, and stimulate other people's imaginations.

To provide the content for my dictionaries, I am using [Swagger](http://swagger.io), my primary API definition format. All I do is index any single, or collection of multiple APIs using [APIs.json](http://apisjson.org), and pass the URL to my new dictionary API, and I get back a JSON dictionary. 

This is my first draft of an potential dictionary output. I still have to get familiar with the Atom package design, and I've noticed different autocomplete packages handle their completions differently, but I at least wanted an automated way for importing Swagger definition(s), and create a single JSON dictionary that I could use as my Atom package completion store. My API will allow me to iterate on my JSON schema until I find one that works, while allowing me to generate dictionaries from existing APIs.json collections that I have defined.

Along with other APIs.json driven services that I am working on, like generating [Postman Collections](http://alpha.apievangelist.com/2015/04/07/including-postman-collections-in-my-apisjson-files/), [APIMATIC SDKs](http://alpha.apievangelist.com/2015/06/06/adding-apimatic-sdks-to-my-master-stack-and-including-in-each-apisjson/), and [API Science monitors](http://alpha.apievangelist.com/2015/06/06/adding-api-science-monitors-to-my-master-stack-and-including-in-each-apisjson/), I want to be able to easily generate API dictionaries that can be used throughout the API lifecycle to enrich any developer's IDE experience, and make sure they have the paths, parameters, and underlying data models for the APIs they need, right at their fingertips, in the environment they already use.

Imagine what API dictionaries could do for enterprise groups, in helping them standardize their API design practices, across groups, and an entire organization when they are working from common dictionaries, that are kept in sync using machine readable API definitions like [Swagger](http://swagger.io) and [API Blueprint](http://apiblueprint.org), bound into indexes using [APIs.json](http://apisjson.org).