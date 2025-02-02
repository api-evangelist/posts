---
layout: post
title: A Huge Need for Writeable APIs in Government
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-pen-hand.png
author:
  name: kinlane
tags:
  - Government
  - APIs
---
I asked a question on Twitter last night: [Any examples of government APIs that allow for write (POST, PUT, PATCH) capabilities? I'm looking for existing agencies who have implemented already](https://twitter.com/kinlane/status/382685108014428160). While I was asking for examples of APIs, by motivations were specifically about finding an example of terms of use for a government writable API.

After spending some time looking and listening to peoples responses, there isn't much in the wild when it comes to writable government APIs, however it is clear that there is a huge demand for writable APIs, and a lot of opinion that this could be the thing that changes how government operates for the better.

The best examples that my followers pointed me to was with the [Open 311](http://open311.org/) iniative:

*   [Washington, DC](http://dc.gov/DC/About+DC.Gov/Terms+and+Conditions#1)
*   [Chicago, IL](http://dev.cityofchicago.org/docs/api/tos)
*   [Montgomery County MD](http://www.montgomerycountymd.gov/mcg/user_rights.html)

There was another DoD API that allows users to POST information, and then only allows them to only update their own information, but wasn't exaclty the open write I was looking for.

*   [Clause Logic Service](https://clauselogic.altess.army.mil/banner)

Clay Johnson ([@cjoh](https://twitter.com/cjoh)), the author of [The Information Diet](http://www.informationdiet.com/), has a great [post on how writable APIs can help fix the government procurement process](http://dobtco.github.io/fixing-procurement-ebook/final/fixing-procurement-ebook/#how-to-fix-procurement-2-up-the-api-game). Demonstrating one solid example of how government could be more efficient through the sensible use of APIs.

The biggest [case study I can find of writable APIs in federal government was the IRS Modernized e-File (MeF) system](http://apievangelist.com/2013/09/15/irs-modernized-efile-mef-a-blueprint-for-public--private-sector-partnerships-in-a-21st-century-digital-economy-draft/ "case study I can find of writable APIs in federal government was the IRS Modernized e-File system"), but the goal of this research is to find an existing example of terms of use for writable APIs in the federal government, and after looking through all the e-File documentation I couldn't find any terms of use that covered developers submitting tax forms to the IRS via MeF web services. I will spend more time looking, I'm sure they are in there somewhere.

If you know of any examples of of the federal government using APIs and allowing the public to to submit data, content or forms through APIs, please let me know. It is something I will keep researching, writing about and advocating for.

Executing APIs as a two-way street is essential to successful API and open data strategies in both the public and private sector.