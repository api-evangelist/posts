---
layout: post
title: Low Hanging Fruit For API Discovery In The Federal Government
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-government.jpg
author:
  name: kinlane
tags:
  - Federal Government
  - Discovery
  - Low Hanging Fruit
  - Government
  - Discover
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-government.jpg)](http://18f.github.io/API-All-the-X/pages/developer_hubs)

I [looked through 77 of the developer areas for federal agencies](http://apievangelist.com/2014/07/10/looking-at-77-federal-government-api-developer-portals-and-190-apis/), resulting in reviewing approximately 190 APIs. While the presentation of 95% of the federal government developer portals are crap, it makes me happy that about 120 of the 190 APIs (over 60%) are actually consumable web APIs, that didn't make me hold my nose and run out of the API area. 

Of the 190, only 13 actually made me happy for one reason or another:

*   **[OpenFDA](https://open.fda.gov/index.html)** - Well, I've already [gushed about OpenFDA](http://apievangelist.com/2014/06/04/another-strong-api-implementation-in-federal-government-with-openfda/).
*   **[Climate Data Online Web Services](http://www.ncdc.noaa.gov/cdo-web/webservices/v2)** \- Just a clean, valuable, well done API for government.
*   **[National Climate Data Center](http://www.ncdc.noaa.gov/cdo-web/) -** Nice portal, valuable datasets, just needs some nice APIs and BOOM!
*   **[National Renewable Energy Laboratory](http://developer.nrel.gov/) -** NREL just get it, they are doing some great APIs.
*   **[Department of Labor](http://developer.dol.gov/) -** DOL's approach to their API design and developer area makes me happy.
*   **[VA Facilities Locator Web Service](http://va-data.github.io/va-facilities/#!/facilities) -** Only makes me happy because I did the work already. ;-)
*   **[VA Press Releases](http://va-data.github.io/va-press/#!/press) -** Only makes me happy because I did the work already. ;-)
*   **[Consumer Financial Protection Bureau](http://www.consumerfinance.gov/developers/) -** Slick stuff. Nice Area. Great APIs. interactive docs.
*   **[MyUSA Citizen API](https://my.usa.gov/developer/) -** Interestingly simple API, yet massive API concept, curious of the scope, implementation and use of oAuth in federal gov.
*   **[ExoAPI](http://exoapi.com/) -** Very cool API. Space yo! 
*   **[SkyMorph/NEAT API](http://www.asterank.com/skymorph)  -** Very cool API. Space yo! 
*   **[{MAAS} API](http://marsweather.ingenology.com/) -** Very cool API. Space yo! 
*   **[Predict the Sky API](http://predictthesky.org/) -**Very cool API. Space yo! 

Don't get me wrong, there are other nice implementations in there. I like the simplicity and consistency in APIs coming out of GSA, SBA, but overall federal APIs reflect what I see a lot in the private sector, some developer making a decent API, but their follow-through and launch severeley lacks what it takes to make the API successful. People wonder why nobody uses their APIs? hmmmmm....

A little minimalist simplicity in a developer portal, simple explanation of what an API does, interactive documentation w/ Swagger, code libraries, terms of service (TOS), wouild go a looooooooooooong way in making sure these government resources were found, and put to use. 

Ok, so where the hell do I start? Let's look through theses 123 APIs and see where the real low hanging fruit for demonstrating the potential of APIs.json, when it comes to API discovery in the federal government.

Let's start again with the **White House** ([](/admin/blog/<a href='http:/www.whitehouse.gov/developers'>http:/www.whitehouse.gov/developers</a>)[http://www.whitehouse.gov/developers](http://www.whitehouse.gov/developers)):

*   **[White House Petition API](/admin/blog/<a href='https:/petitions.whitehouse.gov/developers'>https:/petitions.whitehouse.gov/developers</a>) -** No swagger, but simple, high value API that is totally worth doing. **(B)**

Only one API made it out of the **USDA**:

*   **Economic Research Service** - [http://www.ers.usda.gov/developer.aspx#.U732Mo1dU\_2](http://www.ers.usda.gov/developer.aspx#.U732Mo1dU_2) - Almost there. The landing page looks good, but the API documentation isn't really there. Could be really easily. Looks like a well crafted API. **(B)**

**Department of Commerce ([http://www.commerce.gov/developer](http://www.commerce.gov/developer)):**

*   **Census Bureau API -** [http://www.census.gov/developers/](http://www.census.gov/developers/) - Yes, a real developer area with supporting building blocks. (Update, News,( App Gallery, Forum, Mailing List). Really could use interactive document though. There are urls, but not active calls. Would be way easier if you could play with data, before committing. **(B)**
*   **Severe Weather Data Inventory -** [http://www.ncdc.noaa.gov/swdiws/](http://www.ncdc.noaa.gov/swdiws/) - Fairly basic interface, wouldn’t take much to turn into modern web API. Right now its just a text file, with a spec style documentation explaining what to do. Looks high value. **(B)**
*   **National Climatic Data Center Climate Data Online Web Services** \- [http://www.ncdc.noaa.gov/cdo-web/webservices/v2](http://www.ncdc.noaa.gov/cdo-web/webservices/v2) - Oh yeah, now we are talking. That is an API. No interactive docs, but nice clean ones, and would be some work, but could be done. **(A)**
*   **Environmental Research Division's Data Access Program -** [http://coastwatch.pfeg.noaa.gov/erddap/rest.html](http://coastwatch.pfeg.noaa.gov/erddap/rest.html) - Looks like a decent web API. Wouldn’t be too much to generate a machine readable definition and make into a better API area. **(B)**
*   **Space Physics Interactive Data Resource Web Services -** [http://spidr.ngdc.noaa.gov/spidr/docs/SPIDR.REST.WSGuide.en.pdf](http://spidr.ngdc.noaa.gov/spidr/docs/SPIDR.REST.WSGuide.en.pdf) - Well its a PDF, but looks like a decent web API. It would be some work but could turn into a decide API with Swagger specs. **(B)**
*   **Center for Operational Oceanographic Products and Services -** [http://tidesandcurrents.noaa.gov/api/](http://tidesandcurrents.noaa.gov/api/) - Fairly straightforward API, Simple. Wouldn’t be hard to generate interactive docs for it. Spec needed. **(B)**

**Arlington Cemetary:**

*   **Arlington National Cemetary -** [http://www.arlingtoncemetery.mil/Developer/](http://www.arlingtoncemetery.mil/Developer/) - Pretty decent web API. Poor presentation, but well designed so it wouldn’t be hard to generate machine readable sec. **(B)**

**Department of Education:**

*   **Department of Education -** [http://www.ed.gov/developers](http://www.ed.gov/developers) - Lots of high value datasets. Says API, but is JSON file. Wouldn’t be hard to generate APIs for it all and make machine readable definitions. **(B)**

**Energy:**

*   **Energy Information Administration -** [http://www.eia.gov/developer/](http://www.eia.gov/developer/) - Nice web API, simple clean presentation. Needs interactive docs. **(B)**
*   **National Renewable Energy Laboratory -** [http://developer.nrel.gov/](http://developer.nrel.gov/) - Close to a modern Developer area with web APIs. Uses standardized access (umbrella). Some of them have Swagger specs, the rest would be easy to create. **(A)**
*   **Office of Scientific and Technical Information -** [http://www.osti.gov/XMLServices](http://www.osti.gov/XMLServices) - Interfaces are pretty well designed, and Swagger specs would be straightforward. But docs are all PDF currently. **(B)**

**Department of Health and Human Services** ([http://www.hhs.gov/developer](http://www.hhs.gov/developer)):

*   **Catalog API -** [http://www.healthdata.gov/catalog-api](http://www.healthdata.gov/catalog-api) - Simple web API. Could use swagger specs. **(B)**
*   **Content Syndication API -** [https://tools.cdc.gov/syndication/api.aspx](https://tools.cdc.gov/syndication/api.aspx) - Simple web API. Could use swagger specs. **(B)**
*   **Feed API -** [https://tools.cdc.gov/syndication/api.aspx](https://tools.cdc.gov/syndication/api.aspx) - Simple web API. Could use swagger specs. **(B)**
*   **HealthCare Finder API -** [http://finder.healthcare.gov/services](http://finder.healthcare.gov/services) - Simple web API. Could use swagger specs. **(B)**
*   **Syndication API -** [https://syndication.hhs.gov/storefront/apiDoc](https://syndication.hhs.gov/storefront/apiDoc) - Simple web API. Could use swagger specs. **(B)**

**Food and Drug Administration** ([](/admin/blog/<a href='http:/open.fda.gov/'>http:/open.fda.gov/</a>)[http://open.fda.gov](http://open.fda.gov)):

*   **Open FDA -** [http://open.fda.gov](http://open.fda.gov) - Nice API, nice API area. Not sure if there are machine readable specs, but definitely should be created. **(A)**
*   **National Institute on Drug Abuse -** [http://www.drugabuse.gov/developer](http://www.drugabuse.gov/developer) - Simple, straightforward API. No API definitions. Wouldn't be too difficult to make happen. **(B)**
*   **AIDSinfo** - [http://aidsinfo.nih.gov/api](http://aidsinfo.nih.gov/api) - Pretty straightforward web API. Needs API definition. **(B)**
*   **ClinicalTrials.gov -** [http://clinicaltrials.gov/ct2/info/linking](http://clinicaltrials.gov/ct2/info/linking) - Pretty straightforward web API. Needs API definition. **(B)**
*   **Computational Photography Project for Pill Identification (C3PI) RxImageAccess RESTful API** - [http://rximage.nlm.nih.gov/docs/doku.php?id=imageretrieval:rootpathformat](http://rximage.nlm.nih.gov/docs/doku.php?id=imageretrieval:rootpathformat) - Well designed Web API, but pretty robust, and would take  a lot of work. **(B)**
*   **DailyMed** - [http://dailymed.nlm.nih.gov/dailymed/help.cfm](http://dailymed.nlm.nih.gov/dailymed/help.cfm) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **Digital Collections Web Service -** [http://collections.nlm.nih.gov/web\_service.html](http://collections.nlm.nih.gov/web_service.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **DIRLINE**     launch Web application - [http://dirline.nlm.nih.gov/dirlineapi/DIRLINEWebService.html](http://dirline.nlm.nih.gov/dirlineapi/DIRLINEWebService.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **Genetics Home Reference -** [http://ghr.nlm.nih.gov/LinkingTo](http://ghr.nlm.nih.gov/LinkingTo) - There is an XML feed. Not really robust API. But API definition wouldn’t be that difficult. **(B)**
*   **MedlinePlus Connect -** [http://www.nlm.nih.gov/medlineplus/connect/service.html](http://www.nlm.nih.gov/medlineplus/connect/service.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **MedlinePlus Health Topics -** [http://www.nlm.nih.gov/medlineplus/webservices.html](http://www.nlm.nih.gov/medlineplus/webservices.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **NDF-RT -** [http://rxnav.nlm.nih.gov/NdfrtAPIs.html](http://rxnav.nlm.nih.gov/NdfrtAPIs.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **Pillbox beta** - [http://pillbox.nlm.nih.gov/API-documentation.html](http://pillbox.nlm.nih.gov/API-documentation.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **PMC Open Access Web Service -** [http://www.ncbi.nlm.nih.gov/pmc/tools/oa-service/](http://www.ncbi.nlm.nih.gov/pmc/tools/oa-service/) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **PMC Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH) Service -** [http://www.ncbi.nlm.nih.gov/pmc/tools/oai/](http://www.ncbi.nlm.nih.gov/pmc/tools/oai/) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **RxNorm -** [http://rxnav.nlm.nih.gov/RxNormAPIs.html#](http://rxnav.nlm.nih.gov/RxNormAPIs.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **RxTerms** - [http://rxnav.nlm.nih.gov/RxTermsAPIs.html](http://rxnav.nlm.nih.gov/RxTermsAPIs.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **TOXNET** - [http://toxnet.nlm.nih.gov/toxnetapi/TOXNETWebService.html](http://toxnet.nlm.nih.gov/toxnetapi/TOXNETWebService.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **Substance Abuse and Mental Health Services Administration -** [http://store.samhsa.gov/developer](http://store.samhsa.gov/developer) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**

**Department of Homeland Security** ([http://www.dhs.gov/developer](http://www.dhs.gov/developer)):

*   **National Terrorism Advisory System –** NTAS Alerts - [http://www.dhs.gov/ntas-api-documentation](http://www.dhs.gov/ntas-api-documentation) - Kind of looks like an API, but a dataset. Would be easy to generate API. **(B)**
*   **FEMA Disaster Recovery Evacuation Route -** [http://gis.fema.gov/REST/services/FEMA/EvacRoutes/MapServer](http://gis.fema.gov/REST/services/FEMA/EvacRoutes/MapServer) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **TSA MyTSA API -** [http://www.dhs.gov/mytsa-api-documentation](http://www.dhs.gov/mytsa-api-documentation) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**

Two losse cannons:

*   **Federal Emergency Management Agency -** [http://www.fema.gov/developer-resources](http://www.fema.gov/developer-resources) - Well laid out, Simple web API. Could use definition. **(B)**
*   **Department of Housing and Urban Development -** [http://www.hud.gov/developer](http://www.hud.gov/developer) - Two web APIs. Pretty unique and cool API explorer. Could easily generate API definitions. **(B)**

 **Department of Interior** ([http://www.doi.gov/developer](http://www.doi.gov/developer)):

*   **Bureau of Land Management - Geocommunicator -** [http://www.blm.gov/nils/GeoComm/home\_services.html](http://www.blm.gov/nils/GeoComm/home_services.html) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Bureau of Land Management - GGeocommunicator Map and Web Services -** [http://www.geocommunicator.gov/GeoComm/services.htm](http://www.geocommunicator.gov/GeoComm/services.htm) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Landscape ARCGIS Server -** [http://www.landscape.blm.gov/ArcGIS/rest/services](http://www.landscape.blm.gov/ArcGIS/rest/services) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Bureau of Ocean Energy Management - BOEM ARCGIS Server -** [http://gis.boemre.gov/arcgis/sdk/rest/](http://gis.boemre.gov/arcgis/sdk/rest/) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Fish and Wildlife Service - Environmental Conservation Online System web services -** [http://ecos.fws.gov/tat\_services/](http://ecos.fws.gov/tat_services/) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Fish & Wildlife Service ARCGIS Service -** [http://gis.fws.gov/arcgis/rest/services](http://gis.fws.gov/arcgis/rest/services) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **National Park Service -** ArcGIS Server REST API - [http://mapservices.nps.gov/arcgis/sdk/rest/index.html?query.html](http://mapservices.nps.gov/arcgis/sdk/rest/index.html?query.html) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **US Geological Survey -** Eastern Geographic Science Center Map Web Services - [http://sscweb.gsfc.nasa.gov/WebServices/](http://sscweb.gsfc.nasa.gov/WebServices/) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Map-A-Planet: Web Map Service -** [http://www.mapaplanet.gov/explorer/help/wmsUserDoc.html](http://www.mapaplanet.gov/explorer/help/wmsUserDoc.html) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **National Atlas Web Map Services -** [http://nationalatlas.gov/infodocs/webservices.html](http://nationalatlas.gov/infodocs/webservices.html) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **NationalMap.gov Web Services -** [http://services.nationalmap.gov/](http://services.nationalmap.gov/) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **ScienceBase API -** [https://my.usgs.gov/confluence/display/sciencebase/ScienceBase+Item+Services](https://my.usgs.gov/confluence/display/sciencebase/ScienceBase+Item+Services) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Streamstats web services -** [http://streamstatsags.cr.usgs.gov/webservices/wsui.htm](http://streamstatsags.cr.usgs.gov/webservices/wsui.htm) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Water Quality Portal Web Services -** [http://www.waterqualitydata.us/webservices\_documentation.jsp](http://www.waterqualitydata.us/webservices_documentation.jsp) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**

**Department of Justice** ([](/admin/blog/<a href='http:/www.justice.gov/developer'>http:/www.justice.gov/developer</a>)[http://www.justice.gov/developer](http://www.justice.gov/developer)):

*   **National Crime Victimization Survey API -** [http://www.bjs.gov/developer/ncvs/index.cfm](http://www.bjs.gov/developer/ncvs/index.cfm) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Bureau of Justice Statistics -** [http://www.bjs.gov/developer/](http://www.bjs.gov/developer/) - Same as Above **(B)**
*   **Office of Justice Programs -** [http://data.ojp.gov/developer/](http://data.ojp.gov/developer/) - OJP Grant Awards Data - [http://data.ojp.gov/developer/awards/index.html](http://data.ojp.gov/developer/awards/index.html) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **OJP Grant Funding Opportunities API -** [http://data.ojp.gov/services/ppi/includes/API/FundingAPI.htm](http://data.ojp.gov/services/ppi/includes/API/FundingAPI.htm) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**

**Labor:**

*   **Department of Labor -** [http://developer.dol.gov/](http://developer.dol.gov/) - I love their developer area. They have a great API, easy to generate API definitions. **(A)**
*   **Bureau of Labor Statistics -** [http://www.bls.gov/developers/](http://www.bls.gov/developers/) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**

**Department of State ([http://www.state.gov/developer](http://www.state.gov/developer)):**

*   **Select State.gov Data (SSD) -** [http://www.state.gov/api/v1/docs/](http://www.state.gov/api/v1/docs/) - Decent API and area, would be easy to generate API definitions. **(B)**
*   **OPDS Catalog of Foreign Relations of the United States (FRUS) -** [http://history.state.gov/developer/catalog](http://history.state.gov/developer/catalog) - Decent API and area, would be easy to generate API definitions. **(B)**
*   **aoprals.state.gov -** [https://explore.data.gov/developers/docs/foreign-per-diem-rates-by-location](https://explore.data.gov/developers/docs/foreign-per-diem-rates-by-location) - Decent API and area, would be easy to generate API definitions. **(B)**
*   **Office of the Historian - State Department —** Ebook Catalog -  [http://history.state.gov/developer/catalog](http://history.state.gov/developer/catalog) - Decent API and area, would be easy to generate API definitions. **(B)**

**Department of Transportation** ([http://www.dot.gov/developer](http://www.dot.gov/developer)):

*   **Bureau of Transportation Statistics (BTS) Open Source Data API -** [http://transportation.jointstatistics.org/home](http://transportation.jointstatistics.org/home) - Decent API and area, would be easy to generate API definitions. **(B)**
*   **Federal Motor Carrier Safety Administration (FMCSA) SaferBus API -** [https://mobile.fmcsa.dot.gov/developer/home.page](https://mobile.fmcsa.dot.gov/developer/home.page) - Decent API and area, would be easy to generate API definitions. **(B)**
*   **Federal Aviation Administration (FAA) APIs -** [http://services.faa.gov/docs/services/](http://services.faa.gov/docs/services/) - OK API and area, would be easy to generate API definitions. **(B)**
*   **National Highway Traffic Safety Administration (NHTSA) API -** [http://www.nhtsa.gov/webapi/Default.aspx](http://www.nhtsa.gov/webapi/Default.aspx) - OK API and area, would be easy to generate API definitions. **(B)**

**Department of the Treasury ([http://www.treasury.gov/developer](http://www.treasury.gov/developer)):**

*   **Bureau of Engraving and Printing (BEP) - Annual Currency Production by Denomination  -** [https://explore.data.gov/developers/docs/annual-production-figures-of-united-states-currency](https://explore.data.gov/developers/docs/annual-production-figures-of-united-states-currency) - Data.gov, simple API, Easy to create API definition. **(B)**
*   **Internal Revenue Service (IRS) -  Inflow County-to-County Migration -** [https://explore.data.gov/developers/docs/irs-county-to-county-annual-migration-data-inflow-2004-2010](https://explore.data.gov/developers/docs/irs-county-to-county-annual-migration-data-inflow-2004-2010) - Data.gov, simple API, Easy to create API definition. **(B)**
*   **Internal Revenue Service (IRS) -  Outflow County-to-County Migration -** [https://explore.data.gov/developers/docs/irs-county-to-county-annual-migration-data-outflow-2004-2010](https://explore.data.gov/developers/docs/irs-county-to-county-annual-migration-data-outflow-2004-2010) - Data.gov, simple API, Easy to create API definition. **(B)**

**Veterans Affairs** ([http://www.va.gov/developer](http://www.va.gov/developer)):

*   **Nationwide Gravesite Locations API -** [https://explore.data.gov/developers/docs/veterans-burial-sites](https://explore.data.gov/developers/docs/veterans-burial-sites) - Data.gov, simple API, Easy to create API definition. **(B)**
*   **VA Facilities Locator Web Service -** [http://va-data.github.io/va-facilities/#!/facilities](http://va-data.github.io/va-facilities/#!/facilities) - Already Done.  **(A)**
*   **VA Press Releases -** [http://va-data.github.io/va-press/#!/press](http://va-data.github.io/va-press/#!/press) - Already Done.  **(A)**

**Consumer Finance Protectection Bureau:**

*   **Consumer Financial Protection Bureau** \- [http://www.consumerfinance.gov/developers/](http://www.consumerfinance.gov/developers/) - Slick stuff. Nice Area. Great APIs. interactive docs. **(A)**

**Federal Communications Commission** ([http://www.fcc.gov/developers](http://www.fcc.gov/developers)):

*   **Low Power FM (LPFM) API -** [http://www.fcc.gov/developers/lpfm-api](http://www.fcc.gov/developers/lpfm-api) - Good API and area, would be easy to generate API definitions. **(B)**
*   **Section 43.61 API -** [http://www.fcc.gov/developers/section-4361-api](http://www.fcc.gov/developers/section-4361-api) - Good API and area, would be easy to generate API definitions. **(B)**
*   **FCC Census Block Conversions -** [http://www.fcc.gov/developers/census-block-conversions-api](http://www.fcc.gov/developers/census-block-conversions-api) - Good API and area, would be easy to generate API definitions. **(B)**
*   **FCC Content API -** [http://www.fcc.gov/developers/fcc-content-api](http://www.fcc.gov/developers/fcc-content-api) - Good API and area, would be easy to generate API definitions. **(B)**
*   **FCC Consumer Broadband Test -** **h**ttp://www.fcc.gov/developers/consumer-broadband-test-api - Good API and area, would be easy to generate API definitions. **(B)**
*   **FCC Registration Number Conversions -** [http://www.fcc.gov/developers/frn-conversions-api](http://www.fcc.gov/developers/frn-conversions-api) - Good API and area, would be easy to generate API definitions. **(B)**
*   **FCC License View -** [http://www.fcc.gov/developers/license-view-api](http://www.fcc.gov/developers/license-view-api) - Good API and area, would be easy to generate API definitions. **(B)**
*   **Spectrum Dashboard -** [http://www.fcc.gov/developers/spectrum-dashboard-api](http://www.fcc.gov/developers/spectrum-dashboard-api) - Good API and area, would be easy to generate API definitions. **(B)**

Lone bank:

*   **Federal Reserve Bank of St. Louis -** [http://api.stlouisfed.org/](http://api.stlouisfed.org/) - Good API and area, would be easy to generate API definitions. **(B)**

**General Services Administration** ([http://www.gsa.gov/developers/](http://www.gsa.gov/developers/)):

*   **American Job Center Resource API -** [http://jobcenter.usa.gov/apis](http://jobcenter.usa.gov/apis) - Good API and area, would be easy to generate API definitions. **(B)**
*   **BusinessUSA Resource Access API -** [http://business.usa.gov/apis](http://business.usa.gov/apis) - Good API and area, would be easy to generate API definitions. **(B)**
*   **Citizen Topics API -** [http://www.usa.gov/About/developer-resources/social-media-registry.shtml#tags](http://www.usa.gov/About/developer-resources/social-media-registry.shtml#tags) - Good API and area, would be easy to generate API definitions. **(B)**
*   **Data Center Consolidation API -** [https://explore.data.gov/developers/docs/federal-data-center-consolidation-initiative-fdcci-data-center-closings-2010-2013](https://explore.data.gov/developers/docs/federal-data-center-consolidation-initiative-fdcci-data-center-closings-2010-2013) - Data.gov, simple API, Easy to create API definition. **(B)**
*   **Federal Agency Directory API Documentation -** [http://www.usa.gov/About/developer-resources/federal-agency-directory/index.shtml](http://www.usa.gov/About/developer-resources/federal-agency-directory/index.shtml) - Data.gov, simple API, Easy to create API definition. **(B)**
*   **Government Jobs API -** [http://search.digitalgov.gov/developer/jobs.html](http://search.digitalgov.gov/developer/jobs.html) - Good API and area, would be easy to generate API definitions. **(B)**
*   **Domains API -** [https://explore.data.gov/developers/docs/federal-executive-agency-internet-domains](https://explore.data.gov/developers/docs/federal-executive-agency-internet-domains) - Data.gov, simple API, Easy to create API definition. **(B)**
*   **Go.USA.gov API -** [https://go.usa.gov/api](https://go.usa.gov/api) - Good API and area, would be easy to generate API definitions. **(B)**
*   **Mobile App Gallery API Documentation -** [http://www.usa.gov/About/developer-resources/mobile-app-gallery/index.shtml](http://www.usa.gov/About/developer-resources/mobile-app-gallery/index.shtml) - Good API and area, would be easy to generate API definitions. **(B)**
*   **MyUSA Citizen API -** [https://my.usa.gov/developer/](https://my.usa.gov/developer/) - Interesting API. Not Data. User-based. Need to look at oAuth! This needs more attention. **(B)**
*   **MyGov Discovery API -** [http://discovery.my.usa.gov/](http://discovery.my.usa.gov/) - OK API and area, would be easy to generate API definitions. **(B)**
*   **Per Diem API -** [http://www.gsa.gov/portal/content/162379](http://www.gsa.gov/portal/content/162379) - Good API and area, would be easy to generate API definitions. **(B)**
*   **Product Recall Data API -** [http://search.digitalgov.gov/developer/recalls.html](http://search.digitalgov.gov/developer/recalls.html) - Good API and area, would be easy to generate API definitions. **(B)**
*   **Social Media Registry API -** [http://www.usa.gov/About/developer-resources/social-media-registry.shtml](http://www.usa.gov/About/developer-resources/social-media-registry.shtml) - Good API and area, would be easy to generate API definitions. **(B)**

**National Aeronautics and Space Administration** [http://open.nasa.gov/developer](http://open.nasa.gov/developer):

*   **NASA Data API -** [http://data.nasa.gov/api-info/](http://data.nasa.gov/api-info/) - Simple API and area, would be easy to generate API definitions. **(B)**
*   **Satellite Situation Center API -** [http://sscweb.gsfc.nasa.gov/WebServices/](http://sscweb.gsfc.nasa.gov/WebServices/) - Simple API and area, would be easy to generate API definitions. **(B)**
*   **Coordinated Data Analysis System (CDAS) Web services -** [http://cdaweb.gsfc.nasa.gov/WebServices/](http://cdaweb.gsfc.nasa.gov/WebServices/) - Simple API and area, would be easy to generate API definitions. **(B)**
*   **ExoAPI -** [http://exoapi.com/](http://exoapi.com/) - Very cool API. Definitely could have API definition. DO this one! **(B)**
*   SkyMorph/NEAT API - [http://www.asterank.com/skymorph](http://www.asterank.com/skymorph) - Simple API and area, would be easy to generate API definitions. **(B)**
*   **{MAAS} API -** [http://marsweather.ingenology.com/](http://marsweather.ingenology.com/) - Very cool API. Definitely could have API definition. DO this one! **(B)**
*   **Predict the Sky API -** [http://predictthesky.org/](http://predictthesky.org/) - Very cool API. Definitely could have API definition. DO this one! **(B)**

**Couple more loose cannons:**

*   **National Science Foundation - GRFP Awardees and Honorable Mentions (2000-2012) -**[https://explore.data.gov/developers/docs/nsf-grfp-awardees-and-honorable-mentions-2000-2012](https://explore.data.gov/developers/docs/nsf-grfp-awardees-and-honorable-mentions-2000-2012) - Data.gov, simple API, Easy to create API definition **(B)**
*   **NSF Funding Rate History API -** [https://explore.data.gov/developers/docs/nsf-funding-rate-history](https://explore.data.gov/developers/docs/nsf-funding-rate-history) - Data.gov, simple API, Easy to create API definition. **(B)**
*   **Nuclear Regulatory Commission -** [http://www.nrc.gov/developer.html](http://www.nrc.gov/developer.html) - There are APIs there, represented by PDFs. API Definitions and real API area could be generated. **(B)**
*   **Office of Personnel Management -** [http://www.opm.gov/developer](http://www.opm.gov/developer) - There is an API there. One for status update of DC. API Definition would be easy. **(B)**

**Recovery Accountability and Transparency Board** ([http://www.recovery.gov/arra/FAQ/Developer/Pages/default.aspx](http://www.recovery.gov/arra/FAQ/Developer/Pages/default.aspx)):

*   **ARRA API -** [http://www.recovery.gov/arra/FAQ/Developer/Pages/RecoveryAPI.aspx](http://www.recovery.gov/arra/FAQ/Developer/Pages/RecoveryAPI.aspx) - Good API and area, would be easy to generate API definitions. **(B)**
*   **ArcGISARCGIS MAP API -** [http://www.recovery.gov/arra/FAQ/Developer/Pages/arcgisapi.aspx](http://www.recovery.gov/arra/FAQ/Developer/Pages/arcgisapi.aspx) - Good API and area, would be easy to generate API definitions. **(B)**

**Small Business Administration** ([http://www.sba.gov/about-sba/sba\_performance/sba\_data\_store/web\_service\_api](http://www.sba.gov/about-sba/sba_performance/sba_data_store/web_service_api)):

*   **Business Licenses & Permits API -** [http://www.sba.gov/about-sba/sba\_performance/sba\_data\_store/web\_service\_api/business\_licenses\_permits\_api](http://www.sba.gov/about-sba/sba_performance/sba_data_store/web_service_api/business_licenses_permits_api) - Nice API and area, would be easy to generate API definitions. **(B)**
*   **Loans & Grants Search API -** [http://www.sba.gov/about-sba/sba\_performance/sba\_data\_store/web\_service\_api/loans\_grants\_search\_api](http://www.sba.gov/about-sba/sba_performance/sba_data_store/web_service_api/loans_grants_search_api) - Nice API and area, would be easy to generate API definitions. **(B)**
*   **Recommended Sites API -** [http://www.sba.gov/about-sba/sba\_performance/sba\_data\_store/web\_service\_api/recommended\_sites\_api](http://www.sba.gov/about-sba/sba_performance/sba_data_store/web_service_api/recommended_sites_api) - Nice API and area, would be easy to generate API definitions. **(B)**
*   **U.S. City and County Web Data API -** [http://www.sba.gov/about-sba/sba\_performance/sba\_data\_store/web\_service\_api/u\_s\_city\_and\_county\_web\_data\_api](http://www.sba.gov/about-sba/sba_performance/sba_data_store/web_service_api/u_s_city_and_county_web_data_api) - Nice API and area, would be easy to generate API definitions. **(B)**
*   **Content Share API -** [http://www.sba.gov/about-sba/sba\_performance/sba\_data\_store/web\_service\_api/content\_share\_api](http://www.sba.gov/about-sba/sba_performance/sba_data_store/web_service_api/content_share_api) - Nice API and area, would be easy to generate API definitions. **(B)**
*   **Lender Search API -** [http://www.sba.gov/content/lender-search-api](http://www.sba.gov/content/lender-search-api) - Nice API and area, would be easy to generate API definitions. **(B)**

Last but not least.

*   **U.S. Agency for International Development -** Development Experience Clearinghouse API -[http://www.usaid.gov/developer/development-experience-clearinghouse-dec-api](http://www.usaid.gov/developer/development-experience-clearinghouse-dec-api) - Nice API and area, would be easy to generate API definitions. **(B)**

That is a lot of potentially valuable API resource to consume. From my perspective, I think that what has come out of GSA, SBA, and White House Petition API, represent probably the simplest, most consistent, and high value targets for me. Next maybe the wealth of APis out of Interior and FDA. AFter that I'll cherry pick from the list, and see which are easiest. 

I'm lookig to create a Swagger definition for each these APIs, and publish as a Github repository, allowing people to play with the API. If I have to, I'll create a proxy for each one, because CORS is not common across the federal government. I'm hoping to not spend to much time on proxies, because once I get in there I always want to improve the interface, and evolve a facade for each API, and I don't have that much time on my hands.