---
layout: post
title: Taking Another Look At The Department Of Labor API Efforts
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/developer_dol_gov__united_states_department_of_labor_developer_portal.png
atomdate: 2016-09-27T00:00:00.000Z
tags:
  - Labor
---
Someone asked me about the current state of the [Department of Labors (DOL) API efforts the other day](http://developer.dol.gov/), and since I hadn't actually taken a look in a few months I wanted to spend some time in there seeing what they have going on. There is no better way to get a feel for what a government agency is up to than going through their API efforts--the DOL is pretty ahead of the game in this area.

The vibe when you land on [developer.dol.gov](http://developer.dol.gov) (which is a great subdomain) is nice. It is clean and has all the links that I am looking for, providing access to their APIs, as well as supporting code, while allowing you to ask questions and report bugs.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/developer_dol_gov__united_states_department_of_labor_developer_portal.png)

One thing I think is interesting in their approach is that they efficiently [use Github in support of their code](http://developer.dol.gov/sdk/), apply [Stack Exchange in support of asking questions](https://opendata.stackexchange.com/questions/ask?tags=labor), and [employ Github issues for reporting bugs](https://github.com/USDepartmentofLabor/Developer/issues/new). I understand that government agencies do not always have the resources necessary to support their API efforts, so this approach seems sensible to me when providing the minimum viable support for an API.

The Department of Labor provides a number of APIs which provide access to some key economic data, broken down into four separate categories

*   **Health & Safety** 
    *   **[Injuries And Illness](http://developer.dol.gov/health-and-safety/injuries-and-illness)** - Rate and number of work-related injuries, illnesses, and fatal injuries.
    *   **[Gulf Oil Spill](http://developer.dol.gov/health-and-safety/gulf-oil-spill)** - Sample results for chemicals, noise, and heat stress index measurements from monitoring workers engaged in the oil spill cleanup in the Gulf of Mexico for exposure to hazardous chemicals and conditions.
    *   **[DOL OSHA Compliance](http://developer.dol.gov/health-and-safety/osha-compliance)** - Fatalities and catastrophes resulting in the hospitalization of three or more workers.
    *   **[MSHA Employment Production](http://developer.dol.gov/health-and-safety/msha-employment-production)** - Annual summation of employee hours and coal production reported by mine operators.
    *   [Mine **Violation**](http://developer.dol.gov/health-and-safety/mine-violation) - Violations issued from 1/1/1978 to 1/1/2000 as a result of MSHA inspections.
    *   **[Fatal Occupational Injuries](http://developer.dol.gov/health-and-safety/fatal-occupational-injuries)** - Nonfatal and fatal data for the nation and for States from the most current Survey of Occupational Injuries and Illnesses and the Census of Fatal Occupational Injuries programs.
    *   **[DOL OSHA Enforcement](http://developer.dol.gov/health-and-safety/dol-osha-enforcement)** - Inspection case detail for approximately 90,000 OSHA inspections conducted annually.
    *   **[Auto Workers](http://developer.dol.gov/health-and-safety/auto-workers)** - Auto companies which are closed or repurposed in the last couple of decades.
    *   **[Safety and Health](http://developer.dol.gov/health-and-safety/safety-and-health)** - Safety and health in the workplace.
    *   **[Full Mine Information Mines](http://developer.dol.gov/health-and-safety/full-mine-info-mines)** - All Coal and Metal/Non-Metal mines under MSHA's jurisdiction since 1/1/1970.
    *   **[Basic Mine Information](http://developer.dol.gov/health-and-safety/basic-mine-info)** - Basic information on all Coal and Metal/Non-Metal mines under MSHA's jurisdiction since 1/1/1970.
    *   **[Mine Accident Injuries](http://developer.dol.gov/health-and-safety/mine-accident-injuries)** - Information on all accidents, injuries, and illnesses reported by mine operators and contractors beginning with 1983.
    *   **[OSHA Compliance](http://developer.dol.gov/health-and-safety/dol-osha-compliance)** - Inspection case detail for approximately 100,000 OSHA inspections conducted annually.
    *   **[Mine Inspections](http://developer.dol.gov/health-and-safety/mine-inspections)** - Mine inspection conducted by MSHA dating back to 1/1/1978.
*   **Keeping What You Earn  
      
    **
    *   **[Wage and Hour Publications System](http://developer.dol.gov/keeping-what-you-earn/wage-and-hour-publications-system)** - Information regarding all of the publicly available and currently active publications.
    *   **[WHD Compliance](http://developer.dol.gov/keeping-what-you-earn/whd-compliance)** - All concluded WHD compliance actions since FY 2008.
    *   **[Migrant and Seasonal Agricultural Protection Act (MSPA)](http://developer.dol.gov/keeping-what-you-earn/mspa)** - Migrant and Seasonal Agricultural Protection Act (MSPA) Registered Farm Labor Contractor Listing.
*   **Expanding Growth** Opportunities **& Learning**
    *   **[Public Workforce System](http://developer.dol.gov/expanding-growth/public-workforce-system)** - Dataset that can be used to answer questions about various public workforce system programs and how these programs fit in with the overall public workforce system and the economy.
    *   **[OUI Initial Claims](http://developer.dol.gov/expanding-growth/oui-inital-claims)** - OUI Initial claims dataset contains the non-seasonally and seasonally adjusted Unemployment Insurance Initial Claims time-series data at the National level.
    *   [IPIA](http://developer.dol.gov/expanding-growth/ipia) - Information on overpayments and improper unemployment insurance overpayments.
    *   **[Quarterly Census Employment and Wage (CEW)](http://developer.dol.gov/expanding-growth/bls-quarterly-census-employment-and-wage-cew)** - Quarterly Census of Employment and Wages (QCEW) program publishes a quarterly count of employment and wages reported by an employer - estimates of the number of people employed in certain occupations, and estimates of the wages paid in over 800 occupations.
    *   **[Occupational Employment Statistics Survey (OES)](http://developer.dol.gov/expanding-growth/bls-occupational-employment-statistics-survey-oes)** - Produces employment and wage estimates for over 800 occupations.
    *   **[Current Population Survey (CPS)](http://developer.dol.gov/expanding-growth/bls-current-population-survey-cps)** - The Monthly survey of households conducted by the Bureau of Census for the Bureau of Labor Statistics.
    *   **[Current Employment Statistics (CES)](http://developer.dol.gov/expanding-growth/bls-current-employment-statistics-ces)** - Surveys about 141,000 businesses and government agencies, representing approximately 486,000 individual worksites, in order to provide detailed industry data on employment, hours, and earnings of workers on nonfarm payrolls.
    *   **[Consumer Price Indexes (CPI)](http://developer.dol.gov/expanding-growth/bls-consumer-price-indexes-cpi)** - Monthly data on changes in the prices paid by urban consumers for a representative basket of goods and services.
    *   **[2010 Workforce Investment Act](http://developer.dol.gov/expanding-growth/2010-workforce-investment-act)** - Administrative data from 12 states, covering approximately 160,000 WIA participants and nearly 3 million comparison group members.
    *   **[2010 Occupational Employment Statistics](http://developer.dol.gov/expanding-growth/2010-occupational-employment-statistics)** - Semi-annual mail survey designed to produce estimates of employment and wages for specific occupations.
    *   **[BLS Numbers](http://developer.dol.gov/expanding-growth/bls-numbers)** - Historic data (last 10 years) for the most common economic indicators.
*   **Other Datasets  
      
    **
    *   **[Sweat & Toil](http://developer.dol.gov/others/sweat-and-toil)** - Information on child labor and forced labor worldwide from ILAB’s three flagship reports.
    *   **[VETS100](http://developer.dol.gov/others/vets100)** - Required veteran employment data by federal contractors/subcontractors.
    *   **[API Metrics (per key)](http://developer.dol.gov/others/api-metrics-per-key)** - DOL API Metric queries.
    *   **[Summer Jobs Service Beta](http://developer.dol.gov/others/summer-jobs-service-beta)** - New search tool designed to help connect job seekers with employers.
    *   **[Research And Evaluation Inventory](http://developer.dol.gov/others/research-and-evaluation-inventory)** - All completed and planned research and evaluation projects that have or will be conducted by DOL in the upcoming calendar year.
    *   **[Geography](http://developer.dol.gov/others/geography)** - List of States, Counties, Cities and, Congressional Districts.
    *   **[Form](http://developer.dol.gov/others/form)** - The most frequently requested Department of Labor forms.
    *   **[Frequently Asked Questions (FAQ)](http://developer.dol.gov/others/faq)** - Answer the questions on various labor topics and sub-topics.
    *   **[API Metadata](http://developer.dol.gov/others/api-metadata)** - List of available datasets that the Department of Labor supplies as a service.
    *   **[Agency](http://developer.dol.gov/others/agency)** - List of DOL agencies and the links to its websites.

There is a wealth of valuable economic data available in there. I am not a fan of their API design patterns, I get the same feeling [like I did from Environment Protection Agency](http://apievangelist.com/2015/07/25/taking-a-look-at-whats-next-for-the-environmental-protection-agency-epa-envirofacts-data-service-api/)\--that the information is accessible (yay), but it isn't all the intuitive when it comes to finding everything that is in there. They provide you with an [API sampler](https://devtools.dol.gov/APISampler/Home/Index1), that lets you play with the APIs using a form, but I'd prefer some more investment in the overall design to simplify and make intuitive on the first click.

While I feel a lot more could be invested in API design to make DOL's data more accessible, they are way ahead of other agencies like the VA, so I'll take what I can get. They are also using actively Github, which I think is super promising. The quick look has provided me with a fresh mental image of what the DOL is up to with their APIs, and provided the seeds for a couple other stories--so it was a success. One project I'd like to also play with if I have the time is to see if I can [auto generate an OpenAPI Spec from the DOL metadata API](http://developer.dol.gov/others/api-metadata), and help autogenerate some docs that could help shed light on the wealth of data available within the federal government API.