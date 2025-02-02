---
layout: post
title: Some Key IoT Security Considerations
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/acti_e77_10mp_od_dome_with_1027471.jpg
atomdate: 2016-10-12T18:00:00.000Z
tags:
  - Security
---
I am continuing to learn from folks studying [the recent DDOS attack on Krebs on Security](https://krebsonsecurity.com/2016/10/who-makes-the-iot-things-under-attack/). While not a straightforward API story, it overlaps with the API world in several ways, from the technical aspects of how the IoT devices were hacked and enlisted in the bot army, to how the hack has been analyzed online, and the sharing of machine-readable details of the attack.

There were some interesting nuggets from the attack analysis I wanted to include in my wider [Internet of Things (IoT) research](http://internet-of-things.apievangelist.com/). When it came to the security lapses in the surveillance cameras, printers, and other devices used as part of the DDOS, there were several key areas in play:

*   **Username / Password -** Default passwords for devices aren't changed, or the settings of unique passwords are not enforced. This makes it pretty easy to get right into the most common devices, after learning the default configuration.
*   **[Universal Plug and Play (UPnP)](https://en.wikipedia.org/wiki/Universal_Plug_and_Play) -** Increased usage of UPnP for the discovery and default opening up of networks to support device communication and monitoring. Often doing so without much consideration for security, and the bigger picture, serving the specific needs of a company and a single device.
*   **[Telnet / SSH](https://www.dd-wrt.com/wiki/index.php/Telnet/SSH_and_the_Command_Line) -** Even if one changes the password on the device’s Web interface, the same default credentials may still allow remote users to log in to the device using telnet and/or SSH--providing a separate doorway for manufacturers, developers, and hackers to gain control over a device.
*   **Firmware Upgrades -** A device may have had a patch released, but the actual firmware for a device has not actually been updated. The ease of installation, discover and access to the Internet, allows devices to be more easily installed by average folks unaware of wider security concerns, and the fact that devices will need to be updated regularly.

While none of these areas speak directly to APIs, they definitely speak to some of the similar ways in which API security are compromised, and I think are also aspects of device operations that might be assisted, or improved upon with APIs. Right now I'm just adding this as security considerations for Internet of Things (IoT) implementations, but will also be keeping an eye out for any further role that APIs are playing in this type of attack, as well as the follow-up analysis.

[Brian Krebs provides a wealth of insight into the attack](https://krebsonsecurity.com/2016/10/who-makes-the-iot-things-under-attack/), as well as the multiple other reports I've read. Krebs provided a [CSV of the devices that had compromised passwords](https://krebsonsecurity.com/wp-content/uploads/2016/10/IoTbadpass-Sheet1.csv), something I am going to add the company URL and logo, as well as more product information to. This will help me learn more about the products contributing to the mayhem, as well as the companies behind them. After that, I will put some more thought into how APIs can be put to work helping make sense of this growing problem--if nothing else we can just use them to make the forensic details of each attack available online, so we can sift through the wreckage easier with each future event.