---
layout: post
title: >-
  Taking A Fresh Look At What Open Source API Management Architecture Is
  Available
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-open.png
author:
  name: kinlane
tags:
  - Management
  - Open Source
  - API Management
  - Open
  - ai
---
I’ve been a [outspoken advocate for more open source API management tooling](http://apievangelist.com/2012/06/11/where-is-the-open-source-api-platform/), for some time now. I'm sensitive to the fact that startups have to make money in the API space, but in my opinion a certain layer of the API space needs to remain open and interoperable for this all to work, and I feel that open source tools are an important variable in this equation. When I last checked into what was available in the space, there really wasn't much, so in 2014 I figured I'd take another look.

Originally there is just one player on the space who was completely open source, and that is WSO2:

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/wso2-logo-white-800X360.jpg)](http://wso2.com/)

API management is just one tool in the massive open source catalog that WSO2 brings to the table. The company provides a number of open source tools including identity & authentication, ESB, data and [API management solutions](http://wso2.com/).

WSO2 is the shining open source example in the space currently, and [I was very happy to see them emerge on the landscape](http://www.liljeholmensstadshotell.se/). I feel WSO2 plays a strong role in the API space, but their approach to open source is the enterprise version, where the open gets rid of software licensing cost (yay), but is targeted specifically at an enterprise audience. I’m not the enterprise, so to compliment what they bring to the table, I’m also looking for a different version of “community”, and eager to see smaller players step up as well.

After WSO2 I got a taste of open source from Alcatel Lucent, with their release of API Grove, which was a whole other definition of open source:

[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/alcatel-lucent/apigrove/apigrove-logo.png)](http://apigrove.net/)

[API Grove](http://apigrove.net/) was open sourced late in 2012 by Alcatel Lucent, holding some promise that another strong enterprise open source player would step up, but within months it would be clear that it was not a live open source offering, but Alcatel abandoning their API program, and publishing as open source to get the press release.

I’d call API Grove, enterprise fire sale open source, and while the code is out there (I think), there is nobody home, not an enterprise, or other community to be seen. This type of open source releases just make me sad.

After WSO2 and API Grove, the only other player that saw emerg on the scene was ApiAxle:

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/api-axle-logo-3.png)](http://apiaxle.com/)

[ApiAxle is an proxy](http://apiaxle.com/) that sits on your network, in front of API(s)and and provides common API management features like rate limiting, authentication and caching. ApiAxle was recently purchase by application platform infrastructure provider Exicon.

ApiAxle has been on my list for a couple years now, and was recently purchased by [Exicon](http://www.exiconglobal.com/). The site is pretty good looking, but I can't tell if there is any activity in the community recently. The blog is silent, but the site was updated a few days ago, and the Github repo for the project was last updated July 31st—it can be hard to tell sometimes, just how active an open source project is.

Beyond ApiAxle, there are two API management pioneers who been hard at work releasing open source tooling:

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/3scale-logo.jpg)](http://www.3scale.net/api-management/api-proxy-for-api-traffic-management-by-3scale/)

3Scale is one of the original API infrastructure providers, and has developed an [open source API proxy using the NGINX Web Server](http://www.3scale.net/api-management/api-proxy-for-api-traffic-management-by-3scale/), designed to work independently, but also be able to take advantage of freemium 3Scale API analytics, billing, etc.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/apigee-logo.gif)](https://github.com/apigee-127/volos)

Like 3Scale, Apigee is one of the original API infrastructure provider, and has been working on [Volos an open source Node.js solution for developing and deploying production-level APIs](https://github.com/apigee-127/volos), providing common features such as oAuth 2.0, caching, and quota management into APIs.

It can be hard to envision exactly how open source fits into 3Scale or Apigee’s business model, but as the core features of API management become more commoditized, I can't help but think that open source tooling will increasingly be a reality on the front-line for these API infrastructure providers.

After these projects from leading API management providers, I hadn't see any other open source API management tooling until I started to look closer at APIs in the public sector:

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/serviceproviders/socrata_logo.jpg)](http://www.socrata.com/products/open-data-portal/)

[Socrata](http://www.socrata.com/) has been providing API and open data management tools to government of all shapes and sizes for some time now, and along the way is open sourcing many of its tools including an [open source developer portal](http://www.socrata.com/products/open-data-portal/) that anyone can use to management their API.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/api-umbrella-logo.png)](http://nrel.github.io/api-umbrella/)

[API Umbrella](http://nrel.github.io/api-umbrella/) was born out of the National Renewable Energy Laboratory (NREL) to manage their own APIs, but then has evolved to be used by other agences, as well as being adopted by central data.gov efforts within the federal government. API Umbrella is a proxy that sits in front of your APIs. It can seamlessly add common functionality like api keys, rate limiting, and analytics to any API.

I think what is happening in the public sector API space, reflects what the private sector is needing as well, in regards to open, interoperability, and the room to play, experiment and figure things out before you have to start putting to much cash on the line. I just think the government is in more of a position to mandate this, where in the public sector freemium solutions from 3Scale have been a buffer for this demand, but as the space expands I think open source tooling will begin to evolve to provide further relief valves.

In doing this research, what has really caught my attention, is the number of new players that are picking up momentum in 2014:

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/repose-logo.png)](http://openrepose.org/)

[Repose is an open-source platform](http://openrepose.org/) that you can use to build stacks of reusable software components. These components can be leveraged by service developers to perform common API processing tasks. Repose can be used inside a service to perform API operations. It can also run on one or more separate servers as a proxy to one or more services. 

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/tyk-dark.png)](http://tyk.io/)

[Tyk is an open source, lightweight, fast and scalable API gateway](http://tyk.io/). Set rate limiting, request throttling, and auto-renewing request quotas to manage how your users access your API. Tyk supports access tokens, HMAC request signing, basic authentication and OAuth 2.0 to integrate old and new services easily.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/gluu-logo.png)](http://www.gluu.org/)

[Gluu provides open source authentication and API access management stack](http://www.gluu.org/), called the Gluu Server, helps companies secure Web and mobile applications. The Gluu Server leverages standards such as OAuth2, OpenID Connect, UMA, SAML 2.0, and SCIM to enable federated single sign-on (SSO) and trust elevation.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/strongloop-logo.png)](http://strongloop.com/node-js/loopback/)

[Loopback is an open source API framework](http://strongloop.com/node-js/loopback/) powered by Node for quickly creating APIs. Node is good for getting projects done quickly, leveraging the broad knowledge of JavaScript, and to scale to the concurrency that is well suited for web APIs.

Overall I think these new players reflect the maturation of the space, but beyond that I'm not sure what it means for the API world, it will take some time for me to work through what features are being offered, and what business models exist around these open tools. In my experience, the motivations behind open source mean everything, and the relationship a open source project has to their parent company can make or break the momentum any open source project will possess--setting the tone for any community, enteprise or otherwise.

Eventually I'll bring together the open source tools I've found in the API management layer, with the open source design tooling I'm seeing from Apiary and Swagger, and other [API design providers](http://design.apievangelist.com/companies.html), as well as the wealth of tooling I'm seeing for [API integration](http://integration.apievangelist.com)—still playing catch up on the roundup here. When I squint my eyes, and think about the space, I can't help but feel that we are getting closer to my earlier vision of open source in the API space, but we still have a lot of work to do.

What else am I msising from the pool of open source API management tooling? I depend on my audience letting me know what they are using.

_P.S. I know I'm going to get an email from Mulesoft on the piece, I’m sure you guys fit in here somewhere, but honestly I spent about 2 hours looking through your stuff, and I can’t figure out just exactly what version of open source you guys are. I understand the [Mule ESB is open source](http://www.mulesoft.org/), which isn't squarely in my API management category, and after that I really can't tell with the other open tooling you guys have—feel free to post a blog post response, helping me, and the community understand better._

**Disclosure:** _3Scale and WSO2 are both API Evangelist partners._