---
published: true
layout: post
title: 'Amazon and Microsoft: Two API Estates, Two Ways to Build One'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/amazon-and-microsoft-two-api-estates-two-ways-to-build-one.png
date: 2026-11-13
author: Kin Lane
tags:
  - Amazon
  - Microsoft
  - API Estates
  - APIs.io
  - Kin Score
  - Agent Readiness
  - API Governance
---
Over the last two weeks I re-profiled two of the largest API estates on the planet, one after the other. I wrote up [the Microsoft API estate](https://apievangelist.com/2026/11/05/the-microsoft-api-estate-169-surfaces-one-company-and-the-work-of-making-it-coherent/) last week and [the Amazon API estate](https://apievangelist.com/2026/11/12/the-amazon-api-estate-199-surfaces-one-source-of-truth-and-what-it-still-leaves-out/) yesterday. Both write-ups stand on their own. This one is about what I learned by doing them side by side.

You can look at both trees yourself on APIs.io: the [Microsoft estate](https://apis.io/estates/microsoft/) and the [Amazon estate](https://apis.io/estates/amazon/).

## The numbers side by side

| | Microsoft | Amazon |
|---|---|---|
| Live provider profiles | 169 | 199 |
| API entries | about 4,800 | about 5,000 |
| Mean Kin Score | 58.0 | 69.9 |
| Median Kin Score | 62.4 | 71.3 |
| Exemplar | 58 (35%) | 154 (77%) |
| Below 40 | 29 | 3 |
| Spread (highest to lowest) | 89.0 to 3.8 | 84.4 to 31.2 |
| Mean agent readiness | 27.1 | 38.8 |
| At 40+ agent readiness | 16 | 98 |
| Retired in this pass | 3 | 19 |

The headline is not that Amazon scores higher. It is the shape of the two distributions. Microsoft has the single best surface across both estates, [Microsoft Entra ID](https://apis.io/providers/azure-ad/) at 89.0, and [GitHub](https://apis.io/providers/github/) at 85.1 is right behind it. It also has a long tail down to almost nothing. Amazon has no member as high as Entra ID. Its best is [Amazon SES](https://apis.io/providers/amazon-ses/) at 84.4. But it has almost no tail. The standard deviation of Microsoft's scores is 16.4 points. Amazon's is 7.5.

One company has peaks. The other has a floor.

## Why: one source of truth, or many teams

The difference comes down to how each company describes its APIs.

**Amazon has one machine-readable source.** AWS publishes a Smithy model of every service in one public repository, [aws/api-models-aws](https://github.com/aws/api-models-aws), and generates its own SDKs from it. For this pass I made those models the contract for 186 members. Every one of them comes out with the same shape: complete schemas, every modelled error, the right wire format, and SigV4 authentication declared honestly. A well-funded service and a small one look much the same, because the same machine wrote them both.

**Microsoft has strong pockets and its own conventions in each.** Azure's resource-manager contracts live in one public repository too, [Azure/azure-rest-api-specs](https://github.com/Azure/azure-rest-api-specs), and those are among the best-described surfaces in either estate. [Microsoft Graph](https://apis.io/providers/microsoft-graph/) sits underneath most of Microsoft 365. GitHub runs a model API program of its own. But beyond those three, products, acquisitions and developer tools each describe themselves their own way, or not at all. That is where the long tail comes from.

Neither is wrong. Microsoft's way produces the best individual surfaces. Amazon's way produces the most consistent estate.

## Agent readiness follows the floor, not the peaks

Agents care about consistency more than they care about peaks. An agent working across an estate meets the median, not the best surface.

That shows up clearly. Amazon's mean agent readiness is 38.8, and 98 of its members are at 40 or above. Microsoft's is 27.1, with 16 at 40 or above. Microsoft's individual leaders are excellent, with GitHub at 63.4 and Entra ID at 57.9. But an agent wandering through the rest of the estate finds much less to hold on to.

Interestingly, the gap between Kin Score and agent readiness is almost exactly the same in both estates: 30.9 points for Microsoft and 31.2 for Amazon. Both companies have described their APIs well for developers. Neither has yet built the layer that tells an agent which operations to use together, what they cost, and when they change.

## The coherence problems are different too

**Microsoft's problem is names.** Azure Active Directory became Entra ID, and the estate still carries [Active Directory](https://apis.io/providers/active-directory/), [Entra ID](https://apis.io/providers/azure-ad/) and [Entra](https://apis.io/providers/microsoft-entra/). [Microsoft 365](https://apis.io/providers/microsoft-365/), [Office 365](https://apis.io/providers/microsoft-office-365/) and [Office](https://apis.io/providers/microsoft-office/) overlap the same way. The same contract is often published under two products, as with [SQL Server](https://apis.io/providers/microsoft-sql-server/) and [Azure SQL](https://apis.io/providers/microsoft-azure-sql-database/). The fix is metadata: say which name is current and which product owns which contract.

**Amazon's problem is time.** Nineteen of the 218 Amazon profiles we held were for services AWS has already shut down: QLDB, RoboMaker, Elastic Transcoder, Pinpoint, Proton and fourteen others. AWS publishes a [full-shutdown list](https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html), which is more than most companies do. But the models themselves do not say a service is closing, so nothing downstream finds out on its own. The fix is lifecycle in the model.

**Both have products that do not match their APIs.** At Microsoft, the developer tools score lowest: [Visual Studio Code](https://apis.io/providers/visual-studio-code/), [Visual Studio](https://apis.io/providers/microsoft-visual-studio/) and the [Azure CLI](https://apis.io/providers/azure-cli/). At Amazon, [VPC](https://apis.io/providers/amazon-vpc/), [Aurora](https://apis.io/providers/amazon-aurora/) and [Fargate](https://apis.io/providers/amazon-fargate/) are products people buy by name, but their operations live inside the EC2, RDS and ECS models. A catalog organised by service and a buyer thinking in products do not quite meet.

**Both estates stop at the cloud.** Microsoft's acquisitions, like [Nuance](https://apis.io/providers/nuance/) and the gaming studios, read like the companies they were before they were bought. Amazon's estate is almost entirely AWS. The [Selling Partner API](https://apis.io/providers/amazon-seller-central/) is the only retail surface, and it leads the whole Amazon estate on agent readiness.

## What each could borrow from the other

**Microsoft could borrow Amazon's single source.** Azure already has one in azure-rest-api-specs. Extending that same practice, one public repository and one format, to Microsoft 365, Dynamics, the developer tools and the acquisitions would lift the tail more than any single product investment could.

**Amazon could borrow Microsoft's peaks.** Entra ID, GitHub and Graph go beyond the contract. They come with richer guides, SDKs, changelogs and agent-facing surfaces like MCP servers. AWS's models give every service a strong floor. A small number of flagship services carried further, toward workflows, cost and agent tooling, would show what the next layer looks like.

**Both need lifecycle as data.** Microsoft retired three profiles in my pass and Amazon nineteen, and in every case the only signal was a page written for humans. Deprecation dates and successors belong in the contract.

## What I took away

I came into these two re-profiles expecting to compare scale. What I actually compared was method. Two companies with similar numbers of API surfaces got there in very different ways, and the way you describe your APIs shows up in every number downstream, especially the ones agents care about.

If you run an API program of any size, the lesson from Amazon is that a single, machine-readable source of truth gives you a floor nobody has to fight for. The lesson from Microsoft is that the floor is not the ceiling, and the best surfaces still take deliberate investment on top.

Both estate pages update with this weekend's APIs.io build: [Microsoft](https://apis.io/estates/microsoft/) and [Amazon](https://apis.io/estates/amazon/). The full member-by-member tables are in the two estate posts, [Microsoft](https://apievangelist.com/2026/11/05/the-microsoft-api-estate-169-surfaces-one-company-and-the-work-of-making-it-coherent/) and [Amazon](https://apievangelist.com/2026/11/12/the-amazon-api-estate-199-surfaces-one-source-of-truth-and-what-it-still-leaves-out/).
