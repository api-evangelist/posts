---
published: true
layout: post
title: 'Send Invoices, Pay Bills And Pull Financial Reports Automatically With QuickBooks'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/send-invoices-pay-bills-and-pull-financial-reports-automatically-with-quickbooks.png
date: 2026-11-10 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - QuickBooks
  - Accounts Receivable Management
  - Accounts Payable Management
  - Financial Reporting Management
  - Accounting
  - Small Business
---

Most small businesses running QuickBooks have someone re-keying numbers: orders from the store into invoices, supplier bills from email into payables, totals from the books into a weekly report for the owner. If that sounds familiar, the good news is that [QuickBooks](https://apis.io/providers/quickbooks/) can be reached through an API, a way for other software (or an AI assistant) to read and write your books directly. The re-keying becomes a connection that runs on its own.

## What QuickBooks does

QuickBooks is Intuit's accounting software for small businesses, the self-employed and accountants, available as QuickBooks Online in the cloud and QuickBooks Desktop. The QuickBooks Online Accounting API gives software access to a company's financial data, so it can read, create, update and delete things like invoices, customers, payments, bills, vendors, items and tax data. Access is granted by the business owner through OAuth 2.0, the familiar "allow this app to connect to your account" screen.

## What you can get done

### [Accounts Receivable Management](https://apis.io/capabilities/accounts-receivable-management/)

This is the money coming in: knowing who owes you, how late they are, and handling credits when something goes wrong.

- `GET /v3/company/{realmID}/reports/AgedReceivables` gives you the summary of who owes what, grouped by how overdue it is.
- `GET /v3/company/{realmID}/reports/AgedReceivableDetail` breaks that down line by line.
- `POST /v3/company/{realmID}/creditmemo` creates, updates or deletes a credit memo, the record of money you owe back to a customer.
- `POST /v3/company/{realmID}/creditmemo/{creditmemoId}/send` emails that credit memo to the customer.
- `GET /v3/company/{realmID}/creditmemo/{creditmemoId}/pdf` gets it as a PDF for your own records.

### [Accounts Payable Management](https://apis.io/capabilities/accounts-payable-management/)

The money going out. Bills from suppliers can land in the books the moment they arrive, and payments can be recorded against them.

- `POST /v3/company/{realmID}/bill` creates, updates or deletes a bill.
- `GET /v3/company/{realmID}/bill/{billId}` reads one back.
- `POST /v3/company/{realmID}/billpayment` records, voids or updates a payment against a bill.
- `GET /v3/company/{realmID}/reports/AgedPayables` shows what you owe and how soon it is due.

### [Financial Reporting Management](https://apis.io/capabilities/financial-reporting-management/)

The reports an owner, a lender or an investor asks for, pulled straight into a dashboard or a scheduled email instead of exported by hand.

- `GET /v3/company/{realmID}/reports/ProfitAndLoss` returns the profit and loss statement.
- `GET /v3/company/{realmID}/reports/BalanceSheet` returns the balance sheet.
- `GET /v3/company/{realmID}/reports/CashFlow` returns the cash flow statement.
- `GET /v3/company/{realmID}/reports/CustomerSales` and `GET /v3/company/{realmID}/reports/ItemSales` show sales by customer and by product.

### [Purchase Order Management](https://apis.io/capabilities/purchase-order-management/)

For businesses that order stock, purchase orders can be raised from your inventory system and sent without opening QuickBooks.

- `POST /v3/company/{realmID}/purchaseorder` creates, updates or deletes a purchase order.
- `POST /v3/company/{realmID}/purchaseorder/{purchaseorderId}/send` emails it to the supplier.
- `GET /v3/company/{realmID}/purchaseorder/{purchaseorderId}/pdf` gets it as a PDF.

### [Indirect Tax Management](https://apis.io/capabilities/indirect-tax-management/)

Sales tax setup is a quiet source of errors. The API lets software read the tax rates and codes in use and set up new ones.

- `GET /v3/company/{realmID}/taxrate/{taxrateId}` reads a tax rate.
- `GET /v3/company/{realmID}/taxcode/{taxcodeId}` reads a tax code.
- `POST /v3/company/{realmID}/taxagency` adds the agency you remit tax to.

Underneath all of these, `GET /v3/company/{realmID}/query` lets software ask the books a question in a simple SELECT statement, such as every unpaid invoice for one customer. The same API also covers budgets, deposits, journal entries and the chart of accounts, which you can find under [General Ledger Management](https://apis.io/capabilities/general-ledger-management/) and [Budgeting Management](https://apis.io/capabilities/budgeting-management/).

## Getting started

QuickBooks is freemium with self-serve signup on the Intuit developer site. Start with the [QuickBooks Online developer docs](https://developer.intuit.com/app/developer/qbo/docs/develop) and the [OAuth 2.0 guide](https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0); there is also a [GraphQL option](https://developer.intuit.com/app/developer/qbo/docs/develop/develop-with-graphql) and separate [payroll and time docs](https://developer.intuit.com/app/developer/payroll-time/docs/develop). Intuit's partner tiers and fees are summarized in the [pricing section of the APIs.io profile](https://apis.io/providers/quickbooks/#pricing).

The [QuickBooks profile on APIs.io](https://apis.io/providers/quickbooks/) lists every API, including the [Bill API](https://apis.io/apis/quickbooks/quickbooks-bill-api/), the [Balance Sheet API](https://apis.io/apis/quickbooks/quickbooks-balancesheet-api/), the [AR Aging Summary API](https://apis.io/apis/quickbooks/quickbooks-aragingsummary-api/) and the [Batch API](https://apis.io/apis/quickbooks/quickbooks-batch-api/) for doing many changes at once. Pick the one task your team re-keys most often and make that your first connection.
