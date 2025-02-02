---
layout: post
title: Thinking About An API Observability Stack
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/datadog_observability_dashboard.png
atomdate: 2016-10-25T18:00:00.000Z
tags:
  - Observability
  - Stack
---
I am learning about [observability](https://en.wikipedia.org/wiki/Observability) from reading Stripes [post on Veneur, a high performance and global aggregation for Datadog](https://stripe.com/blog/introducing-veneur-high-performance-and-global-aggregation-for-datadog). While the math of it all is over my head, the definition makes a lot of sense and provides me with a nice Venn diagram overlap across [several areas of my API research](http://apievangelist.com), including testing, monitoring, logging, analysis, and visualization.

[The Wikipedia definition for observability is](https://en.wikipedia.org/wiki/Observability):

_Formally, a system is said to be observable if, for any possible sequence of state and control vectors, the current state can be determined in finite time using only the outputs (this definition is slanted towards the state space representation). Less formally, this means that from the system's outputs it is possible to determine the_ behavior _of the entire system. If a system is not observable, this means the current values of some of its states cannot be determined through output sensors._

Stripe provides a great technical breakdown of the tools, services used to establish observability as part of their system operations, but I wanted to step back, and think about observability through a business and political lens. The business imperative for observability might seem clear, as you want as much visibility and awareness into your API operations as you possibly can, so you can provide a reliable level of service. I am thinking about the incentives for extending this observability beyond internal groups, to partners, developers, regulators, or the public--encouraging transparent observability.

This moves into [the area of API and algorithmic transparency you hear me ranting about regularly](http://apievangelist.com/2016/08/04/pushing-for-more-algorithmic-transparency-using-apis/), and t[he benefits APIs bring to the table when you apply in areas like policing and surveillance](http://apievangelist.com/2016/10/14/transparency-in-police-access-to-social-platforms-using-oauth-and-apis/), or other more regulated sectors of our society. When you take [the assertions applied as part of API testing and monitoring practices](http://apievangelist.com/2016/10/07/regulatory-api-monitoring-for-validating-algorithmic-assertions/), and you link them up to this observability stack definition, and open things up beyond just core technical groups, I think we are moving into new territory where we can begin to observe the real-time state of the systems that are increasingly making critical decisions in our lives.

I saw the potential for observability and awareness in the API layer back in 2010 with the [logging](http://logging.apievangelist.com), [analytics](http://analysis.apievangelist.com/), [visualizations](http://visualization.apievangelist.com/) aspects of early [API management](http://management.apievangelist.com/) solutions like [3Scale](http://3scale.net). In 2016, I'm thinking these benefits are going well beyond just the business of APIs, and can provide some of the critical transparency we are going to need to understand the behavior of increasingly complex corporate, institutional, and governmental systems, that in many cases we will have to be able to understand from the outside in using existing "output sensors".

In the future, we should be able to define any system as observable or not, when APIs are in play.