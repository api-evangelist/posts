---
published: true
layout: post
title: 'The Microsoft API Estate: 169 Surfaces, One Company, and the Work of Making It Coherent'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-microsoft-api-estate-169-surfaces-one-company-and-the-work-of-making-it-coherent.png
date: 2026-11-05
author: Kin Lane
tags:
  - Microsoft
  - API Estates
  - APIs.io
  - Kin Score
  - Agent Readiness
  - API Governance
---
I spent the last two days re-profiling every live member of the [Microsoft API estate on APIs.io](https://apis.io/estates/microsoft/). That is 169 provider profiles, run in ten waves of up to twenty, each one re-checked against Microsoft's own published contracts, docs, and machine-readable files, then scored again. Nothing failed. Three were retired. The rest are better described than they were on Tuesday.

I want to use this pass to say something about Microsoft that is hard to see from any single developer portal. Microsoft has made one of the largest API investments of any company on the planet. It has also built that investment the way large companies build everything: product by product, acquisition by acquisition, rename by rename. The value is real, and the gaps are not about quality. They are about coherence.

## What an estate is

An estate on APIs.io is every provider profile that declares a company as its parent. For Microsoft that tree runs down through Azure, Microsoft 365, GitHub, Entra, Power Platform, Dynamics 365, Xbox, LinkedIn, and a long tail of products and acquisitions that sit directly under the parent. You can see the whole tree on the [estate page](https://apis.io/estates/microsoft/), and every profile I mention below links to its own page so you can check my numbers.

A note on those numbers: the scores in this post are from today's re-profile. The estate page updates with the next APIs.io rebuild, so for a short while it will still show the older figures, and the three retired profiles.

## The investment is enormous

Across the 167 members that carry a score, the mean [Kin Score](https://apis.io/rating/) moved from **44.4 to 58.0** in this pass. Fifty-eight are now exemplar and fifty-six strong. The estate carries more than five thousand API entries. Those are not marketing pages. They are mostly real contracts.

The places where Microsoft has invested the most show it clearly:

- **Identity is the best-described surface in the estate.** [Microsoft Entra ID (formerly Azure AD)](https://apis.io/providers/azure-ad/) scores 89.0, the highest of any member, and the Entra family averages 75.5.
- **GitHub is a model API program.** [GitHub](https://apis.io/providers/github/) scores 85.1 with 1,470 operations declared, and [GitHub Actions](https://apis.io/providers/github-actions/) scores 82.9. GitHub also leads the estate on agent readiness at 63.4.
- **Azure is the deepest bench.** Sixty-eight Azure members average 65.8. [Azure DevOps](https://apis.io/providers/microsoft-azure-devops/) (84.0), [API Management](https://apis.io/providers/microsoft-azure-api-management/) (80.3), [AKS](https://apis.io/providers/microsoft-azure-kubernetes-service/) (79.1), [Service Bus](https://apis.io/providers/azure-service-bus/) (78.9), and [Data Factory](https://apis.io/providers/microsoft-azure-data-factory/) (77.8) all sit near the top. The reason is one decision Microsoft made years ago: publish every resource-manager contract in a single public repository, [Azure/azure-rest-api-specs](https://github.com/Azure/azure-rest-api-specs). Over and over in this pass, a contract we held could be verified byte for byte against that repository. That is what provenance looks like when a company does it at scale.
- **Microsoft Graph is the quiet backbone of Microsoft 365.** [Microsoft Graph](https://apis.io/providers/microsoft-graph/) carries 516 API entries. This pass also found Microsoft's remote MCP server for enterprise in front of it. Many Microsoft 365 profiles are really slices of Graph. [Microsoft To Do](https://apis.io/providers/microsoft-to-do/) went from an 18-operation hand-written contract to a 116-operation slice of Graph's published spec, and [Microsoft Viva](https://apis.io/providers/microsoft-viva/) is Graph's employee-experience surface.

The biggest movers in this pass were not new APIs. They were existing APIs that finally got described properly: [Viva](https://apis.io/providers/microsoft-viva/) +42.9, [Communication Services](https://apis.io/providers/microsoft-azure-communication-services/) +37.9, [Intune](https://apis.io/providers/microsoft-intune/) +36.8, the [Security Response Center](https://apis.io/providers/microsoft-security-response-center-msrc/) +36.4, [Data Lake](https://apis.io/providers/microsoft-azure-data-lake/) +32.2, [Backup](https://apis.io/providers/microsoft-azure-backup/) +31.8, [Defender for Cloud](https://apis.io/providers/microsoft-defender-for-cloud/) +31.6, and [Playwright](https://apis.io/providers/microsoft-playwright/) +30.9. Microsoft had already done the work. It just was not all visible from where an outsider, or an agent, starts looking.

## Agent readiness is the gap that matters next

The estate's mean Kin Score is 58.0. Its mean agent readiness is **27.1**. That is the most important number in this post.

Microsoft's APIs are well described for a developer who already knows where to look. They are much less ready for an agent that has to find, understand, and safely call them on its own. Even the strongest families sit far below their Kin Score: Entra 41.8, Dynamics 365 39.5, Power Platform 31.1, Azure 28.8, Microsoft 365 25.6, and the profiles directly under Microsoft 22.6. The parent profile, [Microsoft](https://apis.io/providers/microsoft/), scores 66.3 with an agent readiness of 25.6.

Microsoft is clearly moving here. MCP servers are showing up across the estate. But they are arriving product by product, without one place that tells an agent what exists across the whole company.

## Where the estate is not yet coherent

Most of what held up a profile in this pass was not a missing API. It was the estate disagreeing with itself.

**Renames leave three names for one thing.** Azure Active Directory became Microsoft Entra ID. The estate still carries [Microsoft Active Directory](https://apis.io/providers/active-directory/), [Microsoft Entra ID (formerly Azure AD)](https://apis.io/providers/azure-ad/), and [Microsoft Entra](https://apis.io/providers/microsoft-entra/), at 68.2, 89.0, and 73.9. The same thing happens with [Microsoft 365](https://apis.io/providers/microsoft-365/), [Microsoft Office 365](https://apis.io/providers/microsoft-office-365/), and [Microsoft Office](https://apis.io/providers/microsoft-office/). Each rename was a sound product decision. Together they leave a consumer, human or machine, unsure which surface is current.

**The same contract is published in more than one place.** This was the single most common hold:

- The SQL contracts behind [Microsoft SQL Server](https://apis.io/providers/microsoft-sql-server/) and [Azure SQL Database](https://apis.io/providers/microsoft-azure-sql-database/) are byte-identical.
- [Skype](https://apis.io/providers/microsoft-skype/) and [Azure Communication Services](https://apis.io/providers/microsoft-azure-communication-services/) share the same chat and SMS contracts.
- [PlayFab](https://apis.io/providers/playfab/)'s seventeen contracts also live under [Xbox](https://apis.io/providers/microsoft-xbox/).
- [Azure Integration Services](https://apis.io/providers/microsoft-azure-integration-services/) re-publishes [Event Grid](https://apis.io/providers/azure-event-grid/) and [Service Bus](https://apis.io/providers/azure-service-bus/).

Every one of these was real Microsoft work, and every one verified cleanly against Microsoft's own source. But when two products present the same contract with nothing saying which one owns it, nobody downstream can tell what is canonical.

**Naming conventions differ by team.** Some Azure services are `azure-*` and others `microsoft-azure-*`. Some resource-manager specs name their APIs `virtualmachines`, others `virtual-machines`. Our standardize step split those run-together words in this pass and moved about 260 pages to new addresses, each redirected. That is a lot of churn from naming alone.

**Acquisitions are the thinnest part of the estate.** [Nuance](https://apis.io/providers/nuance/) (27.7) publishes its Mix runtime as forty-one gRPC contracts and no OpenAPI. [Nuance Labs](https://apis.io/providers/nuance-labs/) (3.8), [Citus Data](https://apis.io/providers/citus-data/) (27.7), [RiskIQ](https://apis.io/providers/riskiq/) (28.3), [Mojang](https://apis.io/providers/mojang/) (27.9), [Halo](https://apis.io/providers/halo/) (33.1), [Battle.net](https://apis.io/providers/battle-net/) (32.4), and [Activision Blizzard](https://apis.io/providers/activision-blizzard/) (33.5) all still read like the companies they were before Microsoft bought them. The Xbox and gaming family averages 36.2, the lowest of any family.

**Developer tools under-describe themselves.** It is a bit ironic that the company behind [Visual Studio Code](https://apis.io/providers/visual-studio-code/) (19.5), [Visual Studio](https://apis.io/providers/microsoft-visual-studio/) (31.0), [TypeSpec](https://apis.io/providers/typespec/) (32.5), the [Azure CLI](https://apis.io/providers/azure-cli/) (30.9), and the [GitHub CLI](https://apis.io/providers/github-cli/) (34.3) scores lowest on the tools developers use most. Some of that is the rubric: an editor or a language is not a hosted API. Some of it is just missing machine-readable detail about extension APIs, protocols, and lifecycle.

**Products retire without a machine-readable signal.** I retired three profiles in this pass: Azure Notebooks (shut down in 2020), and the Bing Search APIs behind `microsoft-bing` and `bing-news` (retired in August 2025). In each case the only signal was prose on a page. An agent cannot read a retirement that only exists as a blog post.

## Where I would invest next

If I were advising Microsoft, I would not ask for more APIs. I would ask for a thin layer that makes the existing investment legible as one estate:

1. **Publish one estate-level index.** An [APIs.json](https://apisjson.org) file, or something like it, at microsoft.com that lists every product surface, its canonical contract, and its parent. This is the single biggest lever for both discovery and agent readiness.
2. **Declare canonical ownership for shared contracts.** When SQL Server and Azure SQL, or Skype and Communication Services, publish the same contract, say which product owns it and point the other at it.
3. **Carry renames forward in the metadata.** When Azure AD becomes Entra, the old surface should say so in a field an agent can read, not just a banner a human can see.
4. **Bring the acquisitions into the house conventions.** Nuance, RiskIQ, Citus, and the gaming studios need what azure-rest-api-specs already gives Azure: one public source of truth and consistent metadata.
5. **Make agent readiness an estate-wide program.** MCP servers, OAuth metadata, and agent-facing descriptions should be applied across the estate, not left to each product team. The 31-point gap between Kin Score and agent readiness is where the next return on Microsoft's investment is.
6. **Publish lifecycle and retirement as data.** Deprecation dates and successors belong in the contract, so nobody has to find out from a blog post that an API went away.

None of this is criticism of the teams doing the work. The contracts are there, and they verify. Microsoft has already paid for most of this. The remaining investment is in tying it together.

## Every member of the estate

Here is every live profile in the Microsoft estate, grouped by parent, with today's Kin Score and agent readiness. Each name links to its page on APIs.io.

### The parent (1)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [Microsoft](https://apis.io/providers/microsoft/) | 66.3 | 25.6 |

### Azure (68)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [Azure DevOps](https://apis.io/providers/microsoft-azure-devops/) | 84.0 | 32.9 |
| [Microsoft Azure API Management](https://apis.io/providers/microsoft-azure-api-management/) | 80.3 | 31.0 |
| [Azure Kubernetes Service](https://apis.io/providers/microsoft-azure-kubernetes-service/) | 79.1 | 29.5 |
| [Azure Service Bus](https://apis.io/providers/azure-service-bus/) | 78.9 | 39.1 |
| [Azure Data Factory](https://apis.io/providers/microsoft-azure-data-factory/) | 77.8 | 35.5 |
| [Microsoft Azure Cdn](https://apis.io/providers/microsoft-azure-cdn/) | 76.9 | 38.4 |
| [Power Query](https://apis.io/providers/power-query/) | 76.2 | 37.7 |
| [Microsoft Azure Functions](https://apis.io/providers/microsoft-azure-functions/) | 75.9 | 29.0 |
| [Microsoft Azure Health Data Services](https://apis.io/providers/azure-health/) | 75.2 | 37.1 |
| [Azure Databricks](https://apis.io/providers/microsoft-azure-databricks/) | 74.3 | 39.3 |
| [Azure Cost Management](https://apis.io/providers/microsoft-azure-cost-management/) | 73.7 | 31.4 |
| [Azure Networking Services](https://apis.io/providers/azure-networking-services/) | 73.0 | 28.0 |
| [Microsoft Azure Cache For Redis](https://apis.io/providers/microsoft-azure-cache-for-redis/) | 72.8 | 41.4 |
| [Azure Machine Learning](https://apis.io/providers/microsoft-azure-machine-learning/) | 72.8 | 25.5 |
| [Azure Event Hubs](https://apis.io/providers/microsoft-azure-event-hubs/) | 71.9 | 34.8 |
| [Azure Repos](https://apis.io/providers/microsoft-azure-repo/) | 71.4 | 33.7 |
| [Microsoft Azure Communication Services](https://apis.io/providers/microsoft-azure-communication-services/) | 71.2 | 43.4 |
| [Azure Stream Analytics](https://apis.io/providers/microsoft-azure-stream-analytics/) | 71.0 | 23.9 |
| [Azure AI Search](https://apis.io/providers/microsoft-azure-search/) | 70.5 | 31.0 |
| [Azure Container Apps](https://apis.io/providers/azure-container-apps/) | 70.0 | 30.4 |
| [Azure Backup](https://apis.io/providers/microsoft-azure-backup/) | 68.9 | 25.5 |
| [Azure Cosmos DB](https://apis.io/providers/azure-cosmos-db/) | 68.8 | 31.0 |
| [Azure Event Grid](https://apis.io/providers/azure-event-grid/) | 68.6 | 22.0 |
| [Azure Arc](https://apis.io/providers/microsoft-azure-arc/) | 68.6 | 25.5 |
| [Azure Blob Storage](https://apis.io/providers/microsoft-azure-blob-storage/) | 68.5 | 40.9 |
| [Microsoft Azure Private Link](https://apis.io/providers/microsoft-azure-private-link/) | 68.5 | 27.7 |
| [Azure Load Balancer](https://apis.io/providers/microsoft-azure-load-balancer/) | 68.2 | 20.3 |
| [Azure Automation](https://apis.io/providers/microsoft-azure-automation/) | 68.1 | 27.8 |
| [Microsoft Azure Batch](https://apis.io/providers/microsoft-azure-batch/) | 67.9 | 34.9 |
| [Azure Container Registry](https://apis.io/providers/azure-container-registry/) | 67.7 | 28.0 |
| [Azure Monitor](https://apis.io/providers/microsoft-azure-monitor/) | 67.7 | 30.4 |
| [Azure Log Analytics](https://apis.io/providers/azure-log-analytics/) | 67.6 | 35.4 |
| [Azure SignalR Service](https://apis.io/providers/microsoft-azure-signalr/) | 67.6 | 26.2 |
| [Azure Migrate](https://apis.io/providers/microsoft-azure-migrate/) | 67.2 | 25.5 |
| [Azure Web PubSub](https://apis.io/providers/microsoft-azure-web-pubsub/) | 66.6 | 24.1 |
| [Azure Synapse Analytics](https://apis.io/providers/microsoft-azure-synapse-analytics/) | 66.3 | 23.9 |
| [Azure Service Fabric](https://apis.io/providers/microsoft-azure-service-fabric/) | 65.9 | 18.6 |
| [Azure Files](https://apis.io/providers/azure-file-storage/) | 65.7 | 24.3 |
| [Azure Pipelines](https://apis.io/providers/microsoft-azure-pipelines/) | 65.6 | 29.1 |
| [Azure Data Lake Storage](https://apis.io/providers/microsoft-azure-data-lake/) | 65.5 | 28.6 |
| [Azure Traffic Manager](https://apis.io/providers/microsoft-azure-traffic-manager/) | 65.4 | 26.5 |
| [Azure Site Recovery](https://apis.io/providers/microsoft-azure-site-recovery/) | 64.8 | 26.2 |
| [Microsoft Azure Advisor](https://apis.io/providers/microsoft-azure-advisor/) | 64.7 | 29.9 |
| [Microsoft Azure App Service](https://apis.io/providers/microsoft-azure-app-service/) | 64.3 | 29.0 |
| [Azure Database for PostgreSQL](https://apis.io/providers/microsoft-azure-postgresql/) | 63.8 | 29.7 |
| [Microsoft Azure AI Foundry](https://apis.io/providers/azure-ai-foundry/) | 63.4 | 36.1 |
| [Microsoft Azure Integration Services](https://apis.io/providers/microsoft-azure-integration-services/) | 63.3 | 30.0 |
| [Azure SQL Database](https://apis.io/providers/microsoft-azure-sql-database/) | 63.0 | 28.2 |
| [Azure Database for MySQL](https://apis.io/providers/microsoft-azure-mysql/) | 62.2 | 28.6 |
| [Azure OpenAI Service](https://apis.io/providers/microsoft-azure-openai/) | 61.9 | 29.0 |
| [Azure Policy](https://apis.io/providers/microsoft-azure-policy/) | 61.1 | 24.3 |
| [Azure Front Door](https://apis.io/providers/microsoft-azure-front-door/) | 60.1 | 24.6 |
| [Azure Key Vault](https://apis.io/providers/microsoft-azure-key-vault/) | 60.1 | 29.4 |
| [Azure Bastion](https://apis.io/providers/microsoft-azure-bastion/) | 59.8 | 20.3 |
| [Azure Container Instances](https://apis.io/providers/azure-container-instances/) | 59.6 | 20.7 |
| [Azure Firewall](https://apis.io/providers/microsoft-azure-firewall/) | 59.3 | 21.1 |
| [Azure Storage Accounts](https://apis.io/providers/azure-storage-accounts/) | 58.8 | 31.6 |
| [Azure Queue Storage](https://apis.io/providers/microsoft-azure-queue-storage/) | 58.3 | 24.3 |
| [Azure Maps](https://apis.io/providers/microsoft-azure-maps/) | 56.7 | 29.8 |
| [Azure ExpressRoute](https://apis.io/providers/microsoft-azure-express-route/) | 56.3 | 24.6 |
| [Azure Application Gateway](https://apis.io/providers/microsoft-azure-application-gateway/) | 55.6 | 23.8 |
| [Azure Virtual Machines](https://apis.io/providers/microsoft-azure-virtual-machines/) | 55.4 | 27.9 |
| [Azure AI Document Intelligence](https://apis.io/providers/azure-document-intelligence/) | 55.0 | 27.6 |
| [Azure Logic Apps](https://apis.io/providers/azure-logic-apps/) | 54.5 | 27.0 |
| [Azure Function Apps](https://apis.io/providers/azure-function-apps/) | 52.1 | 29.6 |
| [Azure DevTest Labs](https://apis.io/providers/azure-test-labs/) | 50.7 | 28.1 |
| [Azure Notification Hubs](https://apis.io/providers/microsoft-azure-notification-hubs/) | 48.9 | 20.3 |
| [Azure CLI](https://apis.io/providers/azure-cli/) | 30.9 | 5.4 |

### Directly under Microsoft (47)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [GitHub](https://apis.io/providers/github/) | 85.1 | 63.4 |
| [Microsoft Azure](https://apis.io/providers/microsoft-azure/) | 78.1 | 51.5 |
| [LinkedIn](https://apis.io/providers/linkedin/) | 76.4 | 47.4 |
| [Microsoft Power Platform APIs](https://apis.io/providers/power-platform/) | 75.1 | 46.1 |
| [Microsoft Entra](https://apis.io/providers/microsoft-entra/) | 73.9 | 33.5 |
| [Microsoft Purview](https://apis.io/providers/microsoft-purview/) | 72.4 | 32.8 |
| [Microsoft Azure Quantum](https://apis.io/providers/microsoft-quantum/) | 70.8 | 27.6 |
| [Microsoft Windows Server](https://apis.io/providers/microsoft-windows-server/) | 66.7 | 25.6 |
| [Microsoft SQL Server](https://apis.io/providers/microsoft-sql-server/) | 66.5 | 27.8 |
| [Microsoft .NET](https://apis.io/providers/microsoft-net/) | 66.1 | 31.8 |
| [Microsoft Clarity](https://apis.io/providers/microsoft-clarity/) | 65.2 | 30.0 |
| [Microsoft 365](https://apis.io/providers/microsoft-365/) | 64.4 | 36.7 |
| [Microsoft Dynamics 365](https://apis.io/providers/microsoft-dynamics-365/) | 63.9 | 33.1 |
| [Microsoft Defender](https://apis.io/providers/microsoft-defender/) | 63.3 | 34.2 |
| [Microsoft Defender for Cloud](https://apis.io/providers/microsoft-defender-for-cloud/) | 62.4 | 24.6 |
| [Microsoft Fabric](https://apis.io/providers/microsoft-fabric/) | 61.4 | 36.8 |
| [Microsoft Sentinel](https://apis.io/providers/microsoft-sentinel/) | 59.7 | 27.2 |
| [Microsoft Bicep](https://apis.io/providers/microsoft-bicep/) | 59.4 | 30.3 |
| [Microsoft Copilot](https://apis.io/providers/microsoft-copilot/) | 59.0 | 32.1 |
| [Microsoft Cognitive Services](https://apis.io/providers/microsoft-cognitive-services/) | 57.2 | 20.3 |
| [Microsoft Excel (Advanced)](https://apis.io/providers/microsoft-excel-advanced/) | 56.8 | 30.3 |
| [Microsoft Playwright](https://apis.io/providers/microsoft-playwright/) | 54.3 | 30.8 |
| [Microsoft Bot Framework](https://apis.io/providers/microsoft-bot-framework/) | 53.6 | 28.1 |
| [Microsoft Xbox](https://apis.io/providers/microsoft-xbox/) | 52.8 | 18.2 |
| [Microsoft PowerPoint](https://apis.io/providers/microsoft-powerpoint/) | 51.7 | 27.4 |
| [PowerShell](https://apis.io/providers/powershell/) | 50.1 | 24.9 |
| [Microsoft Edge](https://apis.io/providers/microsoft-edge/) | 49.4 | 27.1 |
| [Kiota](https://apis.io/providers/kiota/) | 45.0 | 3.1 |
| [Microsoft Security Response Center (MSRC)](https://apis.io/providers/microsoft-security-response-center-msrc/) | 43.8 | 19.7 |
| [Microsoft Advertising](https://apis.io/providers/microsoft-advertising/) | 42.5 | 10.8 |
| [Microsoft Skype](https://apis.io/providers/microsoft-skype/) | 39.5 | 27.1 |
| [Microsoft Entity Framework](https://apis.io/providers/microsoft-entity-framework/) | 38.6 | 0.6 |
| [Microsoft Windows](https://apis.io/providers/microsoft-windows/) | 37.6 | 5.0 |
| [OData](https://apis.io/providers/odata/) | 37.0 | 23.6 |
| [Microsoft Excel Macros](https://apis.io/providers/microsoft-excel-macros/) | 36.3 | 3.1 |
| [TypeSpec](https://apis.io/providers/typespec/) | 32.5 | 4.1 |
| [Microsoft Visual Studio](https://apis.io/providers/microsoft-visual-studio/) | 31.0 | 3.9 |
| [Bing Maps](https://apis.io/providers/bing-maps/) | 29.7 | 5.8 |
| [RiskIQ](https://apis.io/providers/riskiq/) | 28.3 | 2.9 |
| [Citus Data](https://apis.io/providers/citus-data/) | 27.7 | 21.6 |
| [Nuance](https://apis.io/providers/nuance/) | 27.7 | 2.5 |
| [Microsoft Surface](https://apis.io/providers/microsoft-surface/) | 22.0 | 2.5 |
| [Visual Studio Code](https://apis.io/providers/visual-studio-code/) | 19.5 | 0.0 |
| [AutoGen](https://apis.io/providers/autogen/) | 8.6 | 0.6 |
| [Nuance Labs](https://apis.io/providers/nuance-labs/) | 3.8 | 0.0 |
| [Semantic Kernel](https://apis.io/providers/semantic-kernel/) | — | — |
| [TypeScript](https://apis.io/providers/typescript/) | — | — |

### Microsoft 365 (25)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [Microsoft Outlook](https://apis.io/providers/microsoft-outlook/) | 70.6 | 49.5 |
| [Microsoft Graph](https://apis.io/providers/microsoft-graph/) | 70.1 | 37.0 |
| [Microsoft Office 365](https://apis.io/providers/microsoft-office-365/) | 69.5 | 40.9 |
| [Microsoft Office](https://apis.io/providers/microsoft-office/) | 69.3 | 31.8 |
| [Microsoft Planner](https://apis.io/providers/microsoft-planner/) | 67.0 | 35.0 |
| [Microsoft Word](https://apis.io/providers/microsoft-word/) | 65.7 | 40.8 |
| [Microsoft 365 Copilot](https://apis.io/providers/microsoft-365-copilot/) | 62.7 | 28.2 |
| [Microsoft Exchange](https://apis.io/providers/microsoft-exchange/) | 62.7 | 31.4 |
| [Microsoft Visio API](https://apis.io/providers/visio/) | 61.8 | 20.8 |
| [Microsoft Viva](https://apis.io/providers/microsoft-viva/) | 61.6 | 23.8 |
| [Microsoft Teams](https://apis.io/providers/microsoft-teams/) | 59.0 | 34.2 |
| [Microsoft SharePoint](https://apis.io/providers/sharepoint/) | 58.5 | 35.2 |
| [Microsoft Excel](https://apis.io/providers/microsoft-excel/) | 54.2 | 29.0 |
| [Microsoft Project](https://apis.io/providers/microsoft-project/) | 53.7 | 26.5 |
| [Microsoft Yammer](https://apis.io/providers/microsoft-yammer/) | 53.5 | 26.4 |
| [Microsoft To Do](https://apis.io/providers/microsoft-to-do/) | 52.8 | 25.9 |
| [Microsoft Bookings](https://apis.io/providers/microsoft-bookings/) | 50.6 | 24.8 |
| [Microsoft OneNote](https://apis.io/providers/microsoft-onenote/) | 50.3 | 27.1 |
| [Microsoft Loop](https://apis.io/providers/microsoft-loop/) | 49.9 | 20.1 |
| [Microsoft OneDrive](https://apis.io/providers/microsoft-onedrive/) | 48.3 | 25.2 |
| [Microsoft Access](https://apis.io/providers/microsoft-access/) | 38.3 | 6.0 |
| [Microsoft Stream](https://apis.io/providers/microsoft-stream/) | 28.9 | 5.0 |
| [Microsoft Forms](https://apis.io/providers/microsoft-forms/) | 28.4 | 5.0 |
| [Microsoft Whiteboard](https://apis.io/providers/microsoft-whiteboard/) | 23.8 | 5.4 |
| [Microsoft Sway](https://apis.io/providers/microsoft-sway/) | 16.9 | 5.4 |

### GitHub (9)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [GitHub Actions](https://apis.io/providers/github-actions/) | 82.9 | 48.3 |
| [GitHub Copilot](https://apis.io/providers/github-copilot/) | 72.5 | 49.0 |
| [NuGet](https://apis.io/providers/nuget/) | 61.5 | 28.3 |
| [npm](https://apis.io/providers/npm/) | 60.8 | 28.7 |
| [GitHub Container Registry](https://apis.io/providers/github-container-registry/) | 54.1 | 23.2 |
| [GitHub Enterprise](https://apis.io/providers/github-enterprise/) | 53.3 | 39.3 |
| [Microsoft Package](https://apis.io/providers/microsoft-package/) | 51.9 | 28.5 |
| [GitHub CLI](https://apis.io/providers/github-cli/) | 34.3 | 5.4 |
| [GitHub ReadMe Stats](https://apis.io/providers/github-readme-stats/) | 16.5 | 5.4 |

### Entra (identity) (3)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [Microsoft Entra ID (formerly Azure AD)](https://apis.io/providers/azure-ad/) | 89.0 | 57.9 |
| [Microsoft Intune](https://apis.io/providers/microsoft-intune/) | 69.4 | 31.4 |
| [Microsoft Active Directory](https://apis.io/providers/active-directory/) | 68.2 | 36.0 |

### Power Platform (5)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [Power BI](https://apis.io/providers/power-bi/) | 78.3 | 30.6 |
| [Microsoft Power Apps](https://apis.io/providers/microsoft-power-apps/) | 66.0 | 38.9 |
| [Microsoft Power Automate](https://apis.io/providers/microsoft-power-automate/) | 64.2 | 34.2 |
| [Microsoft Power Pages](https://apis.io/providers/microsoft-power-pages/) | 55.3 | 27.7 |
| [Microsoft Power Virtual Agents](https://apis.io/providers/microsoft-power-virtual-agents/) | 53.6 | 24.3 |

### Dynamics 365 (3)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [Microsoft Dynamics 365 Sales](https://apis.io/providers/microsoft-dynamics-365-sales/) | 77.5 | 43.6 |
| [Microsoft Dynamics NAV](https://apis.io/providers/navision/) | 73.9 | 38.7 |
| [Microsoft Dynamics 365 Business Central](https://apis.io/providers/microsoft-dynamics-365-business-central/) | 70.2 | 36.1 |

### Xbox and gaming (6)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [PlayFab](https://apis.io/providers/playfab/) | 51.8 | 22.0 |
| [Blizzard Entertainment](https://apis.io/providers/blizzard-entertainment/) | 38.6 | 33.3 |
| [Activision Blizzard](https://apis.io/providers/activision-blizzard/) | 33.5 | 40.0 |
| [Halo](https://apis.io/providers/halo/) | 33.1 | 26.1 |
| [Battle.net](https://apis.io/providers/battle-net/) | 32.4 | 41.8 |
| [Mojang](https://apis.io/providers/mojang/) | 27.9 | 31.0 |

### LinkedIn (1)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [LinkedIn Marketing API](https://apis.io/providers/linkedin-ads/) | 65.7 | 34.2 |

### AutoGen (1)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [AutoGen Studio](https://apis.io/providers/autogen-studio/) | 16.5 | 0.0 |

If you work on any of these surfaces and something here is wrong, the [estate page](https://apis.io/estates/microsoft/) and each provider page let you correct it. I would rather be told than be wrong.
