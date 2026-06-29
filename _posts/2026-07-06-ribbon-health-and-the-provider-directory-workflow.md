---
published: true
layout: post
title: Ribbon Health and the Provider Directory Workflow
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/ribbon-health-and-the-provider-directory-workflow.png
date: 2026-07-06
author: Kin Lane
tags:
  - APIs
  - Healthcare
  - Arazzo
  - Provider Directory
  - Da Vinci
  - Workflows
---
Provider directories are the unglamorous backbone of healthcare. Finding a doctor who has the right specialty, in the right location, who actually accepts a given insurance plan is a deceptively hard data problem, and it is the problem Ribbon Health's API exists to solve. The HL7 Da Vinci PDex Plan-Net implementation guide is the standard shape for this kind of directory, and Ribbon's surface maps onto it well enough that writing the workflows down as Arazzo makes the pattern explicit.

The provider search workflow runs the way a real find-a-doctor query runs: look up the insurance carrier, search providers filtered by specialty, location, and that carrier, and then pull the detailed record for the matched provider. That sequence—narrow by plan, then by specialty and geography, then resolve the detail—is the heart of the Plan-Net pattern, and it is far clearer as an ordered workflow than as three separate endpoint descriptions. The location and insurance workflow does the same from the facility side, walking from a location search to the location detail to the insurances accepted there.

I also captured a directory management workflow, because Ribbon is not only a read surface—you can maintain custom provider records. That flow upserts a provider, sets their locations and specialties, and confirms the record. Directory accuracy is an ongoing maintenance problem, not a one-time load, and modeling the maintenance as a workflow acknowledges that. Every step references a real operationId in Ribbon's spec, with NPIs and location identifiers passed as the path parameters the API uses.

Directories are where a lot of the friction in healthcare actually lives—the wrong phone number, the doctor who left the network, the plan that is no longer accepted. Treating provider search and directory maintenance as named, reviewable workflows is a small but real step toward taking that friction seriously, and aligning them with the Da Vinci Plan-Net pattern means the work is portable rather than yet another bespoke directory integration.
