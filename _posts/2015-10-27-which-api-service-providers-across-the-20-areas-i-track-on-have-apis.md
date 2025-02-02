---
layout: post
title: Which API Service Providers Across The 20 Areas I Track On Have APIs?
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Providers
  - Service Providers
  - APIs
---
[As I go through each of the 20 core areas of the API sector that I am keeping an eye on](http://apievangelist.com/), in preparation for [my keynotes at @DefragCon and @APIStrat](http://apievangelist.com/2015/10/23/i-am-pumped-for-two-upcoming-keynotes-at-defragcon-and-apistrat-in-november/), I'm taking a fresh look at which of them have APIs. When you think about it, if a company is selling a product or service to API providers, encouraging an API focus--they should probably have APIs. :-)

As I was updating some of the news, companies, and reviewing the common building blocks I have aggregated across the 20 areas of research, I just poked my head around to see if I could find an API for each service provider. There are many things that look like a language specific API, but I am looking for a clear developer / API area, with a coherent web API available, as we'd expect from API providers in 2015.

After spending a couple hours looking through my core research, I found the following service providers, in the follow areas, actually had web APIs available:

*   **Definitions**
    *   [APIMATIC](http://docs.apimatic.apiary.io/#reference/api-description-validation)
    *   [API Transformer](https://apitransformer.com/)
*   **Deployment**
    *   [Amazon API Gateway](http://docs.aws.amazon.com/apigateway/api-reference/)
    *   [Orchestrate.io](https://orchestrate.io/docs/apiref)
    *   [Tyk](https://tyk.io/advanced-api-v0-9/api-definitions/)
    *   [Kong](https://getkong.org/docs/0.5.x/admin-api/)
    *   [Microsoft Azure](https://msdn.microsoft.com/en-us/library/azure/dn776326.aspx)
*   **Containers**
    *   [Docker](https://docs.docker.com/reference/api/docker_remote_api/)
    *   [Kubernetes](http://kubernetes.io/v1.0/api-ref.html)
*   **Scraping**
    *   [Kimono](https://www.kimonolabs.com/apidocs)
    *   [AlchemyAPI](http://www.alchemyapi.com/api)
    *   [ParseHub](https://www.parsehub.com/docs/ref/api/v2/)
*   **DNS**
    *   [CloudFlare](https://www.cloudflare.com/docs/client-api.html)
    *   [Akamai](https://developer.akamai.com/api)
    *   [AWS Route 53](http://docs.aws.amazon.com/Route53/latest/APIReference/Welcome.html)
    *   [ARIN](https://www.arin.net/resources/restful-interfaces.html)
    *   [DNS Made Easy](http://www.dnsmadeeasy.com/integration/restapi/)
    *   [DNS Simple](https://developer.dnsimple.com/)
    *   [StatDNS](http://www.statdns.com/api/)
*   **Management**
    *   [3Scale](https://support.3scale.net/reference/active-docs)
    *   [Apigee](http://apigee.com/docs/management/apis)
    *   [Tyk](https://tyk.io/advanced-api-v0-9/api-definitions/)
    *   [API Umbrella](http://apiumbrella.io/docs/admin-api/)
    *   [Github](https://developer.github.com/v3/repos/pages/ \(portal\))
    *   [Gluu](http://www.gluu.org/docs/reference/api/)
    *   [Microsoft Azure](https://msdn.microsoft.com/en-us/library/azure/dn776326.aspx)
    *   [Kong](https://getkong.org/docs/0.5.x/admin-api/)

*   **SDK**
    *   [APIMATIC](http://docs.apimatic.apiary.io/#reference/code-generation)
*   **Monitoring**
    
    *   [Runscope](https://www.runscope.com/docs/api)
    *   [API Science](https://www.apiscience.com/docs/api)
    
    *   [Tyk](https://tyk.io/advanced-api-v0-9/api-definitions/)
    
    *   [API Metrics](http://apimetrics.io/reporting-apis/)
    *   [Pingdom](https://www.pingdom.com/resources/api)
    *   [Status Page](http://doers.statuspage.io/)
*   **Testing**
    
    *   [Runscope](https://www.runscope.com/docs/api)
    
    *   [LoadImpact](http://developers.loadimpact.com/api/)
    *   [Loader.io](http://docs.loader.io/api/intro.html)
*   **Discovery**
    *   [Google API Discovery Service](https://developers.google.com/discovery/v1/reference/index)
    *   [APIs.io](http://apis.io/apiDoc)
    *   [ProgrammableWeb](http://www.programmableweb.com/api/programmableweb)
*   **IDE**
    *   [Codenvy](http://docs.codenvy.com/api/)

This was my first pass through all of my core research looking for APIs, so I am sure I missed some--let me know which ones I missed. My design, hypermedia, performance, monetization, evangelism, embeddable, client, SDK, visualization, and virtualization didn't have any clear leaders who had easy to find APIs. I will update as I find them--which smells like an opportunity to me.

Eventually I'd like to see some common definitions to be established across all these areas of the API space, but as you can see, like the rest of the API space, there is a lot of work to be done. Now that I have a list of API service providers who have APIs, I can start crafting, and aggregating API definitions for all the APIs. Once i've done this I can start looking for the overlap across them, and see if I can highlight the common patterns, and establish some bridges for the differences between them.

Every potential stage of the API life-cycle will have to be automated in the future, and ironically APIs will be how we do that.