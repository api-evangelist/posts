---
layout: post
title: An Introduction To Github For API Providers
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/github_guides.png
atomdate: 2017-04-10T22:00:00.000Z
tags:
  - Github
  - Providers
  - Git
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/github_guides.png)](https://guides.github.com/)

I have had a number of requests from folks lately to write more about Github, and how they can use the social coding platform as part of their API operations. As I work with more companies outside of the startup echo chamber on their API strategies I am encountering more groups that aren't Github fluent and could use some help getting started. It has also been a while since I've thought deeply about how API providers should be using Github so it will allow me to craft some fresh content on the subject.

**Github As Your Technical Social Network**  
Think of Github as a more technical version of Facebook, but instead of the social interactions being centered around wall posts, news links, photos, and videos, it is focused on engagement with repositories. A repository is basically a file folder that you can make public or private, and put anything you want into it. While code is the most common thing put into Github repositories, they often contain data file, presentations, and other content, providing a beneficial way to manage many aspects of API operations.

**The Github Basics**  
When putting Github to use as part of your API operations, start small. Get your profile setup, define your organization, and begin using it to manage documentation or other simple areas of your operations--until you get the hang of it. Set aside any pre-conceived notions about Github being about code, and focus on the handful of services it offers to enable your API operations.

*   **Users** \- Just like other online services, Github has the notion of a user, where you provide a photo, description, and other relevant details about yourself. Avoid making a user accounts for your API, making sure you show the humans involved in API operations. It does make sense to have a testing, or other generic platform Github users accounts, but make sure your API team each have their own user profile, providing a snapshot of everyone involved.  
*   **Organizations -** You can use Github organizations to group your API operations under a single umbrella. Each organization has a name, logo, and description, and then you can add specific users as collaborators, and build your team under a single organization. Start with a single repository for your entire API operations, then you can consider the additional organization to further organize your efforts such as partner programs, or other aspects of internal API operations.
*   **Repositories -** A repository is just a folder. You can create a repository, and replicate (check out) a repository using the Github desktop client, and manage its content locally, and commit changes back to Github whenever you are ready. Repositories are designed for collaborative, version controlled engagements, allowing for many people to work together, while still providing centralized governance and control by the designated gatekeeper for whatever project being managed via a repository--the most common usage is for managing open source software.
*   **[Topics](https://github.com/blog/2309-introducing-topics) -** Recently Github added the ability to label your repositories using what they call topics. Topics are used as part of Github discovery, allowing users to search using common topics, as well as searching for users, organizations, and repositories by keyword. Github Topics is providing another way for developers to find interesting APIs using search, browsing, and [Github trends](https://github.com/trending).
*   **[Gists](https://gist.github.com/)** - A GitHub service for managing code snippets that allow them to be embedded in other websites, documentation -- great for use in blog posts, and communication around API operations.
*   **[Pages](https://pages.github.com/)** - Use Github Pages for your project websites. It is the quickest way to stand up a web page to host API documentation, code samples, or the entire portal for your API effort.
*   **[API](https://developer.github.com/v3/) -** Everything on the Github platform is available through the Github API. Making all aspects of your API operations available via an API, which is the way it should be.

**Managing API Operations With Github**  
There are a handful of ways I encourage API providers to consider using Github as part of their operations. I prefer to use Github for all aspects of API operations, but not every organization is ready for that--I encourage you to focus in these areas when you are just getting going:

*   **Developer Portal -** You can use Github Pages to host your API developer portal--I recommend taking a look at [my minimum viable API portal definition](http://portal.minimum.apievangelist.com/) to see an example of this in action.
*   **Documentation** - Whether as part of the entire portal or just as a single repository, it is common for API providers to publish API documentation to Github. [Using solutions like ReDoc](https://github.com/Rebilly/ReDoc), it is easy to make your API documentation look good, while also easily keeping them up to date.
*   **Code Samples w/** Gists **-** It is easy to manage all samples for an API using Github Gists, allowing them to be embedded in the documentation, and other communication and storytelling conducted as part of platform operations.
*   **Software Development Kits (SDK) Repositories -** If you are providing complete SDKs for API integrations in a variety of languages you should be using Github to manage their existence, allowing API consumers to fork and integrate as they need, while also staying in tune with changes.
*   **OpenAPI Management** \- Publish your [APIs.json](http://apisjson.org) or [OpenAPI](https://www.openapis.org/) definition to Github, allowing the YAML or JSON to be versioned, and managed in a collaborate environment where API consumers can fork and integrate into their own operations.
*   **Issues** - Use [Github issues](https://guides.github.com/features/issues/) for managing the conversation around integration and operational issues.
*   **Road Map** - Also use **Github Issues** to help aggregate, collaborate, and evolve the road map for API operations, encouraging consumers to be involved.
*   **Change Log** - When anything on the roadmap is achieved flag it for inclusion in the change log, providing a list of changes to the platform that API consumers can use as a reference.

Github is essential to API operations. There is no requirement for Github users to possess developer skills. Many types of users put Github to use in managing the technical aspects of projects to take advantage of the network effect, as well as the version control and collaboration introduced by the social platform. It's common for non-technical folks to be intimidated by Github, ad developers often encourage this, but in reality, Github is as easy to use as any other social network--it just takes some time to get used to and familiar it.

If you have questions about how to use Github, feel free to reach out. I'm happy to focus on specific uses of Github for API operations in more detail. I have numerous examples of how it can be used, I just need to know where I should be focusing next. Remember, there are no stupid questions. I am an advocate for everyone taking advantage of Github and I fully understand that it can be difficult to understand how it works when you are just getting going.