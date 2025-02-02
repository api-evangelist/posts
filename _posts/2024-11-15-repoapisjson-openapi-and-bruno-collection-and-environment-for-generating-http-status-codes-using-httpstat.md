---
published: true
layout: post
title: >-
  Repo, APIs.json, OpenAPI, and Bruno Collection & Environment for Generating
  HTTP Status Codes Using HTTPStat
tags:
  - GitHub
  - Repositories
  - OpenAPI
  - Bruno Collection
  - Bruno Environment
  - README
image: https://kinlane-productions2.s3.us-east-1.amazonaws.com/httpstat-repo.png
---
I am finding my stride profiling new APIs for APIs.io and I am settling in on the minimum viable repository structure for any API. To demonstrate what I am talking about I took HTTPStat, a simple API for generating different HTTP Status Codes that you could use in testing, tutorials, or other use cases. The [repository for HTTPStat](https://github.com/api-evangelist/httpstat) is a generated output from my API Evangelist, with the following building blocks.

- **Repository** - A single repository for an API.
- **README** - A simple README explaining API.
- **APIs.jon** - A machine-readable index for API.
- **OpenAPI** - An OpenAPI describing surface area.
- **Bruno Collection** - Executable Bruno collections.
- **Bruno Environment** - The variables and secrets.

There are other artifacts and properties I include along with each API being profiled for APis.io, but the HTTPStat API provides a simple example of how it works. Next I will add additional requests to the [Bruno collection](https://bit.ly/4fpe6FO), and include links to stories and other use cases. The goal is to [provide a minimal viable repository](https://github.com/api-evangelist/httpstat) that can be forked and used by anyone, turning each API I profile into a teachable and usable moment.