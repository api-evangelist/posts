---
published: true
layout: post
title: API Management to API Gateway and Beyond
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/amusement-park-amusement-park-2.jpg
tags:
  - Gateway
  - Management
---
It has been a while since I stepped back to assess the world of API management. API Evangelist was founded on the premise of studying and understanding API management, so it makes sense after a decade to spend a moment thinking deeply about the circus tent we have called API management. I will be working with my partner in crime in the Postman Open Technology (OT) group Kevin Swiber to really make sense of this subject over the next year, but to help guide our efforts I wanted to take a moment to recollect how the hell we got here. Kevin and I will be doing the hard work to make sense of where we are at with API management in this decade, and this blog post is just meant to be the old API guy rant on the front porch of what the hell just happened.

### The API Management Circus Tent
In 2010, the API management conversation was dominated by three main players, Mashery, Apigee, and 3Scale, with a handful of service-oriented architecture (SOA) gateway players showing up trying to be the cool kids by 20212. API management was the only conversation and we really didn’t talk about much else in that moment, looking back it was very much a vendor-led discussion, something that you smell on the leather of the [Gartner API management limousine I am taking a ride in as a “visionary” today](https://blog.postman.com/postman-visionary-2021-gartner-magic-quadrant-full-lifecycle-api-management/). So, in 2012 (which I typed as 2021 just now), what was API management?

- **Portal** - That single destination where you go to find all of your APIs and consumers are able to onboard, see documentation, and find what they need.
- **Documentation** - Accurate and up-to-date documentation for all your APIs, helping reduce friction for API consumers when putting APIs to work.
- **Onboarding** - Providing the ability to sign up, log in, and manage your access and account as an API consumer using a standardized process.
- **Plans** - Being able to define a base set of plans that can be applied across many different APIs, standardizing how APIs are accessed by consumers.
- **Logging** - Ensuring that all API requests are logged and include developer access keys to provide the basics for all API management reporting.
- **Monetization** - Being able to apply a price for accessing APIs and then invoice API consumers for their usage, directly generating revenue from APIs.
- **Reporting** - Providing reporting for both API producers and consumers helping quantify API access from a variety of common dimensions.

There were definitely other capabilities brought to the table by API management, but this list I think gets at the heart of things. In 2012 we hadn’t seen any open source API management solutions, and the conversation was being dominated by commercial API management providers, and would soon also be influenced by the older grandpa SOA gateway providers who had just re-branded as API cool. In the shadow of this API movement, we’d see other areas like API design, testing, and monitoring emerge to add to what API management would be, but for the most part, the big API management circus tent would remain the acts listed above, and be the primary event on the API circuit for quite some time.

### Consolidation and Expansion of the API Universe
API management continued to dominate the conversation until the great API management consolidation began occurring with the acquisition of the leading API management solutions, and the IPO of Apigee in 2015. According to investors at the moment—-API management was over. People who simply saw API management as an investment trend, and one that was defined by vendors, analysts, and investors, began looking for what was next--API management was simply a commodity now, and was baked into each of the cloud platforms. API management wasn’t a space for innovation anymore. However, if you were actually tuned into the real world unfolding within the enterprise with microservices, and the continued evolution of public APIs and SaaS, you realized that this consolidation was actually just the beginning of an expansion where some of the core API management capabilities were evolving into their own areas, and API design, deployment, and testing were moving into center stage.

I see 2015 as a point of expansion that spun API portals, documentation, and analytics off into their own domains, and further gave fuel to API design and testing as their own domains as well. I’d say Gartner got it right by saying the full API lifecycle mattered when it comes to API management, but I’d say they are still primarily under the influence of the producer view of things and would benefit from hanging out with more API consumers. I think we all fall for the stories us vendors and analysts tell, and depending on our incentives we will find it difficult to let some of those beliefs go. I suffer from the same condition, but find that making sure I have a steady diet of stories from both API providers and consumers, but also API service providers, is how I make way forward with more balance. The key is not just API producers and service providers, but an emphasis on knowing what API consumers are actually needing, and realizing this isn't just about the people producing APIs and selling services and tools to those producing APIs.

### API Value Exchange and Not Just API Monetization
One area that API management providers and API analysts got wrong at the API management layer is that all APIs would be public, and that monetization is how we’d need to measure and report upon the value being exchanged. Organizing APIs into service plans, requiring all consumers to obtain and pass in a token to use, then logging and reporting on API consumption was the right bet, but narrowly focusing on doing this for publicly available APIs was where the API management narrative went sideways. We had all of the API monetization mechanisms right, we were just mistaken that it was about direct monetization of our API consumers outside the firewall, and not about measuring internal value exchange between microservices. You saw this shift result in the pivoting of a new generation of API management providers like Kong and Tyk, and why we find ourselves operating in a multi-gateway universe--responding to a misalignment of leadership buying the vendor and analyst vision that you needed Mulesoft or Apigee while ignoring the needs of DevOps teams who were putting in Kong, Tyk, and NGINX into production on the ground within operations. These teams were primarily needing to route and define access to internal services, but would have also benefited from a standardized onboarding, plan, logging, reporting, and policies across the rapidly growing landscape of internal microservices.

As API management and vendors went into sustainment mode with their public API monetization narrative, they began to focus on other lucrative capabilities that were catching the attention of investors, things like security, security mesh, testing, and monitoring. All this occurred while microservices, GraphQL, and event-driven approaches to delivering internal APIs were rapidly expanding, and would have all benefit from the lessons learned via API management 1.0, with standardized documentation, onboarding, plans, logging, and reporting upon usage and value generation being applied to this rapidly diversifying API toolbox. It’s OK, we are coming back around to increased investment in the core management layer for these internal and partner solutions, seeing these capabilities arise in the next generation of API management solutions, with portals, documentation, and analytics continuing their own expansion alongside API design, mocking, and testing. We’ll get where we need to be, it is just difficult to get everyone to see the way forward when we have competing priorities between producer, consumer, service provider, and analyst. 

### Solving the API Deployment Question
Another one thing about API management that has historically driven me nuts is that the management layer rarely ever actually helps you deploy your API. Unless it was a dead simple data API, API management couldn’t do much for you. As the old SOA guard emerged on the scene we began to see more connectivity opportunities emerge for back end systems at the gateway, but the question of API deployment has always been left off the table, even as API management expanding to be more about the “Full Lifecycle API Management (FLAPIM)”.  Design, testing, and monitoring were becoming part of the definition, but deployment continued to remain elusive, which I think is one of many reasons why API management has misinterpreted and narrowly focused on its role in the API lifecycle. The collision of API management with the concept of the SOA gateway at the higher levels of our operation, but then the continued evolution of the gateway at the lower levels through DevOps and microservices has begun to stabilize the deployment question with OpenAPI and now AsyncAPI at the API gateway layer, but it is something that open-source API frameworks, source control, and CI/CD pipelines are continuing to bring home at scale for developers on the ground floor of our operations.

I think we will see DevOps continue to optimize at the API deployment layer in coming years, leveraging API frameworks, source control, CI/CD, testing, and gateways to increase productivity without compromising quality. While this loosely can be something we put under the traditional API management circus tent, this is more about a modern API lifecycle, and having a platform to govern that lifecycle across many different services and tooling providers. This isn’t something the old guard SOA providers, new guard API management providers, or the new guard of API gateway solutions can touch. This is more about tapping into the existing momentum that exists as part of the software development lifecycle, but then augmenting with a standardized API lifecycle that includes documentation, testing, and overall governance. This is one part of the API lifecycle I think API producers on the ground floor of enterprise organizations are owning and leading the conversation on, and is an area that most API service providers aren’t always tuned into. This is where the current and future waves of API gateways are going to excel when it comes to meeting the needs of API producers and consumers internally within the enterprise, by overlaying with the existing software development practices of teams with a well-defined API lifecycle that does the heavy lifting with mocks, docs, testing, security, and governance for them.

### The Next Generation of API Management
I feel like API management stopped being a useful phrase to use to describe what is happening back when API management became commoditized in the cloud, and design, documentation, and testing were elevated to be just as important. I think the concept of an API portal was a vendor construct, and documentation and testing should be their own areas of the API lifecycle, and the essence of what was API management (ie. Onboarding, Plans, Routing, Rate Limiting, and Logging) has been baked into the resulting notion of what is the API gateway in this commoditized cloud world. I think the next generation of API management can be seen across a modern API lifecycle, as well as the innovation that is occurring within the API gateway in the following ways:

- **Service Mesh** - Adding a discovery and availability layer to our API Operations to ensure a certain level of reliability.
- **Multi-Protocol** - Going beyond just HTTP and offering TCP, MQTT, and other protocol APIs at the gateway layer.
- **Multi-Cloud** - Doing the hard work of making APIs available at the gateway layer across multiple cloud providers.
- **Containerization** - Using Kubernetes to optimize the deployment and operation of APIs at the gateway layer.
- **Event-Driven** - Allowing for the management of event-driven APIs at the gateway layer across an organization.
- **Federated** - Embracing a more federated approach to how API gateways are deployed and operated across an organization.
- **Policies** - Standardizing the policies that are applied to a single gateway or across all gateways and vendors.
- **Change** - Helping API producers manage the change that is occurring across many APIs at scale across an organization.

The demise of API management allows for innovation to occur at the API gateway once again, but also allows for other acts that used to only existed under the big circus tent of API management to thrive on their terms while playing nicely as part of a modern API lifecycle. API gateways play a central role in the API lifecycle, but even with this central role, gateways are just a commodity, and readily available as commercial and open source solutions, in a variety of shapes, sizes, and specialties. This is not meant to be an exhaustive list, but one that demonstrates the makeup of the API gateway area of the API lifecycle today, providing an inventory that shows us where we are today, how we got here, and a glimpse at where we might be going.

- **Cloud Gateways** - The top three cloud platforms dominate the conversation because of their overall architectural role in entries API Operations.
      
            
    - **AWS API Gateway** - This really demonstrates the commoditization of the API gateway for me.
        
            
    - **Azure API Management** - Continued cloud communization of what we know as API management.
        
            
    - **Apigee** - Further evidence of commoditization, but also clear attempts to innovate and compete.
        
          
- **Commercial** - As the power center of the enterprise continues its shift from database to the gateway there is continued opportunity for competition.
      
            
    - **VMWare** - Looking to dominate the conversation with a more federated approach to gateways.
        
            
    - **Mulesoft.** - Continuing with the same aggressive stance it has had for the last decade.
        
            
    - **Axway** - Continued to compete for relevancy and maintain its grip on what is happening.
        
            
    - **IBM** - Always doing something in every layer of the API lifecycle it thinks is interesting.
        
            
    - **Oracle** - Desperately seeking relevancy and rebrand itself after coming late to the game.
        
            
    - **SAP** - Looking to remain relevant in the API conversation with its existing customer base.
        
          
- **Open Source** - WSO2 led this conversation, but today there is a diverse mix of open source solutions to choose from when it comes to the API gateway.
      
            
    - **Kong** - Continues to lead the conversation on the ground floor when it comes to next-generation API gateways.
        
            
    - **Tyk** - Giving Kong a solid run for their money when it comes to an API gateway on the ground floor or the enterprise.
        
            
    - **NGINX** - A huge opportunity to lose when it comes to getting into, and leading the API gateway conversation.
        
            
    - **WSO2** - Continuing its slow and steady assertion in the world of APIs and across the API lifecycle.
        
            
    - **Red Hat** - Still here, but the API thing is kind of getting lost in the bigger shuffle of its open-source portfolio.
        
          
    
      
- **Next Generation** - Other players like Kong and Tyk are innovating, but as always there is always a future wave of innovation.
      
            
    - **Ambassador** - Scaling and optimizing the API gateway experience using Kubernetes. 
        
            
    - **KrakenD / Lura** - Focusing on performance and the distributed nature of the API lifecycle.
        
            
    - **Apache APISIX** - Showing the commoditization of even the open-source dimension of the API gateway.
        
            
    - **Aklivity** - Aggregating existing infrastructure then bringing it into a modern event-driven gateway reality.
        
            
    - **Solo.io** - Investing in the service mesh that is needed to make our gateway layer reliable.
        
          
      
      

The next generation of API management will no doubt be a whole more of the same thing we’ve seen for the last decade. However, it is clear that the future of API management within the enterprise will continue to be a battle of priorities between technical leadership and what is actually necessary on the ground floor to deliver APIs at the scale and speed we need. Of course, you’ll find things like design, documentation, testing, and the other areas of the API lifecycle being offered by these providers, but you won’t find many of them covering the entire spectrum of the API lifecycle. Some of the older API management providers have attempted to do this, but their belief in a single gateway reality within the enterprise has slowed their growth and adoption. Many of the new players understand the importance of doing one thing and doing it well, which is why to see more specialization with the next generation players-—eventually though, many will fall prey to being everything to everyone as they grow and take on more investment.

### The Realities of API Management
Ultimately I feel like the realities of managing APIs at scale across an enterprise organization stretched the concept of API management until has become more about the individual parts of the API lifecycle and governing that lifecycle consistently across an organization. I feel like analysts and API management vendors worked hard to keep the API management circus tent a relevant thing, but it just didn’t give enough ownership to developers in a DevOps world, and bought too heavily into the public API “if you build it they will come” vision of API management vendors in 2012. The concept just wasn’t designed to accommodate the microservices explosion that has occurred in recent years, and everyone kept trying to cobble together design, testing, and other emerging areas of the API lifecycle, and contain portals, documentation, analytics, and other critical areas of the API lifecycle. I also think that API management providers ignored the existing software development lifecycle too much, and neglected standardizing their documentation, mocking, testing, and other core capabilities to accommodate HTTP, TCP, MQTT, and other emerging patterns across these protocols like GraphQL, gRPC, and event-driven APIs. There is a huge opportunity to recreate much of the API lifecycle infrastructure we’ve applied to our HTTP APIs over the last decade to our increasingly diverse API toolbox in coming years, and taking what we’ve learned with public APIs and bringing it internally within the enterprise.

Kevin and I will continue to do a deep dive into this world over the next couple of months as part of Postman Open Technologies. This post is just my front porch recollection of what has happened, and where things might be going. I am guessing I am not thinking of a lot of the technical details, but also the business and political influence over what is happening in this moment. Ultimately you will hear me say the phrase API management less and less in coming years. You will hear me refer to the API gateway when it comes to capturing most of the traditional API management concepts, but I will simply refer to documentation, testing, security, portals, analytics, and other areas of the API lifecycle as their own areas. Acknowledging that it is likely that API producers will be using a mix of commercial and open source solutions to satisfy their needs in all of these areas, and the days of a single provider offering a comprehensive management solution for APIs are over. API platforms are about having multiple API gateways in operation moving forward, with a mix of API lifecycle blueprints in motion to meet the needs of different domains, lines of business, and teams. With gateways being just one of the building blocks that we apply across a modern API lifecycle, and that like the applications we build on our APIs, we will increasingly be using APIs to integrate, automate, and orchestrate the design, delivery, operation, and evolution of our APIs at scale across our enterprise operations.