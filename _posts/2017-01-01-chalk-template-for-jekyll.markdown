---
title: "Chalk Template for Jekyll"
description: Chalk is a high quality, completely customizable, performant and 100% free blog template for Jekyll.
og_image: "posts/chalk-template-for-jekyll/og-image.png"
image: "posts/chalk-template-for-jekyll/og-image.png"
tags: [jekyll, web]
ampTags: [amp-iframe]
---

{% include image.html path="posts/chalk-template-for-jekyll/og-image.png" path-detail="posts/chalk-template-for-jekyll/og-image@2x.png" alt="Chalk Template" %}


[Download Chalk here!](https://github.com/nielsenramon/chalk){:target="_blank" rel="noopener noreferrer"}


#### Features:
  -  About page.
  -  Automatic RSS feed.
  -  Automatic sitemap.
  -  Automatic time to read post indicator.
  -  Cross browser support (supports all modern browsers).
  -  Custom 404 page.
  -  Custom code highlighting.
  -  Customizable pagination.
  -  Dark and Light theme.
  -  Easy setup and deploying.
  -  Enlarge images on click.
  -  Filter on tags.
  -  Frequently updated with new versions.
  -  Many social media links supported.
  -  Media embed for videos.
  -  PageSpeed optimized.
  -  Proper sharing links for posts on Facebook, Twitter and Google Plus.
  -  SEO optimized.
  -  Support for local fonts.
  -  Support for emoji's.


#### Integrations

  -  [Google Analytics](https://analytics.google.com/analytics/web/){:target="_blank" rel="noopener noreferrer"}
  -  [Google Fonts](https://fonts.google.com/){:target="_blank" rel="noopener noreferrer"}
  -  [Disqus](https://disqus.com/){:target="_blank" rel="noopener noreferrer"}
  -  [Ionicons](http://ionicons.com/){:target="_blank" rel="noopener noreferrer"}


#### Used tools
  -  [Autoprefixer](https://github.com/postcss/autoprefixer){:target="_blank" rel="noopener noreferrer"}
  -  [Circle CI](https://circleci.com/){:target="_blank" rel="noopener noreferrer"}
  -  [Html-proofer](https://github.com/gjtorikian/html-proofer){:target="_blank" rel="noopener noreferrer"}
  -  [Jekyll](http://jekyllrb.com/){:target="_blank" rel="noopener noreferrer"}
  -  [Jekyll assets](https://github.com/jekyll/jekyll-assets){:target="_blank" rel="noopener noreferrer"}
  -  [Jekyll Sitemap](https://github.com/jekyll/jekyll-sitemap){:target="_blank" rel="noopener noreferrer"}
  -  [HTML5 Boilerplate](https://html5boilerplate.com/){:target="_blank" rel="noopener noreferrer"} (Influenced by)
  -  [Kickster](http://kickster.nielsenramon.com/){:target="_blank" rel="noopener noreferrer"}
  -  [Retina.js](http://imulus.github.io/retinajs/){:target="_blank" rel="noopener noreferrer"}
  -  [STACSS](http://stacss.nielsenramon.com/){:target="_blank" rel="noopener noreferrer"}
  -  [Yarn](https://yarnpkg.com){:target="_blank" rel="noopener noreferrer"}




### Sample Post

Chalk uses the default Jekyll syntax highlighting gem Rouge. It has a customized style for both light and dark theme.
Use the `highlight` tag to use the following code highlighting your preferred language:

{% highlight html %}
<!-- This is a comment -->
<div class="grid">
  <h1>This is a heading</h1>
  <p>
    This is a paragraph text.
  </p>
</div>
{% endhighlight %}


## Headings

Chalk includes 3 headings by default:

## Heading first level

### Heading second level

#### Heading third level

{% highlight markdown %}
## Heading first level
### Heading second level
#### Heading third level
{% endhighlight %}


## Lists

Unordered list example:

*  Unordered list item 1
*  Unordered list item 2
*  Unordered list item 3
*  Unordered list item 4


Ordered list example:
1.  Ordered list item 1
2.  Ordered list item 1
3.  Ordered list item 1
4.  Ordered list item 1


{% highlight markdown %}
* Unordered list item 1
* Unordered list item 2

1. Order list item 1
2. Order list item 1
{% endhighlight %}


## Emoji support

Emoji's can be used everywhere in your markdown!


## Quotes

A quote looks like this:

> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna.

{% highlight markdown %}
> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
> incididunt ut labore et dolore magna.
{% endhighlight %}


## Media

Images can be added with a default `<img>` tag.
If you wish that an image can be enlarged on click use the image include tag. You can pass 3 variables:
-  `path`: Image to show in the blog post.
-  `path-detail`: Image to show when enlarging.
-  `alt`: Alt text for image in blog post.

{% include image.html path="posts/chalk-template-for-jekyll/og-image.png" path-detail="posts/chalk-template-for-jekyll/og-image@2x.png" alt="Chalk Template" %}

{% highlight liquid %}
{% raw %}
{% include image.html
  path="posts/chalk-template-for-jekyll/og-image.png"
  path-detail="posts/chalk-template-for-jekyll/og-image@2x.png"
  alt="Chalk Template" %}
{% endraw %}
{% endhighlight %}

Videos can be added and are responsive by default (4x3 by default, 16x9 with extra class).

{% if page.amp %}
<amp-iframe width="500"
  height="281"
  layout="responsive"
  sandbox="allow-scripts allow-same-origin"
  allowfullscreen
  frameborder="0"
  src="https://www.youtube.com/embed/oiNVQ9Zjy4o?modestbranding=1&autohide=1&showinfo=0&controls=0">
</amp-iframe>
{% else %}

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/oiNVQ9Zjy4o?modestbranding=1&autohide=1&showinfo=0&controls=0" allowfullscreen></iframe>
</div>
{% endif %}

{% highlight html %}
<div class="embed-responsive embed-responsive-16by9">
    <iframe src="url-to-video" allowfullscreen></iframe>
</div>
{% endhighlight %}
