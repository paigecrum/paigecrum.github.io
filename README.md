# Kasper

This is a port of Ghost's default theme [Casper](https://github.com/tryghost/casper) for Jekyll. 
Feel free to fork, change, modify and re-use it.

## How to use it

Simply clone this repository, and then run `jekyll -w serve` inside the directory.

Kasper theme includes:

* Pagination
* Rss
* Google Analytics Tracking code
* Code Syntax Highlight
* Author's profile with picture
* Disqus comments

## Screenshots

![index page](https://raw.github.com/rosario/kasper/master/assets/images/kasper-theme-index.png)
![post page](https://raw.github.com/rosario/kasper/master/assets/images/kasper-theme-post.png)


## Thanks 
Most of the work as been already done by the Ghost team, I've just ported Casper to Jekyll. 
I've also added few things for specifid to Jekyll and some minor style changes.

## Copyright & License

Copyright (C) 2013 Ghost Foundation - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

----
# Jen Readme

# Jekyll Kickoff

A minimal beginner template for Jekyll projects.

## Includes

- basic site structure
- HTML5 Boilerplate index + favicon
- Bourbon/Neat starter stylesheets
- local jQuery fallback

## Needs

- full directory structure

__[See gist for example →](https://gist.github.com/jenmyers/6692284)__

## Tools

- [Jekyll](http://jekyllrb.com/)
- [HTML5 Boilerplate](http://html5boilerplate.com/)
- [Sass](http://sass-lang.com/)
- [Bourbon](http://bourbon.io/)
- [Neat](http://neat.bourbon.io/)

## New to Jekyll?

That's cool! Check out the [Jekyll introduction](http://jekyllrb.com/docs/home/), then walk through the next steps to get up and running using this template.

1. You'll need [Ruby](https://www.ruby-lang.org/en/downloads/). If you're on a Mac, sweet, you're set. If you're on Windows, take a look at [Ruby Installer](http://rubyinstaller.org/). (Note - using Jekyll on Windows is challenging. [Be prepared to do some extra work.](http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html))
2. To install Jekyll, we use a gem, which is how Ruby packages up programs and libraries. Open up your [command line program](http://www.davidbaumgold.com/tutorials/command-line/) and type:

        $ gem install jekyll
3. For this template, we are also using [Sass](http://sass-lang.com/), a CSS preprocessor, [Bourbon](http://bourbon.io/), a library of Sass mixins and [Neat](http://neat.bourbon.io/), a lightweight grid framework. We can install all of these with the following three gems:

        $ gem install sass
        $ gem install bourbon
        $ gem install neat
4. Once these are installed, go into the folder where you're going to keep your Sass stylesheets and run the following commands:

        $ bourbon install
        $ neat install
5. Then in your primary stylesheet, add the two following imports to the top of your file:

        @import "bourbon/bourbon";
        @import "neat/neat";
6. Now you can copy the Jekyll Kickoff files to your computer (choose "Clone to Desktop" or "Download .zip" on the right-hand side) and put them in your project folder.
7. Create the missing directories. You'll likely want a structure that looks something like this [directory example](https://gist.github.com/jenmyers/6692284).
8. Now we can fire up Jekyll. In your command line, type:
 
        $ jekyll serve --watch  
This starts the local server and tells it to automatically watch for changes you make.
9. Open a new command line window or tab and type:

        $ sass --watch assets/scss/screen.scss:assets/css/screen.css
This tells Sass to watch for changes you make to the Sass/SCSS. files and compile them to CSS.
10. Open your web browser and go to: __http://localhost:4000__. You should see the HTML5 Boilerplate welcome message.
11. Now you're ready to build! As you make changes to your HTML and Sass/SCSS, Jekyll will automatically rebuild the site and put all the compiled files into a folder called "_site." You can refresh your browswer window to see the changes displayed.

If you're also just getting started with [Sass](http://sass-lang.com/), [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/), check out their sites for more documentation and help.

Once you're done with your site, check out how to easily deploy it to [GitHub Pages](https://help.github.com/articles/using-jekyll-with-pages).

## Compass/Susy

This template originally used the Sass library [Compass](http://compass-style.org/) and grid framework [Susy](http://susy.oddbird.net/) instead of Bourbon/Neat. If you want the Compass/Susy verison instead, checkout the "compass" branch rather than "master." 

---
# JEN _config.yml file:

# These are the default Jekyll configuration settings, which are explicit here to prevent a configuration warning when starting the Jekyll server. To change these or learn more about configuration, visit http://jekyllrb.com/docs/configuration/.

source:      .
destination: ./_site
plugins:     ./_plugins
layouts:     ./_layouts
include:     ['.htaccess']
exclude:     []
keep_files:  ['.git','.svn']
gems:        []
timezone:    nil
encoding:    nil

future:      true
show_drafts: nil
limit_posts: 0
pygments:    true

relative_permalinks: true

permalink:     date
paginate_path: 'page:num'

markdown:      maruku
markdown_ext:  markdown,mkd,mkdn,md
textile_ext:   textile

excerpt_separator: "\n\n"

safe:        false
watch:       false    # deprecated
server:      false    # deprecated
host:        0.0.0.0
port:        4000
baseurl:     /
url:         http://localhost:4000
lsi:         false

maruku:
  use_tex:    false
  use_divs:   false
  png_engine: blahtex
  png_dir:    images/latex
  png_url:    /images/latex

rdiscount:
  extensions: []

redcarpet:
  extensions: []

kramdown:
  auto_ids: true
  footnote_nr: 1
  entity_output: as_char
  toc_levels: 1..6
  smart_quotes: lsquo,rsquo,ldquo,rdquo
  use_coderay: false

  coderay:
    coderay_wrap: div
    coderay_line_numbers: inline
    coderay_line_numbers_start: 1
    coderay_tab_width: 4
    coderay_bold_every: 10
    coderay_css: style

redcloth:
  hard_breaks: true