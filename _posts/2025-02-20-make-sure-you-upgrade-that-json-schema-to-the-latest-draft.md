---
published: true
layout: post
title: Make Sure You Upgrade That JSON Schema to the Latest Draft
tags:
  - JSON Schema
  - Validation
  - Versioning
  - Tooling
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/green-circuit-gears-pipes-plumbing.jpg
---
Every enterprise organization in the world uses [JSON Schema](https://json-schema.org/), and most have multiple versions of the specification in use, with teams largely unaware of the implications. JSON Schema is a specification design for validating JSON data, and is in use within developers IDEs to the API gateway and across API testing tooling. Not having consistent versions of JSON Schema in use across enterprise API operations can result in a number of familiar, but also less familiar and inconsistent ways. To help you upgrade and validate that your JSON Schema is correctly validating your data you can use two separate open-source solutions.

- [**AlterSchema**](https://alterschema.sourcemeta.com/) - Tooling for upgrading any previous version of JSON Schema into the latest draft 2020-12.
- [**Hyperjump**](https://json-schema.hyperjump.io/) - Tooling to validate your JSON Schema, but then also allows you to validate JSON against it.

Both AlterSchema and Hyperjump are open-source and available on Github, and are two JSON Schema tools that you should be downloading and applying as part of your operations. Doing the work to standardize the version of JSON Schema that teams are using will help stabilize API operations throughout the API lifecycle, and will likely reduce friction and inconsistencies for team producing and testing APIs. Upgrading your JSON Schema to the latest draft is a small incremental change that you can make that will have massive impact on enterprise operations, helping stabilize how your teams deliver APIs from design to production, without any major changes, allowing you to tackle one schema at a time until you are completely up to date at scale across the enterprise. 

