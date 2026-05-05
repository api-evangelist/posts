---
layout: post
title: "A Roundup of US Federal Agencies and Their APIs"
date: 2026-05-05
author: "Kin Lane"
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/john-wayne-the-searchers-white-house-close-up.jpg
category: "Blog"
tags:
  - Federal Government
  - APIs
  - Roundup
  - APIs.json
excerpt: "I've spent the better part of two decades inventorying public APIs across the U.S. federal government, and the catalog has grown to a point where it deserves its own roundup. There are 211 agencies in this snapshot, ranging from cabinet departments down through bureaus, independent commissions, inspectors general, and the research labs and museums that quietly publish some of the most useful data in Washington."
---

[I've spent the better part of two decades inventorying public APIs across the U.S. federal government](https://apievangelist.com/2022/10/29/taking-another-look-at-the-state-of-apis-and-data-across-us-federal-agencies/), and the catalog has grown to a point where it deserves its own roundup. What follows is the current state of that catalog: every federal agency I'm tracking that exposes some kind of public-facing API, RSS feed, open-data surface, or referenced internal system, indexed in machine-readable form as APIs.yml in a dedicated GitHub repository under [github.com/api-evangelist](https://github.com/api-evangelist). Each entry below links to that repository so you can pull the structured index, the controlled vocabulary, and where applicable the OpenAPI specs.

There are **211 agencies** in this snapshot, ranging from cabinet departments down through bureaus, independent commissions, inspectors general, and the research labs and museums that quietly publish some of the most useful data in Washington. The list is alphabetical, not hierarchical — the federal org chart is a fiction APIs don't respect anyway. If an agency is missing or an API has moved, the issues queue on each repo is the right place to flag it.

---

## Administration for Community Living (ACL)

**Repository:** [https://github.com/api-evangelist/administration-for-community-living-acl-](https://github.com/api-evangelist/administration-for-community-living-acl-)

The Administration for Community Living (ACL) is part of the United States Department of Health and Human Services. ACL works to maximize the independence, well-being, and health of older adults, people with disabilities across the lifespan, and their families and caregivers. The agency administers the Older Americans Act programs, supports disability services through centers for independent living, and maintains the AGing, Independence, and Disability (AGID) Program Data Portal providing publicly accessible datasets on aging and disability programs. ACL also operates the National Institute on Disability, Independent Living and Rehabilitation Research (NIDILRR).

**APIs and surfaces:**

- [AGID Program Data Portal](https://agid.acl.gov/) — The AGing, Independence, and Disability (AGID) Program Data Portal provides publicly accessible data from programs funded under the Older Americans Act and related disability programs. Datasets include the American Co...

---

## Administration for Native Americans (ANA)

**Repository:** [https://github.com/api-evangelist/administration-for-native-americans-ana-](https://github.com/api-evangelist/administration-for-native-americans-ana-)

The Administration for Native Americans (ANA) is an agency within the Administration for Children and Families (ACF), U.S. Department of Health and Human Services. ANA promotes self-sufficiency and cultural preservation for Native Americans, Alaska Natives, Native Hawaiians, and other Pacific Islander communities by providing social and economic development opportunities through financial assistance, training, and technical assistance. ANA administers a $45 million discretionary grant program in three primary areas: Social and Economic Development Strategies (SEDS), Native Language Preservation and Maintenance, and Environmental Regulatory Enhancement. ANA data on funded projects is publicly available through data.gov and healthdata.gov.

**APIs and surfaces:**

- [ANA Projects Report Dataset](https://catalog.data.gov/dataset/administration-for-native-americans-ana-projects-report) — The ANA Projects Report dataset provides results and impact analysis for ANA-funded projects in Native American communities. Available through the data.gov and healthdata.gov catalogs, the dataset includes project sum...

---

## Administrative Conference of the United States

**Repository:** [https://github.com/api-evangelist/administrative-conference-of-the-united-states](https://github.com/api-evangelist/administrative-conference-of-the-united-states)

The Administrative Conference of the United States (ACUS) is an independent federal agency within the executive branch whose statutory mission is to identify ways to improve the procedures by which federal agencies administer regulatory, benefit, and other government programs. ACUS issues approximately a dozen recommendations per year to agencies, Congress, the President, and the Judicial Conference, aimed at enhancing efficiency and fairness in administrative procedures. The agency maintains the Federal Administrative Adjudication Database (with Stanford Law School), the Equal Access to Justice Act (EAJA) online database, and various open data resources under the Foundations for Evidence-Based Policymaking Act of 2018.

**APIs and surfaces:**

- [Equal Access to Justice Act (EAJA) Database](https://www.acus.gov/data) — ACUS maintains an online database of Equal Access to Justice Act (EAJA) awards, tracking awards of attorney's fees and other costs against the United States government. ACUS collects and reports this information to Co...
- [Federal Administrative Adjudication Database](https://acus.gov/recommendations) — A joint project between ACUS and Stanford Law School, the Federal Administrative Adjudication Database provides comprehensive data on federal agency adjudication processes across the U.S. government. The database trac...

---

## Administrative Office of the U.S. Courts

**Repository:** [https://github.com/api-evangelist/administrative-office-of-the-u-s-courts](https://github.com/api-evangelist/administrative-office-of-the-u-s-courts)

The Administrative Office of the United States Courts is the administrative agency of the United States federal court system, established in 1939. It provides legislative, administrative, legal, financial, management, program, and information technology support services to the federal courts. The agency operates PACER (Public Access to Court Electronic Records), which provides programmatic access to case and docket information from Federal Appellate, District, and Bankruptcy courts via the PACER Authentication API and PACER Case Locator (PCL) REST API. The agency also provides CM/ECF developer resources for building tools that interface with the Case Management and Electronic Case Filing system.

**APIs and surfaces:**

- [PACER Authentication API](https://pacer.uscourts.gov/help/pacer/pacer-authentication-api-user-guide) — The PACER Authentication API allows users to authenticate automatically and without a user interface, facilitating programmatic access for automated systems to court records. Users provide PACER credentials to receive...
- [PACER Case Locator (PCL) API](https://pacer.uscourts.gov/help/pacer/pacer-case-locator-pcl-api-user-guide) — The PACER Case Locator (PCL) API is a REST API providing programmatic access to a nationwide index of federal court cases across all Federal Appellate, District, and Bankruptcy courts. Supports both immediate searches...

---

## Agency for Toxic Substances and Disease Registry

**Repository:** [https://github.com/api-evangelist/agency-for-toxic-substances-and-disease-registry](https://github.com/api-evangelist/agency-for-toxic-substances-and-disease-registry)

ATSDR protects communities from harmful health effects related to exposure to natural and man-made hazardous substances. It is a federal public health agency within the U.S. Department of Health and Human Services. ATSDR provides toxicological profiles, minimum risk levels, substance priority rankings, and exposure investigation data for hazardous chemicals.

**APIs and surfaces:**

- [ATSDR Toxic Substance Profiles API](https://www.atsdr.cdc.gov/substances/index.asp) — Access ATSDR toxicological profiles, minimum risk levels (MRLs), substance priority list rankings, and exposure investigation data for hazardous chemicals found at Superfund sites and in the environment.

---

## Agricultural Marketing Service

**Repository:** [https://github.com/api-evangelist/agricultural-marketing-service](https://github.com/api-evangelist/agricultural-marketing-service)

The Agricultural Marketing Service (AMS), an agency of the United States Department of Agriculture (USDA), oversees programs in five commodity areas: cotton and tobacco, dairy, fruits and vegetables, livestock and seeds, and poultry. AMS provides testing, standardization, grading, and market news services. AMS operates several public APIs for agricultural market data including the Market Analysis Reporting System (MARS) API for real-time commodity market news and the Livestock Mandatory Price Reporting System (LMPRS) API for livestock price data.

**APIs and surfaces:**

- [USDA AMS MARS API (MyMarketNews)](https://mymarketnews.ams.usda.gov/mymarketnews-api) — The Market Analysis Reporting System (MARS) API provides programmatic access to USDA AMS agricultural market news data. The API allows users to automatically pull raw market news data including commodity prices, volum...
- [USDA AMS LMPRS API (Livestock Mandatory Price Reporting)](https://mpr.datamart.ams.usda.gov/) — The Livestock Mandatory Price Reporting System (LMPRS) API provides programmatic access to federally mandated livestock price report data. The API requires no authentication for public access and returns JSON data. Th...
- [USDA Local Food Directories API](https://www.usdalocalfoodportal.com/fe/datasharing/) — The USDA Local Food Directories API provides data sharing access to directory information for farmers markets, food hubs, on-farm markets, community supported agriculture (CSA) operations, and food cooperatives across...

---

## Agricultural Statistics Service

**Repository:** [https://github.com/api-evangelist/agricultural-statistics-service](https://github.com/api-evangelist/agricultural-statistics-service)

The National Agricultural Statistics Service (NASS) is an agency of the United States Department of Agriculture (USDA) whose mission is to support the United States, its agricultural sector, and rural communities by providing accurate, objective, and meaningful statistical information and services. NASS operates the QuickStats API for programmatic access to agricultural survey and census data, as well as geospatial APIs for cropland data, vegetation conditions, and crop moisture monitoring covering the continental United States.

**APIs and surfaces:**

- [USDA NASS QuickStats API](https://quickstats.nass.usda.gov/api) — The QuickStats API provides direct programmatic access to the statistical information contained in the NASS Quick Stats database, covering official published aggregate estimates related to U.S. agricultural production...
- [USDA NASS CroplandCROS API](https://www.nass.usda.gov/developer/index.php) — The CroplandCROS API provides access to the Cropland Data Layer (CDL), a crop-specific land cover data layer with 30-meter spatial resolution covering the continental United States. Historical CDL data is available ba...
- [USDA NASS VegScape API](https://www.nass.usda.gov/developer/index.php) — The VegScape API delivers vegetation condition indices at 250-meter spatial resolution covering the continental United States. Data includes daily and weekly vegetation index composites available since 2000.
- [USDA NASS Crop CASMA API](https://www.nass.usda.gov/developer/index.php) — The Crop CASMA API provides programmatic access to crop vegetation and soil moisture conditions using NASA SMAP and MODIS satellite data for agricultural drought monitoring and crop condition analysis.

---

## Air Force Reserve

**Repository:** [https://github.com/api-evangelist/air-force-reserve](https://github.com/api-evangelist/air-force-reserve)

The Air Force Reserve (AFRC) is the reserve component of the United States Air Force, headquartered at Robins Air Force Base, Georgia. It provides trained units and individuals to be available for active duty in time of war, national emergency, or when otherwise authorized by law. Air Force Reserve members serve part-time, typically one weekend per month and two weeks per year, while maintaining civilian careers. AFRC does not currently provide a public developer API but offers digital recruitment and informational resources.

**APIs and surfaces:**

- [Air Force Reserve Command](https://www.afrc.af.mil/) — Air Force Reserve Command (AFRC) provides information on reserve programs, career opportunities, unit locations, benefits, and recruiting resources for prospective and current reservists.

---

## Alcohol and Tobacco Tax and Trade Bureau

**Repository:** [https://github.com/api-evangelist/alcohol-and-tobacco-tax-and-trade-bureau](https://github.com/api-evangelist/alcohol-and-tobacco-tax-and-trade-bureau)

The Alcohol and Tobacco Tax and Trade Bureau (TTB), statutorily named the Tax and Trade Bureau, is a bureau of the United States Department of the Treasury. TTB regulates and collects federal excise taxes on alcohol, tobacco, firearms, and ammunition. The bureau enforces Federal laws and regulations related to alcohol and tobacco products, issues permits for producers, importers, and wholesalers, approves label applications for alcohol beverages, and provides open data on tax collections, permit holders, and approved product labels. TTB administers approximately $20 billion in annual federal excise tax collections from the alcohol and tobacco industries.

**APIs and surfaces:**

- [TTB Open Data API](https://www.ttb.gov/open-government/open-data) — The TTB Open Data API provides programmatic access to TTB statistical and regulatory datasets via the Socrata Open Data API (SODA). Available datasets include alcohol beverage tax collections by commodity and state, f...
- [TTB COLA Registry](https://www.ttb.gov/labeling/cola-registry) — The TTB Public COLA (Certificate of Label Approval) Registry provides access to approved alcohol beverage labels. Users and industry members can search for approved labels by product type, brand name, filer name, and...
- [TTB Permits Online](https://www.ttb.gov/permitting/permits-online) — TTB Permits Online is the electronic portal for applying for and managing federal basic permits, brewer's notices, distilled spirits plant permits, and tobacco permits. The system allows industry members to submit per...

---

## American Battle Monuments Commission

**Repository:** [https://github.com/api-evangelist/american-battle-monuments-commission](https://github.com/api-evangelist/american-battle-monuments-commission)

The American Battle Monuments Commission (ABMC), established by Congress in 1923, commemorates the service, achievements, and sacrifice of U.S. Armed Forces. ABMC administers and maintains 26 American military cemeteries and 31 memorials, monuments, and markers on foreign soil. The commission maintains a searchable database of more than 200,000 fallen service members buried or commemorated abroad, accessible via the We Remember burial search portal. ABMC is working on a data roadmap to provide open datasets on data.gov per the Foundations for Evidence-based Policymaking Act (2019).

**APIs and surfaces:**

- [ABMC We Remember Burial Search](https://weremember.abmc.gov/) — The ABMC We Remember portal provides a searchable database of more than 200,000 fallen U.S. service members buried or commemorated at American military cemeteries abroad. Includes World War II Registry and Korean War...

---

## AmeriCorps

**Repository:** [https://github.com/api-evangelist/americorps](https://github.com/api-evangelist/americorps)

AmeriCorps is a federal agency that engages millions of Americans in service to their communities through programs including AmeriCorps State and National, AmeriCorps VISTA, AmeriCorps NCCC, AmeriCorps Seniors, and the Volunteer Generation Fund. Established in 1993 under the Corporation for National and Community Service (CNCS), AmeriCorps addresses critical community needs in education, disaster response, environmental conservation, economic opportunity, and healthy futures. The agency operates the AmeriCorps Open Data portal (data.americorps.gov) providing programmatic access to research, evaluation, and program data via the Socrata Open Data API (SODA).

**APIs and surfaces:**

- [AmeriCorps Open Data SODA API](https://data.americorps.gov) — The AmeriCorps Open Data portal provides programmatic access to AmeriCorps research, evaluation, and program datasets via the Socrata Open Data API (SODA). The portal includes datasets on program outcomes, member expe...

---

## Animal and Plant Health Inspection Service

**Repository:** [https://github.com/api-evangelist/animal-and-plant-health-inspection-service](https://github.com/api-evangelist/animal-and-plant-health-inspection-service)

USDA's Animal and Plant Health Inspection Service (APHIS) protects the health and value of U.S. agriculture and natural resources by safeguarding against agricultural pests and diseases, ensuring the welfare of animals, and supporting sustainable agricultural practices. APHIS provides digital services including the eFile permitting system for import/export permits, the Agricultural Commodity Import Requirements (ACIR) portal, a geospatial hub for spatial analysis, data visualization tools, and open datasets via data.gov.

**APIs and surfaces:**

- [APHIS Public Search Tool](https://aphis.my.site.com/PublicSearchTool/s/) — The APHIS Public Search Tool provides public access to search APHIS program data, permits, and regulatory information related to animal and plant health programs.
- [APHIS eFile Permitting System](https://efile.aphis.usda.gov/s/) — APHIS eFile is the web-based permitting system for submitting animal and plant health import/export permit applications, tracking application status, applying for renewals and amendments, and receiving permit copies o...
- [Agricultural Commodity Import Requirements (ACIR)](https://acir.aphis.usda.gov/s/) — The Agricultural Commodity Import Requirements (ACIR) system provides searchable access to APHIS import requirements for agricultural commodities, including plants, plant products, animals, and animal products by coun...
- [APHIS and AMS Geospatial Hub](https://www.aphis.usda.gov/aphis-ams-geospatial-hub) — The APHIS and AMS Geospatial Hub provides GIS mapping applications, spatial data layers, and geospatial analysis tools for animal and plant health surveillance, pest and disease tracking, and quarantine management.

---

## Appalachian Regional Commission

**Repository:** [https://github.com/api-evangelist/appalachian-regional-commission](https://github.com/api-evangelist/appalachian-regional-commission)

The Appalachian Regional Commission (ARC) is a federal-state partnership that invests in Appalachia's economic future by funding projects that promote economic development, infrastructure improvement, workforce training, and community development across 423 counties in 13 states. ARC provides research data, county-level economic reports, and maps via its Data Report Tool at data.arc.gov.

**APIs and surfaces:**

- [ARC Data Report Tool](https://data.arc.gov/data) — The ARC Data Report Tool provides state- and county-level data for the entire Appalachian Region across six topic areas comparing Appalachian data with national averages. Data covers economic, demographic, and quality...

---

## Architect of the Capitol

**Repository:** [https://github.com/api-evangelist/architect-of-the-capitol](https://github.com/api-evangelist/architect-of-the-capitol)

The Architect of the Capitol (AOC) serves Congress and the Supreme Court as builder and steward of Capitol Hill's landmark buildings and grounds, preserving historic structures, monuments, art, and gardens across the Capitol campus.

**APIs and surfaces:**

- [Architect of the Capitol Data API](https://www.aoc.gov/) — The AOC Data API provides access to public information about Capitol campus buildings, art collections, historic preservation projects, and congressional facilities management.

---

## Army National Guard

**Repository:** [https://github.com/api-evangelist/army-national-guard](https://github.com/api-evangelist/army-national-guard)

The Army National Guard is a reserve component of the United States Army that serves both the nation and individual states in times of need. Operating under the dual authority of the federal government and the fifty state governors, the Army National Guard provides trained and ready soldiers for overseas military operations, domestic disaster relief, homeland security, and civil support missions. Its primary data and digital services are focused on recruiting, career management, benefits administration, and public outreach. The National Guard Bureau (NGB) coordinates federal operations and maintains administrative systems under Title 10 and Title 32 of the United States Code.

**APIs and surfaces:**

- [Army National Guard Recruiting API](https://www.nationalguard.mil/Portals/31/Documents/About/NGB_Fact_Sheet.pdf) — The Army National Guard Recruiting API provides access to job listings, Military Occupational Specialties (MOS), unit locations, and recruiter contact information for prospective members interested in joining the Nati...
- [Army National Guard FOIA Portal](https://www.nationalguard.mil/About/FOIA/) — The Freedom of Information Act (FOIA) portal for the Army National Guard and National Guard Bureau provides a mechanism for submitting FOIA requests, tracking request status, and accessing previously released records....

---

## Bonneville Power Administration

**Repository:** [https://github.com/api-evangelist/bonneville-power-administration](https://github.com/api-evangelist/bonneville-power-administration)

The Bonneville Power Administration (BPA) is a federal agency within the U.S. Department of Energy that markets wholesale electrical power from federal hydroelectric projects in the Pacific Northwest. BPA also operates and maintains about three-quarters of the high-voltage transmission in the Pacific Northwest. The agency provides publicly available GIS data, energy statistics, and operational data through its data hub and web services.

**APIs and surfaces:**

- [BPA GIS Data Hub API](https://data-bpagis.hub.arcgis.com) — The BPA GIS Data Hub provides publicly available geospatial data from Bonneville Power Administration. The hub is built on ArcGIS and supports data downloads in multiple formats including CSV, KML, GeoJSON, GeoTIFF, a...
- [BPA Wind and Solar Generation Data](https://transmission.bpa.gov/business/operations/Wind/) — BPA publishes real-time and historical wind and solar generation data for the Balancing Authority area. Data includes total wind generation, total solar generation, net generation, and load data available for download...

---

## Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF)

**Repository:** [https://github.com/api-evangelist/bureau-of-alcohol-tobacco-firearms-and-explosives-atf-](https://github.com/api-evangelist/bureau-of-alcohol-tobacco-firearms-and-explosives-atf-)

ATF is a law enforcement agency in the United States Department of Justice that protects communities from violent criminals, criminal organizations, the illegal use and trafficking of firearms, the illegal use and storage of explosives, acts of arson and bombings, acts of terrorism, and the illegal diversion of alcohol and tobacco products. ATF publishes firearms trace data, crime statistics, and regulatory information.

**APIs and surfaces:**

- [ATF Firearms Trace Data](https://www.atf.gov/firearms/docs/report/2022-firearms-trace-data-report/download) — ATF publishes annual firearms trace data reports covering the source and age of crime guns traced by law enforcement agencies across the United States. Data includes state-level statistics on firearms trafficking and...
- [ATF Federal Firearms Licensee (FFL) Listing](https://www.atf.gov/firearms/listing-federal-firearms-licensees) — ATF publishes listings of all active Federal Firearms Licensees (FFLs) by state. The data is available as downloadable files and can be accessed programmatically for compliance verification purposes.

---

## Bureau of Consular Affairs

**Repository:** [https://github.com/api-evangelist/bureau-of-consular-affairs](https://github.com/api-evangelist/bureau-of-consular-affairs)

The Bureau of Consular Affairs (CA) is a bureau of the United States Department of State responsible for administering laws, formulating regulations, and implementing policies related to consular services and immigration. CA provides travel advisories, passport and visa information, and publishes datasets through its data catalog accessible via the CKAN API.

**APIs and surfaces:**

- [Bureau of Consular Affairs Data Catalog (CKAN API)](https://cadatacatalog.state.gov/) — The CA Data Catalog provides access to datasets from the Bureau of Consular Affairs via the CKAN API. It includes passport issuance statistics, visa issuance data, adoption statistics, and other consular affairs data....
- [Travel Advisories API](https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/) — The State Department publishes travel advisory levels (Level 1-4) for every country. Advisory data is available for consumption by travel applications and services to help inform travelers about safety conditions.
- [Passport Issuance Statistics](https://cadatacatalog.state.gov/dataset/passportstatistics) — Annual and monthly passport issuance statistics published by the Bureau of Consular Affairs, available as downloadable datasets through the CA data catalog.

---

## Bureau of Economic Analysis

**Repository:** [https://github.com/api-evangelist/bureau-of-economic-analysis](https://github.com/api-evangelist/bureau-of-economic-analysis)

The U.S. Bureau of Economic Analysis (BEA) is a principal federal statistical agency that produces accurate and objective data about the U.S. economy. BEA publishes GDP, personal income, corporate profits, international trade and investment data, and industry-level economic accounts. The BEA Data API provides programmatic access to these economic statistics.

**APIs and surfaces:**

- [Bureau of Economic Analysis (BEA) Data API](https://www.bea.gov/tools/) — The BEA Data API provides programmatic access to BEA's published economic statistics including GDP, national income, personal income, corporate profits, international trade and investment, and industry accounts. Suppo...
- [BEA GDP Data](https://www.bea.gov/data/gdp/gross-domestic-product) — Gross Domestic Product (GDP) data from the BEA, available quarterly and annually. Includes GDP growth rates, GDP by expenditure components, and real vs. nominal GDP measures.

---

## Bureau of Engraving and Printing

**Repository:** [https://github.com/api-evangelist/bureau-of-engraving-and-printing](https://github.com/api-evangelist/bureau-of-engraving-and-printing)

The Bureau of Engraving and Printing (BEP) is an agency of the U.S. Department of the Treasury that designs and produces U.S. currency (Federal Reserve Notes), postage stamps, and other official U.S. government security documents. BEP offers a U.S. Currency Reader Program for the visually impaired and provides a mutilated currency redemption service.

**APIs and surfaces:**

- [BEP U.S. Currency Reader Program](https://www.bep.gov/currency/current-currency-features/uscurrency-reader-program) — The BEP U.S. Currency Reader Program provides free currency readers to blind and visually impaired individuals in the United States, enabling them to identify Federal Reserve Note denominations using accessible techno...
- [BEP Mutilated Currency Redemption](https://www.bep.gov/services/mutilated-currency-redemption) — The BEP redeems severely damaged or mutilated Federal Reserve Notes as a free public service. Citizens can submit damaged currency for examination and potential redemption.
- [BEP Data and Publications](https://www.bep.gov/currency) — BEP publishes currency production figures, annual reports, and historical data about Federal Reserve Note printing. Data is available via data.gov for programmatic access.

---

## Bureau of Indian Affairs

**Repository:** [https://github.com/api-evangelist/bureau-of-indian-affairs](https://github.com/api-evangelist/bureau-of-indian-affairs)

The Bureau of Indian Affairs (BIA) is the oldest bureau in the U.S. Department of the Interior. Its mission is to enhance the quality of life, promote economic opportunity, and carry out the federal responsibility to protect and improve the trust assets of American Indians, Indian tribes, and Alaska Natives. The BIA administers services directly or through contracts, grants, and compacts with 574 federally recognized tribes serving approximately 2.5 million people. BIA publishes geospatial datasets, directories, and forms through the Indian Affairs GIS Open Data portal, the Tribal Leader Directory, and official agency websites.

**APIs and surfaces:**

- [Bureau of Indian Affairs](https://www.bia.gov/bia) — The Bureau of Indian Affairs is the oldest bureau in the U.S. Department of the Interior, carrying out the federal responsibility to protect and improve trust assets of American Indians, Indian tribes, and Alaska Nati...
- [Indian Affairs GIS Open Data](https://biamaps.doi.gov/bogs/datadownload.html) — The Indian Affairs GIS Open Data Hub publishes authoritative geospatial datasets as downloadable and machine-readable resources via Esri ArcGIS Hub, including federally recognized tribal boundaries, land areas, ICWA d...
- [BIA Tribal Leaders Directory](https://www.bia.gov/service/tribal-leaders-directory) — A searchable directory published by the Bureau of Indian Affairs of elected leaders and contact information for each of the 574 federally recognized tribes, released quarterly as a PDF and via the BIA website.
- [Bureau of Indian Education](https://www.bie.edu/) — The Bureau of Indian Education (BIE) supports programs serving more than 46,000 students across 183 schools, including BIE-operated and tribally-controlled schools, plus postsecondary institutions, providing culturall...

---

## Bureau of Industry and Security

**Repository:** [https://github.com/api-evangelist/bureau-of-industry-and-security](https://github.com/api-evangelist/bureau-of-industry-and-security)

The Bureau of Industry and Security (BIS), a division of the U.S. Department of Commerce, advances U.S. national security, foreign policy, and economic objectives by administering an effective export control and treaty compliance system. BIS maintains the Commerce Control List (CCL), administers the Consolidated Screening List (CSL), and operates the SNAP-R licensing system.

**APIs and surfaces:**

- [Consolidated Screening List (CSL) API](https://www.trade.gov/consolidated-screening-list) — The Consolidated Screening List (CSL) API consolidates export screening lists from the Departments of Commerce, State, and Treasury. It includes the Entity List, Denied Persons List, Unverified List (BIS), ITAR Debarr...
- [SNAP-R Export License Application System](https://snapr.bis.doc.gov/) — SNAP-R (Simplified Network Application Process Redesign) is the BIS online system for applying for export licenses, classifications, and authorizations under the Export Administration Regulations (EAR).
- [STELA Export License Tracking](https://www.bis.gov/licensing/stela) — STELA (System for Tracking Export License Applications) allows applicants to check the status of export license applications submitted to BIS.

---

## Bureau of International Labor Affairs

**Repository:** [https://github.com/api-evangelist/bureau-of-international-labor-affairs](https://github.com/api-evangelist/bureau-of-international-labor-affairs)

ILAB strengthens global labor standards; enforces labor commitments; promotes equity; and combats child labor, forced labor, and human trafficking.

**APIs and surfaces:**

- [DOL ILAB Data API](https://www.dol.gov/agencies/ilab/our-work/data-research) — ILAB provides data on child labor, forced labor, and human trafficking across countries. The DOL developer API provides programmatic access to ILAB datasets including country-level labor standards assessments, lists o...
- [ILAB Sweat and Toil Data](https://www.dol.gov/agencies/ilab/our-work/data-research/sweat-toil) — The Sweat and Toil dataset covers child labor and forced labor in over 130 countries, including goods identified as produced by child or forced labor, country advancement levels, and suggested actions.

---

## Bureau of Justice Statistics

**Repository:** [https://github.com/api-evangelist/bureau-of-justice-statistics](https://github.com/api-evangelist/bureau-of-justice-statistics)

The Bureau of Justice Statistics (BJS) publishes information on crime, criminal offenders, victims of crime, and the operation of justice systems.

**APIs and surfaces:**

- [NIBRS National Estimates API](https://bjs.ojp.gov/national-incident-based-reporting-system-nibrs-national-estimates-api) — Provides access to national estimates derived from the FBI's National Incident-Based Reporting System (NIBRS). Includes violent and property incidents, offenses, victimization counts, percentages, and rates. No authen...
- [National Crime Victimization Survey (NCVS) API](https://bjs.ojp.gov/national-crime-victimization-survey-ncvs-api) — Provides access to victimization data from the National Crime Victimization Survey (NCVS), covering personal and household victimization data along with population estimates. No authentication required.
- [BJS Data Analysis Tools](https://bjs.ojp.gov/data/data-analysis-tools) — A suite of interactive web-based data tools providing access to BJS statistical data on crime, corrections, courts, law enforcement, and victimization. Tools include LEARCAT (law enforcement agency crime data), Recidi...

---

## Bureau of Land Management

**Repository:** [https://github.com/api-evangelist/bureau-of-land-management](https://github.com/api-evangelist/bureau-of-land-management)

The Bureau of Land Management (BLM) is a U.S. government agency responsible for managing vast stretches of public lands across the country, primarily focused on activities like outdoor recreation, livestock grazing, mineral development, and energy production, aiming to sustain the health and diversity of these lands for future generations.

**APIs and surfaces:**

- [BLM Geospatial Business Platform (GBP) Hub](https://gbp-blm-egis.hub.arcgis.com/) — The BLM Geospatial Business Platform is a public tool and publication platform for exploring and downloading GIS data. Built on ArcGIS Online, it provides REST endpoints for BLM geospatial data including public lands...
- [BLM Mineral and Land Records System (MLRS)](https://mlrs.blm.gov/s/) — The Mineral and Land Records System (MLRS) is an online platform delivering state-of-the-art mineral and land records transactions, tracking, mapping, and more for BLM customers and staff. It manages land patents, rig...
- [BLM General Land Office Records](https://glorecords.blm.gov/default.aspx) — The General Land Office (GLO) Records provide access to federal land conveyance records including land patents, survey plats, and field notes from 1788 to the present. The system contains over 10 million Federal land...
- [BLM ePlanning](https://eplanning.blm.gov/) — BLM ePlanning provides public access to land use planning documents, environmental impact statements, and resource management plans. Citizens can track planning projects and participate in comment periods.

---

## Bureau of Ocean Energy Management

**Repository:** [https://github.com/api-evangelist/bureau-of-ocean-energy-management](https://github.com/api-evangelist/bureau-of-ocean-energy-management)

The Bureau of Ocean Energy Management (BOEM) manages the nation's offshore resources in an environmentally and economically responsible way. BOEM oversees the responsible development of U.S. Outer Continental Shelf energy and mineral resources while protecting the environment and conserving natural resources.

**APIs and surfaces:**

- [MarineCadastre.gov](https://marinecadastre.gov/) — MarineCadastre.gov is the authoritative source for marine cadastre data and services. It provides an interactive map viewer with integrated submerged lands information including legal, property ownership (cadastre), p...
- [BOEM ArcGIS REST Services](https://www.boem.gov/oil-gas-energy/mapping-and-data) — BOEM provides ArcGIS REST Services exposing geospatial data for the Outer Continental Shelf (OCS) regions. Data includes active leases, offshore block grids, boundaries, wells, and pipelines for Atlantic, Gulf of Mexi...
- [Environmental Studies Program Information System (ESPIS)](https://esp-boem.hub.arcgis.com/) — ESPIS provides access to BOEM's environmental studies data, including research reports, environmental impact studies, and scientific literature related to offshore energy development. Searchable by topic, location, an...

---

## Bureau of Reclamation

**Repository:** [https://github.com/api-evangelist/bureau-of-reclamation](https://github.com/api-evangelist/bureau-of-reclamation)

Established in 1902, the Bureau of Reclamation is best known for the dams, powerplants, and canals it constructed in the 17 western states. These water projects led to homesteading and promoted the economic development of the West. Reclamation has constructed more than 600 dams and reservoirs including Hoover Dam on the Colorado River and Grand Coulee on the Columbia River.

**APIs and surfaces:**

- [Reclamation Information Sharing Environment (RISE) API](https://data.usbr.gov/rise/api) — The RISE API allows users to query Bureau of Reclamation water resource data programmatically, returning JSON objects. For Geospatial and File Upload datasets, only metadata can be queried. For time series datasets, b...

---

## Bureau of Safety and Environmental Enforcement

**Repository:** [https://github.com/api-evangelist/bureau-of-safety-and-environmental-enforcement](https://github.com/api-evangelist/bureau-of-safety-and-environmental-enforcement)

The Bureau of Safety and Environmental Enforcement (BSEE) works to promote safety, protect the environment, and conserve resources offshore through vigorous regulatory oversight and enforcement.

**APIs and surfaces:**

- [BSEE Well API Online Query](https://www.data.bsee.gov/well/api/default.aspx) — The BSEE Well API provides multiregional offshore well information retrieval across Alaska, Atlantic, Gulf of America, and Pacific regions. Query by API well number, company name, well status, field name, spud date, a...
- [BSEE Data Center](https://www.data.bsee.gov/) — The BSEE Data Center provides online query services and data downloads for offshore oil and gas operations. Data covers company information, leasing, pipelines, wells, production, platforms, and permitting across all...
- [BSEE eWell Permitting System (TIMS)](https://timsweb.bsee.gov/) — The Technical Information Management System (TIMS) / eWell system enables permit submissions and well activity reporting for offshore operations. Operators use this system to submit Applications for Permit to Drill (A...

---

## Bureau of Transportation Statistics

**Repository:** [https://github.com/api-evangelist/bureau-of-transportation-statistics](https://github.com/api-evangelist/bureau-of-transportation-statistics)

The Bureau of Transportation Statistics (BTS), part of the Department of Transportation (DOT) is the preeminent source of statistics on commercial aviation, multimodal freight activity, and transportation economics, and provides context to decision makers and the public for understanding statistics on transportation.

**APIs and surfaces:**

- [BTS Open Data SODA API](https://data.bts.gov/) — The BTS Open Data portal powered by Socrata provides programmatic access to transportation datasets via the Socrata Open Data API (SODA). Supports filtering, querying, and aggregation across aviation, freight, and tra...
- [TranStats - Airline On-Time Performance Data](https://www.transtats.bts.gov/) — TranStats is BTS's aviation and transportation statistics database providing flight on-time performance data, carrier and airport snapshots, fuel consumption data, and comprehensive airline statistics. Enables custom...
- [BTS Freight Analysis Framework (FAF)](https://www.bts.gov/faf) — The Freight Analysis Framework integrates data from multiple sources to create a comprehensive picture of freight flows to, from, within, and through the United States. Includes volume, value, and mode of shipment dat...

---

## Center for Parent Information and Resources

**Repository:** [https://github.com/api-evangelist/center-for-parent-information-and-resources](https://github.com/api-evangelist/center-for-parent-information-and-resources)

The Center for Parent Information and Resources (CPIR) is a federally funded central hub of information and products for the national network of Parent Training and Information Centers (PTIs) and Community Parent Resource Centers (CPRCs). CPIR supports families and youth, with a focus on children and youth with disabilities, delivering resources via the Parent Center Hub website, the Buzz from the Hub newsletter, and an events calendar. No public developer API has been identified; content and updates are delivered through website browsing, newsletter subscription, and an embedded Google Calendar.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Centers for Disease Control and Prevention

**Repository:** [https://github.com/api-evangelist/centers-for-disease-control-and-prevention](https://github.com/api-evangelist/centers-for-disease-control-and-prevention)

The Centers for Disease Control and Prevention (CDC) is the United States' national public health agency, part of the Department of Health and Human Services. CDC operates a broad portfolio of public APIs and open data services including the Socrata-powered data.cdc.gov (Open Data API for hundreds of COVID-19, chronic disease, environmental health, immunization, injury, and mortality datasets), the WONDER online query databases for mortality, natality, and cancer statistics, the PLACES / BRFSS and Environmental Public Health Tracking Network APIs, the Content Syndication platform, and the open.cdc.gov developer portal that indexes these resources for civic technologists and public-health researchers.

**APIs and surfaces:**

- [CDC Socrata Open Data API (data.cdc.gov)](https://data.cdc.gov/) — The CDC Socrata Open Data API (SODA) provides programmatic JSON, CSV, and GeoJSON access to hundreds of data.cdc.gov datasets covering COVID-19 case surveillance, vaccination coverage, excess deaths, flu surveillance,...
- [CDC WONDER API](https://wonder.cdc.gov/) — CDC WONDER (Wide-ranging ONline Data for Epidemiologic Research) is a suite of public-use ad-hoc query databases covering underlying and multiple cause of death, natality, cancer statistics, tuberculosis, STDs, vaccin...
- [CDC PLACES / 500 Cities API](https://www.cdc.gov/places/) — PLACES (Population Level Analysis and Community Estimates) provides model-based small-area estimates for chronic disease risk factors, health outcomes, and prevention practices for counties, ZCTAs, census tracts, and...
- [CDC Environmental Public Health Tracking Network API](https://ephtracking.cdc.gov/apihelp) — The Environmental Public Health Tracking Network API provides a REST interface over the National Tracking Network's JSON-formatted data for air quality, water quality, climate and health, childhood lead poisoning, ast...
- [CDC Public Health Media Library (Content Syndication)](https://tools.cdc.gov/medialibrary/) — The CDC Public Health Media Library Content Syndication API lets developers and partner sites programmatically retrieve CDC health content (articles, infographics, videos, widgets, images, and microsites) in multiple...
- [CDC Open Technology API Index](https://open.cdc.gov/apis.html) — open.cdc.gov is CDC's Open Technology landing site that indexes the agency's public APIs, open-source GitHub repositories, and open data assets, serving as a catalog entry point for developers seeking CDC interfaces a...
- [CDC NNDSS / MMWR Socrata Data](https://data.cdc.gov/browse?category=NNDSS) — The National Notifiable Diseases Surveillance System (NNDSS) and Morbidity and Mortality Weekly Report (MMWR) tables are published as Socrata datasets on data.cdc.gov, providing weekly and historical case counts for n...

---

## Centers for Medicare and Medicaid Services

**Repository:** [https://github.com/api-evangelist/centers-for-medicare-and-medicaid-services](https://github.com/api-evangelist/centers-for-medicare-and-medicaid-services)

The Centers for Medicare and Medicaid Services (CMS) is the federal agency that provides health coverage to more than 160 million Americans through Medicare, Medicaid, the Children's Health Insurance Program (CHIP), and the Health Insurance Marketplace. CMS operates one of the largest public API programs in the U.S. government, including the FHIR-based Blue Button 2.0, Beneficiary Claims Data API (BCDA), and Data at the Point of Care (DPC); the data.cms.gov Socrata Open Data API covering Medicare claims, provider, and enrollment datasets; the Medicare Provider Data Catalog (Hospital Compare, Nursing Home Compare); the Healthcare.gov Marketplace API; NPPES and NPI Registry APIs; the QPP Measures API; and Medicaid Transformed Medicaid Statistical Information System (T-MSIS) resources.

**APIs and surfaces:**

- [CMS Blue Button 2.0 API](https://bluebutton.cms.gov/) — Blue Button 2.0 is a standards-based HL7 FHIR R4 API that delivers Medicare Part A, B, and D claims data for over 60 million beneficiaries to registered third-party applications, authorized by the beneficiary through...
- [CMS Beneficiary Claims Data API (BCDA)](https://bcda.cms.gov/) — The Beneficiary Claims Data API (BCDA) is a Bulk FHIR API that delivers Medicare Part A, B, and D claims data to Medicare Shared Savings Program ACOs, ACO REACH participants, and other Alternative Payment Model partic...
- [CMS Data at the Point of Care (DPC) API](https://dpc.cms.gov/) — Data at the Point of Care is a FHIR Bulk Data API that delivers Original Medicare claims data to fee-for-service providers for the patients currently under their care, enabling clinicians to see a patient's full Medic...
- [CMS Socrata Open Data API (data.cms.gov)](https://data.cms.gov/) — data.cms.gov hosts hundreds of CMS datasets including Medicare Fee-for-Service utilization and payment data, Provider of Services files, Medicare Part B/D Prescriber summaries, Marketplace open enrollment data, and CO...
- [CMS Provider Data Catalog API (Care Compare)](https://data.cms.gov/provider-data/) — The Provider Data Catalog API (formerly Hospital Compare) exposes the Medicare.gov Care Compare datasets including Hospital, Nursing Home, Home Health, Hospice, Physician, Long-Term Care Hospital, Inpatient Rehab, and...
- [NPPES NPI Registry API](https://npiregistry.cms.hhs.gov/) — The NPPES NPI Registry API provides free public access to look up active National Provider Identifier records for individual and organizational healthcare providers, supporting FHIR-compatible JSON responses used wide...
- [Healthcare.gov Marketplace API](https://www.healthcare.gov/developers/) — The Healthcare.gov Marketplace API and accompanying Open Data Plan Finder exposes Qualified Health Plan (QHP) details, plan attributes, provider networks, and formularies for the Federally-Facilitated Marketplace stat...
- [CMS Quality Payment Program (QPP) Measures API](https://qpp.cms.gov/) — The Quality Payment Program Measures Data repository and REST API publish machine-readable specifications of MIPS quality, promoting interoperability, improvement activities, and cost measures for each performance yea...
- [Medicare Coverage Database (MCD) API](https://www.cms.gov/medicare-coverage-database/) — The Medicare Coverage Database publishes National Coverage Determinations (NCDs), Local Coverage Determinations (LCDs), articles, and coding guidance used to determine Medicare coverage and reimbursement policies, dis...

---

## Central Intelligence Agency

**Repository:** [https://github.com/api-evangelist/central-intelligence-agency](https://github.com/api-evangelist/central-intelligence-agency)

The Central Intelligence Agency (CIA) is the United States' civilian foreign intelligence service of the federal government, tasked with gathering, processing, and analyzing national security information from around the world. While the CIA does not maintain a formal public developer program, it publishes a small number of digital resources of interest to civic technologists and researchers, including the CIA.gov public website, the FOIA Electronic Reading Room (CREST) of declassified records, the World Factbook country profiles (open dataset, public domain), the CIA Museum digital collection, the Studies in Intelligence journal archive, and the agency's careers portal. Note that the World Factbook web product was discontinued on 4 February 2026, but a CC0-licensed JSON dataset of all 260 Factbook entities is preserved on GitHub by the community.

**APIs and surfaces:**

- [CIA Public Website](https://www.cia.gov/) — The CIA's primary public-facing website at cia.gov hosts agency news stories, leadership biographies, mission statements, careers and recruiting information, and links to all other public CIA digital properties.
- [CIA FOIA Electronic Reading Room (CREST)](https://www.cia.gov/readingroom/) — The CIA's FOIA Electronic Reading Room (CREST - CIA Records Search Tool) is a publicly searchable interface to declassified CIA records released under the Freedom of Information Act. The site provides full-text search...
- [CIA World Factbook (Country Profiles)](https://www.cia.gov/the-world-factbook/) — The CIA World Factbook is the long-running unclassified almanac of reference information on 260 world entities including all sovereign countries, dependencies, and oceans, organized into the categories of Geography, P...
- [CIA Museum Digital Collection](https://www.cia.gov/legacy/museum/) — The CIA Museum digital collection is the public-facing online catalog of artifacts, exhibits, and stories from the CIA Museum, including historical espionage tools, declassified mission gear, and curated narratives ab...
- [Studies in Intelligence Journal](https://www.cia.gov/resources/csi/studies-in-intelligence/) — Studies in Intelligence is the CIA's professional journal published by the Center for the Study of Intelligence (CSI). The site provides unclassified articles, book reviews, and historical analyses on the intelligence...
- [CIA Careers Portal](https://www.cia.gov/careers/) — The CIA Careers portal is the agency's public recruiting site, listing open positions across analysis, operations, science and technology, digital innovation, and support functions, along with eligibility, hiring proc...

---

## Chief Acquisition Officers Council

**Repository:** [https://github.com/api-evangelist/chief-acquisition-officers-council](https://github.com/api-evangelist/chief-acquisition-officers-council)

The Chief Acquisition Officers Council (CAOC) is a senior interagency forum established pursuant to Section 16 of the Office of Federal Procurement Policy Act (41 USC 1311). The Council brings together the Chief Acquisition Officers (CAOs), the Under Secretary of Defense for Acquisition and Sustainment, and the Senior Procurement Executives of Executive Branch agencies to monitor and improve the federal acquisition system, promote effective business practices, deliver best-value products and services, and further integrity, fairness, competition, and openness in federal procurement. The CAOC publishes resources, charters, working group output, and guidance through Acquisition.gov, and operates alongside the Federal Acquisition Regulatory Council and the Office of Management and Budget's Office of Federal Procurement Policy (OFPP).

**APIs and surfaces:**

- [Chief Acquisition Officers Council Resources](https://www.acquisition.gov/cao-home) — The CAOC publishes its charter, membership roster, meeting summaries, working group output, and federal acquisition guidance through Acquisition.gov. The Council does not expose a dedicated developer API; resources ar...

---

## Chief Financial Officers Council

**Repository:** [https://github.com/api-evangelist/chief-financial-officers-council](https://github.com/api-evangelist/chief-financial-officers-council)

The Chief Financial Officers Council (CFOC) was established by the Chief Financial Officers (CFO) Act of 1990 (Public Law 101-576) and is composed of the CFOs and Deputy CFOs of the 24 largest federal departments and agencies, along with senior officials from the Office of Management and Budget (OMB) and the Department of the Treasury. The Council works collaboratively to improve federal financial management through shared guidance, working groups, and inter-agency standards. While the CFO Council itself does not operate a developer API program, its remit is closely tied to the larger ecosystem of federal financial management data and APIs administered by Treasury (USAspending.gov, Fiscal Service), OMB (PaymentAccuracy.gov, MAX.gov), and GSA (Performance.gov, SAM.gov).

**APIs and surfaces:**

- [CFO Council Website](https://www.cfo.gov/) — The cfo.gov public website is the official portal for the federal CFO Council, hosting member rosters, council news, working-group outputs, financial-management policy guidance, and links to companion federal financia...
- [CFO Council Working Groups](https://www.cfo.gov/working-groups/) — The CFO Council operates topical working groups covering areas such as financial systems, internal control, grants management, payment integrity, financial reporting, and data analytics. Working-group products includi...
- [PaymentAccuracy.gov (Payment Integrity)](https://www.paymentaccuracy.gov/) — PaymentAccuracy.gov is the OMB-maintained transparency site for reporting government-wide improper payments and payment-integrity activities. The site publishes downloadable agency-level payment accuracy datasets that...
- [USAspending.gov API (Treasury)](https://api.usaspending.gov/) — USAspending.gov is the Treasury-operated public source of accountable federal spending data, exposing a comprehensive REST API for federal awards, contracts, grants, sub-awards, and agency budget data. CFO Council mem...
- [MAX.gov / Performance.gov](https://www.performance.gov/) — Performance.gov is the OMB-administered public site for federal cross-agency priority goals, agency strategic plans, and performance reports. The CFO Council collaborates with OMB on financial-management Cross-Agency...

---

## Chief Human Capital Officers Council

**Repository:** [https://github.com/api-evangelist/chief-human-capital-officers](https://github.com/api-evangelist/chief-human-capital-officers)

The Chief Human Capital Officers (CHCO) Council is the principal interagency forum to advise and coordinate the activities of members on matters of modernization of human resources (HR) systems, improved quality of human resources information, and legislation affecting human resources operations and organizations across the U.S. federal government. Established under the Chief Human Capital Officers Act of 2002 (5 U.S.C. 1401-1402), the Council is chaired by the Director of the U.S. Office of Personnel Management (OPM) with the Deputy Director for Management at OMB serving as Vice Chair. The CHCO Council coordinates federal human capital management strategy, supports the Federal HR workforce, advances workforce planning and talent acquisition, and oversees performance management, employee engagement, learning and development, and HR policy implementation across departments and agencies.

**APIs and surfaces:**

- [Chief Human Capital Officers Council Resources](https://www.opm.gov/chcoc) — The CHCO Council publishes its charter, leadership roster, working group output, policy memoranda, and federal human capital guidance through chcoc.gov (now hosted under opm.gov). The Council does not expose a dedicat...

---

## Chief Information Officers Council

**Repository:** [https://github.com/api-evangelist/chief-information-officers-council](https://github.com/api-evangelist/chief-information-officers-council)

The Chief Information Officers Council (CIOC) is the principal interagency forum for improving agency practices related to the design, acquisition, development, modernization, use, sharing, and performance of federal information resources. Established by Executive Order 13011 in 1996 and codified in the E-Government Act of 2002 (44 U.S.C. 3603), the Council is comprised of the Chief Information Officers and Deputy CIOs of executive branch agencies, the Federal CIO at OMB (who serves as Chair), the Federal Chief Information Security Officer, and the Administrator for Electronic Government. The CIOC develops recommendations for OMB IT policy, identifies opportunities to improve federal IT performance, coordinates multi-agency IT initiatives such as cybersecurity and cloud adoption, supports federal IT workforce development, and disseminates effective IT management practices across the federal government. The Council publishes guidance, playbooks, and resources through cio.gov and councils.gov.

**APIs and surfaces:**

- [Chief Information Officers Council Resources](https://www.councils.gov/cioc) — The CIOC publishes its charter, leadership roster, committee output, playbooks (e.g., Cloud Smart, Modular Contracting, IT Modernization), and federal IT guidance through cio.gov and councils.gov. The Council does not...

---

## Commission of Fine Arts

**Repository:** [https://github.com/api-evangelist/commission-of-fine-arts](https://github.com/api-evangelist/commission-of-fine-arts)

The U.S. Commission of Fine Arts (CFA) is an independent federal agency established in 1910 that has review authority over the design and aesthetics of construction within Washington, D.C., and over coins, medals, and Federal commemorative works. The CFA also appoints the Old Georgetown Board which conducts design review for projects in the Georgetown Historic District. As of April 2026 the CFA does not publish a public developer API, OpenAPI specifications, or a developer program. Project records are accessible through the CFA's web-based Project Search tool and via the records-and-research process documented at cfa.gov.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Committee on Foreign Investment in the United States

**Repository:** [https://github.com/api-evangelist/committee-on-foreign-investment-in-the-united-states](https://github.com/api-evangelist/committee-on-foreign-investment-in-the-united-states)

The Committee on Foreign Investment in the United States (CFIUS) is an inter-agency committee chaired by the U.S. Department of the Treasury that reviews certain foreign investment transactions for national security implications. CFIUS reviews are governed by the Defense Production Act and Section 721, and were significantly strengthened by the Foreign Investment Risk Review Modernization Act of 2018 (FIRRMA). On September 15, 2022, President Biden issued Executive Order 14083 directing CFIUS to focus on emerging national security risks. CFIUS work is largely confidential, and the public-facing surface is limited to regulations, annual reports to Congress, FAQs, declarations and notices guidance, and case studies.

**APIs and surfaces:**

- [CFIUS Annual Report to Congress](https://home.treasury.gov/policy-issues/international/the-committee-on-foreign-investment-in-the-united-states-cfius/cfius-reports-and-tables) — CFIUS publishes an annual report to Congress summarizing covered transactions reviewed during the prior calendar year, statistics on notices, declarations, withdrawn cases, and presidential decisions. Annual reports a...
- [CFIUS Declarations and Notices Guidance](https://home.treasury.gov/policy-issues/international/the-committee-on-foreign-investment-in-the-united-states-cfius/cfius-laws-and-guidance) — CFIUS provides guidance for parties submitting declarations (short-form filings) and joint voluntary notices (full-form filings) for covered transactions. The Treasury maintains forms, FAQs, and case examples but fili...
- [CFIUS Regulations and Statutes](https://home.treasury.gov/policy-issues/international/the-committee-on-foreign-investment-in-the-united-states-cfius/cfius-laws-and-guidance) — The CFIUS regulatory framework is published in 31 CFR Parts 800, 801, and 802, and is anchored in Section 721 of the Defense Production Act as amended by FIRRMA. Regulations and statutes are available through the Fede...

---

## Commodity Futures Trading Commission

**Repository:** [https://github.com/api-evangelist/commodity-futures-trading-commission](https://github.com/api-evangelist/commodity-futures-trading-commission)

The Commodity Futures Trading Commission (CFTC) is the U.S. federal regulator for commodity futures and options markets. The CFTC publishes the weekly Commitments of Traders (COT) report and other public data through a Socrata Open Data API at publicreporting.cftc.gov, providing programmatic access to Legacy, Disaggregated, Traders in Financial Futures, and Supplemental Commodity Index Trader datasets, as well as swap data and large trader reports.

**APIs and surfaces:**

- [CFTC Commitments of Traders SODA API](https://publicreporting.cftc.gov/) — Programmatic access to the CFTC Commitments of Traders weekly reports via the Socrata Open Data API hosted at publicreporting.cftc.gov. Datasets cover Legacy, Disaggregated, Traders in Financial Futures, and Supplemen...
- [CFTC Swap Data Repositories](https://www.cftc.gov/MarketReports/SwapsReports/index.htm) — The CFTC oversees Swap Data Repositories (SDRs) that collect and maintain swap transaction records as required by the Dodd-Frank Act. SDRs publish certain real-time public data and the CFTC publishes aggregate weekly...
- [CFTC Bank Participation and Large Trader Reports](https://www.cftc.gov/MarketReports/BankParticipationReports/index.htm) — The CFTC publishes monthly Bank Participation reports and other aggregate large trader reports that complement the weekly COT data. These reports are released as PDFs and HTML tables on cftc.gov.

---

## Congressional Budget Office

**Repository:** [https://github.com/api-evangelist/congressional-budget-office](https://github.com/api-evangelist/congressional-budget-office)

The Congressional Budget Office (CBO) is the U.S. legislative branch agency that provides nonpartisan analyses of budgetary and economic issues to Congress. CBO publishes the Budget and Economic Outlook, projections of spending, revenues, deficits, and debt, cost estimates of legislation, and analytical reports. CBO data is distributed primarily as Excel and PDF files on cbo.gov; CBO does not currently publish a programmatic JSON API, but RSS feeds and downloadable structured workbooks make it possible to ingest CBO data into automated pipelines.

**APIs and surfaces:**

- [CBO Budget and Economic Data](https://www.cbo.gov/data/budget-economic-data) — Downloadable budget and economic data accompanying CBO's Budget and Economic Outlook reports. Includes 10-year projections of revenues, outlays, deficits, debt, employment, GDP, interest rates, and historical data goi...
- [CBO Cost Estimates](https://www.cbo.gov/cost-estimates) — CBO publishes cost estimates for legislation under consideration by Congress, covering both direct spending and revenue impact and including PAYGO scoring. Cost estimates are released as PDFs along with HTML summaries...
- [CBO Publications RSS Feeds](https://www.cbo.gov/about/get-cbo-information#rss) — CBO publishes RSS feeds for its publications, including reports, cost estimates, blog posts, working papers, and presentations. RSS is the primary machine-readable surface for new CBO releases.

---

## Consumer Financial Protection Bureau

**Repository:** [https://github.com/api-evangelist/consumer-financial-protection-bureau](https://github.com/api-evangelist/consumer-financial-protection-bureau)

The Consumer Financial Protection Bureau (CFPB) is the U.S. federal agency that supervises banks, lenders, and other financial companies, enforces federal consumer financial laws, and publishes large public datasets via open APIs. The CFPB Open Tech program publishes the Consumer Complaint Database (CCDB) search API and the HMDA Platform's Data Browser and Institutions APIs at ffiec.cfpb.gov, all unauthenticated and CC0-licensed for public use.

**APIs and surfaces:**

- [Consumer Complaint Database API](https://www.consumerfinance.gov/data-research/consumer-complaints/) — Public REST + JSON search API for the Consumer Complaint Database, a daily-updated record of complaints submitted by U.S. consumers about financial products and services. Supports full-text search, complaint detail lo...
- [HMDA Data Browser API](https://ffiec.cfpb.gov/documentation/api/data-browser/) — The HMDA Data Browser API exposes Home Mortgage Disclosure Act submission data with both nationwide and filtered (LEI, state, county, MSA/MD) aggregation reports as JSON, plus raw CSV streams and an HMDA filer lookup....
- [HMDA Institutions API](https://ffiec.cfpb.gov/documentation/api/institutions-api/) — Returns the financial institutions registered to file HMDA data with the CFPB, keyed by year and Legal Entity Identifier (LEI). Used by filers and researchers to confirm filer identifiers, registration status, and con...

---

## Consumer Product Safety Commission

**Repository:** [https://github.com/api-evangelist/consumer-product-safety-commission](https://github.com/api-evangelist/consumer-product-safety-commission)

The U.S. Consumer Product Safety Commission (CPSC) is the federal agency responsible for protecting the public from unreasonable risks of injury or death associated with consumer products such as toys, household items, electronics, and furniture. CPSC publishes a public, unauthenticated Recalls Retrieval Web Service that exposes recall records (with products, hazards, manufacturers, retailers, distributors, importers, and remedies) in JSON or XML, plus the SaferProducts.gov OData service for incident-report data accessed by application key.

**APIs and surfaces:**

- [CPSC Recalls API](https://www.cpsc.gov/Recalls/CPSC-Recalls-Application-Program-Interface-API-Information) — Public REST web service that returns CPSC recall records published on cpsc.gov. Supports case-insensitive wildcard search across recall number, date, product type, hazard, country, manufacturer, retailer, importer, di...
- [SaferProducts.gov OData API](https://www.saferproducts.gov/FAQs/FrequentlyAskedQuestions11) — OData web service exposing publicly published consumer product incident-report data submitted through SaferProducts.gov. Authenticated with a basic-auth header where the registered application key is sent as the usern...

---

## Council on Environmental Quality

**Repository:** [https://github.com/api-evangelist/council-on-environmental-quality](https://github.com/api-evangelist/council-on-environmental-quality)

The Council on Environmental Quality (CEQ) is an office within the Executive Office of the President of the United States that coordinates federal environmental policy, advises the President on environmental and natural resource policies, and oversees the implementation of the National Environmental Policy Act (NEPA). CEQ does not publish a public developer API. Federal NEPA documents and related environmental data are surfaced through partner federal agencies and platforms (NEPAtool, the Federal Permitting Dashboard, regulations.gov, EPA EJScreen, and the Climate and Economic Justice Screening Tool).

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Customs and Border Protection

**Repository:** [https://github.com/api-evangelist/customs-and-border-protection](https://github.com/api-evangelist/customs-and-border-protection)

U.S. Customs and Border Protection (CBP) is the federal law enforcement agency within the Department of Homeland Security responsible for apprehending individuals attempting to enter the United States illegally, stemming the flow of illegal drugs and contraband, protecting agricultural and economic interests from harmful pests and diseases, protecting intellectual property, and regulating and facilitating international trade, collecting import duties, and enforcing U.S. trade laws. CBP's primary trade automation systems are the Automated Commercial Environment (ACE), the Automated Export System (AES), AESDirect, the Advance Passenger Information System (APIS / eAPIS), and the Air Cargo Advance Screening (ACAS) program. Trade integrations are predominantly delivered through Electronic Data Interchange (EDI) messaging via ACE, with a small set of CBP web services (e.g., the AESDirect WebLink Inquiry API) exposed for programmatic use.

**APIs and surfaces:**

- [APIS / eAPIS](https://www.cbp.gov/travel/travel-industry-personnel/advance-passenger-information-system) — The Advance Passenger Information System (APIS) collects pre-arrival and pre-departure manifest data on all passengers and crew members flown or sailed into and out of the United States. The eAPIS web portal allows co...
- [Automated Commercial Environment (ACE)](https://www.cbp.gov/trade/automated) — ACE is the U.S. Single Window through which the trade community reports imports and exports and CBP and Partner Government Agencies determine admissibility. Trade users access ACE via the ACE Secure Data Portal (a fre...
- [Automated Export System (AES)](https://www.cbp.gov/trade/aes) — AES is the system through which exporters file Electronic Export Information (EEI) for goods leaving the United States. AES is integrated with ACE and supports both EDI filings and the AESDirect web filing tool. AESDi...
- [AESDirect WebLink Inquiry API](https://www.cbp.gov/trade/automated/aesdirect-weblink-inquiry-api) — The AESDirect WebLink Inquiry API allows authorized partners to programmatically query AESDirect filings. CBP provides separate certification (test) and production environments for the API. This is one of the few dire...
- [Air Cargo Advance Screening (ACAS)](https://www.cbp.gov/border-security/ports-entry/cargo-security/acas) — ACAS requires inbound air carriers and other eligible parties to submit advance air cargo data to CBP for security risk-based screening prior to loading on aircraft destined for the United States. ACAS data is transmi...

---

## Cybersecurity and Infrastructure Security Agency

**Repository:** [https://github.com/api-evangelist/cybersecurity-and-infrastructure-security-agency](https://github.com/api-evangelist/cybersecurity-and-infrastructure-security-agency)

The Cybersecurity and Infrastructure Security Agency (CISA) is the United States federal civilian cybersecurity agency, part of the Department of Homeland Security. CISA reduces cybersecurity and physical security risk for the nation, coordinates federal civilian cyber defense, and partners with state, local, tribal, and territorial governments and the private sector. CISA publishes a number of public, unauthenticated machine-readable feeds, including the Known Exploited Vulnerabilities (KEV) catalog (mandatorily remediated by federal civilian agencies under Binding Operational Directive 22-01), Cybersecurity Advisories, and Common Security Advisory Framework (CSAF) advisories. CISA also operates an Automated Indicator Sharing (AIS) TAXII 2.1 server that delivers STIX cyber threat indicators to vetted partners under a Terms of Use and Interconnection Agreement.

**APIs and surfaces:**

- [CISA Known Exploited Vulnerabilities (KEV) Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) — The KEV catalog is CISA's authoritative list of vulnerabilities actively exploited in the wild. The full catalog is published as JSON and CSV at cisa.gov/sites/default/files/feeds, mirrored on GitHub at cisagov/kev-da...
- [CISA Automated Indicator Sharing (AIS) TAXII Server](https://www.cisa.gov/topics/cyber-threats-and-advisories/information-sharing/automated-indicator-sharing-ais) — CISA's Automated Indicator Sharing (AIS) program uses a TAXII 2.1 server to deliver STIX-formatted cyber threat indicators (CTI) and defensive measures (DM) to vetted partners. AIS includes AIS PUBLIC, FEDGOV, and CIS...
- [CISA Cybersecurity Advisories](https://www.cisa.gov/news-events/cybersecurity-advisories) — CISA publishes Cybersecurity Advisories (CSAs), Industrial Control Systems Advisories (ICSAs), and Common Security Advisory Framework (CSAF) JSON documents describing tactics, techniques, indicators, and required miti...

---

## Defense Advanced Research Projects Agency

**Repository:** [https://github.com/api-evangelist/defense-advanced-research-projects-agency](https://github.com/api-evangelist/defense-advanced-research-projects-agency)

Since 1958, DARPA has held to an enduring mission: to create technological surprise for U.S. national security. Working with innovators inside and outside government, DARPA invests in transformational breakthroughs across biological technologies, defense sciences, information innovation, microsystems, strategic technology, and tactical technology. DARPA does not expose public developer APIs but does publish an RSS news feed and program information through its website.

**APIs and surfaces:**

- [DARPA News RSS Feed](https://www.darpa.mil/news) — The DARPA RSS feed publishes the latest news, program announcements, and opportunities posted by the agency. Unlike a developer API, the feed is consumed via standard RSS readers and HTTP clients.

---

## Defense Contract Audit Agency

**Repository:** [https://github.com/api-evangelist/defense-contract-audit-agency](https://github.com/api-evangelist/defense-contract-audit-agency)

The Defense Contract Audit Agency (DCAA), under the authority, direction, and control of the Under Secretary of Defense (Comptroller), provides audit and financial advisory services to Department of Defense and other federal entities responsible for acquisition and contract administration. DCAA publishes guidance, audit programs, and reports through its website but does not currently expose a public developer API.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Defense Contract Management Agency

**Repository:** [https://github.com/api-evangelist/defense-contract-management-agency](https://github.com/api-evangelist/defense-contract-management-agency)

The Defense Contract Management Agency (DCMA) is the Department of Defense component that works directly with defense suppliers to help ensure that DoD, federal, and allied government supplies and services are delivered on time, at projected cost, and meet performance requirements. DCMA performs contract administration, quality assurance, and earned value management oversight, but does not currently expose a public developer API.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Defense Counterintelligence and Security Agency

**Repository:** [https://github.com/api-evangelist/defense-counterintelligence-and-security-agency](https://github.com/api-evangelist/defense-counterintelligence-and-security-agency)

The Defense Counterintelligence and Security Agency (DCSA) is the largest security agency in the federal government, dedicated to protecting America's trusted workforce and trusted workspaces. DCSA conducts personnel vetting and background investigations, oversees the National Industrial Security Program, delivers counterintelligence and insider threat support, and operates systems such as the Defense Information System for Security (DISS) and the National Background Investigation Services (NBIS). DCSA does not currently expose a public developer API; access to its mission systems is limited to authorized government users and cleared industry partners.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Defense Finance and Accounting Service

**Repository:** [https://github.com/api-evangelist/defense-finance-accounting-service](https://github.com/api-evangelist/defense-finance-accounting-service)

The Defense Finance and Accounting Service (DFAS) is the agency within the Department of Defense responsible for paying members of the U.S. military, DoD civilian employees, contractors, and annuitants, as well as providing finance and accounting services to DoD components and other federal agencies. DFAS exposes member-facing self-service portals such as myPay but does not currently publish a public developer API.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Defense Health Agency

**Repository:** [https://github.com/api-evangelist/defense-health-agency](https://github.com/api-evangelist/defense-health-agency)

The Defense Health Agency (DHA) is a joint, integrated combat support agency that enables the Army, Navy, and Air Force medical services to provide a medically ready force and ready medical force to combatant commands. DHA operates the Military Health System (MHS), MHS Genesis electronic health record, the Military Health System Data Repository (MDR), and the Enterprise Intelligence and Data Solutions (EIDS) program. Data exchange inside MHS Genesis uses SMART on FHIR APIs, but DHA does not currently publish a general-purpose public developer API.

**APIs and surfaces:**

- [MHS Genesis SMART on FHIR API](https://health.mil/About-MHS/OASDHA/Defense-Health-Agency/Solution-Delivery-Division/MHS-GENESIS) — MHS Genesis, the Department of Defense electronic health record built on Oracle Health (Cerner), exposes a SMART on FHIR interface for authorized clinical applications to read and write patient data. Access is restric...

---

## Defense Information System for Security

**Repository:** [https://github.com/api-evangelist/defense-information-system-for-security](https://github.com/api-evangelist/defense-information-system-for-security)

The Defense Information System for Security (DISS) is the enterprise-wide Department of Defense system of record for personnel security, suitability, and credentialing management for military, civilian, and contractor personnel. Operated by the Defense Counterintelligence and Security Agency (DCSA), DISS replaced the Joint Personnel Adjudication System (JPAS) as the system of record on March 31, 2021. DISS is restricted to authorized DoD and federal users and contractor security officers; it does not expose a public developer API.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Defense Intelligence Agency

**Repository:** [https://github.com/api-evangelist/defense-intelligence-agency](https://github.com/api-evangelist/defense-intelligence-agency)

The Defense Intelligence Agency (DIA) is the U.S. Department of Defense combat support agency that produces, analyzes, and disseminates military intelligence on foreign militaries and operating environments to support warfighters, defense planners, and national-security policymakers. As an intelligence agency, DIA does not publish a general-purpose public API; its developer-facing surface is largely internal or restricted to the Intelligence Community. Public touchpoints include the GAMECHANGER policy analytics initiative, the DIA FOIA reading room, public news and article feeds, and procurement and recruiting portals.

**APIs and surfaces:**

- [Defense Intelligence Agency Website](https://www.dia.mil) — Public-facing presence of the Defense Intelligence Agency, providing organizational information, leadership, careers, news, and links to mission-specific programs. The website is the primary public surface for DIA but...
- [Defense Intelligence Agency FOIA Reading Room](https://www.dia.mil/FOIA) — Online portal that publishes records released under the Freedom of Information Act, including frequently requested documents and declassified materials. Researchers can browse and download released records but there i...
- [Defense Intelligence Agency GAMECHANGER](https://www.dia.mil/News-Features/Articles/Article-View/Article/2926343/gamechanger) — A policy analytics platform led by DIA in partnership with the Office of the Undersecretary of Defense for Intelligence and Security that ingests, normalizes, and searches tens of thousands of DoD policy documents. GA...

---

## Defense Logistics Agency

**Repository:** [https://github.com/api-evangelist/defense-logistics-agency](https://github.com/api-evangelist/defense-logistics-agency)

The Defense Logistics Agency (DLA) is the U.S. Department of Defense combat support agency that manages a global supply chain spanning roughly five million items in nine supply chains plus storage, distribution, fuel, construction, and disposition missions. DLA operates an extensive catalog of business applications used by suppliers, the military services, and federal partners. Most DLA applications require account registration and operate behind authentication; public-facing surfaces include the DLA Internet Bid Board System (DIBBS), the DLA Disposition Services storefront, the FedMall procurement marketplace, and federated logistics search tools.

**APIs and surfaces:**

- [DLA Applications Catalog](https://www.dla.mil/Working-With-DLA/Applications) — Comprehensive list of DLA business applications used to work with the agency, including supply, contracting, distribution, disposition, fuel, and energy systems. The catalog provides links, contacts, and outage notice...
- [DLA Internet Bid Board System (DIBBS)](https://www.dibbs.bsm.dla.mil) — Web-based application used by the Defense Logistics Agency to post requests for quote, solicitations, awards, and modifications for contracted supplies. Suppliers register for accounts and respond to solicitations thr...
- [DLA Disposition Services](https://www.dla.mil/Disposition-Services) — Online presence and storefronts for DLA Disposition Services that handle the reuse, transfer, donation, sale, and disposal of excess Department of Defense property, including the GovPlanet sales partnership and the LS...
- [FedMall](https://www.fedmall.mil) — DoD procurement marketplace operated by DLA where authorized buyers from federal, state, local, tribal, and authorized contractor communities purchase commercial off-the-shelf goods. FedMall provides catalog ingestion...
- [DLA Energy](https://www.dla.mil/Energy) — DLA business unit that supplies fuel and aerospace energy products to the U.S. military and federal customers. Public-facing surfaces include the Energy customer portal and contracting bulletins.

---

## Defense Nuclear Facilities Safety Board

**Repository:** [https://github.com/api-evangelist/defense-nuclear-facilities-safety-board](https://github.com/api-evangelist/defense-nuclear-facilities-safety-board)

The Defense Nuclear Facilities Safety Board (DNFSB) is an independent organization within the executive branch of the United States Government chartered to provide recommendations and advice to the President and the Secretary of Energy on public health and safety issues at Department of Energy defense nuclear facilities. The DNFSB publishes recommendations, letters, technical reports, weekly site-representative reports, and rulemaking notices through its public website and FOIA reading room. The agency does not publish a developer-oriented API; programmatic users rely on document downloads, RSS feeds, and Federal Register integrations.

**APIs and surfaces:**

- [DNFSB Website](https://www.dnfsb.gov) — Public-facing website of the Defense Nuclear Facilities Safety Board providing organizational information, board members, hearings, and publications. The site does not expose a developer API.
- [DNFSB Recommendations and Reports](https://www.dnfsb.gov/documents) — Library of formal recommendations, technical reports, letters, and weekly site-representative reports published by the Defense Nuclear Facilities Safety Board. Documents are available for download but there is no deve...
- [DNFSB FOIA Reading Room](https://www.dnfsb.gov/foia) — Online portal that publishes records released under the Freedom of Information Act and frequently requested documents. Records are browsable and downloadable but there is no documented API.

---

## Defense Security Cooperation Agency

**Repository:** [https://github.com/api-evangelist/defense-security-cooperation-agency](https://github.com/api-evangelist/defense-security-cooperation-agency)

The Defense Security Cooperation Agency (DSCA) is the U.S. Department of Defense agency that leads, directs, and manages security cooperation programs and resources to support U.S. policy and interests with foreign partners. DSCA administers the Foreign Military Sales (FMS) program, Foreign Military Financing (FMF) execution, International Military Education and Training (IMET), and humanitarian assistance programs. Public-facing surfaces include the Major Arms Sales notifications published in cooperation with Congress, the DSCA newsroom and library, and the Security Cooperation Workforce certification portal. DSCA does not publish a general-purpose developer API; partner-nation systems interact through controlled, government-to-government channels such as the Security Cooperation Information Portal (SCIP).

**APIs and surfaces:**

- [DSCA Website](https://www.dsca.mil) — Public-facing website of the Defense Security Cooperation Agency that describes its mission, leadership, programs, and partners. The site links to news, the security cooperation library, and the FMS program but does n...
- [DSCA Major Arms Sales Notifications](https://www.dsca.mil/press-media/major-arms-sales) — DSCA publishes Major Arms Sales notifications and supporting transmittal documents that Congress and the public use to track potential Foreign Military Sales cases. Notifications are posted as web pages and PDFs witho...
- [Security Cooperation Information Portal (SCIP)](https://www.dsca.mil/policy/dsca-policy-systems/security-cooperation-information-portal-scip) — Government-to-government portal that hosts case management, financial, and logistical information for security cooperation partners. SCIP requires authenticated access and operates outside the public developer ecosystem.
- [DSCA Security Cooperation Workforce Development](https://www.dscu.edu) — DSCA portal supporting Security Cooperation Workforce certification, training, and the Defense Security Cooperation University (DSCU). Public information is available on the website with authenticated systems for enro...

---

## Defense Technical Information Center

**Repository:** [https://github.com/api-evangelist/defense-technical-information-center](https://github.com/api-evangelist/defense-technical-information-center)

The Defense Technical Information Center (DTIC) is the U.S. Department of Defense field activity that acquires, manages, and disseminates scientific and technical information from DoD-funded research, development, test, and evaluation. DTIC operates a public Research and Engineering (R&E) Gateway, the Discover service for searching technical reports, the DoDTechSpace and Minsky natural-language platforms for defense researchers, and Dimensions for collaborative discovery. Most DTIC services require authentication tied to DoD or registered-user roles. DTIC does not publicly publish a developer API, though tools such as Dimensions and Minsky offer programmatic capabilities to authorized users.

**APIs and surfaces:**

- [DTIC Website](https://www.dtic.mil) — Public-facing website of the Defense Technical Information Center describing DTIC services, products, and access programs. The site links to Discover, R&E Gateway, training, and registration but does not publish a dev...
- [DTIC Discover](https://discover.dtic.mil) — Search platform for DTIC's collection of technical reports and other scientific and technical information assets. Discover offers faceted search, citation export, and document download for authorized users. Programmat...
- [DTIC Research and Engineering (R&E) Gateway](https://discover.dtic.mil) — Authenticated portal for DoD researchers and registered users to access DTIC research and engineering resources, planning documents, and program information.
- [DoDTechSpace](https://www.dodtechspace.mil) — Collaboration platform for DoD scientists, engineers, and program managers operated by DTIC for sharing knowledge, communities of practice, and project information.
- [DTIC FOIA Reading Room](https://www.dtic.mil/foia) — Online portal that publishes records released under the Freedom of Information Act. Records are browsable and downloadable but there is no documented API.

---

## Defense Threat Reduction Agency

**Repository:** [https://github.com/api-evangelist/defense-threat-reduction-agency](https://github.com/api-evangelist/defense-threat-reduction-agency)

The Defense Threat Reduction Agency (DTRA) is the U.S. Department of Defense combat support agency that counters and deters weapons of mass destruction (WMD) and improvised threats. DTRA leads the chemical, biological, radiological, nuclear, and high-yield explosive (CBRNE) mission for DoD and supports the Cooperative Threat Reduction (CTR) Program with partner nations. Public-facing surfaces include the DTRA website, the DTRA Information Analysis Center (DTRIAC) for technical reports, the DTRA Mission Network public information, and small-business and broad-agency-announcement procurement portals. DTRA does not publish a general-purpose developer API; partner systems interact through controlled, government-to-government channels.

**APIs and surfaces:**

- [DTRA Website](https://www.dtra.mil) — Public-facing website of the Defense Threat Reduction Agency providing organizational information, leadership, news, and links to mission-area programs. The site does not expose a developer API.
- [DTRA Information Analysis Center (DTRIAC)](https://www.dtra.mil/Mission/Cooperative-Threat-Reduction) — The DTRA Information Analysis Center provides scientific and technical information services to the Counter-WMD community, including a managed library of technical reports and analysis products. Public discovery is lim...
- [DTRA Doing Business](https://www.dtra.mil/Doing-Business-With-DTRA) — Procurement and partnership portal that publishes solicitations, Broad Agency Announcements, small-business opportunities, and points of contact for working with DTRA.
- [DTRA FOIA Reading Room](https://www.dtra.mil/FOIA) — Online portal that publishes records released under the Freedom of Information Act and frequently requested documents.

---

## Delta Regional Authority

**Repository:** [https://github.com/api-evangelist/delta-regional-authority](https://github.com/api-evangelist/delta-regional-authority)

The Delta Regional Authority (DRA) is a federal-state partnership established in 2000 to promote and encourage economic development of the lower Mississippi River and Alabama Black Belt regions. DRA does not publish a public REST API; this profile indexes the public website, grants information, and program resources.

**APIs and surfaces:**

- [Delta Regional Authority Website](https://www.dra.gov) — The DRA website surfaces grant programs, leadership development, community investment programs, and economic development resources for the eight-state Mississippi Delta and Alabama Black Belt service area.

---

## Department of Education

**Repository:** [https://github.com/api-evangelist/department-of-education](https://github.com/api-evangelist/department-of-education)

The U.S. Department of Education (ED) is a federal agency that manages and coordinates federal assistance to education and establishes policy for it. ED's mission is to promote student achievement and preparation for global competitiveness, and to ensure equal access to education. The Department exposes a portfolio of public APIs through api.data.gov, NCES, and the Open Data Platform (ODP) at data.ed.gov for postsecondary outcomes, institutional characteristics, and federal education programs.

**APIs and surfaces:**

- [College Scorecard API](https://collegescorecard.ed.gov/data/) — The College Scorecard API provides programmatic access to postsecondary institution and field-of-study data published by the U.S. Department of Education. The API exposes more than 6,000 schools and over 1,900 data po...
- [Department of Education Open Data Platform API](https://data.ed.gov/) — The Department of Education Open Data Platform (ODP) at data.ed.gov is built on CKAN and exposes a CKAN-compatible REST API for searching, retrieving, and downloading the Department's public datasets. The API surface...
- [IPEDS Data](https://nces.ed.gov/ipeds) — The Integrated Postsecondary Education Data System (IPEDS) gathers data annually from every college, university, and technical and vocational institution that participates in the federal student financial aid programs...
- [EDFacts Data](https://www2.ed.gov/about/inits/ed/edfacts/index.html) — EDFacts is a centralized data collection through which state education agencies submit pre-kindergarten through grade 12 (PK-12) education data to the U.S. Department of Education. EDFacts data are published as downlo...

---

## Department of Energy

**Repository:** [https://github.com/api-evangelist/department-of-energy](https://github.com/api-evangelist/department-of-energy)

The U.S. Department of Energy (DOE) provides extensive open data and APIs across its national laboratories and program offices. Notable APIs are published by the Energy Information Administration (EIA) for energy statistics, the Office of Scientific and Technical Information (OSTI) for research and publications, the National Renewable Energy Laboratory (NREL, rebranding as NLR) developer network for renewables and alternative fuels, and the Buildings Performance Database (BPD).

**APIs and surfaces:**

- [EIA Open Data API V2](https://www.eia.gov/opendata/) — The U.S. Energy Information Administration (EIA) Open Data API v2 is a fully RESTful implementation of EIA's public energy statistics. Routes are arranged in a logical hierarchy across petroleum, natural gas, coal, el...
- [OSTI DOE PAGES API](https://www.osti.gov/pages/api/v1/docs) — The DOE PAGES (Public Access Gateway for Energy and Science) REST API provides programmatic access to publications resulting from DOE-funded research, hosted by the Office of Scientific and Technical Information (OSTI...
- [OSTI ELINK API](https://www.osti.gov/elink/) — The OSTI ELINK API is the Office of Scientific and Technical Information's submission and retrieval interface for DOE research records. It supports submission of metadata and full text by DOE-funded research organizat...
- [NREL/NLR Developer Network APIs](https://developer.nlr.gov/) — The National Renewable Energy Laboratory (NREL, transitioning to NLR) Developer Network publishes a portfolio of REST APIs covering solar resource and PV simulation, alternative fuels and stations, electricity utiliti...
- [Buildings Performance Database API](https://www.energy.gov/eere/buildings/application-programming-interface) — The Buildings Performance Database (BPD) is a DOE repository of anonymized empirical performance records for commercial and residential buildings. The BPD API allows partners to query aggregate distributions and compa...
- [Department of Energy Open Data Catalog](https://catalog.data.gov/organization/doe-gov) — The DOE participates in Data.gov by publishing thousands of dataset records under the doe-gov organization. These datasets cover energy consumption, generation, environmental impact, R&D, and more, and are accessible...

---

## Department of Homeland Security

**Repository:** [https://github.com/api-evangelist/department-of-homeland-security](https://github.com/api-evangelist/department-of-homeland-security)

The U.S. Department of Homeland Security (DHS) is a cabinet-level federal agency responsible for protecting the nation from terrorism, securing borders, enforcing immigration law, responding to disasters, and securing cyberspace. DHS exposes APIs across its operational components, including FEMA's OpenFEMA platform, USCIS's Developer Portal, the CISA Known Exploited Vulnerabilities catalog, the National Terrorism Advisory System (NTAS) feed, and the DHS Open Data Catalog.

**APIs and surfaces:**

- [OpenFEMA API](https://www.fema.gov/about/openfema) — The OpenFEMA API is FEMA's public RESTful service that exposes more than 70 datasets including disaster declarations, public assistance funded projects, individual assistance grants, hazard mitigation, and housing ass...
- [USCIS Case Status API](https://developer.uscis.gov/api/case-status) — The USCIS Case Status API provides programmatic access to the same Case Status Online lookup that immigration applicants use, allowing authorized partners to retrieve the current status and history of a USCIS case by...
- [USCIS FOIA Request and Status API](https://developer.uscis.gov/api/foia-request-and-status) — The USCIS FOIA Request and Status API allows partners to submit Freedom of Information Act requests programmatically and check the status of submitted requests. It is published through the USCIS Developer Portal using...
- [CISA Known Exploited Vulnerabilities Catalog Feed](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) — The CISA Known Exploited Vulnerabilities (KEV) catalog is a curated list of vulnerabilities that have been actively exploited in the wild. The catalog is published as a JSON and CSV feed by the Cybersecurity and Infra...
- [National Terrorism Advisory System Feed](https://www.dhs.gov/ntas-api-documentation) — The National Terrorism Advisory System (NTAS) feed publishes current terrorism alerts and bulletins issued by DHS as XML files. Developers can consume the feed to surface advisory content in their own applications and...
- [DHS Open Data Catalog](https://www.dhs.gov/data) — The DHS Open Data Catalog publishes datasets across the Department's mission areas (immigration, law enforcement, emergency management, cybersecurity, infrastructure protection, screening, and maritime). Datasets are...

---

## Department of Housing and Urban Development

**Repository:** [https://github.com/api-evangelist/department-of-housing-and-urban-development](https://github.com/api-evangelist/department-of-housing-and-urban-development)

The U.S. Department of Housing and Urban Development (HUD) is the federal agency responsible for overseeing programs that address the country's housing needs and promote sustainable urban development. HUD exposes programmatic data through the HUD USER FMR/IL API for Fair Market Rents and Income Limits, the HUD eGIS storefront and ArcGIS REST services for geospatial assets, the data.hud.gov data catalog, and various FHA tools including mortgage limits and condominium lookup services.

**APIs and surfaces:**

- [HUD USER FMR/IL API](https://www.huduser.gov/portal/dataset/fmr-api.html) — The HUD USER FMR/IL API publishes Fair Market Rents (FMRs), Small Area Fair Market Rents, and Income Limits (IL) for U.S. metropolitan and non-metropolitan areas. It exposes endpoints for listing states, metros, and c...
- [HUD eGIS ArcGIS REST Services](https://hudgis-hud.opendata.arcgis.com/) — The HUD eGIS storefront publishes ArcGIS-based REST services and feature layers for the Department's geospatial assets, including Continuum of Care boundaries, CPD activities, public housing locations, low-income hous...
- [FHA Mortgage Limits](https://entp.hud.gov/idapp/html/hicostlook.cfm) — The FHA Mortgage Limits service lets users look up the FHA or Government-Sponsored Enterprise (GSE) mortgage limits for one or more areas, by state, county, or Metropolitan Statistical Area, with results that also inc...
- [HUD Open Data Catalog](https://data.hud.gov/) — The HUD Open Data Catalog at data.hud.gov is curated by HUD's Office of the Chief Data Officer and lists the Department's open datasets across housing, community development, and fair housing. Datasets are cross-liste...

---

## Department of Justice

**Repository:** [https://github.com/api-evangelist/department-of-justice](https://github.com/api-evangelist/department-of-justice)

The U.S. Department of Justice (DOJ) is the federal executive department responsible for enforcing the law and defending the interests of the United States. DOJ exposes a portfolio of public APIs and data feeds including the DOJ News API for press releases, speeches, and blog entries from the Office of Public Affairs, the FOIA.gov developer APIs, the Bureau of Justice Statistics NCVS and NIBRS APIs, and the DOJ Open Data Catalog.

**APIs and surfaces:**

- [DOJ News API](https://www.justice.gov/developer/api-documentation/api_v1) — The DOJ News API exposes more than 14,000 press releases, speeches, and blog entries from the Office of Public Affairs as a JSON web service. Endpoints under /api/v1/ provide list and detail views for each content typ...
- [FOIA.gov Annual Report API](https://www.foia.gov/developer/) — The FOIA.gov developer resources expose annual FOIA report data as XML conforming to the FOIA Annual Report XML schema. Reports can be retrieved by agency abbreviation and year through a documented endpoint pattern.
- [BJS National Crime Victimization Survey (NCVS) API](https://bjs.ojp.gov/national-crime-victimization-survey-ncvs-api) — The Bureau of Justice Statistics NCVS API provides REST access to the National Crime Victimization Survey datasets. Endpoints expose Personal Victimization, Personal Population, Household Victimization, and Household...
- [BJS NIBRS National Estimates API](https://bjs.ojp.gov/national-incident-based-reporting-system-nibrs-national-estimates-api) — The Bureau of Justice Statistics NIBRS National Estimates API provides REST access to the National Incident-Based Reporting System estimates including victimization counts and rates. Endpoints return JSON or CSV and f...
- [DOJ Open Data Catalog](https://www.justice.gov/data) — DOJ publishes datasets through the Open Government program and the Department's Data Inventory. Datasets are also surfaced on Data.gov under the doj-gov organization and are accessible via the CKAN-compatible Data.gov...

---

## Department of Labor

**Repository:** [https://github.com/api-evangelist/department-of-labor](https://github.com/api-evangelist/department-of-labor)

The U.S. Department of Labor (DOL) is the federal department that fosters, promotes, and develops the welfare of wage earners, job seekers, and retirees, improves working conditions, advances opportunities for profitable employment, and assures work-related benefits and rights. DOL exposes a portfolio of public APIs and data feeds including the modernized DOL APIv4 served from the DOL Open Data Portal, the Bureau of Labor Statistics Public Data API, the DOL Enforcement Data site, and Data.gov.

**APIs and surfaces:**

- [DOL Open Data API V4](https://dataportal.dol.gov/) — The DOL Open Data API v4 is the Department of Labor's modernized REST API replacing the retired developer.dol.gov APIv1 and APIv2. It is served from the DOL Data Portal at dataportal.dol.gov and exposes more than 200...
- [BLS Public Data API V2](https://www.bls.gov/developers/) — The Bureau of Labor Statistics Public Data API v2 provides programmatic access to historical BLS time series data in JSON or Excel. Version 2 requires registration to obtain a registrationkey query parameter and raise...
- [DOL Enforcement Data](https://data.dol.gov/) — The DOL Enforcement Data site at data.dol.gov publishes the Department's enforcement records from agencies including the Wage and Hour Division, OSHA, MSHA, OFCCP, and the Employee Benefits Security Administration. Re...
- [DOL API Sampler](https://devtools.dol.gov/apisampler) — The DOL API Sampler is an interactive playground for exploring the DOL Open Data API v4 endpoints. It serves as a quick way to issue sample requests, browse parameters, and inspect responses against the live API.
- [DOL Open Data Catalog](https://catalog.data.gov/organization/dol-gov) — The Department of Labor Open Data Catalog publishes datasets across labor statistics, enforcement, employment training, and worker protection programs. Datasets are surfaced on Data.gov under the dol-gov organization...

---

## Department of State

**Repository:** [https://github.com/api-evangelist/department-of-state](https://github.com/api-evangelist/department-of-state)

The U.S. Department of State leads U.S. foreign policy, conducts diplomacy with foreign governments, issues U.S. passports and visas, supports U.S. citizens abroad, and publishes country-specific information and travel advisories. The Department does not currently operate a unified developer portal; instead, integrators work from public RSS feeds, web pages, the Foreign Affairs Manual, and references to internal systems (ConsularLookout, eCASE) that are not publicly accessible.

**APIs and surfaces:**

- [State Department Travel Advisories](https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html) — Country-by-country travel advisories (Levels 1-4) issued by the Bureau of Consular Affairs, with RSS distribution.
- [Country Information Pages](https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html) — Per-country pages covering entry/exit requirements, local laws, safety, health, and U.S. embassy contacts.
- [Smart Traveler Enrollment Program (STEP)](https://step.state.gov/) — Voluntary enrollment system for U.S. citizens traveling or residing abroad to receive embassy alerts.
- [U.S. Visa Information](https://travel.state.gov/content/travel/en/us-visas.html) — Reference information on nonimmigrant and immigrant visa categories, processing times, and reciprocity schedules.
- [U.S. Passport Services](https://travel.state.gov/content/travel/en/passports.html) — Public-facing passport application, renewal, and status-check resources from the Bureau of Consular Affairs.
- [Foreign Affairs Manual (FAM) and Handbook (FAH)](https://fam.state.gov/) — Department-wide policy and procedural manuals issued by the Office of Directives Management.
- [ConsularLookout (CLASS)](https://travel.state.gov/content/travel/en/legal/visa-law0.html) — Government-internal name-check system used during visa and passport adjudication. Referenced here for completeness; no public API.
- [eCASE Enterprise Case Management](https://www.state.gov/) — State Department-wide enterprise case-management platform. Internal system; referenced here for organizational completeness.
- [State Department Open Data on data.gov](https://catalog.data.gov/dataset?organization=state-gov) — Public datasets published by the State Department through the federal open-data catalog.

---

## Department of the Interior

**Repository:** [https://github.com/api-evangelist/department-of-the-interior](https://github.com/api-evangelist/department-of-the-interior)

The U.S. Department of the Interior manages federal lands, water, wildlife, energy and mineral resources, and trust responsibilities to American Indian, Alaska Native, and insular communities. Interior bureaus - National Park Service, U.S. Geological Survey, Bureau of Land Management, U.S. Fish and Wildlife Service, Bureau of Reclamation, Bureau of Indian Affairs, and the Office of Natural Resources Revenue - publish a number of public APIs and open-data portals.

**APIs and surfaces:**

- [National Park Service Data API](https://www.nps.gov/subjects/developer/api-documentation.htm) — Search and retrieve parks, alerts, campgrounds, visitor centers, events, and articles for U.S. National Park Service units.
- [USGS Earthquake Hazards Program API](https://earthquake.usgs.gov/fdsnws/event/1/) — FDSN-compatible earthquake catalog API returning GeoJSON FeatureCollections for queries by time, magnitude, location, and depth.
- [USGS Water Services API](https://waterservices.usgs.gov/) — Real-time and historical surface-water, groundwater, and water-quality data via the National Water Information System.
- [DOI Open Data Catalog](https://data.doi.gov/) — Department-wide open-data catalog at data.doi.gov, including datasets from all Interior bureaus.
- [BLM Public Lands Data](https://www.blm.gov/about/data) — Bureau of Land Management public-land data, including the Land Records System, mining claims, and recreation areas.
- [USFWS Environmental Conservation Online System (ECOS) API](https://ecos.fws.gov/ecp/) — U.S. Fish and Wildlife Service data on listed species under the Endangered Species Act and the National Wildlife Refuge System.
- [Bureau of Reclamation Water Data](https://www.usbr.gov/projects/index.php) — Reclamation reservoir, dam, and water-operations data for the western United States.
- [ONRR Natural Resources Revenue Data](https://revenuedata.doi.gov/) — Office of Natural Resources Revenue datasets on royalty, rent, and bonus revenue from federal energy and mineral production.

---

## Department of the Treasury

**Repository:** [https://github.com/api-evangelist/department-of-the-treasury](https://github.com/api-evangelist/department-of-the-treasury)

The U.S. Department of the Treasury manages federal finances, public debt, Treasury securities, U.S. currency production, tax administration, financial sanctions, and economic-statistical reporting. Treasury bureaus publish several public APIs, anchored by the Bureau of the Fiscal Service's Fiscal Data API and the Office of Foreign Assets Control's Sanctions List Service.

**APIs and surfaces:**

- [Treasury Fiscal Data API](https://fiscaldata.treasury.gov/api-documentation/) — Standardized federal-finance datasets from the Bureau of the Fiscal Service - Debt to the Penny, Daily and Monthly Treasury Statements, auctions, interest rates, exchange rates, and federal spending.
- [OFAC Sanctions List Service API](https://sanctionslistservice.ofac.treas.gov/) — Specially Designated Nationals (SDN) and Consolidated Sanctions lists from the Office of Foreign Assets Control, with structured search.
- [TreasuryDirect Securities API](https://www.treasurydirect.gov/TA_WS/securities/announced) — Public reference data on marketable Treasury securities (auctions, results, security details) published via TreasuryDirect.
- [SAM.gov Entity Management API](https://open.gsa.gov/api/entity-api/) — Federal Service for Award Management (SAM) entity registration, exclusions, and assistance-listings data published via api.data.gov.
- [IRS Public APIs](https://www.irs.gov/charities-non-profits/tax-exempt-organization-search) — The Internal Revenue Service exposes select public datasets and tools through download endpoints, including Tax-Exempt Organization Search.

---

## Department of Transportation

**Repository:** [https://github.com/api-evangelist/department-of-transportation](https://github.com/api-evangelist/department-of-transportation)

The U.S. Department of Transportation (DOT) and its operating administrations - NHTSA, FMCSA, FAA, FRA, FTA, MARAD, PHMSA, and BTS - publish a number of public APIs covering vehicles, motor carriers, aviation, transit, freight, and transportation statistics.

**APIs and surfaces:**

- [NHTSA vPIC API](https://vpic.nhtsa.dot.gov/api/) — Vehicle Product Information Catalog. Decode VINs and look up makes, models, manufacturers, and World Manufacturer Identifiers.
- [NHTSA Vehicle Safety API](https://api.nhtsa.gov/) — Vehicle, equipment, child-seat, and tire recalls; consumer complaints; defect investigations; 5-Star Safety Ratings.
- [FMCSA QCMobile API](https://mobile.fmcsa.dot.gov/qc/services/getting-started) — Federal Motor Carrier Safety Administration carrier registration, operating-authority, inspection, and crash data.
- [FAA Airport Status API](https://www.faa.gov/data) — Real-time airport status, weather, and delay information for major U.S. airports.
- [Bureau of Transportation Statistics Data Portal](https://www.bts.gov/data-portals) — Public datasets and downloadable data products published by BTS.
- [Federal Railroad Administration Safety Data](https://safetydata.fra.dot.gov/) — FRA Office of Safety Analysis - rail incident, accident, and inspection data.
- [Federal Transit Administration National Transit Database](https://www.transit.dot.gov/ntd) — Public-transportation operating, financial, and asset data submitted by transit agencies under the National Transit Database.
- [PHMSA Pipeline Safety Data](https://www.phmsa.dot.gov/data-and-statistics) — Pipeline and Hazardous Materials Safety Administration incident, mileage, and operator data for U.S. pipelines.

---

## Department of Veterans Affairs (VA)

**Repository:** [https://github.com/api-evangelist/department-of-veterans-affairs](https://github.com/api-evangelist/department-of-veterans-affairs)

The Department of Veterans Affairs (VA) provides health care, benefits, and memorial services to U.S. military Veterans and their families. The VA API Platform at developer.va.gov publishes a structured catalog of APIs spanning Veteran identity confirmation, benefits claims, appeals, document intake, education, loan guaranty, facilities, forms, and HL7 FHIR clinical health data.

**APIs and surfaces:**

- [VA Facilities API](https://developer.va.gov/explore/api/va-facilities) — Search and retrieve VA medical facilities, benefits offices, vet centers, and cemeteries by location, service, or identifier.
- [VA Forms API](https://developer.va.gov/explore/api/va-forms) — Programmatic catalog of official VA forms with current PDF URLs and revision metadata.
- [VA Benefits Claims API](https://developer.va.gov/explore/api/benefits-claims) — Submit and track VA benefits claims (Form 526), intent-to-file notices, and Power of Attorney records.
- [VA Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake) — Submit and track PDF documents for benefits applications via a guided upload workflow.
- [VA Appeals Status API](https://developer.va.gov/explore/api/appeals-status) — Retrieve the status, events, and issues of a Veteran's appeals, supplemental claims, and higher-level reviews.
- [VA Clinical Health API (FHIR)](https://developer.va.gov/explore/api/clinical-health) — Read HL7 FHIR R4 clinical resources for a Veteran via SMART-on-FHIR authorization.
- [VA Veteran Confirmation API](https://developer.va.gov/explore/api/veteran-confirmation) — Confirm a person's Veteran status given basic identifying information.
- [VA Address Validation API](https://developer.va.gov/explore/api/address-validation) — Verify and standardize U.S. and international addresses for Veterans and their families.
- [VA Benefits Documents API](https://developer.va.gov/explore/api/benefits-documents) — Retrieve VA-generated benefit documents (decision letters, award letters, certifications) for Veterans.
- [VA Benefits Reference Data API](https://developer.va.gov/explore/api/benefits-reference-data) — Reference data lookups for benefits-claim form fields (countries, states, disabilities, treatment centers, etc.).
- [VA Community Care Eligibility API](https://developer.va.gov/explore/api/community-care-eligibility) — Determine whether a Veteran is eligible for community-care services under VA referral programs.
- [VA Decision Reviews API](https://developer.va.gov/explore/api/decision-reviews) — Submit supplemental claims, higher-level reviews, and Notices of Disagreement under appeals modernization.
- [VA Direct Deposit Management API](https://developer.va.gov/explore/api/direct-deposit-management) — Read and update a Veteran's direct-deposit information for benefit payments.
- [VA Education Benefits API](https://developer.va.gov/explore/api/education-benefits) — Submit and track GI Bill and VA education benefit applications and entitlement data.
- [VA Loan Guaranty API](https://developer.va.gov/explore/api/loan-guaranty) — Access VA-guaranteed home-loan eligibility, certificates of eligibility (COE), and loan data.
- [VA Loan Review API](https://developer.va.gov/explore/api/loan-review) — Lender-facing API for review, conditions, and modification of VA-guaranteed home loans.
- [VA Guaranty Remittance API](https://developer.va.gov/explore/api/guaranty-remittance) — Submit and track guaranty remittance payments for VA-guaranteed loans.
- [VA Letter Generator API](https://developer.va.gov/explore/api/va-letter-generator) — Generate official VA letters (e.g. service verification, benefit summary) on demand.
- [VA Patient Health API (FHIR)](https://developer.va.gov/explore/api/patient-health) — Veteran-authorized SMART-on-FHIR API exposing the patient's own health record.
- [VA Veteran Service History and Eligibility API](https://developer.va.gov/explore/api/veteran-service-history-and-eligibility) — Retrieve a Veteran's service history and eligibility for VA programs.

---

## Director of National Intelligence

**Repository:** [https://github.com/api-evangelist/director-of-national-intelligence](https://github.com/api-evangelist/director-of-national-intelligence)

The Office of the Director of National Intelligence leads intelligence integration and forges an intelligence community that delivers the most insightful intelligence possible. The ODNI serves as the head of the intelligence community, overseeing and coordinating the foreign and domestic activities of the US intelligence community.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Drug Enforcement Administration

**Repository:** [https://github.com/api-evangelist/drug-enforcement-administration](https://github.com/api-evangelist/drug-enforcement-administration)

Drug Enforcement Administration (DEA) Registration File API for Web Developers (on the Internet) (25,000 Inquiries). DEA25000. Publication Date: 2006: Page Count: 0: Abstract: The DEA API (Application Program Interface) enables a programmer to develop a program for a specific platform and integrate the DEA data into their verification system ...

**APIs and surfaces:**

- [Drug Enforcement Administration](https://ntrl.ntis.gov/NTRL/dashboard/searchResults/titleDetail/DEA25000.xhtml) — Drug Enforcement Administration (DEA) Registration File API for Web Developers (on the Internet) (25,000 Inquiries). DEA25000. Publication Date: 2006: Page Count: 0: Abstract: The DEA API (Application Program Interfac...

---

## Economic Development Administration

**Repository:** [https://github.com/api-evangelist/economic-development-administration](https://github.com/api-evangelist/economic-development-administration)

The U.S. Economic Development Administration (EDA) is an agency in the United States Department of Commerce that provides grants and technical assistance to economically distressed communities in order to generate new employment, help retain existing jobs and stimulate industrial and commercial growth through a variety of investment programs. EDA works with boards and communities across the country on economic development strategies.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Economic Research Service

**Repository:** [https://github.com/api-evangelist/economic-research-service](https://github.com/api-evangelist/economic-research-service)

The Economic Research Service (ERS) is a division of the United States Department of Agriculture (USDA) that conducts economic research and analysis related to agriculture, food, and rural development. ERS provides policymakers, stakeholders, and the public with valuable information and data to help inform decision-making and policy development.

**APIs and surfaces:**

- [USDA ERS Data APIs](https://www.ers.usda.gov/developer/data-apis) — Access ERS data products in machine-readable formats for analysis or integration into your own applications. Delivered via api.data.gov as REST endpoints. Requires an api.data.gov key.
- [USDA ERS Geospatial APIs](https://www.ers.usda.gov/developer/geospatial-apis) — Integrate ERS map layers into the GIS package of your choice, on their own or mashed up with other geospatial data.

---

## Election Assistance Commission

**Repository:** [https://github.com/api-evangelist/election-assistance-commission](https://github.com/api-evangelist/election-assistance-commission)

The U.S. Election Assistance Commission (EAC) was established by the Help America Vote Act of 2002 (HAVA). The EAC is an independent, bipartisan commission charged with developing guidance to meet HAVA requirements, adopting voluntary voting system guidelines, and serving as a national clearinghouse of information on election administration. The EAC also accredits testing laboratories, certifies voting systems, and audits the use of HAVA funds. The EAC publishes the Election Administration and Voting Survey (EAVS) datasets and operates an RSS news feed; it does not publish a formal developer API.

**APIs and surfaces:**

- [Election Assistance Commission](https://www.eac.gov) — Public-facing presence of the U.S. Election Assistance Commission. The EAC publishes Election Administration and Voting Survey (EAVS) datasets, codebooks, voluntary voting system guidelines, voter list maintenance stu...

---

## Energy Information Administration

**Repository:** [https://github.com/api-evangelist/energy-information-administration](https://github.com/api-evangelist/energy-information-administration)

The U.S. Energy Information Administration (EIA) is committed to its free and open data by making it available through an Application Programming Interface (API) and its open data tools. The EIA Open Data API v2 is multi-faceted and contains time-series datasets organized by the main energy categories, including electricity, natural gas, petroleum, coal, nuclear, renewables, total energy, international energy statistics, the State Energy Data System (SEDS), and CO2 emissions aggregates.

**APIs and surfaces:**

- [EIA Open Data API](https://www.eia.gov/opendata/) — The EIA Open Data API v2 provides programmatic access to free U.S. energy time-series data through a hierarchical route structure organized by energy category. An API key is required (free registration) and is passed...

---

## Environmental Protection Agency

**Repository:** [https://github.com/api-evangelist/environmental-protection-agency](https://github.com/api-evangelist/environmental-protection-agency)

The U.S. Environmental Protection Agency (EPA) provides multiple public data APIs covering environmental records, air quality monitoring, UV forecasts, and internal data holdings. These services enable State and local governments, federal agencies, researchers, and the public to access environmental data about air, water, and land.

**APIs and surfaces:**

- [EPA Envirofacts Data Service API](https://www.epa.gov/enviro/envirofacts-data-service-api) — Envirofacts provides a single point of access to U.S. EPA environmental data contained in U.S. EPA databases. The RESTful Data Service API returns output in JSON, CSV, Excel, HTML, JSONP, Parquet, PDF, or XML formats...
- [EPA Air Quality System API](https://aqs.epa.gov/aqsweb/documents/data_api.html) — The EPA Air Quality System (AQS) API provides programmatic access to ambient air pollution data collected by the EPA, state, local, and tribal air pollution control agencies, including hourly sample data, daily/quarte...
- [EPA UV Index API](https://www.epa.gov/enviro/web-services) — The EPA UV Index API provides hourly and daily ultraviolet radiation forecasts by ZIP code or city/state. Output is available in XML, JSON, Excel, and CSV formats.
- [EPA ECHO Compliance and Enforcement API](https://echo.epa.gov/tools/web-services) — Enforcement and Compliance History Online (ECHO) provides public access to compliance and enforcement information for EPA-regulated facilities nationwide. The ECHO web services API supports facility searches, complian...

---

## Equal Employment Opportunity Commission

**Repository:** [https://github.com/api-evangelist/equal-employment-opportunity-commission](https://github.com/api-evangelist/equal-employment-opportunity-commission)

The U.S. Equal Employment Opportunity Commission (EEOC) is responsible for enforcing federal laws that make it illegal to discriminate against a job applicant or an employee because of the person's race, color, religion, sex (including pregnancy, childbirth, or related conditions, gender identity, and sexual orientation), national origin, age (40 or older), disability or genetic information. EEOC publishes EEO-1, EEO-3, EEO-4, and EEO-5 workforce demographic data through the EEOC Explore data querying tool and downloadable bulk data files, but does not currently publish a public REST API for programmatic data access.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Export-Import Bank of the United States

**Repository:** [https://github.com/api-evangelist/about-exim-exim-gov-export-import-bank-of-the-united-states](https://github.com/api-evangelist/about-exim-exim-gov-export-import-bank-of-the-united-states)

The U.S. Export-Import Bank (EXIM) is the official export credit agency of the United States federal government. It assists in financing and facilitating U.S. exports of goods and services by providing export credit insurance, working capital guarantees, and direct loans to help American businesses compete in the global marketplace. EXIM publishes open government data including authorization records accessible via the federal Data.gov catalog using the Socrata Open Data API (SODA).

**APIs and surfaces:**

- [EXIM Open Data API](https://www.exim.gov/open-government-data) — EXIM Bank publishes open government datasets through the federal Data.gov catalog. Datasets include export authorization records from 2006 onward, accessible programmatically via the Socrata Open Data API (SODA). The...

---

## Fair Housing and Equal Opportunity

**Repository:** [https://github.com/api-evangelist/fair-housing-and-equal-opportunity](https://github.com/api-evangelist/fair-housing-and-equal-opportunity)

The mission of the Office of Fair Housing and Equal Opportunity (FHEO) is to eliminate housing discrimination, promote economic opportunity, and achieve diverse, inclusive communities by leading the nation in the enforcement, administration, development, and public understanding of federal fair housing policies and laws.

**APIs and surfaces:**

- [Fair Housing and Equal Opportunity](https://www.hud.gov/fairhousing) — The Office of Fair Housing and Equal Opportunity (FHEO) administers and enforces federal laws that prohibit discrimination in housing based on race, color, national origin, religion, sex, familial status, and disabili...

---

## Fannie Mae

**Repository:** [https://github.com/api-evangelist/fannie-mae](https://github.com/api-evangelist/fannie-mae)

Fannie Mae, officially known as the Federal National Mortgage Association, is a government-sponsored enterprise that plays a critical role in the American housing market. Established in 1938, Fannie Mae operates as a secondary mortgage lender, purchasing mortgages from banks and other financial institutions. By buying these loans, Fannie Mae helps to provide liquidity to the mortgage market, enabling banks to lend more money to homebuyers. Fannie Mae operates a developer portal that hosts API integrations for mortgage industry partners; access typically requires authenticated business relationships.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Farm Credit Administration

**Repository:** [https://github.com/api-evangelist/farm-credit-administration](https://github.com/api-evangelist/farm-credit-administration)

The Farm Credit Administration (FCA) is an independent federal agency responsible for regulating and supervising the Farm Credit System, a nationwide network of cooperatively owned institutions that provide credit and financial services to farmers, ranchers, and other agricultural borrowers. The FCA ensures that the Farm Credit System operates in a safe and sound manner and provides fair and competitive services. FCA does not publish a public REST API; however, the FCS Data Portal and downloadable Call Reports provide programmatic access to financial data on Farm Credit System institutions.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Farm Service Agency

**Repository:** [https://github.com/api-evangelist/farm-service-agency](https://github.com/api-evangelist/farm-service-agency)

As directed by the OPEN (Open, Public, Electronic, and Necessary) Government Data Act and through its commitment to United States agriculturalists and interested public, FSA provides numerous data resources through reports, visualizations, and other formats.

**APIs and surfaces:**

- [Farm Service Agency](https://www.fsa.usda.gov/online-services/fsa-online-data-resources) — As directed by the OPEN (Open, Public, Electronic, and Necessary) Government Data Act and through its commitment to United States agriculturalists and interested public, FSA provides numerous data resources through re...

---

## Federal Accounting Standards Advisory Board

**Repository:** [https://github.com/api-evangelist/federal-accounting-standards-advisory-board](https://github.com/api-evangelist/federal-accounting-standards-advisory-board)

The Federal Accounting Standards Advisory Board (FASAB) is an independent organization responsible for establishing accounting standards for the federal government. FASAB strives to improve the quality and consistency of financial reporting within federal agencies, ultimately ensuring transparency and accountability in government financial operations.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Federal Aviation Administration

**Repository:** [https://github.com/api-evangelist/federal-aviation-administration](https://github.com/api-evangelist/federal-aviation-administration)

The Federal Aviation Administration (FAA) is the U.S. Department of Transportation agency responsible for the regulation and oversight of civil aviation. The FAA publishes a range of public data products and APIs covering airport status, NOTAMs, aeronautical information, airmen and aircraft registries, and System Wide Information Management (SWIM) feeds for air traffic operations.

**APIs and surfaces:**

- [FAA NOTAM](https://api.faa.gov/notamapi/) — The FAA NOTAM API provides access to Notices to Air Missions (NOTAMs), which are time-critical aeronautical information that could affect a pilot's decision to make a flight. The API allows developers to query active...
- [FAA Airport Status](https://www.faa.gov/data_research/aviation_data_statistics) — The FAA Airport Status Web Service (ASWS) provides current airport conditions, including delays and ground stops, for major United States airports. Developers can use the service to retrieve real-time status informati...
- [FAA NASR Subscription](https://nfdc.faa.gov/nfdcApps/services/ajv5/airportSubscriberFile.jsp) — The FAA National Airspace System Resources (NASR) Subscription provides authoritative aeronautical data covering airports, navigation aids, airways, fixes, and special-use airspace on a 28-day publication cycle. The d...
- [FAA Airmen Registry](https://www.faa.gov/licenses_certificates/airmen_certification/releasable_airmen_download) — The FAA Airmen Registry provides downloadable data on certificated pilots and other airmen in the United States, including pilot certificates, ratings, and medical certificates. The dataset supports verification, rese...
- [FAA Aircraft Registry](https://www.faa.gov/licenses_certificates/aircraft_certification/aircraft_registry/releasable_aircraft_download) — The FAA Aircraft Registry provides downloadable data on civil aircraft registered in the United States, including registration, ownership, and airworthiness information. The dataset is widely used for safety analysis,...
- [FAA System Wide Information Management](https://www.faa.gov/air_traffic/technology/swim) — The FAA System Wide Information Management (SWIM) program is a service-oriented information sharing platform that delivers real-time National Airspace System data to authorized consumers. SWIM publishes message-orient...

---

## Federal Bureau of Investigation

**Repository:** [https://github.com/api-evangelist/federal-bureau-of-investigation](https://github.com/api-evangelist/federal-bureau-of-investigation)

The Federal Bureau of Investigation (FBI) is the domestic intelligence and security service of the United States and its principal federal law enforcement agency. The FBI publishes public APIs covering its Most Wanted program and Uniform Crime Reporting (UCR) data through the Crime Data Explorer.

**APIs and surfaces:**

- [FBI Most Wanted](https://www.fbi.gov/wanted/api) — The FBI Most Wanted API is designed to help developers easily get information on the FBI Wanted program, including Ten Most Wanted Fugitives, Most Wanted Terrorists, kidnappings and missing persons, and seeking inform...
- [FBI Crime Data Explorer](https://crime-data-explorer.fbi.gov/) — The FBI Crime Data Explorer (CDE) provides public access to Uniform Crime Reporting (UCR) data through a JSON API. The API exposes summary statistics, agency-level participation, offense and arrest counts, and hate cr...

---

## Federal Bureau of Prisons

**Repository:** [https://github.com/api-evangelist/federal-bureau-of-prisons](https://github.com/api-evangelist/federal-bureau-of-prisons)

The Federal Bureau of Prisons (BOP) is responsible for the custody and care of federal inmates in the United States. The BOP operates the inmate locator and publishes facility information online but does not currently offer a public, documented developer API.

**APIs and surfaces:**

- [Federal Bureau of Prisons](https://www.bop.gov) — The Federal Bureau of Prisons web presence including the inmate locator and facility directory. No public developer API is currently published.

---

## Federal Committee on Statistical Methodology

**Repository:** [https://github.com/api-evangelist/federal-committee-on-statistical-methodology](https://github.com/api-evangelist/federal-committee-on-statistical-methodology)

The Federal Committee on Statistical Methodology (FCSM) is an interagency committee dedicated to improving the quality of Federal statistics. FCSM is hosted under the federal Statistical Policy Office and does not publish a public developer API.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Federal Communications Commission

**Repository:** [https://github.com/api-evangelist/federal-communications-commission](https://github.com/api-evangelist/federal-communications-commission)

The Federal Communications Commission (FCC) regulates interstate and international communications by radio, television, wire, satellite, and cable in the United States. The FCC exposes public APIs including the Electronic Comment Filing System (ECFS) and the FCC Open Data portal.

**APIs and surfaces:**

- [FCC ECFS API](https://www.fcc.gov/ecfs/) — The FCC Electronic Comment Filing System (ECFS) public API provides programmatic access to filings, proceedings, and submissions made to the Federal Communications Commission.
- [FCC Open Data API](https://opendata.fcc.gov/) — The FCC Open Data Portal exposes datasets via the Socrata Open Data API (SODA), including the Pirate Radio Broadcasting Database, broadband deployment data, and consumer complaint summaries.

---

## Federal Deposit Insurance Corporation

**Repository:** [https://github.com/api-evangelist/federal-deposit-insurance-corporation](https://github.com/api-evangelist/federal-deposit-insurance-corporation)

The Federal Deposit Insurance Corporation (FDIC) is an independent agency of the United States government that provides deposit insurance to depositors in US commercial banks and savings institutions. The FDIC also supervises and examines banks for safety and soundness, promotes consumer protection, and publishes the BankFind Suite API for accessing data on FDIC-insured institutions.

**APIs and surfaces:**

- [FDIC BankFind Suite API](https://banks.data.fdic.gov/docs/) — The FDIC BankFind Suite API provides programmatic access to data about FDIC-insured banks and savings institutions, including institution profiles, branch locations, financial summaries, historical records, failures,...

---

## Federal Emergency Management Agency

**Repository:** [https://github.com/api-evangelist/federal-emergency-management-agency](https://github.com/api-evangelist/federal-emergency-management-agency)

The Federal Emergency Management Agency (FEMA) coordinates the federal government's role in preparing for, preventing, mitigating, responding to, and recovering from disasters. The OpenFEMA program provides programmatic access to disaster declarations, public assistance, individual assistance, hazard mitigation, and National Flood Insurance Program (NFIP) data.

**APIs and surfaces:**

- [OpenFEMA API](https://www.fema.gov/about/openfema/api) — The OpenFEMA API provides programmatic access to FEMA's public datasets including disaster declarations, public assistance, individual assistance, hazard mitigation grants, and the National Flood Insurance Program.

---

## Federal Highway Administration

**Repository:** [https://github.com/api-evangelist/federal-highway-administration](https://github.com/api-evangelist/federal-highway-administration)

The Federal Highway Administration (FHWA) provides stewardship over the construction, maintenance and preservation of the Nations highways, bridges and tunnels. FHWA also conducts research and provides technical assistance to state and local agencies to improve safety, mobility, and to encourage innovation.

**APIs and surfaces:**

- [Federal Highway Administration](https://highways.dot.gov) — The Federal Highway Administration provides stewardship over the Nation's highways, bridges and tunnels.

---

## Federal Housing Finance Agency

**Repository:** [https://github.com/api-evangelist/federal-housing-finance-agency](https://github.com/api-evangelist/federal-housing-finance-agency)

The Federal Housing Finance Agency (FHFA) is an independent agency that was established by the Housing and Economic Recovery Act of 2008 (HERA). The agency is responsible for the effective supervision, regulation, and oversight of the housing mission of Fannie Mae, Freddie Mac, and the Federal Home Loan Bank System.

**APIs and surfaces:**

- [Federal Housing Finance Agency](https://www.fhfa.gov/data/datasets) — FHFA provides housing finance data datasets including house price indexes and other housing market statistics.

---

## Federal Labor Relations Authority

**Repository:** [https://github.com/api-evangelist/federal-labor-relations-authority](https://github.com/api-evangelist/federal-labor-relations-authority)

The Federal Labor Relations Authority oversees the Federal service labor-management relations program. It administers the law that protects the right of employees of the Federal Government to organize, bargain collectively, and participate through labor organizations of their own choosing in decisions affecting them.

**APIs and surfaces:**

- [Federal Labor Relations Authority](https://www.flra.gov/) — The Federal Labor Relations Authority administers federal labor-management relations law.

---

## Federal Laboratory Consortium for Technology Transfer

**Repository:** [https://github.com/api-evangelist/federal-laboratory-consortium-for-technology-transfer](https://github.com/api-evangelist/federal-laboratory-consortium-for-technology-transfer)

The Federal Laboratory Consortium for Technology Transfer (FLC) facilitates knowledge and technology sharing across federal laboratories, and speeds the adoption of new knowledge and technologies in the wider economy by facilitating the sharing federal research with non-governmental public and private entities.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Federal Mediation and Conciliation Service

**Repository:** [https://github.com/api-evangelist/federal-mediation-and-conciliation-service](https://github.com/api-evangelist/federal-mediation-and-conciliation-service)

The Federal Mediation and Conciliation Service (FMCS) provides mediation and other conflict resolution services for managing and enhancing labor-management relationships.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Federal Mine Safety and Health Review Commission

**Repository:** [https://github.com/api-evangelist/federal-mine-safety-and-health-review-commission](https://github.com/api-evangelist/federal-mine-safety-and-health-review-commission)

The Federal Mine Safety and Health Review Commission is an independent adjudicative agency that provides administrative trial and appellate review of legal disputes arising under the Federal Mine Safety and Health Amendments Act of 1977 (Mine Act).

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Federal Motor Carrier Safety Administration

**Repository:** [https://github.com/api-evangelist/federal-motor-carrier-safety-administration](https://github.com/api-evangelist/federal-motor-carrier-safety-administration)

As the lead federal government agency responsible for regulating and providing safety oversight of commercial motor vehicles (CMVs), FMCSA's mission is to reduce crashes, injuries, and fatalities involving large trucks and buses.

**APIs and surfaces:**

- [Federal Motor Carrier Safety Administration QCMobile API](https://mobile.fmcsa.dot.gov/QCDevsite/docs/apiAccess) — The FMCSA QCMobile API provides access to commercial motor carrier safety data including carriers, vehicles, drivers, inspections, and crashes. Authentication uses a WebKey passed as a query parameter on each request.

---

## Federal Protective Service

**Repository:** [https://github.com/api-evangelist/federal-protective-service](https://github.com/api-evangelist/federal-protective-service)

The Federal Protective Service uses its security expertise and law enforcement authority to protect federal government facilities and safeguard the millions of employees and visitors who pass through them every day.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Federal Railroad Administration

**Repository:** [https://github.com/api-evangelist/federal-railroad-administration](https://github.com/api-evangelist/federal-railroad-administration)

The Federal Railroad Administration (FRA) is an agency within the Department of Transportation that is responsible for regulating and overseeing the safety of the nation's railroad systems.

**APIs and surfaces:**

- [Federal Railroad Administration Public API](https://safetydata.fra.dot.gov/MasterWebService/publicapi/) — The Federal Railroad Administration Public API provides safety data and access to railroad datasets including accidents, incidents, highway-rail grade crossings, inspections, and operational data.

---

## Federal Reserve

**Repository:** [https://github.com/api-evangelist/federal-reserve](https://github.com/api-evangelist/federal-reserve)

The FRED API is a web service that allows developers to write programs and build applications that retrieve economic data from the FRED and ALFRED websites hosted by the Economic Research Division of the Federal Reserve Bank of St. Louis.

**APIs and surfaces:**

- [Federal Reserve FRED API](https://fred.stlouisfed.org/docs/api/fred) — The FRED API allows developers to retrieve economic data from the Federal Reserve Bank of St. Louis including categories, releases, series, sources, tags, and observations across thousands of economic time series.

---

## Federal Student Aid

**Repository:** [https://github.com/api-evangelist/federal-student-aid](https://github.com/api-evangelist/federal-student-aid)

The Federal Student Aid (FSA) office of the U.S. Department of Education provides grants, loans, and work-study funds to eligible students enrolled in college or career school. FSA operates StudentAid.gov as the consumer portal for managing federal student loans, completing the FAFSA, and exploring repayment options. FSA does not currently publish a public, open developer API program; aggregate higher education and aid data is redistributed through the Department of Education's open data programs such as the College Scorecard API.

**APIs and surfaces:**

- [StudentAid.gov](https://studentaid.gov) — StudentAid.gov is the official consumer platform for U.S. federal student aid. Borrowers and students use the site to complete the FAFSA, manage federal loans, review repayment plans, and access aid resources. The pla...
- [College Scorecard API](https://collegescorecard.ed.gov/data/documentation/) — The College Scorecard API, operated by the U.S. Department of Education via api.data.gov, exposes institution-level data including federal aid participation, costs, completion rates, and post-college outcomes that com...

---

## Federal Trade Commission

**Repository:** [https://github.com/api-evangelist/federal-trade-commission](https://github.com/api-evangelist/federal-trade-commission)

The Federal Trade Commission (FTC) is a U.S. federal agency that enforces antitrust and consumer protection laws affecting virtually every area of commerce. The FTC publishes developer-facing data products and APIs through ftc.gov/developer and partner platforms, including the National Do Not Call Registry telemarketer access program and the Consumer Sentinel Network of consumer complaint data shared with law enforcement.

**APIs and surfaces:**

- [FTC Developer Portal](https://www.ftc.gov/developer) — The FTC Developer Portal is the central hub for developer documentation, data dictionaries, and access program details for FTC-managed datasets and services.
- [National Do Not Call Registry](https://telemarketers.donotcall.gov) — The National Do Not Call Registry program lets telemarketers and sellers download phone-number data they must scrub against before placing calls. Access is provisioned through telemarketer.donotcall.gov and governed b...
- [Consumer Sentinel Network](https://www.ftc.gov/enforcement/consumer-sentinel-network) — Consumer Sentinel is the FTC's secure online database of consumer reports of fraud, identity theft, and other complaints, made available to participating federal, state, local, and international law enforcement agenci...
- [HSR Premerger Notification](https://www.ftc.gov/enforcement/premerger-notification-program) — The Hart-Scott-Rodino (HSR) Premerger Notification Program coordinates premerger filings reviewed by the FTC and DOJ. Filings are submitted electronically through the dedicated HSR e-filing system.

---

## Food and Drug Administration

**Repository:** [https://github.com/api-evangelist/food-and-drug-administration](https://github.com/api-evangelist/food-and-drug-administration)

openFDA is an Elasticsearch-based public API that serves FDA data on drugs, devices, foods, animal/veterinary products, and tobacco. Each noun exposes one or more datasets including adverse events, recall enforcement reports, product labeling, classifications, registrations, and approvals.

**APIs and surfaces:**

- [openFDA](https://open.fda.gov/apis) — openFDA provides public APIs for drug adverse events (FAERS), drug labeling (SPL), drug recall enforcement, NDC directory, Drugs@FDA, drug shortages, device adverse events (MAUDE), 510(k), PMA, UDI, device classificat...

---

## Food Safety and Inspection Service

**Repository:** [https://github.com/api-evangelist/food-safety-and-inspection-service](https://github.com/api-evangelist/food-safety-and-inspection-service)

The Food Safety and Inspection Service (FSIS) is a branch of the United States Department of Agriculture (USDA) responsible for ensuring the safety of the nation's commercial supply of meat, poultry, and egg products. FSIS publishes a Recall API that provides machine-readable access to recall and public health alert records.

**APIs and surfaces:**

- [FSIS Recall API](https://www.fsis.usda.gov/science-data/developer-resources/recall-api) — The FSIS Recall API returns a JSON list of recall and public health alert records for meat, poultry, and egg products. The endpoint is open and unauthenticated; the full dataset is returned on each request.

---

## Foreign Agricultural Service

**Repository:** [https://github.com/api-evangelist/foreign-agricultural-service](https://github.com/api-evangelist/foreign-agricultural-service)

The Foreign Agricultural Service (FAS) is a branch of the United States Department of Agriculture (USDA) that works to promote U.S. agricultural exports and expand global markets for American agricultural products.

**APIs and surfaces:**

- [USDA FAS Open Data API](https://apps.fas.usda.gov/opendataweb/home) — The USDA Foreign Agricultural Service Open Data API provides programmatic access to U.S. agricultural trade data, including the Global Agricultural Trade System (GATS), Export Sales Reporting (ESR), and Production, Su...

---

## Foreign Claims Settlement Commission

**Repository:** [https://github.com/api-evangelist/foreign-claims-settlement-commission](https://github.com/api-evangelist/foreign-claims-settlement-commission)

The Foreign Claims Settlement Commission of the United States (FCSC) is a quasi-judicial, independent agency within the Department of Justice which adjudicates claims of U.S. nationals against foreign governments.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Forest Service

**Repository:** [https://github.com/api-evangelist/forest-service](https://github.com/api-evangelist/forest-service)

The Forest Service is an agency within the U.S. Department of Agriculture that is responsible for managing the nation's forests and grasslands.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Freddie Mac

**Repository:** [https://github.com/api-evangelist/freddie-mac](https://github.com/api-evangelist/freddie-mac)

Freddie Mac (Federal Home Loan Mortgage Corporation) provides liquidity, stability, and affordability to the U.S. housing market. Its Single-Family API solutions span origination, selling and delivery, and servicing, delivering data and decisioning at each stage of the mortgage lifecycle.

**APIs and surfaces:**

- [Freddie Mac Single-Family APIs](https://sf.freddiemac.com/tools-learning/apis/our-api-solutions) — Suite of APIs across the mortgage lifecycle including AIM Check, Affordable Check, Property Insights, Pricing and Committing, Resolve workout decisioning, and Total MI reconciliations and claims.

---

## General Services Administration

**Repository:** [https://github.com/api-evangelist/general-services-administration](https://github.com/api-evangelist/general-services-administration)

The General Services Administration (GSA) provides workplaces by constructing, managing, and preserving government buildings and by leasing and managing commercial real estate. GSA acquisition solutions offer private sector professional services, equipment, supplies, and IT to government organizations and the military. GSA also promotes management best practices and efficient government operations through the development of governmentwide policies, including a broad portfolio of public APIs.

**APIs and surfaces:**

- [Acquisition Gateway Listings API](https://open.gsa.gov/api/ag-api/) — Provides programmatic access to acquisition gateway listings. Currently a placeholder; APIs are not yet available.
- [Analytics.usa.gov API](https://open.gsa.gov/api/dap/) — The data for this API comes from Analytics.usa.gov, a unified Google Analytics account for U.S. federal government agencies known as the Digital Analytics Program (DAP). This program helps government agencies understa...
- [api.data.gov Admin API](https://open.gsa.gov/api/apidatagov/) — api.data.gov is a free API management service for federal agencies. The Admin API implements the API Umbrella Admin API and can be used by agency admins to perform admin operations and to query their API analytics.
- [api.data.gov Metrics API](https://open.gsa.gov/api/apidatagov-metrics/) — Offers access to high level metrics for the APIs that use the api.data.gov shared service.
- [Contract-Awarded Labor Category (CALC) API](https://open.gsa.gov/api/dx-calc-api/) — The CALC Labor Ceiling Rates tool is a pricing research tool located on buy.gsa.gov to support government acquisition professionals in services pricing business intelligence.
- [Data.gov CKAN API](https://open.gsa.gov/api/datadotgov/) — The data.gov catalog is powered by CKAN, a powerful open source data platform that includes a robust API. The data.gov CKAN API contains metadata about datasets including URLs and descriptions.
- [GSA Fleet Vehicles / Vehicle Leasing](https://www.gsa.gov/buy-through-us/products-and-services/transportation-and-logistics-services/fleet-management/vehicle-leasing) — GSA Fleet provides leasing services for a wide variety of vehicle and fuel types for participating federal agencies with full-service leases at all-inclusive rates.
- [IT Collect Public API](https://open.gsa.gov/api/itcollect/) — The IT Collect API provides a way for the general public to access government-wide IT Portfolio Management and other related IT data sources, presented in a visual format on itdashboard.gov.
- [Per Diem API](https://open.gsa.gov/api/perdiem/) — GSA establishes the per diem reimbursement rates that federal agencies use to reimburse their employees for subsistence expenses incurred while on official travel within the continental United States. Includes lodging...
- [Regulations.gov API](https://open.gsa.gov/api/regulationsgov/) — Regulations.gov is the place where users can find and comment on regulations. The APIs allow users to find creative ways to present regulatory data including documents, comments, and dockets.
- [SAM.gov Entity/Exclusions Extracts Download API](https://open.gsa.gov/api/sam-entity-extracts-api/) — The Extracts Download API allows users to request Unclassified (Public), Controlled Unclassified Information (CUI) For Official Use Only (FOUO) or CUI Sensitive entity extracts and Unclassified (Public) exclusion extr...
- [SAM.gov Entity Management API](https://open.gsa.gov/api/entity-api/) — The Entity Management API allows users to request Unclassified (Public), Controlled Unclassified Information (CUI) For Official Use Only (FOUO) or CUI Sensitive entity data.
- [SAM.gov Exclusions API](https://open.gsa.gov/api/exclusions-api/) — The Exclusions API allows users to request Public Exclusion Information based on various optional request parameters. Responses are provided in JSON format with pagination.
- [SAM.gov Federal Hierarchy FOUO API](https://open.gsa.gov/api/fh-fouo-api/) — The Federal Hierarchy For Official Use Only (FOUO) API allows U.S. Government users to obtain Federal Organization details down to the office level.
- [SAM.gov Federal Hierarchy Public API](https://open.gsa.gov/api/fh-public-api/) — Federal Hierarchy public API allows non-federal users to obtain Federal Organization details (Departments/Ind. Agency and SubTier).
- [SAM.gov Get Opportunities Public API](https://open.gsa.gov/api/get-opportunities-public-api/) — Get Opportunities API provides all the published opportunity details based on the request parameters. This API requires pagination.
- [SAM.gov Opportunity Management API](https://open.gsa.gov/api/opportunities-api/) — The Opportunity Management API allows authorized users to submit and request Opportunities data.
- [SAM.gov Product Service Codes (PSC) API](https://open.gsa.gov/api/PSC-Public-API/) — PSC API provides PSC data (PSC Code, PSC Name, PSC Full Name, Status, Parent PSC Code, Start Date, End Date and updated date) based on the request parameters with pagination support.
- [SAM.gov Public Location Services API](https://open.gsa.gov/api/location-public-api/) — The Public Location Services API provides Location Services data (Country, State, City, ZIP) for validating location data submitted to SAM.gov. Supports United States and, with GENC updates, Foreign Countries.
- [SAM.gov Assistance Listings Public API](https://open.gsa.gov/api/assistance-listings-api/) — Provides federal assistance listings data through SAM.gov.
- [SAM.gov Acquisition Subaward Reporting Public API](https://open.gsa.gov/api/acquisition-subaward-reporting-api/) — Delivers federal subcontract data via SAM.gov.
- [SAM.gov Assistance Subaward Reporting Public API](https://open.gsa.gov/api/assistance-subaward-reporting-api/) — Provides federal assistance subaward data via SAM.gov.
- [SAM.gov Contract Awards API](https://open.gsa.gov/api/contract-awards/) — Retrieves contract listings with searchable parameters via SAM.gov.
- [SAM.gov Subaward Reporting Bulk Upload API](https://open.gsa.gov/api/subawards-bulkupload-api/) — Publishes subcontract and subaward reports to SAM.gov.
- [Search.gov Clicks API](https://open.gsa.gov/api/searchgov-clicks/) — The click tracking API endpoint lets you send click events to view click data on your Admin Click Analytics page and to strengthen the search results algorithm.
- [Search.gov Results API](https://open.gsa.gov/api/searchgov-results/) — Search.gov is a service of the General Services Administration providing search engine capability to federal agencies for their public websites.
- [Search.gov Type-Ahead Suggestions API](https://open.gsa.gov/api/searchgov-suggestions/) — Exposes the type-ahead suggestions that can appear below your search box as searchers enter their search terms.
- [Site Scanning API](https://open.gsa.gov/api/site-scanning-api/) — Every day, the Site Scanning program runs a scanning engine to dynamically pull lists of domains from various sources and scan them with a collection of plugins to gather data on federal websites.
- [TMSS 2.0 Rate Query API](https://open.gsa.gov/api/ratequeryhhg/) — The Rate Query API offered by TMSS 2.0 is used to retrieve shipment cost for a regular Household Goods (HHG) shipment or for an Extended Storage (EXSTG) shipment for Federal Civilian Agencies.
- [Sustainable Facilities Tool API](https://sftool.gov/developers) — Offers sustainable guidance and tools for various roles via the Sustainable Facilities Tool (SFTool).
- [Touchpoints API](https://github.com/gsa/touchpoints/wiki/API) — Programmatic access to customer feedback forms and responses managed via Touchpoints.

---

## Ginnie Mae

**Repository:** [https://github.com/api-evangelist/ginnie-mae](https://github.com/api-evangelist/ginnie-mae)

The Government National Mortgage Association (Ginnie Mae) is a government corporation within the U.S. Department of Housing and Urban Development (HUD), established in 1968 following the privatization of Fannie Mae. Its mission is to expand mortgage funding insured or guaranteed by federal agencies. By providing a full-faith-and-credit guarantee on securities backed by these mortgages, Ginnie Mae reduces investor risk and broadens the market for mortgage-backed securities.

**APIs and surfaces:**

- [Ginnie Mae](https://www.ginniemae.gov) — Multifamily Database is a Ginnie Mae database that contains information about Ginnie Maes multifamily mortgage-backed securities at the security and loan level.

---

## Government Accountability Office

**Repository:** [https://github.com/api-evangelist/government-accountability-office](https://github.com/api-evangelist/government-accountability-office)

The Government Accountability Office (GAO) is the United States government's supreme audit institution. It provides Congress with auditing, evaluation, and investigative services, and publishes reports, testimonies, and other products examining federal programs and policies.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## GovInfo

**Repository:** [https://github.com/api-evangelist/govinfo](https://github.com/api-evangelist/govinfo)

The GovInfo API, provided by the U.S. Government Publishing Office (GPO), provides services for developers and webmasters to access GovInfo content and metadata, including search, packages, granules, collections, related items, and published documents.

**APIs and surfaces:**

- [GovInfo API](https://api.govinfo.gov/docs/) — The GovInfo API exposes search, package, granule, collection, related-item, and published-document endpoints for accessing U.S. federal government publications and their metadata.

---

## Health Resources and Services Administration

**Repository:** [https://github.com/api-evangelist/health-resources-and-services-administration](https://github.com/api-evangelist/health-resources-and-services-administration)

The Health Resources and Services Administration (HRSA) is the primary Federal agency for improving access to health care services for people who are uninsured, isolated, or medically vulnerable. HRSA provides data and web services for healthcare resources, facility locations, and program information.

**APIs and surfaces:**

- [HRSA Health Center Data Service](https://data.hrsa.gov/tools/web-services) — The HRSA Health Center Data Service enables users to query for health centers by state, county, or ZIP Code, providing access to federally qualified health center location and service information.
- [HRSA Ryan White HIV/AIDS Medical Care Provider Data Service](https://data.hrsa.gov/tools/web-services) — The HRSA Ryan White HIV/AIDS Medical Care Provider Data Service enables users to query for HIV/AIDS care providers around a specified latitude and longitude, supporting access to Ryan White HIV/AIDS Program funded pro...

---

## Institute of Museum and Library Services

**Repository:** [https://github.com/api-evangelist/institute-of-museum-and-library-services](https://github.com/api-evangelist/institute-of-museum-and-library-services)

The Institute of Museum and Library Services (IMLS) is an independent federal agency that advances, supports, and empowers America's museums, libraries, and related organizations through grantmaking, research, and policy development. IMLS provides data access to grant and museum information through its APIs.

**APIs and surfaces:**

- [IMLS Data Catalog API](https://www.imls.gov/research-evaluation/data-collection/museum-data-files) — The IMLS Data Catalog provides public access to IMLS grants data and museum information through an API, enabling researchers and developers to access grant information, museum locations, and program data.

---

## Internal Revenue Service

**Repository:** [https://github.com/api-evangelist/internal-revenue-service](https://github.com/api-evangelist/internal-revenue-service)

The Internal Revenue Service (IRS) is the United States federal tax collection agency and a bureau of the Department of the Treasury. The IRS publishes developer resources for tax software providers and transmitters including the Modernized e-File (MeF) system for electronic tax return submission, the e-Services suite for authorized e-file providers, and Publication 4164 (the MeF Guide for Software Developers and Transmitters) which documents the XML schemas and transmission protocols required for integration.

**APIs and surfaces:**

- [IRS Modernized e-File (MeF)](https://www.irs.gov/e-file-providers/modernized-e-file-mef-internet-filing) — The IRS Modernized e-File (MeF) system is the web-based electronic filing platform supporting individual, business, and tax-exempt return submission via XML-based schemas. Software developers and transmitters integrat...
- [IRS e-Services](https://www.irs.gov/tax-professionals/e-services) — IRS e-Services is a suite of web-based products for tax professionals, reporting agents, and authorized e-file providers offering Transcript Delivery, TIN Matching, e-file application management, and secure messaging...

---

## International Development Finance Corporation

**Repository:** [https://github.com/api-evangelist/international-development-finance-corporation](https://github.com/api-evangelist/international-development-finance-corporation)

The United States International Development Finance Corporation (DFC) is a development finance institution and agency of the United States federal government. DFC invests in development projects primarily in lower and middle-income countries, providing secure private investment opportunities for emerging markets. DFC does not currently expose a public developer API portal; transaction-level data is published as downloadable datasets.

**APIs and surfaces:**

- [DFC Transaction Data](https://www.dfc.gov/our-impact/dfc-transaction-data) — DFC publishes transaction-level data on its development finance activities including loans, political risk insurance, and equity investments. Data is released as downloadable CSV/Excel datasets rather than as a progra...

---

## International Trade Administration

**Repository:** [https://github.com/api-evangelist/international-trade-administration](https://github.com/api-evangelist/international-trade-administration)

The International Trade Administration (ITA) creates prosperity by strengthening the international competitiveness of U.S. industry, promoting trade and investment, and ensuring fair trade and compliance with trade laws and agreements. ITA's Data Services Platform provides authoritative APIs for U.S. exporting and international trade including the Consolidated Screening List, Country Commercial Guides, Market Intelligence, Trade Events, Customs Tariff lookups, and De Minimis thresholds.

**APIs and surfaces:**

- [ITA Data Services Platform](https://developer.trade.gov) — The ITA Data Services Platform provides direct access to authoritative U.S. exporting and international trade information via standard APIs, including the Consolidated Screening List, Country Commercial Guides, Market...

---

## International Trade Commission

**Repository:** [https://github.com/api-evangelist/international-trade-commission](https://github.com/api-evangelist/international-trade-commission)

The United States International Trade Commission (USITC) is an independent, nonpartisan, quasi-judicial federal agency that fulfills a range of trade-related mandates. The USITC provides high-quality analysis of international trade issues to the President and the Congress, and serves as the primary forum for the adjudication of intellectual property and trade disputes. The agency exposes U.S. trade and tariff statistics through the USITC DataWeb interactive data service.

**APIs and surfaces:**

- [USITC DataWeb](https://dataweb.usitc.gov/) — The USITC DataWeb provides interactive access to U.S. international trade statistics and U.S. tariff data, including imports, exports, and production by commodity and country.

---

## Joint Fire Science Program

**Repository:** [https://github.com/api-evangelist/joint-fire-science-program](https://github.com/api-evangelist/joint-fire-science-program)

The Joint Fire Science Program (JFSP) funds scientific research on wildland fires and distributes results to help policymakers, fire managers and practitioners make sound decisions. Operated jointly by the U.S. Departments of the Interior and Agriculture, JFSP coordinates the Fire Science Exchange Network across regional knowledge nodes. JFSP does not publish a self-service developer portal or OpenAPI; research outputs are surfaced through the firescience.gov website.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Library of Congress

**Repository:** [https://github.com/api-evangelist/library-of-congress](https://github.com/api-evangelist/library-of-congress)

The Library of Congress is the largest library in the world, with millions of books, films and video, audio recordings, photographs, newspapers, maps and manuscripts in its collections. The Library is the main research arm of the U.S. Congress and the home of the U.S. Copyright Office. The Library publishes a suite of public APIs that expose its catalog, digital collections, historic newspapers, and legislative information.

**APIs and surfaces:**

- [Library of Congress loc.gov JSON API](https://www.loc.gov/apis/json-and-yaml/) — The loc.gov JSON API returns structured JSON or YAML representations of the Library of Congress's online collections, items, search results, and resource pages, enabling programmatic access to digital collections meta...
- [Library of Congress Chronicling America API](https://chroniclingamerica.loc.gov/about/api/) — The Chronicling America API exposes historic American newspapers digitized through the National Digital Newspaper Program, providing search and metadata access to newspaper pages, issues, and titles.
- [Library of Congress Congress.gov API](https://api.congress.gov/) — The Congress.gov API provides programmatic access to legislative information, including bills, laws, members, committees, and Congressional Record content from the U.S. Congress.

---

## Marine Mammal Commission

**Repository:** [https://github.com/api-evangelist/marine-mammal-commission](https://github.com/api-evangelist/marine-mammal-commission)

The Marine Mammal Commission is an independent agency of the U.S. federal government established by the Marine Mammal Protection Act of 1972. The Commission provides science-based oversight of federal agency actions and domestic and international policies affecting the conservation of marine mammals and their ecosystems.

**APIs and surfaces:**

- [Marine Mammal Commission](https://www.mmc.gov) — The Marine Mammal Commission provides science-based oversight of federal agency actions and domestic and international policies affecting the conservation of marine mammals and their ecosystems. The MMC publishes lett...

---

## Merit Systems Protection Board

**Repository:** [https://github.com/api-evangelist/merit-systems-protection-board](https://github.com/api-evangelist/merit-systems-protection-board)

The Merit Systems Protection Board (MSPB) is an independent quasi-judicial agency that protects federal merit systems against partisan political and other prohibited personnel practices. It safeguards the rights of federal employees and adjudicates employee appeals.

**APIs and surfaces:**

- [Merit Systems Protection Board](https://www.mspb.gov) — The Merit Systems Protection Board protects federal merit systems and safeguards the rights of federal employees against prohibited personnel practices under 5 U.S.C. 2301(b).

---

## Mine Health and Safety Administration

**Repository:** [https://github.com/api-evangelist/mine-health-and-safety-administration](https://github.com/api-evangelist/mine-health-and-safety-administration)

The Mine Safety and Health Administration (MSHA) works to prevent mining related deaths, injuries, and illnesses through mine regulations, inspections, and training programs.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Mississippi River Commission

**Repository:** [https://github.com/api-evangelist/mississippi-river-commission](https://github.com/api-evangelist/mississippi-river-commission)

The Mississippi River Commission (MRC) is a federal agency established in 1879 that operates under the United States Army Corps of Engineers Mississippi Valley Division. The seven-member commission oversees the Mississippi River and Tributaries Project, managing flood control from the river's mouth to Cape Girardeau, Missouri, and improving navigation from Baton Rouge to Cairo, Illinois. The MRC is responsible for federal stewardship of the Mississippi River, including flood control, navigation, environmental management, and related engineering and policy work executed through six district offices.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## National Agricultural Library

**Repository:** [https://github.com/api-evangelist/national-agricultural-library](https://github.com/api-evangelist/national-agricultural-library)

The USDA National Agricultural Library houses one of the world's largest collections devoted to agriculture and its related sciences, and operates FoodData Central, an integrated data system providing nutrient profiles for foods.

**APIs and surfaces:**

- [USDA FoodData Central API](https://fdc.nal.usda.gov/api-guide) — The FoodData Central API provides REST access to FoodData Central (FDC). It is intended primarily to assist application developers wishing to incorporate nutrient data into their applications or websites.

---

## National Archives and Records Administration

**Repository:** [https://github.com/api-evangelist/national-archives-and-records-administration](https://github.com/api-evangelist/national-archives-and-records-administration)

The National Archives Catalog API is a read-write web API for the National Archives Catalog. This API can be used to perform fielded search of archival metadata, bulk export of metadata and digital media, and post contributions to records.

**APIs and surfaces:**

- [National Archives Catalog API](https://www.archives.gov/research/catalog/help/api) — The National Archives Catalog API is a read-write web API for the National Archives Catalog used to perform fielded search of archival metadata, bulk export of metadata and digital media, and post contributions to rec...

---

## National Cancer Institute

**Repository:** [https://github.com/api-evangelist/national-cancer-institute](https://github.com/api-evangelist/national-cancer-institute)

The National Cancer Institute (NCI) is the federal government's principal agency for cancer research and training, part of the National Institutes of Health. NCI provides data and APIs for cancer genomics, clinical trials, and drug information.

**APIs and surfaces:**

- [NCI Genomic Data Commons API](https://gdc.cancer.gov/developers/gdc-application-programming-interface-api) — The GDC API provides access to genomic and clinical data from the NCI Genomic Data Commons, supporting cancer research and precision medicine. Endpoints include status, projects, cases, files, annotations, data downlo...

---

## National Capital Planning Commission

**Repository:** [https://github.com/api-evangelist/national-capital-planning-commission](https://github.com/api-evangelist/national-capital-planning-commission)

The National Capital Planning Commission is the federal government's planning agency for the National Capital Region. The Commission works with federal agencies to preserve and enhance the historical, cultural, and natural resources and federal assets of the National Capital Region. No public developer API has been identified at this time; available access is through the public website, project search, and FOIA.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## National Cemetery Administration

**Repository:** [https://github.com/api-evangelist/national-cemetery-administration](https://github.com/api-evangelist/national-cemetery-administration)

The National Cemetery Administration (NCA) is an agency of the U.S. Department of Veterans Affairs that provides burial and memorial benefits to veterans and their eligible family members. NCA does not currently expose a documented public REST API; access is via web tools such as the Nationwide Gravesite Locator and Cemetery Finder, with broader data available through VA Open Data.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## National Council on Disability

**Repository:** [https://github.com/api-evangelist/national-council-on-disability](https://github.com/api-evangelist/national-council-on-disability)

The National Council on Disability (NCD) is an independent federal agency that advises the President, Congress, and other federal agencies on disability policy and programs. Established in 1978, the NCD promotes equal opportunity, economic self-sufficiency, independent living, and full participation in all areas of society for individuals with disabilities. The agency conducts research, gathers information, and provides recommendations to improve policies, programs, and services. NCD publishes policy reports spanning civil rights, healthcare, transportation, employment, housing, and emergency management for people with disabilities.

**APIs and surfaces:**

- [National Council on Disability FOIA Data](https://www.ncd.gov/foia/) — FOIA-accessible data from the National Council on Disability including performance and results act reports, congressional budget justification reports, financial audit reports, strategic plans, bylaws, stakeholder let...
- [National Council on Disability Policy Reports](https://www.ncd.gov/reports/) — Comprehensive archive of NCD policy reports dating back to 1984 covering disability civil rights, healthcare, transportation, employment, housing, financial assistance, and emergency management. Reports include recomm...
- [National Council on Disability Accountability Reports](https://www.ncd.gov/accountability/) — Performance, accountability, and budget data from the National Council on Disability. Includes Annual Performance Reports, Congressional Budget Justification Reports, financial audits, and EEO policy statements provid...

---

## National Credit Union Administration

**Repository:** [https://github.com/api-evangelist/national-credit-union-administration](https://github.com/api-evangelist/national-credit-union-administration)

Created by the U.S. Congress in 1970, the National Credit Union Administration is an independent federal agency that insures deposits at federally insured credit unions, protects the members who own credit unions, and charters and regulates federal credit unions. NCUA publishes Call Report and Financial Performance data and a Credit Union Locator, but does not currently document a public REST API.

**APIs and surfaces:**

- [NCUA Data and Call Reports](https://ncua.gov/data) — The NCUA publishes downloadable Call Report data, Financial Performance Reports, and a Research a Credit Union tool. There is no documented public REST API at this time; data is available as downloadable bulk files an...

---

## National Endowment for the Arts

**Repository:** [https://github.com/api-evangelist/national-endowment-for-the-arts](https://github.com/api-evangelist/national-endowment-for-the-arts)

The National Endowment for the Arts is an independent federal agency that funds, promotes, and strengthens the creative capacity of our communities by providing all Americans with diverse opportunities for arts participation. NEA does not currently expose a documented public REST API; arts and culture data is available through partner programs such as the Arts and Cultural Production Satellite Account (with BEA) and the Survey of Public Participation in the Arts (with the U.S. Census Bureau).

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## National Endowment for the Humanities

**Repository:** [https://github.com/api-evangelist/national-endowment-for-the-humanities](https://github.com/api-evangelist/national-endowment-for-the-humanities)

The National Endowment for the Humanities (NEH) is the nation's largest public funder of the humanities, which include history, philosophy, literature, language, ethics, law, archaeology, political theory, comparative religion, anthropology, sociology, and media and cultural studies. NEH does not publish a fully documented public REST API, but it offers a Funded Project Query Form API and bulk XML datasets covering all grants awarded since 1965, plus evaluator and panelist information from 1988 onward.

**APIs and surfaces:**

- [NEH Funded Project Query API](https://securegrants.neh.gov/publicquery/) — Funded Project Query Form API exposing programmatic access to NEH grant records. Documentation is published as a PDF describing query parameters and response structure.

---

## National Gallery of Art

**Repository:** [https://github.com/api-evangelist/national-gallery-of-art](https://github.com/api-evangelist/national-gallery-of-art)

The National Gallery of Art is a national art museum in Washington, D.C., located on the National Mall. The Gallery provides open access to images and data about its art collection through its Open Access program. While the Gallery does not publish a documented public REST API, it releases a comprehensive open dataset of more than 130,000 artworks and associated creators in CSV format under Creative Commons Zero licensing through its GitHub repository, with reconciled Wikidata Q-item identifiers for research interoperability.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## National Geospatial-Intelligence Agency

**Repository:** [https://github.com/api-evangelist/national-geospatial-intelligence-agency](https://github.com/api-evangelist/national-geospatial-intelligence-agency)

The National Geospatial-Intelligence Agency (NGA) is a combat support agency within the U.S. Department of Defense that provides geospatial intelligence in support of national security. Through its Office of Geomatics, NGA publishes the Earth-Info portal, which exposes a REST API in OpenAPI format for downloading GPS ephemeris products, Earth Orientation Parameter Predictions (EOPP), Navdata clock state files, and short-term orbit prediction products. NGA also maintains the WGS 84 reference frame, EGM2008 gravitational model, and the GEOTRANS coordinate conversion tool.

**APIs and surfaces:**

- [NGA Earth-Info REST API](https://earth-info.nga.mil/) — NGA Office of Geomatics REST API providing programmatic download of GPS ephemeris (Center of Mass and Antenna Phase Center), Earth Orientation Parameter Predictions, Navdata clock state files, and 9-day and 30-day orb...

---

## National Highway Traffic Safety Administration

**Repository:** [https://github.com/api-evangelist/national-highway-traffic-safety-administration](https://github.com/api-evangelist/national-highway-traffic-safety-administration)

The National Highway Traffic Safety Administration (NHTSA) provides APIs for vehicle safety information including vehicle recall data and the Product Information Catalog Vehicle Listing (vPIC) for decoding Vehicle Identification Numbers (VINs) and accessing vehicle specifications submitted by manufacturers.

**APIs and surfaces:**

- [NHTSA vPIC Vehicle API](https://vpic.nhtsa.dot.gov/api/) — The NHTSA Product Information Catalog Vehicle Listing (vPIC) API provides different ways to gather information on vehicles and their specifications, including decoding VINs, retrieving manufacturer details, and access...

---

## National Indian Gaming Commission

**Repository:** [https://github.com/api-evangelist/national-indian-gaming-commission](https://github.com/api-evangelist/national-indian-gaming-commission)

The National Indian Gaming Commission (NIGC) is an independent federal regulatory agency that regulates gaming on Indian lands to protect tribal gaming as a means of generating revenue for tribal governments. The agency publishes online resources, public records, and gaming-related data through its website but does not currently expose a public web API.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIAMS)

**Repository:** [https://github.com/api-evangelist/national-institute-of-arthritis-and-musculoskeletal-and-skin-diseases-niams-](https://github.com/api-evangelist/national-institute-of-arthritis-and-musculoskeletal-and-skin-diseases-niams-)

The National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIAMS) is part of the U.S. National Institutes of Health and supports research into the causes, treatment, and prevention of arthritis and musculoskeletal and skin diseases. NIAMS publishes health information, research resources, and grant data via its website.

**APIs and surfaces:**

- [National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIAMS)](https://www.niams.nih.gov/) — The National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIAMS) supports research into the causes, treatment, and prevention of arthritis and musculoskeletal and skin diseases.

---

## National Institute of Corrections

**Repository:** [https://github.com/api-evangelist/national-institute-of-corrections](https://github.com/api-evangelist/national-institute-of-corrections)

The National Institute of Corrections (NIC) is an agency within the U.S. Department of Justice that provides training, technical assistance, and information to federal, state, and local corrections agencies. NIC publishes guidance, library resources, and corrections-related data through its website but does not currently expose a public web API.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## National Institute of Food and Agriculture

**Repository:** [https://github.com/api-evangelist/national-institute-of-food-and-agriculture](https://github.com/api-evangelist/national-institute-of-food-and-agriculture)

The National Institute of Food and Agriculture (NIFA) provides leadership and funding for programs that advance agriculture-related sciences. NIFA invests in and supports initiatives that ensure the long-term viability of agriculture, partnering with land-grant universities and the broader agricultural research community.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## National Institute of Mental Health

**Repository:** [https://github.com/api-evangelist/national-institute-of-mental-health](https://github.com/api-evangelist/national-institute-of-mental-health)

The National Institute of Mental Health (NIMH) is the lead federal agency for research on mental disorders. NIMH conducts and supports research that seeks to understand, treat, and prevent mental illness, working to transform the understanding and treatment of mental illness.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## National Institute of Standards and Technology

**Repository:** [https://github.com/api-evangelist/national-institute-of-standards-and-technology](https://github.com/api-evangelist/national-institute-of-standards-and-technology)

NIST promotes U.S. innovation and industrial competitiveness by advancing measurement science, standards, and technology in ways that enhance economic security and improve our quality of life. NIST operates the National Vulnerability Database (NVD), which provides public APIs for CVE, CVE change history, and CPE records.

**APIs and surfaces:**

- [NIST National Vulnerability Database (NVD) API](https://nvd.nist.gov/developers) — The NVD API provides programmatic access to Common Vulnerabilities and Exposures (CVE) records, CVE change history, and Common Platform Enumeration (CPE) records. Endpoints support pagination, filtering by CVSS metric...

---

## National Institutes of Health

**Repository:** [https://github.com/api-evangelist/national-institutes-of-health](https://github.com/api-evangelist/national-institutes-of-health)

The National Institutes of Health (NIH), a part of the U.S. Department of Health and Human Services, is the nation's medical research agency making important discoveries that improve health and save lives. NIH operates the RePORTER API for exposing data about NIH-funded research projects and the publications associated with them.

**APIs and surfaces:**

- [NIH RePORTER API](https://api.reporter.nih.gov) — The NIH RePORTER API provides programmatic access to NIH-funded research projects and their associated publications. The Projects endpoint accepts a rich criteria object including fiscal years, principal investigators...

---

## National Interagency Fire Center

**Repository:** [https://github.com/api-evangelist/national-interagency-fire-center](https://github.com/api-evangelist/national-interagency-fire-center)

The National Interagency Fire Center (NIFC) is a collaborative effort between multiple federal agencies to address wildfires and other emergency incidents around the United States. NIFC serves as a centralized command center for coordinating resources, personnel, and information to effectively respond to and manage wildfires. NIFC publishes authoritative geospatial data through ArcGIS REST services and its open data portal.

**APIs and surfaces:**

- [NIFC ArcGIS REST Services API](https://data-nifc.opendata.arcgis.com) — The NIFC ArcGIS REST services expose FeatureServer endpoints with authoritative geospatial data on wildfire incidents, fire perimeters, dispatch boundaries, fuel treatments, weather stations, and other fire management...

---

## National Invasive Species Information Center

**Repository:** [https://github.com/api-evangelist/national-invasive-species-information-center](https://github.com/api-evangelist/national-invasive-species-information-center)

National Invasive Species Information Center (NISIC) is the gateway to invasive species information covering federal, state, local, and international sources. Invasive species are plants, animals, or pathogens that are non-native to the ecosystem under consideration, and whose introduction causes or is likely to cause harm.

**APIs and surfaces:**

- [National Invasive Species Information Center](https://www.invasivespeciesinfo.gov) — The NISIC gateway to invasive species information covers federal, state, local, and international sources on plants, animals, and pathogens that are non-native to ecosystems and whose introduction causes harm.

---

## National Labor Relations Board

**Repository:** [https://github.com/api-evangelist/national-labor-relations-board](https://github.com/api-evangelist/national-labor-relations-board)

The National Labor Relations Board (NLRB) is an independent federal agency responsible for protecting the rights of employees and employers in the United States. The NLRB administers the National Labor Relations Act, which guarantees the rights of employees to form unions and engage in collective bargaining with their employers.

**APIs and surfaces:**

- [National Labor Relations Board](https://www.nlrb.gov/data-on-datagov) — NLRB case data including Unfair Labor Practice and Elections data from the Case Activity Tracking System available on data.gov.

---

## National Laboratories

**Repository:** [https://github.com/api-evangelist/national-laboratories](https://github.com/api-evangelist/national-laboratories)

The U.S. Department of Energy's national laboratories are a network of federally funded research and development centers conducting cutting-edge research in energy, science, and national security.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## National Library of Medicine

**Repository:** [https://github.com/api-evangelist/national-library-of-medicine](https://github.com/api-evangelist/national-library-of-medicine)

The National Library of Medicine, part of the National Institutes of Health, is the world's largest biomedical library. It collects, organizes, and provides access to medical literature and information to support research and decision-making in healthcare, including PubMed and ClinicalTrials.gov.

**APIs and surfaces:**

- [National Library of Medicine E-utilities](https://www.ncbi.nlm.nih.gov/home/develop/api) — The E-utilities are the public API to the NCBI Entrez system providing access to all Entrez databases including PubMed, PMC, Gene, Nuccore, and Protein through a suite of server-side programs for search, link, and ret...

---

## National Oceanic and Atmospheric Administration

**Repository:** [https://github.com/api-evangelist/national-oceanic-and-atmospheric-administration](https://github.com/api-evangelist/national-oceanic-and-atmospheric-administration)

The National Oceanic and Atmospheric Administration (NOAA) is a federal agency within the U.S. Department of Commerce that focuses on monitoring and predicting changes in the Earth's environment, including climate, weather, oceans, and coasts.

**APIs and surfaces:**

- [NOAA CO-OPS Data API](https://api.tidesandcurrents.noaa.gov/api/prod/) — The NOAA CO-OPS Data API provides observations and predictions from CO-OPS stations including tides, currents, water levels, meteorological data, and marine forecasts.

---

## National Park Service

**Repository:** [https://github.com/api-evangelist/national-park-service](https://github.com/api-evangelist/national-park-service)

The National Park Service is a federal agency responsible for managing and protecting the United States' national parks, monuments, and historic sites. Established in 1916, the NPS works to preserve natural and cultural resources for future generations while providing opportunities for the public to enjoy and learn from these special places.

**APIs and surfaces:**

- [National Park Service API](https://www.nps.gov/subjects/developer/api-documentation.htm) — The NPS Data API is open and accessible to all developers, providing official, authoritative data and content about national parks, monuments, and historic sites for use in apps, maps, and other projects.

---

## National Pesticide Information Center

**Repository:** [https://github.com/api-evangelist/national-pesticide-information-center](https://github.com/api-evangelist/national-pesticide-information-center)

The National Pesticide Information Center (NPIC) provides objective, science-based information about pesticides and their potential health and environmental effects. NPIC is a cooperative agreement between Oregon State University and the U.S. Environmental Protection Agency, serving the general public, health professionals, and pesticide manufacturers.

**APIs and surfaces:**

- [National Pesticide Information Center](https://npic.orst.edu/) — NPIC provides objective, science-based information about pesticides and pesticide-related topics to enable people to make informed decisions. NPIC does not currently publish a public web API; data and information are...

---

## National Renewable Energy Laboratory

**Repository:** [https://github.com/api-evangelist/national-renewable-energy-laboratory](https://github.com/api-evangelist/national-renewable-energy-laboratory)

The National Renewable Energy Laboratory (NREL) developer network provides a catalog of public APIs that give developers access to renewable energy, alternative fuel, electricity, building, climate, solar, wind, and transportation data and analysis services produced by NREL.

**APIs and surfaces:**

- [NREL Developer Network](https://developer.nrel.gov/) — The umbrella developer portal for NREL APIs spanning alternative fuel stations, solar resource and PV modeling, utility rates, building energy use, climate, electricity, transportation, wave, and wind data.
- [Alternative Fuel Stations](https://developer.nrel.gov/docs/transportation/alt-fuel-stations-v1/) — Locate alternative fuel stations across the United States with filters for fuel type, location, status, and access.
- [PVWatts](https://developer.nrel.gov/docs/solar/pvwatts/v8/) — Estimate the energy production and cost of grid-connected photovoltaic energy systems for any location.
- [Utility Rates](https://developer.nrel.gov/docs/electricity/utility-rates-v3/) — Average commercial, industrial, and residential utility rates by US location.
- [Solar Resource Data](https://developer.nrel.gov/docs/solar/solar-resource-v1/) — Average direct normal, global horizontal, and tilt at latitude irradiance for a US location.

---

## National Science Foundation

**Repository:** [https://github.com/api-evangelist/national-science-foundation](https://github.com/api-evangelist/national-science-foundation)

The National Science Foundation (NSF) is an independent federal agency that supports fundamental research and education in all the non-medical fields of science and engineering. NSF provides grants and funding to researchers and institutions to drive innovation, discovery, and progress.

**APIs and surfaces:**

- [National Science Foundation API](https://www.nsf.gov/developer) — The NSF API provides an interface to Research Spending and Results functionality available through NSF's Research.gov system, including award search data showing how federal research dollars are being spent.

---

## National Security Agency

**Repository:** [https://github.com/api-evangelist/national-security-agency](https://github.com/api-evangelist/national-security-agency)

The National Security Agency (NSA) is a U.S. intelligence agency responsible for global monitoring, collection, and processing of information and data for foreign intelligence and counterintelligence purposes.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## National Technical Information Service

**Repository:** [https://github.com/api-evangelist/national-technical-information-service](https://github.com/api-evangelist/national-technical-information-service)

The National Technical Information Service (NTIS) is a government agency that serves as the largest central resource for government-funded scientific, technical, engineering, and business-related information, collecting, archiving, and disseminating data and reports on energy, aerospace, health, and environmental topics.

**APIs and surfaces:**

- [National Technical Information Service](https://ntrl.ntis.gov/) — The NTIS National Technical Reports Library (NTRL) offers online, free and open access to authenticated government technical reports and documents.

---

## National Telecommunications and Information Administration

**Repository:** [https://github.com/api-evangelist/national-telecommunications-and-information-administration](https://github.com/api-evangelist/national-telecommunications-and-information-administration)

The National Telecommunications and Information Administration (NTIA) is an agency of the U.S. Department of Commerce that serves as the executive branch principal advisor on telecommunications and information policy issues.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## National Transportation Safety Board

**Repository:** [https://github.com/api-evangelist/national-transportation-safety-board](https://github.com/api-evangelist/national-transportation-safety-board)

The National Transportation Safety Board (NTSB) is an independent federal agency responsible for investigating transportation accidents, including those involving airplanes, trains, ships, and pipelines. The NTSB promotes safety and prevents future accidents by conducting thorough investigations and making recommendations to improve safety standards.

**APIs and surfaces:**

- [National Transportation Safety Board](https://www.ntsb.gov/) — The NTSB provides transportation accident investigation data and safety recommendations for aviation, rail, highway, marine, and pipeline transportation.

---

## National Weather Service

**Repository:** [https://github.com/api-evangelist/national-weather-service](https://github.com/api-evangelist/national-weather-service)

The National Weather Service (NWS) is a government agency within the National Oceanic and Atmospheric Administration (NOAA) that is responsible for providing weather forecasts, warnings, and other meteorological information to the public, government agencies, and private industries.

**APIs and surfaces:**

- [National Weather Service API](https://www.weather.gov/documentation/services-web-api) — The National Weather Service API allows developers access to critical forecasts, alerts, and observations, along with other weather data. The API is designed with a cache-friendly approach and based on JSON-LD to prom...

---

## Natural Resources Conservation Service

**Repository:** [https://github.com/api-evangelist/natural-resources-conservation-service](https://github.com/api-evangelist/natural-resources-conservation-service)

The Natural Resources Conservation Service (NRCS) is a federal agency under the United States Department of Agriculture that works to help farmers, ranchers, and landowners conserve and protect natural resources. They provide technical assistance, financial assistance, and conservation planning to help individuals and communities implement conservation practices that improve soil health, water quality, and wildlife habitat.

**APIs and surfaces:**

- [NRCS Soil Data Access](https://sdmdataaccess.nrcs.usda.gov) — Soil Data Access (SDA) is a USDA-NRCS web service that supports ad hoc query and real-time delivery of official soil survey data (SSURGO and STATSGO2) for any user-defined geographic area. The service exposes tabular...

---

## Navy

**Repository:** [https://github.com/api-evangelist/navy](https://github.com/api-evangelist/navy)

The U.S. Navy plays a crucial role in defending national security and protecting the country's interests at sea. It operates a fleet of ships and submarines, as well as aircraft and personnel, to conduct a range of missions, including maritime patrol, reconnaissance, and combat operations. The Navy also performs humanitarian missions, such as disaster relief and search and rescue efforts. No public APIs have been identified at this time. The previously listed CNATRA "API" reference is an Aviation Preflight Indoctrination training video library, not a programmatic API.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Office of Career, Technical, and Adult Education

**Repository:** [https://github.com/api-evangelist/office-of-career-technical-and-adult-education](https://github.com/api-evangelist/office-of-career-technical-and-adult-education)

The Office of Career, Technical, and Adult Education is a government agency that focuses on providing resources and support to individuals seeking to further their education and career opportunities. This office offers programs and initiatives that are designed to help adults acquire the skills and knowledge needed to succeed in the workforce.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Office of Child Support Services

**Repository:** [https://github.com/api-evangelist/office-of-child-support-services](https://github.com/api-evangelist/office-of-child-support-services)

The Office of Child Support Services is a government agency that works to ensure that children receive the financial support they need from their non-custodial parent. This office helps establish legal paternity, locate absent parents, and establish and enforce child support orders. They work with both custodial and non-custodial parents to facilitate the collection and distribution of child support payments, ensuring that children have the resources they need to thrive.

**APIs and surfaces:**

- [Office of Child Support Services](https://www.acf.hhs.gov/css) — U.S. Department of Health & Human Services; Administration for Children & Families; Select an ACF Office. Administration for Native Americans (ANA) Administration on Children, Youth, and Families (ACYF) Childrens Bure...

---

## Office of Community Oriented Policing Services

**Repository:** [https://github.com/api-evangelist/office-of-community-oriented-policing-services](https://github.com/api-evangelist/office-of-community-oriented-policing-services)

The Office of Community Oriented Policing Services (COPS Office) is a component of the U.S. Department of Justice that works to advance the practice of community policing in law enforcement agencies across the country. The COPS Office provides grants, resources, and technical assistance to help law enforcement agencies develop and implement community policing strategies that build trust and collaboration with the communities they serve.

**APIs and surfaces:**

- [Office of Community Oriented Policing Services](https://cops.usdoj.gov) — The COPS Office publishes materials for law enforcement and community stakeholders to use in collaboratively addressing crime and disorder. LEARN MORE. SPOTLIGHT . U.S. Department of Justice Office of Community Orient...

---

## Office of Congressional Workplace Rights

**Repository:** [https://github.com/api-evangelist/office-of-congressional-workplace-rights](https://github.com/api-evangelist/office-of-congressional-workplace-rights)

The Office of Congressional Workplace Rights is responsible for enforcing workplace rights for employees of the United States Congress. This includes overseeing the administration of laws such as the Congressional Accountability Act, which guarantees certain rights and protections for congressional staff members.

**APIs and surfaces:**

- [Office of Congressional Workplace Rights](https://www.ocwr.gov) — Office of Congressional Workplace Rights. The mission of the Office of Congressional Workplace Rights is to advance workplace rights, safety and health, and accessibility in the legislative branch. Subscribe to the OC...

---

## Office of Fossil Energy and Carbon Management

**Repository:** [https://github.com/api-evangelist/office-of-fossil-energy-and-carbon-management](https://github.com/api-evangelist/office-of-fossil-energy-and-carbon-management)

The Office of Fossil Energy and Carbon Management is a division of the U.S. Department of Energy that is focused on addressing the challenges of reducing greenhouse gas emissions and advancing clean energy technologies. The office works to develop and deploy technologies that can capture, store, and utilize carbon dioxide emissions from fossil fuel sources, such as coal and natural gas.

**APIs and surfaces:**

- [Office of Fossil Energy and Carbon Management](https://www.energy.gov/fe) — The Office of Fossil Energy and Carbon Management (FECM) conducts research, development, demonstration, and deployment to minimize the environmental and climate impacts of fossil energy production and use and key indu...

---

## Office of Government Ethics

**Repository:** [https://github.com/api-evangelist/office-of-government-ethics](https://github.com/api-evangelist/office-of-government-ethics)

The Office of Government Ethics (OGE) is an independent agency within the federal government that oversees the behavior and ethics of executive branch employees. The OGE provides guidance and advice on ethics laws and regulations to government officials, conducts ethics training programs, and reviews financial disclosure reports to ensure compliance with ethical standards. The office also works to prevent conflicts of interest and promote transparency and accountability in government operations.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Office of Inspector General

**Repository:** [https://github.com/api-evangelist/office-of-inspector-general](https://github.com/api-evangelist/office-of-inspector-general)

The Office of Inspector General (OIG) conducts audits, investigations, inspections, and other reviews to promote economy and efficiency in government programs and operations, and to prevent and detect fraud, waste, and abuse.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Office of the Comptroller of the Currency

**Repository:** [https://github.com/api-evangelist/office-of-the-comptroller-of-the-currency](https://github.com/api-evangelist/office-of-the-comptroller-of-the-currency)

The Office of the Comptroller of the Currency (OCC) is a federal agency responsible for regulating and supervising national banks and federal savings associations. The OCC ensures that these financial institutions operate in a safe and sound manner, comply with applicable laws and regulations, and treat customers fairly.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## Office of the Federal Register

**Repository:** [https://github.com/api-evangelist/office-of-the-federal-register](https://github.com/api-evangelist/office-of-the-federal-register)

The Office of the Federal Register is responsible for publishing official government documents. This includes the publication of presidential proclamations, executive orders, and regulations from federal agencies. The office also compiles and publishes the Code of Federal Regulations, which contains all federal regulations currently in effect.

**APIs and surfaces:**

- [Office of the Federal Register](https://www.federalregister.gov/developers/documentation/api/v1) — Search, browse and learn about the Federal Register. Federal Register 2.0 is the unofficial daily publication for rules, proposed rules, and notices of Federal agencies and organizations, as well as executive orders a...

---

## SAM.gov

**Repository:** [https://github.com/api-evangelist/sam.gov](https://github.com/api-evangelist/sam.gov)

SAM.gov (System for Award Management) is the official US government system for vendor registration and federal procurement. Operated by the General Services Administration (GSA), SAM.gov consolidates multiple legacy acquisition systems and provides APIs for contract opportunities, entity management, federal hierarchy, and location validation services.

**APIs and surfaces:**

- [SAM.gov Public Location Services API](https://open.gsa.gov/api/location-public-api/) — The Public Location Services API provides Location Services data (Country, State, City, and ZIP) for validating location data submitted to SAM.gov. Location Services State API supports both United States and Foreign C...
- [SAM.gov Get Opportunities Public API](https://open.gsa.gov/api/get-opportunities-public-api/) — The Get Opportunities Public API provides all published contract opportunity details based on request parameters. Returns solicitation notices, awards, and pre-solicitations from SAM.gov. Rate limited to 1000 requests...
- [SAM.gov Opportunity Management API](https://open.gsa.gov/api/opportunities-api/) — The Opportunity Management API allows authorized users to programmatically submit, update, and manage contract opportunity notices in SAM.gov. Requires federal government or contractor system account authorization.
- [SAM.gov Entity Management API](https://open.gsa.gov/api/entity-api/) — The Entity Management API provides detailed entity (vendor/contractor) information from SAM.gov including registration status, hierarchy, security levels, points of contact, and certifications. Used to verify vendors...
- [SAM.gov Federal Hierarchy Public API](https://open.gsa.gov/api/fh-public-api/) — The Federal Hierarchy Public API allows non-federal users to retrieve Federal Organization details down to the office level. Used to look up agency and organizational hierarchy for federal procurement purposes.
- [SAM.gov Contract Awards API](https://open.gsa.gov/api/contract-awards/) — The Contract Awards API provides access to federal contract award information from SAM.gov, including award details, vendor information, award amounts, and performance period data.

---

## Social Security Administration

**Repository:** [https://github.com/api-evangelist/social-security-administration](https://github.com/api-evangelist/social-security-administration)

The Social Security Administration (SSA) is a U.S. federal agency that administers Social Security programs including retirement, disability (SSDI), and survivor benefits. SSA's Developer Support portal provides APIs for locating field offices and resident stations, accessing open data on OASDI beneficiary statistics, and verifying Social Security Numbers through the eCBSV program.

**APIs and surfaces:**

- [SSA Field Office Address API](https://www.ssa.gov/developer/api/FO_Address_Data_AppDevs.htm) — Provides location, address, telephone numbers, and office hours for Social Security Administration Field Offices across the United States. Uses the Esri ArcGIS Online platform as a RESTful Feature Service.
- [SSA Resident Station Address API](https://www.ssa.gov/developer/api/RS_Address_Data_AppDevs.htm) — Provides location, address, telephone numbers, and office hours for Social Security Administration Resident Stations — smaller SSA offices that serve rural communities. Uses the Esri ArcGIS Online platform as a RESTfu...
- [SSA OASDI Open Data API](https://www.ssa.gov/data/OASDIBeneficiariesbyState.htm) — Provides statistics on Old Age, Survivors, and Disability Insurance (OASDI) beneficiaries including counts by state, total population data, and benefit payment statistics. Available through SSA's open data portal and...
- [SSA eCBSV Verification API](https://www.ssa.gov/dataexchange/eCBSV/) — The Electronic Consent Based SSN Verification (eCBSV) Service allows financial institutions to verify that a provided Social Security Number, name, and date of birth match SSA records, with consent from the individual...

---

## Substance Abuse and Mental Health Services Administration

**Repository:** [https://github.com/api-evangelist/substance-abuse-and-mental-health-services-administration](https://github.com/api-evangelist/substance-abuse-and-mental-health-services-administration)

The Substance Abuse and Mental Health Services Administration (SAMHSA) is a branch of the U.S. Department of Health and Human Services dedicated to improving the quality and availability of prevention, treatment, and recovery support services for individuals struggling with substance abuse and mental health disorders. SAMHSA provides APIs and open data for the behavioral health treatment services locator, national survey data (NSDUH), treatment episode statistics (TEDS), and state mental health data.

**APIs and surfaces:**

- [SAMHSA Behavioral Health Treatment Services Locator API](https://findtreatment.gov) — The SAMHSA Treatment Services Locator API provides searchable access to over 14,000 behavioral health treatment facilities across the United States. Search by location, service type, payment options (Medicaid, Medicar...
- [SAMHSA Data Portal](https://www.datafiles.samhsa.gov) — SAMHSA's data portal provides access to national and state-level behavioral health statistics including the National Survey on Drug Use and Health (NSDUH), Treatment Episode Data Set (TEDS), and National Survey of Sub...
- [SAMHSA Mental Health Client Level Data](https://www.samhsa.gov/data/report/2020-mental-health-client-level-data-cld) — Client-Level Data (CLD) from state mental health agencies on clients receiving state-funded mental health services. Provides data on demographics, diagnoses, services received, and outcomes.

---

## The Administration for Children and Families

**Repository:** [https://github.com/api-evangelist/the-administration-for-children-and-families](https://github.com/api-evangelist/the-administration-for-children-and-families)

The Administration for Children and Families (ACF) is a division of the U.S. Department of Health and Human Services dedicated to promoting the economic and social well-being of children, families, and communities. ACF administers programs including TANF (cash assistance), CCDF (child care), Head Start, LIHEAP (energy assistance), child welfare, and refugee assistance. ACF collects administrative data via systems including AFCARS (foster care and adoption), NCANDS (child abuse and neglect), NYTD (youth in transition), TANF data reporting, and CCDF data. ACF is pursuing interoperability standards using HL7 FHIR and USCDI+ for human services data exchange. The TANF Data Portal (tanfdata.acf.hhs.gov) provides state agencies with a data submission and analysis interface.

**APIs and surfaces:**

- [TANF Data Portal](https://tanfdata.acf.hhs.gov/) — The TANF Data Portal (TDP) is a secure, web-based data reporting system for state agencies to submit Temporary Assistance for Needy Families (TANF) program data to ACF. It provides data submission workflows, validatio...
- [ACF Human Services Interoperability Initiative](https://acf.gov/about/interoperability) — ACF's initiative to develop interoperability standards for human services programs using HL7 FHIR and USCDI+ (United States Core Data for Interoperability Plus). Aims to enable data sharing between social services, he...
- [National Data Archive on Child Abuse and Neglect](https://www.ndacan.acf.hhs.gov/) — NDACAN is the central repository for datasets related to child abuse, neglect, and child welfare at Cornell University, funded by ACF. Provides access to AFCARS (foster care/adoption), NCANDS (child abuse and neglect)...
- [ACF Data and Research Portal](https://acf.gov/acf-data-research) — ACF's primary data and research portal providing access to program data, statistical reports, and research findings across all ACF program offices. Includes TANF caseload data, CCDF data, Head Start program data, and...

---

## U.S. Access Board

**Repository:** [https://github.com/api-evangelist/u-s-access-board](https://github.com/api-evangelist/u-s-access-board)

The U.S. Access Board is an independent federal agency that promotes equality for people with disabilities through the development of accessibility guidelines and standards. The Board develops criteria for accessibility in the built environment, transportation, communication, and information and communication technology (ICT). It enforces the Architectural Barriers Act (ABA) for federally funded facilities and provides technical assistance, training, and guidance documents to help organizations implement accessibility requirements under the Americans with Disabilities Act (ADA) and Section 508 of the Rehabilitation Act.

**APIs and surfaces:**

- [U.S. Access Board](https://www.access-board.gov/) — The U.S. Access Board is an independent federal agency that advances accessibility for people with disabilities through the development of accessibility guidelines and standards for the built environment, transit vehi...

---

## U.S. Agency for Global Media

**Repository:** [https://github.com/api-evangelist/u-s-agency-for-global-media](https://github.com/api-evangelist/u-s-agency-for-global-media)

The U.S. Agency for Global Media (USAGM) is an independent federal agency that oversees a network of international media organizations aimed at providing news and information to audiences around the world in support of freedom and democracy. These media outlets include Voice of America (VOA), Radio Free Europe/Radio Liberty (RFE/RL), Radio Free Asia (RFA), Office of Cuba Broadcasting (OCB), Middle East Broadcasting Networks (MBN), and the Open Technology Fund (OTF). Together these entities operate in over 64 languages and reach approximately 427 million people weekly, producing more than 3,000 hours of original programming per week in regions where access to a free press is limited.

**APIs and surfaces:**

- [U.S. Agency for Global Media](https://www.usagm.gov/) — The United States Agency for Global Media (USAGM) is an independent federal agency that oversees a network of media organizations providing news and information to audiences around the world in support of freedom and...
- [USAGM Press Freedom](https://github.com/usagm/usagm-press-freedom) — USAGM press freedom data and resources published on GitHub.
- [Open Technology Fund](https://www.opentech.fund/) — The Open Technology Fund (OTF) is a U.S. government-funded independent nonprofit that supports the development of open-source internet freedom technologies to advance human rights and open societies. OTF funds project...

---

## U.S. Fish and Wildlife Service

**Repository:** [https://github.com/api-evangelist/fish-and-wildlife-service](https://github.com/api-evangelist/fish-and-wildlife-service)

The U.S. Fish and Wildlife Service (USFWS) is the federal agency responsible for conserving, protecting, and enhancing fish, wildlife, plants, and their habitats for the continuing benefit of the American people. USFWS programs cover migratory birds, endangered species, interjurisdictional fish and marine mammals, and inland sport fisheries. Public-facing data is shared primarily through web tools and downloadable datasets such as the Environmental Conservation Online System (ECOS), Information for Planning and Consultation (IPaC), and the Service Catalog (ServCat) rather than a consolidated public API program.

**APIs and surfaces:**

- [USFWS Environmental Conservation Online System (ECOS)](https://ecos.fws.gov/ecp/) — The Environmental Conservation Online System (ECOS) is the USFWS portal for threatened and endangered species data, critical habitat designations, recovery plans, and Section 7 consultations. ECOS exposes structured s...
- [USFWS Information for Planning and Consultation (IPaC)](https://ipac.ecosphere.fws.gov/) — Information for Planning and Consultation (IPaC) is a USFWS web-based project planning tool that helps users identify potential impacts on protected species and habitats, generate official species lists for Endangered...
- [USFWS Service Catalog (ServCat)](https://ecos.fws.gov/ServCat/) — The Service Catalog (ServCat) is the USFWS reference library for reports, datasets, and other documents produced by or for the agency. ServCat is backed by an internal services layer; while the catalog is publicly bro...

---

## U.S. Geological Survey

**Repository:** [https://github.com/api-evangelist/u-s-geological-survey](https://github.com/api-evangelist/u-s-geological-survey)

The U.S. Geological Survey (USGS) is a scientific agency of the U.S. government that conducts research and provides data on the natural resources and hazards of the United States. The USGS is known for its work in mapping and monitoring earthquakes, volcanoes, and landslides to help mitigate risks and protect communities. USGS also studies water resources including streamflow, groundwater, and water quality through a nationwide network of monitoring stations. Their public APIs provide programmatic access to real-time earthquake data, water monitoring observations, seismic design parameters, and geospatial data products.

**APIs and surfaces:**

- [Earthquake Notifications, Feeds, and Web Services](https://earthquake.usgs.gov/earthquakes/feed/) — The USGS Earthquake Hazards Program provides real-time notifications and historical earthquake data through the FDSN Event Web Service. Search the ANSS ComCat earthquake catalog by geography, time, magnitude, and dept...
- [USGS Water Data APIs](https://api.waterdata.usgs.gov/) — The USGS Water Data OGC APIs provide standardized access to USGS water monitoring data including continuous streamflow, daily values, groundwater levels, discrete water quality measurements, and monitoring location me...
- [Asset Identifier Service (AIS)](https://www.usgs.gov/tools/asset-identifier-service-ais) — The USGS Asset Identifier Service (AIS) allows USGS personnel to reserve, register, publish, and manage USGS persistent identifiers to make research more Findable, Accessible, Interoperable, and Reusable (FAIR).
- [Seismic Design Web Service](https://earthquake.usgs.gov/ws/designmaps/) — Web services produced by the U.S. Geological Survey for calculating parameter values from various seismic design reference documents for engineering and construction purposes.
- [ScienceBase](https://www.usgs.gov/tools/sciencebase) — ScienceBase is a USGS Trusted Digital Repository that provides permission-controlled and public access to scientific data products through a REST API supporting upload, documentation, and sharing of research data.
- [StreamStats Web Services](https://www.usgs.gov/tools/streamstats-web-services) — The StreamStats Web Services provide HTTP-accessible hydrological analysis services for delineating drainage areas, estimating peak flows, and computing basin characteristics for water resources planning.
- [USGS Water Services (Legacy)](https://www.usgs.gov/tools/usgs-water-services) — The original USGS NWIS water services API providing streamflow, groundwater, water quality, and site information via REST protocol in XML and other media types. High availability and fault-tolerant design.

---

## U.S. Immigration and Customs Enforcement (ICE)

**Repository:** [https://github.com/api-evangelist/ice](https://github.com/api-evangelist/ice)

U.S. Immigration and Customs Enforcement (ICE) is a federal law enforcement agency under the U.S. Department of Homeland Security responsible for enforcing federal immigration and customs laws. ICE does not publish a general-purpose developer API portal, but provides public-facing systems, open data, statistics, and FOIA resources used by researchers, attorneys, journalists, and the public.

**APIs and surfaces:**

- [ICE Online Detainee Locator System (ODLS)](https://locator.ice.gov/) — The Online Detainee Locator System is a public-facing search tool that allows the public to locate detainees currently in ICE custody by A-Number and country of birth, or by biographical information. The system is pro...
- [ICE ERO Custody and Enforcement Statistics](https://www.ice.gov/statistics) — Enforcement and Removal Operations (ERO) publishes custody arrest, enforcement, and removal statistics in machine-readable formats (CSV/Excel) at regular reporting cadence. These datasets are published as downloadable...
- [ICE FOIA Library](https://www.ice.gov/foia) — ICE's Freedom of Information Act (FOIA) program provides a public reading room and electronic FOIA library with frequently requested records, policy directives, and data releases. Records are released as documents and...

---

## U.S. Treasury Fiscal Data

**Repository:** [https://github.com/api-evangelist/u-s-treasury-fiscal-data](https://github.com/api-evangelist/u-s-treasury-fiscal-data)

The U.S. Treasury Bureau of the Fiscal Service manages the government's finances including collecting revenue, paying federal bills, managing federal debt, and producing the nation's financial accounts. Their Fiscal Data API provides free, open access to federal financial data through a standardized RESTful API covering 80+ datasets. Key datasets include the Debt to the Penny (daily public debt outstanding), Treasury Reporting Rates of Exchange (quarterly foreign currency rates), Average Interest Rates on U.S. Treasury Securities, Daily Treasury Statements, Monthly Treasury Statements, and U.S. savings bond data. No authentication required.

**APIs and surfaces:**

- [Treasury Fiscal Data API](https://fiscaldata.treasury.gov/) — The U.S. Treasury Fiscal Data API provides free, open access to federal financial data published by the Bureau of the Fiscal Service. Covers 80+ datasets including the Debt to the Penny dataset, Treasury Reporting Rat...

---

## United States Africa Command

**Repository:** [https://github.com/api-evangelist/united-states-africa-command](https://github.com/api-evangelist/united-states-africa-command)

United States Africa Command (AFRICOM) is a unified combatant command of the United States Department of Defense responsible for military operations and coordination in Africa. AFRICOM's primary mission is to advance U.S. national security interests and promote regional stability through security cooperation, military assistance, and joint training exercises with African partner nations. AFRICOM is headquartered at Kelley Barracks in Stuttgart, Germany and maintains relationships with 53 African nations. The command is led by a four-star general and conducts operations spanning humanitarian assistance, counter-terrorism, peacekeeping support, and capacity-building activities across the continent.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## United States Army Corps of Engineers

**Repository:** [https://github.com/api-evangelist/united-states-army-corps-of-engineers](https://github.com/api-evangelist/united-states-army-corps-of-engineers)

The U.S. Army Corps of Engineers (USACE) provides engineering and construction services for the nation, managing water resources, infrastructure, and environmental projects. USACE operates the Corps Water Management System (CWMS) Data API, a RESTful service for accessing real-time and historical water management data including time series measurements, location information, ratings, forecasts, and project data for USACE-managed water resources across the United States.

**APIs and surfaces:**

- [CWMS Data API](https://cwms-data.usace.army.mil/cwms-data/) — The Corps Water Management System (CWMS) Data API provides a RESTful interface for retrieving water management data from the U.S. Army Corps of Engineers. Supports access to time series, locations, ratings, forecasts,...

---

## United States Botanic Garden

**Repository:** [https://github.com/api-evangelist/united-states-botanic-garden](https://github.com/api-evangelist/united-states-botanic-garden)

The United States Botanic Garden (USBG) is a living museum in Washington, D.C. that showcases a diverse collection of plants from around the world. Established by the U.S. Congress in 1820, the Botanic Garden serves as a resource for education and inspiration, promoting an understanding and appreciation of plants and their importance to the environment and human well-being. The Garden maintains more than 9,500 accessions representing approximately 44,000 plants, managed through its Living Collections database (BG-BASE). The USBG is administered by the Architect of the Capitol and is located adjacent to the U.S. Capitol on the National Mall.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## United States Capitol Police

**Repository:** [https://github.com/api-evangelist/united-states-capitol-police](https://github.com/api-evangelist/united-states-capitol-police)

The United States Capitol Police (USCP) is a federal law enforcement agency responsible for protecting the U.S. Capitol Building, members of Congress, and visitors to the Capitol complex. The agency is tasked with maintaining security and order within the Capitol grounds, conducting background checks on individuals entering the buildings, and responding to emergencies and threats. Capitol Police officers also provide security for large events and demonstrations taking place on Capitol Hill. As a legislative branch entity, the USCP operates under unique legal frameworks. In 2024, the agency adopted a FOIA-like request process making certain records publicly available upon request.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## United States Census Bureau

**Repository:** [https://github.com/api-evangelist/united-states-census-bureau](https://github.com/api-evangelist/united-states-census-bureau)

The U.S. Census Bureau is the nation's leading provider of quality data about its people and economy. The Census Bureau has been rolling out datasets via APIs, providing programmatic access to demographic, economic, housing, and social statistics. The Census Data API supports queries across datasets including the American Community Survey, Decennial Census, Population Estimates, County Business Patterns, Economic Census, and International Trade, with data available at national, state, county, tract, and block group geographic levels.

**APIs and surfaces:**

- [Census Data API](https://www.census.gov/data/developers.html) — The Census Data API provides programmatic access to statistical data from Census Bureau surveys and datasets. Users can query demographic, economic, housing, and social data by geographic level and filter using hundre...
- [TIGERweb GeoServices REST API](https://tigerweb.geo.census.gov/tigerwebmain/TIGERweb_main.html) — The TIGERweb GeoServices REST API provides access to Census Bureau geographic data including boundaries for states, counties, census tracts, block groups, and other geographic entities. Supports standard ArcGIS REST A...
- [Census Geocoding Services](https://geocoding.geo.census.gov/geocoder/) — The Census Geocoding Services convert addresses to geographic coordinates and census geography identifiers. Supports both single-address lookups and batch geocoding for large address lists.

---

## United States Coast Guard

**Repository:** [https://github.com/api-evangelist/united-states-coast-guard](https://github.com/api-evangelist/united-states-coast-guard)

The United States Coast Guard is a branch of the military responsible for enforcing maritime laws, protecting the nation's waterways and coastlines, and ensuring the safety and security of seafarers. They conduct search and rescue operations, respond to environmental disasters, combat illegal drug trafficking and immigration, and conduct security patrols to thwart terrorism threats. The USCG provides public APIs and data services through the CGMIX Maritime Information Exchange, the Navigation Center (NAVCEN), and the National Vessel Documentation Center (NVDC).

**APIs and surfaces:**

- [CGMIX Maritime Information Exchange API](https://cgmix.uscg.mil/xml/default.aspx) — The Coast Guard Maritime Information Exchange (CGMIX) provides XML web services for accessing Coast Guard maritime information including vessel documentation, Port State Information Exchange (PSIX) data, equipment cer...
- [NAVCEN AIS Vessel Information Verification Service](https://www.navcen.uscg.gov/ais-vivs-home) — The Vessel Information Verification Service (VIVS) is a NAVCEN web service that allows retrieval of a vessel's broadcasted AIS static data, including Maritime Mobile Service Identity (MMSI), call sign, vessel name, of...

---

## United States Department of Agriculture

**Repository:** [https://github.com/api-evangelist/united-states-department-of-agriculture](https://github.com/api-evangelist/united-states-department-of-agriculture)

The United States Department of Agriculture (USDA) is a federal agency responsible for developing and executing policies related to farming, agriculture, forestry, and food. The USDA works to ensure the sustainability and safety of America's food supply, while also supporting rural development and promoting economic growth in rural communities. USDA provides multiple public APIs including FoodData Central for nutrient data, NASS Quick Stats for agricultural statistics, ERS ARMS for farm economics, and NRCS AWDB for water and climate monitoring data.

**APIs and surfaces:**

- [USDA FoodData Central API](https://fdc.nal.usda.gov/api-guide/) — The FoodData Central API provides REST access to FoodData Central (FDC), the USDA's integrated data system that provides expanded nutrient profile data and links to related agricultural and experimental research. The...
- [USDA NASS Quick Stats API](https://quickstats.nass.usda.gov/api) — The USDA NASS Quick Stats API provides direct access to the National Agricultural Statistics Service's official published aggregate estimates related to U.S. agricultural production. Returns data for commodities, cate...
- [USDA ERS ARMS Data API](https://www.ers.usda.gov/developer/data-apis/arms-data-api) — The USDA Economic Research Service (ERS) ARMS Data API provides access to the Agricultural Resource Management Survey (ARMS), covering farm finances, production practices, and resource use for U.S. farms. Supports att...
- [USDA NRCS AWDB Water and Climate REST API](https://wcc.sc.egov.usda.gov/awdbRestApi/swagger-ui/index.html) — The USDA Natural Resources Conservation Service (NRCS) Air and Water Database (AWDB) REST API provides access to snow, water, and climate data from SNOTEL (SNOw TELemetry) stations and Soil Climate Analysis Network (S...

---

## United States European Command

**Repository:** [https://github.com/api-evangelist/united-states-european-command](https://github.com/api-evangelist/united-states-european-command)

United States European Command (EUCOM) is one of the eleven unified combatant commands of the U.S. Department of Defense. EUCOM is responsible for U.S. military operations and security cooperation in Europe, as well as parts of North Africa and the Middle East. The command works to support NATO allies, deter aggression, and ensure regional stability through military exercises, humanitarian operations, and partnership activities. EUCOM does not expose public-facing REST APIs; access to EUCOM data systems requires DoD Common Access Card (CAC) authentication through restricted portals including the EUCOM intranet portal and milSuite collaboration platform.

_No discrete APIs catalogued in this repo yet — the index exists as a placeholder for the agency's surfaces._

---

## United States Fire Administration

**Repository:** [https://github.com/api-evangelist/united-states-fire-administration](https://github.com/api-evangelist/united-states-fire-administration)

The United States Fire Administration (USFA) is a government agency under the Federal Emergency Management Agency (FEMA) that is responsible for providing leadership and support to fire departments across the country. The USFA works to improve fire prevention and safety by disseminating training and education programs, conducting research on fire-related issues, and developing national fire prevention initiatives. USFA manages the National Fire Incident Reporting System (NFIRS) and the National Fire Academy (NFA). Fire incident data is accessible through the OpenFEMA API platform at www.fema.gov/api/open.

**APIs and surfaces:**

- [OpenFEMA Fire Data API](https://www.fema.gov/about/openfema/api) — The OpenFEMA API provides free, read-only REST access to FEMA and USFA datasets including the National Fire Incident Reporting System (NFIRS) annual public data, disaster declarations, and other emergency management d...

---

## United States National Library of Medicine

**Repository:** [https://github.com/api-evangelist/united-states-national-library-of-medicine](https://github.com/api-evangelist/united-states-national-library-of-medicine)

The United States National Library of Medicine (NLM) is the world's largest biomedical library. It serves as a vital resource for researchers, healthcare professionals, and the general public by providing access to a vast collection of biomedical literature and resources. The NLM offers a wide range of services and resources including online databases, digital archives, and research tools that support medical research, education, and patient care. Key APIs include the NCBI E-Utilities (PubMed, Entrez), NCBI Datasets (genomes, genes), BLAST sequence alignment, and the ClinicalTrials.gov API.

**APIs and surfaces:**

- [NCBI E-Utilities API](https://www.ncbi.nlm.nih.gov/books/NBK25497/) — The NCBI E-Utilities (Entrez Programming Utilities) are the public API to the NCBI Entrez system providing access to all Entrez databases including PubMed (biomedical literature), PMC (full-text articles), Gene, Nucco...
- [NCBI Datasets REST API](https://www.ncbi.nlm.nih.gov/datasets/docs/v2/api/) — The NCBI Datasets REST API v2 provides programmatic access to biological data including genome assemblies, gene records, and protein sequences across organisms. Returns data packages containing sequences, annotations,...
- [NCBI BLAST URL API](https://blast.ncbi.nlm.nih.gov/doc/blast-help/developerinfo.html) — The NCBI BLAST URL API allows developers to submit BLAST (Basic Local Alignment Search Tool) sequence searches for processing at NCBI using HTTPS. Supports nucleotide and protein sequence searches against NCBI databas...
- [ClinicalTrials.gov API](https://clinicaltrials.gov/data-api/api) — The ClinicalTrials.gov API provides programmatic access to clinical trial data registered with ClinicalTrials.gov, operated by the National Library of Medicine. Returns study information, eligibility criteria, outcome...

---

## US AbilityOne Commission

**Repository:** [https://github.com/api-evangelist/us-abilityone-commission](https://github.com/api-evangelist/us-abilityone-commission)

The US AbilityOne Commission is an independent federal agency that administers the AbilityOne Program, which creates employment opportunities for individuals who are blind or have significant disabilities. Operating under the Javits-Wagner-O'Day (JWOD) Act, the Commission maintains the AbilityOne Procurement List — a catalog of products and services that federal agencies are required to purchase from qualified nonprofit agencies employing people who are blind or have significant disabilities. The PLIMS (Procurement List Information Management System) provides web-based search access to the products and services list. Two central nonprofit agencies, NIB (National Industries for the Blind) and SourceAmerica, manage the affiliated nonprofit network.

**APIs and surfaces:**

- [AbilityOne Procurement List API](https://plims.abilityone.gov/search-products/) — The Procurement List Information Management System (PLIMS) provides search access to the AbilityOne Procurement List — the catalog of products (identified by NSN) and services that federal agencies are mandated to pro...

---

## US African Development Foundation

**Repository:** [https://github.com/api-evangelist/us-african-development-foundation](https://github.com/api-evangelist/us-african-development-foundation)

The US African Development Foundation (USADF) is an independent federal agency established by Congress in 1980 to invest directly in African grassroots enterprises and social entrepreneurs. USADF provides grant capital of up to $250,000, capacity-building assistance, and convening opportunities to develop, grow, and scale African enterprises and entrepreneurs. USADF grant data is publicly accessible via the USASpending.gov API, and grant opportunities are posted to Grants.gov. Between 2019 and 2023, USADF awarded more than $141 million in grants to over 1,050 community enterprises in Africa, directly affecting 6.2 million people.

**APIs and surfaces:**

- [USADF Grants Data API](https://www.usaspending.gov/agency/african-development-foundation) — Access to USADF grant award data through the USASpending.gov API. Provides programmatic access to USADF grants, awards, recipients, and spending profiles as reported to the federal awards transparency system. USADF da...
- [USADF Grant Opportunities API](https://www.grants.gov/search-grants?agencyCode=ADF) — Access to USADF grant opportunity listings through the Grants.gov API. USADF posts open grant solicitations on Grants.gov for African grassroots enterprises, cooperatives, and social entrepreneurs seeking funding. Gra...

---

## US Air Force

**Repository:** [https://github.com/api-evangelist/us-air-force](https://github.com/api-evangelist/us-air-force)

The United States Air Force is responsible for providing air and space power to protect the United States and its interests. As part of the Department of the Air Force, the USAF has adopted an API-first architecture strategy to improve data sharing, software interoperability, and integration across military systems. The DAF publishes open datasets through data.af.mil and provides developer resources through software.af.mil.

**APIs and surfaces:**

- [US Air Force Open Data](https://www.data.af.mil/) — The Air Force OPEN Data Program provides public access to Department of the Air Force datasets, covering military installations, personnel data, research findings, and operational information. The program supports the...
- [US Air Force DAF API Program](https://www.dafcio.af.mil/) — The Department of the Air Force API program provides a strategic framework for standardized APIs across the DAF enterprise. The DAF API Roadmap 2.0 and API Reference Architecture 2.0 guide the implementation of a mode...

---

## US Arctic Research Commission

**Repository:** [https://github.com/api-evangelist/us-arctic-research-commission](https://github.com/api-evangelist/us-arctic-research-commission)

The US Arctic Research Commission is an independent agency that provides recommendations and advice to the President and Congress on Arctic research and policy. The Commission works to promote research that improves our understanding of the Arctic environment and its impact on global climate change, as well as the Arctic's role in national security and economic development. The Commission publishes research goals, working group resources, and policy documents at arctic.gov.

**APIs and surfaces:**

- [US Arctic Research Commission](https://www.arctic.gov/) — The US Arctic Research Commission (USARC) is an independent federal agency that advises the President and Congress on domestic and international Arctic research policy. The Commission establishes national policy, prio...

---

## US Army

**Repository:** [https://github.com/api-evangelist/us-army](https://github.com/api-evangelist/us-army)

The US Army is the largest branch of the United States military and is responsible for conducting ground combat operations. Its mission is to defend the nation and support humanitarian, peacekeeping, and training missions worldwide. The Army maintains a public API at api.army.mil providing access to news articles, events, and official content using OpenAPI 3 specification.

**APIs and surfaces:**

- [US Army Public API](https://api.army.mil/) — The US Army Public API provides public access to Army news articles, events, and official announcements. Documented with OpenAPI 3 (OAS3) and a Swagger UI interface at api.army.mil. The API enables access to Army cont...
- [US Army Open Data](https://www.army.mil/) — The US Army provides open data resources through data.gov and maintains open source projects through the US Army Research Laboratory GitHub organization. Army data includes geospatial datasets, research publications,...

---

## US Capitol Visitor Center

**Repository:** [https://github.com/api-evangelist/us-capitol-visitor-center](https://github.com/api-evangelist/us-capitol-visitor-center)

The US Capitol Visitor Center (CVC) serves as the main entrance for visitors to the United States Capitol, providing resources and information to enhance the visitor experience. The Center offers guided tours of the Capitol building, allowing visitors to explore the historic rooms and learn about the legislative process. It also houses exhibits and educational materials that highlight the history and significance of the Capitol and its role in American democracy. The CVC operates under the Architect of the Capitol and offers free guided tours, specialty tours, virtual tours, and educational programs for students and visitors from around the world.

**APIs and surfaces:**

- [US Capitol Visitor Center](https://www.visitthecapitol.gov) — The US Capitol Visitor Center provides visitor information, guided tours, educational programs, and specialty tours of the United States Capitol building. While no public developer API is available, the CVC operates a...

---

## US Central Command

**Repository:** [https://github.com/api-evangelist/us-central-command](https://github.com/api-evangelist/us-central-command)

US Central Command (CENTCOM) is a unified combatant command of the United States Department of Defense responsible for overseeing American military operations across a region encompassing the Middle East, Central Asia, and parts of East Africa. Its primary mission is to ensure the security and stability of this strategic area by deterring and defeating threats from terrorist organizations, rogue states, and other adversaries. CENTCOM coordinates joint military operations and exercises, supports partner nation capacity building, and maintains operational readiness across its area of responsibility spanning 21 countries. Headquartered at MacDill Air Force Base in Tampa, Florida, CENTCOM does not currently offer a public developer API. Public information is accessible through its official media and press releases portal.

**APIs and surfaces:**

- [US Central Command](https://www.centcom.mil) — US Central Command (CENTCOM) does not offer a public developer API. Public information resources include press releases, news articles, official statements, and media content accessible through the official CENTCOM we...

---

## US Chemical Safety and Hazard Investigation Board

**Repository:** [https://github.com/api-evangelist/us-chemical-safety-and-hazard-investigation-board](https://github.com/api-evangelist/us-chemical-safety-and-hazard-investigation-board)

The US Chemical Safety and Hazard Investigation Board (CSB) is an independent federal agency responsible for investigating chemical accidents and hazards across the United States. The board conducts thorough investigations into incidents involving the release of hazardous chemicals, explosions, fires, and other accidents that pose a threat to public safety and the environment. The CSB publishes investigation reports, safety recommendations, and incident data, and maintains a public database of completed investigations and safety recommendations. While no formal public API is available, the CSB makes incident data available through its website and periodic compiled reports under its Accidental Release Reporting Rule transparency initiative.

**APIs and surfaces:**

- [US Chemical Safety and Hazard Investigation Board](https://www.csb.gov) — The CSB does not currently offer a formal public API. However, it maintains public databases of investigations, recommendations, and incident reports accessible through its website. The CSB releases periodic volumes o...

---

## US Citizenship and Immigration Services

**Repository:** [https://github.com/api-evangelist/us-citizenship-and-immigration-services](https://github.com/api-evangelist/us-citizenship-and-immigration-services)

The US Citizenship and Immigration Services (USCIS) is a government agency responsible for overseeing lawful immigration to the United States. Its primary function is to process and adjudicate applications for various immigration benefits, such as green cards, work permits, and naturalization. USCIS provides a public developer portal (developer.uscis.gov) with APIs for case status lookup and FOIA request submission. The Torch API Program enables qualified software developers to integrate USCIS services into immigration case management applications, providing OAuth 2.0 secured access to case status information and Freedom of Information Act (FOIA) request capabilities.

**APIs and surfaces:**

- [USCIS Case Status API](https://developer.uscis.gov/api/case-status) — The USCIS Case Status API provides case status information to USCIS customers and their representatives who require regular access to case status information. It accepts a 13-character USCIS receipt number and returns...
- [USCIS FOIA Request and Status API](https://developer.uscis.gov/api/foia-request-and-status) — The USCIS FOIA Request and Status API enables consumers to submit Freedom of Information Act (FOIA) or Privacy Act (PA) requests for Alien File records and check the status of submitted requests using the Request Numb...

---

## US Commission on Civil Rights

**Repository:** [https://github.com/api-evangelist/us-commission-on-civil-rights](https://github.com/api-evangelist/us-commission-on-civil-rights)

The US Commission on Civil Rights is an independent, bipartisan federal agency that investigates, reports on, and issues public service announcements about discrimination or denials of equal protection based on race, color, religion, sex, age, disability, national origin, or in the electoral process. The Commission informs the development of national civil rights policy and laws through factual research, advisory committees in all 50 states, and public reporting to the President and Congress.

**APIs and surfaces:**

- [US Commission on Civil Rights](https://www.usccr.gov/) — The US Commission on Civil Rights is an independent, bipartisan federal agency established in 1957 that investigates, reports on, and issues public service announcements about discrimination or denials of equal protec...

---

## US Commission on International Religious Freedom

**Repository:** [https://github.com/api-evangelist/us-commission-on-international-religious-freedom](https://github.com/api-evangelist/us-commission-on-international-religious-freedom)

The US Commission on International Religious Freedom (USCIRF) is an independent, bipartisan federal government commission created by the International Religious Freedom Act (IRFA) of 1998. USCIRF monitors the universal right to freedom of religion or belief abroad, reviews the facts and circumstances of violations of religious freedom internationally, and makes policy recommendations to the President, Secretary of State, and Congress. The Commission publishes an annual report designating Countries of Particular Concern (CPCs) and Special Watch List (SWL) countries, and recommends Entities of Particular Concern (EPCs) among non-state actors.

**APIs and surfaces:**

- [US Commission on International Religious Freedom](https://www.uscirf.gov/) — The US Commission on International Religious Freedom (USCIRF) is an independent, bipartisan federal government commission created by the International Religious Freedom Act of 1998 that monitors religious freedom viol...

---

## US Copyright Office

**Repository:** [https://github.com/api-evangelist/us-copyright-office](https://github.com/api-evangelist/us-copyright-office)

The US Copyright Office is a government agency responsible for administering and enforcing copyright laws in the United States. The office is responsible for registering and documenting copyright claims, maintaining the public catalog of copyright records, providing bulk data downloads of registration records, and administering licensing programs. The Copyright Office provides open bulk datasets of approximately 22 million registration records and is modernizing its systems through the Enterprise Copyright System (ECS) program.

**APIs and surfaces:**

- [Copyright Public Records System](https://publicrecords.copyright.gov/) — The Copyright Public Records System (CPRS) provides access to U.S. copyright registration and recordation data with advanced search capabilities and improved interfaces. Replaced the Online Public Catalog in June 2025...
- [Copyright Bulk Datasets](https://www.copyright.gov/economic-research/usco-datasets/) — Bulk download of approximately 22 million U.S. copyright registration records from January 1, 1978 to June 27, 2025. Available in raw unparsed MARC, parsed CSV, and tabular CSV formats. Includes registrations, renewal...
- [Licensing Documents Search](https://licensing.copyright.gov/lds/) — Searchable directory of licensing documents including compulsory license statements of account, royalty payments, and statutory license records maintained by the Copyright Office.
- [DMCA Designated Agent Directory](https://www.copyright.gov/dmca-directory/) — Searchable directory of Online Service Providers (OSPs) that have registered DMCA designated agents with the U.S. Copyright Office per Section 512 of the Digital Millennium Copyright Act.

---

## US Court of Appeals for the Federal Circuit

**Repository:** [https://github.com/api-evangelist/us-court-of-appeals-for-the-federal-circuit](https://github.com/api-evangelist/us-court-of-appeals-for-the-federal-circuit)

The US Court of Appeals for the Federal Circuit is a federal appellate court with nationwide jurisdiction over cases involving patent law, international trade, government contracts, federal employment, veterans' benefits, and other specialized areas of federal law. The court provides public access to opinions and orders online from 2004 to present, with full case records accessible via PACER for cases filed after March 1, 2012. The PACER system offers developer APIs including the Authentication API and the Case Locator (PCL) API for programmatic access to federal case data across all federal courts.

**APIs and surfaces:**

- [PACER - Public Access to Court Electronic Records](https://pacer.uscourts.gov/file-case/court-cmecf-lookup/court/CAFC) — Public Access to Court Electronic Records (PACER) provides online access to U.S. Federal Court case and docket information from Federal Courts including the U.S. Court of Appeals for the Federal Circuit (CAFC). PACER...
- [Federal Circuit Opinions and Orders](https://www.cafc.uscourts.gov/home/case-information/opinions-orders/) — Public access to U.S. Court of Appeals for the Federal Circuit opinions, orders, and judgments. Includes precedential opinions, Rule 36 judgments, non-ministerial orders, and errata. Available online from October 1, 2...
- [Federal Circuit Case Records](https://www.cafc.uscourts.gov/home/case-information/case-records/) — Case information and records for the U.S. Court of Appeals for the Federal Circuit. Cases filed on or after March 1, 2012, are available through PACER or at public terminals in the Clerk's Office. The court provides a...

---

## US Cyber Command

**Repository:** [https://github.com/api-evangelist/us-cyber-command](https://github.com/api-evangelist/us-cyber-command)

US Cyber Command (USCYBERCOM) is a Unified Combatant Command of the United States Armed Forces responsible for directing, synchronizing, and coordinating cyberspace operations. It defends Department of Defense information networks and prepares to conduct full spectrum military cyberspace operations to ensure freedom of action in cyberspace and deny the same to adversaries. USCYBERCOM's Cyber National Mission Force (CNMF) publicly shares unclassified malware samples attributed to state-sponsored threat actors via VirusTotal, contributing to the global cybersecurity community's threat intelligence capabilities. USCYBERCOM also collaborates with CISA, NSA, and allied nations on joint cybersecurity advisories and threat disclosures.

**APIs and surfaces:**

- [CNMF Malware Sharing via VirusTotal](https://www.virustotal.com/gui/user/CYBERCOM_Malware_Alert/comments) — The U.S. Cyber Command Cyber National Mission Force (CNMF) shares unclassified malware samples on VirusTotal via the CYBERCOM_Malware_Alert account. This public threat intelligence sharing program posts malware sample...
- [USCYBERCOM News and Advisories](https://www.cybercom.mil/Media/News/) — Public news releases, advisories, and operational announcements from U.S. Cyber Command. Includes joint cybersecurity advisories, malware disclosure announcements, defensive cyber operations public statements, and the...

---

## US Department of Commerce

**Repository:** [https://github.com/api-evangelist/us-department-of-commerce](https://github.com/api-evangelist/us-department-of-commerce)

The US Department of Commerce is responsible for promoting economic growth and job creation in the United States. It oversees various programs and initiatives aimed at supporting businesses, industries, and communities across the country. The department works to ensure fair trade practices, protect intellectual property, and promote innovation and entrepreneurship. It also collects and analyzes economic data to inform policy decisions and help businesses make informed decisions. The Commerce Department houses bureaus including the Census Bureau, Bureau of Economic Analysis, International Trade Administration, NOAA, and NIST, each offering public APIs for their respective data domains.

**APIs and surfaces:**

- [Commerce.gov API](https://www.commerce.gov/data-and-reports/developer-resources/commercegov-api) — The Commerce.gov API provides programmatic access to news and blog content published on the Commerce.gov D8 website. Version 2.0 supports news, blogs, and image endpoints with response fields preserved for backward co...
- [US Census Bureau Data API](https://www.census.gov/data/developers/data-sets.html) — The Census Bureau's Data API provides access to a broad range of demographic, economic, and geographic datasets including the American Community Survey, Decennial Census, Economic Census, and specialized surveys cover...
- [Bureau of Economic Analysis API](https://apps.bea.gov/API/signup/) — The Bureau of Economic Analysis API provides access to national, regional, and international economic data including GDP, personal income, corporate profits, international trade and investment, and industry accounts.
- [International Trade Administration Trade Data API](https://developer.trade.gov/) — The International Trade Administration Data Services Platform provides authoritative information on U.S. exporting and international trade, aggregating data from multiple federal agencies including the State Departmen...
- [NOAA Climate and Weather API](https://www.ncdc.noaa.gov/cdo-web/webservices/v2) — The NOAA Climate Data Online Web Services API provides access to climate data including temperature, precipitation, wind, and weather observations from NOAA's National Centers for Environmental Information. Data cover...
- [NIST Data Discovery API](https://data.nist.gov/pdr/lps/) — The National Institute of Standards and Technology provides a Data Discovery API giving access to NIST's public data collections and research datasets covering materials science, chemistry, physics, engineering, and m...
- [Commerce Data Hub Open Data Portal API](https://data.commerce.gov/open-data-portal-odp-api-version-23) — The Commerce Data Hub Open Data Portal API (version 2.3) provides REST access to the Department of Commerce's open data catalog with rich search capabilities for discovering and accessing Commerce datasets. An API key...

---

## US Department of Defense

**Repository:** [https://github.com/api-evangelist/us-department-of-defense](https://github.com/api-evangelist/us-department-of-defense)

The US Department of Defense is responsible for providing the military forces needed to deter war and protect the security of the United States. This includes overseeing the Army, Navy, Marine Corps, and Air Force, as well as coordinating with other defense agencies and organizations. The Department of Defense also plays a critical role in developing military strategies, acquiring and maintaining weapons and equipment, and ensuring the readiness and effectiveness of the armed forces. The DoD's data strategy initiatives have led to the publication of multiple public APIs including the USACE Corps Water Management System API, Lock Performance Monitoring System, and the DoD open data portal.

**APIs and surfaces:**

- [USACE Corps Water Management System Data API](https://cwms-data.usace.army.mil/cwms-data/) — The USACE Corps Water Management System Data API (CDA) is a REST service providing programmatic access to USACE water management data including time series measurements, monitoring locations, rating curves, reservoir...
- [USACE Lock Performance Monitoring System API](https://corpslocks.usace.army.mil/lpwb/f) — The USACE Lock Performance Monitoring System (LPMS) API provides data on inland waterway lock operations across the US Army Corps of Engineers lock system. Endpoints return XML data for lock queue reports (past 24 hou...
- [DoD Data Portal](https://data.defense.gov/Featured-API/) — The Department of Defense Data Portal features APIs enabling access to DoD open data across military branches, agencies, and programs. The portal surfaces selected APIs from the DoD's data strategy initiative to make...
- [DoD Open Data Platform](https://www.data.mil/) — The Department of Defense Open Data Platform (data.mil) provides access to unclassified DoD datasets and data services supporting defense research, policy analysis, and public accountability.

---

## US House of Representatives

**Repository:** [https://github.com/api-evangelist/us-house-of-representatives](https://github.com/api-evangelist/us-house-of-representatives)

The United States House of Representatives is one of the two chambers of the United States Congress, with the other being the Senate. Its main function is to pass federal legislation, which must then be approved by the Senate before it can become law. The House also has the power to impeach government officials, including the President, and to initiate revenue-related bills. Congressional data is made available through the Congress.gov API, a REST API maintained by the Library of Congress that provides access to bills, members, committees, amendments, nominations, and treaties.

**APIs and surfaces:**

- [Congress.gov API](https://www.loc.gov/apis/additional-apis/congress-dot-gov-api/) — The Congress.gov API (v3) provides programmatic access to congressional data maintained by the Library of Congress. It offers machine-readable data covering bills, amendments, congressional records, committees, member...
- [ProPublica Congress API](https://projects.propublica.org/api-docs/congress-api/) — ProPublica's Congress API provides access to detailed congressional data including member profiles, voting records, bill sponsorship, and committee activity. This third-party API aggregates and enriches congressional...

---

## US Patent and Trademark Office

**Repository:** [https://github.com/api-evangelist/us-patent-and-trademark-office](https://github.com/api-evangelist/us-patent-and-trademark-office)

The US Patent and Trademark Office (USPTO) is responsible for granting patents and registering trademarks to protect intellectual property in the United States. The USPTO examines patent applications to determine if an invention is new, non-obvious, and useful, and grants patents to those that meet the criteria. They also register trademarks, which are words, phrases, symbols, or designs that distinguish goods or services of one entity from another. The USPTO Open Data Portal provides free programmatic access to patent applications, PTAB trial proceedings, petition decisions, trademark status, and bulk datasets.

**APIs and surfaces:**

- [USPTO Open Data Portal API](https://data.uspto.gov/apis/getting-started) — The USPTO Open Data Portal (ODP) API allows public users to discover, search, and extract USPTO patent, trademark, PTAB trial, petition decision, and bulk dataset information at no cost. Requires an ODP API key passed...
- [USPTO Trademark Status and Document Retrieval API](https://developer.uspto.gov/api-catalog/tsdr-data-api) — The Trademark Status and Document Retrieval (TSDR) REST API provides programmatic access to trademark case status, documents, case images, and related metadata. Requires an API key for bulk data downloads.

---

## US Senate

**Repository:** [https://github.com/api-evangelist/us-senate](https://github.com/api-evangelist/us-senate)

The United States Senate is one of the two chambers of Congress, responsible for representing the interests of the individual states and ensuring that federal legislation is passed in a fair and representative manner. The Senate plays a crucial role in the legislative process, with its members debating and voting on bills and resolutions that affect the country as a whole. The Senate also administers the Lobbying Disclosure Act (LDA) reporting system, which requires lobbyists and lobbying firms to register and report their activities, clients, and campaign contributions for public transparency.

**APIs and surfaces:**

- [Senate Lobbying Disclosure Act (LDA) API](https://lda.senate.gov/api/) — The Senate Lobbying Disclosure Act (LDA) REST API provides public access to lobbying disclosure filings, registrations, quarterly activity reports (LD-2), and semi-annual contribution reports (LD-203) submitted under...

---

## USDA Agricultural Research Service (ARS)

**Repository:** [https://github.com/api-evangelist/usda-agricultural-research-service-ars-](https://github.com/api-evangelist/usda-agricultural-research-service-ars-)

The USDA Agricultural Research Service (ARS) is the principal in-house research agency of the US Department of Agriculture. ARS conducts research to develop and implement solutions to agricultural problems that affect Americans every day. Research areas include crop protection, animal health, food safety, natural resource management, sustainable agriculture, and nutrition. ARS provides public data access through FoodData Central (nutrition data) and the Ag Data Commons (agricultural research datasets repository with CKAN/DKAN API).

**APIs and surfaces:**

- [USDA FoodData Central API](https://fdc.nal.usda.gov/api-guide/) — The USDA FoodData Central (FDC) API provides access to an integrated data system containing extended nutritional and food component data for thousands of foods. Data types include Foundation Foods, SR Legacy, Survey F...
- [USDA Ag Data Commons CKAN API](https://agdatacommons.nal.usda.gov) — The USDA Ag Data Commons is a DKAN/CKAN-based open data repository for USDA agricultural research datasets. The API provides metadata search and retrieval for datasets from ARS national programs including genomics, cr...

---

## Closing notes

That's **211 agencies** and **439 discrete APIs, feeds, and referenced systems** catalogued in machine-readable form. The structure is consistent across every repository: an `apis.yml` index at the root, a controlled `vocabulary/`, JSON-LD context aligning terms to schema.org, capability and rule files, and — where the agency actually publishes a documented contract — an `openapi/` folder with specs you can feed straight into Postman, Bruno, Stoplight, or your own tooling.

A few things worth flagging before you start clicking through. First, the federal API landscape is uneven. Some agencies (NASA, NOAA, the Census Bureau, the Federal Reserve, data.gov participants on the open-data side) have first-class developer programs with keys, rate limits, and documentation. Many others publish data through web pages, RSS, PDF schedules, or bulk file drops with no formal API contract — those are still indexed here because they're how integrators actually consume the data, but I don't fabricate OpenAPI for surfaces that don't have a real one. Second, government-internal systems (ConsularLookout/CLASS at State, eCASE, CBP's TECS, and similar) are referenced for completeness; they aren't accessible to the public and the entries say so. Third, this is a living catalog: agencies reorganize, portals get sunset, and new programs ship all the time. The repositories are where I push updates, so if you want the current state, pull from GitHub rather than this post.

If you're integrating against any of these surfaces, the apis.yml file is the place to start — it gives you the canonical name, the human-facing URL, the documentation pointer, and any properties (RSS feeds, status pages, bulk downloads) the agency exposes. From there, the OpenAPI specs (where they exist) drop straight into your client of choice. If you spot something missing or stale, open an issue on the relevant repo. The whole point of doing this in the open is so the catalog gets corrected by the people who actually use it.
