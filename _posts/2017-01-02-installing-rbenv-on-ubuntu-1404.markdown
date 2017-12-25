---
title: Installing rbenv on Ubuntu 14.04
description: Install rbenv and ruby-build to manage multiple ruby versions on Ubuntu 14.04
tags: [linux, ruby, package]
og_image: "posts/installing-rbenv-on-ubuntu-1404/rbenv-og-image.png"
image: "posts/installing-rbenv-on-ubuntu-1404/rbenv-og-image.png"
---

{:.reveal}
#### Installing [rbenv](https://github.com/rbenv/rbenv#installation){:target="_blank" rel="noopener noreferrer"}

{:.reveal}
{% highlight bash %}
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev

git clone https://github.com/rbenv/rbenv.git ~/.rbenv

cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc

~/.rbenv/bin/rbenv init
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
{% endhighlight %}
    
{:.reveal}
Disable rubygems to generate local documentation for each gem that you install

{:.reveal}
{% highlight bash %}
echo "gem: --no-document" > ~/.gemrc
{% endhighlight %}

{:.reveal}
Restart your shell so that PATH changes take effect. (Opening a new terminal tab will usually do it.) or run:

{:.reveal}
{% highlight bash %}
source ~/.bashrc
{% endhighlight %}

{:.reveal}
Now check if rbenv was set up:

{:.reveal}
{% highlight bash %}
type rbenv
{% endhighlight %}

---
{:.reveal}
#### Install [ruby-build](https://github.com/rbenv/ruby-build#readme){:target="_blank" rel="noopener noreferrer"}
{:.reveal}
It provides the `rbenv install` command that simplifies the process of [installing new Ruby versions](https://github.com/rbenv/rbenv#installing-ruby-versions){:target="_blank" rel="noopener noreferrer"}.

{:.reveal}
{% highlight bash %}
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
{% endhighlight %}

---
<br>
{:.reveal}
##### References
[How To Install Ruby on Rails with rbenv on Ubuntu 14.04 - Digitalocean](https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-14-04){:target="_blank" rel="noopener noreferrer"}
<br>
[Install rbenv - Github](https://github.com/rbenv/rbenv#installation){:target="_blank" rel="noopener noreferrer"}
<br>
[Install ruby-build - Github](https://github.com/rbenv/ruby-build#installation){:target="_blank" rel="noopener noreferrer"} 

