---
layout: post
title: >-
  APIMATIC Code-Generation-as-a-Service Has Built-In Support For API Commons
  Manifest
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/apimatic/apimatic-logo.png
author:
  name: kinlane
tags:
  - Support
  - Generation
  - Code
  - API Commons
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/apimatic/apimatic-logo.png)](https://apimatic.io/)

The API savvy folks over at [Apimatic](https://apimatic.io/) are at it again, pushing forward the conversation around generating of software development kits, using machine readable API formats, and this time the doorway to your SDK is via the [API Commons manifest](http://apicommons.org/format.html).

I'm going to go ahead and use their own description, as it sums it well, no augmentation needed. Using the code generation API, you can generate SDKs for your API directly from your Github repository. 

**Step 1:** Describe you API using some format. You may choose from Swagger, RAML, APIBlueprint, IODocs, and Google Discovery formats. Automatic code generation makes use of information in your API description to generate method and classes names. Please be as expressive as possible by not leaving out any optional fields as applicable e.g., not leaving out types and schemas for your parameters and fields.

**Step 2:** Define meta information about your API using API Commons manifest format. You can generate your API Commons manifest using the [API Commons Manifest generator.](http://apicommons.org/manifest-generator.html) Be sure to enter all relevant information. Upload the generated manifest as a new file in the root directory of your Github repo by the name "api-commons- manifest.json". Be sure to have the correct name and location of this file.

**Step 3:** Open/Create a markdown file (README.md is a good candidate). Add the following markdown syntax to render an image link.

\[!\[apimatic\]\[apimatic-{platform-name}-image\]\]\[apimatic-{platform- name}-url\]

\[apimatic-{platform-name}-url\]: https://apimatic.io/api/github/{account-name}/{repo-name}/{branch- name}?platform={platform-name}

\[apimatic-{platform-name}-image\]: https://apimatic.io/img/github/{platform-name}.svg

Replace the {platform-name} token with one of the following values: windows, android, ios  
Replace the {account-name} token with the name of your url-encoded Github account name  
Replace the {repo-name} token with the name of your url-encoded Github repository name  
Replace the {branch-name} token with the name of your url-encoded Github branch name where the API Commons manifest file is present. ï¿¼

To validate, open the following url after replacing tokens. This url should open the raw manifest file. https://raw.githubusercontent.com/{account-name}/{repo-name}/{branch- name}/api-commons-manifest.json

You can see an example [here](https://github.com/apimatic/videos). Commit changes and navigate to your Markdown file in your browser. You will see apimatic widgets (image links), which you can click to generate SDKs for your API. To see an example, [open this link to view the README.md](https://raw.githubusercontent.com/apimatic/videos/gh- pages/README.md) file in raw text form.

The Apimatic team is owning the conversation when it comes to generation of full fledge SDKs for your APIs. I always hear folks talk about the limitations of auto-generation of client side code, but the Apimatic team is pushing the conversation forward with their persistent approach.