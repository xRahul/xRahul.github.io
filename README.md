## Personalized blog profile

![Image of rahulja.in](https://github.com/xRahul/xRahul.github.io/raw/new-site/_assets/images/posts/configure-this-site-locally-for-development/og-image%402x.png "rahulja.in")

Install ruby 2.3.3

```bash
rbenv install 2.3.3
rbenv global 2.3.3
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
```

Run local development server

```bash
bundle exec jekyll serve --drafts
```

Deploy to github master branch

```bash
bin/deploy
```
