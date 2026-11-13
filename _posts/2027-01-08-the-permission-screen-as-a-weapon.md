---
published: false
layout: post
title: 'The Permission Screen As A Weapon'
date: 2027-01-08 14:00:00 +0000
author: Kin Lane
tags:
  - API Economy
  - Dark Side Of The API Economy
  - Lending
  - Fintech
  - Privacy
  - Open Banking
---
*Part of [The Dark Side of the API Economy](https://apievangelist.com/2026/12/17/the-dark-side-of-the-api-economy/). Act two: extract.*

Of everything in this series, this is the most direct harm to people.

A 2026 study from Boston University's security lab looked at 435 Android loan apps from Indonesia, Kenya, Nigeria, Pakistan and the Philippines. Many asked for far more access than a loan needs: contacts, text messages, location, photos. Some sent that data off the phone before the user had even signed up. Lenders then used it to collect, through harassment, blackmail and public shaming, including messaging the borrower's contacts. After the researchers reported their findings, Google removed 93 of the apps from Google Play. Together they had more than 300 million installs.

## Regulators caught up slowly

In India, a panel set up by the Reserve Bank found that more than half of about 1,100 digital lenders were operating illegally. A string of suicides was linked to digital loan sharks shaming borrowers. India's 2022 rules now bar lending apps from reading contacts, call logs and media. Kenya moved digital lenders from simple registration to licensing, with the power to revoke a license for breaking data protection or consumer protection law.

## What the APIs show

There is no provider to link to here. These apps do not publish APIs and would not be in a catalog like APIs.io. What they used was not a public API but the operating system's permission screen, the dialog asking whether an app may see your contacts.

The contrast is the point. Open banking was designed for exactly this situation: a lender legitimately needs to see a borrower's financial picture. [Plaid](https://apis.io/providers/plaid/), which scores exemplar and is rated agent-native, works through consented, scoped access to specific accounts, which the person can revoke. That is the legitimate version of what the loan apps took by force.

## Why it matters

This is the same mobile money rail I wrote about in [The Bank Branch Became An API](https://apievangelist.com/2026/12/31/the-bank-branch-became-an-api/), where M-Pesa helped lift households out of poverty. The rail is neutral. Whether access to someone's phone becomes a service or a weapon depends on whether the access is scoped, consented and revocable. That is a design choice, and in the API world we already know how to make the right one.

Sources: [arXiv 2601.12634 (Boston University)](https://arxiv.org/html/2601.12634v1), [BU SecLab](https://seclab.bu.edu/people/gianluca/papers/loans-asiaccs2026.pdf), [South China Morning Post](https://www.scmp.com/news/asia/south-asia/article/3162030/india-string-suicides-linked-digital-loan-sharks-blamed), [The Wire](https://thewire.in/tech/between-lenders-access-to-phone-data-and-digital-privacy-rbi-must-strike-the-right-balance), [Yahoo / Reuters](https://news.yahoo.com/kenya-cracks-down-digital-lenders-193436762.html).
