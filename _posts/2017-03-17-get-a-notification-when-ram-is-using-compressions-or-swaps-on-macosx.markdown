---
title: Get a notification when RAM is using compressions or swaps on MacOSX
description: A scheduled AppleScript to notify when RAM on mac is using compression or swaps. This is useful to find out when your mac gets less responsive so you can take appropriate measures, or when you have SSD installed as swaps reduce its life.
tags: [macosx, hack]
---

{:.reveal}
When you have not shut down your mac for a long time and are using a lot of different stuff like having multiple tabs opened in the browser, your RAM tends to get filled.

{:.reveal}
After some time, it'll start to use `compressions` to store old data in RAM to make way for fresh data. And after that, it'll start to use `swaps` on your hard disk.

{:.reveal}
This usage of swap results in a lot of `reads/writes` in the hard disk, which can result in less responsive mac in case of HDD and shortening of life in SSDs.

{:.reveal}
This is a script you can schedule to run however and whenever you want using `crontab` and `applescript`. It checks various RAM stats like compressions and swap usage and notifies when they are being used.

{:.reveal}
Currently, it's scheduled to **_run every hour_** and to check these RAM parameters-
* {:.reveal} Compressions
* {:.reveal} Decompressions
* {:.reveal} Swapins
* {:.reveal} Swapouts

{:.reveal}
Here is the [**gist**](https://gist.github.com/xRahul/a787f0c4eebfadf7af5beafdb99f9fe7){:target="_blank"} with the code. Just download the `applescript` file, and set it up using `crontab`

{% gist a787f0c4eebfadf7af5beafdb99f9fe7 %}


---
<br>
{:.reveal}
##### References
[Crontab.guru](hthttps://crontab.guru/){:target="_blank"} 
<br>
[AppleScript Programming - Wikibooks](https://en.wikibooks.org/wiki/AppleScript_Programming){:target="_blank"} 
<br>
[xRahul/RAM_Overuse_Notification.applescript - Github Gist](https://gist.github.com/xRahul/a787f0c4eebfadf7af5beafdb99f9fe7){:target="_blank"} 
<br>
[Introduction to AppleScript - Apple Developer Documentation](https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptX/AppleScriptX.html){:target="_blank"} 
<br>
[Introduction to AppleScript Overview - Apple Developer Documentation](https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptX/AppleScriptX.html){:target="_blank"} 
<br>
[Introduction to AppleScript Language Guide - Apple Developer Documentation](https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html){:target="_blank"}
<br>
[How can I configure my computer to run an AppleScript at a specific time? -  Stackexchange](http://apple.stackexchange.com/questions/24862/how-can-i-configure-my-computer-to-run-an-applescript-at-a-specific-time-caveat){:target="_blank"} 
<br>

