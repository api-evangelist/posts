---
published: true
layout: post
title: Making Announcements About Individual API Property Changes
tags:
  - Properties
  - Changes
  - Communications
  - Monetization
  - Costs
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/birth-of-a-nation-old-broken-piano-street.jpg
---
There are many things you can learn about producing APIs by studying the practices of other API producers. Understanding when you should write a blog post or make some other announcements will vary from provider to provider, and very much depend on the resources you have available. Some elements of API operations aren’t always worth individual announcements, and it is interesting to assess why GitHub felt the need to [post about updating the retention period for the ‘last_activity_at’ parameter](https://github.blog/changelog/2025-01-17-updating-retention-period-for-last_activity_at-values-on-the-user-management-api-public-preview-to-90-days/#clarifying-the-behavior-of-last_activity_at-in-the-context-of-the-current-changes), with the following bullets shared for why this change warranted its own blog post.

- **Assigning a Seat** - When you assign a seat to a user, the last_activity value for that seat will be nil until the user interacts with it for the first time. This is true even if the user had previous activity from a different seat assignment in another organization.
- **Removing a Seat** - When you remove a seat from a user, the last_activity data for that user is set to nil in the revoking org. Their data is unaffected for other admins who have granted that user a seat in other orgs, when pulled for those orgs.
- **Reassigning a User to Seat** - If you remove a seat from a user and later assign a new seat to the same user, the last_activity value for the new seat will again be nil until the user’s next interaction, regardless of whether the seat was previously assigned to them.
- **Deleting a User** - If you delete a user, all associated last_activity data for that user is immediately deleted.
- **Determining Dormancy** - When retrieving activity data for a seat, you can use the created_at and last_activity values to determine dormancy. For example, if created_at is more than 30 days ago and last_activity is either more than 30 days ago or nil, the seat may be considered dormant.
- **Activity Data for Assigned Seats** - When retrieving last_activity data for assigned seats, you will receive a nil value if the assignee’s most recent activity record is older than 90 days.

One of the common themes here is that pricing for access to software is determined by seat, so having money associated with an API property would speak to why an individual property change would be worth its own blog post. If changes are made to something used to manage cost, and will directly or indirectly speak to the revenue of the API producer and the cost paid by API consumer, you should prioritize the communication around. There is no way to document in an OpenAPI which properties have a direct or indirect impact on revenue or cost, but it provides an interesting look at the role parameters play in configuring API applications and integrations, and when we should prioritize communications around changes to our APIs.


