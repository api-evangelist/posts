---
published: true
layout: post
title: How Many APIs Does the Average Enterprise Have?
tags:
  - Metrics
  - Enterprise
  - Producing
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/uncle-sam-bagel-poppy-plain-boil.jpeg
---
I am trying to put together a simple API calculator to try and articulate the real-world business cost of doing or not doing APIs. It is a difficult target to try and pin down because APIs are so hard to see, most companies don’t know where all their APIs are, and service and tooling providers hold their cards close to their chest. Even with these challenges, I am determined to begin nailing down a baseline number and get to work gathering data in a more organized and beneficial way.

I dug through [Postman’s](https://www.postman.com/state-of-api/2024/), [Rapid’s](https://stateofapis.com/), [Imperva](https://www.imperva.com/resources/resource-library/reports/the-state-of-api-security-in-2024/), [Traceable](https://www.traceable.ai/2025-state-of-api-security), and [Salt’s](https://content.salt.security/state-api-report) API reports looking for numbers specifically on the average number of APIs in a company, and here is what I found.

- Rapid - Nearly 40% of the largest companies we surveyed reported having over 250 internal APIs. 
- Imperva - Average Number of API endpoints per account is 613.
- Traceable - 55% of organizations have at least 500 apis.
- Salt - 66% of respondents manage more than 100 APIs

There isn’t a number of APIs available in the Postman State of the API report, but they did break down access:

- 56% Private
- 26% Partner
- 18% Public

Postman likes to showcase the number of collections being in the millions, but even isolating this per company doesn’t do me much good, because there are many collections available for any given API. [Nordic APIs provides a nice laundry list including 46 million postman collections, 24,000+ APIs On ProgrammableWeb,  2 Million API Repositories On GitHub](https://nordicapis.com/20-impressive-api-economy-statistics/), which is fun to read, and good for page views, but doesn’t really get me any closer to solidly answering my question and building a real foundation.

While Googling AI does a good job of regurgitating the data I already have, and playing Captain Obvious like AI is so good at...

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/how-man-api-does-the-average-company-have.png" style="padding: 15px;">

While also stating the obvious — I am going to confidently say that EVERY company has an API, even if they are unaware of it — you publish a Google Sheet, and you have an API.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/does-every-company-have-an-api.png" style="padding: 15px;">

You can find echoes of the data from the reports above through Forbes, InfoWeek, TechCrunch, and other tech rags. The tech blogosphere is excellent at [manufacturing consent](https://en.wikipedia.org/wiki/Manufacturing_Consent), but sadly doesn’t get me exactly what I need. I think I will have to do a version of this, but then hopefully someday backfill it with actual data.

Next up, let’s ask AI, "how many APIs does the average company have?"

ChatGPT says:

- Average Number of APIs: A 2022 report by 451 Research found that enterprises have an average of 15,564 APIs in use. 
- Large Enterprises: For organizations with over 10,000 employees, the average increases to approximately 25,592 APIs.

Google Gemini says:

- The average number of APIs in use in enterprises is over 15,000. However, the exact number can vary depending on the size and complexity of the company.
- Organizations have an average of 613 API endpoints in production.

Claude Says:

- Small to Medium Businesses (SMBs) typically have around 10-30 APIs
- Large enterprises can have anywhere from 50 to 300+ APIs
- Companies like Google, Amazon, and Microsoft can have thousands of APIs

I am under the assumption that the 451 Research and the Salt Report are one and the same, but these answers give me some new top level numbers to add into the mix. Gemini was just regurgitating what we already know, and Claude seems magically different, but without any references it is hard to tell how magical. I guess it does move us down the road a bit, but in a still squinted kind of fuzzy way.

## What Can We Extrapolate?
There are a number of approaches taken here by vendors which aren’t very scientific, but let’s see what we can extrapolate to set a baseline for moving forward. I feel like this is the best I am going to find without gathering my own survey data from companies. 

My gut from these numbers and from my experience would say that a company with 500 employees likely has between 100-500 APIs. Let’s take the top end of what 451 Research and others allude to, that companies with over 10K employees have roughly 25K APIs, which is 2.5 APIs for every employee. I’d say this feels true to what I’ve seen, and I would confidently argue for the following numbers per employee.

- 1 to 1000 employees, you have .5 APIs per employee
- 1000 to 5000 employees, you have 1 APIs per employee
- 5000 to 10000 employees, you have 1.5 APIs per employee
- 10000+ employees, you have 2 APIs per employee

Granted, not every employee involved with work across the enterprise builds APIs, but the number of APIs is proportional to the size of the enterprise. I feel like I can confidently draw these lines in the sand based upon the API reports provided, as well as my experience working with enterprises. Sure, we can do better to actually gather the data needed in a more scientific, open-source, and non-vendor way, but in absence of that I set out to establish a baseline for the scope of the work we have on the table--this work does that for me.

The trouble with this definition is that it is purely a producer side view of things. How many APIs do you produce per employee or consume per employee will be another way I need to separate things, but this baseline for producing APIs is a damn good start. I think Postman’s separation between private, partner, and public is a critical way to peel this onion as well, but I will also need to think about that in terms of internal, 1st-party, and 3rd-party access to an API that a company has produced. As you can see, this stuff is complicated, but I am determined to distill things down into more calculable and understandable formulas, even if they aren’t perfect--I will take the heat. I need this baseline to be able to work back from when it comes to explaining the costs associated with standardizing (or not) your HTTP status codes and other common things we have API governance rules—this has given me this, which is something I predict will stabilize my API governance storytelling significantly.