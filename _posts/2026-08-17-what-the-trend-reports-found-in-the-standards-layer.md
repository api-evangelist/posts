---
published: true
layout: post
title: 'What the Trend Reports Found in the Standards Layer'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-the-trend-reports-found-in-the-standards-layer.png
date: 2026-08-17
author: Kin Lane
tags:
  - Standards
  - Specifications
  - Kin Score
  - Trend Reports
  - Research
  - Governance
  - APIs
---
Fourteen of the API Evangelist trend reports now carry a written standards layer. Each one covers a different market and asks the same two questions: which specifications apply here, and how many companies in the cohort actually name one. I pulled all fourteen together this week and read them side by side. This is what is in them.

## The specifications that apply everywhere

Five specifications are cited in every one of the fourteen standards sections. The figures below are each report's own, measured against that market's upper band.

[OpenAPI](https://standards.apievangelist.com/store/openapi/) runs between 89 and 94 percent. Government is the high mark at 94 percent, which is the highest contract publication rate anywhere in the series, and its contract quality average of 60.2 is also the highest measured. Cybersecurity has spec presence missing from only 1 percent of its band. Artificial intelligence, developer tools and data analytics all sit at 89 to 91 percent.

The [Model Context Protocol](https://standards.apievangelist.com/store/model-context-protocol/) ranges from 3 to 36 percent. Artificial intelligence leads at 35.8 percent, which is 380 of 1,062 organizations running a server the research can verify. Data analytics is at 31 percent, the creator economy at 27 percent, developer tools at 20 percent, cybersecurity at 18 percent and government at 17 percent. The median across the eleven markets measured at that point was 12.8 percent.

[AsyncAPI](https://standards.apievangelist.com/store/asyncapi/) is named in every section and adopted nowhere near OpenAPI levels. Weather and geospatial documents the clearest gap at a 10 percent event surface rate. [OAuth 2.1](https://standards.apievangelist.com/store/oauth-21/) and [OpenID Connect](https://standards.apievangelist.com/store/openid-connect/) are the least contested part of the stack.

[Arazzo](https://standards.apievangelist.com/store/arazzo/) adoption is zero in every market measured. The catalog holds 405 `arazzo/` directories across artificial intelligence (116), developer tools (124), data analytics (92) and cybersecurity (73). None survive the provenance gate, which means every one of those files was written by API Evangelist research rather than by the company it describes.

## The domain standards with real adoption

Several markets have a specification that a meaningful share of the cohort names.

[SCIM](https://standards.apievangelist.com/store/scim/) is the clearest case. It defines a schema and a REST interface for provisioning users and groups between identity domains, it is widely implemented, and it is the reason identity is the strongest performing segment in the cybersecurity cohort.

[STAC](https://standards.apievangelist.com/store/stac/) has the highest concentration around any single interoperability standard in the series. Seven of the eight earth observation companies in the space cohort tag it.

EV charging in the mobility cohort named four. [OCPI](https://standards.apievangelist.com/store/ocpi/) is the most adopted at 9 companies, [OCPP](https://standards.apievangelist.com/store/ocpp/) at 8, with [OpenADR](https://standards.apievangelist.com/store/openadr/) and [IEEE 2030.5](https://standards.apievangelist.com/store/ieee-2030-5/) at 7 each. That area posts a 51.1 median Kin Score, 43.9 agent readiness and 100 percent contract publication, the best figures in that report.

Data analytics converged on storage formats. [Parquet](https://standards.apievangelist.com/store/parquet/), [Arrow](https://standards.apievangelist.com/store/arrow/), [Iceberg](https://standards.apievangelist.com/store/apache-iceberg/) and [Delta Lake](https://standards.apievangelist.com/store/delta-lake/) are where that industry agreed, and the report notes it agreed on how to store and move a table without agreeing on how to ask for one.

Gaming has [glTF](https://standards.apievangelist.com/store/gltf/), the Khronos royalty-free format for 3D scenes, and [OpenUSD](https://standards.apievangelist.com/store/openusd/), which originated at Pixar and now backs scene composition across film and simulation. Both are successful. [OpenXR](https://standards.apievangelist.com/store/openxr/) is the one API standard in that stack, a common interface between applications and XR runtimes.

The creator economy runs on [RSS](https://standards.apievangelist.com/store/rss/) and [Atom](https://standards.apievangelist.com/store/atom/), [oEmbed](https://standards.apievangelist.com/store/oembed/) and the [Open Graph Protocol](https://standards.apievangelist.com/store/open-graph/). The report calls these among the most widely implemented specifications ever written.

Geospatial produced interface standards rather than only formats. [WMS](https://standards.apievangelist.com/store/ogc-wms/) defines how map images are requested, [WFS](https://standards.apievangelist.com/store/ogc-wfs/) how vector features are queried, and the [OGC API](https://standards.apievangelist.com/store/ogc-api/) family is the OpenAPI-described successor to both. [GeoJSON](https://standards.apievangelist.com/store/geojson/) is the format that won.

Developer tools names [Spectral](https://standards.apievangelist.com/store/spectral/) most at 142 organizations, or 14.9 percent, followed by [GraphQL](https://standards.apievangelist.com/store/graphql/) at 13.2 percent and [gRPC](https://standards.apievangelist.com/store/grpc/) at 7.5 percent.

## The domain standards without it

The same reports record specifications that exist and were not adopted.

[GA4GH](https://standards.apievangelist.com/store/ga4gh/) publishes a family of genomics API specifications including htsget, refget, DRS, WES, TES and Beacon. Three organizations out of 999 in the biotechnology cohort name it, and not one names htsget or refget specifically.

[Standard Webhooks](https://standards.apievangelist.com/store/standard-webhooks/) is named by 2 organizations out of 951 in developer tools. Six name [CloudEvents](https://standards.apievangelist.com/store/cloudevents/). In the same cohort, [OpenTelemetry](https://standards.apievangelist.com/store/opentelemetry/) reaches 5.4 percent, SCIM 3.6 percent, [JSON Schema](https://standards.apievangelist.com/store/json-schema/) 3.0 percent, [OCI](https://standards.apievangelist.com/store/oci-runtime-spec/) 1.9 percent, [SPDX](https://standards.apievangelist.com/store/spdx/) 0.8 percent, [CycloneDX](https://standards.apievangelist.com/store/cyclonedx/) 0.4 percent, semantic versioning 0.3 percent and [SLSA](https://standards.apievangelist.com/store/slsa/) 0.1 percent.

[security.txt](https://standards.apievangelist.com/store/security-txt/), which is RFC 9116, has not been adopted in any verifiable form by 56 percent of the cybersecurity upper band. Well-known catalog adoption in that cohort is 6 percent.

[HR Open Standards](https://standards.apievangelist.com/store/hr-open-standards/) has published recruiting, payroll, benefits, time and employee record schemas since 1999. Its adoption in the HR cohort is close to invisible, while the same report shows hundreds of companies converging on the same nine entities with no specification describing them.

IoT holds eleven specifications that govern how a device communicates: [MQTT](https://standards.apievangelist.com/store/mqtt/), [CoAP](https://standards.apievangelist.com/store/coap/), [AMQP](https://standards.apievangelist.com/store/amqp/), [DDS](https://standards.apievangelist.com/store/dds/), [Modbus](https://standards.apievangelist.com/store/modbus/), [OPC UA](https://standards.apievangelist.com/store/opc-ua/), [Zigbee](https://standards.apievangelist.com/store/zigbee/), [Thread](https://standards.apievangelist.com/store/thread/), [Matter](https://standards.apievangelist.com/store/matter/), [LwM2M](https://standards.apievangelist.com/store/lwm2m/) and [LoRaWAN](https://standards.apievangelist.com/store/lorawan/). None govern how the platform managing that device is operated. Two specifications did target that layer. [oneM2M](https://standards.apievangelist.com/store/onem2m/) defines a common IoT service layer, and the W3C's Web of Things Thing Description is an interface description for a physical object. Both are essentially absent from the cohort. [Sparkplug](https://standards.apievangelist.com/store/sparkplug/), which specifies what is inside an MQTT message rather than only how to move it, found real adoption in industrial IoT.

Logistics is the largest area in the mobility cohort at 39 organizations and names no interoperability standard at all. Not [EDIFACT](https://standards.apievangelist.com/store/edifact/), which has carried freight messaging since 1987, and not [GS1](https://standards.apievangelist.com/store/gs1/), [EPCIS](https://standards.apievangelist.com/store/epcis/) or [DCSA](https://standards.apievangelist.com/store/dcsa/). In the same report, transit names [GTFS](https://standards.apievangelist.com/store/gtfs/) at 3 companies, [GBFS](https://standards.apievangelist.com/store/gbfs/) at 1 and [MDS](https://standards.apievangelist.com/store/mds/) at 1.

[ActivityPub](https://standards.apievangelist.com/store/activitypub/), [WebSub](https://standards.apievangelist.com/store/websub/), [Webmention](https://standards.apievangelist.com/store/webmention/) and [JSON Feed](https://standards.apievangelist.com/store/json-feed/) appear in the creator economy report as technically sound and adopted at the edges.

## Where a mandate is in force

Four markets carry a specification backed by a legal requirement, and the reports record what each produced.

HIPAA standardized US healthcare transactions in 1996 through [X12 EDI](https://standards.apievangelist.com/store/x12-edi/), and thirty years of it produced clearinghouses. The 21st Century Cures Act required every certified EHR to publish a [FHIR](https://standards.apievangelist.com/store/fhir/) endpoint. FHIR is also the most named standard in the biotechnology cohort at 46 companies, carried there by US regulation rather than by preference.

[CDISC](https://standards.apievangelist.com/store/cdisc/) is the most named domain standard in biotechnology after FHIR at 8 companies, with SDTM and Define-XML at 4 each and ODM at 3. SDTM and ADaM are required for FDA and PMDA submissions.

CSRD requires sustainability statements to be tagged in [XBRL](https://standards.apievangelist.com/store/xbrl/). The climate report notes XBRL is the one genuinely machine-readable artifact in a stack that otherwise holds the [GHG Protocol](https://standards.apievangelist.com/store/ghg-protocol/), ISSB IFRS S1 and S2, [GRI](https://standards.apievangelist.com/store/gri-standards/) and [ISO 14064](https://standards.apievangelist.com/store/iso-14064/), none of which specify how data moves between systems.

Australia's Consumer Data Right appears in the government report as a statutory data-sharing regime with a conformance programme behind it, and its energy arm scores 56.2 in that cohort.

## The counts behind all of this

The standards directory holds 610 entries. 159 of them are cited by at least one trend report. Eight industries carry a machine-readable standards list in the rubric: banking, energy, government, health, insurance, payments, securities and telecommunications. The remaining markets have a written standards layer with no machine-readable spine behind it yet.

Forty of the eighty trend reports have no standards backlink recorded, including the Canadian and UK banking and healthcare reports, which do discuss FDX and FHIR in their text. That is an indexing gap rather than a coverage gap, and it is on the list to close.

Every standard named above has a detail page in the [API Evangelist standards directory](https://standards.apievangelist.com/). The reports themselves are at [reports.apievangelist.com](https://reports.apievangelist.com/).
