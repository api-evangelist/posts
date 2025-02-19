---
published: true
layout: post
title: What Layer Are You Used to API Complexity Being At?
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/amusement-park-amusement-park-2-blue-circuit.jpg
author:
  name: kinlane
tags:
  - Complexity
---
I’d say one of the most controversial aspects of the world of APIs involves the places where people are used to and prefer to deal with API complexity at. After you look at thousands of APIs you begin to better understand where people introduce complexity into the design of an API, and as more people become familiar with any single approach they are much more likely to stick with it over time, bake it into their APIs, and passionately believe it is the normal pattern that everyone else is and should be using. You can see what I am talking about at the heart of the microservices debate, where the API complexity is dealt with at the API level, or in the number of APIs you have—something many increasingly are finding to be unacceptable. Another way you can see the API complexity debate unfolding across the API space is within the graphQL, where the complexity is at the schema level, and believers truly think that this is where API complexity should live. I try to not be too prescriptive on where API complexity should lie because the reasons why you want to increase or decrease the scope and complexity of an API will vary widely depending on what you are delivering with the API, the organization where it is being produced, and who will be consuming it.

### First, What is API Complexity?

I feel like it is important to set the stage with what is complex. To provide a complicated view of what complexity can be, the definition for the complexity is, _“the state or quality of being intricate or complicated”_, with the definition of complicated being, _“consisting of many interconnecting parts or elements; intricate.”_, and the definition of intricate being, _“very complicated or detailed”_. ;-)  Here are some of the questions that nag me as I think about API complexity.

*   Is complexity in each individual API instance necessary?
*   Is complexity in each individual API scenario bad?
*   Will this complexity be worked out in future versions?
*   Is this complexity by design, and used as leverage by platform?

Personally I don’t see complexity as always being bad. It can be, but quite often it is just the state of being within many enterprise organizations, and the longer you are there the more you understand the complexity and normalize it in your mind. Complexity often accumulates organically over time, but there are also many problems out there being solved using APIs where complexity is inevitable, you just have to have a plan for dealing with it. I just want to mostly set the stage that I am not saying complexity is always bad, but I feel complexity without a reason or purpose is usually bad by default.

### Are Your API Teams Complex?

Describe your approach to defining the teams that are working on APIs within your organization. Most companies I have asked to do this for me aren't able to articulate any existing plan for how teams are assembled to deliver APIs. There are plenty of agile, and other organizational religions and dogma in place about how teams come together and operate, but there are few who think about this in the context of the API life cycle, even when teams are only developing and delivering APIs. Always leaving me with questions about API complexity at the team level.

*   Do all teams have access to basic API training?
*   Do all teams communicate around the delivery of APIs?
*   Do all teams deliver on every stop along the API life cycle?
*   Are there any teams who are specialized in any specific area?
*   Are there shared feedback loops in place across teams and APIs?
*   Are teams dedicated to building new APIs, or assigned to sustain existing APIs?

This results in much complexity that can’t be seen playing out throughout the development of new APIs, and sustainment of legacy APIs, produced as a kind of API entropy when there is no feedback loops, and deliberate team collaboration when it comes to doing APIs at scale across an enterprise. When operating hundreds of APIs the number and size of teams only act as magnifiers for API complexity if the teams aren’t known, engaging via well established feedback loops, and collaborating in real-time around each API artifact and stopping along the API life cycle. Honestly, most enterprise teams I’ve worked with do not see the API complexity debt they’ve accrued at the team level, and it will be something they struggle with sorting out over the next decade.

### How Complex is Your API Workspace?

After teams, I’d say a lack of dedicated API workspaces for teams to design, develop, deliver, and manage APIs is one of the ways that API complexity is seriously amplified across operations. Sure, working locally is what every developer will want and need, but there comes a time where teams will have to work together to deliver each API. This tends to be using Git, and leveraging one or many Git repositories as the shared workspace for building APIs, and making them available to consumers. The differing opinions on API complexity at this level can be seen in the mono repo discussions you see occurring across the microservices landscape. Opening up a whole bunch of questions about like or disliking complexity at the workspace level?

*   Do you use one single repository for all of your APIs?
*   Do you create team level repos for all of a team's APIs?
*   Do you create a line of business level repos for all APIs?
*   Do you create a single repo for each individual API?
*   Do you have one to one for Postman workspaces and git repos?

Depending on who you ask these questions you will get different answers. There is no right answer here. It depends on where you like your complexity, and being honest about where you want overhead and friction to exist. There is also additional complexity introduced when you don’t have a plan for how developers should be setting up and building APIs, as well as no consideration for how teams collaborate across the API life cycle across workspaces. Like most of the API life cycle, if you do not have a plan in place for how you are carving out workspaces for the delivery and sustainment of APIs, the API complexity entropy increases, resulting in many unforeseen challenges downstream. The complexity of things at the workspace level is something that will be helped by the types of tools you use, helping reduce friction in context switching when you have a lot of teams and workspaces all trying to work in concert. A lack of tooling will make things cumbersome, and feel like there is friction whenever things get complex. 

### What is the Scope of Your APIs?

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/aws-s3-stories-G0520270-blue-circuit.jpg)

There is no hard and fast rule about how big or small an API is. Honestly this is one of the most damaging aspects of the microservices movement is that everyone assumes that you have to go to the smallest possible unit of value. The words we use matter. The scope of each 3rd party, and internal API will vary widely across each organization, making for a dizzying mix of what is an API. For the last five years the microservices movement has been all about embracing complexity in the number of APIs teams develop and operate. However, recently you are beginning to see significant pushback on this notion from folks who are not interested in having to manage many different APIs, citing friction with discoverability and context switching, leaving us with many questions about API complexity at this level.

*   Does an API reflect a line of business?
*   Does an API reflect all of a company’s digital resources?
*   Does an API reflect a single digital resource?
*   Are all sub-resources broken out as individual APIs?
*   Are APIs only about partner integrations?
*   Are APIs organized based upon the applications they support?

Depending on where you are comfortable with your API complexity you will answer these questions differently. Again, depending on whether not you have a plan, and the type of services and tooling you adopt, you will see having many different APIs as a burden or you find context switching to be an easy way to navigate many different APIs. There is no right answer to these questions. Only that these questions should be asked as you are working to define your own organizational API strategy. There are trade-offs to doing microservices, as well as operating as an API monolith. The scope of your APIs will define how fast you are able to move when developing new applications, and shape your developer on-boarding practices. API complexity at the individual API level will work in parallel with how you apply API complexity to the other levels I am highlighting here, making an API complexity discussion and strategy at your organization a pretty critical component to how you get things done.

### Take Many or a Single Path

The API design movement over the last 5-7 years has introduced much complexity when it comes to using API paths. Having an individual resource for every digital asset across an organization, as well as a knob or dial for every enterprise capability can make for a dizzying number of API paths that consumers can take. However, this is one thing that a URL path is designed to address, as long as there is a thoughtful information architecture in place, otherwise it can become just a maze that your consumers will get lost within. There are many questions that arise as one begins crafting paths for their API consumers to follow, which can increase or decrease API complexity for consumers who are trying to put APIs to work.

*   Do you follow RESTful principles when it comes to defining API paths?
*   Is every object made available for integration available as an API path?
*   Do you have dedicated namespaces at the base of your path?
*   Do you use your HTTP methods consistently along with each API path?
*   Do you have an information architecture plan for use with your API?
*   Is there any relationship between your web and API implementations?

The path layer has been the site of many bloody API battles over the years between linked data folks, RESTafarians, hypermedia, and folks who are just trying to do their jobs across enterprise organizations. People get very religious about his layer of API complexity. How many paths, and how you name your paths are central to REST, microservices, GraphQL, and other primary API belief systems. The types of applications you are building on top of your APIs, and who the developers of those applications are will all influence the type of complexity you embrace or resist at the API path layer. There is no way of avoiding heated debates at this layer. Your only defense when it comes to these API battles, and in dealing with API complexity at this layer is to make sure you have many conversations across teams about how they are doing it, what the tradeoffs are, and establish an organizational wide strategy for dealing with API complexity at all levels.

### Choosing to Query Your API Complexity

Depending on how developers on-board with API development they will have different approaches to API complexity, and often times if a developer comes from the web world they will be alright with complexity at the query parameter layer. Web developers learned to hack backend systems by playing with query parameters, so this is where they have learned to embrace and accept API complexity. Other dimensions of the API stack tend to be dark and mysterious for web developers but query parameters are something they get, but injecting complexity at the query parameter level can introduce a lot of challenges for consumers, leaving a number of questions when it comes to how APIs are delivered.

*   How many query parameters are too much?
*   Do query parameters have enumerated values?
*   Do query parameters have data types applied?
*   What limitations are there on query values passed?
*   Are there shared or common parameters across APIs?
*   Are query parameters using common words?

If you embrace complexity at the query parameter layer, and develop an API this way, it will make sense to you, but depending on the words you used, and how well you document this complexity could become an obstacle for consumers. A spider web of unique, cryptic, but potentially powerful mix of query parameters will have many different possible outcomes depending on the type of API, and the community being targeted. Query parameters provide a powerful tool for turning the knobs and levers on an API, but when done in isolation it can quickly become a maze for API consumers to have to navigate when trying to understand how to put an API to work. Query parameters work best when using a shared vocabulary across not just a single APIs, but many private or public APIs, allowing all API consumers to collaborate and put APIs to work because of the shared meaning present in the query parameters we use, but is also a dictionary that will grow in complexity with each parameter we add.

### All Your Focus on The Request Body

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/aws-s3-stories-ellisisland-blue-circuit.jpg)

Like query parameters, developers who rely on the HTTP request body for their API complexity tend to come from the world of web development, where remote procedure calls (RPC) design patterns were adopted, as well as out of the mobile evolution of APIs that began in 2008. If a developer was introduced to APIs being about RPC, then they tend to use the body. Also, developers who evolved into the modern world of web APIs out of the enterprise SOA and SOAP era, tend to see the HTTP request body as the place you put the complexity of your API—it is all about the payload. Leaving me with many questions when it comes to adopting API complexity at this level, pushing me to be more thoughtful in how I craft my HTTP request body payload, and when I don’t use it at all.

*   Are you using your HTTP method in alignment with the body?
*   Do you have a plan for managing the schema used?
*   Do you define JSON schema for each of your APIs payload?
*   How many levels deep do you go with your objects in payload?
*   Do you offer multiple media types (ie. JSON or XML) for the body?
*   What is the relationship with your body and the API path?

In my experience people who lean on the request body for their complexity are making the transition to event-driven and message-driven approaches to delivering APIs. They don’t see any value in complexity at other layers, and the message in the body is really the value. HTTP is just a transport, and these developers aren’t really interested in the nuance of HTTP. The GraphQL folks also operate here believing that complexity shouldn’t exist at the API or path level, and it should be all about the schema at the body, and response layers—ignoring the benefits of HTTP and focusing on giving API consumers all the controls they need over the request and the response of each API integration. Demonstrating that API complexity is not just up to the API producer, but is also something that gets dictated by the API consumer. Further expanding how we think about API complexity, and who holds the power when it comes to dictating where API complexity exists, but whether it should exist at all.

### All API Complexity Trickles Down to the Response

The final place developers love their complexity is at the response layer, and the robustness of the schema being returned. As mentioned above the GraphQL folks enjoy complexity at the query parameter and request body levels because it gives them the control they desire over complexity at the API response layer. Complexity exists at this layer though dogma that exists at other layers. How someone views API design practices and the number of API paths will exponentially increase the complexity at the API response layer. Harder core developers see complexity in the XML or JSON responses as acceptable, where it will become a blocker for less technical end-users. Leaving a number of questions when it comes to understanding API complexity at the response and schema layers, helping us think through the impact.

*   Do you have the resources to parse complex responses from an API?
*   Are you looking to put an API response to work in a spreadsheet?
*   Are you integrating an API response directly into another API request?
*   Are you building a web application?
*   Are you building a mobile application?
*   Are you building an IoT application?
*   Is there limited network or bandwidth available?
*   Do you prefer all sub-resources included with each response?
*   Do you get to define your response as part of each request you make?
*   How many API calls does a single user interface need to make?
*   Are multiple content types available for any single API response?

API responses are a hotbed of API complexity. There are few API standards in use that dictate what gets returned for common API patterns. Most companies see the naming and ordering of the API complexity they’ve embraced at this layer as their intellectual property. API complexity at the response layer that keeps out less skilled developers and non-developers is often embraced and celebrated, ensuring that APIs are not about access, but about being a gatekeeper, and keeping those who are not in the know out of things. API complexity by design is not unique to the response layer, and is something that exists through each layer I have walked through here, but I’d say because the response is downstream, the API complexity entropy and debt accumulated upstream from here eventually flows downhill and dramatically expands API complexity at the response layer.

### So Where Do You Like Your API Complexity?

Where you are used to, and believe API complexity will vary on how you have learned about APIs, and how you are applying them across applications. There are no right answers here, only right questions. For me, the process of asking the right questions has helped me evolve beyond my legacy beliefs around where API complexity should exist. Thinking through API complexity and whether it should exist or not exist across all of these levels has helped me learn to understand how large groups of develoeprs see APIs, as well as define, design, and deliver APIs that reach a much larger group of developers by employing common patterns and vocabulary. It has helped me unpack my own dogma. It has helped me better understand those who have gone off of me for investing too heavily or too little in API complexity across each of these layers. For me, people’s insistence on API complexity at a single level often demonstrates how little they have thought about API complexity across all of the layers.

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/statue-face-open-mouth-statue-face-open-mouth-blue-circuit.png)

### API Complexity Often Gives Way To API Religion

As I’ve stated several times there are no right answers here. I find that believing too heavily in complexity of any single layer without thorough consideration of the impact of complexity at other layers, as well as at the API consumer dimension, tends to lead towards some very religious belief, behavior, and ultimately condemnation, shaming, and guilt. Like most other aspects of Internet technology across the enterprise the more exposure you have to complexity the more use to it you are, and just because you are accustomed to it doesn’t mean it is the way thing should be. Also, it takes time to reduce very complicated things down into a more distilled and simplified version—this should be what API evolution is all about. Ideally, we are working to reduce complexity. This is why web APIs have made their biggest impact, making digital resources more accessible to developers, and non-developers. APIs are about access and not about barriers, and API complexity at any layer will ultimately act as a barrier. 

I have had people scream at me on Zoom meetings because I provided paths for every digital resource and capability rather than making a single API call that just returned everything as a massive JSON blog. Claiming in front of large audiences that clearly I do not know what I am doing because I would introduce such complexity to an API. With no regard to the reasons why I was introducing complexity at the path level instead of the response schema level. I get this regularly when it comes to discussions around API design, and how you build a platform and strategy for your API operations. People get mean about these things, and it is usually because they worked very hard to learn what they know, and are pretty afraid of what they do not know. People also tend to use APIs to protect existing power structures, and wield complexity as part of this fight. Which in my experience makes many of these API battles more about the politics of APIs than it ever is about the technology, or even business of doing APIs. As you are baking in specific patterns into your API strategy, make sure you pause to think about the politics of APIs at these levels, and ask some of these questions, ensuring that you are making informed decisions around where you invest or divest in API complexity.