---
layout: post
title: Providing YAML driven XML, JSON, and Atom using Jekyll And Github
image: null
atomdate: 2016-09-19T20:00:00.000Z
tags:
  - Github
  - Jekyll
  - YAML
  - JSON
  - XML
  - Git
---
The power of Jekyll on Github Pages as a data management solutions is not a very widely held concept. I'm always amazed at how technologists and programmers don't understand [Jekyll](http://jekyllrb.com/), let alone how it can be used as a data engine--maybe I can help a little by sharing my own usage. As I develop examples of this in action, I want to publish them as [Github repositories that anyone can fork and reverse engineer to use in their own work](http://xml.son.yaml.jekyll.apievangelist.com/).

While it was not love at first sight for me, I'm increasingly becoming a fan of using YAML for storing and managing a significant portion of the data I use across my business. Part of the reasons I'm using YAML is its readability. The other reasons stem from the augmented benefits of using Jekyll and Github Pages to store and syndicate machine readable YAML for use across my storytelling--when you put YAML data into the \_data folder for any Jekyll site, it opens up a new world of possibilities.

Any YAML data I put into the \_data folder immediately become objects I can work with across any HTML page within a Jekyll site, [using Liquid](https://shopify.github.io/liquid/). Where this really starts to impact my world is when I started dynamically generating other formats of data stored as YAML.

First up is JSON. Here is the file I am using to generate a JSON representation of my central YAML file stored in \_data folder.

[Which when I view in my browser, via the Jekyll driven, Github Pages published website I get a separate JSON representation](http://xml.son.yaml.jekyll.apievangelist.com/data/products.json):

Next up is XML. Here is the file I am using to generate a XML representation of my central YAML file stored in \_data folder.

[Which when I view in my browser, via the Jekyll driven, Github Pages published website I get a separate XML representation](http://xml.son.yaml.jekyll.apievangelist.com/data/products.xml):

Next up is Atom. Maybe I may want a feed of the latest products added to the catalog, so here is the file I am using to generate an Atom XML representation of my central YAML file stored in \_data folder.

[Which when I view in my browser, via the Jekyll driven, Github Pages published website, I get a separate Atom XML representation](http://xml.son.yaml.jekyll.apievangelist.com/data/atom.xml):

From a single YAML file, I just generated a JSON, XML, and Atom representation of the same list of products. [It is all stored in a Github repository, and published as a Jekyll website hosted using Github Pages](https://github.com/kinlane/xml-json-using-yaml-jekyll). This particular Github repo is meant to just be a demonstration of what is possible using Jekyll, YAML, and Github Pages. I will use this work as a base in a variety of other projects, where I use these various formats to drive web and mobile applications, as well as visualizations and analytics used across my API storytelling.

There are a wealth of reasons why I conduct this type of work. First, it is work I will use in my own research and storytelling, which all operates using Github and Jekyll. Second, doing my work out in the open, using open source tools and definitions, published as Github repositories making my work forkable, and reusable by others. There is a learning curve involved with unpacking what is happening here, but I feel pretty strongly that these are reusable modules that anyone can put to use--not just developers.

I will publish other examples of this in action as I develop them. When I need the Liquid scripts to generate JSON, XML, or Atom feeds in any of my projects I will just visit this repo, and copy / paste. When I develop new ones I will generalize and publish here for everyone to use as well.