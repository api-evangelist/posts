---
layout: post
title: State of Popular Database Platforms And Their Native API Publishing Features
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-database-new.png
author:
  name: kinlane
tags:
  - Database
  - Data
  - Platform
  - Publishing
  - Features
  - Platforms
---
I had a reinder on my task list to check-in on where some of the common database platforms were when it came to APIs. I think it was a Postgres announcement from a while back that put the thought in my notebook, but as an old database guys I tend to check-in regularly on the platforms I have worked most with.

The point of this check-in, is to see how far along each of the database platforms are when it comes to easy API deployment, directly from tables. The three relational database platforms I'm most familiar with are:

*   **SQL Server -** [The platform has APIs to manage](https://technet.microsoft.com/en-us/library/Aa174556\(v=SQL.80\).aspx), and you [deploy an OData service](https://msdn.microsoft.com/en-us/data/gg192995.aspx), as well as [put .NET to work](https://azure.microsoft.com/en-us/documentation/articles/web-sites-dotnet-rest-service-aspnet-api-sql-database/), but nothing really straightward, that would allow any developer to quickly expose simple RESTful API.
*   **PostgreSQL** - I'd say PostgreSQL is furthest along with thier "early draft proposal of an extension to PostgreSQL allowing clients to access the database using HTTP", as they have the most complete information about how to deploy an API.
*   **MySQL** - There was a [writeup in InfoQ about MySQL offering a REST API](http://www.infoq.com/news/2014/09/MySQL-RESTLabs), but from what I can tell it is still in [MySQL Labs](http://labs.mysql.com/), without much movement or other stories I could find to show any next steps.

The database that drives my API platform is MySQL running via Amazon RDS. I haven't worked on Postgres for years, and jumped ship on SQL Server a while back (my therapist says I cannot talk about it). I automate the generation of my APIs using [Swagger](http://swagger.io) and the [Slim framework](http://www.slimframework.com/), then do the finish work like polishing the endpoints to look less like their underlying database, and more like how they will actually be used. 

Maybe database platforms shouldn't get into the API game? Leaving API deployment to the API gateway providers like [SlashDB](http://www.slashdb.com/) and [DreamFactory](http://blog.dreamfactory.com/add-a-rest-api-to-any-sql-db-in-minutes). It just seems like really low hanging fruit for these already used database solutions, to make it dead simple for developers to expose, and craft APIs from existing datasources.

if you are using any database to API solutions for SQL Server, PostgreSQL, or MySQL, please let me know.