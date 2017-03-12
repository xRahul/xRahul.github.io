---
title: Using Homebrew on MacOSX
description: How to use the Homebrew package manager on MacOSX and things to keep in mind while using it.
tags: [macosx, package]
og_image: "posts/using-homebrew-on-macosx/homebrew.jpg"
---

{:.reveal}
{% include image.html path="posts/using-homebrew-on-macosx/homebrew.jpg" path-detail="posts/using-homebrew-on-macosx/homebrew.jpg" alt="Homebrew" %}

{:.reveal}
If you have a mac, you need to have [homebrew](http://brew.sh/){:target="_blank"} installed on it. It is the best package manager for mac, and in their own words-

{:.reveal}
> Homebrew installs [the stuff you need](https://github.com/Homebrew/homebrew-core/tree/master/Formula){:target="_blank"} that Apple didn’t.

{:.reveal}
Homebrew installs packages to their own directory and then symlinks their files into `/usr/local`. To _install homebrew_, checkout simple instructions provided on their [homepage](http://brew.sh/){:target="_blank"}. Homebrew deals with formulas, which are basically package definition written in Ruby.

{:.reveal}
### Below is a cheatsheet of basic brew commands

{:.reveal}
_With `--verbose` or `-v`, many commands print extra debugging information. Note that these flags should only appear after a command._

{:.reveal}
`brew --version` | Shows current version (_1.1.9 at the time of this post_)
`brew install` | Install formula
`brew uninstall` | Uninstall formula
`brew update` | Fetch the newest version of Homebrew from __GitHub__ using `git`
`brew list` | List all installed formulae
`brew search text|/text/` | Perform a substring search of formula names as string or regex
`brew analytics (on|off)` | Turn on/off Homebrew's analytics
`brew deps (formulae)` | Show dependencies for formulae
`brew desc (formula)` | Display formula's name and one-line description
`brew doctor` | Check your system for potential problems with brew installations
`brew info (formula)` | Display information about formula
`brew leaves` | Show installed formulae that are not dependencies of another installed formula
`brew outdated` | Show formulae that have an updated version available
`brew prune` | Remove dead symlinks from the Homebrew prefix
`brew reinstall (formula)` | Uninstall and then install formula
`brew tap` | List all installed taps (_A tap is a repository of formulae_)
`brew untap (tap)` | Remove a tapped repository
`brew --cellar` | Display the location where formula would be installed
`brew cleanup (formula)` | For specific formulae, remove any older versions from the cellar.
`brew cleanup -n` | It shows what would be removed, but does not actually remove anything
`brew cask cleanup` | cleanup in any installed casks
`brew cask list` | list all installed casks

<br>
<br>
{:.reveal}
Once you have installed homebrew and started using it, maintenance is required regualrly to keep the packages up to date, clearing out the old and checking if everything installed is working correctly. Use this command to do all that at once-

{:.reveal}
{% highlight bash %}
brew update && brew upgrade && brew cleanup && brew cask cleanup; brew doctor
{% endhighlight %}

{:.reveal}
or better yet, create an `alias` of this run that with single word command `brewski`-

{:.reveal}
{% highlight bash %}
echo "alias brewski='brew update && brew upgrade && brew cleanup && brew cask cleanup; brew doctor'" >> ~/.bash_profile
. ~/.bash_profile
brewski
{% endhighlight %}


---
<br>
{:.reveal}
##### References
[Homebrew](http://brew.sh/){:target="_blank"}
<br>
[Homebrew - GitHub](https://github.com/Homebrew/brew){:target="_blank"}
<br>
[Getting Started with Homebrew - Safari Books](https://www.safaribooksonline.com/blog/2014/03/03/homebrew/){:target="_blank"}


