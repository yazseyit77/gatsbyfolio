---
title: Make a Portfolio Page with Jekyll
date: 2020-02-09
template: blog
image: ./maxresdefault.jpg
banner: ./jekyllgithub.png
description: Jekyll is a gem that is blog-aware and static site generator in Ruby. In simple explanation, it is - Simple, Static and blog-aware. To get a real in-depth look at Jekyll, visit their website.
---

######What is Jekyll?
Jekyll is a gem that is blog-aware and static site generator in Ruby. In simple explanation, it is: Simple, Static and blog-aware. To get a real in-depth look at Jekyll, visit their website.
To sum it up, you create a bunch of files with no no database and the Jekyll engine generates HTML based on those files.
For the first it took me some time to understand how it works. After spending a couple hours digging and exploring all the deep files and watching some videos, I finally got it. Back-end is maintained by GitHub, you create a repository and change the branch to gh-pages from master (create one if it doesn’t come up when you create you repository).

-   Jekyll + GitHub Pages is good for simple static sites, like a portfolio, blog or a project page, not great for anything more advanced.
-   If you want to host on a shared-hosting server (GoDaddy, Hostmonster, etc.), generate the site locally, then upload those files.

######Why use Jekyll when create everything from scratch?

> Jekyll is the easiest way to create a static website. Basically by executing “jekyll serve” in the terminal it creates that “\_site” file which makes your web page. Jekyll has a variety of benefits:

1. They load super fast: A database-less static website usually loads 10x faster than a website with a CMS. For example, even the most image-heavy pages of my website load in under 1.2 seconds. That’s a speed a WordPress site could only dream of!
2. They are very secure: Since a Jekyll website is only serving static files there are no scripting or database security exploits possible for hackers.
3. Built-in blogging platform: Jekyll has blogging functionality out of the box. Adding a blog post is as simple as adding a markdown file to your posts folder. There is no content editor or admin dashboard to deal with!
4. Has SASS compiler pre-installed: SASS can be fairly straightforward to write, but setting up a server-compatible compiler is sometimes not that easy. Luckily, Jekyll has your SASS compiler already set up for you.
5. You can serve website on local computer: If you want to view your Jekyll site before publishing to the production, all you have to do is run “jekyll serve” from your terminal. It will run your SASS compiler and all the other Jekyll magic and serve your website on your local IP.
6. “Layouts” and “Includes” allow for fast building: If you are building a raw HTML site and you need to add a new page, you’ll have to copy over the head, header, main menu, footer, etc. It’s a tedious process and makes changes/updates to your code difficult to manage. Jekyll has support for ‘layouts’ and ‘includes’. ‘Layouts’ allow you to create a structure for different page templates, such as ‘posts’ or ‘portfolio examples’. “Includes” are like blocks, they are snippets of HTML that you can include anywhere on your site. If you ever update your “layout” or an “include”, it’ll update everything for you.

######Jekyll Themes
For the first couple days, I spent my time designing my pages. Then I found out that I can install a “jekyll-themes” by using a simple ruby gem and modify a ready-build website according to your own interest. There are lots of free themes you can choose for Jekyll if you Google it up, but the Jekyll documentation recommends us these themes to use:

-   [jamstackthemes.dev](https://jamstackthemes.dev/ssg/jekyll/)
-   [jekyllthemes.org](http://jekyllthemes.org/)
-   [jekyllthemes.io](https://jekyllthemes.io/)
-   [jekyll-themes.com](https://jekyll-themes.com/)

<br>

---

<br>

> I really enjoyed using Jekyll, the ruby gem for building a static page on GitHub to store your projects, blogs and skills as a portfolio page. You are welcome to visit my portfolio page here: click here.
> My next journey will be exploring Gatsby.js, which is another source to build static website by using React Components.

<br>

---
