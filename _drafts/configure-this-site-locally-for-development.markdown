---
layout: post
title: Configure this site locally for development
description: Configure the repository xRahul.github.io locally for development
tags: [jekyll, ruby, dev-environment]
og_image: "posts/configure-this-site-locally-for-development/og-image.png"
---

{% include image.html path="posts/configure-this-site-locally-for-development/og-image.png" path-detail="posts/configure-this-site-locally-for-development/og-image@2x.png" alt="Chalk Template" %}


Install ruby 2.3.3

    {% highlight bash %}
    rbenv install 2.3.3
    rbenv global 2.3.3
    ruby -v
    {% endhighlight %}

Install site

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
    
Run local development server

    {% highlight bash %}
    bundle exec jekyll serve --drafts
    {% endhighlight %}
    
Deploy to github master branch

    {% highlight bash %}
    bin/deploy
    {% endhighlight %}
    

---
<br>
##### References
[rahulja.in](http://rahulja.in) 
<br>
[xRahul.github.io - Github](https://github.com/xRahul/xRahul.github.io/tree/new-site) 
<br>
[How to fetch all git branches - StackOverflow](http://stackoverflow.com/a/10312587/1435626) 