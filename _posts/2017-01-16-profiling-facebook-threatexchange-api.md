---
layout: post
title: Profiling Facebook ThreatExchange API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_01_15_at_6.40.58_pm.png
atomdate: 2017-01-16T20:00:00.000Z
tags:
  - Facebook
  - Profiling
---
I'm spending some cycles on discovering what "[cybersecurity](http://cybersecurity.apievangelist.com)" or "[security](http://security.apievangelist.com/)" API solutions are out there, but specifically looking at threat information related to operating on the web. First up on the list is F[acebook's ThreatExchange API](https://developers.facebook.com/docs/threat-exchange/v2.8), and I wanted to go through and break down what they offer via their API as I work to define an [OpenAPI Spec](http://openapis.org), and their overall API operations as I populate an [APIs.json](http://apisjson.org) file.This process helps me better understand what Facebook is offering in this area, as well as producing a machine readable definition that I can use across the rest of my research. 

So, what is Facebook ThreatExchange?

_Learn about threats. Share threat information back. Everyone becomes more secure. Most threat intelligence solutions suffer because the data is too hard to standardize and verify. Facebook created the ThreatExchange platform so that participating organizations can share threat data using a convenient, structured, and easy-to-use API that provides privacy controls to enable sharing with only desired groups._

*    
    *   _**Scale your intelligence -** Threats like malware and phishing will often attack many targets. Safeguard yourself using shared intelligence from other_ participants_._
    *   _**A better way to share -** Utilize a structured platform to send and receive information about threats._
    *   _**Join ThreatExchange -** Learn about threats. Share threat information back. Everybody becomes more secure. \*in beta_

I'm wanting to understand Facebook's motivations behind doing the ThreatExchange API, and better understand the technical, business, and political aspects of providing a platform like this. When profiling a platform I always start with the endpoints, as I feel like they give the most honest accounting of what is going on.

*   **[/malware\_analyses](https://developers.facebook.com/docs/threat-exchange/reference/apis/malware-analyses)** \- Search for malware samples by hash and other metadata.
*   **[/malware\_families](https://developers.facebook.com/docs/threat-exchange/reference/apis/malware-families)** - Search for malware families by name and other metadata.
*   **[/threat\_descriptors](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-descriptors)** \- Enables searching for indicators of compromise descriptors.
*   **[/threat\_indicators](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-indicators) -** Enables searching for indicators of compromise.
*   **[/threat\_tags](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-tags) -** Enables searching for threat tags.
*   **[/threat\_exchange\_members](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-exchange-members) -** Returns a list of current members of the ThreatExchange.

Next, I look at the underlying data and object model, and since Facebook uses their Graph model for their ThreatConnect API, it is pretty easy to pick up and get running with things--here are the graph objects used as part of the ThreatExchange:

*   **[Malware](https://developers.facebook.com/docs/threat-exchange/reference/apis/malware)** \- A sample of the malware.
*   **[MalwareFamily](https://developers.facebook.com/docs/threat-exchange/reference/apis/malware-family)** - A group, cluster or similar type grouping of [Malware](https://developers.facebook.com/docs/threat-exchange/reference/apis/malware).
*   **[ThreatDescriptor](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-descriptor)** \- The subjective context provided by a [ThreatExchangeMember](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-exchange-member) for a [ThreatIndicator](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-indicator)
*   **[ThreatExchangeMember](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-exchange-member)** \- A participant within ThreatExchange.
*   **[ThreatIndicator](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-indicator)** \- An indicator of compromise.
*   **[ThreatTags](https://developers.facebook.com/docs/threat-exchange/reference/apis/threattags) -** A label to group threat objects together.

Facebook also allows for "types" to be applied across the ThreatConnect objects, adding additional dimensions to the objects available via the API:

*   **[AttackType](https://developers.facebook.com/docs/threat-exchange/reference/apis/attack-type) -** The kind of attack a [ThreatIndicator](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-indicator) object was associated with.
*   **[IndicatorType](https://developers.facebook.com/docs/threat-exchange/reference/apis/indicator-type)** - The kind of indicator being described by a [ThreatIndicator](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-indicator) object.
*   **[MalwareAnalysisType](https://developers.facebook.com/docs/threat-exchange/reference/apis/malware-analysis-type)** - A description of the type of malware, see [MalwareAnalysisType](https://developers.facebook.com/docs/threat-exchange/reference/apis/malware-analysis-type).
*   **[MalwareFamilyType](https://developers.facebook.com/docs/threat-exchange/reference/apis/malware-family-type)** - A description of the type of logic or automation used to create a [MalwareFamily](https://developers.facebook.com/docs/threat-exchange/reference/apis/malware-family) object.
*   **[PrecisionType](https://developers.facebook.com/docs/threat-exchange/reference/apis/precision-type)** - Defines how accurately the threat intelligence detects its intended target, victim or actor.
*   **[PrivacyType](https://developers.facebook.com/docs/threat-exchange/reference/apis/privacy-type)** - Defines who can access the threat intelligence.
*   **[ReviewStatusType](https://developers.facebook.com/docs/threat-exchange/reference/apis/review-status-type)** - >A description of how the threat intelligence was vetted.
*   **[SeverityType](https://developers.facebook.com/docs/threat-exchange/reference/apis/severity-type)** - A description of the dangerousness of the threat associated with a [ThreatIndicator](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-indicator) object. The order of the values below is ordered from least severe to most severe.
*   **[SignatureType](https://developers.facebook.com/docs/threat-exchange/reference/apis/signature-type)** - The kind or format of signature described by a [ThreatIndicator](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-indicator) object with [ThreatType](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-type) of `SIGNATURE.`
*   **[ShareLevelType](https://developers.facebook.com/docs/threat-exchange/reference/apis/share-level-type)** (aka Traffic Light Protocol or TLP) - A designation of how any object in ThreatExchange may be re-shared both within and outside of ThreatExchange, based on the [US-CERT's Traffic Light Protocol](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.us-cert.gov%2Ftlp%2F&h=wAQFD5gM2&s=1).
*   **[StatusType](https://developers.facebook.com/docs/threat-exchange/reference/apis/status-type)** - A description of the maliciousness of any object within ThreatExchange.
*   **[ThreatType](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-type)** - The kind of threat a [ThreatIndicator](https://developers.facebook.com/docs/threat-exchange/reference/apis/threat-indicator) object is expressing.

I was pleased to see webhook infrastructure available, making things a two-way street, and a little more responsive and real-time. I would also consider a streaming technology at this layer eventually, making it easier to manage at scale.

*   **[Webhooks](https://developers.facebook.com/docs/threat-exchange/webhooks)**  - ThreatExchange Webhooks allow you to receive information in real-time for MalwareAnalyses, ThreatDescriptors, and MalwareFamilies.

It was also good to see privacy considerations right out of the box. If you are going to get other companies to participate at this level and share real-world threat information, there have to be granular controls to help mediate the politics of all of this. The Facebook approach also doesn't just deal with identity, groups, and access, it also dictates the sharing of information--I am guessing a logging layer at this level will be needed in the future, with an API for it as well, to enable 3rd party auditing.

*   **[Privacy Controls](https://developers.facebook.com/docs/threat-exchange/reference/privacy)** \- All submissions to the ThreatExchange API allow for limiting the visibility of any Malware and ThreatDescriptor objects. Currently, ThreatExchange supports three levels of visibility: allow all members; allow a ThreatPrivacyGroup;  and allow a whitelist of specific members. The desired privacy setting on an object is specified by the values at the time of a create or edit submission to the API. Privacy settings can also be changed retroactively for data you've already submitted.
*   **[Reshare](https://developers.facebook.com/docs/threat-exchange/reference/resharing)** - All submissions to the ThreatExchange API allow for defining how the data can be re-shared by its recipients. The level of re-sharing is applied via the share\_level attribute.

This is where this API becomes an exchange. With the required privacy and sharing controls in place, the submitting of new data, connecting the dots between data, and evolving the history of everything in real time can occur, allowing trusted 3rd parties to not just access data, but confidently share it with the ThreatExchange.

*   **[Submitting New Data](https://developers.facebook.com/docs/threat-exchange/reference/submitting/v2.8)** - You may submit data to the graph via an HTTP POST request the following URL: _https://graph.facebook.com/v2.8/threat\_descriptors_
*   **[Submitting Connections](https://developers.facebook.com/docs/threat-exchange/reference/submitting-connections)** - ThreatExchange supports creating connections (aka edges) between ThreatIndicator objects to express relationships. Examples of when this can be useful are for describing URL re-direct chains or domain to IP address relationships.
*   **[Editing Existing Data](https://developers.facebook.com/docs/threat-exchange/reference/editing)** - The ThreatExchange API allows for editing existing ThreatIndicator objects. As with all Facebook Graph APIs, editing is performed via an HTTP POST request to the object's unique ID URL.
*   **[Deleting Data](https://developers.facebook.com/docs/threat-exchange/reference/deleting)** - ThreatExchange currently supports true deletes only for connections between ThreatIndicator objects to express relationships. Examples of when this can be useful are for describing URL re-direct chains or domain to IP address relationships.

After that, there are some more support level elements present. I track on these elements as part of my indexing with an APIs.json, so that anyone can easily find the code, examples, and other supporting resources without clicking around, and digging through the documentation.

*   **[Reference Code on GitHub](https://github.com/facebook/ThreatExchange/)**
*   **[Examples](https://developers.facebook.com/docs/threat-exchange/examples/v2.8)**
[**ThreatExchange FAQ**](https://developers.facebook.com/docs/threat-exchange/FAQ)*   **[Webinar](https://developers.facebook.com/docs/threat-exchange/webinar)**
*   **[Changelog](https://developers.facebook.com/docs/threat-exchange/reference/changelog/v2.8)**

There are more general elements of the Facebook Developer community present as well, but this provides a nice roundup of all the elements that make up the Facebook ThreatExchange API, providing one possible blueprint for how we share threat information associated with operating any platform on the web. I'm going to be looking at other solutions in this same space, but I wanted to profile Facebook's effort in this area first, as they probably have the most insight and investment in this area. 

**What Are Facebook's Motives With ThreatExchange?**  
One thing I want to learn more about is why Facebook would want to do the ThreatExchange. I'm sure they truly want to share the wealth of data they have on threats they have there, but I'm sure they equally want incentivize other tech giants to share their data as well, sweetening the entire pot. I would add that they might also be doing this to alleviate any future regulatory pressures that may unfold around cybersecurity legislation. All we can do is monitor what is going on and see how much Facebook, and others invest into ThreatExcahgne before we will know the full extent of the motivations behind the platform.

**A Possible Blueprint For Wider Threat Exchange Model**   
This post is part of my research into [security](http://apievangelist.com) and [cybersecurity](http://cybersecurity.apievangelist.com). As with the other areas of my research I am looking for the common building blocks of how APIs are being used to understand, map out, defend, and share threat information. I'm happy to see Facebook being proactive in this area, but this feels like it needs to become an open standard and wider blueprint that can be operated by an independent party, with trusted arrangements from each provider regarding what is being submitted and shared--for it to work properly. I have a lot more research to conduct before I make this determination, but it is where I'm headed with my thinking in this area. 

**Researcher and Journalist Access To Data On Exchange**  
I applied for access to the Facebook ThreatExchange API, but I'm unsure if I will be given access, being that I am just a blogger. This opens up a wider question, though, regarding opening up this valuable information to researchers, journalists, and 3rd party auditors. [I talked about the need for API access tiers and potentially service level agreements for research and journalists](http://apievangelist.com/2017/01/09/service-level-agreements-for-researchers-who-depend-on-apis/) previously, and threat information is definitely an area we need to deeply consider who has access to this important data, in a similar way. We need to be ensuring the privacy of companies, organizations, institutions, and government agencies are protected, but we also need to allow for a wider understanding of this problem to be established, with more eyes on the data.

**Further Assessment of APIs and Threat Information Solutions**  
I am just getting going with this research, and it will take some time for me to paint a complete picture of the landscape when it comes to online threat data, and how APIs are being used. I'll publish each profile as I complete them, and eventually, I'd like to have a common definition of all the API paths, and underlying schema being employed as part of the leading threat data sharing platforms. If we are going to scale the effort to address this growing problem, we are going to need a wealth of APIs in operation, and ensure they are all speaking a common dialect. I need to develop a better understanding of the politics around the operation of a threat data API, but I'm guessing it is something we don't want in the hands of any single, leading tech provider.