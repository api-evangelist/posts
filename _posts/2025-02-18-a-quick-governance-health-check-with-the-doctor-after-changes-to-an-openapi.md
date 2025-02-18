---
published: true
layout: post
title: A Quick API Governance Health Check With the Doctor After Changes to an OpenAPI
tags:
  - OpenAPI
  - Editors
  - Doctor
  - Schema
  - Governance
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-old-building-fence.jpg
---
After making changes to any OpenAPI it helps to check in with [the Doctor](https://bit.ly/3UTwuOF) to make sure you haven’t broken anything. [After some work the other day the good Doctor gave this OpenAPI an A+ grade](https://apievangelist.com/2025/02/14/the-openapi-doctors-diagnosis-is-tough-but-worth-it/). The diagnosis had covered all of the recent addition of API paths, operations, schema, and examples, making sure the API contract had all of its summaries, descriptions, and other elements being governed.
<center><a href="https://bit.ly/3UTwuOF"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-doctor/doctor-check-pulse-1.png" style="width: 100%; margin: 10px;"></a></center>
After getting feedback from stakeholders the OpenAPI had been updated in multiple ways by multiple stakeholders in multiple different editors. Making it a good time to go back to the Doctor to see if any major issues had arisen that might move the work on this API in a bad direction, resulting in a much more reduced API governance score—while also providing the guidance needed to fix.
<center><a href="https://bit.ly/3UTwuOF"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-doctor/doctor-check-pulse-1.png" style="width: 100%; margin: 10px;"></a></center>
The Doctor had referenced a couple of places where required properties had not been removed by a team when changing the shape of schema being submitted as part of API requests. The two properties no longer exist so they needed to be removed, resulting in about 15 seconds of work thanks to the Doctor guiding things.
<center><a href="https://bit.ly/3UTwuOF"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-doctor/doctor-check-pulse-1.png" style="width: 100%; margin: 10px;"></a></center>
Ideally you are just working in the Doctor and these warnings, errors, and other info just show up as you make these changes, but until you get everyone on your team working in the Doctor, it makes sense to pop back in for a quick API governance checkup as work is done.Eventually you can get everyone working in the Doctor natively, and align everything with your IDE and Git workflows, but until then, quick checkups with the Doctor will help keep you healthy.
