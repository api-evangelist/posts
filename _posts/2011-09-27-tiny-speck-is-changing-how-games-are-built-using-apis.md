---
layout: post
title: Tiny Speck is Changing How Games Are Built Using APIs
url: >-
  http://apievangelist.com/2011/09/27/tiny-speck-is-changing-how-games-are-built-using-apis/
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/glitch-logo.png
author:
  name: kinlane
tags:
  - APIs
---
kinlane-productions2.s3.amazonaws.com [![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/glitch/glitch-logo.png)](http://www.glitch.com/)

[Audrey](http://www.hackeducation.com/ "Audrey Watters") introduced me to a very cool gaming company the other day called [Tiny Speck](http://tinyspeck.com/ "Tiny Speck"). The company, the latest project of Flickr co-founder Stewart Butterfield, has released its first game to the public today: [Glitch](http://www.glitch.com/ "Glitch"). Glitch is a web-based massively-multiplayer game. The game allows you to choose how to grow and shape the world: building and developing, learning new skills, collaborating or competing with everyone else in one enormous, ever-changing, persistent world.

Glitch is a visually stunning game environment, delivered using a flash client (although the startup does state other clients will be available someday). There's a lot that's familiar about the game, particularly to fans of MMOs and social games -- Glitch is a combination of the two, arguably. But where Glitch really strikes me as doing something new is with its back-end. Glitch uses a low level Java back-end with game logic scripted in JavaScript, built on a suite of APIs, allowing for maximum flexibility and easy deployment. No surprise, it's this API piece that strikes me as compelling and different from other games.

kinlane-productions2.s3.amazonaws.com [![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/glitch/glitch-universe-1.jpg)](http://www.glitch.com/)

I do have a list of game-related APIs to evaluate, I just haven’t had the time to dive in too deeply. But at first glance most game APIs tend to only deliver meta-information about games, profiles, and the communities around games. Though I don’t doubt APIs drive a lot of game development, most developers I’ve talked to don’t think much about it, let alone make the APIs public or showcase them.

Glitch could be a “game-changer” in that Tiny Speck has built its game around the API, as well as exposing these same APIs to its developer community, enabling them in turn to build web, iOS, and Android games around the Glitch universe.

kinlane-productions2.s3.amazonaws.com [![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/glitch/glitch-universe-2.jpg)](http://www.glitch.com/)

The Glitch API uses JSON over HTTP or HTTPS, in an RPC style, allowing parameters to be passed via GET or POST vars, with an available JSONP callback. The API provides access to players, skills, avatars, achievements, auctions, calendars and locations within the game.

I hope there are other gaming platforms employing APIs in this fashion, if you know of any let me know. Glitch is the first game I’ve seen build an entire game upon APIs, enabling the ultimate amount of flexibility in its development and deployment, and also opening this power up to the gaming community to create an endless, ever-changing, persistent gaming universe.