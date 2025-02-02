---
published: true
layout: post
title: >-
  Taking Another Look At Where We Are At With Data.json Files For Federal
  Agencies
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-government.jpg
author:
  name: kinlane
tags:
  - Data
  - Agencies
---
I am spending some time, refreshing my look at the open data work, specifically the results of [OMB Memorandum M-13-13](https://project-open-data.github.io/policy-memo), which required federal government agencies to publish a data.json file, providing a machine readable inventory of an agencies public data resources. [I recently received a Knight Foundation Grant to build a prototype, explore one possible "whats next", for open data in the federal government](http://knightfoundation.org/blogs/knightblog/2015/8/4/22-ideas-win-knight-prototype-fund-support/)\--allowing me to push this valuable work forward.

To refresh my memory, I pulled from 87 federal agencies I am tracking on as part of my regular API monitoring--[raising the bar from 22 federal agencies having published their data.json file](http://kinlane.com/2014/08/25/6482-datasets-available-across-22-federal-agencies-in-datajson-files/), to 27 who have published their data.json file. 

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/720px-US-BureauOfEconomicAnalysis-Logo.svg.png)

[**Bureau of Economic Analysis**](http://www.bea.gov/) (with [data.json](http://www.bea.gov/data.json) returning a 200 status code and 10 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/CFPB_Logo.png)

[**Consumer Financial Protection Bureau**](http://www.consumerfinance.gov/) ([data.json](http://www.consumerfinance.gov/data.json)) returning a 200 status code and 2 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/640px-US-DeptOfAgriculture-Seal2.svg.png)

[**Department of Agriculture**](http://www.usda.gov/) ([data.json](http://www.usda.gov/data.json)) ( returning a 200 status code and 524 datasets)

![](http://federal-government.apievangelist.com/images/logos/commerce.png)

[**Department of Commerce**](https://www.commerce.gov/) ([data.json](https://www.commerce.gov/data.json)) ( returning a 200 status code and 492 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/280px-United_States_Department_of_Defense_Seal.svg.png)

[**Department of Defense**](http://www.defense.gov/) ([data.json](http://www.defense.gov/data.json) returning a 404 status code and 374 datasets - WTF)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/US-DeptOfEducation-Seal.svg.png)

[**Department of Education**](https://www.ed.gov/) ([data.json](https://www.ed.gov/data.json) returning a 200 status code and 281 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/US-DeptOfEnergy-Seal.svg.png)

[**Department of Energy**](http://www.energy.gov/) ([data.json](http://www.energy.gov/data.json) returning a 200 status code and 1001 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/440px-US-DeptOfHHS-Seal.svg.png)

[**Department of Health and Human Services**](https://www.hhs.gov/) ([data.json](https://www.hhs.gov/data.json) returning a 301 status code and 1311 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/400px-US_Department_of_Homeland_Security_Seal.svg.png)

[**Department of Homeland Security**](http://www.dhs.gov/) ([data.json](http://www.dhs.gov/data.json) returning a 403 status code and 332 datasets - what?)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/280px-US-DeptOfHUD-Seal.svg.png)

[**Department of Housing and Urban Development**](https://portal.hud.gov/portal/page/portal/HUD) ([data.json](https://portal.hud.gov/portal/page/portal/HUDdata.json) returning a 200 status code and 174 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/US-DeptOfJustice-Seal.svg.png)

[**Department of Justice**](https://www.justice.gov/) ([data.json](https://www.justice.gov/data.json) returning a 403 status code and 1642 datasets - what?)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/DOL_Seal_with_Hammer.png)

[**Department of Labor**](http://dol.gov/) ([data.json](http://dol.gov/data.json) returning a 200 status code and 363 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/440px-Department_of_state.svg.png)

[**Department of State**](http://www.state.gov/) ([data.json](http://www.state.gov/data.json) returning a 200 status code and 93 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/350px-US-DeptOfTheInterior-Seal.svg.png)

[**Department of the Interior**](http://www.doi.gov/) ([data.json](http://www.doi.gov/data.json) returning a 200 status code and 21,870 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/280px-US-DeptOfTheTreasury-Seal.svg.png)

[**Department of the Treasury**](http://www.treasury.gov/) ([data.json](http://www.treasury.gov/data.json) returning a 200 status code and 234 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/240px-US-DeptOfVeteransAffairs-Seal.svg.png)

[**Department of Veterans Affairs**](http://www.va.gov/) ([data.json](http://www.va.gov/data.json) returning a 200 status code and 953 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/energy-star-logo.jpg)

[**ENERGY STAR**](https://data.energystar.gov/) ([data.json](https://data.energystar.gov/data.json) returning a 200 status code and 53 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/280px-US-GeneralServicesAdministration-Seal-Alt.svg.png)

[**General Services Administration**](http://www.gsa.gov/) ([data.json](http://www.gsa.gov/data.json) returning a 200 status code and 164 datasets

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/health-data-gov.png)

[**HealthData.gov**](https://www.healthdata.gov/) ([data.json](https://www.healthdata.gov/data.json) returning a 200 status code and 1,311 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/280px-US-NARA-Seal.svg.png)

[**National Archives and Records Administration**](http://www.archives.gov/) ([data.json](http://www.archives.gov/data.json) returning a 200 status code and 62 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/Nsf1.jpg)

[**National Science Foundation**](https://nsf.gov/) ([data.json](https://nsf.gov/data.json) returning a 200 status code and 138 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/280px-US-NuclearRegulatoryCommission-Seal.png)

[**Nuclear Regulatory Commission**](http://www.nrc.gov/) ([data.json](http://www.nrc.gov/data.json) returning a 200 status code and 34 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/320px-US-OfficeOfPersonnelManagement-Seal.svg.png)

[**Office of Personnel Management**](https://www.opm.gov/) ([data.json](https://www.opm.gov/data.json) returning a 200 status code and 624 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/280px-US-SmallBusinessAdmin-Seal.svg.png)

[**Small Business Administration**](http://www.sba.gov/) ([data.json](http://www.sba.gov/data.json) returning a 302 status code and 36 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/280px-US-SocialSecurityAdmin-Seal.svg.png)

[**Social Security Administration**](https://www.ssa.gov/) ([data.json](https://www.ssa.gov/data.json) returning a 200 status code and 1163 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/400px-USAID-Identity.svg.png)

[**U.S. Agency for International Development**](http://www.usaid.gov/) ([data.json](http://www.usaid.gov/data.json) returning a 200 status code and 201 datasets)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/US-WhiteHouse-Logo.png)

[**White House**](https://www.whitehouse.gov/) ([data.json](https://www.whitehouse.gov/data.json))returning a 200 status code and 23 datasets)

It isn't the massive adoption I would like to have seen, but I am happy to see three more agencies get on board with opening up their data inventory, and pleased to see the increase from 6,482 to around 33,073. As usual, I am interested in breaking down what is actually happening across these 26 agencies, but I am looking to identify which agencies should be publishing their data.json files, but are not.

While manually checking each federal agencies data.json availability, these are the agencies that I came across that SHOULD have a data.json file present in the root of their domain, there really is not excuse why they shouldn't in 2015.

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/399px-US-AlcoholTobaccoFirearmsAndExplosives-Seal.svg.png)

[**Bureau of Alcohol, Tobacco, Firearms, and Explosive**](https://www.atf.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/US-DeptOfJustice-Seal.svg.png)

[**Bureau of Justice Statistics**](https://www.bjs.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/400px-Bureau_of_labor_statistics_logo.svg.png)

[**Bureau of Labor Statistics**](http://www.bls.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/businessusa-logo.png)

[**BusinessUSA**](https://business.usa.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/Centers_for_Medicare_and_Medicaid_Services_logo.png)

[**Centers for Medicare and Medicaid Services**](http://cms.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/400px-US-DrugEnforcementAdministration-Seal.svg.png)

[**DEA - E-Commerce Program**](http://www.deaecom.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/400px-US-FederalAviationAdmin-Seal.svg.png)

[**Federal Aviation Administration**](http://faa.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/360px-FEMA_logo.svg.png)

[**Federal Emergency Management Agency**](https://www.fema.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/450px-FedRegI.JPG)

[**Federal Register**](https://www.federalregister.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/Great_Seal_of_the_United_States_(obverse).svg.png)

[**FOIA.gov**](https://www.foia.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/NASA_logo.svg.png)

[**National Aeronautics and Space Administration**](https://nasa.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/National_Climatic_Data_Center_logo.png)

[**National Climate Data Center**](http://www.ncdc.noaa.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/440px-US-NHTSA-Logo.svg.png)

[**National Highway Traffic Safety Administration**](http://www.nhtsa.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/440px-US-NIH-NIDA-Logo.svg.png)

[**National Institute on Drug Abuse**](http://www.drugabuse.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/NIH_Master_Logo_Vertical_2Color.png)

[**National Institutes of Health**](https://federation.nih.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/440px-US-NationalLibraryOfMedicine-Logo.svg.png)

[**National Library of Medicine**](https://www.nlm.nih.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/US-NationalWeatherService-Logo.svg.png)

[**National Weather Service**](https://weather.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/320px-US-OfficeOfJusticePrograms-Seal.svg.png)

[**Office of Justice Programs**](http://ojp.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/440px-Department_of_state.svg.png)

[**Office of the Historian**](http://history.state.gov/)

![](http://laneworks.net/federal-gov/pull-agency-data-json-target-urls-new.php)

[**Recovery.Gov**](http://www.recovery.gov/FAQ/Developer/Pages/RecoveryAPI.aspx)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/mastheadMay2011.png)

[**Substance Abuse and Mental Health Services Administration**](http://samhsa.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/EIA_logo.jpg)

[**U.S. Energy Information Administration**](https://www.eia.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/280px-US-GeologicalSurvey-Seal.svg.png)

[**U.S. Geological Survey**](http://usgs.gov/)

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/census-screenshot.png)

[**US Census Bureau**](https://www.census.gov/developers/)

I will be focusing on the 26 federal agencies who have published their data.json, but will be keeping an eye on how we can incentivize the additional 24 agencies to do it as well. As I dig into the details of each agencies data-sets, I will be looking for where data-sets exist that aren't present on inventory, and help agencies along in their journey.

As I continue my work as part of my Knight Foundation Prototype, I'll have lots more stories to share, this is just the beginning.

_**Update:** Added Department of Education to list with data.json_