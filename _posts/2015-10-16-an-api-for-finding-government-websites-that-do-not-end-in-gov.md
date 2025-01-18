---
layout: post
title: An API For Finding Government Websites That Do Not End In .gov
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/digital-gov-logo.jpg
author:
  name: kinlane
tags:
  - Web
  - Government
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/digital-gov-logo.jpg)](https://www.usa.gov/developer)

I have used the [Federal Agency Directory API](https://github.com/usagov/Federal-Agency-Directory-API-Documentation) for quite some time to lookup federal government agencies. [USA.gov has some highly valuable, and simple APIs](https://www.usa.gov/developer) including the [Social Media Registry API](https://github.com/usagov/Social-Media-Registry-API-Documentation), which I find extremely useful. They recently added a new one for [searching government websites that do not end in .gov](http://search.digitalgov.gov/developer/govt-urls.html).

The Non-.gov URLs APIs allows you to search for all websites that end in .com, .org, .edu, or other top-level domains, including:

*   Federal, state, local, [tribal](https://www.usa.gov/tribes), commonwealth, and territorial government agency websites
*   [Federal reserve banks and branches](http://www.federalreserve.gov/otherfrb.htm)
*   [Federal home loan banks](http://www.fhlbanks.com/)
*   Libraries, archives, and museums, including [Presidential libraries](http://www.archives.gov/presidential-libraries/)
*   Department of Defense websites for [recruiting](http://www.defense.gov/Sites/DOD-Websites?category=Recruiting) and [service academies](http://www.defense.gov/Sites/DOD-Websites?category=Academy)
*   [Travel and tourism](https://www.usa.gov/recreation-and-travel) websites for states and U.S. territories
*   [State lotteries](https://www.usa.gov/state-lotteries)
*   [Cooperative extensions](http://nifa.usda.gov/partners-and-extension-map)
*   [Combined federal campaigns](http://www.opm.gov/combined-federal-campaign/find-local-campaigns/locator/)
*   [Government sponsored enterprises](https://www.fas.org/sgp/crs/misc/RS21663.pdf) (such as Fannie Mae) \[PDF\]
*   Federal and state retirement systems
*   Task forces (such as the Preventative Services Task Force) and commissions (such as the 9/11 Commission)
*   A few select, non government organizations (such as the Red Cross) and public-private partnerships

I find the APIs coming out of USA.gov to be excellent examples of what ALL government agencies should be doing. The APIs don't have to be complicated, just provide simple read, and sometimes write access to valuable government data that should be public.

I am going to prioritize the creation of an API definition for USA.gov, and wrap their APIs in an [APIs.json file](http://apisjson.org), and add to my [federal API stack](http://federal-government.apievangelist.com/stack.html). The more of these APIs I have at my disposal, the more efficient I am at when it comes to opening up government data, and making existing API resources available across my research.