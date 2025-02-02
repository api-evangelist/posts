---
layout: post
title: Looking At 77 Federal Government API Developer Portals And 190 APIs
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-government.jpg
author:
  name: kinlane
tags:
  - Federal Government
  - Portal
  - Portals
  - Government
  - APIs
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-government.jpg)](http://18f.github.io/API-All-the-X/pages/developer_hubs)

I spent most of the day yesterday, looking through [77 of the developer portals listed on the 18F Github portal](/admin/blog/http:/18f.github.io/API-All-the-X/pages/developer_hubs). While I wanted to evaluate the quality and approach of each of the agencies, my goal for this review cycle was to look for any APIs that already had machine readable API definitions, or would be low hanging fruit for the creation of [Swagger definitions](http://swagger.wordnik.com/), as part of my wider API discovery work.

I had just finished updating all my API Evangelist Network APIs to use verion 0.14 of [APIs.json](http://apisjson.org), and while I wait for the search engine [APIs.io](http://apis.io) to update to support the new version, I wanted to see if I could start the hard work of applying API discovery to federal government APIs. 

Ideally all federal agencies would publish APIs.json on their own, placing it within the root of their domain, like they do with data.json, and provide an index of all of their APIs. Being all to familiar with how this stuff work, I know that if I want this to happen, I will have to generate APIs.json for many federal agencies first. However for the APis.json to have their intended impact, I need many of the APIs to have machine readable API definitions that I can point to--which equals more work for me! yay? ;-(

My thinking is that I will look through all of the 77 developer areas, and resulting APIs looking for the low hanging fruit. Basically I would grade each API on its viability to be included in my federal government API discovery work. I spent minimal amount of time look at each API, and in some cases looking for the API, before giving up. I would inspect the supporting developer area, and the actual interface for complexity, helping me understand how hard it would be to hand craft a Swagger spec, and APIs.json for each agency and their APIs. 

_(warning contains my raw un-edited notes from doing this research, not suitable for children)_

As I went through, I wrote a couple of notes:

*   [National Climate Data Center](/admin/blog/<a href='http:/www.ncdc.noaa.gov/cdo-web/'>http:/www.ncdc.noaa.gov/cdo-web/</a>) is nice looking, and is a high profile--they should have a kick ass API!
*   Inversely [NOAAA Climate Data Online](/admin/blog/<a href='http:/www.ncdc.noaa.gov/cdo-web/webservices/v2#gettingStarted'>http:/www.ncdc.noaa.gov/cdo-web/webservices/v2#gettingStarted</a>) very simple, clean and well done.
*   [Department of Education](http://www.ed.gov/developers) is acceptable as dev area, only because of Socrata
*   [National Renewable Energy Laboratory](http://developer.nrel.gov/) just gets it. They just get it.
*   Some of these are billed as developer areas, but really just a single API. It is a start I guess. 
*   I love me some [Department of Labor](http://developer.dol.gov/). Their developer area and API is freak'n cool!
*   [MyUSA citizen API](https://my.usa.gov/developer/) has oAuth!!! WTF. How did I not notice this before? Another story, and work here.
*   MyUSA has really good, simple, high value, API resources. 
*   [NASA ExoAPI](http://exoapi.com/) not just API cool, but space cool!!
*   [FOIA](http://www.foia.gov/developer.html) needs a fucking API. No excuses. FOIA needs an API!
*   Some APIs it might be better to go back to data source and recreate API from scratch, they are so bad.

I wanted to share some of my notes, before the long list of developer areas, and their APIs. There are some specific notes for each APIs, but much of it is very general, helping grade each API, so I can go back through the list of B grade or higher APIs, and figure out which are candidates for me to create a Swagger API definition, APIs.json and ultimately adding to APIs.io. 

For this work I went down the [77 federal agency links](http://18f.github.io/API-All-the-X/pages/developer_hubs), which were billed as developer areas, but many were single APIs. So when a developer area resulted in multiple APIs, I grouped them together, and many of the agencies who have a single API I will group together, and include my commentary as necessary. I'm leaving the URLs visible to help as a reference, show the craziness of some of them, and because it would have been sooooo much work to apply all of them.

Let's start with the **White House**([](/admin/blog/<a href='http:/www.whitehouse.gov/developers'>http:/www.whitehouse.gov/developers</a>)[http://www.whitehouse.gov/developers](http://www.whitehouse.gov/developers)):

*   **[White House Petition API](/admin/blog/<a href='https:/petitions.whitehouse.gov/developers'>https:/petitions.whitehouse.gov/developers</a>) -** No swagger, but simple, high value API that is totally worth doing. **(B)**

Next up is the **USDA** ([http://www.usda.gov/wps/portal/usda/usdahome?navid=USDA\_DEVELOPER](http://www.usda.gov/wps/portal/usda/usdahome?navid=USDA_DEVELOPER)), which is a hodgepodge of service, no consistency whatsoever between services in interface, supporting content or anything. 

*   **Farmers Market Directory API** - [http://search.ams.usda.gov/farmersmarkets/v1/svcdesc.html](http://search.ams.usda.gov/farmersmarkets/v1/svcdesc.html) - worthwhile API, but soap,
*   **Animal Identification Management Syste**m - [https://vsapps.aphis.usda.gov/aims/](https://vsapps.aphis.usda.gov/aims/) - Meh
*   **ERS Content API  -** [http://www.ers.usda.gov/developer/website-content-api.aspx](http://www.ers.usda.gov/developer/website-content-api.aspx) - Really rough.
*   National Agriculture Imagery Program (NAIP) Status Web Service - [http://www.fsa.usda.gov/Internet/FSA\_File/usage\_guide\_naipstatus\_final.pdf](http://www.fsa.usda.gov/Internet/FSA_File/usage_guide_naipstatus_final.pdf) - PDF bitches. Barf.
*   **Recreation Information Database  -** [https://ridb.recreation.gov/](https://ridb.recreation.gov/) - Kinda sort of cool
*   **Cropland Data Layer -** [http://www.nass.usda.gov/research/Cropland/sarsfaqs2.html#\_Cropscape1.2](http://www.nass.usda.gov/research/Cropland/sarsfaqs2.html#_Cropscape1.2) - What What? Not an API?
*   **Quick Stats -** [http://quickstats.nass.usda.gov/api](http://quickstats.nass.usda.gov/api) - What What ? Not an API, a tleast can't find it.
*   **National Water and Climate Center AWDB database -** [http://www.wcc.nrcs.usda.gov/web\_service/AWDB\_Web\_Service\_Tutorial.htm](http://www.wcc.nrcs.usda.gov/web_service/AWDB_Web_Service_Tutorial.htm)
*   **Soil Data Mart -** [http://sdmdataaccess.nrcs.usda.gov/](http://sdmdataaccess.nrcs.usda.gov/) - SOAP, yuck!

Overall I give USDA a **D** on all their APIs. A couple might be high value sources, and going after, but definitely not low hanging fruit for me. It would be easier to tackle as independent project for generating brand new APIs.

*   **Economic Research Service** - [http://www.ers.usda.gov/developer.aspx#.U732Mo1dU\_2](http://www.ers.usda.gov/developer.aspx#.U732Mo1dU_2) - Almost there. The landing page looks good, but the API documentation isn't really there. Could be really easily. Looks like a well crafted API. **(B)**

Next up is Department of Commerce ([http://www.commerce.gov/developer](http://www.commerce.gov/developer)), who definitely high some higher value resources, as well as some health API initiatives. 

*   **Bureau of Economic Analysis API -** [http://bea.gov/API/signup/index.cfm](http://bea.gov/API/signup/index.cfm) - Signed up for key, don’t see any docs? Looks clean, but we’ll see if anything there. An email address. yay! **(C)**
*   **Census Bureau API -** [http://www.census.gov/developers/](http://www.census.gov/developers/) - Yes, a real developer area with supporting building blocks. (Update, News, App Gallery, Forum, Mailing List). Really could use interactive document though. There are urls, but not active calls. Would be way easier if you could play with data, before committing. **(B)**
*   **International Trade Administration Export Trade Events -** [https://new.export.gov/events](https://new.export.gov/events) - Don’t see an API **(F)**
*   **National Institute of Standards and Technology CDA Guideline Validation Tool -**  [http://ihe-pcd-con.nist.gov/PCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConcda-validation/webservice.html](http://ihe-pcd-con.nist.gov/PCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConPCD-HL7WebConcda-validation/webservice.html) - WTF is with this URL? Really? 404 **(F)**
*   National Oceanic and Atmospheric Administration Meteorological Assimilation Data Ingest System - [http://madis.noaa.gov/madis\_api\_doc.html](http://madis.noaa.gov/madis_api_doc.html) - Not really a web API. If I could find data, it would be a good facade project. **(C)**
*   **Legacy National Climatic Data Center RESTful Services -** [http://www7](http://www7).ncdc.noaa.gov/rest/ - Wouldn’t take much to build a facade for this one, so that it would be a real API. As it is, its just too confusing. Simple, but confusing. Takes talent to do that. **(C)**
*   **GIS Map Services -** [http://www.climate.gov/datasearch/](http://www.climate.gov/datasearch/) - Looks like a bunch of datasets, no real API found. Looks high value, and worthy of API, but you’d need domain expert. **(C)**
*   Severe Weather Data Inventory - [http://www.ncdc.noaa.gov/swdiws/](http://www.ncdc.noaa.gov/swdiws/) - Fairly basic interface, wouldn’t take much to turn into modern web API. Right now its just a text file, with a spec style documentation explaining what to do. Looks high value. **(B)**
*   **General National Climatatic Data Center THREDDS Data Server -** [http://www.ncdc.noaa.gov/thredds/catalog.html](http://www.ncdc.noaa.gov/thredds/catalog.html) - File store with folders and folder and folders of data. If deemed high value, it could be turned into API, but isn’t one now. **(D)**
*   **National Climatic Data Center Climate Data Online Web Services** \- [http://www.ncdc.noaa.gov/cdo-web/webservices/v2](http://www.ncdc.noaa.gov/cdo-web/webservices/v2) - Oh yeah, now we are talking. That is an API. No interactive docs, but nice clean ones, and would be some work, but could be done. **(A)**
*   **National Digital Forecast Database SOAP Web Service -** [http://graphical.weather.gov/xml/](http://graphical.weather.gov/xml/) - SOAP service. Could have a facade built turning into a web API, but would be a lot of work. Only if high value. **(D)**
*   Center for Operational Oceanographic Products and Services - [http://opendap.co-ops.nos.noaa.gov/axis/](http://opendap.co-ops.nos.noaa.gov/axis/) - SOAP service. Could have a facade built turning into a web API, but would be a lot of work. Only if high value. **(D)**
*   **Environmental Research Division's Data Access Program -** [http://coastwatch.pfeg.noaa.gov/erddap/rest.html](http://coastwatch.pfeg.noaa.gov/erddap/rest.html) - Looks like a decent web API. Wouldn’t be too much to generate a machine readable definition and make into a better API area. **(B)**
*   **Space Physics Interactive Data Resource Web Services -** [http://spidr.ngdc.noaa.gov/spidr/docs/SPIDR.REST.WSGuide.en.pdf](http://spidr.ngdc.noaa.gov/spidr/docs/SPIDR.REST.WSGuide.en.pdf) - Well its a PDF, but looks like a decent web API. It would be some work but could turn into a decide API with Swagger specs. **(B)**
*   **National Telecommunications and Information Administration -** National Broadband Map - [http://www2.ntia.doc.gov/broadband-data](http://www2.ntia.doc.gov/broadband-data) - Not an API, but dataset, with a lot of work it could be turned into a decent experience. **(C**)
*   **Patent and Trademark Office -** Trademark Status & Document Retrieval - [http://tsdr.uspto.gov/](http://tsdr.uspto.gov/) - I don’t see any API, just a web search? **(C)**
*   International Trade Administration - [http://developer.trade.gov/](http://developer.trade.gov/) - I didn’t see any API. They talk about it, but don’t see how to access. **(F)**
*   **National Weather Service -** [http://graphical.weather.gov/xml/](http://graphical.weather.gov/xml/) - SOAP service. Could have a facade built turning into a web API, but would be a lot of work. Only if high value. **(D)**
*   **Center for Operational Oceanographic Products and Services -** [http://tidesandcurrents.noaa.gov/api/](http://tidesandcurrents.noaa.gov/api/) - Fairly straightforward API, Simple. Wouldn’t be hard to generate interactive docs for it. Spec needed. **(B)**
*   **National Climate Data Center -** [](/admin/blog/<a href='http:/www.ncdc.noaa.gov/cdo-web/'>http:/www.ncdc.noaa.gov/cdo-web/</a>)[http://www.ncdc.noaa.gov/cdo-web/](http://www.ncdc.noaa.gov/cdo-web/) - Sexy site, well done. But no API. Datasets, so API could be created. Cache API. **(C)**

Next with the **Department of Defense (**[http://www.defense.gov/developer/](http://www.defense.gov/developer/))There are 8 things billed as aPIs, with a variety of datasets, API like things, and web services available.  Not really sure whats up? **(D)**

We have one by itself here:

*   **Arlington National Cemetary -** [http://www.arlingtoncemetery.mil/Developer/](http://www.arlingtoncemetery.mil/Developer/) - Pretty decent web API. Poor presentation, but well designed so it wouldn’t be hard to generate machine readable sec. **(B)**

Then the department of education who is just riding their data.gov work as API area:

*   **Department of Education -** [http://www.ed.gov/developers](http://www.ed.gov/developers) - Lots of high value datasets. Says API, but is JSON file. Wouldn’t be hard to generate APIs for it all and make machine readable definitions. **(B)**

Next some energy related efforts:

*   **Department of Energy -** [http://www.energy.gov/developers](http://www.energy.gov/developers) - Lots of datasets. Pretty presentation.  Could use some simple APIs,. Wouldn’t be much to pick high value data sets and create cache of them. **(C)**
*   **Energy Information Administration -** [http://www.eia.gov/developer/](http://www.eia.gov/developer/) - Nice web API, simple clean presentation. Needs interactive docs. **(B)**
*   **National Renewable Energy Laboratory -** [http://developer.nrel.gov/](http://developer.nrel.gov/) - Close to a modern Developer area with web APIs. Uses standardized access (umbrella). Some of them have Swagger specs, the rest would be easy to create. **(A)**
*   **Office of Scientific and Technical Information -** [http://www.osti.gov/XMLServices](http://www.osti.gov/XMLServices) - Interfaces are pretty well designed, and Swagger specs would be straightforward. But docs are all PDF currently. **(B)**

Moving on to the **Department of Health and Human Services** ([http://www.hhs.gov/developer](http://www.hhs.gov/developer)), which all of their APis are somewhat cosistent, and provide simple resources:

*   **Catalog API -** [http://www.healthdata.gov/catalog-api](http://www.healthdata.gov/catalog-api) - Simple web API. Could use swagger specs. **(B)**
*   **Content Syndication API -** [https://tools.cdc.gov/syndication/api.aspx](https://tools.cdc.gov/syndication/api.aspx) - Simple web API. Could use swagger specs. **(B)**
*   **Feed API -** [https://tools.cdc.gov/syndication/api.aspx](https://tools.cdc.gov/syndication/api.aspx) - Simple web API. Could use swagger specs. **(B)**
*   **HealthCare Finder API -** [http://finder.healthcare.gov/services](http://finder.healthcare.gov/services) - Simple web API. Could use swagger specs. **(B)**
*   **Syndication API -** [https://syndication.hhs.gov/storefront/apiDoc](https://syndication.hhs.gov/storefront/apiDoc) - Simple web API. Could use swagger specs. **(B)**
*   **Centers for Medicare and Medicaid Services -** [http://data.cms.gov/](http://data.cms.gov/) - Just the data.gov datasets, lots of opportunity. But also lots of work. **(C)**

The **Food and Drug Administration** ([](/admin/blog/<a href='http:/open.fda.gov/'>http:/open.fda.gov/</a>)[http://open.fda.gov](http://open.fda.gov)) is one of the agencies that is definitely getting on board with APIs, they have some pretty nice implementations, but there there are some not so nice ones that need a lot of work:

*   **Open FDA -** [http://open.fda.gov](http://open.fda.gov) - Nice API, nice API area. Not sure if there are machine readable specs, but definitely should be created. **(A)**
*   **National Institute on Drug Abuse -** [http://www.drugabuse.gov/developer](http://www.drugabuse.gov/developer) - Simple, straightforward API. No API definitions. Wouldn't be too difficult to make happen. (B)
*   **National Institutes of Health -** [https://federation.nih.gov/webServices.asp](https://federation.nih.gov/webServices.asp) - There are a bunch of web services presented using PDFs, and some data sets. If high value, then APIs could be built. **(C)**
*   **AIDSinfo** - [http://aidsinfo.nih.gov/api](http://aidsinfo.nih.gov/api) - Pretty straightforward web API. Needs API definition. **(B)**
*   **Basic Local Alignment Search Tool (BLAST) -** [http://blast.ncbi.nlm.nih.gov/Blast.cgi?CMD=Web&PAGE\_TYPE=BlastDocs&DOC\_TYPE=DeveloperInfo](http://blast.ncbi.nlm.nih.gov/Blast.cgi?CMD=Web&PAGE_TYPE=BlastDocs&DOC_TYPE=DeveloperInfo) - Older CGI API, but a simple facade could be created to make work. **(C)**
*   **ChemSpell -** [http://chemspell.nlm.nih.gov/spell/](http://chemspell.nlm.nih.gov/spell/) - SOAP Web service. Could be done but so much work. **(D)**
*   **ClinicalTrials.gov -** [http://clinicaltrials.gov/ct2/info/linking](http://clinicaltrials.gov/ct2/info/linking) - Pretty straightforward web API. Needs API definition. **(B)**
*   **Computational Photography Project for Pill Identification (C3PI) RxImageAccess RESTful API** - [http://rximage.nlm.nih.gov/docs/doku.php?id=imageretrieval:rootpathformat](http://rximage.nlm.nih.gov/docs/doku.php?id=imageretrieval:rootpathformat) - Well designed Web API, but pretty robust, and would take  a lot of work. **(B)**
*   **DailyMed** - [http://dailymed.nlm.nih.gov/dailymed/help.cfm](http://dailymed.nlm.nih.gov/dailymed/help.cfm) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **Digital Collections Web Service -** [http://collections.nlm.nih.gov/web\_service.html](http://collections.nlm.nih.gov/web_service.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **DIRLINE**     launch Web application - [http://dirline.nlm.nih.gov/dirlineapi/DIRLINEWebService.html](http://dirline.nlm.nih.gov/dirlineapi/DIRLINEWebService.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   Entrez Programming Utilities (E-Utilities) - [http://www.ncbi.nlm.nih.gov/books/NBK25501/](http://www.ncbi.nlm.nih.gov/books/NBK25501/) - Looks like some web services in there. Not sure what is going on. **(D)**
*   **Genetics Home Reference -** [http://ghr.nlm.nih.gov/LinkingTo](http://ghr.nlm.nih.gov/LinkingTo) - There is an XML feed. Not really robust API. But API definition wouldn’t be that difficult. **(B)**
*   **MedlinePlus Connect -** [http://www.nlm.nih.gov/medlineplus/connect/service.html](http://www.nlm.nih.gov/medlineplus/connect/service.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **MedlinePlus Health Topics -** [http://www.nlm.nih.gov/medlineplus/webservices.html](http://www.nlm.nih.gov/medlineplus/webservices.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **MetaMap** - [http://metamap.nlm.nih.gov/#MetaMapJavaApi](http://metamap.nlm.nih.gov/#MetaMapJavaApi) - 404 **(F)**
*   **NDF-RT -** [http://rxnav.nlm.nih.gov/NdfrtAPIs.html](http://rxnav.nlm.nih.gov/NdfrtAPIs.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **Pillbox beta** - [http://pillbox.nlm.nih.gov/API-documentation.html](http://pillbox.nlm.nih.gov/API-documentation.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **PMC Open Access Web Service -** [http://www.ncbi.nlm.nih.gov/pmc/tools/oa-service/](http://www.ncbi.nlm.nih.gov/pmc/tools/oa-service/) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **PMC Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH) Service -** [http://www.ncbi.nlm.nih.gov/pmc/tools/oai/](http://www.ncbi.nlm.nih.gov/pmc/tools/oai/) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **Profiles in Science -** [http://profiles.nlm.nih.gov/](http://profiles.nlm.nih.gov/) - Great resource, but I don’t see any API? **(C)**
*   **PubChem Power User Gateway (PUG) -** [http://pubchem.ncbi.nlm.nih.gov/pug/pughelp.html](http://pubchem.ncbi.nlm.nih.gov/pug/pughelp.html) - SOAP web service. Could be done, but will take work. **(D)**
*   **RxMix (beta version) -** [http://mor.nlm.nih.gov/RxMix/](http://mor.nlm.nih.gov/RxMix/) - 404 **(F)**
*   **RxNorm -** [http://rxnav.nlm.nih.gov/RxNormAPIs.html#](http://rxnav.nlm.nih.gov/RxNormAPIs.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **RxTerms** - [http://rxnav.nlm.nih.gov/RxTermsAPIs.html](http://rxnav.nlm.nih.gov/RxTermsAPIs.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **Semantic Knowledge Representation (SKR) -** [http://skr.nlm.nih.gov/SKR\_API/](http://skr.nlm.nih.gov/SKR_API/) - 404 **(F)**
*   **TOXNET** - [http://toxnet.nlm.nih.gov/toxnetapi/TOXNETWebService.html](http://toxnet.nlm.nih.gov/toxnetapi/TOXNETWebService.html) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **Unified Medical Language System (UMLS)  -** [https://uts.nlm.nih.gov/home.html#apidocumentation](https://uts.nlm.nih.gov/home.html#apidocumentation) - 404 **(F)**
*   **Value Set Authority Center (VSAC) -** [https://uts.nlm.nih.gov/home.html#apidocumentation](https://uts.nlm.nih.gov/home.html#apidocumentation) - 404 **(F)**
*   **Voyager** - [http://www.nlm.nih.gov/services/lpz3950.html](http://www.nlm.nih.gov/services/lpz3950.html) - Kinda sorta looks like an API? Not sure what to do here. **(D)**
*   **Substance Abuse and Mental Health Services Administration -** [http://store.samhsa.gov/developer](http://store.samhsa.gov/developer) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**

Next up the **Department of Homeland Security** ([http://www.dhs.gov/developer](http://www.dhs.gov/developer)), where they have three APIs (its a start):

*   **National Terrorism Advisory System –** NTAS Alerts - [http://www.dhs.gov/ntas-api-documentation](http://www.dhs.gov/ntas-api-documentation) - Kind of looks like an API, but a dataset. Would be easy to generate API. **(B)**
*   **FEMA Disaster Recovery Evacuation Route -** [http://gis.fema.gov/REST/services/FEMA/EvacRoutes/MapServer](http://gis.fema.gov/REST/services/FEMA/EvacRoutes/MapServer) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**
*   **TSA MyTSA API -** [http://www.dhs.gov/mytsa-api-documentation](http://www.dhs.gov/mytsa-api-documentation) - Fairly straightforward web api. Not good presentation. Needs API definition. **(B)**

Then we have two agencies that have pretty simple API operations, so I'll group together:

*   **Federal Emergency Management Agency -** [http://www.fema.gov/developer-resources](http://www.fema.gov/developer-resources) - Well laid out, Simple web API. Could use definition. **(B)**
*   **Department of Housing and Urban Development -** [http://www.hud.gov/developer](http://www.hud.gov/developer) - Two web APIs. Pretty unique and cool API explorer. Could easily generate API definitions. **(B)**

Then we have several API developer efforts under the **Department of Interior** ([http://www.doi.gov/developer](http://www.doi.gov/developer)):

*   **Bureau of Land Management - Geocommunicator -** [http://www.blm.gov/nils/GeoComm/home\_services.html](http://www.blm.gov/nils/GeoComm/home_services.html) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Bureau of Land Management - GGeocommunicator Map and Web Services -** [http://www.geocommunicator.gov/GeoComm/services.htm](http://www.geocommunicator.gov/GeoComm/services.htm) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **General Land Office Web Services -** [http://www.glorecords.blm.gov/WebServices/glorecords.asmx](http://www.glorecords.blm.gov/WebServices/glorecords.asmx) - SOAP service. Could have a facade built turning into a web API, but would be a lot of work. Only if high value. (**D)**
*   **Landscape ARCGIS Server -** [http://www.landscape.blm.gov/ArcGIS/rest/services](http://www.landscape.blm.gov/ArcGIS/rest/services) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Bureau of Ocean Energy Management - BOEM ARCGIS Server -** [http://gis.boemre.gov/arcgis/sdk/rest/](http://gis.boemre.gov/arcgis/sdk/rest/) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Fish and Wildlife Service - Environmental Conservation Online System web services -** [http://ecos.fws.gov/tat\_services/](http://ecos.fws.gov/tat_services/) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Fish & Wildlife Service ARCGIS Service -** [http://gis.fws.gov/arcgis/rest/services](http://gis.fws.gov/arcgis/rest/services) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Critical Habitat Portal -** [http://ecos.fws.gov/crithab/](http://ecos.fws.gov/crithab/) - See datasets, no API.  Could generate API **(C)**
*   **National Park Service -** ArcGIS Server REST API - [http://mapservices.nps.gov/arcgis/sdk/rest/index.html?query.html](http://mapservices.nps.gov/arcgis/sdk/rest/index.html?query.html) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **National Park Service -** NPMap API - [http://www.nps.gov/npmap/support/library/api/](http://www.nps.gov/npmap/support/library/api/) - NOt a web API. **(D)**
*   **US Geological Survey -** Eastern Geographic Science Center Map Web Services - [http://sscweb.gsfc.nasa.gov/WebServices/](http://sscweb.gsfc.nasa.gov/WebServices/) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **US Geological Survey -** Grand Canyon Monitoring and Research Center - [http://www.gcmrc.gov/WebService.asmx](http://www.gcmrc.gov/WebService.asmx) - SOAP service. Could have a facade built turning into a web API, but would be a lot of work. Only if high value. **(D)**
*   **Map-A-Planet: Web Map Service -** [http://www.mapaplanet.gov/explorer/help/wmsUserDoc.html](http://www.mapaplanet.gov/explorer/help/wmsUserDoc.html) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **National Atlas Web Map Services -** [http://nationalatlas.gov/infodocs/webservices.html](http://nationalatlas.gov/infodocs/webservices.html) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **NationalMap.gov Web Services -** [http://services.nationalmap.gov/](http://services.nationalmap.gov/) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **ScienceBase API -** [https://my.usgs.gov/confluence/display/sciencebase/ScienceBase+Item+Services](https://my.usgs.gov/confluence/display/sciencebase/ScienceBase+Item+Services) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Streamstats web services -** [http://streamstatsags.cr.usgs.gov/webservices/wsui.htm](http://streamstatsags.cr.usgs.gov/webservices/wsui.htm) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **Water Quality Portal Web Services -** [http://www.waterqualitydata.us/webservices\_documentation.jsp](http://www.waterqualitydata.us/webservices_documentation.jsp) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **ScienceBase Web Services -** [https://www.sciencebase.gov/catalog/items?filter0=browseCategory%3DData](https://www.sciencebase.gov/catalog/items?filter0=browseCategory%3DData) - Looks like a data portal. APIs could be generated, but not easy work. **(C)**
*   **U.S. Geological Survey -** [http://data.usgs.gov/](http://data.usgs.gov/) - Looks like a data portal. APIs could be generated, but not easy work. **(C)**

Now we have some APIS coming out of law enforcement side of government, starting with **Department of Justice** ([](/admin/blog/<a href='http:/www.justice.gov/developer'>http:/www.justice.gov/developer</a>)[http://www.justice.gov/developer](http://www.justice.gov/developer)):

*   **National Crime Victimization Survey API -** [http://www.bjs.gov/developer/ncvs/index.cfm](http://www.bjs.gov/developer/ncvs/index.cfm) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **ATF Trace Data Report API -** [https://www.atf.gov/content/About/statistics/developer](https://www.atf.gov/content/About/statistics/developer) - A Socrata Data.gov place. Lots of opportunity and work. **(C)**
*   **Bureau of Justice Statistics -** [http://www.bjs.gov/developer/](http://www.bjs.gov/developer/) - Same as Above **(B)**
*   **Office of Justice Programs -** [http://data.ojp.gov/developer/](http://data.ojp.gov/developer/) - OJP Grant Awards Data - [http://data.ojp.gov/developer/awards/index.html](http://data.ojp.gov/developer/awards/index.html) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**
*   **OJP Grant Funding Opportunities API -** [http://data.ojp.gov/services/ppi/includes/API/FundingAPI.htm](http://data.ojp.gov/services/ppi/includes/API/FundingAPI.htm) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**

Now we get to one of my favorite afforts in the federal government

*   **Department of Labor -** [http://developer.dol.gov/](http://developer.dol.gov/) - I love their developer area. They have a great API, easy to generate API definitions. **(A)**
*   **Bureau of Labor Statistics -** [http://www.bls.gov/developers/](http://www.bls.gov/developers/) - Web APIs in there. Complex, and lots of work, but can be done. API Definitions Needed. **(B)**

Next we have the API efforts from Department of State ([http://www.state.gov/developer](http://www.state.gov/developer)):

*   **Select State.gov Data (SSD) -** [http://www.state.gov/api/v1/docs/](http://www.state.gov/api/v1/docs/) - Decent API and area, would be easy to generate API definitions. **(B)**
*   **OPDS Catalog of Foreign Relations of the United States (FRUS) -** [http://history.state.gov/developer/catalog](http://history.state.gov/developer/catalog) - Decent API and area, would be easy to generate API definitions. **(B)**
*   **aoprals.state.gov -** [https://explore.data.gov/developers/docs/foreign-per-diem-rates-by-location](https://explore.data.gov/developers/docs/foreign-per-diem-rates-by-location) - Decent API and area, would be easy to generate API definitions. **(B)**
*   **Office of the Historian - State Department —** Ebook Catalog -  [http://history.state.gov/developer/catalog](http://history.state.gov/developer/catalog) - Decent API and area, would be easy to generate API definitions. **(B)**

Moving on to the **Department of Transportation** ([http://www.dot.gov/developer](http://www.dot.gov/developer)):

*   **Bureau of Transportation Statistics (BTS) Open Source Data API -** [http://transportation.jointstatistics.org/home](http://transportation.jointstatistics.org/home) - Decent API and area, would be easy to generate API definitions. **(B)**
*   **Federal Motor Carrier Safety Administration (FMCSA) SaferBus API -** [https://mobile.fmcsa.dot.gov/developer/home.page](https://mobile.fmcsa.dot.gov/developer/home.page) - Decent API and area, would be easy to generate API definitions. **(B)**
*   **Federal Railroad Administration (FRA) Safety Data APIs -** [https://safetydata.fra.dot.gov/MasterWebService/FRASafetyDataAPIs.aspx](https://safetydata.fra.dot.gov/MasterWebService/FRASafetyDataAPIs.aspx) - SOAP service. Could have a facade built turning into a web API, but would be a lot of work. Only if high value.  **(D)**
*   **Federal Aviation Administration (FAA) APIs -** [http://services.faa.gov/docs/services/](http://services.faa.gov/docs/services/) - OK API and area, would be easy to generate API definitions. **(B)**
*   **National Highway Traffic Safety Administration (NHTSA) API -** [http://www.nhtsa.gov/webapi/Default.aspx](http://www.nhtsa.gov/webapi/Default.aspx) - OK API and area, would be easy to generate API definitions. **(B)**

Now let's head over to the Department of the Treasury ([http://www.treasury.gov/developer](http://www.treasury.gov/developer)):

*   **Bureau of Engraving and Printing (BEP) - Annual Currency Production by Denomination  -** [https://explore.data.gov/developers/docs/annual-production-figures-of-united-states-currency](https://explore.data.gov/developers/docs/annual-production-figures-of-united-states-currency) - Data.gov, simple API, Easy to create API definition. **(B)**
*   **Internal Revenue Service (IRS) -  Inflow County-to-County Migration -** [https://explore.data.gov/developers/docs/irs-county-to-county-annual-migration-data-inflow-2004-2010](https://explore.data.gov/developers/docs/irs-county-to-county-annual-migration-data-inflow-2004-2010) - Data.gov, simple API, Easy to create API definition. **(B)**
*   **Internal Revenue Service (IRS) -  Outflow County-to-County Migration -** [https://explore.data.gov/developers/docs/irs-county-to-county-annual-migration-data-outflow-2004-2010](https://explore.data.gov/developers/docs/irs-county-to-county-annual-migration-data-outflow-2004-2010) - Data.gov, simple API, Easy to create API definition. **(B)**
*   **Treasury Daily Yield Curve -** [http://data.treasury.gov/feed.svc/DailyTreasuryYieldCurveRateData](http://data.treasury.gov/feed.svc/DailyTreasuryYieldCurveRateData)?$filter=month%28NEW\_DATE%29%20eq%205%20and%20year%28NEW\_DATE%29%20eq%202013 - SOAP service. Could have a facade built turning into a web API, but would be a lot of work. Only if high value. **(D)**
*   **Treasury Bill Rates -** [http://data.treasury.gov/feed.svc/DailyTreasuryBillRateData](http://data.treasury.gov/feed.svc/DailyTreasuryBillRateData)?$filter=month%28INDEX\_DATE%29%20eq%205%20and%20year%28INDEX\_DATE%29%20eq%202013 - SOAP service. Could have a facade built turning into a web API, but would be a lot of work. Only if high value. **(D)**
*   **Bureau of the Fiscal Service -** [http://treasurydirect.gov/xml/PendingAuctions.xml](http://treasurydirect.gov/xml/PendingAuctions.xml) - SOAP service. Could have a facade built turning into a web API, but would be a lot of work. Only if high value. **(D)**
*   **Bureau of the Fiscal Service -** [http://www.treasurydirect.gov/NP/debt/rss](http://www.treasurydirect.gov/NP/debt/rss) - SOAP service. Could have a facade built turning into a web API, but would be a lot of work. Only if high value. **(D)**

The Department of **Veterans Affairs** ([http://www.va.gov/developer](http://www.va.gov/developer)) has some hope, because of the work I did in the fall.

*   **VetSuccess API Web Service -** [http://vetsuccess.gov/benefits\_to\_vetsuccessgov](http://vetsuccess.gov/benefits_to_vetsuccessgov) - Never did play with this service once it was back up.  Looks like its down again. I'm assuming the gentleman who was fighting for it, left? - 404  **(F)**
*   **Nationwide Gravesite Locations API -** [https://explore.data.gov/developers/docs/veterans-burial-sites](https://explore.data.gov/developers/docs/veterans-burial-sites) - Data.gov, simple API, Easy to create API definition. **(B)**
*   **VA Facilities Locator Web Service -** [http://va-data.github.io/va-facilities/#!/facilities](http://va-data.github.io/va-facilities/#!/facilities) - Already Done.  **(A)**
*   **VA Press Releases -** [http://va-data.github.io/va-press/#!/press](http://va-data.github.io/va-press/#!/press) - Already Done.  **(A)**

Moving to another on of my favorite agencies, well quasi gov agencies:

*   **Consumer Financial Protection Bureau** \- [http://www.consumerfinance.gov/developers/](http://www.consumerfinance.gov/developers/) - Slick stuff. Nice Area. Great APIs. interactive docs. **(A)**

One agency that appears to be on radar, but I really can't tell what is going on API wise:

*   **Environmental Protection Agency -** [http://www.epa.gov/developer/](http://www.epa.gov/developer/) - There is a really nice layout to the area, with seemingly a lot of APIs, and they look like web APIs, but it looks like one API being represented as a much of methods? Would be too much work, but still hard to figure out WTF. **(C)**

The the **Federal Communications Commission** ([http://www.fcc.gov/developers](http://www.fcc.gov/developers)) has a lot of APIs going on, in various states of operation:

*   **Low Power FM (LPFM) API -** [http://www.fcc.gov/developers/lpfm-api](http://www.fcc.gov/developers/lpfm-api) - Good API and area, would be easy to generate API definitions. (B)
*   **Section 43.61 API -** [http://www.fcc.gov/developers/section-4361-api](http://www.fcc.gov/developers/section-4361-api) - Good API and area, would be easy to generate API definitions. **(B)**
*   **Public Inspection Files API -** [https://stations.fcc.gov/developer/](https://stations.fcc.gov/developer/) - 404 **(F)**
*   Accessibility Clearinghouse API - [http://ach.fcc.gov/for-developers/](http://ach.fcc.gov/for-developers/) - 404 **(F)**
*   **FCC Census Block Conversions -** [http://www.fcc.gov/developers/census-block-conversions-api](http://www.fcc.gov/developers/census-block-conversions-api) - Good API and area, would be easy to generate API definitions. **(B)**
*   **FCC Content API -** [http://www.fcc.gov/developers/fcc-content-api](http://www.fcc.gov/developers/fcc-content-api) - Good API and area, would be easy to generate API definitions. **(B)**
*   **FCC Consumer Broadband Test -** **h**ttp://www.fcc.gov/developers/consumer-broadband-test-api - Good API and area, would be easy to generate API definitions. **(B)**
*   **FCC Form 499 Filer Database API -** [http://www.fcc.gov/developers](http://www.fcc.gov/developers) - 404 **(F)**
*   **FCC Registration Number Conversions -** [http://www.fcc.gov/developers/frn-conversions-api](http://www.fcc.gov/developers/frn-conversions-api) - Good API and area, would be easy to generate API definitions. **(B)**
*   **FCC License View -** [http://www.fcc.gov/developers/license-view-api](http://www.fcc.gov/developers/license-view-api) - Good API and area, would be easy to generate API definitions. **(B)**
*   **Spectrum Dashboard -** [http://www.fcc.gov/developers/spectrum-dashboard-api](http://www.fcc.gov/developers/spectrum-dashboard-api) - Good API and area, would be easy to generate API definitions. **(B)**
*   **Broadband Map APIs -** [http://broadbandmap.gov/developer](http://broadbandmap.gov/developer) - 404 **(F)**

All by itself on the list, we have a bank one lonely bank:

*   **Federal Reserve Bank of St. Louis -** [http://api.stlouisfed.org/](http://api.stlouisfed.org/) - Good API and area, would be easy to generate API definitions. **(B)**

The **General Services Administration** ([http://www.gsa.gov/developers/](http://www.gsa.gov/developers/)) definitely is ahead of the game when it comes to API design and deployment:

*   **American Job Center Resource API -** [http://jobcenter.usa.gov/apis](http://jobcenter.usa.gov/apis) - Good API and area, would be easy to generate API definitions. **(B)**
*   **BusinessUSA Resource Access API -** [http://business.usa.gov/apis](http://business.usa.gov/apis) - Good API and area, would be easy to generate API definitions. **(B)**
*   **Citizen Topics API -** [http://www.usa.gov/About/developer-resources/social-media-registry.shtml#tags](http://www.usa.gov/About/developer-resources/social-media-registry.shtml#tags) - Good API and area, would be easy to generate API definitions. **(B)**
*   **Data Center Consolidation API -** [https://explore.data.gov/developers/docs/federal-data-center-consolidation-initiative-fdcci-data-center-closings-2010-2013](https://explore.data.gov/developers/docs/federal-data-center-consolidation-initiative-fdcci-data-center-closings-2010-2013) - Data.gov, simple API, Easy to create API definition. **(B)**
*   **FedBizOpps Documentation -** [https://www.fbo.gov/?s=generalinfo&mode=list&tab=list&tabmode=list&static=documentation](https://www.fbo.gov/?s=generalinfo&mode=list&tab=list&tabmode=list&static=documentation) - SOAP service. Could have a facade built turning into a web API, but would be a lot of work. Only if high value. **(D)**
*   **Federal Procurement Data System - FPDS API -** [https://www.fpds.gov/downloads/FPDS-Specifications-WebServices\_Integration\_Specifications\_V1.4.doc](https://www.fpds.gov/downloads/FPDS-Specifications-WebServices_Integration_Specifications_V1.4.doc) - SOAP service. Could have a facade built turning into a web API, but would be a lot of work. Only if high value. **(D)**
*   **Federal Procurement Data System -** FAADS API - [https://www.fpds.gov/downloads/FAADS/FAADS-Specifications-WebServices\_Integration\_Specifications\_V2.doc](https://www.fpds.gov/downloads/FAADS/FAADS-Specifications-WebServices_Integration_Specifications_V2.doc) - SOAP service. Could have a facade built turning into a web API, but would be a lot of work. Only if high value. **(D)**
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
*   **USASearch API -** [http://usasearch.howto.gov/manual/api.html](http://usasearch.howto.gov/manual/api.html) - 404 **(F)**

Once I reached the **National Aeronautics and Space Administration** [http://open.nasa.gov/developer](http://open.nasa.gov/developer) I found some really, really cool APIs:

*   **NASA Data API -** [http://data.nasa.gov/api-info/](http://data.nasa.gov/api-info/) - Simple API and area, would be easy to generate API definitions. **(B)**
*   Earth Observing System (EOS) Clearing House (ECHO) - [http://api.echo.nasa.gov/echo/](http://api.echo.nasa.gov/echo/) - Not a web API. Could be done, but would be a lot of work. **(D)**
*   **Heliocentric Trajectories Web Services -** [http://sscweb.gsfc.nasa.gov/WebServices/helio/](http://sscweb.gsfc.nasa.gov/WebServices/helio/) - SOAP service. Could have a facade built turning into a web API, but would be a lot of work. Only if high value. **(D)**
*   **Satellite Situation Center API -** [http://sscweb.gsfc.nasa.gov/WebServices/](http://sscweb.gsfc.nasa.gov/WebServices/) - Simple API and area, would be easy to generate API definitions. **(B)**
*   **Coordinated Data Analysis System (CDAS) Web services -** [http://cdaweb.gsfc.nasa.gov/WebServices/](http://cdaweb.gsfc.nasa.gov/WebServices/) - Simple API and area, would be easy to generate API definitions. **(B)**
*   **ExoAPI -** [http://exoapi.com/](http://exoapi.com/) - Very cool API. Definitely could have API definition. DO this one! **(B)**
*   SkyMorph/NEAT API - [http://www.asterank.com/skymorph](http://www.asterank.com/skymorph) - Simple API and area, would be easy to generate API definitions. **(B)**
*   **{MAAS} API -** [http://marsweather.ingenology.com/](http://marsweather.ingenology.com/) - Very cool API. Definitely could have API definition. DO this one! **(B)**
*   **HORIZONS API —** [http://nasa.api.niewma.com/](http://nasa.api.niewma.com/) - Nothing came up? Trash**. (F)**
*   **The Blue Marble API -** [http://bigmarbleapi.azurewebsites.net/Help](http://bigmarbleapi.azurewebsites.net/Help) - Site is currently not

Grouping a couple loose agencies together:

*   **National Archives and Records Administration -** [http://www.archives.gov/developers/](http://www.archives.gov/developers/) - Its a nice developer area, but not APIs that are theirs? **(F)**
*   **National Science Foundation - GRFP Awardees and Honorable Mentions (2000-2012) -** [https://explore.data.gov/developers/docs/nsf-grfp-awardees-and-honorable-mentions-2000-2012](https://explore.data.gov/developers/docs/nsf-grfp-awardees-and-honorable-mentions-2000-2012) - Data.gov, simple API, Easy to create API definition **(B)**
*   **NSF Funding Rate History API -** [https://explore.data.gov/developers/docs/nsf-funding-rate-history](https://explore.data.gov/developers/docs/nsf-funding-rate-history) - Data.gov, simple API, Easy to create API definition. **(B)**
*   **Nuclear Regulatory Commission -** [http://www.nrc.gov/developer.html](http://www.nrc.gov/developer.html) - There are APIs there, represented by PDFs. API Definitions and real API area could be generated. **(B)**
*   **Office of Personnel Management -** [http://www.opm.gov/developer](http://www.opm.gov/developer) - There is an API there. One for status update of DC. API Definition would be easy. **(B)**

The **Recovery Accountability and Transparency Board** ([http://www.recovery.gov/arra/FAQ/Developer/Pages/default.aspx](http://www.recovery.gov/arra/FAQ/Developer/Pages/default.aspx)) has some APIs to look at: 

*   **ARRA API -** [http://www.recovery.gov/arra/FAQ/Developer/Pages/RecoveryAPI.aspx](http://www.recovery.gov/arra/FAQ/Developer/Pages/RecoveryAPI.aspx) - Good API and area, would be easy to generate API definitions. **(B)**
*   **ArcGISARCGIS MAP API -** [http://www.recovery.gov/arra/FAQ/Developer/Pages/arcgisapi.aspx](http://www.recovery.gov/arra/FAQ/Developer/Pages/arcgisapi.aspx) - Good API and area, would be easy to generate API definitions. **(B)**

The **Small Business Administration** ([http://www.sba.gov/about-sba/sba\_performance/sba\_data\_store/web\_service\_api](http://www.sba.gov/about-sba/sba_performance/sba_data_store/web_service_api)) has some nice APIs that are consistent and well presented:

*   **Business Licenses & Permits API -** [http://www.sba.gov/about-sba/sba\_performance/sba\_data\_store/web\_service\_api/business\_licenses\_permits\_api](http://www.sba.gov/about-sba/sba_performance/sba_data_store/web_service_api/business_licenses_permits_api) - Nice API and area, would be easy to generate API definitions. **(B)**
*   **Loans & Grants Search API -** [http://www.sba.gov/about-sba/sba\_performance/sba\_data\_store/web\_service\_api/loans\_grants\_search\_api](http://www.sba.gov/about-sba/sba_performance/sba_data_store/web_service_api/loans_grants_search_api) - Nice API and area, would be easy to generate API definitions. **(B)**
*   **Recommended Sites API -** [http://www.sba.gov/about-sba/sba\_performance/sba\_data\_store/web\_service\_api/recommended\_sites\_api](http://www.sba.gov/about-sba/sba_performance/sba_data_store/web_service_api/recommended_sites_api) - Nice API and area, would be easy to generate API definitions. **(B)**
*   **U.S. City and County Web Data API -** [http://www.sba.gov/about-sba/sba\_performance/sba\_data\_store/web\_service\_api/u\_s\_city\_and\_county\_web\_data\_api](http://www.sba.gov/about-sba/sba_performance/sba_data_store/web_service_api/u_s_city_and_county_web_data_api) - Nice API and area, would be easy to generate API definitions. **(B)**
*   **Content Share API -** [http://www.sba.gov/about-sba/sba\_performance/sba\_data\_store/web\_service\_api/content\_share\_api](http://www.sba.gov/about-sba/sba_performance/sba_data_store/web_service_api/content_share_api) - Nice API and area, would be easy to generate API definitions. **(B)**
*   **Lender Search API -** [http://www.sba.gov/content/lender-search-api](http://www.sba.gov/content/lender-search-api) - Nice API and area, would be easy to generate API definitions. **(B)**

Lasty, we have a couple of loose agencies to look at (or not):

*   **Social Security Administration -** [http://www.ssa.gov/developer](http://www.ssa.gov/developer) - 404 on their APIs **(F)**
*   **U.S. Agency for International Development -** Development Experience Clearinghouse API - [http://www.usaid.gov/developer/development-experience-clearinghouse-dec-api](http://www.usaid.gov/developer/development-experience-clearinghouse-dec-api) - Nice API and area, would be easy to generate API definitions. **(B)**

Ok that was it. I know there are more APIs to look at, but this is derived from the master list of federal government developer portals. This gives me what I need. Although, I'm a little disappointed I have less than 5 Swagger definitions, after looking at about 190 APIs. 

After looking at all of this, I'm overwhelmed. How do you solve API discovery for a mess like this? Holy shit!

I really need my fucking head examined for taking this shit on. I really am my own worst enemy, but I love it. I am obsessed with contributing to a solution for API discovery that will work in private sector, as well as a public sector mess like this. So where the hell do I start?  More to come on that soon...