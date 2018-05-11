---
title: "Chalk Template for Jekyll"
description: Chalk is a high quality, completely customizable, performant and 100% free blog template for Jekyll.
og_image: "posts/chalk-template-for-jekyll/og-image.png"
image: "posts/chalk-template-for-jekyll/og-image.png"
tags: [jekyll, web]
ampTags: [amp-iframe]
---

{% include image.html path="posts/chalk-template-for-jekyll/og-image.png" path-detail="posts/chalk-template-for-jekyll/og-image@2x.png" alt="Chalk Template" %}

{:.reveal}
[Download Chalk here!](https://github.com/nielsenramon/chalk){:target="_blank" rel="noopener noreferrer"}

{:.reveal}
#### Features:
  - {:.reveal} About page.
  - {:.reveal} Automatic RSS feed.
  - {:.reveal} Automatic sitemap.
  - {:.reveal} Automatic time to read post indicator.
  - {:.reveal} Cross browser support (supports all modern browsers).
  - {:.reveal} Custom 404 page.
  - {:.reveal} Custom code highlighting.
  - {:.reveal} Customizable pagination.
  - {:.reveal} Dark and Light theme.
  - {:.reveal} Easy setup and deploying.
  - {:.reveal} Enlarge images on click.
  - {:.reveal} Filter on tags.
  - {:.reveal} Frequently updated with new versions.
  - {:.reveal} Many social media links supported.
  - {:.reveal} Media embed for videos.
  - {:.reveal} PageSpeed optimized.
  - {:.reveal} Proper sharing links for posts on Facebook, Twitter and Google Plus.
  - {:.reveal} SEO optimized.
  - {:.reveal} Support for local fonts.
  - {:.reveal} Support for emoji's.

{:.reveal}
#### Integrations
{:.reveal}
  - {:.reveal} [Google Analytics](https://analytics.google.com/analytics/web/){:target="_blank" rel="noopener noreferrer"}
  - {:.reveal} [Google Fonts](https://fonts.google.com/){:target="_blank" rel="noopener noreferrer"}
  - {:.reveal} [Disqus](https://disqus.com/){:target="_blank" rel="noopener noreferrer"}
  - {:.reveal} [Ionicons](http://ionicons.com/){:target="_blank" rel="noopener noreferrer"}

{:.reveal}
#### Used tools
  - {:.reveal} [Autoprefixer](https://github.com/postcss/autoprefixer){:target="_blank" rel="noopener noreferrer"}
  - {:.reveal} [Circle CI](https://circleci.com/){:target="_blank" rel="noopener noreferrer"}
  - {:.reveal} [Html-proofer](https://github.com/gjtorikian/html-proofer){:target="_blank" rel="noopener noreferrer"}
  - {:.reveal} [Jekyll](http://jekyllrb.com/){:target="_blank" rel="noopener noreferrer"}
  - {:.reveal} [Jekyll assets](https://github.com/jekyll/jekyll-assets){:target="_blank" rel="noopener noreferrer"}
  - {:.reveal} [Jekyll Sitemap](https://github.com/jekyll/jekyll-sitemap){:target="_blank" rel="noopener noreferrer"}
  - {:.reveal} [HTML5 Boilerplate](https://html5boilerplate.com/){:target="_blank" rel="noopener noreferrer"} (Influenced by)
  - {:.reveal} [Kickster](http://kickster.nielsenramon.com/){:target="_blank" rel="noopener noreferrer"}
  - {:.reveal} [Retina.js](http://imulus.github.io/retinajs/){:target="_blank" rel="noopener noreferrer"}
  - {:.reveal} [STACSS](http://stacss.nielsenramon.com/){:target="_blank" rel="noopener noreferrer"}
  - {:.reveal} [Yarn](https://yarnpkg.com){:target="_blank" rel="noopener noreferrer"}



{:.reveal}
### Sample Post

{:.reveal}
Chalk uses the default Jekyll syntax highlighting gem Rouge. It has a customized style for both light and dark theme.
Use the `highlight` tag to use the following code highlighting your preferred language:

{:.reveal}
{% highlight html %}
<!-- This is a comment -->
<div class="grid">
  <h1>This is a heading</h1>
  <p>
    This is a paragraph text.
  </p>
</div>
{% endhighlight %}

{:.reveal}
## Headings

{:.reveal}
Chalk includes 3 headings by default:

{:.reveal}
## Heading first level
{:.reveal}
### Heading second level
{:.reveal}
#### Heading third level

{:.reveal}
{% highlight markdown %}
## Heading first level
### Heading second level
#### Heading third level
{% endhighlight %}

{:.reveal}
## Lists

{:.reveal}
Unordered list example:
{:.reveal}
* {:.reveal} Unordered list item 1
* {:.reveal} Unordered list item 2
* {:.reveal} Unordered list item 3
* {:.reveal} Unordered list item 4

{:.reveal}
Ordered list example:
1. {:.reveal} Ordered list item 1
2. {:.reveal} Ordered list item 1
3. {:.reveal} Ordered list item 1
4. {:.reveal} Ordered list item 1

{:.reveal}
{% highlight markdown %}
* Unordered list item 1
* Unordered list item 2

1. Order list item 1
2. Order list item 1
{% endhighlight %}

{:.reveal}
## Emoji support

{:.reveal}
Emoji's can be used everywhere in your markdown!

{:.reveal}
## Quotes

{:.reveal}
A quote looks like this:

{:.reveal}
> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna.

{:.reveal}
{% highlight markdown %}
> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
> incididunt ut labore et dolore magna.
{% endhighlight %}

{:.reveal}
## Media

{:.reveal}
Images can be added with a default `<img>` tag.
If you wish that an image can be enlarged on click use the image include tag. You can pass 3 variables:
- {:.reveal} `path`: Image to show in the blog post.
- {:.reveal} `path-detail`: Image to show when enlarging.
- {:.reveal} `alt`: Alt text for image in blog post.

{% include image.html path="posts/chalk-template-for-jekyll/og-image.png" path-detail="posts/chalk-template-for-jekyll/og-image@2x.png" alt="Chalk Template" %}


{% highlight liquid %}
{% raw %}
{% include image.html 
  path="posts/chalk-template-for-jekyll/og-image.png" 
  path-detail="posts/chalk-template-for-jekyll/og-image@2x.png" 
  alt="Chalk Template" %}
{% endraw %}
{% endhighlight %}

{:.reveal}
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
{:.reveal}
<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/oiNVQ9Zjy4o?modestbranding=1&autohide=1&showinfo=0&controls=0" allowfullscreen></iframe>
</div>
{% endif %}

{:.reveal}
{% highlight html %}
<div class="embed-responsive embed-responsive-16by9">
    <iframe src="url-to-video" allowfullscreen></iframe>
</div>
{% endhighlight %}
