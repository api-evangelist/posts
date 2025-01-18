---
layout: post
title: >-
  11 More Federal Departments and Agencies Have Published Their API Digital
  Strategies
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/US_white_house_logo.png
author:
  name: kinlane
tags:
  - Agencies
  - Digital
  - Strategies
---
I’ve been running a monitoring script every night, so that I could tell when any of the federal department and agency have launched their digital strategy pages, per [Barack Obamas Presidential directive that every Federal Government agency should have an API](http://apievangelist.com/2012/06/01/barak-obama-directs-all-federal-agencies-to-have-an-api/ "Barack Obamas Presidential directive that every Federal Government agency should have an API"), and the White House CIO's strategy, entitled "[Digital Government: Building a 21st Century Platform to Better Serve the American People](http://www.whitehouse.gov/sites/default/files/omb/egov/digital-government/digital-government-strategy.pdf)"

I noticed that many of the departments and agencies aren’t properly using HTTP response codes, and when I pulled pages, I often get 302 redirects to 404 pages, so I tended to treat 301, 302, 500 as 404’s. Today, I noticed that some of them actually were redirecting to their digital strategies, published at alternate locations, other than directed by the White House strategy, which was \[domain\]/digitalstrategy.

Recognizing this I put in some logic to handle redirects and check if it was a valid strategy page, and after re-running the script I found 11 more digital strategies published, bringing the total to 14 to date:

 

**Executive Departments or Agencies**

**Digital Strategy**

[![](http://kinlane-productions2.s3.amazonaws.com/digital-strategy/logos/usda.png)](http://www.usda.gov/)

[Department of Agriculture (USDA)](http://www.usda.gov/)

[![](http://kinlane-productions2.s3.amazonaws.com/icon-set/green-check-150.jpg)](/federal_government_digital_strategy.php?a=usda&TB_iframe=true&height=500&width=700)

[![](http://kinlane-productions2.s3.amazonaws.com/digital-strategy/logos/commerce.png)](http://www.commerce.gov/)

[Department of Commerce](http://www.commerce.gov/)

[![](http://kinlane-productions2.s3.amazonaws.com/icon-set/green-check-150.jpg)](/federal_government_digital_strategy.php?a=commerce&TB_iframe=true&height=500&width=700)

[![](http://kinlane-productions2.s3.amazonaws.com/digital-strategy/logos/defense.png)](http://www.defense.gov/)

[Department of Defense (DOD)](http://www.defense.gov/)

[![](http://kinlane-productions2.s3.amazonaws.com/icon-set/green-check-150.jpg)](/federal_government_digital_strategy.php?a=defense&TB_iframe=true&height=500&width=700)

[![](http://kinlane-productions2.s3.amazonaws.com/digital-strategy/logos/ed.png)](http://www.ed.gov/)

[Department of Education (ED)](http://www.ed.gov/)

[![](http://kinlane-productions2.s3.amazonaws.com/icon-set/green-check-150.jpg)](/federal_government_digital_strategy.php?a=ed&TB_iframe=true&height=500&width=700)

[![](http://kinlane-productions2.s3.amazonaws.com/digital-strategy/logos/justice.png)](http://www.justice.gov/)

[Department of Justice (DOJ)](http://www.justice.gov/)

[![](http://kinlane-productions2.s3.amazonaws.com/icon-set/green-check-150.jpg)](/federal_government_digital_strategy.php?a=justice&TB_iframe=true&height=500&width=700)

[![](http://kinlane-productions2.s3.amazonaws.com/digital-strategy/logos/labor.png)](http://www.labor.gov/)

[Department of Labor (DOL)](http://www.labor.gov/)

[![](http://kinlane-productions2.s3.amazonaws.com/icon-set/green-check-150.jpg)](/federal_government_digital_strategy.php?a=labor&TB_iframe=true&height=500&width=700)

[![](http://kinlane-productions2.s3.amazonaws.com/digital-strategy/logos/dot.png)](http://www.dot.gov/)

[Department of Transportation (DOT)](http://www.dot.gov/)

[![](http://kinlane-productions2.s3.amazonaws.com/icon-set/green-check-150.jpg)](/federal_government_digital_strategy.php?a=dot&TB_iframe=true&height=500&width=700)

[![](http://kinlane-productions2.s3.amazonaws.com/digital-strategy/logos/epa.png)](http://www.epa.gov/)

[Environmental Protection Agency (EPA)](http://www.epa.gov/)

[![](http://kinlane-productions2.s3.amazonaws.com/icon-set/green-check-150.jpg)](/federal_government_digital_strategy.php?a=epa&TB_iframe=true&height=500&width=700)

[![](http://kinlane-productions2.s3.amazonaws.com/digital-strategy/logos/ferc.png)](http://www.ferc.gov/)

[Federal Energy Regulatory Commission (FERC)](http://www.ferc.gov/)

[![](http://kinlane-productions2.s3.amazonaws.com/icon-set/green-check-150.jpg)](/federal_government_digital_strategy.php?a=ferc&TB_iframe=true&height=500&width=700)

[![](http://kinlane-productions2.s3.amazonaws.com/digital-strategy/logos/gsa.png)](http://www.gsa.gov/)

[General Services Administration (GSA)](http://www.gsa.gov/)

[![](http://kinlane-productions2.s3.amazonaws.com/icon-set/green-check-150.jpg)](/federal_government_digital_strategy.php?a=gsa&TB_iframe=true&height=500&width=700)

[![](http://kinlane-productions2.s3.amazonaws.com/digital-strategy/logos/nsf.png)](http://www.nsf.gov/)

[National Science Foundation (NSF)](http://www.nsf.gov/)

[![](http://kinlane-productions2.s3.amazonaws.com/icon-set/green-check-150.jpg)](/federal_government_digital_strategy.php?a=nsf&TB_iframe=true&height=500&width=700)

[![](http://kinlane-productions2.s3.amazonaws.com/digital-strategy/logos/nrc.png)](http://www.nrc.gov/)

[Nuclear Regulatory Commission (NRC)](http://www.nrc.gov/)

[![](http://kinlane-productions2.s3.amazonaws.com/icon-set/green-check-150.jpg)](/federal_government_digital_strategy.php?a=nrc&TB_iframe=true&height=500&width=700)

[![](http://kinlane-productions2.s3.amazonaws.com/digital-strategy/logos/ssa.png)](http://www.ssa.gov/)

[Social Security Administration (SSA)](http://www.ssa.gov/)

[![](http://kinlane-productions2.s3.amazonaws.com/icon-set/green-check-150.jpg)](/federal_government_digital_strategy.php?a=ssa&TB_iframe=true&height=500&width=700)

[![](http://kinlane-productions2.s3.amazonaws.com/digital-strategy/logos/usaid.png)](http://www.usaid.gov/)

[United States Agency for International Development (USAID)](http://www.usaid.gov/)

[![](http://kinlane-productions2.s3.amazonaws.com/icon-set/green-check-150.jpg)](/federal_government_digital_strategy.php?a=usaid&TB_iframe=true&height=500&width=700)

With 246 federal departments and agencies, we have a long way to go, but I’m optimistic that we’ll see enough publish their strategies, identify enough high value data-sets to deploy as APIs, so that the developer community can get to work building some important web and mobile apps or data visualizations.

Once the other departments and agencies see what is possible, hopefully we can get more of them on board, creating somewhat of a domino effect for API deployment, getting us closer to a reality where machine readable data is as common as the PDF in Washington DC.