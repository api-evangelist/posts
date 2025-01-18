---
layout: post
title: If I Could Design My Perfect API Design Editor
url: >-
  http://apievangelist.com/2014/06/25/if-i-could-design-my-perfect-api-design-editor/
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/swagger/swagger-editor.png
author:
  name: kinlane
tags:
  - My
  - Design
  - Editor
---
**Swagger is now Open API Definition Format (OADF) -- [**READ MORE**](http://apievangelist.com/2015/11/05/the-swagger-spec-is-reborn-as-open-api-definition-format-oadf-after-being-put-into-open-api-initiative-oai/)**

/kinlane-productions2/

![](https://s3.amazonaws.com/kinlane-productions/api-evangelist/swagger/swagger-editor.png)

I’ve been thinking a lot about API design lately, the services and tooling coming from Apiary, RAML and Swagger, and wanted to explore some thoughts around what I would consider to be killer features for the killer API design editor. Some of these thoughts are derived from the features I’ve seen in Apiary and RAML editor, and most recently the Swagger Editor, but I’d like to \*riff\* on a little bit and play with what could be the next generation of features.

While exploring my dream API design editor, I’d like to walk through each group of features, organized around my indentations and objectives around my API designs.

**Getting Started**  
When kicking off the API design process, I want to be able to jumpstart the API design lifecycle from multiple sources. There will be many times that I want to start from a clean slate, but many times I will be working from existing patterns.

*   **Blank Canvas -** I want to start with a blank canvas, no patterns to follow today, I’m painting my masterpiece. 
*   **Import Existing File -** I have a loose API design file laying around, and I want to be able to open, import and get to work with it, in any of the formats. 
*   **Fork From Gallery** \- I want to fork one of my existing API designs, that I have stored in my API design taller (I will outline below). 
*   **Import From API Commons -** Select an existing API design pattern from API Commons and import into editor, and API design gallery.

My goals in getting started with API design, will be centered around re-use the best patterns across the API space, as well as my own individual or company API design gallery. We are already mimicking much of this behavior, we just don’t have a central API design editor for managing these flows.

**Editing My API Design**  
Now we get to the meat of the post, the editor. I have several things in mind when I’m actually editing a single API definition, functions I want, actions I want to take around my API design. These are just a handful of the editor specific features I’d love to see in my perfect API design editor.

*   **Multi-Lingual -** I want my editor to word with API definitions in API Blueprint, RAML and Swagger. I prefer to edit my API designs in JSON, but I know many people I work with will prefer markdown or YAML based, and my editor needs to support fluid editing between all popular formats. 
*   Internationalization - How will I deal with making my API resources available to developers around the world? Beyond API definition langugages, how do I actually make my interfaces accessible, and understood by consuers around the glob.e
*   **Dictionary -** I will outline my thoughts around a central dictionary below, but I want my editor to pull from a common dictionary, providing a standardized language that I work from, as well as my company when designing interfaces, data models, etc. 
*   **Annotation -** I want to be able to annotate various aspects of my API designs and have associated notes, conversation around these elements of my design. 
*   **Highlight** - Built in highlighting would be good to support annotations, but also just reference various layers of my API designs to highlighting during conversations with others, or even allowing the reverse engineer of my designs, complete with the notes and layers of the onions for others to follow. 
*   **Source View -** A view of my API design that allows me to see the underlying markdown, YAML, or JSON and directly edit the underlying API definition language. 
*   **GUI View -** A visual view of my API design, allowing for adding, editing and removing elements in an easy GUI interface, no source view necessary for designing APIs. 
*   **Interactive View -** A rendered visual view of my API, allowing me to play with either my live API or generated mock API, through interactive documentation within my editors. 
*   **Save To Gallery -** When I’m done working with my API designs, all roads lead to saving it to my gallery, once saved to my working space I can decide to take other actions. 
*   **Suggestions -** I want my editor to suggest the best patterns available to me from private and public sources. I shouldn't ever design my APIs in the dark.

The API design editor should work like most IDE’s we see today, but keep it simple, and reflect extensibility like [GIthub’s Atom editor](https://atom.io/). My editor should give me full control over my API designs, and enable me to take action in many pre-defined or custom ways one could imagine.

**Taking Action**  
My API designs represent the truth of my API, at any point within its lifecycle, from initial conception to deprecation. In my perfect editor I should be able to take meaningful actions around my API designs. For the purposes of this story I’m going to group actions into some meaningful buckets, that reflect the expanding areas of the API lifecycle. You will notice the four areas below, reflect the primary areas I track on via API Evangelist.

**Design Actions**  
Early on in my API lifecycle, while I’m crafting new designs, I will need to take action around my designs. Designs actions will help me iterate on designs before I reach expensive deployment and management phases.

*   **Mock Interface -** With each of my API designs I will need to generate mock interfaces that I can use to play with what my API will deliver. I will also need to share this URL with other stakeholders, so that they can play with, and provide feedback on my API interface. 
*   **Copy / Paste -** API designs will evolve and branch out into other areas. I need to be able to copy / paste or fork my API designs, and my editor, and API gallery should keep track of these iterations so I don’t have to. The API space essentially copy and pastes common patterns, we just don’t have a formal way of doing it currently. 
*   **Email Share -** I want to easily share my API designs via email with other key stakeholders that will be part of the API lifecycle. Ideally I wouldn’t be emailing around the designs themselves, just pointers to the designs and tools for interacting within the lifecycle. 
*   **Social Share -** Sometimes the API design process all occur over common social networks, and in some cases be very public. I want to be able to easily share all my API designs via my most used social networks like Github, Twitter and LinkedIn. 
*   **Collaboration -** API design should not be done in isolation, and should be a collaborative process with all key stockholders. I would like to to even have [Etherpad style real-time interactions](http://etherpad.org/) around the design process with other users.

API design actions are the first stop, in the expanding API design lifecycle. Being able to easily generate mocks, share my interfaces and collaborate with other stakeholders. Allowing me to quickly, seamlessly take action throughout the early design cycles will save me money, time and resources early on—something that only become more costly and restrictive later on in the lifecycle.

**Deployment Actions**  
Next station in the API design lifecycle, is being able to deploy APIs from my designs. Each of the existing API definition formats provide API deployment solutions, and with the evolution in cloud computing, we are seeing even more complete, modular ways to take action around your API designs.

*   **Server** - With each of my API designs, I should be able to generate server side code in the languages that I use most. I should be able to register specific frameworks, languages, and other defining aspects of my API server code, then generate the code and make available for download, or publish using Github and FTP. 
*   **Container** - Cloud computing has matured, producing a new way of deploying very modular architectural resources, giving rise to a new cloud movement, being called containers. Container virtualization will do for APIs, what APIs have done for companies in the last 14 years. Containers provide a very defined, self-contained way of deploying APIs from API design blueprints, ushering a new ay of deploy API resources in coming years.

I need help to deploy my APIs, and with container solutions like [Docker](http://www.docker.com/), I should have predefined packages I can configure with my API designs, and deploy using popular container solutions from Google, Amazon, or other coud provider.

**Management Actions**  
After I deploy an API I will need to use my API definitions as a guide for an increasing number of areas of my management process, not just the technical, but the business and politics of my API operations.

*   **Documentation** - Generating of interactive API documentation is what kicked off the popularity of API design, and importance of API definitions. Swagger provider the Swagger UI, and interactive, hands-on way of learning about what an API offered, but this wasn’t the only motivation—providing up to date documentation as well, added just the [incentives API providers needed to generate machine readable documentation](http://apievangelist.com/2014/06/05/what-are-the-incentives-for-creating-machine-readable-api-definitions/).
*   **Code** - Second to API documentation, providing code samples, libraries, and SDKS is one of the best ways you can eliminate friction when on boarding new API users. API definitions provide a machine readable set of instructions, for generating the code that is necessary throughout the API management portion of the API lifecycle. 
*   **Embeddable** - JavaScript provides a very meaningful way to demonstrate the value of APis, and embeddable JavaScript should always be part of the API lifecycle. Machine readable API definitions can easily generate visualizations that can be used in documentation, and other aspects of the API lifecycle.

I predict, with the increased adoption of machine readable API formats like API Blueprint, RAML and Swagger, we will see more layers of the API management process be expanded on, further automating how we manage APis.

**Discovery Actions**  
Having your APIs found, and being able to find the right API design for integration, are two sides of an essential coin in the API lifecycle. We are just now beginning to get a handle on what is need when it comes to API discovery.

*   **[APIs.json](http://apisjson.org/) -** I should be able to organize API designs into groupings, and publish an APIs.json file for these groups. API designs should be able to be organized in multiple groups, organized by domain and sub-domain. 
*   **[API Commons](http://apicommons.org/) -** Thanks to Oracle, the copyright of API of API definitions will be part of the API lifecycle. I want the ability to manage and publish all of my designs to the API Commons, or any other commons for sharing of API designs.

The discovery of APIs has long been a problem, but is just now reaching the critical point where we have to start develop solutions for not just finding APIs, but also understanding what they offer, and the details of of the interface, so we can make sense of not just the technical, but business and political decisions around API driven resources.

**Integration Actions**  
Flipping from providing APIs to consuming APIs, I envision a world where I can take actions around my API designs, that focus on the availability, and integration of valuable API driven resources. As an API provider, I need as much as assistance as I can, to look at my APIs from an external perspective, and being able to take action in this area will grow increasingly important.

*   **Testing** - Using my machine readable API definitions, I should be able to publish testing definitions, that allow the execution of common API testing patterns. I’d love to see providers like SmartBear, Runscope, APITools, and API Metrics offer services around the import of API design generated definitions. 
*   **Monitoring** - Just like API testing, I want to be able to generate definition that allow for the monitoring of API endpoints. My API monitoring tooling should allow for me to generate standard monitoring definitions, and import and run them in my API monitoring solution.

I’d say that API integration is the fastest growing area of the AP space, second only to API design itself. Understanding how an API operates, from an integrators perspective is valuable, not just to the integrator, but also the provider. I need to be thinking about integration issues early on in the API design lifecyle to minimize costly changes downstream.

**Custom Actions**  
I’ve laid out some of the essential actions I’d like to be able to take around my API definitions, throughout the API lifecycle. I expect the most amount of extensibility from my API design editor, in the future, and should be able to extend in any way that I need.

*   **Links** - I need a dead simple way to take an API design, and publish to a single URL, from within my editor. This approach provides the minimum amount of extensibility I will need in the API design lifecycle. 
*   **JavaScript** - I will need to run JavaScript that I write against all of my API designs, generating specific results that I will need throughout the API design process. My editor should allow me to write, store and execute JavaScript against all my API designs. 
*   **Marketplace** - There should be a marketplace to find other custom actions I can take against my API designs. I want a way to publish my API actions to the marketplace, as well as browse other API actions, and add them to my own library.

We’ve reached a point where using API definitions like API Blueprint, RAML, and Swagger are common place, and being able to innovate around what actions we take throughout the API design lifecycle will be critical to the space moving forward, and how companies take action around their own APIs.

**API Design Gallery**  
In my editor, I need a central location to store and manage all of my API designs. I’m calling this a gallery, because I do not want it only to be a closed off repository of designs, I want to encourage collaboration, and even public sharing of common API design patterns. I see several key API editor features I will need in my API design gallery.

*   **Search** - I need to be able to search for API designs, based upon their content, as well as other meta data I assign to my designs. I should be able to easily expose my search criteria, and assist potential API consumers in finding my API designs as well. 
*   **Import** - I should be able to import any API design from a local file, or provide a public URL and generate local copy of any API design. Many of my Api designs will be generated from an import of existing definition. 
*   **Versioning** - I want the API editor of the future to track all versioning of my API designs. Much like managing the code around my API, I need the interface definitions to be versioned, and the standard feature set for managing this process. 
*   **Groups** - I will be working on many API designs, will various stakeholders in the success of any API design. I need a set of features in my API design editor to help me manage multiple groups, and their access to my API designs. 
*   **Domains** - Much like the Internet itself, I need to organize my APIs by domain. I have numerous domains which I manage different groups of API resources. Generally I publish all of my API portals to Github under a specific domain, or sub-domain—I would like this level of control in my API design editor. 
*   **Github** - Github plays a central role in my API design lifecycle. I need my API design editor to help me manage everything, via public and private Github repository. Using the Github API, my API design editor should be able to store all relevant data on Github—seamlessly. 
*   **Diff** - What are the differences between my API designs? I would like to understand the difference between each of my API resource types, and versions of each API designs. It might be nice if I could see the difference between my API designs, and other public APIs I might consider as competitors. 
*   **Public** - The majority of my API designs will be public, but this won’t be the case with every designer. API designers should have the control over whether or not their API designs are public or private.

My API design gallery will be the central place i work from. Once I reach a critical mass of designs, I will have many of the patterns I need to design, deploy and manage my APIs. It will be important for me to have access to import the best patterns from public repositories like API Commons. To evolve as an API designer, I need to easily create, store, and evolve my own API designs, while also being influenced by the best patterns available in the public domain.

**Embeddable Gallery**  
Simple visualization can be an effective tool in helping demonstrate the value an API delivers. I want to be able to manage open, API driven visualizations, using platforms like D3.js. I need an arsenal of embeddable, API driven visualizations to help tell the store of the API resources I provide, give me a gallery to manage them.

*   **Search** - I want to be able to search the meta data around the API embeddable tools I develop. I will have a wealth of graphs, charts, and more functional, JavaScript widgets I generate. 
*   **Browse** - Give me a way to group, and organize my embeddable tools. I want to be able to organize, group and share my embeddable tools, not just for my needs, but potentially to the public as well.

A picture is worth a thousand words, and being able to easily generate interactive visualizations, driven by API resources, that can be embedded anywhere is critical to my storytelling process. I will use embeddable tools to tell the story of my API, but my API consumers will also use these visualizations as part of their efforts, and hopefully develop their own as well.

**API Dictionary**  
I need a common dictionary to work from when designing my APIs. I need to use consistent interface names, field names, parameters, headers, media types, and other definitions that will assist me in providing the best API experience possible.

*   **Search** - My dictionary should be available to me in any area of my API design editor, and in true IDE style, while I’m designing. Search of my dictionary, will be essential to my API design work, but also to the groups that I work with. 
*   **Schema.org** \- There are plenty of existing patterns to follow when defining my APIs, and my editor should always assist me in adopting, and reusing any existing pattern I determine as relevant to my API design lifecycle, like [Schema.org](http://schema.org/).
*   **Dublin Core** - How do I define the metadata surrounding my API designs? My editor should assist me to use common metadata patterns available like [Dublin Core](http://dublincore.org/).
*   **Media Types** - The results of my API should conform to existing document representations, when possible. Being able to explore the existing media types available while designing my API would help me emulate existing patterns, rather than reinventing the wheel each time I design an API. 
*   **Custom** - My dictionary should be able to be driven by existing definitions, or allow me to import and and define my own vocabulary based upon my operations. I want to extend my dictionary to meet the unique demands of my API design lifecycle.

I want my API design process to be driven by a common dictionary that fits my unique needs, but borrows from the best patterns already available in the public space. We already emulate many of the common patterns we come across, we just don’t have any common dictionary to work from, enforcing healthy design via my editor.

**An Editor For Just My Own API Design Process**  
This story has evolved over the last two weeks, as I spent time in San Francisco, discussing API design, then spending a great deal of time driving, and thinking about the API design lifecycle. This is all part of my research into the expanding world of [API design](http://design.apievangelist.com/), which will result in a white paper soon, and my intent is to just shed some light on what might be some of the future [building blocks of the API design space](http://design.apievangelist.com/building-blocks.html). My thoughts are very much based in my own selfish API design needs, but based upon what i’m seeing in the growing API design space.

**An Editor For A Collective API Design Process**  
With this story, I intend to help keep the API design process a collaborative, and when relevant a public affair. I want to ensure we work from existing patterns that are defined in the space, and as we iterative and evolve APIs, we collectively share our best patterns. You should not just be proud of your API designs, and willing to share publicly, you should demonstrate the due diligence that went into your design, attribute the patterns you used to contribute to your designs, and share back your own interpretation—encouraging re-use and sharing further downstream.

**What Features Would Be Part of Your Perfect API Design Editor**  
This is my vision around the future of API design, and what I’d like to have in my editor—what is yours? What do you need as part of your API design process? Are API definitions part of the “truth” in your API lifecycle? I’d love to hear what tools and services you think should be made available, to assist us in designing our APIs.

**Disclosure:** I'm still editing and linking up this post. Stay tuned for updates.

**Updated November 27, 2015:** Links were updated as part of switch from Swagger to OADF ([**READ MORE**](http://apievangelist.com/2015/11/05/the-swagger-spec-is-reborn-as-open-api-definition-format-oadf-after-being-put-into-open-api-initiative-oai/))