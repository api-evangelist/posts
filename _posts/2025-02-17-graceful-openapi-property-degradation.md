---
published: true
layout: post
title: Graceful OpenAPI Property Degradation
tags:
  - OpenAPI
  - Degradation
  - Changes
  - Versioning
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/yellow-journalism-ny-56th-foggy.jpeg
---
As the [3.2 version of the OpenAPI specification](https://github.com/OAI/OpenAPI-Specification/blob/v3.2-dev/src/oas.md#tag-object) picks up momentum (get your feedback in), it is a good time to evaluate one of the [industrial-grade API capabilities that the libopenapi specification possesses](https://bit.ly/4hAxBf2). When libopenapi was developed they wanted to ensure the library could grow alongside the OpenAPI standard as it evolved. This libopenapi super power helps reduce some common pain points for teams applying OpenAPI over time, helping abstract away some of the following for teams producing APIs.

- **Shared Model** - You get OpenAPI 3.1, 3.2, and on into the future available as a single model.
- **Flatten Time** - libopenapi flattens every version of OpenAPI across time into a single model.
- **Graceful Degradation** - Centering around using the latest version, but fills back whenever needed.

The road from Swagger 2.0 to OpenAPI 3.0 has been bumpy. Even the journey from OpenAPI 3.0 to OpenAPI 3.1 has been bumpy. While one can hope 3.2 and beyond will now be paved freeway, it makes even more sense to rely on libopenapi to abstract away the changes. This is just one of many industrial-grade capabilities worthy of shining a spotlight on when using libopenapi to help stabilize enterprise API governance.