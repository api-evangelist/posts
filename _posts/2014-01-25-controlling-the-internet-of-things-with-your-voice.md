---
layout: post
title: Controlling The Internet of Things With Your Voice
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/thingspeak/thingspeak-talkback-api-to-cloud.jpg
author:
  name: kinlane
tags:
  - Internet of Things
  - Voice
---
Saturday afternoons are great for closing out tabs I’ve had open all week, and the theme this Saturday is APIs and the Internet of Things. This time it is about [controlling your Internet of Things using voice the Thingspeak Talkback API](http://community.thingspeak.com/2014/01/introducing-talkback-the-new-internet-of-things-app-to-control-things-with-the-thingspeak-cloud/) and the Arduino Yún, which seems to be the darling of API to Internet of Things projects.

The [Thingspeak Talkback API](https://thingspeak.com/docs/talkback) allows for the adding, updating, deleting and executing of voice commands. It acts as a middleware for the [Arduino Yún](http://arduino.cc/en/Main/ArduinoBoardYun?from=Main.ArduinoYUN), allowing IoT devices to to be able to check for commands that need executing—providing an API driven queue of voice commands for all of the Internet connected devices in your life.

As the cost of connecting everyday objects to the Internet gets easier and cheaper, it is fascinating to see the different approaches that providers take to connect these objects to the web. Thingspeak is choosing to go the voice route, where Temboo is betting on the fact that people want to [connect IoT devices with their existing cloud platforms and services](http://apievangelist.com/2014/01/25/interoperability-between-web-and-internet-of-things-opening-up-to-nondevelopers/).