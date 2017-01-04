---
layout: post
title: Google Search Console - Basic Usage
description: Overview of Google's webmaster tools, and what you can do using them.
tags: [web, tools]
---

{:.reveal}
Add and verify your website on the Search Console. 
<br>
Now open the console for your added property (In my case - [http://rahulja.in](http://rahulja.in))

{:.reveal}
<ul>
  <li class="reveal">
    First thing you need to to is add sitemap of your website. It is generally an 
    <code class="highlighter-rouge">xml</code>
    file named 
    <code class="highlighter-rouge">sitemap.xml</code>
    <span>in your website root folder.</span>

    <ol>
      <li>
        Go to
        <code class="highlighter-rouge">Crawl</code>
        >
        <code class="highlighter-rouge">Sitemaps</code>
      </li>
      <li>
        Click on 
        <code class="highlighter-rouge">Add/Test Sitemap</code>
        button
      </li>
      <li>Add url to your sitemap.</li>
      <li>Submit.</li>
    </ol>

    Now you will see an entry on how many links were submitted and how many have been indexed from that sitemap. It is the easiest way to submit all the links in your website automatically.
    You can use a sitemap generator, or in my case, jekyll gives me the 
    <code class="highlighter-rouge">sitemap.xml</code>
    file every time I build my website.
  </li>
  <br>
  <li>
    Next check and edit your 
    <code class="highlighter-rouge">robots.txt</code>
    file. This is a file at the root of your site that indicates those parts of your site you don’t want accessed by search engine crawlers.
    <ol>
      <li>
        Go to
        <code class="highlighter-rouge">Crawl</code>
        >
        <code class="highlighter-rouge">robots.txt Tester</code>
      </li>
      <li>
        Edit your robots.txt and check for errors.
      </li>
      <li>
        Sample-
{% highlight sass %}
# Allow crawling of all content
User-agent: *
Disallow: /tag/*
{% endhighlight %}
        <code class="highlighter-rouge">Disallow</code>
        allows us to ignore certain urls and url types that we'd rather not be indexed and appear in search results.
      </li>
    </ol>
  </li>
  <br>
  <li class="reveal">
    <code class="highlighter-rouge">Crawl</code>
    >
    <code class="highlighter-rouge">Fetch as Google</code>
    to see how google renders pages from your website. Check different types of URLs for both mobile and desktop googlebot types.
  </li>
  <br>
  <li class="reveal">
    Add <i>google analytics</i> property to your website if you've added analytics on your website. Do this by clicking on Settings gear on the top right and selecting
    <code class="highlighter-rouge">Google Analytics Property</code>.
  </li>
  <br>
  <li class="reveal">
    If your website has some structured data like articles or products, you can highlight them to google for better search results.
    <ol>
      <li>
        Go to
        <code class="highlighter-rouge">Search Appearance</code>
        >
        <code class="highlighter-rouge">Data Highlighter</code>.
        Click on the red
        <code class="highlighter-rouge">Start Highlighting</code>
        Button.
      </li>
      <li>
        Enter the URL of a typical page that you want to highlight. Like link to an article, product etc.
      </li>
      <li>
        Start following the instructions and highlight as much data as you can find on the page. Make google learn pattern in your posts, so that it can auto highlight new pages that gets added to the index.
      </li>
    </ol>
  </li>
</ul>

{:.reveal}
* `Other Resources`-
    * Take the [Intro to Webmaster Academy](https://support.google.com/webmasters/answer/6001102?hl=en&utm_source=wmx&utm_campaign=links) course. It'll be helpful in getting you started.
    * If you've added any structured data in you website, you can use the [Structured Data Testing Tool](https://developers.google.com/webmasters/structured-data/testing-tool) to validate and view it.
    * Use [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=en&utm_source=wmx&utm_campaign=wmx_otherlinks&url=http://rahulja.in/)  to find out how to make your web pages fast on all devices.


---
<br>
{:.reveal}
##### References
[Learn about sitemaps - Search Console Help](https://support.google.com/webmasters/answer/156184?hl=en) 
<br>
[Learn about robots.txt files - Search Console Help](https://support.google.com/webmasters/answer/6062608?hl=en) 
<br>
[Use Fetch as Google for websites - Search Console Help](https://support.google.com/webmasters/answer/6066468) 
