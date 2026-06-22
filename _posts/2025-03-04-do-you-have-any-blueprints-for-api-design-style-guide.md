---
published: true
layout: post
title: Do you have any blueprints for API design style guide?
date: 2025-03-04T09:00:00.000Z
tags:
 - APIs.json
 - OpenAPI
 - JSON Schema
 - Strategies
 - Policies
 - Experiences
 - Properties
image: https://kinlane-images.s3.amazonaws.com/shared/eugenics-oxford-old-building.jpg
--- 
I’ve been down the API style guide rabbit hole several times. A couple times drunk and a couple times sober. I ended up with a whole bunch of assumptions that I wanted to validate on the ground within the enterprise—this is one of the reasons I spent a year at Bloomberg leading API governance. So, after all of that, this is where I stand on the subject. While I think API style guides can be worthy work, after absorbing all of the style guides out there, working with several enterprises to produce, maintain, and evolve style guides—I am just not a big believer that it is a worthwhile street to continue driving down, and here is why.

- **One-Size Fits All** - There is not a one-side fits all design for APIs, even within the enterprise.
- **Style Guide Graveyard** - I see many GitHub, Confluence, PDF, and Google Docs go dormant.
- **Not Grounded** - The style guides may or may not be grounded using API governance rules.
- **Scope Imbalance** - Style guides from API level to operational to business and back again.
- **Extra Work** - It just creates a lot of extra work to maintain and rarely a budgetary priority.

Honestly I am not sure where to go from here, but the path I’ve taken is to begin at the ground-level with the artifacts and rules, but then focusing on what is being governed (or styled I guess) based upon each artifact. [I regularly gather rules from GitHub and the open web, plucking interesting ones from the style guides and deployed Spectral or Vacuum ruleset I find littered across GitHub repositories](https://rules.apievangelist.com/). I am looking to make sense of these rules based upon the artifact they apply to, so I have them organized by spec at the moment.

- [**APIs.json**](https://rules.apievangelist.com/apis-json/) - Approach the design of API operations and mapping things out to understand where everything is.
- [**OpenAPI**](https://rules.apievangelist.com/openapi/) - Approaching the design of Apis and mapping out the existing baseline as well as the future state.
- [**JSON Schema**](https://rules.apievangelist.com/json-schema/) - Separating out the schema concerns and applying separate but overlapping design considerations.

The reason I do this is because I am reverse engineering what everyone else is doing with API governance using their OpenAPI. But then I noticed most people are in denial or just unaware they are also governing JSON Schema which has wider design and governance considerations outside just the API—because we also need to define and validate our entire API operations with JSON Schema. Third, you regularly see operational level considerations in style guides telling you that they need to have documentation, mock servers, SDKs, and other things — which technically is an API discovery issue, and suitable for APIs.json. 

Basically I shook the engineering etch-a-sketch for API governance, which is something that began to erode my faith in the existing API style guide approach. I still think it has value when done well, especially when grounded by Spectral and Vacuum rules, but honestly I don’t buy that enterprise governance will properly invest. And if I can’t confidently say it is benefitting things, why the hell are we doing them? What I am more interested in is aligning everything I just talked about with the wider enterprise organization, and balance with what product owners are needing using the following.

- [**Strategy**](https://strategies.apievangelist.com/) - Aligning and organizing all of those rules for listing APIs.json, OpenAPI, and JSON Schema with high level business strategy.
- [**Policies**](https://policies.apievangelist.com/) - Aligning and organizing all of those rules for listing APIs.json, OpenAPI, and JSON Schema with mid-level product strategy.
- [**Experience**](https://experiences.apievangelist.com/) - Aligning and organizing all of those rules for listing APIs.json, OpenAPI, and JSON Schema with low-level developer experience.
- [**Properties**](https://properties.apievangelist.com/) - Being explicit abouit what the properties of the experiences are that matter on the ground fllor of API operations, ensuring we are optimizing and governing what matters.

API style guides just don’t describe what I feel needs accomplishing. They are usually a narrow slice of what is needed with random and haphazard alignment with wider operations and business. Don’t get me wrong, I’ve seen organizations move closer to what I am talking about, but they damn sure ain’t publishing anywhere for anyone else to follow. Another important concern of mine at this moment, is that all of this work needs to be centrally defined, evolved, and published, but it also needs to be defined, evolved, and published in a federated manner, getting teams to buy-in and contribute. That is pretty much where I am at with my work, and would love any questions or thoughts about what portions of it need the most investment.



