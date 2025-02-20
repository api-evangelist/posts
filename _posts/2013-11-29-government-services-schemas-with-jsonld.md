---
layout: post
title: Government Services Schemas With JSON-LD
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-government.jpg
author:
  name: kinlane
tags:
  - Schema
  - Government
  - JSON
  - JSON-LD
  - Services
---
This fall while working in Washington D.C. I was introduced to the concept of[representing government services with JSON-LD](https://s3.amazonaws.com/kinlane-productions2/federal-government/government-services/RepresentingGovernmentServiceswithJSON-LD.pdf). Using the [civic services schema.org](http://www.w3.org/wiki/WebSchemas/CivicServices) proposal you can represent common government services that target indvidiuals and businesses, providing a standard that developers can use when presenting government services in websites and mobile applications.

I was working on a project to help publish services from the Department of Veterans Affairs, and I wanted to enable people who work at the VA, as well as other agencies to be able to generate and manage JSON-LD representations of their services in the easiest way possible. So I thought to myself, what is the number one way for people in government to manage data? Spreadsheets of course!

I decided to start with Google Docs, and generate a simple JavaScript tool to take a Google Spreadsheet template that was setup with the required fields for a government services schema. Next I wrote an import script using Tabletop.js that would grab the contents of the Google Spreadsheet template and using JavaScript to generate the JSON-LD.

This thanksgiving holiday I decided to add one more tool to my work with government services and JSON-LD, and build a form that anyone could fill out and generate their own government services JSON-LD. The result is a Bootstrap, JQuery form that you can fill out, then hit publish JSON and using JavaScript it generates the JSON-LD representation for you.

I started a [project to organize my work around government services](http://government.services.publicprivatesector.org/index.html) and published the [Google Spreadsheet to JSON-LD](http://government.services.publicprivatesector.org/google-doc.html "Google Spreadsheet to JSON-LD") and the [form to JSON-LD generators](http://government.services.publicprivatesector.org/form.html "form to JSON-LD generators"). Next I will be adding the ability to save generated files to the Github master repository, making the whole thing a formable, government JSON-LD generator and storage repo.

I'm enjoying developing forms that generate JSON lately. I built an [API Commons manifest generator](http://apicommons.org/manifest-generator.html) the other night, and using the same momentum I developed the government services JSON-LD generator. I couldn't think of a more worthy project to spend my time on over Thanksgiving. Hopefully government agencies of all shapes and sizes can more easily generate and publish machine readable lists of the valuable services they offer, so that Google, Yahoo, Bing and other web or mobile app developer can more easily and accurately represent these services in their apps.