---
layout: post
title: More Government Data with the Federal Register API
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Data
  - Government
---
[![](http://kinlane-productions2.s3.amazonaws.com/government/presidential-seal.png)](http://www.archives.gov/federal-register/ "Office of the Federal Register")Each day Federal agencies publish documents in the Federal Register. These documents include proposed rules, final rules, public notices, and Presidential actions. The print-based version of the Federal Register can be difficult to read, process and access, so the [Office of the Federal Register](http://www.archives.gov/federal-register/ "Office of the Federal Register") (OFR) of the [National Archives and Records Administration](http://www.archives.gov/ "National Archives and Records Administration") (NARA), and the [U.S. Government Printing Office](http://www.gpo.gov/ "U.S. Government Printing Office") (GPO), who all joined forces to launch the [FederalRegister.gov](http://www.federalregister.gov/ "federalregister.gov") website, also deployed an API.

The goal of the initiative was to make it even easier for developers to build new ways of interacting with Federal Register data, making it easier for citizens and communities to understand the regulatory process and to participate in the Government decision-making process.

The [Federal Register API](http://www.federalregister.gov/blog/learn/developers "Federal Register API") is RESTful, with no keys required for authentication and responses in a JSON format. They even provide a simple JSON interface for callbacks. All data in the Federal Register is updated daily by 6 a.m., and is published Monday through Friday, except Federal holidays, and consists of four types of entries:

*   **Presidential Documents** - Executive orders and proclamations
*   **Rules and Regulations** - Policy statements and interpretations of rules
*   **Proposed Rules** - Petitions for rulemaking and other advance proposals
*   **Notices** - Scheduled hearings and meetings open to the public, grant applications, administrative orders, and other announcements of government actions

The Federal Register API is meant to deliver print-based material in machine-readable formats, to make the Federal Register more searchable, accessible, easier to digest, and easier to share withother systems.

The Federal Registers, encourages every citizen to become more involved in the workings of their government and to make their voices heard on the things that matter to them, from the smallest to the largest issues.

I'm reporting on multiple government APIs lately with, [Political Influence in U.S. an API Call Away](Political Influence in U.S. an API Call Away "http://blog.programmableweb.com/2011/08/01/sunlight-labs-releases-influence-explorer-text-api/")" and "[More Government Data with U.S. Department of Labor API](http://blog.programmableweb.com/2011/07/28/more-government-data-with-u-s-department-of-labor-api/ "More Government Data with U.S. Department of Labor API")". With all the bullshit and theatrics in politics and the media, this kind of news really gets me excited about getting more involved in the Government decision-making process.