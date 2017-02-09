---
title: Configure this site locally for development
description: Configure the repository xRahul.github.io locally for development
tags: [jekyll, ruby, development]
og_image: "posts/configure-this-site-locally-for-development/og-image.png"
image: "posts/configure-this-site-locally-for-development/og-image.png"
---

{:.reveal}
{% include image.html path="posts/configure-this-site-locally-for-development/og-image.png" path-detail="posts/configure-this-site-locally-for-development/og-image@2x.png" alt="Chalk Template" %}

{:.reveal}
Install ruby 2.3.3

{:.reveal}
{% highlight bash %}
rbenv install 2.3.3
rbenv global 2.3.3
ruby -v
{% endhighlight %}

{:.reveal}
Install site

{:.reveal}
{% highlight bash %}
git clone https://github.com/xRahul/xRahul.github.io.git
git config --global credential.helper cache
git config --global credential.helper 'cache --timeout=36000'
cd xRahul.github.io/
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all
bin/setup
{% endhighlight %}
    
{:.reveal}
Run local development server

{:.reveal}
{% highlight bash %}
bundle exec jekyll serve --drafts
{% endhighlight %}
    
{:.reveal}
Deploy to github master branch

{:.reveal}
{% highlight bash %}
bin/deploy
{% endhighlight %}
    

---
<br>
{:.reveal}
##### References
[rahulja.in](http://rahulja.in){:target="_blank"}
<br>
[xRahul.github.io - Github](https://github.com/xRahul/xRahul.github.io/tree/new-site){:target="_blank"}
<br>
[How to fetch all git branches - StackOverflow](http://stackoverflow.com/a/10312587/1435626){:target="_blank"}