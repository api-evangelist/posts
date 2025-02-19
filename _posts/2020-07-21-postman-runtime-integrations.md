---
published: true
layout: post
title: Postman Runtime Integrations
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_runtime.jpeg
author:
  name: kinlane
tags:
  - Integrations
---
I am working my way through all of the partner work I have on my workbench, and there is no better way to work through it than to write it out as blog posts here on API Evangelist. [I just talked about how the easiest way to partner with Postman is by adding your collections to the API network](http://apievangelist.com/2020/07/21/the-quickest-way-to-partner-with-postman-is-through-the-network/). This is no guarantee of partnership, because Postman doesn’t have a formal partner program yet, but it is a quick way to get on the Postman community radar, and if your API and collection is interesting enough, we are likely to want to showcase more in other storytelling. Adding your collection to the Postman network is self-service and easy to do, you don’t need to talk with Postman to do it, but there is also another way in which you can partner with Postman that is also self-service, and will also get our attention. You can bake collections into your platform, which we like to call “runtime integrations”, because API service providers are integrating the Postman runtime into their services, and adopting the Postman collection schema as a common way to define API requests and workflows on their platform.

An example of a Postman runtime integration can be found with API monitoring provider [APIMetrics](https://apimetrics.io/), [who allows their customers to import a Postman collection and fire up industrial grade API monitoring at scale](https://apimetrics.readme.io/docs/monitor-postman-collections). Postman does monitoring, but it makes sense to embrace other service providers who offer competing or more comprehensive services, and a Postman collection is the perfect unit of currency to define this relationship. APIMetrics benefits from the over 11 million users of Postman, and Postman benefits because our customers can scale the services they use with Postman, and with all of our partners. Beyond APIMetrics, here are a handful of other service providers who have baked the Postman collection into their platforms.

*   [**API Fortress**](https://apifortress.com/doc/importing-postman-collections/) (Testing / Monitoring)
*   [**Assertible**](https://assertible.com/blog/new-feature-import-and-automate-api-tests-from-postman-collections) (Testing)
*   [**AWS API Gateway**](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-export-api.html) (Deployment)
*   [Katalon](https://docs.katalon.com/katalon-studio/docs/import-postman.html) (Testing)
*   [**Loadium**](https://loadium.com/postman-to-jmeter-converter/) (Testing)
*   [**Qualys**](https://blog.qualys.com/news/2019/10/07/enhanced-api-scanning-with-postman-support-in-qualys-was) (Security)
*   [**QuickType**](https://blog.postman.com/turn-your-postman-collection-into-models-with-quicktype-io/) (Code)
*   [**SmartBear**](https://support.smartbear.com/readyapi/docs/integrations/postman.html) (Testing)
*   [**Testmace**](https://docs.testmace.com/other-features/import/postman) (Testing)
*   [**Tricentis**](https://www.tricentis.com/integrations/postman-testing/) (Testing)
*   [**VMWare**](https://docs.vmware.com/en/VMware-Workspace-ONE/services/Intelligence/GUID-8A79C3A5-6061-47D3-BE85-4AD4593872EB.html) (Integrations)

Most of these services are competitors of Postman. They are primarily baking the Postman collection into their platforms to benefit from the ubiquitous nature of Postman collections across the enterprise. We see this as an opportunity to grow the reach of the Postman platform, and it just strengthens the value of Postman collections as a currency of the API economy. It benefits Postman customers to have Postman collection work in other services that they use, and with each platform our runtime operates in, our overall engine grows more powerful.

If you use Postman collections, or any of the other open source components that Postman provides, I’d love to learn more about how you are using it. I spend a lot of time looking through the thousands of API providers who use collections, but finding API service providers who use Postman collections can be more difficult to discovery. I know there are more of these runtime integration out there, I just need to find them. I am looking to stimulate more runtime integrations across the lifecycle. This list is a little API testing heavy, and I’m looking to identify, showcase, and help evolve a robust set of runtime integration partners who service every stop along a modern API lifecycle.