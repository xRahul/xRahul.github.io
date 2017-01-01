---
layout: post
title: "Chalk Template for Jekyll"
description: "Chalk is a high quality, completely customizable, performant and 100% free blog template for Jekyll."
og_image: "posts/chalk-template-for-jekyll/og-image.png"
tags: [template, jekyll, web]
---

{% include image.html path="posts/chalk-template-for-jekyll/og-image.png" path-detail="posts/chalk-template-for-jekyll/og-image@2x.png" alt="Chalk Template" %}

[Download Chalk here!](https://github.com/nielsenramon/chalk)

#### Features:
  - Dark and Light theme.
  - Filter on tags.
  - Customizable pagination.
  - Beautified link sharing in Facebook and other social media.
  - Automatic time to read post indicator.
  - Automatic RSS feed.
  - About page.
  - 404 page.
  - SEO optimized.
  - PageSpeed optimized.
  - Cross browser support (supports all modern browsers).
  - Media embed for videos.
  - Enlarge images on click (like Medium).

#### Integrations
  - [Google Analytics](https://analytics.google.com/analytics/web/)
  - [Google Fonts](https://fonts.google.com/)
  - [Disqus](https://disqus.com/)
  - [Ionicons](http://ionicons.com/)
  - Social media links

#### Used tools
  - [Autoprefixer](https://github.com/postcss/autoprefixer)
  - [Bower](http://bower.io/)
  - [Circle CI](https://circleci.com/)
  - [Html-proofer](https://github.com/gjtorikian/html-proofer)
  - [Jekyll](http://jekyllrb.com/)
  - [Jekyll assets](https://github.com/jekyll/jekyll-assets)
  - [Jekyll Sitemap](https://github.com/jekyll/jekyll-sitemap)
  - [HTML5 Boilerplate](https://html5boilerplate.com/) (Influenced by)
  - [Kickster](http://kickster.nielsenramon.com/)
  - [Retina.js](http://imulus.github.io/retinajs/)
  - [STACSS](http://stacss.nielsenramon.com/)


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
* Unordered list item 1
* Unordered list item 2
* Unordered list item 3
* Unordered list item 4

Ordered list example:
1. Ordered list item 1
2. Ordered list item 1
3. Ordered list item 1
4. Ordered list item 1

{% highlight markdown %}
* Unordered list item 1
* Unordered list item 2

1. Order list item 1
2. Order list item 1
{% endhighlight %}

## Emoji support :star:

Emoji's can be used everywhere in :cat2: your markdown!

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
- `path`: Image to show in the blog post.
- `path-detail`: Image to show when enlarging.
- `alt`: Alt text for image in blog post.

{% highlight html %}
{% include image.html path="posts/chalk-template-for-jekyll/og-image.png" path-detail="posts/chalk-template-for-jekyll/og-image@2x.png" alt="Chalk Template" %}
{% endhighlight %}

Videos can be added and are responsive by default (4x3 by default, 16x9 with extra class).

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/iWowJBRMtpc?modestbranding=1&autohide=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
</div>

{% highlight html %}
<div class="embed-responsive embed-responsive-16by9">
    <iframe src="url-to-video" frameborder="0" allowfullscreen></iframe>
</div>
{% endhighlight %}
