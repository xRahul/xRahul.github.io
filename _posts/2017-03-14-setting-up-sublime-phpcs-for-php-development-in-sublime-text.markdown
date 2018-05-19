---
title: Setting up sublime-phpcs for PHP development in Sublime Text
description: Install and setup sublime-phpcs with PHP CodeSniffer, PHP Coding Standard Fixer, Linter, Mess Detector and scheck from fb/pfff for Sublime Text 3
tags: [development, macosx, php, tools]
og_image: "posts/setting-up-sublime-phpcs-for-php-development-in-sublime-text/phpcs.jpg"
---


#### This is a plugin for Sublime Text which provides checkstyle reports using the following tools (all optional):

* Linter (`php -l`). This provides a convenient way to perform only a syntax check on the given PHP code.
* [PHP CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer){:target="_blank" rel="noopener noreferrer"} 1.3+ (`phpcs`). It tokenizes PHP, JavaScript and CSS files to detect violations of a defined coding standard.
* [PHP Mess Detector](https://phpmd.org/){:target="_blank" rel="noopener noreferrer"} 1.4+ (`phpmd`). It detects and reports various potential problems with the code like possible bugs, suboptimal code, overcomplicated expressions and unused parameters, methods, properties.
* [Scheck](https://github.com/facebook/pfff/wiki/Scheck){:target="_blank" rel="noopener noreferrer"} 0.23+ (`scheck`, part of Facebook’s pfff toolchain). This will help you find stupid mistakes like a typo in your code.


#### You can also configure the plugin to fix the issues using either

* [PHP Coding Standards Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer){:target="_blank" rel="noopener noreferrer"} 0.2+ (`php-cs-fixer`). It can fix most issues in your code when you want to follow the PHP coding standards as defined in the PSR-1 and PSR-2 documents and many more.
* or [PHP Code Beautifier](https://github.com/squizlabs/PHP_CodeSniffer){:target="_blank" rel="noopener noreferrer"} 2.2.0+ (`phpcbf`). It can automatically correct coding standard violations.

This plugin has been tested on:

* Mac OS X 10.8.2
* Ubuntu 11.10
* Windows 7
* Sublime Text 2
* Sublime Text 3


## Install sublime-phpcs

* Using Sublime Text’s Package Control _(recommended)_

  `Preferences` -> `Package Control` -> `Install Package` -> `Phpcs`

* Or via git checkout in Sublime Text packages

  Simply checkout the git repo into `~/Library/Application Support/Sublime Text [VERSION NUMBER]/Packages/` for MacOSX or the equivalent folder on Windows or Linux.

{% highlight bash %}
cd ~/Library/Application\ Support/Sublime\ Text\ 2/Packages/
git clone git://github.com/benmatselby/sublime-phpcs.git Phpcs
{% endhighlight %}


## Install dependencies

* Make sure you have [`php`](http://php.net/manual/en/install.php){:target="_blank" rel="noopener noreferrer"} installed on your system and check that you can use it directly-

{% highlight bash %}
php -v
    PHP 5.6.28 (cli) (built: Dec  6 2016 12:38:54)
    Copyright (c) 1997-2016 The PHP Group
    Zend Engine v2.6.0, Copyright (c) 1998-2016 Zend Technologies
{% endhighlight %}

* Now you need to have the latest [`composer`](https://getcomposer.org/doc/00-intro.md){:target="_blank" rel="noopener noreferrer"} installed. Use the provided link to move it globally.
* Now install the [PHP CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer){:target="_blank" rel="noopener noreferrer"}, [PHP Mess Detector](https://phpmd.org/){:target="_blank" rel="noopener noreferrer"}, [PHP CS Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer){:target="_blank" rel="noopener noreferrer"} and [PHP Code Beautifier](https://github.com/squizlabs/PHP_CodeSniffer){:target="_blank" rel="noopener noreferrer"} globally. You can also follow the links to see the install instructions for each.

{% highlight bash %}
composer global require squizlabs/php_codesniffer
composer global require phpmd/phpmd
composer global require friendsofphp/php-cs-fixer
{% endhighlight %}

* Please note the absolute path of all the installed packages (On a Mac/Linux based environment), you can use:

{% highlight bash %}
which phpcs
which phpmd
which php-cs-fixer
which phpcbf
{% endhighlight %}

* Now install Scheck dependencies.
  * Make sure you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git){:target="_blank" rel="noopener noreferrer"} installed.
  * Follow the instructions here for generic, macosx and linux to install only these two packages- `Ocaml` and `camlp4`. You do not need the other packages like GTK, Cairo, SWI-prolog or Java for scheck.
    For macosx, use [homebrew]({% post_url 2017-03-11-using-homebrew-on-macosx %}){:target="_blank" rel="noopener noreferrer"}

{% highlight bash %}
# for macosx using homebrew
brew install objective-caml camlp4

# for fedora, you may need to install these too
yum install ocaml-camlp4 ocaml-camlp4-devel perl-pod-usage
{% endhighlight %}

* Now install [Scheck](https://github.com/facebook/pfff/wiki/Main#install){:target="_blank" rel="noopener noreferrer"}. If you follow the instructions mentioned in their project, you can download and setup the entire `pfff` set of tools. But for our case, we just need the `scheck` part. So, follow these instructions to get just that.

  After following the steps, you'll find a file called `scheck` in your cloned repo. Please note the absolute path of that as you'll need it later.

{% highlight bash %}
# clone their github repository somewhere
git clone https://github.com/facebook/pfff.git --depth=1

# build pfff tools
cd <path_to_cloned_github_repository>
./configure -novisual
make depend
make
{% endhighlight %}

* Now you just need to setup the configuration for `sublime-phpcs` package in sublime text.
  * `Preferences` -> `Package Settings` -> `PHP Code Sniffer` -> `Settings - User`
  * Add the following json configuration-

{% highlight json %}
{
    "phpcs_php_path": "/usr/bin/php",
    "phpcs_executable_path": "/Users/<username>/.composer/vendor/bin/phpcs",
    "phpmd_executable_path": "/Users/<username>/.composer/vendor/bin/phpmd",
  "phpcbf_executable_path": "/Users/<username>/.composer/vendor/bin/phpcbf",
    "scheck_executable_path": "/Users/<username>/Documents/GitHub/pfff/scheck",
    "php_cs_fixer_executable_path": "/Users/<username>/.composer/vendor/bin/php-cs-fixer",

    "phpmd_run": true,
    "scheck_run": true,
    "phpcs_linter_run": true,
    "phpcs_sniffer_run": true,

    "extensions_to_blacklist": [],

    "phpcs_execute_on_save": false,
    "phpcs_show_errors_on_save": false,
    "phpcs_command_on_save": false,
    "php_cs_fixer_on_save": false,
    "phpcbf_on_save": false,
    "phpcs_linter_command_on_save": false,
    "phpmd_command_on_save": false,
    "scheck_command_on_save": false
}
{% endhighlight %}

In the above configuration, replace the paths with your install paths.

Also use either `php_cs_fixer` or `phpcbf` for fixing the errors. I'd recommend using `phpcbf` as that is already isntalled with `phpcs` and thus you won't have to install `php_cs_fixer` at all.

I am disabling anything happening on save, but you can change the configuration any way you want. Find the defaults here-

* `Preferences` -> `Package Settings` -> `PHP Code Sniffer` -> `Settings - Default`

Now you just need to do `Cmd` + `Shift` + `P` and look for `sniff` options.


---
<br>

##### References
[sublime-phpcs - Github Pages](http://benmatselby.github.io/sublime-phpcs/){:target="_blank" rel="noopener noreferrer"}
<br>
[PHP Command Line Options - php.net](http://php.net/manual/en/features.commandline.options.php){:target="_blank" rel="noopener noreferrer"}
<br>
[PHP CodeSniffer - Github](https://github.com/squizlabs/PHP_CodeSniffer){:target="_blank" rel="noopener noreferrer"}
<br>
[PHP Mess Detector - phpmd](https://phpmd.org/){:target="_blank" rel="noopener noreferrer"}
<br>
[PHP Coding Standards Fixer - Github](https://github.com/FriendsOfPHP/PHP-CS-Fixer){:target="_blank" rel="noopener noreferrer"}
<br>
[PHP Code Beautifier - Github](https://github.com/squizlabs/PHP_CodeSniffer){:target="_blank" rel="noopener noreferrer"}
<br>
[PHP installation - php.net](http://php.net/manual/en/install.php){:target="_blank" rel="noopener noreferrer"}
<br>
[Introduction - Composer](https://getcomposer.org/doc/00-intro.md){:target="_blank" rel="noopener noreferrer"}
<br>
[Installing Git - git-scm](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git){:target="_blank" rel="noopener noreferrer"}
<br>
[Scheck Wiki - Github](https://github.com/facebook/pfff/wiki/Scheck){:target="_blank" rel="noopener noreferrer"}
<br>
[pfff Wiki - Github](https://github.com/facebook/pfff/wiki/Main){:target="_blank" rel="noopener noreferrer"}
<br>
[pfff General Install Instructions - Github](https://github.com/facebook/pfff/blob/master/install.txt){:target="_blank" rel="noopener noreferrer"}
<br>
[pfff Linux Install Instructions - Github](https://github.com/facebook/pfff/blob/master/install_linux.txt){:target="_blank" rel="noopener noreferrer"}
<br>
[pfff MacOSX Install Instructions - Github](https://github.com/facebook/pfff/blob/master/install_macos.txt){:target="_blank" rel="noopener noreferrer"}
<br>
[sublime-phpcs example configurations - Github](https://github.com/benmatselby/sublime-phpcs/tree/master/example-settings){:target="_blank" rel="noopener noreferrer"}