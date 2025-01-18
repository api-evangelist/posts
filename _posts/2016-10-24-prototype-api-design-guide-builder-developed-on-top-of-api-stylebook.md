---
layout: post
title: Prototype API Design Guide Builder Developed On Top Of API Stylebook
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_23_at_10.59.54_pm.png
atomdate: 2016-10-24T18:00:00.000Z
tags:
  - Design
  - Prototype
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_23_at_10.59.54_pm.png)](https://api-evangelist-tools.github.io/api-design-guide/)

I was pretty happy when my friend Arnaud Lauret ([@arno\_di\_loreto](https://twitter.com/arno_di_loreto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)) developed [API Stylebook](http://apistylebook.com/). I want to see his work expand and grow into someday containing hundreds or thousands of API design guides. To help contribute to his work I took the [YAML core of the design topics](https://github.com/arno-di-loreto/apistylebook-api/blob/master/design/topics.yaml) he's aggregated and began developing [an API design guide builder that runs 100% on](https://api-evangelist-tools.github.io/api-design-guide/) [Github](https://api-evangelist-tools.github.io/api-design-guide/), allowing anyone to fork, and use to build their own API Stylebook on top of Arnaud's work.

Currently, I have two screens for API design guide builder:

*   [Editor](https://api-evangelist-tools.github.io/api-design-guide/edit/) - Allows for the editing of the YAML API Design Stylebook stored in the Github repository.
*   [View](https://api-evangelist-tools.github.io/api-design-guide/view/) - Allows you to view the API Design Stylebook stored in the Github repository.

I'm a big fan of this approach to developing little machine readable (YAML / JSON) micro tools that are simply HTML, CSS, and JavaScript, with a data core. In this scenario, Arnaud's design topics act's as the machine readable YAML core. I just developed the self-contained editor, and viewer, allowing anyone to fork and use to manage their own API design guide.

This is just a prototype. I am just getting started. I am looking to add autocomplete suggestions based on the other API design guides that Arnaud has aggregated in his API Stylebook. I am adding this, and some other features to the [Github issues for the project](https://github.com/api-evangelist-tools/api-design-guide/issues), if you have any feedback or suggestions feel free to submit an issue to the Github repository. 

My objective here is to allow anyone to quickly fork, and build their own corporate or project API design guide, built on top of the existing best practices out there. I envision a future where every company, organization, institution, and an agency has their own API design guide, building on the best approaches available. Arnaud can continue to aggregate and merge the best practices (using Github) out there, and API providers can keep forking, and building on top of the best practices of the APIs they look up to across the landscape (another feature I want to add).

I really like what Arnaud has done with the [API Stylebook](http://apistylebook.com/). It reflects my own building block approach across [my 70+ API research projects](http://apievangelist.com), where I'm looking distil down what is happening across each stop along the API life cycle. I will be forking the API Stylebook design topics, and API design guides they have indexed, and adding to my own [API design research](http://design.apievangelist.com). I am having fun building on top of his work and look forward to what other folks build on top of it as well.