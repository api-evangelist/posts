---
layout: post
title: My Free Application for Federal Student Aid (FAFSA) API Project
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/fafsa-form.jpg
author:
  name: kinlane
tags:
  - My
  - Project
---
[![](https://s3.amazonaws.com/kinlane-productions2/federal-government/ed/fafsa-form.jpg)](https://ed-data.github.io/fafsa-api)

I was able to give my [FAFSA API project](http://ed-data.github.io/fafsa-api/index.html "FAFSA API Project") a little more attention in preparation for some data jams later this week. While there is still a lot of work to happen, I feel pretty good about what I have been able to get done. I'd love to reflect on the API design, get some feedback before I move it forward too much more.

**75% Github**  
As with all of my projects, the FAFSA API is mostly deployed via Github, except for the actual API. The project was born as a Github repository and expanded as a Github Page. Using Github I'm able to manage the project, while also making it open by default so anyone else can fork and put the work to use.

**Designing The API**  
Once the repository was created, I got to work on an API design. For this project I started with a [Swagger](https://bitly.com/1j2KERU+ "Swagger") specification, and developed a basic CRUD interface and data model that was derived from the list of 100+ fields from the [FAFSA form](http://www.fafsa.ed.gov/fotw1314/pdf/PdfFafsa13-14.pdf "FAFSA Form"). Now I had a basic API design I could work with as guide for developing my API, generating my documentation and code samples. It isn't perfect, but it is a good start.

**Deploying The API**  
Next with API design in hand, I got to work deploying an actual API that would allow developers to build applications that could create, update and manage FAFSA application. I selected the [Slim framework](http://www.slimframework.com/) and PHP to deploy the first iteration of the FAFSA API. This allowed me to rapidly produce server side code in a common programming language. I will be deploying Python, Ruby and Node.js versions in the near future.

**Interactive Documentation**  
The first step in quantifying an API interface and make it something you can see and understand, is by developing documentation. In 2013 the common way to do this is with interactive documentation, which you can generate directly from the previously generated Swagger specification. Swagger has a slick JavaScript implementation that I can easily run from my Github project pages.

**Code Samples**  
I want to make sure my basic API design works I need to actually hack against it. Like the server side code, I'm developing the first code samples in PHP. I developer a set of samples that allow me to add, update, delete and pull all or an individual FAFSA entry. Next on the roadmap is to develop Python, Ruby, JavaScript and hopefully some mobile code samples for iPhone and Android (eventually).

**Secondary APIs**  
Once I started hacking on the FAFSA API I realized I would need more resources to actually make an application possible. First I needed a list of states and provinces--basic I know, but something I would need. Next there are other form fields, supporting processing logic, form rejection codes and lists of colleges and universities that would help developers be successful in building applications. I got to work downloading, and extract the data I would need and added these secondary APIs to my FAFSA API stack.

**A Portal To Round It Off**  
I have good amount of resources available for my FAFSA API project. I need a portal to hang all my resources within, establishing one stop access to everything generated as part of my work. Using Github Pages I generate a gh-pages branch of my Github repository, upload a graphical template, home page, about page, and a blog to provide a single portal gateway that developers can get at everything I've done. The portal blog will provide a real-time journal to chronical the evolution of the project. 

**The Data Behind**  
I've launched a suite of secondary APIs to support developers when building FAFSA applications, but this project is just a prototype API and even if it was a production deployment, some developers will just want access to the data behind. To support this, I published JSON data stores of FAFSA form fields, business process logic, rejection codes, and a list of states and schools that users can put to use. All data is stored as basic, machine readable JSON files in the master Github repository behind the FAFSA project portal.

**A Roadmap For The Future**  
While I made significance progress on the FAFSA API work, there is always more work to be done. I need a roadmap to help me remember the various features I will be adding to the FAFSA API, but also a way to allow other contributors to submit suggestions to the roadmap. I developed a simple Javascript widget that was driven from the underlying Github Milestones system. This way milestones would list in the FAFSA API project roadmap, but would also allow anyone to submit potential features using the underlying Github platform.

**Providing Necessary Resources**  
I used a variety of PDF and website resources to understand the FAFSA program and derive the API interface and data model for this project. I wanted to make sure an provide an [easy list of resources](http://ed-data.github.io/fafsa-api/resources.html) for other developers to use. A significant part of this project was derived from existing resources, making these part of the living project is important to support it's evolution.

**Adding To The Commons**  
With a first draft of the API definition and underlying data model for the FAFSA form published, i wanted to make sure I put forth the definition for public comment and consumption. To do this I create an [API Commons](http://apicommons.org "API Commons") manifest which registers the FAFSA API swagger definition with the commons. As I evolve the project and update the specification the manifest will keep it actively published in the API commons.

[![](https://s3.amazonaws.com/kinlane-productions2/api-commons/api-commons-logo.png)](http://apicommons.org)

**Licensing**  
Beyond adding the FAFSA API definition to the API Commons, I make sure all code that is published as part of my FAFSA project is licensed using the [MIT License](http://opensource.org/licenses/MIT), and any content is available under a [CC-BY license](http://creativecommons.org/licenses/by/3.0/). I want the entire project to be freely and widely used, but make sure the central project is attributed to help build awareness and contributions to the project.

**Conclusion**  
That is where I stand. The goal of my FAFSA API project is to show what is possible with a simple API, and supporting resources. Developers can now build web applications that support students in applying for aid. Anyone can not just build applications, but deploy their own FAFSA API, becoming a node in a federated FAFSA ecosystem. Think of the [ecosystem that has emerged as part of the IRS e-file system](https://github.com/kinlane/irs-modernized-efile-blueprint). Popular apps like Turbo Tax that help taxpayers file their federal and state taxes, providing a successful blueprint for public and private sector partnerships.

This is all just a beginning. I'm just getting going on this project. It should provide a base prototype for building FAFSA solutions. I'm using this base model for other projects I'm working on, but FAFSA has provided a great project to evolve my approach. I need help on this project. It is unpaid work and I can use financial support, code contributions or just [feedback on what should be on the roadmap](https://github.com/ed-data/fafsa-api/issues?state=open).