---
layout: post
title: Webmaster Tools for Bing and Google
description: Overview of Google and Bing's webmaster tools, and what you can do using them.
tags: [web, tools]
---

## [Google Search Console](https://www.google.com/webmasters/tools/home?hl=en)

* Add a property with your website address
* Verify it using one of the 5 methods on the next step.

Now open the console for your added property ([http://rahulja.in](http://rahulja.in) in my case)

* First thing you need to to is add sitemap of your website. It is generally an `xml` file named `sitemap.xml` in your website root folder.

  1. Go to `Crawl` > `Sitemaps`
  2. Click on `Add/Test Sitemap` button
  3. Add url to your sitemap.
  4. Submit.

    Now you will see an entry on how many links were submitted and how many have been indexed from that sitemap. It is the easiest way to submit all the links in your website automatically.
  You can use a sitemap generator, or in my case, jekyll gives me the `sitemap.xml` file every time I build my website.
  
* Next check and edit your `robots.txt` file. A robots.txt file is a file at the root of your site that indicates those parts of your site you don’t want accessed by search engine crawlers.

  1. Go to `Crawl` > `robots.txt Tester`
  2. Edit your robots.txt and check for errors.
  3. Sample-
        # Allow crawling of all content
        User-agent: *
        Disallow: /tag/*
  
    `Disallow` allows us to ignore certain urls and url types that we'd rather not be indexed and appear in search results.
    
* You can use `Crawl` > `Fetch as Google` to see how google renders pages from your website. Check different types of URLs for both mobile and desktop googlebot types.

* 


---
<br>
##### References
[Learn about sitemaps - Search Console Help](https://support.google.com/webmasters/answer/156184?hl=en) 
<br>
[Learn about robots.txt files - Search Console Help](https://support.google.com/webmasters/answer/6062608?hl=en) 
<br>
[Use Fetch as Google for websites - Search Console Help](https://support.google.com/webmasters/answer/6066468) 
<br>


