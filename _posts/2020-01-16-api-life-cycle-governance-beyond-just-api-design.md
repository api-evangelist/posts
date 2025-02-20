---
published: true
layout: post
title: API Life Cycle Governance Beyond Just API Design
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/braceros-domingo-ulloa-working-waterfront-2.jpg
author:
  name: kinlane
tags:
  - Governance
  - Lifecycle
---
When you hear enterprise organizations talk about [API governance](http://governance.apievangelist.com/) they usually mean the governance of API design practices across the organization. This is the place where everyone starts when it comes to standardizing how APIs are delivered. It makes sense to start here because this is where the most pain is experience at scale when you try to put APIs to work across a large enterprise organization. Even if all APIs and micro services are REST(ish), there are so many different ways you can deliver the details of an API--you might as well be using APIs from different companies when trying to put APIs developed across different teams to use in a single application. Making API design the first stumbling block teams consider when planning API governance, and something that would make a meaningful impact on how APIs are delivered.

After working with enterprise organizations who have been on their API journey for 5+ years I have begun to see API governance move beyond API design, and begin to look at other stops along the API life cycle, and work to standardize other critical elements. Here are some of the next steps I see enterprise organizations taking when it comes to getting a handle on API governance across teams:

*   **Documentation** - Making sure everyone is using the same services and tooling for documenting APIs making sure the most common elements are present, and all APIs are well defined.
*   **Monitoring** - Requiring all teams monitor APIs and report upon the available of each API, establishing a common monitoring and reporting practice that is consistent across all development teams.
*   **Testing** - Standardizing tooling and approaches to API testing, indexing and cataloging the tests that are in place, and beginning to measure the test coverage for any API in production.
*   **Performance** - Looking at the speed of APIs and making sure that all APIs are benchmarked as soon as they are developed, then measured against that across multiple regions and clouds.
*   **SDKs** - I am seeing more guidance for how API SDKs should be developed ensuring that all SDKs, code libraries, and snippets are generated and developed, providing a consistent client front.

These are the main areas I see enterprise organization moving into as they begin to nail down some of the nuances of API design governance and getting teams on board with healthy practices put in place. When I say API governance most people either don't understand exactly what it actually means, or they purely think it is all about the design of the API. Very few organizations are seeing beyond API design when you talk about governance efforts across teams. I am working to gather more examples of this in action, but sadly most of the conversation I am having are with enterprise teams developing internal APIs, and without approval, or them actively publishing stories I don’t have much to share.

As I do with all of my work, I publish anything I curate on governance, as well as anything I write on the subject to [my API governance research subdomain](http://governance.apievangelist.com/). If you have any API governance practices you have in place across your teams I’d love to hear from you, even if I can’t share the stories publicly. It helps to understand the successes and challenges teams face when it comes to standardizing how teams are delivering APIs. I predict that API governance will continue to be one of the number one conversations I am having in 2020 with enterprise organizations.