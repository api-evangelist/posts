---
layout: post
title: Evolving How We Approach The API Lifecycle With APIMatic
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/apimatic/apimatic-logo.png
author:
  name: kinlane
tags:
  - Lifecycle
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/apimatic/apimatic-logo.png)](https://apimatic.io)

I’ve expanded my monitoring on the world of APIs, from just API management, which I’ve been doing for four years, into tracking on APIs across multiple buckets I'm calling [design](http://design.apievangelist.com "API Design"), [deployment](http://deployment.apievangelist.com "API deployment"), [management](http://management.apievangelist.com "API Management"), [monetization](http://monetization.apievangelist.com "API monetization"), [evangelism](http://evangelism.apievangelist.com "API Evangelism"), [discovery](http://discovery.apievangelist.com "API discovery"), [integration](http://integration.apievangelist.com "API integration"), [aggregation](http://aggregation.apievangelist.com "API aggregation"), [reciprocity](http://reciprocity.apievangelist.com "reciprocity"), and [real-time](http://realtime.apievangelist.com "API real time"). I am always working to understand who the key players are across the API space, but also make sure they are categorized into one, or many of these expanding buckets--helping me quantify things.

It is always very interesting to see how an API service provider fits into more than one of these buckets, as well as when new players emerge to cater to just one of these buckets, like Apiary did with API design. Playing on this theme, I was introduced to new a new API service provider, called [APIMatic](https://apimatic.io) the other day, who on the surface seems to cater to API providers with the automatic generation of SDKs, but really is a cross-over into API design, discovery, and integration, bringing a new perspective to the table.

**Generating SDKs Is The Carrot**  
As soon as you land on the APIMatic home page, they state very clearly what they do "Automatic SDK Generation for APIs”. You can search common APIs that are available in the APIMatic API marketplace, import your own API definition, or build one using their web-based user interface—which pretty squarely makes APIMatic for API consumers, providing clear API integration benefits, but via the generation of SDKs.

**GUI Tool For API Design**  
The third option for generating an SDK from an API, is using the APIMatic web-based user interface, which allows you to build a definition of your API, using a web interface—no coding necessary. You can create a new definition, manage its settings, define endpoints, and the underlying data model. When ready, you can generate your SDK, which is rendered, I’m guessing using the default APIMatic format, and then also allows you to generate mock APIs, and sandbox environments--pretty squarely in the world of API design for me.

**Provides API Discovery**  
Then the first option for generating an SDK is from a marketplace of existing APIs, allowing developers to generate SDKs for the most common APIs they depend on. From an API provider standpoint, this is a huge incentive for generating machine readable API definitions like Swagger, and register with marketplaces like APIMatic. I’d say APIMatic starts with a very Mashape style API marketplace for discovery, but then quickly focuses heavily on quality SDKS, and API integration as the end deliverable.

**Supporting API Integration**  
Since APIMatic generates the code that sits between your app and the API resources it depends on, it has a unique lens for looking into how your applications are using APIs. This provides an alternative approach to the proxies and tooling I'm seeing emerge to monitor, track, test, and report on API integration. I’m not sure of the pros and cons to this type of API integration, but think APIMatic vision is worth taking a closer look at.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/apimatic/apimatic-search-import-specify.png)](https://apimatic.io)

**Mobile Focused Software Development Kits (SDK)**  
APIMatic focuses on delivering mobile SDKs, for iOS, Android, Windows, and Java platforms. When I talked to the founders, they said they would eventually provide more web focused SDKs, but mobile is obviously a major driver of API consumption, and was the low hanging fruit.

**Centered Around Machine Readable API Definitions**  
Everything about APIMatic is centered around API definitions. When you select to import an API, you are given the option to import APIMatic, WADL, Swagger, IODocs, GoogleREST, and MashapeJSON. Each of the APIs available in marketplace have a machine readable definition, as well as the web-based form builder generating a machine readable API definition as well. These definitions are then used to generate SDKs, mock interfaces, and full circle back to listing you in the APIMatic marketplace for discovery—if you wish to make your API public.

**Quality Software Development Kits (SDK)**  
Another aspect I find interesting about APIMatic, is that they focus on not just generating code stubs, they focus on high quality SDKs. Which in an era where you here a lot of rhetoric around SDKs being poorly written, out of date, hard to maintain, and unecessary--this gives APIMatic a potentially important differentiator if they do it right. APIMatic takes pride in their code being well written, looking nice, and following good conventions--something that could go a long ways in benefiting both API providers, and consumers.

Seeing new breeds of API service providers continue to emerge, with even new perspectives on how the API lifecycle operates, makes me happy, and with everything centered around machine readable, common API definitions, I'm even more pleased. This is in sync with what I’m seeing come out of the API design, deployment, management, and integration providers I've been tracking on—that API definitions are increasingly driving all stops along the API lifecycle subway.

I will play with APIMatic some more. To be honest, I was approaching this from an API providers perspective when I jumped on the Google Hangout with them, and was pleasantly surprised when I saw that they crossed over into API design, integration, discovery, as well as management. Now that I have a good idea of what they offer, I will revisit what the benefits to API providers could be. At the very least, it is another carrot for API providers to be sure and generate machine readable definitions for their APIs—without it your APIs won’t be found, or be able to be imported, and drive the next generation of API tooling like APIMatic.

APIMatic is looking to meet API providers, and get your API listed, so if you reach out, make sure and let them know I sent you. If you [use this link](https://apimatic.io/Account/Register?Reference=C402F205-7E97-40EF-9894-BF1AFDBA9055), and sign up, you will automatically be let into the beta users group--APIMatic is currently “invite only”.

Oh, I also had a good conversation with them about the possibilities around integration of APIMatic with [API Commons](http://bit.ly/1e27KIc), and distributed API search engines like [APIs.io](http://bit.ly/1mtaqmK), using [APIs.json](http://bit.ly/1ij6TTP)—so more to come. Much more!