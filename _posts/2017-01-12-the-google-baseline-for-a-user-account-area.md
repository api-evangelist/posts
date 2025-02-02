---
layout: post
title: The Google Baseline For A User Account Area
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_01_11_at_8.59.54_pm.png
atomdate: 2017-01-12T23:00:00.000Z
tags: []
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_01_11_at_8.59.54_pm.png)](https://myaccount.google.com)

I have [a minimum definition for what I consider to be a good portal for an API](http://portal.minimum.apievangelist.com/), and was spending some time thinking about a baseline definition for the API developer account portion of that portal, as well as potentially any other authenticated, and validated platform user. I want a baseline user account definition that I could use as aa base, and the best one out there off the top of my head would be from Google.

To support my work I went through my [Google account page](https://myaccount.google.com) and outlined the basic building blocks of the Google account:

*   **[Sign-in & Security](https://myaccount.google.com/security) -** Manage your account access and security settings
    *   **Signing in to Google -** Control your password and account access, along with backup options if you get locked out of your account.
        *   **Password & sign-in method** \- Your password protects your account. You can also add a second layer of protection with 2-Step Verification, which sends a single-use code to your phone for you to enter when you sign in. 
            *   **Password -** Manage your password.
            *   **2-Step Verification -** Manage 2-Step verification.
            *   **App Passwords -** Create and manage application passwords.
        *   **Account recovery options -** If you forget your password or cannot access your account, we will use this information to help you get back in.
            *   **Account Recovery Email -** The email to send recovery instructions.
            *   **Account Recovery Phone -** The email to send recovery instructions.
            *   **Security Question -** A secret question to use as verification during recovery.
    *   **Device activity & notifications -** Review which devices have accessed your account, and control how you want to receive alerts if Google thinks something suspicious might be happening.
        *   **Recent security events -** Review security events from the past 28 days.
        *   **Recently used devices -** Check when and where specific devices have accessed your account.
        *   **Security alerts settings -** Decide how we should contact you to let you know of a change to your account’s security settings or if we notice something suspicious.
    *   **Connected apps & sites -** Keep track of which apps and sites you have approved to connect to your account and remove ones you no longer use or trust.
        *   **Apps connected to your account -** Make sure you still use these apps and want to keep them connected.
        *   **Saved passwords -** Use Google Smart Lock to remember passwords for apps & sites you use Chrome & Android
*   **[Personal Info & Privacy](https://myaccount.google.com/privacy) -** Decide which privacy settings are right for you
    *   **Your personal info** \- Manage this basic information — your name, email, and phone number.
    *   **Manage your Google activity -** You have lots of tools for controlling and reviewing your Google activity. These help you decide how to make Google services work better for you.
        *   **Activity controls -** Tell Google which types of data you’d like to save to improve your Google experience.
        *   **Review activity -** Here’s where you can find and easily review your Google activity.
    *   **Ads Settings** - You can control the information Google uses to show you ads.
    *   **Control your content -** You are in control of the content in your Google Account, even if you stop using Google products or decide to delete your account altogether.
        *   **Copy or move your content -** You can make a copy of the content in your account at any time, and use it for another service.
        *   **Download your data -** Create an archive with a copy of your data from Google products.
        *   **Assign an account trustee -** Approve a family member or friend to download some of your account content in the event it is left unattended for an amount of time you've specified.
        *   **[Data Awareness](https://privacy.google.com/intl/en/your-data.html)** - We want you to understand what data we collect and use.
*   **[Account Preferences](https://myaccount.google.com/preferences)** \- Manage options for language, storage, and accessibility. Set up your data storage and how you interact with Google.
    *   **Language & Input Tools -** Set Google services on the web to work in the language of your choice.
    *   **Accessibility -** Adjust Google on the web to match your assistive technology needs.
    *   **Your Google Drive storage -** Your Google account comes with free Google Drive storage to share across Gmail, Google Photos, Google Docs and more. If this isn't enough, you can add more storage here.
    *   **Delete your account or services -** If you are no longer interested in using specific Google services like Gmail or Google+, you can delete them here. You can even delete your entire Google Account.
        *   **Delete a Google service -** A Google Account offers many services. Some of these services can be deleted from your account individually.
        *   **Delete your Google Account -** You're trying to delete your Google Account, which provides access to various Google services. You'll no longer be able to use any of those services, and your account and data will be lost.

These are all building blocks I will add to my [API management research](http://management.apievangelist.com/), with an overlap with my [API portal research](http://portal.minimum.apievangelist.com/). I'm not sure how many of them I will end up recommending as part of my formal guide, but it provides a nice set of things that seem like they SHOULD be present in all online services we use. Google also had two other tools present here, that overlap with my [security](http://security.apievangelist.com/) and [privacy](http://privacy.apievangelist.com) research:

*   **[Security Checkup](https://security.google.com/settings/security/secureaccount?continue=https%3A%2F%2Fmyaccount.google.com%2F)** - Protect your account in just a few minutes by reviewing your security settings and activity.
*   **[Privacy Checkup](https://myaccount.google.com/privacycheckup?continue=https%3A%2F%2Fmyaccount.google.com%2F)** - Take this quick checkup to review important privacy settings and adjust them to your preference.

I am going to be going through Google's privacy and security sections, grabbing any relevant building blocks that providers should be considering as part their API operations as well. For now, I'm just going to add this to the list of things I think should be present in the accounts of third party platform users, whether they are a developer, partner, or otherwise.

I would also like to consider what other providers offer accounts features I'd like to emulate. Like Amazon, Dropbox, and other leading providers. I would also like to take another look at what the [API management providers like 3Scale](http://3scale.net) offer in this area. Eventually, I want to have an industry guide that API providers can follow when thinking about what they should be offering as part of their user accounts.