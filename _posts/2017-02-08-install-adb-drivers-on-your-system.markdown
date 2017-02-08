---
title: Install ADB drivers on your system
description: How to install ADB drivers on Mac, Linux and Windows without installing the full android sdk or the android studio
tags: [package, android]
---

{:.reveal}
You don't need to install the entire android development environment to get the adb now. Google collectively refers to ADB, fastboot, and a few other utilities as the Platform Tools package and has provided them seperately now. This post is assuming you don't have android sdk or android studio installed.


{:.reveal}
### Install adb on MacOSX using [Homebrew](http://brew.sh/){:target="_blank"}

{:.reveal}
This is the easiest way and will provide automatic updates.

{:.reveal}
{% highlight bash %}
# Install homebrew
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install adb 
brew install android-platform-tools

# run
adb devices
{% endhighlight bash %}
<br>

{:.reveal}
### Install adb manually


1. {:.reveal} Download your OS specific zip of platform tools from [here](https://developer.android.com/studio/releases/platform-tools.html#download){:target="_blank"}.
2. {:.reveal} Extract the contents of the .zip file to a folder you can find later.
3. {:.reveal} Navigate to the extracted folder using your terminal, and there you will find the adb command.
4. {:.reveal} Run the command normally once you're in to the extracted folder- `adb devices`


---
<br>
{:.reveal}
##### References
[Installing ADB on MAC OS X - StackOverflow](http://stackoverflow.com/a/32314718){:target="_blank"} 
<br>
[SDK Platform Tools Download - Android Studio](https://developer.android.com/studio/releases/platform-tools.html){:target="_blank"} 
<br>
[Install Android's ADB and Fastboot Tools on Any OS - Lifehacker](http://lifehacker.com/the-easiest-way-to-install-androids-adb-and-fastboot-to-1586992378){:target="_blank"}
