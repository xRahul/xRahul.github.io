## Personalized blog & profile


[![GitHub license](https://img.shields.io/github/license/xRahul/xRahul.github.io.svg?style=flat-square)](https://github.com/xRahul/xRahul.github.io/blob/new-site/LICENSE)
[![Build Status](https://travis-ci.org/xRahul/xRahul.github.io.svg?branch=new-site)](https://travis-ci.org/xRahul/xRahul.github.io)
![Gem Version](https://img.shields.io/gem/v/jekyll.svg)
[![security](https://hakiri.io/github/xRahul/xRahul.github.io/new-site.svg)](https://hakiri.io/github/xRahul/xRahul.github.io/new-site)

[![Website PageSpeed](https://pagespeed-badges.herokuapp.com/?url=rahulja.in)](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Frahulja.in%2F)
[![Greenkeeper badge](https://badges.greenkeeper.io/xRahul/xRahul.github.io.svg)](https://greenkeeper.io/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d251b6435fc844c887ea6c7e58f0c982)](https://www.codacy.com/app/xRahul/xRahul.github.io)
[![Maintainability](https://api.codeclimate.com/v1/badges/f6e013323629b1fc88c2/maintainability)](https://codeclimate.com/github/xRahul/xRahul.github.io/maintainability)
[![CodeFactor](https://www.codefactor.io/repository/github/xrahul/xrahul.github.io/badge)](https://www.codefactor.io/repository/github/xrahul/xrahul.github.io)
[![codebeat badge](https://codebeat.co/badges/eb3cbae9-7f2b-41f1-9b06-0c0966d9a636)](https://codebeat.co/projects/github-com-xrahul-xrahul-github-io-new-site)

#### Home page (List of Posts)
[![Lighthouse Performance score: 100/100](https://lighthouse-badge.appspot.com/?score=100&compact&category=Performance)](files/Lighthouse-Report-Homepage.pdf)
[![Lighthouse PWA score: 82/100](https://lighthouse-badge.appspot.com/?score=82&compact&category=PWA)](files/Lighthouse-Report-Homepage.pdf)
[![Lighthouse Accessibility score: 86/100](https://lighthouse-badge.appspot.com/?score=86&compact&category=Accessibility)](files/Lighthouse-Report-Homepage.pdf)
[![Lighthouse Best Practices score: 100/100](https://lighthouse-badge.appspot.com/?score=100&compact&category=Best+Practices)](files/Lighthouse-Report-Homepage.pdf)
[![Lighthouse SEO score: 90/100](https://lighthouse-badge.appspot.com/?score=90&compact&category=SEO)](files/Lighthouse-Report-Homepage.pdf)

#### Article page (Post)
[![Lighthouse Performance score: 99/100](https://lighthouse-badge.appspot.com/?score=99&compact&category=Performance)](files/Lighthouse-Report-Post.pdf)
[![Lighthouse PWA score: 82/100](https://lighthouse-badge.appspot.com/?score=82&compact&category=PWA)](files/Lighthouse-Report-Post.pdf)
[![Lighthouse Accessibility score: 91/100](https://lighthouse-badge.appspot.com/?score=91&compact&category=Accessibility)](files/Lighthouse-Report-Post.pdf)
[![Lighthouse Best Practices score: 100/100](https://lighthouse-badge.appspot.com/?score=100&compact&category=Best+Practices)](files/Lighthouse-Report-Post.pdf)
[![Lighthouse SEO score: 100/100](https://lighthouse-badge.appspot.com/?score=100&compact&category=SEO)](files/Lighthouse-Report-Post.pdf)

![Image of rahulja.in](https://github.com/xRahul/xRahul.github.io/raw/new-site/_assets/images/posts/configure-this-site-locally-for-development/og-image%402x.png "rahulja.in")

Install ruby 2.4.3

```bash
rbenv install 2.4.3
rbenv global 2.4.3
ruby -v
```

Install site

```bash
git clone https://github.com/xRahul/xRahul.github.io.git
git config --global credential.helper cache
git config --global credential.helper 'cache --timeout=36000'
cd xRahul.github.io/
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all

bin/setup
--or--
npm run setup
```

Run local development server

```bash
LC_ALL=en_US.UTF-8 bundle exec jekyll serve --drafts
--or--
npm run local
```

Deploy to github master branch

```bash
bin/deploy
--or--
npm run publish
```
