---
layout: post
title: Remembering Why This Whole API Thing Is Working - APIDays Berlin
image: >-
  https://s3.amazonaws.com/kinlane-productions2/kin-lane/kin-lane-api-days-berlin-respect-privacy.jpg
author:
  name: kinlane
tags: []
---
_This is my speaker notes from my talk this week at [APIDays Global in Berlin](http://berlin.apidays.io/). You can find [my slide deck in my talks repository on Github](https://www.flickr.com/photos/kinlane/sets/72157644603774353/), and find more [photos from the event on Flickr](https://www.flickr.com/photos/kinlane/sets/72157644603774353/)._

We live in a very exciting time, one where the resources we need to build meaningful websites and applications, that have the opportunity to impact how we do business, and potentially make change in how the world around us, is rapidly expanding. Once upon a time, many of these digital resources took millions of dollars of investment to deliver, if they were available at all. Now, with the introduction of web APIs, many valuable resources are available in a self-service, pay as you go manner, allowing anyone to integrate these valuable resources their own business or personal worlds.

### History of APIs

Over the last 14 years of the Internet, companies have been using a new approach to APIs, built on the same technology that drives the web—HTTP. Web APIs are not a new, proprietary way of building applications on the Internet, but a way of delivering the vital resources web and mobile applications need, side by side with the same websites that humans consume—except APIs are raw data, minus the visuals that a human would require, enabling developers to deliver exactly the experience that end users will need.

**Delivering On Original Visions of Digital Commerce**  
This low cost approach to deliver resources on the web has been pioneered by tech giants like SalesForce in delivering the next generation of customer relationship management, and sales in the clouds. We’ve also seen web APIs transform world of ecommerce from tech giants like Amazon, and shift auctions online from eBay. The payments needed to transact in this new world of commerce also emerged via APIs from Paypal, and a newer generation of payment API providers like Stripe.

**A Social Web**  
The distributed effect of web APIs allowed for the evolution of a new type of online interaction, dubbed “social”. Early innovators applied web APIs to digital media such as photos from Flickr, and then quickly was applied to the sharing of Internet links or bookmarks by Delicious. Once these pioneers paved the way, a next generation of social platforms were born with the emergence of Twitter and Facebook. All of these social platforms employed web APIs as the driver for all social interactions via the web, that contributed to their growth and user adoption.

**Migrating Compute Into The Cloud**  
After their success with commerce APIs, Amazon internalize the deployment of APIs in a way that gave birth to how we deploy and scale compute and storage, forever changing how develop applications with the introduction of Amazon Web Services. Amazon started with a dead simple storage API called Amazon S3, then shortly after rolled out the ability to deploy server instances in the cloud via web APIs with Amazon EC2—providing two of the essential building blocks for building apps online.

**Geo-locating In A Digital World**  
As we were getting our bearings in this new digital world we created for ourselves, the search pioneer Google began innovating in the world of online mapping. Shortly after noticing that users were hacking and extending the JavaScript driven Google Maps, they began designing a web API that would meet the needs of the web and the soon to emerge world of mobile apps—giving everyone the first in a long line of essential API driven Geo resources we would need to make the web mobile.

**Messaging For The Cloud**  
As the web began its collision with the emerging world of mobile devices, a new breed of API driven messaging resources emerged, first around SMS and voice from Twilio, then evolving standard messaging formats like email, from SendGrid. However it doesn’t stop with just extending existing messaging standards via APIs, companies like Context.io are completely redefining how we approach traditional email messaging with their API driven messaging solutions.

### What Makes Web APIs So Appealing?

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-shipping-containers.png)

The wealth of individual resources has made the world of APIs very appealing to developers, but this approach to deploying very modular, web-based resources was also proven valuable to companies when exposing their own resources, for internal development, extending access to partners, and in some cases making available to the general public and open developers.

**Granular Resources**  
With web APIs you are taking the minimum viable portion of a resource and making available over the Internet. A contact, an image, or any other piece of data, content or programmatic resource, and make it securely accessible on the Internet. This modular, granular approach to defining and providing access to resources allows for the remix, and reuse of resources in a very efficient way across all possible systems, web or mobile applications, and increasingly any Internet connected object.

**Distributed Resources**  
Since web APIs are built using HTTP, the underlying infrastructure of the Internet, they are distributed in nature, and globally scalable—just like the web. This approach to delivering APIs allow for resources to be accessed internally by systems and applications, across the globe by external groups and partners--any potential consumer with Internet access. Defining digital assets as APIs allow for distributed access, by existing consumers, while ensuring they are immediately available to any future need that may arise.

**Agility and Nimbleness**  
With digital assets defined in such a granular, distributed manner, a new agility begins to emerge. Companies who once took months or years to expose data and content sources, and securely provide access, can now open up access potentially in real-time to company and organization wide resources. APIs are all about access and re-use, allowing companies to save time and money when integrating existing assets into web and mobile apps at speeds they never could imagine before.

**Research, Development, And Innovation**  
With valuable assets securely available on the Internet, all resources are available for research and development, allowing for new types of innovation to occur. APIs are external by nature, establishing an R&D lab of sorts, for companies to experiment with new types of product and services, in an environment that encourages outside participation, establishing a rich environment for new ideas to flourish.

### What Have We Learned?

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-question-mark.png)

Challenging the top down planning approaches of earlier API movements like SOA, web APIs have produced some valuable lessons in deploying application infrastructure that focuses on simplicity, rapid iterations, and bottom-up, grassroots evolution of how a service oriented architecture is designed, deployed, managed and evolved. Studying the approaches from API pioneers, as well as the current waves of public API deployments provide numerous lessons that other companies, organizations, and government agencies can learn from. Let’s walk through some of the biggest lessons from the world of APIs.

**Technology of APIs**  
Over the last 14 years suite of technological approaches to designing, deploying and operating APIs have won out, not just through standards, but through organic experimentation, proven through success. Modern web APIs start with pragmatic REST, which uses HTTP and follows Roy Fielding's recommendations for making the web not just consumable, but also programmable. To support API interaction, a new data exchange format has emerged—JSON is the lightweight, preferred data interaction format for API consumers. Finally, to secure APIs, a standard called oAuth has emerged handling not just the identity of application users, but handles the authorization and access of underling resources available via an API.

**Business of APIs**  
The success of web APIs is only partially a technical thing, a large part of web APIs success is driven from their business approaches. We’ve learned that simple, clean and centralized consumer portals, with complete documentation, and supporting code are essential to on-boarding, and helping consumer achieve a successful integration. API providers have also established sophisticated communication strategies for their API operations including blogs, active Twitter and other social media accounts, and community forums within their ecosystem and outside them on existing developer communities like Stack Overflow. All of these supporting business elements help ensure the technical operations of an API are known and supported, providing what is needed for consumers to be successful.

**Politics of APIs**  
APIs are not inherently good, bad or neutral when it comes to company operations, partnerships and public access. There are several aspects of the political side of APIs that ensure consumer success, starting but not limited to sensible, flexible terms of service that protect a company's assets, but also allow developers to innovate. API providers throttle access to valuable resources by establishing rate limits, multiple pricing levels, and access tiers for API consumers, allowing for the generation of revenue, but in a way that encourages healthy consumption by integrated applications. The security and reliability of an API also plays a significant role in an APIs overall image, on-boarding process, and access to a platforms API resources. All of these elements provide the political grease that makes API integrations flow, with [many different knobs and levers that can be pulled, loosened, or tightened for the delivering optimal results](http://apievangelist.com/2014/04/10/the-levers-dials-and-switches-for-your-participation-in-the-api-economy/).

**API Design**  
In the last couple years, leading API practitioners have demonstrated that API design is more art than science. Good API design isn't always about just getting busy coding, and are using mock API interfaces that introduced collaboration between API providers, key stakeholders and ultimately the consumer—leading to better, more consumable interfaces without the overhead of iterating within a production environment. In the last year, this has grown to the point where new tools and languages have emerged, which employs markdown based formats that have the potential make the API design process friendlier to non-developer. The evolution of API design is making API design something that potentially anyone can do, which brings the process closer to the problem owners who are looking for solutions to their everyday problems.

**API Management**  
In the web API world, management of API operations is not about governance, but about making assets more accessible, in safe and secure ways, that do protect a providers interests, but also allow for establishment of API operations that encourage integration and innovation. With modern API management tools and approaches, the process of management is more about understanding, than it is about control. API management becomes about having your finger on the pulse of consumers, understanding how they are using resources, enabling providers to identify new trends, features and enforce healthy usage of API resources—protecting everyone involved from API owners to developers, and the end-users who will be using the resulting websites and applications.

**Importance of Evangelism**  
Every one of the successful API programs today, deploy some sort of outreach as part of their initiative, widely called developer advocacy or evangelism. This type of engagement with API consumers both offline and online is essential to building a strong base of integrations. If nobody knows about an API, and what is possible when you integrate with it, the chances that an API will get used are slim. It doesn't matter how technically sound an API implementation is, if nobody knows about it, it won’t get used.

**Sensible Business Models**  
APIs are allowing well established, and new business to evolve their existing business models, while also allowing them to establish entirely new ways of conducting business. External API ecosystems that flourish into R&D labs, allow for potentially safe environment for incubating new business models, increasing the ways that businesses can generate revenue in 2014.

### What Are APIs Delivering?

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-deliver.png)

APIs open up multiple channels for distribution of resources, which is the primary reason for their increased usage. Many start-ups tout an API-first development strategy, where they focus first on developing a stack of API resources before they consider developing any web or mobile application. APIs can be platform agnostic, allowing for easily adding of new application channels, devices and other objectives without changing the API.

**Websites**  
Allowing for the development of distributed websites around centralized data and content was the first practical use of web APIs. The modular, and distributed nature allowed for easy syndication of content for providers, and a quick source of rich content for developers and site owners. Early pioneers like Amazon and eBay realized the power of developing armies of resellers for their products and auctions, that allowed anyone to build a website around their valuable resources.

**Mobile**  
With the introduction of iPhone from Apple, the true potential of distributed, modular API driven resources was realized. Developers were able to build apps that consumers wanted, and API driven utilities like Foursquare and Twilio provide the resources they needed, built on top of the recently realized cloud infrastructure, which was also API driven. APIs make resources accessible, but the mobile phone delivers these valuable resources right to where we need them—in our hands.

**Tablet**  
Building on the success of using APIs to deliver mobile resources, Apple introduced us to the power of the tablet, with the introduction of the wildly successful iPad. Where earlier tablets had failed, the iPad did not—quite likely this was due to the fact that we didn't have the API driven resources necessary to satisfy customers, as well as the power of the cloud infrastructure to deliver the backend needed. APIs provided the rich content and data necessary to drive the next generation of touch and interactive apps that would emerge via the iPad and following Android and Windows tablets.

**Data Analysis & Visualization**  
With the wealth of data available via the thousands of emerging APIs, developers realized that the distributed nature of APIs allows for remote analysis of data, as well as the visualization of this information via dashboards and embeddable widgets, services and portable web applications. A new wave of “big data” solutions haleve emerged once a critical mass of APIs were achieved, providing a way of engaging with valuable resources beyond just web and mobile applications.

**Internet of Things**  
As the Internet matures, the desire to connect not just mobile phones, tablets, laptops and computers to the Internet increases, but it has also spread to every object in our everyday lives. The availability of APIs has fueled a new phenomenon call the Internet of Things, which is connecting objects like the thermostat in our homes, our automobiles, and entire cities to the Internet using APIs. APIs aren’t just for web and mobile anymore, the web API approach is being used to send and receive content from sensors, cameras, and anything you can imagine in the world around us to API backends, where data can be processed, stored and distributed anywhere online.

### Emerging Trends Enabled By APIs

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-trends.png)

As API usage expands rapidly into the Internet of Things, other practitioners are exploring new ways to put APIs to use in the the web and mobile applications they already use—approaches that will enhance the user experience, and increase the quality and reach of API driven resources.

**Aggregation**  
Innovative companies across business sectors ranging from cloud computing to advertising are aggregating APIs allowing for a new breed of APis that allow access to multiple platforms, and enhance or augment existing resources via these new interfaces. Some APIs only go so far when cleaning up data, or matching with other complimentary resources available in the API space—leaving a huge opportunity for innovation by start-ups, and pushing APIs to deliver even more value to API consumers and their application end-users.

**Interoperability & Reciprocity**  
With much of our personal and business lives moving into the clouds, an a new wave of companies have emerged that allow anyone, even non-developers to migrate content and data between online platforms using APIs. This new approach to system interoperability has evolved from early IT migration processes, providing not just interoperability but reciprocity between multiple platforms, while also empowering end-users to initiate migration between platforms that meet their goals.

**Real Time**  
APIs have helped developed a serious appetite amongst end-users for the delivery information as quickly as possible. Having data, content and other resources instantly in our hands via mobile devices, along with the introduction of new real-time technologies like Websockets and PubSubHubub, has made the web an increasingly real time, 24/7 available world. Either from real time APIs directly from providers, or the increasing number of real time frameworks, applications have become much easier to send and receive valuable API resources that occurs in real time or near real time—changing the pace of how we consume and produce information.

### Remembering Why It All Works

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-ying-yang.png)

With the increasing pace of technology and APIs, it can get easy to get caught up in the complexity of the web, and make similar mistakes to earlier API initiatives, forgetting exactly what made web APIs work in the first place. For web APIs to be sustainable there are a number core elements that API providers and consumers should keep in mind, to make sure all this success we are seeing doesn’t fade.

**Simplicity**  
The number one reason this whole world of web APIs has taken off is because of simplicity. In most cases web APIs do one thing, and they do it well. Using simple, intuitive URIs to interact with valuable resources. APIs should not be much harder than to load a web page, allowing anyone to be able to put APIs to use. Simplicity in design, deployment, management, monetization, and evangelism should be front and center for all API providers—without simplicity, web APIs will find themselves along the same path as its predecessor(s).

**Easy, Low Cost Access to Resources**  
Access to resources is what attracts developers to APIs. This new wave of web APIs is putting resources into the reach of developers that once were either impossible, or so costly that innovation would never occur within small businesses and start-ups. Reducing any barriers to entry for API consumers is the hallmark of a modern web API, and even if you require registering, and keys to access APIs, providers should make ease of access a top priority for all APIs.

**Working Together (Collaboration)**  
Simplicity, self-service and access to valuable resources beg for collaboration not just amongst developers, but also between the platform and developer ecosystems. API ecosystems open up new opportunities for collaboration, and have the potential to change culture within a company, allowing it to reach outside of the firewall and experience new ideas. As the number of APIs grow, the opportunities for collaboration between API providers increases as well, allowing for shared reach across multiple developer ecosystems, and the chance to attract developers who need multiple resources to achieve their goals.

**Permissive Terms of Service**  
An API terms of service guide all interactions consumers will have with exposed resources. The purpose of the TOS is not just protect a company's assets from misuse, is it meant to direct consumers in ways that stimulate integration and innovation, while also protecting the interests of end-users. API TOS need to be legalese enough to cover everyone’s ass, but also liberal enough to incentivize consumers to integrate with their own business operations.

**Transparency In Operations**  
APIs provide an extremely huge opportunity for innovation around company assets, but it requires a company to invest in being more transparent regarding how it does business. APIs by themselves do not equal transparency, they require a company to share insight into how it operates, and what it is planning as part of the road-map. APIs let sunlight to business operations in ways that can disinfect and change company culture, allowing in the oxygen needed for new ideas to flourish. Transparency is a requirement for any successful API initiative, it is up to you regarding just how much is just right.

**A Balanced 3 Legged Approach**  
Inherited from the 3 legs of oAuth, a balanced approach to API operations in a way that isn’t just centered around the providers objectives, but equally considers API consumers and end-users, is essential. While its easy to focus on the value delivered by API providers, or the innovation of developers, without educated, engaged and trusting end-users any platform will stumble. Compare the three legs of an API platform to a three legged stool, if one is missing or short, the stool will hold nothing and fall over when used.

### What We Need To Do

![](https://s3.amazonaws.com/kinlane-productions2/kin-lane/kin-kaia.png)

There are two things that I feel are critical to helping guide the API economy, and help prevent us from going down a dark alley or face failure like earlier API efforts like SOA encountered. While there are other illnesses and problems we face, I think that these two areas reflect system illnesses that could prove catastrophic to the entire space.

**Respecting Everyone’s Privacy**  
As technologists, developers and platform architecture we MUST respect the privacy of any users who depends on our API pipes. The content, data and other resources that flow through APIs are NOT the new oil. There are plenty of monetization opportunities around this flow of information, but we must respect everyone's privacy in the process. What flows through these API pipes may not mean anything to the platform owner, or the developer integrating with apps, but this information will be very valuable and meaningful to the end-user.

**Stop Reinventing the Wheel**  
There are some amazing API design patterns that already exist in the API space, leaders from Salesforce to Twilio have already defined some of the best patterns that are currently imaginable for common resources like contacts, images, and messages—with all of these patterns why are we often re-inventing the wheel and designing APIs within walled silos? We need to get better at sharing API definitions, media types and underlying data models with the community. Telling stories around why they are good, how they are being used, and publicly share them in an openly licensed way, so that others can follow our lead. This is why [3Scale](http://3scale.net) and API Evangelist have started [API Commons](http://apicommons.org), to give everyone healthy patterns that they can follow and emulate in their own API operations.

Let’s celebrate how far we've come in 14 years of web APIs, learn from the pioneers who have been around, tell stories about how we are using APIs, publishing and being proud of the work we do, while building for our collective future, and not forgetting the dark matter that holds this amazing space together.