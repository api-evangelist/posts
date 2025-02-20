---
layout: post
title: Sharing 235K API Definitions With The English Language API Recipe Book
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-copyright.png
author:
  name: kinlane
tags:
  - Definitions
  - Definition
  - Sharing
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-copyright.png)](http://english-language-api-recipe-book.github.io/master/)

I needed a side project to reboot my mind after @APIStrat this last weekend, so I opened up my notebook and picked a project that I've been meaning to give some attention to, one that would help me clean my slate, and let me get back to my regular work levels. The project I picked is one that I came up with a little over a year ago, but recently had flushed out my vision further, as I hung out at my favorite watering whole drinking an IPA.

It took me several iterations before I landed on a name for this project, but my working title is [the English Language API Recipe Book](http://english-language-api-recipe-book.github.io/master/). I find myself in an awkward position these days, when it comes to the concept of API copyright, which is something I have taken a firm stance on with [my work around the Oracle v Google ava API copyright case](http://apievangelist.com/2015/08/22/what-we-can-do-to-make-a-difference-in-the-wake-of-oracle-v-google-api-copyright-case/), and the release of the [API licensing format API Commons](http://apicommons.org/), but is something, in the end, I just do not believe in.

You see, in my opinion, API definitions should NOT fall under copyright. Like recipes and menus, API definitions should not be open for anyone to use. To help me make my point, I wanted to craft [the English Language API Recipe Book](http://english-language-api-recipe-book.github.io/master/), publishing an open API definition for almost every word in the English dictionary. I found a reasonably complete list of every English word, and auto-generated an [Open API Definition Format (OADF)](http://apievangelist.com/2015/11/05/the-swagger-spec-is-reborn-as-open-api-definition-format-oadf-after-being-put-into-open-api-initiative-oai/) specification for each of the 235K+ words. 

For each API definition, I cover the base GET, POST, PUT, and DELETE verbs for each word, providing a basic query via a parameter, and return a name, and description as the basic underlying data model. I am already playing with other variations of database models, and have also generated another dimension for each word, by again iterating through each word, and adding it as a secondary level resource. I am also playing with other relationships, and ideas for expanding the dimensions of this recipe book, but wanted to get this first version out the door.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/english-language-dictionary-notes.png)](http://english-language-api-recipe-book.github.io/master/)

Overall, I just want to show how easy it is to programmatically generate API definitions, and add this English Language API Recipe Book to my already growing number of API definitions, [from popular APIs that I include in the API Stack](http://theapistack.com). Through this work, I wanted to emphasize, that no matter how much work you put into the naming, ordering, and design of your API definitions, they are not creative works that you should lock up and defend--your API definitions should be open, easily accessible, shared, and designed for reuse.

While I do not think any of the 235K+ API definitions should have copyright applied, I will putting all of these into public domain, using a Creative Commons license, as act two of this production. This is more theater than anything, but using API Commons, I will make sure every word in the English dictionary, crafted as a basic web API, is available for anyone to use, anytime, anywhere (as it should be, DUH). I recently stated in a keynote, after launching API Commons, that I was going to be the "Johnny Fucking Appleseed" of publishing openly licensed API definitions, out in front of slower moving corporations like Oracle--the English Language API Recipe Book is just the beginning of this.

Next up, I will be crafting a series of OADF API definitions for [Schema.org](http://schema.org) and use [APIs.json](http://apisjson.org) to bundles as a more meaningful collection. I will be using these data models to further automate the English Language API Recipe Book, and establish additional dimensions to this collection. [You can find the English Language API Recipe Book on Github](https://github.com/english-language-api-recipe-book). I have published as a Github organization, with a separate sharded repository for each letter of the alphabet, containing a separate OADF definition for each word in the dictionary, and indexed using APIs.json to index each letter, [as well as for the overall recipe book collection](http://english-language-api-recipe-book.github.io/master/apis.json)\--making it all machine readable by default.