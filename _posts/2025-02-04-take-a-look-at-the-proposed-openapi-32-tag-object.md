---
published: true
layout: post
title: Take a Look at the Proposed OpenAPI 3.2 Tag Object
tags:
  - OpenAPI
  - 3.2
  - Tags
  - Domains
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/america-immigration_dumping-ground-going-to-dowtown-los-angeles.jpg
---
The OpenAPI tagging object is one of the most under utilized objects of the API specification, and one that when used, is something that can have a profoundly positive effect on API experiences ranging from discovery to onboarding to documentation. Tagging as part of OpenAPI artifacts is often used to organize and group API paths as part of API documentation, helping break down large OpenAPI artifacts into more manageable chunks to help reduce the cognitive load. If you are actively using OpenAPI [tagging with 3.1](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#tag-object), we think you should get involved with [the proposal for 3.2](https://github.com/OAI/OpenAPI-Specification/blob/v3.2-dev/src/oas.md#tag-object), which adds three new properties:

- **name** (string) (REQUIRED) -  The name of the tag. Use this value in the tags array of an Operation.
- **summary** (string) - A short summary of the tag, used for display purposes.
- **description** (string)- A description for the tag. CommonMark syntax MAY be used for rich text representation.
- **externalDocs**	(External) - Documentation Object	Additional external documentation for this tag.
- **parent** (string) - The name of a tag that this tag is nested under. The named tag MUST exist in the API description, and circular references between parent and child tags MUST NOT be used.
- **kind** (string) A machine-readable string to categorize what sort of tag it is. Any string value can be used; common uses are nav for navigation, badge for visible badges, audience for APIs used by different groups. A registry of the most commonly used values is available.

The work on [3.2](https://github.com/OAI/OpenAPI-Specification/blob/v3.2-dev/src/oas.md#tag-object) is not finalized, but the discussion provides an opportunity for the community to step in and provide feedback. The new properties will help with more complex grouping of tags, and even begins to layer on more semantics with the kind of tags, which even comes with a registry. OpenAPI tagging provides a massive opportunity for teams to tackle large scope domain and experience challenges across API operations with simple tactical ways in which teams producing APIs can tag their APIs in motion. So, take a moment out of your day to review the latest OpenAPI proposal and provide some feedback—-you never know there might be other interesting things in there that are relevant to your work.


