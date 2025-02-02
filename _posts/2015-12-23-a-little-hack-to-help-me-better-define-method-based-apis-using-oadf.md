---
layout: post
title: A Little Hack To Help Me Better Define Method Based APIs Using OADF
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-technology-of-apis.png
author:
  name: kinlane
tags:
  - Define
  - APIs
---
A handful of the most iconic APIs out there, which I also happen to depend on for my own operations, are some of the more frustratingly designed APIs I know. There are many API design offenses we all commit, but one of the most frustrating for me is when you use a single URL, and depend on a single parameter, for accessing everything an API has to offer.

A couple of my favorite APIs, Flickr and Amazon EC2 both employ this approach. A single URL, and a single parameter for working with a wealth of API driven resources. This is a classic mistake of the technologist, delivering what you need, but making it difficult to actually learn about an API. This approach to API design delivers upon the functionality desired, but makes very difficult to document using common approaches available to us like OADF, and API Blueprint.

When it comes to Amazon EC2, and Flickr, there is so much more value to be articulated in the API design by itself. [Flickr organizes their API methods by grouping them on the main page for the API](https://www.flickr.com/services/api/), and [Amazon just groups each method for Amazon EC2 on their documentation page](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/OperationList-query.html)\--something [you can get in a single list if you like](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Operations.html), if you prefer. It doesn't' take much work to expose the richness available within these APIs, but when documenting using OADF, it can be hard to articulate the value brought to the table by each resource.

Amazon and Flickr both rely on all API calls utilizing GET, but rely on a query parameter to define each unique API call. When you document using OADF, this ends up being a single API endpoint, with a parameter, and any number of parameters to pull out the value an API offers. I needed to define each endpoint as /?method=XXXX, while still allowing each underlying parameter to be defined as a collection for each endpoint. 

The problem is that each parameter gets appended, using another ?, resulting in /?method=XXXX?variable1=XXXX. This design flaw, just appends the next variable to my method, messing with the whole mojo of the API call. To hack it, all I did was add a sort of shock absorber set of variables to each method call, with the first parameter working in concert.

*   **/method=XXXX&k=1?l=1&**

In both AWS and Flickr scenarios, k, and l variables are just concatenated and absorbed, and every variable that follows is processed as you'd except. I chose the two variables for two reasons, one they are letters in the middle of the alphabet (reducing chance they will be used), and also the fact that they are my initials. It is a stupid little hack, but it seems to work (so far), for the APIs I am looking to define.

[This little hack has helped me to better document AWS EC2 and RDS, as well as Flickr](http://stack.apievangelist.com/companies.html). I know of some other APIs out there, that I've neglected documenting because of this design flaw. Now that I have a little hack, I can better design using this little hack, and hopefully represent a little more of the value that exists within--which is the gateway to a heightened API awareness in my opinion.