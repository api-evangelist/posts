---
published: true
layout: post
title: YAML in Design & Develop Time and JSON in Build and Run Time
tags:
  - JSON
  - YAML
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/eugenics-skyscraper-construction-crane-2.jpeg
---
It is a stance I have taken a lot of shit for working on the ground within enterprises, but one I feel is an important stance to take—using YAML in design/development time and JSON in the build/run time. I know a lot of developers hate YAML, in the same way I hated JSON when it came onto the scene, but over time you get used to change and the less than perfect solution wins. Keeping things editable by normals is helpful to the overall motion of delivering APIs, and keeping things YAML as a base, but then switching to JSON can have a serious impact on velocity.

There is loss in precision when you switch from JSON to YAML, but for most simple and medium complexity schemas there is nothing lost. Developers love getting pedantic about YAML, stating JSON is more precise. These are conversations that bore me because I’ve made all the same arguments about JSON being less precise than XML, and still had to make the compromise because JSON had other advantages. The same is true for YAML, and I am way more pragmatic in my old age. I’d rather we live in a precise XML world, but we don’t, so I am not going to have much patience for how JSON is a better world than YAML.

Using YAML during design and development offers an olive branch to business stakeholders. It helps lower the levels of entropy present and widen who can make sense of what an API does, as well as the operations around it. Think about what YAML has done from an operations perspective with Kubernetes, this is the potential when it comes to business operations surrounding APIs. While I haven’t seen the number of business stakeholders get involved as I had hoped when OpenAPI began supporting YAML or JSON in 2016, I have seen enough progress that I know it was worth it.

I get that YAML isn’t perfect, but when you push back on YAML usage, think about why you are unwilling to compromise. This is a line I will be defending with all of its flaws. I am confident that many of the challenges we face when delivering and iterating upon APIs can be reduced to more manageable levels when business stakeholders get involved throughout the API lifecycle. YAML schema, YAML OpenAPI, YAML rules, and robust services and tooling around them is how we do this. This is a drum I will keep beating every couple of months, and I will be holding this line, until we see the business side services, tooling, and participation increases, balancing out the developer dominated world of APIs.