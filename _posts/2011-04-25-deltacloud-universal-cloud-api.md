---
layout: post
title: Deltacloud Universal Cloud API
url: http://apievangelist.com/2011/04/25/deltacloud-universal-cloud-api/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Cloud
---
kinlane-productions2.s3.amazonaws.com ![](http://kinlane-productions.s3.amazonaws.com/cloud-computing/DeltaCloud.PNG "DeltaCloud")I'm spending time going through [RedHat's](http://www.redhat.com/) [Deltacloud set of cloud APIs](http://deltacloud.org/). They recently recently moved the project to the [Apache Incubator](http://incubator.apache.org/deltacloud/index.html) and submitted it to the [Distributed Management Task Force](http://www.dmtf.org/) (DMTF) .

With the [Deltacloud API](http://deltacloud.org/) you can start an instance on an internal cloud, then with the same code start another on [Amazon EC2](http://aws.amazon.com/ec2/) or [Rackspace](http://www.rackspace.com/). This seems like the closest thing we have at the moment, to a true [cloud API standard](http://www.kinlane.com/2010/06/cloud-storage-api-standard/).

Deltacloud Core provides:

*   REST API
*   Backward compatibility across versions

Deltacloud Aggregator provides a web UI in front of the Deltacloud API. With Deltacloud Aggregator, you can:

*   View image status and stats across clouds, all in one place
*   Migrate instances from one cloud to another
*   Manage images locally and provision them on any cloud

[Deltacloud API](http://deltacloud.org/index.html) and Aggregator are free and open source and support the following providers:

*   [Amazon EC2](http://aws.amazon.com/ec2/)
*   [GoGrid](http://www.gogrid.com/)
*   [OpenNebula](http://www.opennebula.org/)
*   [Rackspace](http://www.rackspace.com/)
*   [RHEV-M](http://www.redhat.com/virtualization/rhev/desktop/rhevm/)
*   [RimuHosting](http://rimuhosting.com)

They will also soon be supporting:

*   [](http://www.terremark.com/)[Terremark](http://www.terremark.com/)
*   [vCloud](http://www.vmware.com/solutions/cloud-computing/)

They offer up a [Ruby Gem for download](http://deltacloud.org/download.html). I will have to get a new environment up and running so I can play with. The ability to manage resources across multiple cloud providers and allowing for instance portability is very important to me. Hopefully I can get time to play with more.