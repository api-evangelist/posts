---
layout: post
title: 'Getting To Know Mike Amundsen For The API Craft 2014 Detroit Hypermedia Panel '
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/mike-amundsen-api-day.jpg
author:
  name: kinlane
tags:
  - Hypermedia
  - 4
---
I'm preparing for my hypermedia panel with Mike Amundsen ([@mamund](https://twitter.com/mamund)), Mike Kelly ([@mikekelly85](https://twitter.com/mikekelly85)), Steve Klabnik ([@steveklabnik](https://twitter.com/steveklabnik)), Kevin Swiber ([@kevinswiber](https://twitter.com/kevinswiber)), Jørn Wildt ([@JornWildt](https://twitter.com/JornWildt)), and Markus Lanthaler ([@MarkusLanthaler](https://twitter.com/MarkusLanthaler)), at [API Craft Detroit](http://api-craft.org/) next week. I wanted to go into the panel with a snapshot, and at least a minimal understanding of each of the panelists. This is kind of an all-star panel of hypermedia experts, so I need to at least bump up my understanding of what they are contributing to the API space, and who they are, beyond what I know from my own interactions with these API leaders.  
  
As I do with all of my research, I wanted to share my work with you, my reader. So, first up is Mike Amundsen. I'm very aware of Mike's presence in the space, but after doing just a couple hours of refresh on what he's been up to, I'm blown away by the leadership he has brought to how we communicate with APIs. 

Let's dive in, here is the outline of my research into Mike's work:  
  
**Mike Amundsen**

**Title -** Director of API Architecture, [API Academy](http://www.apiacademy.co/) at [CA Technologies  
](http://www.ca.com/us/default.aspx)**Mission -** Improve the quality and usability of information on the Web.

*   **Blogs**
    *   **Personal** - [http://amundsen.com/blog/](http://amundsen.com/blog/) 
    *   **Work** - [http://www.layer7tech.com/blogs/index.php/author/mikea/](http://www.layer7tech.com/blogs/index.php/author/mikea/)
*   **Twitter** \- [https://twitter.com/mamund](https://twitter.com/mamund)
*   **Blog** \- [http://amundsen.com/blog/](http://amundsen.com/blog/)
*   **Github** \- [https://github.com/mamund](https://github.com/mamund)
*   **LinkedIn** \- [http://linkedin.com/in/mamund](http://linkedin.com/in/mamund)

**Highlights:**

*   we need to ely on hypermedia formats
*   focusing on high degree of shared understanding
*   significant contributions to API space with Collection+JSON, Uber, and ALPS
*   teaching us to communicate in a structured way

Mike brings a significant amount of work to the API sector. When you look at Mike's work, you realize how much time he has given to the sector. I picked three significant contribiutions to focus on for my panel, and ongoing research.

* * *

**Collection+JSON**

Collection+JSON is a JSON-based read/write hypermedia-type designed to support management and querying of simple collections.  
  
**Key Links:**

*   Definition - [http://amundsen.com/media-types/collection/](http://amundsen.com/media-types/collection/) 
*   Github - [https://github.com/collection-json](https://github.com/collection-json) 
*   Media Type - [http://www.iana.org/assignments/media-types/application/vnd.collection+json](http://www.iana.org/assignments/media-types/application/vnd.collection+json)

**Stories:**

*   Collection+JSON Primer - [http://schinckel.net/2012/03/10/collection%2Bjson-primer-(and-comments)/](http://schinckel.net/2012/03/10/collection%2Bjson-primer-\(and-comments\)/)

**Discussion:**

*   Google Group - [https://groups.google.com/forum/?fromgroups=#!forum/collectionjson](https://groups.google.com/forum/?fromgroups=#!forum/collectionjson) 
*   Stack Overflow - [http://stackoverflow.com/questions/tagged/collection-json](http://stackoverflow.com/questions/tagged/collection-json)

* * *

**UBER**

The Uber message format is a minimal read/write hypermedia type designed to support simple state transfers and ad-hoc hypermedia-based transitions. This document describes both the XML and JSON variants of the format and provides guidelines for supporting Uber messages over the HTTP protocol.  
  
**Links:**

*   Definition - [https://rawgit.com/mamund/media-types/master/uber-hypermedia.html](https://rawgit.com/mamund/media-types/master/uber-hypermedia.html) 
*   Twitter - [http://twitter.com/uberhypermedia](http://twitter.com/uberhypermedia) 

**Goals:**

*   Keep the message structure as lean as possible. 
*   Support all the H-Factors in hypermedia controls. 
*   Be compatible with multiple protocols (e.g. HTTP, CoAP, etc.) 
*   Maintain fidelity for more than one base message format (XML, JSON, etc.)

**Stories:**

*   [Uber Hypermedia - Minimalism on the Web](http://amundsen.com/blog/archives/1151)
*   [UBER - A "Uniform Basis for Exchanging Representations" on the Web](https://www.linkedin.com/today/post/article/20140310045545-43343567-uber-a-uniform-basis-for-exchanging-representations-on-the-web UBER:)
*   [A New Hypermedia Format for APIs](http://www.infoq.com/news/2014/05/uber-hypermedia)

**Discussion:**

*   API Craft - [https://groups.google.com/forum/#!topic/api-craft/0dEYvFLLURU](https://groups.google.com/forum/#!topic/api-craft/0dEYvFLLURU) 
*   Google Group - [https://groups.google.com/forum/#!forum/uber-hypermedia](https://groups.google.com/forum/#!forum/uber-hypermedia)

* * *

**ALPS (**Application-Level Profile Semantics)

The purpose of Application-Level Profile Semantics (ALPS) is to document the application-level semantics of a particular implementation. This is accomplished by describing elements of response representations for a target media type. For example identifying markup elements returned (i.e. semantic HTML ala Microformats) and state transitions (i.e. HTML.A and HTML.FORM elements) that advance the state of the current application.  
  
**Links:**

*   Website - [http://alps.io/](http://alps.io/) 
*   Definition - [http://amundsen.com/hypermedia/profiles/](http://amundsen.com/hypermedia/profiles/) 
*   Github - [https://github.com/alps-io/](https://github.com/alps-io/) 
*   Twitter - [https://twitter.com/alps\_io](https://twitter.com/alps_io)

**Goals:**

*   Design a document format for describing hypermedia interfaces for use in public distributed network applications. 
*   Discover Web developers' common assumptions when building Web client and server applications. 
*   Explore the challenges of designing and implementing client and server applications for the Web that can independently evolve over time.

**Stories:**

*   [Hypermedia and Web API. Design brain dump and samples](http://codebetter.com/glennblock/2012/01/08/hypermedia-and-web-api-design-brain-dump-and-samples/)
*   [Building the rstat.us API: Choices and challenges](https://practicingruby.com/articles/building-the-rstatus-api)
*   [Product API With Blueprint, RAML And Swagger](http://apievangelist.com/2014/03/08/hello-world-product-api-with-blueprint-raml-and-swagger/)

**Videos:**

*   Generic Hypermedia and Domain-Specific APIs: RESTing in the ALPS - [http://www.infoq.com/presentations/web-api-alps](http://www.infoq.com/presentations/web-api-alps)

**Talks:**

*   RESTing in the ALPS - [http://www.slideshare.net/rnewton/resting-int-he-alps](http://www.slideshare.net/rnewton/resting-int-he-alps)

**Discussion:**

*   Google Group - [https://groups.google.com/forum/#!forum/alps-io](https://groups.google.com/forum/#!forum/alps-io)

* * *

Beyond Collection+JSON, UBER, and ALPS, Mike is pretty accomplished when it comes to authoring books on the subject, speaking, and even producing his own event.

**Books:**

*   RESTful Web APIs
    *   [http://shop.oreilly.com/product/0636920028468.do](http://shop.oreilly.com/product/0636920028468.do)
    *   [http://restfulwebapis.com/](http://restfulwebapis.com/)
    *   [https://twitter.com/RWABook](https://twitter.com/RWABook)
*   Building Hypermedia APIs with HTML5 and Node
    *   [http://shop.oreilly.com/product/0636920020530.do](http://shop.oreilly.com/product/0636920020530.do)

**Videos:**

*   InfoQ -[http://www.infoq.com/author/Mike-Amundsen](http://www.infoq.com/author/Mike-Amundsen) 
*   YoutTube - [https://www.youtube.com/results?search\_query=Mike+Amundsen+API](https://www.youtube.com/results?search_query=Mike+Amundsen+API)

**Events:**

*   RESTFest -[http://restfest.net/](http://restfest.net/)

I'm not posting all of this information just so I can share my research, it is also because Mike is a leader in the API space, and I want to better understand the role he plays, while also helping you understand along the way. While I learned a lot through this process, I will also use it as a reference for my panel at API Craft, and for other stories I write in the future.

I will also be adding Collection+JSON, UBER, and ALPS as tools in my [hypermedia API research](http://hypermedia.apievangelist.com). I could spend days going through this research, but I also have five other hypermedia API experts to profile, so I'm going to move on to the others, and come back to my profile of Mike Amundsen in the future to continue my hypermedia education.