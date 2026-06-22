---
published: true
layout: post
title: Increasingly People’s Experience with APIs Are Only Using Internal APIs
date: 2025-04-07T09:00:00.000Z
tags:
  - Governance
  - Rules
  - Exceptions
  - Feedback Loops
image: https://kinlane-images.s3.amazonaws.com/shared/leaflets-of-the-russian-revolution-vkJ5dpm0bK2Gn.jpg
---
For a number of years between 2010 and 2020 when people told stories about APIs, they almost always were talking about public APIs. Even when you talked about internal APIs, people assumed you were talking about public APIs. Upon reviewing a lot of the rhetoric around APIs and API specifications in service of AI lately there is a shift in the other direction where you get the feeling that the author is only talking about internal APIs and never has actually had to produce or use a publicly available API. There are several tells you can use to identify that an API story is written within and about internal APIs, without much exposure and thinking about API access outside the firewall, while generally wielding the API acronym without any clear distinction or acknowledgement around the access and control over the API. 

- **Authentication** - The technical details around authentication are absent or glossed over.
- **Authorization** - The business details found authorization and access control are missing.
- **Security** - The security of APIs are not a concern and getting access is most important. 
- **Rate Limits** - Rate limits are purely a light technical need, nothing you need to worry about.
- **Onboarding** - Onboarding will be easy and everyone will just get, nothing to worry about.
- **Licensing** - The legal side of things are non-existent because you’ve never even thought about.

All APIs should be developed with zero-trust in mind. All APIs should be explicit about their access. All APIs should be developed in a way that they can quickly be made available externally for partners, for use in 1st-party applications, or even opened up for 3rd-party consumption. When you are reading blog posts and marketing for API services, tooling, and specifications that are light in these areas, you should assume they are only talking about internal APIs, and are likely unaware of the wider world of APIs. In the gold-rush for getting at your valuable digital resources and capabilities in the age of artificial intelligence, the frontline of storytellers tend to young, eager, but mostly unaware of the messiness of the wider world of API integrations—-this is by design.

