---
title: Install ADB drivers on your system
description: How to install ADB drivers on Mac, Linux and Windows without installing the full Android SDK or the Android Studio.
tags: [package, android]
---


You don't need to install the entire android development environment to get the adb now. Google collectively refers to ADB, fastboot, and a few other utilities as the Platform Tools package and has provided them separately now. This post is assuming you don't have android sdk or android studio installed.


### Install adb on MacOSX using [Homebrew](http://brew.sh/){:target="_blank" rel="noopener noreferrer"}

This is the easiest way and will provide automatic updates.

{% highlight bash %}
# Install homebrew
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install adb
brew install android-platform-tools

# run
adb devices
{% endhighlight bash %}
<br>


### Install adb manually

1. Download your OS-specific zip of platform tools from [here](https://developer.android.com/studio/releases/platform-tools.html#download){:target="_blank" rel="noopener noreferrer"}.
2. Extract the contents of the .zip file to a folder you can find later.
3. Navigate to the extracted folder using your terminal, and there you will find the adb command.
4. Run the command normally once you're into the extracted folder- `adb devices`


---
<br>

##### References
[Installing ADB on MAC OS X - StackOverflow](http://stackoverflow.com/a/32314718){:target="_blank" rel="noopener noreferrer"}
<br>
[SDK Platform Tools Download - Android Studio](https://developer.android.com/studio/releases/platform-tools.html){:target="_blank" rel="noopener noreferrer"}
<br>
[Install Android's ADB and Fastboot Tools on Any OS - Lifehacker](http://lifehacker.com/the-easiest-way-to-install-androids-adb-and-fastboot-to-1586992378){:target="_blank" rel="noopener noreferrer"}
