---
published: true
layout: post
title: Profiling Adobe APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/adob_io_home_page_1.png
author:
  name: kinlane
tags:
  - Adobe
  - Profiles
  - Discovery
---
As I was [profiling APIs on my list of APIs](https://github.com/api-evangelist/index) I found myself profiling Adobe. I am moving through the list of companies alphabetically, so you can see how far along I am. Anyways, like any other large company I need to make a decision about how I am going to manage the profiling of different API products and lines of business. Companies like Amazon, Google, Azure, and Adobe have large numbers of APIs and I always know I will need to have some sort of plan for documenting everything that is going on. With Adobe, I am going to track everything in [a single GitHub repository](https://github.com/api-evangelist/adobe), but will be working to create separate API definitions (OpenAPI and Postman collections) for each of the individual APIs being offered.

To provide some context, it helps to understand why I profile APIs in the first place. As the API Evangelist I review public API operations studying how API providers are doing what they do. I then aggregate the "building blocks" of their public operations into a master set of reserarch that I use to drive my storytelling and API strategy workshops. So, with the Adobe APIs I'm not looking to review their API operations as much as I am looking to understand how they operate, and develop an understanding of how far along they are in their enterprise API journey. As with any profiling of a company, I begin by Googling their name pus API, but then dive as deep as I can into the details of what I find with each click.

When you Google Adobe APIs you get this main landing page with the tagline, “_APIs and SDKs for all Adobe products – create mobile, web and desktop apps”_. You can tell Adobe is working hard to bring together their APIs under one big tent, with the following main areas to support developers:

*   **[Landing Page](https://www.adobe.io/apis.html)** \- Adobe API landing page.
*   **[Authentication](https://www.adobe.io/authentication.html)** - Overview of authentication.
*   **[Open Source](https://www.adobe.io/open.html) -** An open source page.
*   **[Blog](https://medium.com/adobetech)** - Their tech blog for their APIs.
*   **[GitHub](https://github.com/adobe)** - A dedicated GitHub account.
*   **[Twitter](https://twitter.com/adobedevs)** - A dedicated Twitter account.
*   **[YouTube](https://www.youtube.com/channel/UCDtYqOjS9Eq9gacLcbMwhhQ)** - A dedicated YouTube account.
*   **[Support](https://www.adobe.io/support)** - The support for API developers.
*   **[Release Notes](https://www.adobe.io/releasenotes.html)** \- Release notes for APIs.
*   **[Privacy Policy](https://www.adobe.com/privacy.html)** \- The privacy policy.
*   **[Terms of Use](https://www.adobe.com/legal/terms.html) -** The terms of use.
*   **[Cookies](https://www.adobe.com/privacy/cookies.html)** - The cookies policy.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/adob_io_home_page_2.png)

These building blocks provides the basis for their API operations, providing a single landing page for brining everything together, and help folks find what they are looking for when it comes to APIs for all of the Adobe products. When listing out their products Adobe breaks them into three distinct categories:

*   **Creative Cloud**
*   **Document Cloud**
*   **Experience Cloud**
*   **Adobe Experience Platform**

I worked my way through each of the Adobe products, there is a mix of available resources for each of their lines of business, but I am purely looking specific HTP API signals that I can profile and add to my index of APIs. While looking through each of these area I’m looking for the elements that help me quantify the value being offered by each of the Adobe APIs. While looking through the Adobe I/O program I can ame across 15 APIs, that had enough meat on the bones for me to profile and add to my index.

Adobe Launch 
