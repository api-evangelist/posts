---
layout: post
title: If You Have An Online Product Catalog You Should Have An API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/datasheets_electronic_parts_components_search__octopart.png
atomdate: 2016-09-15T16:15:44.000Z
tags:
  - Product
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/datasheets_electronic_parts_components_search__octopart.png)](https://octopart.com/)

[Octopart is the products company that I regularly use as a reference for how product-focused companies should be doing APIs](https://octopart.com/). Octopart's is an electronic parts company who have a physical, product centered company which is easy for people to understand, that also happens to do APIs well. Octopart doesn't do APIs just because they are cool, they do APIs because it enables the purchasing of their products in other systems.

When you land on the Octopart website you are given a product catalog search, allowing humans to browse their virtual electronic parts warehouse, but as soon as you scroll below the fold you also see a link to their API. The Octopart API is nothing fancy, but it has all the essentials, including [a simple REST API for accessing /brands, /categories, /parts, and /sellers in their virtual electronic parts warehouse](https://octopart.com/api/home). 

You can tell Octopart API integrations often center around the spreadsheets, an Octoparts showcases with their bill of material (BOM) solution, as well as open source Microsoft Excel and Google Spreadsheet add-ons, but when you [browse their application gallery](https://octopart.com/api/app-gallery) you can find other types of integrations with their catalog as well. Their approach to doing APIs seems like it should be a default for any company with a wealth of products to sell in an online environment.

When browsing through the Octoparts API you don't feel like it is something that was launched as a momentary trendy idea, and it is something that gets just as much emphasis as the HTML edition of the product catalog. The API is keeping spreadsheet editions of the catalog in sync, as well as providing sync capabilities for their BOM-driven order workflow. In my opinion, it has all the characteristics a commerce API provider should possess in a modern digital business environment.

While evangelizing APIs I often find I have to help unwind some of the miseducation companies have received about APIs from vendors trying to sell them external solutions. I find that companies with online product catalogs often see an API as something separate from their website, a separate software solution they needed to buy, where in reality the API is just the wholesale version of the product catalog for use in other web properties, mobile applications, spreadsheets, and systems--something that should be present alongside the HTML edition of your product catalog, and not buried in some help or feature section.