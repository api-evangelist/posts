---
published: true
layout: post
title: What are the Core Spectral API Governance Rule Functions
tags:
  - Spectral
  - Functions
  - Governance
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-docks-ships-cranes.jpg
---
When it comes to governing the technical details of APIs as part of the design, development, and pipeline build processes, the open-source client and rules format Spectral has led the conversation for the last five years. Spectral provides a YAML and JSON rules format that allows anyone to define rules that lint and validate specific patterns or anti-patterns in an APIs.json, OpenAPI, JSON Schema, or other schema format. Anyone can write custom functions for Spectral rules, but the specification comes with a common set of functions that cover about 75% of the most common API governance needs—-these nine default Spectral functions provide you and your team with a robust vocabulary for articulating what API governance means across design, develop, build, and even run-time.

- **alphabetical** - Enforce alphabetical content, for simple arrays, or for objects by passing a key.
- **casing** - Text must match a certain case, like camelCase or snake_case.
- **defined** - The value must be defined, meaning it must be anything but undefined. It's the opposite of what the undefined function does.
- **enumeration** - Does the field value exist in this set of possible values?
- **falsy** - The value should be false, "", 0, null or undefined. Basically, anything that would not trigger this: if (!!targetVal).
- **length** - Count the length of a string or an array, the number of properties in an object, or a numeric value, and define minimum and/or maximum values.
- **pattern** - Regular expressions!
- **schema** - Use JSON Schema (draft 4, 6, 7, 2019-09, or 2020-12) to treat the contents of the $given JSON Path as a JSON instance.
- **truthy** - The value should not be false, "", 0, null, or undefined. Basically, anything that would not trigger this: if (targetVal).

While learning the Spectral format, it can be tempting to want to write a custom JavaScript function to accomplish what you need, but pushing yourself to work within the constraints of the Spectral rules format, but also the schema in which you are linting and validating has some significant benefits. Learning the default Spectral functions, then sharing and strengthening that knowledge across teams is how you expand the group of people who not just provide feedback on API governance, but help shape it. Making the common functions that Spectral provides accessible to any team producing APIs, and not just central governance or platform teams will help increase the feedback loops surrounding API governance—-bringing more resources to bear for the API governance effort, while also helping distribute API governance across teams.

