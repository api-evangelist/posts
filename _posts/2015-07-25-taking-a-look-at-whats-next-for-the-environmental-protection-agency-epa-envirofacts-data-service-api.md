---
layout: post
title: >-
  Taking A Look At Whats Next For The Environmental Protection Agency (EPA)
  Envirofacts Data Service API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/280px-Environmental_Protection_Agency_logo.svg.png
author:
  name: kinlane
tags:
  - Data
  - Environment
  - Agency
---
[![EPA](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/280px-Environmental_Protection_Agency_logo.svg.png)](http://www.epa.gov/)

I was asked by folks at the [Environmental Protection Agency (EPA)](http://www.epa.gov/enviro/facts/services.html) to provide some feedback on the [Envirofacts Data Service API](http://www.epa.gov/enviro/facts/services.html), as they prepare to work on the next iteration. I took a quick glance at the landing page for their service, I saw a simple URL layout showing how to make API calls, and made an estimate that it would take me probably an hour or two (at the most) to profile the API.

As I dug into the process of profiling the Envirofacts Data Service API one evening in May, I realized I was wrong about the scope of the API, and became unsure how long it would actually take me. Then this work got lost in the shuffle of my summer, and is something I only recently picked up. I'm not happy if I can't provide an agency with some direction on where to go next, and after about 12 hours of work, I think I have some valuable feedback that they can run with.

[The Envirofacts Data Service API program consists of a single landing page](http://www.epa.gov/enviro/facts/services.html), with an overview of how to use the API, and a myriad of pages below, that explain the underlying data model put to use. [The API is what I consider a very resource driven API design, meaning it reflects the database resource it came from, and not much emphasis on how the API driven resources will be used](http://apievangelist.com/2015/07/22/an-example-of-resource-based-api-design-over-at-the-envirofacts-data-service-api/).

While the API does use the URL, it uses few of the other HTTP components that make some RESTful. I can see how the design would make sense to a database engineer, but will be a little confusing for API developers.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/epa-envirofacts-api-base-url.gif)[After looking beyond this portal I have since found other possible APIs,](http://developer.epa.gov/) but honestly they are often even more incoherent than the Envirofacts Data Service API. I'm not trying to review the entire EPA API efforts, and will be specifically focusing on the resources available in the Envirofacts Data Service API for this round.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/280px-Environmental_Protection_Agency_logo.svg.png)](http://www.epa.gov/)

[**Environmental Protection Agency**](http://www.epa.gov/)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.epa.gov/ "Website")

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-portal-developers.jpg)](http://www.epa.gov/developer/ "Portal")

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-a.png)](http://theapistack.com/data/environmental-protection-agency/apis.json "APIs.json")

 

EPA Air Facility System (AFS) API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.epa.gov/enviro/facts/afs/ "Website")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://www.epa.gov/enviro/facts/afs/model.html "Documentation")

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/environmental-protection-agency/epa-air-facility-system-afs-api-swagger.json "Swagger")

 

 

EPA Biennial Report API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.epa.gov/enviro/facts/br/ "Website")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://www.epa.gov/enviro/facts/br/model.html "Documentation")

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/environmental-protection-agency/epa-biennial-report-api-swagger.json "Swagger")

 

 

EPA Comprehensive Environmental Response, Compensation, and Liability Information System API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.epa.gov/enviro/facts/cerclis/model.html "Website")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://www.epa.gov/enviro/html/fii/model.html "Documentation") 

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/environmental-protection-agency/epa-comprehensive-environmental-response-compensation-and-liability-information-system-api-swagger.json "Swagger")

 

 

EPA Facility Registry System API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.epa.gov/enviro/html/fii/index.html "Website")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://www.epa.gov/enviro/html/fii/model.html "Documentation")

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/environmental-protection-agency/epa-facility-registry-system-api-swagger.json "Swagger")

 

 

EPA Greenhouse Gas API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.epa.gov/enviro/facts/ghg/ "Website")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://www.epa.gov/enviro/facts/ghg/model.html "Documentation")

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/environmental-protection-agency/epa-greenhouse-gas-api-swagger.json "Swagger")

 

 

EPA Integrated Grants Management System API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.epa.gov/enviro/facts/igms/ "Website")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://www.epa.gov/enviro/facts/igms/model.html "Documentation")

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/environmental-protection-agency/epa-integrated-grants-management-system-api-swagger.json "Swagger")

 

 

EPA Locational information API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.epa.gov/enviro/html/locational/index.html "Website")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://www.epa.gov/enviro/html/locational/lrt/model.html "Documentation")

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/environmental-protection-agency/epa-locational-information-api-swagger.json "Swagger")

 

 

EPA Permit Compliance System API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.epa.gov/enviro/facts/pcs-icis/ "Website")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://www.epa.gov/enviro/facts/pcs-icis/pcsmodel.html "Documentation")

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/environmental-protection-agency/epa-permit-compliance-system-api-swagger.json "Swagger")

 

 

EPA Radiation Ambient Monitoring API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.epa.gov/enviro/facts/radnet/ "Website")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://www.epa.gov/enviro/facts/radnet/model.html "Documentation")

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/environmental-protection-agency/epa-radiation-ambient-monitoring-api-swagger.json "Swagger")

 

 

EPA Radiation Information Database API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.epa.gov/enviro/facts/radinfo/index.html "Website")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://www.epa.gov/enviro/facts/radinfo/model.html "Documentation")

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/environmental-protection-agency/epa-radiation-information-database-api-swagger.json "Swagger")

 

 

EPA Resource Conservation and Recovery Act Information API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.epa.gov/enviro/facts/rcrainfo/ "Website")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://www.epa.gov/enviro/facts/rcrainfo/model.html "Documentation")

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/environmental-protection-agency/epa-resource-conservation-and-recovery-act-information-api-swagger.json "Swagger")

 

 

EPA Safe Drinking Water Information System API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.epa.gov/enviro/facts/sdwis/ "Website")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://www.epa.gov/enviro/facts/sdwis/model.html "Documentation")

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/environmental-protection-agency/epa-safe-drinking-water-information-system-api-swagger.json "Swagger")

 

 

EPA Toxics Release Inventory API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-home-icon.jpeg)](http://www.epa.gov/enviro/facts/tri/ "Website")

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://www.epa.gov/enviro/facts/tri/model.html "Documentation")

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/environmental-protection-agency/epa-toxics-release-inventory-api-swagger.json "Swagger")

 

After I discovered the 411 tables across these 13 groups, and learned the common URL pattern for querying, I decided to define each table as its own endpoint, rather than relying on each table to be included via a {table} path parameter, I opted to hard code it. Even though most of them are incoherent, some still articulate a little bit more about what they resource might do, and once you make a request, you get an even better idea. All of this can go a long way towards helping people understand what is going on.

It wouldn't take much to apply a coherent summary  to each endpoint that describes what is stored in the table for use. Once I had a list of all tables, I went ahead and made a call to each of the 411 endpoints in the 13 areas, and generated a Swagger API definition for each. [Using Charles Proxy I was able to generate the underlying data model for each](http://apievangelist.com/2015/06/21/parsing-charles-proxy-exports-to-generate-swagger-definitions-while-also-linking-them-to-each-path/), which is necessary for generating SDKs, and can be used as a central truth throughout other aspects of API integration. The current API design also allows you pass in a field, and apply an operator against it when searching--I opted to leave this out of this iteration, until I had a clear diction of endpoints, and the underlying data model defined for each.  The API is perfectly usable without this.

**Keeping Things Simple**  
My recommendation for any future API release out of the EPA team would be focused on just simplifying things. When you land on the home page, you get the idea there is an API present, but you do not grasp the depth of the resource. A simple list of the various API groups is important. A list that I hydrated from the acronyms, to better demonstrate what lies beneath. Calling things by their actual names just makes things more intuitive. You need to reach out of your government silos. I had to really work hard to make sense of the data model at play, I was sure there would be a meta API or download allowing me to quickly understand things, but I couldn't find it. By creating Swagger definitions for all API endpoints, complete with associated definitions for the data model, I can now easily build querying, filtering, and other mechanisms into my clients. 

**Speaking In Plain English**  
While FRS\_PROGRAM\_FACILITY may had made sense to the database administrator when naming the original, it does not adequately describe the resource it is serving up. A big part of the next version for these APIs needs to focus on renaming towards more meaningful endpoints over the cryptic table names, and more descriptive fields for each of the underlying data definitions. After crafting the Swagger definitions for these APIs I am blown away by the amount of information in here, obfuscated by the cryptic database naming conventions.

**Wrap In A Clean Portal**  
The current landing page for the Envirofacts API is fairly cluttered, and ultimately doesn't say much--it made me work to hard to get what I need. My goal was to distill down the 13 APIs I found buried in the Envirofacts API page, and expose exactly what you need to understand and get to work using any of the 13 APIs and the over 400 endpoints--nothing more.  [I started with a simple Github Pages hosted template, with a single APIs.json home page, and interactive documentation for each of the APIs](http://epa-envirofacts.apievangelist.com/) (which you can fork).

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/280px-Environmental_Protection_Agency_logo.svg.png)](http://theapistack.com/environmental-protection-agency/apis.json "Environmental Protection Agency")**[Environmental Protection Agency](http://theapistack.com/environmental-protection-agency/apis.json "Environmental Protection Agency") ([apis.json](http://theapistack.com/environmental-protection-agency/apis.json "Environmental Protection Agency"))**  
The United States Environmental Protection Agency (EPA or sometimes USEPA) is an agency of the U.S. federal government which was created for the purpose of protecting human health and the environment by writing and enforcing regulations based on laws passed by Congress. The EPA was proposed by President Richard Nixon and began operation on December 2, 1970, after Nixon signed an executive order. The order establishing the EPA was ratified by committee hearings in the House and Senate. The agency is led by its Administrator, who is appointed by the president and approved by Congress. The current administrator is Gina McCarthy. The EPA is not a Cabinet department, but the administrator is normally given cabinet rank.

**APIs**

* * *

**[EPA Air Facility System (AFS) API](http://www.epa.gov/enviro/facts/afs/model.html)**

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://epa-envirofacts.apievangelist.com/docs.html?swagger=/swagger/epa-air-facility-system-afs-api-swagger.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://epa-envirofacts.apievangelist.com/swagger/epa-air-facility-system-afs-api-swagger.json)

* * *

**[EPA Biennial Report API](http://www.epa.gov/enviro/facts/br/model.html)**

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://epa-envirofacts.apievangelist.com/docs.html?swagger=/swagger/epa-biennial-report-api-swagger.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://epa-envirofacts.apievangelist.com/swagger/epa-biennial-report-api-swagger.json)

* * *

**[EPA Environmental Response, Compensation, and Liability Information API](http://www.epa.gov/enviro/facts/cerclis/model.html)**

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://epa-envirofacts.apievangelist.com/docs.html?swagger=/swagger/epa-comprehensive-environmental-response-compensation-and-liability-information-system-api-swagger.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://epa-envirofacts.apievangelist.com/swagger/epa-comprehensive-environmental-response-compensation-and-liability-information-system-api-swagger.json)

* * *

**[EPA Facility Registry System API](http://www.epa.gov/enviro/html/fii/model.html)**

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://epa-envirofacts.apievangelist.com/docs.html?swagger=/swagger/epa-facility-registry-system-api-swagger.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://epa-envirofacts.apievangelist.com/swagger/epa-facility-registry-system-api-swagger.json)

* * *

**[EPA Greenhouse Gas API](http://www.epa.gov/enviro/facts/ghg/model.html)**

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://epa-envirofacts.apievangelist.com/docs.html?swagger=/swagger/epa-greenhouse-gas-api-swagger.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://epa-envirofacts.apievangelist.com/swagger/epa-greenhouse-gas-api-swagger.json)

* * *

**[EPA Integrated Grants Management System API](http://www.epa.gov/enviro/facts/igms/model.html)**

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://epa-envirofacts.apievangelist.com/docs.html?swagger=/swagger/epa-integrated-grants-management-system-api-swagger.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://epa-envirofacts.apievangelist.com/swagger/epa-integrated-grants-management-system-api-swagger.json)

* * *

**[EPA Locational information API](http://www.epa.gov/enviro/html/locational/lrt/model.html)**

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://epa-envirofacts.apievangelist.com/docs.html?swagger=/swagger/epa-locational-information-api-swagger.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://epa-envirofacts.apievangelist.com/swagger/epa-locational-information-api-swagger.json)

* * *

**[EPA Permit Compliance System API](http://www.epa.gov/enviro/facts/pcs-icis/pcsmodel.html)**

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://epa-envirofacts.apievangelist.com/docs.html?swagger=/swagger/epa-permit-compliance-system-api-swagger.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://epa-envirofacts.apievangelist.com/swagger/epa-permit-compliance-system-api-swagger.json)

* * *

**[EPA Radiation Ambient Monitoring API](http://www.epa.gov/enviro/facts/radnet/model.html)**

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://epa-envirofacts.apievangelist.com/docs.html?swagger=/swagger/epa-radiation-ambient-monitoring-api-swagger.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://epa-envirofacts.apievangelist.com/swagger/epa-radiation-ambient-monitoring-api-swagger.json)

* * *

**[EPA Radiation Information Database API](http://www.epa.gov/enviro/facts/radinfo/model.html)**

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://epa-envirofacts.apievangelist.com/docs.html?swagger=/swagger/epa-radiation-information-database-api-swagger.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://epa-envirofacts.apievangelist.com/swagger/epa-radiation-information-database-api-swagger.json)

* * *

**[EPA Resource Conservation and Recovery Act Information API](http://www.epa.gov/enviro/facts/rcrainfo/model.html)**

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://epa-envirofacts.apievangelist.com/docs.html?swagger=/swagger/epa-resource-conservation-and-recovery-act-information-api-swagger.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://epa-envirofacts.apievangelist.com/swagger/epa-resource-conservation-and-recovery-act-information-api-swagger.json)

* * *

**[EPA Safe Drinking Water Information System API](http://www.epa.gov/enviro/facts/sdwis/model.html)**

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://epa-envirofacts.apievangelist.com/docs.html?swagger=/swagger/epa-safe-drinking-water-information-system-api-swagger.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://epa-envirofacts.apievangelist.com/swagger/epa-safe-drinking-water-information-system-api-swagger.json)

* * *

**[EPA Toxics Release Inventory API](http://www.epa.gov/enviro/facts/tri/model.html)**

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-list.png)](http://epa-envirofacts.apievangelist.com/docs.html?swagger=/swagger/epa-toxics-release-inventory-api-swagger.json)

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://epa-envirofacts.apievangelist.com/swagger/epa-toxics-release-inventory-api-swagger.json)

* * *

With my new portal, you get the overview of the EPA API, with link to each API, but I also use the Swagger definition to generate Swagger interactive documentation, rather than sending you to the EPA data model page. This is just the start. I can also use Swagger to generate sandbox environments, cloning APIs, and maybe allowing for updates and changes. I could also use the Swagger to generate client libraries for EPA APIs using [APIMATIC](https://apimatic.io/). [I'll add all of this to the roadmap, I think I have done enough work for now, and ready to hand things back to EPA](http://epa-envirofacts.apievangelist.com/roadmap/).

I'd like to see EPA consider some of the [common building blocks](http://management.apievangelist.com/building-blocks.html) I recommend as part of [my default developer portal](http://api-portal.apievangelist.com/). You don't have to do everything, but the more you do to engage the public around your API, the more chances they will actually use it. Additionally if you go through all APIs, and translate everything from databaseze to English, the potential someone will build on it will exponentially increase.

**Continue On The API Journey At EPA**  
Beyond the portal, and better describing the APIs, my advice is to just continue on the API journey at EPA--this is where the learnings come from. On the current Envirofacts API page, there is another API in addition to the Envirofacts Data Service API, the UV Index API. I can tell the thinking that went into this, are the beginning steps of more experience based API design, focusing on how the API will be used. There is still a lot of the same design mistakes in crafting URLs for this API, but I can tell the desire is there to continue improving on the original design.

When you look at the [Envirofacts Multi-system Search](http://www.epa.gov/enviro/facts/multisystem.html), and the [widgets that are present](http://www.epa.gov/enviro/facts/widgets.html), you also see some serious thought put into usability--this needs to be applied to the API design. The API is for other developers, but you can assist them in better understanding the potential through better API design.

I haven't changed anything with the current EPA Envirofacts Data Service API, I just worked to understand how it works, profiled each service I found as a Swagger definition, [and then brought them all together as a single APIs.json driven collection](http://epa-envirofacts.apievangelist.com/apis.json). This process helped me understand the 13 APIs and 400+ endpoints, while also distilling this definition into a set of machine readable index, that I use to [drive the Github Page developer portal I launched](http://epa-envirofacts.apievangelist.com/). APIs.json drives the home page, and each APIs Swagger definition drives its associated interactive documentation.

When it comes to the next iteration of the EPA Envirofacts Data Service API, I'd focus on a simple, concise portal for supporting developers, complete with the common building blocks found in other leading API platforms. I would also focus on taking the API definitions I've created, and get to work humanizing the design of these 13 APIs, and 400+ endpoints. Make the endpoints intuitive, standardize your approach to query, and pagination based upon other leading approaches established by API architects. Then do the dirty work of humanizing the underlying definitions, field names, and descriptions. Think deeply about both the request and response structure, and make it speak to developers--your simple, intuitive portal, with the right building blocks will provide a potential feedback look for this cycle (if you do it right).

If you do this, then get to work generating some SDKs, setup some monitors with [API Science](http://apiscience.com) or [Runscope](http://runscope.com), and provide [Postman Collections](https://www.getpostman.com/docs/collections) for your API consumers, and  get busy evangelizing that these APIs even exist--the API will get used. There is a lot of value present here, it just needs to be brought out, polished, and presented in a way that showcases the hard work going on at EPA.