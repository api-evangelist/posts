---
published: true
layout: post
title: The Basics of Postman Role Based Access Control (RBAC)
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_roles_postman.png
author:
  name: kinlane
tags:
  - RBAC
  - Access
---
I am working up towards a loftier piece on the importance of RBAC to the API life cycle, and as part of my research I was going through all of the documentation postman has [for roles and permission at the team, workspace, api, and collection levels](https://learning.postman.com/docs/postman/collaboration/roles-and-permissions/). RBAC is one of those layers of the API discussion that touches on almost every other layer, making it an area you have to not just think about at the microscopic levels within workspaces, but also at the macro level thinking about organizational and team level impact. I’m feeling like I am going to need to flesh out several dimensions of what is RBAC here on the blog, as well as the other critical factors of what influences RBAC across operations.

### The Basic Building Blocks of Postman RBAC

To get a handle on things I wanted to think deeply about the core building blocks of Postman RBAC, and consider the roles, as well as the objects in which access is being controlled, but also the downstream effects of how RBAC gets applied or not. When you browse the Postman Learning Center under [roles and permissions](https://learning.postman.com/docs/postman/collaboration/roles-and-permissions/) you get the following breakdown:

*   **Team Role**
    *   Admin: manage team members and team settings
    *   Billing: manage team plan and payments
    *   Developer: access team resources and workspaces
*   **Workspace Roles**
    *   Admin: manage workspace details and members
    *   Collaborator: work on team resources in a workspace
*   **API Roles**
    *   Editor: edit APIs directly
    *   Viewer: view, fork, and export APIs
*   **Collection Roles**
    *   Editor: edit collections directly
    *   Viewer: view, fork, and export collections

That represents nine individual roles defined by the API resources in which they are applied. Postman does a good job of breaking out the control each role has in each of the respective areas, but the overall effectiveness of RBAC will be determined by how solid of a strategy you have for defining and managing each of these areas—meaning you are going to to have a strategy in place, and being willing to invest the energy in managing each area:

*   **Teams** - If team members of all of your AIP development staff isn’t well defined, controlling access will be challenging.
*   **Workspaces** - Without a formal approach how workspaces are create and how they are used controlling will be difficult.
*   **APIs** - In the absence of a strategy for how APIs are defined, synced, and leveraged you won’t be able to nail down access.
*   **Collections** - There has to be a method to the madness of how collections are created and evolved or control will fall short.

It is difficult to control access to a moving and ever evolving target. Sure, teams, workspaces, apis, and collections will always be evolving, but you have to contract some sort of scaffolding for governing how teams, workspaces, apis, and collections are created, versioned, and shared, establishing a strategy for managing change across all types of roles. 

### Downstream API Life Cycle Effects of RBAC

Since Postman collections are used to define, power, and publish other stops along the API life cycle you have to have some observability and plan behind how collections are used across the API life cycle, as well as how workspaces are defined to support the development, sustainment, and general operations of all APIs. The downstream API life cycle effects are hard to quantify if you do not have a solid strategy for defining how APIs and collections are used for each stop along the API lifecycle, including, but not limited to:

*   **Mocks** - How are mock servers defined, created, used, maintained, and torn down as part of the API life cycle.
*   **Docs** - Which collections are used purely for supporting documentation and how are they evolved and put to use.
*   **Tests** - Which collections and APIs are used as part of performance, contract, integration, and other test suites.
*   **Code** - When it comes to code generation there should a clear vision of which artifacts are being used to deliver.

If you don’t have a clear understanding of how you are powering each stop along the API life cycle it can be difficult to control access to the teams, workspaces, roles, and collections behind each individual stop. Meaning you can’t properly prevent changes being made to the documentation for an API if you don’t have a clear picture of which collections power docs, and which workspaces that collections exists in. To do right, you need step back and look at the big picture.

### Considering the Bigger Picture

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stalin-time-border-crossing-through-fence.jpg)

In addition to the roles and resources we are controlling access to and the downstream effects of RBAC being applied well or not, there are numerous other dimensions to think about. Too many for just a single post, requiring me to spend time digging, scratching, and working to make sense of what the big picture of API RBAC looks like across the entire API life cycle. Here are just a few of the areas I am thinking about in addition to what I have listed above, making for the seeds of future blog posts here on API Evangelist. 

*   **Activity** - How is the activity of team members evaluated to better understand the need for tightening or loosening RBAC.
*   **History** - How is the history of collections usage evaluated and understood to help paint a clear picture of how RBAC is applied.
*   **Auditing** - Regularly auditing RBAC looking for how it is being applied or not being applied across an organization.
*   **Monitoring** - Considering how monitoring can be enabled to better understand the effectiveness of RBAC across teams.
*   **Automation** - Looking to automate some of the implementation of RBAC to help realize the housekeeping needed for RBAC.
*   **Observability** - Producing output from RBAC activity so that there is as much observability as possible into how access is controlled.

Like most aspects of API operations there is so much that can go wrong with RBAC if you don’t have other areas in order. I would say that there has to be other dimensions I am not considering. These six areas reflect the output from RBAC being applied across the API life cycle. I’ll have to step back a bit and simmer on the roles and resources involved with RBAC, as well as how this trickles down to mocks, docs, testing, and code, while also looking to quantify it all along the way. I am guessing there are other dimensions like SSO and GitHub sync which will significantly impact the success or failure of RBAC in ways I can’t see right now—I will keep scratching.

This is the first time that I have had a tool that would even begin to touch on the complexity of organizational change across API operations, so a lot of this is new territory for me. This isn’t RBAC for a single API, which I’ve done numerous times. This is RBAC for the API life cycle. Most places I’ve worked do not have a formal definition of what the API life cycle means, so controlling access across the life cycle based upon well defined roles represents a pretty big opportunity to move the API conversation forward across large organizations. Anyways, I will keep simmering on this stuff, and dive into other dimensions, eventually arriving at some point with a stronger view of what RBAC looks like for the entire API life cycle so that I can write something a little smarter for the Postman blog.