---
published: true
layout: post
title: Where Do I Begin With API Governance - Mapping the Operational API Landscape
tags:
  - Governance
  - Landscape
  - Operations
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/purple-circuit-statue-of-liberty-front-bright.jpg
---
API governance begins with [mapping the API landscape](https://apievangelist.com/2025/01/07/where-do-i-begin-with-api-governance-mapping-the-api-landscape/) for the enterprise, but then should also occur for the operational landscape surrounding those existing APIs. A map of the operations surrounding APIs should also be machine-readable using the [APIs.json format](https://apisjson.org/) as [recommended by the IETF as part of the draft spec for an api-catalog, and providing a well-known URI and link relation to help discovery of APIs](https://datatracker.ietf.org/doc/draft-ietf-httpapi-api-catalog/), which begins by indexing the following.

  - **Portals** - Grab the URLs to any portal or wiki that is being used to support APIs.
  - **Documentation** - Grab the URLs to any HTML, PDF, or other documentation used.
  - **Artifacts** - Harvest any HAR, Log Files, Postman Collection, or other evidence.
  - **Code** - Harvest any SDK, library, snippet, or script available that uses any API.
  - **Gateways** - Provide URLs to dashboards, reports, and any API gateway implementation. 

There are many [other properties of API operations](https://properties.apievangelist.com/) that can be documented as part of the operational landscape, but this is a good place to start when understanding how APIs are being delivered and sustained. The operational API landscape map will inform and provide further evidence which can be used as part of the API landscape map. But, before we can begin thinking about the future of API operations in a centralized or federated manner we will need to [map out the human dimension](https://apievangelist.com/2025/01/07/where-do-i-begin-with-api-governance-mapping-api-people-landscape/) to better connect the dots.

<div id="process-banner" class="alert alert-danger" role="alert">
 This series of stories are intended to support ongoing private API discussions, if you'd like help aligning with your own API strategy just <a href="https://apievangelist.com/contact/">let us know.</a>
</div>