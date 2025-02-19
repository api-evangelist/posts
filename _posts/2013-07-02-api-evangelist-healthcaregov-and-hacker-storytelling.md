---
layout: post
title: API Evangelist, Healthcare.gov and Hacker Storytelling
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-github.jpg
author:
  name: kinlane
tags:
  - API Evangelist
  - Healthcare
  - Storytelling
  - Evangelist
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github.jpg)](http://github.com)

I've been slowly evolving API Evangelist from a single site, into an interconnected network of individual API projects. API Evangelist started as a research project back in July 2010, making its shift to be a network of smaller, inter-connected research projects is fitting.

While API Evangelist currently still runs on my home brew CMS, shortly it will finish the migration to completely run on Github, making it merely a "hollywood front" for what is c[urrently 37+ API related, living research projects](http://www.apievangelist.com/2013/07/01/the-expanding-api-evangelist-network/) of mine.

I call my evolving approach to projects, [Hacker Storytelling](http://hackerstorytelling.com "Hacker Storytelling"). I made up the name, but the approach is borrowed from several other philosophies which starts with concept of data journalism, but then has also evolved from conversations last year in Washington DC from very smart folks including Ben Balter ([@BenBalter](https://twitter.com/BenBalter)), Gray Brooks ([@gbinal)](https://twitter.com/gbinal), and the very forward thinking work of the [Development Seed](http://developmentseed.org/) team. Then of course I add my own style and approach to what I've learned.

As I move my own network of research projects to run on Github, using this new approach, I'm also seeing other positive signs coming out of Washington on the same front. First the [White House Open Data Policy](http://project-open-data.github.io/) released in May was created and published on Github, but then I just finished reading [Healthcare.gov: Code Developed by the People and for the People, Released Back to the People](http://www.theatlantic.com/technology/archive/2013/06/healthcaregov-code-developed-by-the-people-and-for-the-people-released-back-to-the-people/277295/), by Alex Howard ([@digiphile](https://twitter.com/digiphile)). His post outlines how the United States Department of Health and Human Services (HHS)launched Healthcare.gov to support the Affordable Care Act -- AKA "Obamacare". The website was built iteratively, in public, over the last couple months and it was completely done using Github, using a similar approach to my Hacker Storytelling. Seeing all of this, really makes me hopeful for my next year in Washington.

Alex does an amazing job of telling the story behind Healthcare.gov, I highly recommend reading his post. After reading, I wanted take a fresh walk through my approach, and talk about the importance of this new approach managing my projects, that I think will change the web, how we govern and conduct business.

My personal approach is derived from a need to quickly turn research into public stories, allowing people to take my work and put it to use in their worlds. Since my mission is to educate the masses of the benefits of APIs, and reach the largest audience possible, I needed a new approach that was fast, efficient and scaled--the result is Hacker Storytelling.

To manage my projects and tell my stories, I'm using a handful of building blocks:

*   Blog Posts
*   Static Pages
*   Widgets
*   Open Data
*   Presentations

The best part about these building blocks is that they only use, lightweight, open protocols:

*   HTML
*   CSS
*   JavaScript
*   JSON

Each project becomes an open source repository, that I host at Github. Some projects start as private repositories, but if possible **EVERYTHING** becomes public. If you are unfamiliar with how Github and [Git](http://en.wikipedia.org/wiki/Git_\(software\)) works, Github is a cloud service that provides version control for code. However since code is usually just files, you can apply the same open source code process to web site or documents you can build with HTML, CSS, JavaScript and JSON.

I don't know about you. But I can build some pretty fast websites, prototype applications and even full blown production apps in HTML, CSS, JavaScript and JSON. If you want to see the extreme version of what I'm doing, head over to [Development Seed](http://developmentseed.org/) and see what they are up to. They are producing some mind blowing projects, using this approach

The really powerful thing about all of this, is this can run anywhere. You can run the [same configuration of site on Amazon S3](http://www.allthingsdistributed.com/2011/08/Jekyll-amazon-s3.html), Dropbox, or anywhere you can setup hosting. This isn't just something for alpha geeks, look closer at the Amazon S3 example, that is the CTO of Amazon running his blog using this approach.

**_So why am I doing this?_** There are so many reason, and to help me wrap my head further around them, I thought I would take a crack at listing as many as I could.

**Decoupling**  
This approach to my research and storytelling has allowed me to decouple the individuals pieces of my original API Evangelist work, which after three years has become very bloated. I have a lot of content and structured data about the API industry. This has allowed me to decouple one very big project into 35 smaller projects, with the potential for many more in the future.

**Planning**  
When I kick off a new project, I start off the planning process with a new Github repository, with a fresh README file. Then using the native Github features I can make the project public or private and invite other people to join me in the planning process. The README quickly becomes an outline, giving a backbone to my project.

**Research**  
Once a project has been kicked off, I kick of researching and publishing all notes, bookmarks and other relevant assets to Github after each session. Pretty soon there is a wealth of knowledge located within the repository, with every step of the way versioned, allowing me to manage additions, removals and potential conflicts.

**Collaboration**  
Github has made the process of developing open source software, a social adventure. You can create repositories within individual Github accounts or underneath the umbrella of an organization. You can invite any other Github user to participate in the process, using open source software process, built into Github. Once you make public, you can also add [Disqus](http://disqus.com/) and solicit public comments, if if so desired.

**Versioned**  
[Git](http://en.wikipedia.org/wiki/Git_\(software\)) is the central core of Github. Git was developed by Linus Torvalds to help him manage the developed of the open source operating system, Linux. Every document that is submitted to a Git(hub) repository, is versioned, allowing you to manage changes, accept contributions and even roll back to earlier versions when necessary. Git is well suited to open source, collaborative software development, but also works well for many other types of projects as well.

**Storytelling**  
My approach, that of [Healthcare.gov](http://Healthcare.gov), and Development Seed all uses [Jekyll](/admin/blog/design.apievangelist.com) alongside each project deployment. Jekyll is a simple, blog aware static site framework that runs very well on Github. Jekyll gives you a very simple, but powerful way to manage your pages as well as maintain a blog. This has changed my view of what a blog is for, making it as simple as four chronological journal entries for a single project or powering the 800+ blog entries of API Evangelist. Jekyll was actually developed by Tom Preston-Warner, the founder of Github, but the framework is so univeral it can run anywhere such as Amazon S3 and Dropbox.

**Transparency**  
While this approach is not for everyone. I enjoy making projects open by default from birth to death. Hosting on Github, allowing it to be licensed openly and allowing collaboration and public input makes for a healthier overall project. Transparency can let the sunlight into any process, providing a sort of disinfectant to the overall process. Something I feel is essential in all my work.

**Living Projects**  
Most of the projects I embark on will be living, allowing me to keep updated weekly, monthly or as often as necessary. Because I can open up projects to collaborators and public feedback, it opens up my work to even live beyond the attention I can give the project. I can even transfer ownership and administration of a project to someone else, or they can fork my work and take in an entirely new direction, breathing life into my work I could never imagine.

**Portable**  
Each Github repository can be forked or downloaded as a zip file. Allowing the entire project to be moved, unpacked and setup at a new location--not in hours but often in minutes. This type of portability is essential in this crazy, cloud based world we've created for ourselves. It also allows me to easily deploy a project within the firewall of a company or government agency.

**Syndication**  
Github possesses one of the most powerful syndication tools, which is called "forking". Any Github user can fork one of my projects and set to work making it their own. Adding to it, cleaning it up and when appropriate make "pull requests" back to the original project, which allows me potentially to accept their work back into the central copy. After I add common social sharing tools, and you consider the native social features built into Github, this approach offers unlimited potential for syndication.

**Analytics**  
Each project I fire up, gets Google Analytics added. Allowing me to track all traffic and usage of my projects. Beyond the page views, visits and other common metrics, Github gives me a whole other layer of metrics for tracking how many favorites, forks, downloads, commits and other vital data about how projects are doing.

**Common Formats**  
Every project I build uses HTML, CSS, JavaScript and JSON. All of these common formats can be opened by simple text editors and do not require any proprietary software to create, access or edit. HTML and CSS is very accessible to many, and depending on how tech savvy you are, JavaScript and JSON are pretty easy to wield, with a little training.

**Open By Default**  
Everything is open by default. Publicly available, collaboration, open formats and open licenses go a long way in setting the right tone for a project. Open by default takes away a lot of stress for me, and opens projects up for the widest possible collaboration, re-use, distribution and ultimately attribution to me and my work.

**Machine Readable By Default**  
All data is stored via simple, lightweight JSON files. Every listing, chart, graph within a project has a JSON data source. The entire contents of a project can have a simple JSON manifest, allowing programmatic indexing of a project's content and data sources. Machine readable by default, using JSON has changed the way I look at data management.

**Scalable**  
I do not have to scale the infrastructure for any my projects. I've run IT infrastructure for years and very capable in doing this for myself, but I don't have time. All projects automatically are scaled as needed, to meet, not just my projects demands, but everyone on the platform. For me, the backend has been reduced to my internal systems and a handful of APIs. Everything that is public is automatically scaled in the clouds.

**Speed**  
The usage of simple, light-weight open formats like HTML, CSS, JavaSCript and JSON. Plus all the benefits of the Github platform. Equal a pretty sweet opportunity for fast loading web pages. Everything is easily cached, providing for very fast page loads in addition to scalability. If projects are hosted on Amazon S3, there are additional opportunities for caching and distribution of content to regions around the globe using CloudFront.

**Security**  
Along with the need to run back-end infrastructure, much of the concern with securing sites and applications goes away. I'm pretty confident that Github, Amazon and Dropbox have fairly decent security teams and with all projects being static sites and apps, using open formats, much of the opportunity for exploitation has been removed.

**Low Cost**  
Github repositories are free, if they are public. Another incentive for being open by default. Even if you pay for repositories with Github, the costs are dollars each month. Amazon and Dropbox are both extremely affordable, further evolving past models for web hosting or rolling out costly infrastructure for projects. The cloud has enabled entirely new approaches deploying web sites, applications, as well as content and data oriented projects.

**Lifecycle**  
The entire life cycle of my projects has changed for the positive. I can start new projects, on a whim. Fire up new repository and generate an outline during planning stages, invite all participants and have a public site up in minutes. Some projects I work on for hours each week, others I give just minutes a month to make sure they have my latest research published. I can easily walk away from projects, passing the torch and potentially keeping a project alive. Projects can be forked, downloaded and evolved, adding layers to the lifecycle that are totally out of my control. The potential for my research and stories to reach a larger audience has grown significantly, extending both the reach and the life of my work.

**Web Literacy**  
When this approach is employed, each individual involved receives a healthy dose of web literacy. Introducing them to essential building blocks of our growing digital world, like DNS, HTML, CSS, JSON, Git and more. The portability of this approach allows you to truly own your projects, enabling you to deploy them wherever you choose. Web literacy is critical in this day and age, for everyone.

**Empowering**   
For me, Hacker Storytelling has empowered me to do more research, tell more stories and reach a wider audience. I've only been doing it for six months. At first, all of this can seem daunting to learn, but once you get a grasp of all the building blocks at play, it can be very empowering. It is something non-developers can employ to solve the problems they face everyday, in a way that encourages collaboration and even programmatic integration with other systems or projects. It has the potential to empower each of us to innovate and work together in new ways.

**Conclusion**  
Hacker Storytelling is my version of this new way to build sites and apps. Development Seed and the HHS are developing their own approach as well. While there are lot of common building blocks, each individual or organization can develop their own style and set of tools and building blocks that work best for them.

That is 21 reasons I'm moving my projects to this new approach to publishing sites and applications on the Internet. I'm choosing to do this because it makes me more efficient at my research and storytelling, which is essential to my career.

I'm hoping to share my approach with as many people as I can. I'm watching my girlfriend Audrey discover how easy it is to setup new projects, and publish her work there. Setting everything I listed above into motion for her world, developer her own approach.

I don't think this methodology is for everyone, but if you are interested I'm happy to share. I will be adding more widgets and tools to my [Hacker Storyteling](http://hackerstorytelling.com) project. While also point you to other similar implementations like [HealthCare.gov](http://HealthCare.gov), and people who are innovating with this approach like [Development Seed](http://developmentseed.org/).