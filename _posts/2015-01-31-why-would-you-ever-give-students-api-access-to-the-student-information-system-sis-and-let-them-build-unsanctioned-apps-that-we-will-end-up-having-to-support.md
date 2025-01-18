---
layout: post
title: >-
  Why Would You Ever Give Students API Access To The Student Information System
  (SIS), And Let Them Build Un-Sanctioned Apps That We Will End Up Having To
  Support?
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Support
  - Access
---
I went up to [California State University Channel Islands the other day to talk APIs with their tech team](http://apievangelist.com/2015/01/30/talking-apis-up-at-california-state-university-channel-islands/), and I was happy to find at least one strong API skeptic on the team. API skeptics also give me material for stories, so I thoroughly enjoy coming across them, and telling these stories is how keep polishing my argument for the next API skeptic encounter at campus IT, at the higher educational institutions that I visit.

During the discussion I was posed several interesting questions, and one of them was: why would you ever give students API access to the Student Information System (SIS), and let them build un-sanctioned apps that we will end up have to support?

**Family Educational Rights and Privacy Act (FERPA)**  
FERPA gives students the right to review, control disclosure, and request amendment of their education record. Increasingly this is going beyond just via a web interface, PDF, or printed copies. [President Barack Obama mandated that all federal agencies begin providing information in machine readable formats](http://apievangelist.com/2012/06/01/barack-obama-directs-all-federal-agencies-to-have-an-api/), and many cities and states are putting it into law as well. A student should always have access to their data, and they should be able to choose to do this via campus applications, or be able to obtain a portable copy of their record for storage in a location of their choosing, or possible use within a 3rd party system of their choice—it's their data. Period.

**Un-Sanctioned App Concern Is Just A Red Herring**  
Modern API management infrastructure like [3Scale](http://www.3scale.net/), and [WSO2](http://wso2.com/), provide an unprecedented level of control over managing API access, requiring secure on-boarding of new developers, the establishment of service composition definitions, which provides rich real-time analytics on how APIs are used, and by whom—while also seamlessly integrating with existing identity and access management solutions. The university gets to choose who has access to which services, revoke access when abused, while also better understanding how resources are really being accessed and put to use. Ideally this applies to all campus-wide usage, as well as with external 3rd parties—modern approaches to API-centric operations, include the management of internal, partner, and public resources in this way.

**A More Balanced Governance Across Campus Resources**  
Modern API management was born out of traditional IT governance, but is something that is more focused on giving access and control to the end-users who are the actual owners, of the valuable data, content, and other digital resources being made available. Legacy campus IT models provide a governance model that involves IT, administrative and faculty stakeholders, but rarely includes the students. APIs give students secure access to their data, and standards like [oAuth](http://oauth.net/) opens up the ability for them to have a vote in who has access to their data, with oAuth scope being defined by existing institutional governance efforts. When APIs enter the conversation, governance expands to be more self-service, real-time, and within the control of students, as well as administrators, faculty, and campus IT.

**Possibility Of Good Things Happening Closer To The Student**  
In the current educational environment, where students are often more tech savvy than faculty and administrators, why would we want to eliminate serendipity, and the possibility that new things might happen. Solutions to problems that students actually face everyday, that campus administrator may never think of, because they see technology through a very different lens. The days where IT knows best, regarding what devices, browsers, apps, and websites are optimal for getting things done, are in the past. Shadow IT demonstrates this, where students, and even faculty are using un-sanctioned solutions to get their work done. Campus IT should be empowering students, encouraging a more digitally literate individual who soon will be entering the workforce, not suffocating this.

**Easy For Campus IT To Miss The Big Picture**  
I am a recovering IT administrator, so I understand the challenges a skeptic campus IT administrator faces, but ultimately by restricting access to campus resources just makes your job harder, making you the bottleneck that everyone's so commonly complains about, when it comes to IT. APIs don’t create more work for you, it makes you much more agile and nimble in how you integrate systems, build new web and mobile applications, and provide 3rd party vendors access to campus resources—as well as potentially opening up self-service access to students.

With an API-centric approach you will know exactly who is accessing resources, and how they are using them--in real-time. I’m betting that you don’t have this visibility across all of your IT resources right now. When I put on my IT director hat, I prefer the API model, because then all resources are self-service, available to only those who SHOULD have access, all without them having to talk to me. I’m left alone to do what I do best, and can also monitor new signups, real-time usage, and manage support tickets in accordance with wider IT support strategies.

I understand you are a skeptic about APIs being a thing students should have access to, and in reality most students will not care, but there will be a long tail of student users who will do things you never imagined, and potentially change how you look at scheduling, document management, or other staples of campus operations—something that will never happen if you don’t make students a priority when it comes to your digital resource management.

_**Disclosure:** 3Scale and WSO2 are both API Evangelist partners._