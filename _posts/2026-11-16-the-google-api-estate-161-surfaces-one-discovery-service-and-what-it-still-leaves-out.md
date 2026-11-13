---
published: true
layout: post
title: 'The Google API Estate: 161 Surfaces, One Discovery Service, and What It Still Leaves Out'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-google-api-estate-161-surfaces-one-discovery-service-and-what-it-still-leaves-out.png
date: 2026-11-16
author: Kin Lane
tags:
  - Google
  - Google Cloud
  - API Estates
  - APIs.io
  - Kin Score
  - Agent Readiness
  - API Discovery
---
I have now written about [the Microsoft API estate](https://apievangelist.com/2026/11/05/the-microsoft-api-estate-169-surfaces-one-company-and-the-work-of-making-it-coherent/) and [the Amazon API estate](https://apievangelist.com/2026/11/12/the-amazon-api-estate-199-surfaces-one-source-of-truth-and-what-it-still-leaves-out/), and set [the two side by side](https://apievangelist.com/2026/11/13/amazon-and-microsoft-two-api-estates-two-ways-to-build-one/). Google is the third. I re-profiled every live member of the [Google API estate on APIs.io](https://apis.io/estates/google/), 161 provider profiles in all, and I made the same decision I made for Amazon: let the company's own machine-readable description of its APIs be the source of truth.

For Amazon that was Smithy. For Google it is the [API Discovery Service](https://developers.google.com/discovery).

## What an estate is

An estate on APIs.io is every provider profile that declares a company as its parent. Google's tree has three main branches: 70 members under [Google Cloud Platform](https://apis.io/providers/google-cloud-platform/), 74 directly under [Google](https://apis.io/providers/google/), and [Google Workspace](https://apis.io/providers/google-workspace/) with two of its own. Another 15 are acquisitions and adjacent surfaces like [Looker](https://apis.io/providers/looker/), [Mandiant](https://apis.io/providers/mandiant/), [Waze](https://apis.io/providers/waze/) and [DeepMind](https://apis.io/providers/deepmind/). Every profile below links to its own page.

The scores in this post are from this run. The estate page updates with the weekend APIs.io build, so until then it will show the older figures.

## Google has published a directory of its APIs for more than a decade

Google runs a public, machine-readable directory of its APIs. One call to the Discovery Service returns every API Google exposes this way, and each entry points to a Discovery document describing its resources, methods, parameters, schemas and OAuth scopes. Google's own client libraries are built from these documents.

Discovery is not OpenAPI, and Google does not publish OpenAPI for most of these APIs. So I wrote a converter that turns each Discovery document into OpenAPI 3.1, and generated every contract in the estate from it:

- **126 members** are now built from **231 Discovery documents**, with **11,620 operations** between them.
- **Every operation ID matches the Discovery method ID exactly.** I checked every one against the source document.
- **Each contract records where it came from.** Every file carries the Discovery URL and revision it was generated from.
- **A product is often several APIs.** [Google Analytics](https://apis.io/providers/google-analytics/) is the Admin API and the Data API. [YouTube](https://apis.io/providers/youtube/) is the Data, Analytics and Reporting APIs. [Google Maps](https://apis.io/providers/google-maps/) is six documents, including the Air Quality and Pollen APIs Google got when it bought BreezoMeter.
- **Scopes are real.** Discovery documents list the exact OAuth scope each method needs, so every contract now declares Google's actual scopes instead of a generic bearer token.

## The investment shows

Across the 160 members with scores, the mean [Kin Score](https://apis.io/rating/) moved from **44.9 to 60.3**, and the median is 63.7. **58 are exemplar** and 66 strong. 36 sit below strong.

The top of the estate:

- [Google Cloud Logging](https://apis.io/providers/google-cloud-logging/) (77.2), [Google Analytics](https://apis.io/providers/google-analytics/) (77.0), [Google Vault](https://apis.io/providers/google-vault/) (77.0), [Google Ads](https://apis.io/providers/google-ads/) (75.1), [Dataflow](https://apis.io/providers/google-cloud-dataflow/) (74.7), [Google Drive](https://apis.io/providers/google-drive/) (74.4), [Cloud Storage](https://apis.io/providers/gcp-cloud-storage/) (74.0), [Dialogflow](https://apis.io/providers/google-dialogflow/) (73.6) and [Google Maps](https://apis.io/providers/google-maps/) (72.0).
- The core building blocks: [Google Workspace](https://apis.io/providers/google-workspace/) 71.0, [Cloud Run](https://apis.io/providers/google-cloud-run/) 68.5, [Gmail](https://apis.io/providers/google-gmail/) 66.0, [Vertex AI](https://apis.io/providers/google-vertex-ai/) 63.7, [Firebase](https://apis.io/providers/google-firebase/) 63.2, [Kubernetes Engine](https://apis.io/providers/google-kubernetes-engine/) 62.5, [Gemini](https://apis.io/providers/google-gemini/) 61.8, [Compute Engine](https://apis.io/providers/google-cloud-compute-engine/) 61.2 and [BigQuery](https://apis.io/providers/google-bigquery/) 58.8.

The biggest movers were services whose contracts we simply had not had: [Recommendations AI](https://apis.io/providers/google-cloud-recommendations-ai/) +39.8, [Admin SDK](https://apis.io/providers/google-admin-sdk/) +38.1, [Cloud Scheduler](https://apis.io/providers/google-cloud-scheduler/) +37.5, [Talent Solution](https://apis.io/providers/google-cloud-talent-solution/) +33.5, [Transfer Service](https://apis.io/providers/google-cloud-transfer-service/) +32.8, [VMware Engine](https://apis.io/providers/google-cloud-vmware-engine/) +30.5 and [Artifact Registry](https://apis.io/providers/google-artifact-registry/) +30.4.

## Agent readiness moved, but it is the gap here too

Mean agent readiness is **34.4**, up from 26.2, and 31 members are at 40 or above. The leaders are [Google Cloud Platform](https://apis.io/providers/google-cloud-platform/) (51.1), [Cloud Logging](https://apis.io/providers/google-cloud-logging/) (50.5), the [Google](https://apis.io/providers/google/) parent (48.5), [Cloud Storage](https://apis.io/providers/gcp-cloud-storage/) (45.6), [Drive](https://apis.io/providers/google-drive/) (44.9) and [Gmail](https://apis.io/providers/google-gmail/) (43.7).

Discovery is very good at telling an agent how to call a method and which scope it needs. It says much less about errors, and nothing about which methods belong together, what a sensible workflow is, or what a call costs. Those are what keep the agent readiness numbers 26 points behind the Kin Score.

## Where the estate is not yet coherent

**Google retires products and the catalog keeps them.** I retired four members in this pass, each with Google's own shutdown notice: [Optimize](https://support.google.com/analytics/answer/12979939) (ended 2023), Business Messages (2024), Container Registry (2025, pointed at [Artifact Registry](https://apis.io/providers/google-artifact-registry/)) and the legacy AutoML products (2024, pointed at [Vertex AI](https://apis.io/providers/google-vertex-ai/)). Unlike AWS, Google does not keep one list of shutdowns, so each one has to be found separately.

**The same product was catalogued twice, many times.** I merged thirteen duplicates: Gmail and Google Gmail, Firebase and Google Firebase, Spreadsheets and Google Sheets, Nest and Google Nest, Meet, Blogger, Pub/Sub, Looker, TensorFlow, Cloud Natural Language, DoubleClick into [Google Marketing Platform](https://apis.io/providers/google-marketing-platform/), Data Studio into [Looker Studio](https://apis.io/providers/looker-studio/), and BreezoMeter into [Google Maps](https://apis.io/providers/google-maps/). Most of these come from Google's own renames. Data Studio became Looker Studio, DoubleClick became Marketing Platform, and the catalog had picked up both names over the years.

**A Discovery document per API does not map cleanly to a product.** [Cloud Armor](https://apis.io/providers/google-cloud-armor/), [Cloud CDN](https://apis.io/providers/google-cloud-cdn/), [Load Balancing](https://apis.io/providers/google-cloud-load-balancing/) and [Interconnect](https://apis.io/providers/google-cloud-interconnect/) are all part of the Compute Engine API. They are products people search for by name, but there is no document of their own to point at. AWS has the same problem with VPC and Aurora.

**Discovery is not all of Google.** 30 members have no Discovery document, and for each one I checked why. Some are not hosted APIs: [Android](https://apis.io/providers/android/), [Flutter](https://apis.io/providers/google-flutter/), [Health Connect](https://apis.io/providers/health-connect/) and [TensorFlow](https://apis.io/providers/tensorflow/) are platforms and SDKs. Some have their own REST APIs outside Discovery: [Kaggle](https://apis.io/providers/kaggle/), [Tenor](https://apis.io/providers/tenor/) and [AppSheet](https://apis.io/providers/google-appsheet/). And some have no public API at all: [Google Voice](https://apis.io/providers/google-voice/), [Google News](https://apis.io/providers/google-news/), [Google Sites](https://apis.io/providers/google-sites/), [NotebookLM](https://apis.io/providers/notebooklm/), [Waze](https://apis.io/providers/waze/) and the [Agent Development Kit](https://apis.io/providers/google-adk/). Those make up the bottom of the estate, and their scores are honest.

## One lesson from the run

After generating the contracts, our refine step split each one by tag and dropped operations it thought were duplicates. It decided that by path and method alone. On members with several APIs, two different APIs often share a path like `/v1/{name}`, so it quietly collapsed operations that belonged to different hosts. The scores did not flag it. The operation check against the Discovery documents did. I fixed it by giving each multi-API member's tags the API's own name, regenerated everything, and the counts now match Google exactly.

Every one of these estates has taught me the same thing: when a vendor gives you a source of truth, check every number against it, because your own tools will drift from it without telling you.

## Where I would invest next

1. **Publish OpenAPI alongside Discovery.** Google already has everything OpenAPI needs. Publishing it would put Google's contracts into every tool and agent framework that reads OpenAPI, without anyone converting them.
2. **Put lifecycle in the directory.** Discovery has a `preferred` flag but no shutdown date and no successor. One list of retirements, in the directory itself, would have saved most of the cleanup in this pass.
3. **Describe products, not just APIs.** Cloud Armor, CDN and Load Balancing need a way to be found as themselves.
4. **Add errors, workflows and cost.** The method descriptions are complete. Agents need to know what goes wrong, what goes together, and what it costs.

Google built its machine-readable directory before most companies had an API strategy. The contracts are there, and the estate is in better shape than our catalog said it was. What is left is the same layer AWS and Microsoft are missing too.

## Every member of the estate

Here is every live profile in the Google estate, with this run's Kin Score and agent readiness. Each name links to its page on APIs.io.

### Google Cloud (70)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [Google Cloud Logging](https://apis.io/providers/google-cloud-logging/) | 77.2 | 50.5 |
| [Google Cloud Dataflow](https://apis.io/providers/google-cloud-dataflow/) | 74.7 | 41.6 |
| [Google Cloud Storage](https://apis.io/providers/gcp-cloud-storage/) | 74.0 | 45.6 |
| [Google Dialogflow](https://apis.io/providers/google-dialogflow/) | 73.6 | 41.9 |
| [Google Cloud API Gateway](https://apis.io/providers/google-cloud-api-gateway/) | 71.7 | 29.6 |
| [Google Cloud KMS](https://apis.io/providers/google-cloud-kms/) | 71.6 | 35.0 |
| [Google Cloud Talent Solution](https://apis.io/providers/google-cloud-talent-solution/) | 71.1 | 36.1 |
| [Google Cloud Vision](https://apis.io/providers/google-cloud-vision/) | 71.0 | 34.0 |
| [Google Cloud Dataproc](https://apis.io/providers/google-cloud-dataproc/) | 70.6 | 36.5 |
| [Google Cloud Transfer Service](https://apis.io/providers/google-cloud-transfer-service/) | 70.6 | 36.1 |
| [Google Cloud Eventarc](https://apis.io/providers/google-cloud-eventarc/) | 70.5 | 39.7 |
| [Google Cloud Secret Manager](https://apis.io/providers/google-cloud-secret-manager/) | 70.5 | 34.0 |
| [Google Cloud DNS](https://apis.io/providers/google-cloud-dns/) | 70.1 | 35.2 |
| [Google Cloud Security Command Center](https://apis.io/providers/google-cloud-security-command-center/) | 70.0 | 37.4 |
| [Google Cloud Video Intelligence](https://apis.io/providers/google-cloud-video-intelligence/) | 69.7 | 35.2 |
| [Google Cloud Composer](https://apis.io/providers/google-cloud-composer/) | 69.6 | 36.1 |
| [Google Cloud Text-To-Speech](https://apis.io/providers/google-cloud-text-to-speech/) | 69.6 | 36.1 |
| [Google Cloud Datastream](https://apis.io/providers/google-cloud-datastream/) | 69.5 | 43.3 |
| [Google Cloud Recommendations AI](https://apis.io/providers/google-cloud-recommendations-ai/) | 69.5 | 35.9 |
| [Google Cloud Healthcare](https://apis.io/providers/google-cloud-healthcare/) | 69.4 | 40.6 |
| [Google Artifact Registry](https://apis.io/providers/google-artifact-registry/) | 69.3 | 38.0 |
| [Google Cloud Speech-To-Text](https://apis.io/providers/google-cloud-speech-to-text/) | 69.2 | 34.0 |
| [Google Cloud Functions](https://apis.io/providers/google-cloud-functions/) | 68.7 | 36.1 |
| [Google Cloud CDN](https://apis.io/providers/google-cloud-cdn/) | 68.6 | 36.3 |
| [Google Cloud Run](https://apis.io/providers/google-cloud-run/) | 68.5 | 39.3 |
| [Google Cloud Batch](https://apis.io/providers/google-cloud-batch/) | 68.4 | 36.9 |
| [Google Cloud Armor](https://apis.io/providers/google-cloud-armor/) | 68.3 | 35.3 |
| [Google Cloud Certificate Manager](https://apis.io/providers/google-cloud-certificate-manager/) | 68.1 | 38.9 |
| [Apigee](https://apis.io/providers/apigee/) | 68.0 | 37.2 |
| [Google Cloud Load Balancing](https://apis.io/providers/google-cloud-load-balancing/) | 68.0 | 34.9 |
| [Google Cloud Tasks](https://apis.io/providers/google-cloud-tasks/) | 67.8 | 39.3 |
| [Google Cloud Monitoring](https://apis.io/providers/google-cloud-monitoring/) | 67.7 | 38.0 |
| [Google Cloud Build](https://apis.io/providers/google-cloud-build/) | 67.3 | 39.7 |
| [Google Cloud Data Catalog](https://apis.io/providers/google-cloud-data-catalog/) | 67.3 | 39.4 |
| [Google Cloud VPC](https://apis.io/providers/google-cloud-vpc/) | 67.1 | 43.4 |
| [Google Cloud Scheduler](https://apis.io/providers/google-cloud-scheduler/) | 67.0 | 36.1 |
| [Google Cloud Natural Language](https://apis.io/providers/google-cloud-natural-language/) | 66.9 | 36.1 |
| [Google Cloud Observability](https://apis.io/providers/google-cloud-operations-suite/) | 66.9 | 36.7 |
| [Google Cloud Pub/Sub](https://apis.io/providers/google-cloud-pubsub/) | 66.9 | 38.4 |
| [Google Cloud SQL](https://apis.io/providers/google-cloud-sql/) | 66.9 | 37.2 |
| [Google Cloud Workflows](https://apis.io/providers/google-cloud-workflows/) | 66.8 | 36.9 |
| [Google Cloud Bigtable](https://apis.io/providers/google-cloud-bigtable/) | 66.6 | 37.6 |
| [Google Cloud IAM](https://apis.io/providers/google-cloud-iam/) | 66.3 | 36.5 |
| [Google Cloud App Engine](https://apis.io/providers/google-cloud-app-engine/) | 66.2 | 36.1 |
| [Google Cloud Interconnect](https://apis.io/providers/google-cloud-interconnect/) | 65.4 | 29.8 |
| [Google Cloud Document AI](https://apis.io/providers/google-cloud-document-ai/) | 65.1 | 35.0 |
| [Google Cloud Spanner](https://apis.io/providers/google-cloud-spanner/) | 65.1 | 37.4 |
| [Google Cloud Firestore](https://apis.io/providers/google-cloud-firestore/) | 64.6 | 36.7 |
| [Google Cloud Datastore](https://apis.io/providers/google-cloud-datastore/) | 64.3 | 34.1 |
| [Google Cloud VMware Engine](https://apis.io/providers/google-cloud-vmware-engine/) | 64.3 | 38.8 |
| [Google Cloud Data Fusion](https://apis.io/providers/google-cloud-data-fusion/) | 64.1 | 35.2 |
| [Google Cloud Binary Authorization](https://apis.io/providers/google-cloud-binary-authorization/) | 63.8 | 33.4 |
| [Google Cloud Assured Workloads](https://apis.io/providers/google-cloud-assured-workloads/) | 63.7 | 33.4 |
| [Google Cloud Dialogflow CX](https://apis.io/providers/google-cloud-dialogflow-cx/) | 63.0 | 34.0 |
| [Google Cloud Deploy](https://apis.io/providers/google-cloud-deploy/) | 62.5 | 38.8 |
| [Google Kubernetes Engine](https://apis.io/providers/google-kubernetes-engine/) | 62.5 | 40.2 |
| [Google Cloud Profiler](https://apis.io/providers/google-cloud-profiler/) | 62.3 | 36.1 |
| [Google Cloud Endpoints](https://apis.io/providers/google-cloud-endpoints/) | 62.0 | 36.2 |
| [Google Cloud Memorystore](https://apis.io/providers/google-cloud-memorystore/) | 61.7 | 33.4 |
| [Google Cloud Compute Engine](https://apis.io/providers/google-cloud-compute-engine/) | 61.2 | 43.4 |
| [Google Cloud Service Mesh](https://apis.io/providers/google-cloud-service-mesh/) | 60.9 | 35.8 |
| [Google Dataplex](https://apis.io/providers/google-dataplex/) | 60.0 | 38.3 |
| [Vertex AI Search](https://apis.io/providers/vertex-ai-search/) | 59.7 | 35.9 |
| [Google Cloud Error Reporting](https://apis.io/providers/google-cloud-error-reporting/) | 58.8 | 37.4 |
| [Google Cloud Trace](https://apis.io/providers/google-cloud-trace/) | 57.0 | 34.2 |
| [Google Cloud Migration Center](https://apis.io/providers/google-cloud-migration-center/) | 56.0 | 36.0 |
| [Google Cloud Chronicle](https://apis.io/providers/google-cloud-chronicle/) | 52.1 | 31.1 |
| [Google Cloud Contact Center AI](https://apis.io/providers/google-cloud-contact-center-ai/) | 49.1 | 34.1 |
| [Google](https://apis.io/providers/ai-sdk/) | 42.8 | 27.8 |
| [Elastifile](https://apis.io/providers/elastifile/) | 26.4 | 10.8 |

### Google (74)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [Google Analytics](https://apis.io/providers/google-analytics/) | 77.0 | 43.5 |
| [Google Vault](https://apis.io/providers/google-vault/) | 77.0 | 37.8 |
| [Google Ads](https://apis.io/providers/google-ads/) | 75.1 | 42.6 |
| [Google Drive](https://apis.io/providers/google-drive/) | 74.4 | 44.9 |
| [Google Maps Platform](https://apis.io/providers/google-maps/) | 72.0 | 33.3 |
| [Google Workspace](https://apis.io/providers/google-workspace/) | 71.0 | 43.5 |
| [Google Classroom](https://apis.io/providers/google-classroom/) | 70.5 | 40.3 |
| [Google Campaign Manager](https://apis.io/providers/google-campaign-manager/) | 70.1 | 30.8 |
| [Google Search Console](https://apis.io/providers/google-search-console/) | 69.7 | 31.3 |
| [Google Admin SDK](https://apis.io/providers/google-admin-sdk/) | 68.8 | 34.7 |
| [Google Cloud Translation API](https://apis.io/providers/google-translate/) | 68.2 | 34.2 |
| [Google Chat](https://apis.io/providers/google-chat/) | 68.0 | 41.4 |
| [Google reCAPTCHA](https://apis.io/providers/google-recaptcha/) | 67.3 | 35.2 |
| [Google Docs](https://apis.io/providers/google-docs/) | 66.5 | 40.7 |
| [Google Pay](https://apis.io/providers/google-pay/) | 66.4 | 40.1 |
| [Google Gmail](https://apis.io/providers/google-gmail/) | 66.0 | 43.7 |
| [Google Places](https://apis.io/providers/google-places/) | 65.7 | 40.7 |
| [Google Earth Engine REST](https://apis.io/providers/google-earth-engine/) | 65.4 | 33.9 |
| [Google Tag Manager](https://apis.io/providers/google-tag-manager/) | 65.1 | 36.1 |
| [Google Sheets](https://apis.io/providers/google-sheets/) | 64.9 | 30.3 |
| [Google Indexing](https://apis.io/providers/google-indexing/) | 64.7 | 30.1 |
| [Google Cloud Platform](https://apis.io/providers/google-cloud-platform/) | 64.6 | 51.1 |
| [Google Display & Video 360](https://apis.io/providers/google-display-video-360/) | 64.6 | 37.3 |
| [Google Marketing Platform Admin](https://apis.io/providers/google-marketing-platform/) | 63.9 | 36.1 |
| [Google Vertex AI](https://apis.io/providers/google-vertex-ai/) | 63.7 | 42.6 |
| [Google Firebase](https://apis.io/providers/google-firebase/) | 63.2 | 42.4 |
| [YouTube](https://apis.io/providers/youtube/) | 63.1 | 41.8 |
| [Google Calendar](https://apis.io/providers/google-calendar/) | 62.8 | 42.9 |
| [Google Slides](https://apis.io/providers/google-slides/) | 62.5 | 38.9 |
| [Google Android](https://apis.io/providers/google-android/) | 62.4 | 32.3 |
| [Google Apps Script](https://apis.io/providers/google-apps-script/) | 62.1 | 35.4 |
| [Google Safe Browsing](https://apis.io/providers/google-safe-browsing/) | 62.0 | 33.1 |
| [Google Custom Search](https://apis.io/providers/google-custom-search/) | 61.9 | 39.1 |
| [Fitbit](https://apis.io/providers/fitbit/) | 61.6 | 31.3 |
| [Google Merchant Center](https://apis.io/providers/google-merchant-center/) | 60.8 | 33.4 |
| [Google Search Ads 360 Reporting](https://apis.io/providers/google-search-ads-360/) | 60.3 | 36.7 |
| [Google Identity Platform](https://apis.io/providers/google-identity-platform/) | 60.0 | 34.0 |
| [Google Nest Smart Device Management](https://apis.io/providers/google-nest/) | 59.9 | 36.1 |
| [Google BigQuery](https://apis.io/providers/google-bigquery/) | 58.8 | 41.2 |
| [Google Wallet](https://apis.io/providers/google-wallet/) | 58.6 | 41.0 |
| [Google Tasks](https://apis.io/providers/google-tasks/) | 58.4 | 38.3 |
| [Looker Studio](https://apis.io/providers/looker-studio/) | 58.2 | 37.1 |
| [Google Voice](https://apis.io/providers/google-voice/) | 57.9 | 37.4 |
| [Google Distributed Cloud](https://apis.io/providers/google-distributed-cloud/) | 57.7 | 27.7 |
| [Google Chrome](https://apis.io/providers/google-chrome/) | 57.3 | 40.8 |
| [Google Ad Manager](https://apis.io/providers/google-ad-manager/) | 55.9 | 35.2 |
| [Google Photos Library](https://apis.io/providers/google-photos/) | 55.2 | 36.1 |
| [Google Business Profile](https://apis.io/providers/google-business-profile/) | 55.1 | 38.0 |
| [Google Anthos](https://apis.io/providers/google-anthos/) | 55.0 | 34.1 |
| [Google People](https://apis.io/providers/google-people/) | 54.6 | 38.6 |
| [Google Sites](https://apis.io/providers/google-sites/) | 54.6 | 16.2 |
| [Google Books](https://apis.io/providers/google-books/) | 53.8 | 33.9 |
| [Google Forms](https://apis.io/providers/google-forms/) | 53.8 | 36.1 |
| [Google AdSense Management](https://apis.io/providers/google-adsense/) | 53.7 | 39.1 |
| [Google Meet](https://apis.io/providers/google-meet/) | 53.7 | 35.2 |
| [Google Content API for Shopping](https://apis.io/providers/google-shopping/) | 53.5 | 33.4 |
| [Google Colab](https://apis.io/providers/google-colab/) | 53.2 | 36.7 |
| [Google Fit REST](https://apis.io/providers/google-fitness/) | 52.9 | 33.4 |
| [Google BeyondCorp](https://apis.io/providers/google-beyondcorp/) | 52.5 | 36.2 |
| [Google Fonts Developer](https://apis.io/providers/google-fonts/) | 52.4 | 29.9 |
| [Google Keep](https://apis.io/providers/google-keep/) | 51.9 | 33.4 |
| [Google Play Developer](https://apis.io/providers/google-play/) | 51.5 | 39.1 |
| [Google PageSpeed](https://apis.io/providers/google-pagespeed/) | 51.4 | 32.5 |
| [Google Blogger](https://apis.io/providers/google-blogger/) | 49.5 | 35.7 |
| [Tenor](https://apis.io/providers/tenor/) | 49.4 | 27.2 |
| [Google Knowledge Graph Search](https://apis.io/providers/google-knowledge-graph/) | 49.2 | 33.3 |
| [Google Assistant](https://apis.io/providers/google-assistant/) | 48.7 | 29.6 |
| [Google AppSheet](https://apis.io/providers/google-appsheet/) | 47.1 | 28.8 |
| [Google Play Console Developer Reporting](https://apis.io/providers/google-play-console/) | 46.2 | 40.7 |
| [Google News RSS](https://apis.io/providers/google-news/) | 42.9 | 32.0 |
| [TensorFlow](https://apis.io/providers/tensorflow/) | 39.7 | 24.0 |
| [Kaggle](https://apis.io/providers/kaggle/) | 25.4 | 6.0 |
| [Health Connect](https://apis.io/providers/health-connect/) | 17.4 | 0.0 |
| [JULES.md](https://apis.io/providers/jules-md/) | — | — |

### Google Workspace (2)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [Google Chat Integrations for Workspace](https://apis.io/providers/google-chat-integrations-for-workspace/) | 59.1 | 41.4 |
| [Google Vids](https://apis.io/providers/vids/) | 23.3 | 10.8 |

### Acquisitions and other Google surfaces (15)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [Google](https://apis.io/providers/google/) | 70.8 | 48.5 |
| [Android](https://apis.io/providers/android/) | 68.1 | 40.8 |
| [Google AdMob](https://apis.io/providers/google-admob/) | 63.9 | 38.4 |
| [Google Gemini](https://apis.io/providers/google-gemini/) | 61.8 | 35.8 |
| [Google Quantum AI](https://apis.io/providers/google-quantum-ai/) | 60.3 | 29.3 |
| [Looker](https://apis.io/providers/looker/) | 57.3 | 33.8 |
| [Google Flutter](https://apis.io/providers/google-flutter/) | 49.9 | 27.4 |
| [Mandiant](https://apis.io/providers/mandiant/) | 48.5 | 30.9 |
| [DeepMind](https://apis.io/providers/deepmind/) | 39.1 | 5.0 |
| [pub.dev](https://apis.io/providers/pub-dev/) | 33.7 | 17.3 |
| [Gemini Notebook (NotebookLM)](https://apis.io/providers/notebooklm/) | 30.7 | 2.5 |
| [Waze](https://apis.io/providers/waze/) | 27.6 | 2.5 |
| [Cask Data](https://apis.io/providers/cask-data/) | 26.2 | 3.2 |
| [Google Patents](https://apis.io/providers/google-patents/) | 20.0 | 10.8 |
| [Google Agent Development Kit (ADK)](https://apis.io/providers/google-adk/) | 15.7 | 2.5 |
