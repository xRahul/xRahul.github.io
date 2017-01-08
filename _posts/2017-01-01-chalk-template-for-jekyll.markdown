---
layout: post
title: "Chalk Template for Jekyll"
description: "Chalk is a high quality, completely customizable, performant and 100% free blog template for Jekyll."
og_image: "posts/chalk-template-for-jekyll/og-image.png"
image: "posts/chalk-template-for-jekyll/og-image.png"
tags: [template, jekyll, web]
---
{:.reveal}
{% include image.html path="posts/chalk-template-for-jekyll/og-image.png" path-detail="posts/chalk-template-for-jekyll/og-image@2x.png" alt="Chalk Template" %}

{:.reveal}
[Download Chalk here!](https://github.com/nielsenramon/chalk)

{:.reveal}
#### Features:
{:.reveal}
  - {:.reveal} Dark and Light theme.
  - {:.reveal} Filter on tags.
  - {:.reveal} Customizable pagination.
  - {:.reveal} Beautified link sharing in Facebook and other social media.
  - {:.reveal} Automatic time to read post indicator.
  - {:.reveal} Automatic RSS feed.
  - {:.reveal} About page.
  - {:.reveal} 404 page.
  - {:.reveal} SEO optimized.
  - {:.reveal} PageSpeed optimized.
  - {:.reveal} Cross browser support (supports all modern browsers).
  - {:.reveal} Media embed for videos.
  - {:.reveal} Enlarge images on click (like Medium).

{:.reveal}
#### Integrations
{:.reveal}
  - {:.reveal} [Google Analytics](https://analytics.google.com/analytics/web/)
  - {:.reveal} [Google Fonts](https://fonts.google.com/)
  - {:.reveal} [Disqus](https://disqus.com/)
  - {:.reveal} [Ionicons](http://ionicons.com/)
  - {:.reveal} Social media links

{:.reveal}
#### Used tools
  - {:.reveal} [Autoprefixer](https://github.com/postcss/autoprefixer)
  - {:.reveal} [Bower](http://bower.io/)
  - {:.reveal} [Circle CI](https://circleci.com/)
  - {:.reveal} [Html-proofer](https://github.com/gjtorikian/html-proofer)
  - {:.reveal} [Jekyll](http://jekyllrb.com/)
  - {:.reveal} [Jekyll assets](https://github.com/jekyll/jekyll-assets)
  - {:.reveal} [Jekyll Sitemap](https://github.com/jekyll/jekyll-sitemap)
  - {:.reveal} [HTML5 Boilerplate](https://html5boilerplate.com/) (Influenced by)
  - {:.reveal} [Kickster](http://kickster.nielsenramon.com/)
  - {:.reveal} [Retina.js](http://imulus.github.io/retinajs/)
  - {:.reveal} [STACSS](http://stacss.nielsenramon.com/)


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
## Emoji support :star:

{:.reveal}
Emoji's can be used everywhere in :cat2: your markdown!

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

{:.reveal}
{% highlight html %}
{% include image.html path="posts/chalk-template-for-jekyll/og-image.png" path-detail="posts/chalk-template-for-jekyll/og-image@2x.png" alt="Chalk Template" %}
{% endhighlight %}

{:.reveal}
Videos can be added and are responsive by default (4x3 by default, 16x9 with extra class).

{:.reveal}
<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/iWowJBRMtpc?modestbranding=1&autohide=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
</div>

{:.reveal}
{% highlight html %}
<div class="embed-responsive embed-responsive-16by9">
    <iframe src="url-to-video" frameborder="0" allowfullscreen></iframe>
</div>
{% endhighlight %}
