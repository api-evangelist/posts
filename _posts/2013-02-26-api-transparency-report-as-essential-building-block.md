---
layout: post
title: API Transparency Report as Essential Building Block
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/tag-cloud-transparency-report.jpg
author:
  name: kinlane
date: 2013-02-26T19:13:13.000Z
tags:
  - Transparency
---
After reading about [Google’s release of their transparency report last month](http://googleblog.blogspot.com/2013/01/transparency-report-what-it-takes-for.html), I decided I would be [addding API transparency reports to my list of essential building blocks](http://apivoice.com/2013/01/23/making-transparency-reports-standard-operating-procedure/) for API owners. Since I wrote that, I’ve had a great post from EFF also [stating that its time for transparency reports to become the new normal](https://www.eff.org/deeplinks/2013/01/its-time-transparency-reports-become-new-normal).  Where the EFF outlines the illness in our current approach:

> _When you use the Internet, you entrust your thoughts, experiences, photos, and location data to intermediaries — companies like AT&T, Google, and Facebook. But when the government requests that data, users are usually left in the dark._

In the United States, companies are not required by law to alert their users when they receive a government request for their data, and in some circumstances, they are explicitly prohibited from doing so. So it is up to us, the users to join organizations like the EFF and let all online service providers understand the importance of transparency reports becoming default operating procedure.

Currently, we are only seeing transparency reports from providers like Google, DropBox, LinkedIn, Twitter and a handful of other service providers. While I feel that all companies that run on users data should provide transparency reports, I’m going to focus on making sure it is standard operating procedures with companies that deliver APIs.

As a starting point for my API transparency report building block, I’m using the [letter that was drafted by concerned privacy advocates who are calling for Microsoft to issue a transparency report on Skype](http://www.skypeopenletter.com/), which it purchased in 2011 for $8.5 billion.

This letter states that:

> _Skype is a voice, video and chat communications platform with over 600 million users worldwide, effectively making it one of the world’s largest telecommunications companies. Many of its users rely on Skype for secure communications—whether they are activists operating in countries governed by authoritarian regimes, journalists communicating with sensitive sources, or users who wish to talk privately in confidence with business associates, family, or friends._

The Skype effort provides a beginning list of items all transparency reports should provide:

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/electronic-frontier-foundation/electronic-frontier-foundation-logo.gif)](https://www.eff.org/)

1.  Quantitative data regarding the release of user information to third parties, disaggregated by the country of origin of the request, including the number of requests made by governments, the type of data requested, the proportion of requests with which it complied — and the basis for rejecting those requests it does not comply with.
2.  Specific details of all user data a company currently collects, and retention policies.
3.  The companies best understanding of what user data third-parties, including network providers or potential malicious attackers, may be able to intercept or retain.
4.  Documentation regarding the current operational relationship between the company with and other third-party licensed users of company technology, including the companies understanding of the surveillance and censorship capabilities that users may be subject to as a result of using these alternatives.
5.  A company’s interpretation of its responsibilities under the Communications Assistance for Law Enforcement Act (CALEA), its policies related to the disclosure of call metadata in response to subpoenas and National Security Letters (NSLs), and more generally, the policies and guidelines for employees followed when a company receives and responds to requests for user data from law enforcement and intelligence agencies in the United States and elsewhere.

If your company is going to provide a service that users depend on, one that retains their personal data in any way--you should have a transparency report that educates users about how and what any government is accessing and using information about them.

This applies to any data collected or transmitted via APIs from a platform via 3rd party platforms and services. APIs owe it to end users to provide insight into how their data is being used by 3rd party application developers via oAuth, the same insight should be provided regarding how government organizations is accessing and using data as well.