---
layout: post
title: iCloud Storage APIs
url: http://apievangelist.com/2011/06/08/icloud-storage-apis/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Cloud
  - Storage
  - APIs
---
kinlane-productions2.s3.amazonaws.com ![](http://kinlane-productions.s3.amazonaws.com/apple/iCloud-Steel.jpg)[iCloud](http://www.apple.com/icloud/ "iCloud") storage APIs allow IOS application developers to store documents and other data to a central location so userscan view or edit from any device without having to sync or transfer files.

There are two ways that applications can take advantage of iCloud storage:

*   Document Storage - Enabling storage and sharing of information in document form.
*   Key-Value Data Storage - Enabling storage and sharing small amounts of data.

Most applications will use iCloud document storage to share documents, which is a feature that users think of when they think of cloud storage. Users care about whether photos, videos, and documents are accessible across devices while the key-value data store is not something a user would never see.

Key-value storage will be used for smallkinlane-productions2.s3.amazonaws.comlication state, settings, and other important information that delivers a better user experience. Although not as apparent to the end-user, key-value storage will be just as important as document storage.

![](http://kinlane-productions.s3.amazonaws.com/apple/iCloud-Storage-APIs.png)

All iCloud storage is managed centrally by the iCloud service, which handles coordination of documents and key-value stores. The iCloud service handles storage searches, change notifications, version control, conflicts, and security for applications that integrate with a user's iCloud storage account.

Neither document storage or key-value storage in the cloud are anything new. But when it is implemented as part of the IOS platform, it becomes much bigger. Apple is solving everyday problems users face when using their smart phones, by storing data centrally in the cloud.

ICloud APIs will enable developers to build rich applications on the IOS platform, and continue to grow IOS market share.

###### Related articles

*   [Apple iCloud API](http://apievangelist.com/2011/06/06/apple-icloud-api/) (apievangelist.com)
*   [iCloud Storage APIs](http://www.kinlane.com/2011/06/icloud-storage-apis/) (kinlane.com)
*   [Documents in the Cloud with Apple iCloud](http://www.kinlane.com/2011/06/documents-in-the-cloud-with-apple-icloud/) (kinlane.com)