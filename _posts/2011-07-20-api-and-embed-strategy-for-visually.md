---
layout: post
title: API and Embed Strategy for Visual.ly
url: http://apievangelist.com/2011/07/20/api-and-embed-strategy-for-visual-ly/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Strategy
---
kinlane-productions2.s3.amazonaws.com ![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/visually/visually-logo.png)It is hard for me to imagine why someone would launch a web application these days, without immediately launching an API, or at least having plans for an API shortly after release.

There always is some data that can be liberated, and make it available in a JSON format. Simple data APIs can easily drive widgets and other embeddable tools, providing viral marketing tools that drive awareness and SEO.

So when I am playing with new web applications, if there is no clear API strategy, it always gets me thinking about the possibilities. This happened when I was playing the new [infographic builder and marketplace Visual.ly](http://www.visual.ly "infographic builder and marketplace Visual.ly") today.

There is no evidekinlane-productions2.s3.amazonaws.com RSS feed of infographics, but no API. So I started thinking about a simple API and embeddable strategy for them.

![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/visually/visually-infographic.png)I would start with infographic and designer services providing JSON responses for searches on the infographic marketplace and graphic designers.

Visual.ly only provides tools for sharing infographics. You can't actually embed them, I believe this is how they plan to monetize. So you wouldn't have full copies of infographics via the API. You'd provide smaller representations of parts and pieces, or other relevant visualizations.

For every infographic, a designer would create a handful of small images, and the API could serve up these images and all the meta data for each entry in the marketplace.

This would open up possibilities for embeddable buttons, widgets and gadgets that anyone could copy and paste, and virally promoteinfographics without actually giving away everything.

The Visual.ly API wouldn't be complex to begin with, just allow basic access to infographics and designers, and provide an assortment of embeddable tools for users to syndicate content. A more advanced API, providing more complete access to infographics and the builder, can come later.