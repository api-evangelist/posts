---
published: true
layout: post
title: Your AI Bill Will Be Your Cloud Bill on Steroids
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/your-ai-bill-will-be-your-cloud-bill-on-steroids.png
date: 2026-08-10
author: Kin Lane
tags:
  - AI
  - Cloud
  - Business
  - Cost
  - FinOps
  - Strategy
---
I have seen this exact promise before, almost word for word, and I remember how it ended. When EC2 arrived, the pitch was that servers were about to become effectively free--spin up what you need, pay pennies, never buy a rack again. And for a little while, for a small workload, it really was cheap. Then the workloads grew, the architectures spread out across a hundred managed services, the data started moving between regions, and one day the finance team opened the cloud bill and made a sound I have heard in a dozen companies since. The cheap thing had quietly become one of the largest line items in the business, and by then it was load-bearing and impossible to leave.

AI is going to run this same play, except on steroids. That is not me being cynical for sport--I said it to [Nordic APIs](https://nordicapis.com/kin-lane-on-ai-and-the-future-of-apis/) and I believe it structurally. Every incentive that made cloud costs balloon is present in AI, only larger. The pilot is cheap because the usage is tiny and, often, because the provider is subsidizing it with investor money to win the market. Then the usage grows, because agents are tireless and you pointed them at everything, and every token has a price, and the workflows multiply, and the models get called in loops you did not fully anticipate. The meter that felt like a rounding error during the demo becomes the number the CFO circles in red. Same movie, bigger budget.

You can already see the enthusiasm cooling at the top of the market, which is the tell. The companies that went hardest and earliest are the ones now quietly asking what all of this actually costs to run at scale, and whether the value out the other end justifies the spend. The hype has not caught up to that conversation yet--the conference stages and the funding announcements are still running a season behind--but the people signing the invoices have started doing the math, and the math is sobering. That gap between the public enthusiasm and the private cost accounting is exactly where the last cloud correction lived too.

The dynamic gets worse when you look at how most of the tooling is actually built, because most agentic products are thin wrappers around Claude or ChatGPT. There is nothing wrong with a wrapper--plenty of real value lives in the wrapping--but it means the vendor's own costs are variable and pass straight through to you, and it means the pricing models are fragile. A company reselling access to someone else's model does not fully control its own margins. When the underlying model provider changes their pricing, or stops subsidizing usage to chase profitability, that shock travels straight down the stack to the invoice in your inbox. You are not just exposed to your own consumption. You are exposed to the entire chain of subsidies above you, and those subsidies are not permanent.

None of this means AI is going away, and I want to be careful not to overclaim the other direction. The models will not vanish--they will settle into something sustainable, smaller than today's everything-everywhere ambitions but still substantial and genuinely useful. What is going to change is the posture. The era of "turn it on everywhere and don't look at the meter" is going to end the same way the equivalent cloud era ended, with a wave of FinOps discipline, architectural retreat, and hard questions about which workloads actually earn their keep. The companies that survive that correction well will be the ones who saw it coming.

So treat AI spend the way you learned--painfully--to treat cloud spend. Instrument it from day one. Know your cost per workflow, not just your monthly total. Assume the subsidized price you are paying today is a promotional rate that will expire, and pressure-test whether the value survives at three times the cost. Keep the option to run smaller or open models where the economics stop making sense, so you are not trapped when the wrapper's margins get squeezed. The teams that get burned in the coming correction will be the ones who mistook a subsidized demo price for the real cost of the thing. I have watched an entire industry make that exact mistake once already. We do not have the excuse of not knowing how it ends.
