---
title: Rails Portfolio Project
date: 2019-11-12
template: blog
image: ./main.jpeg
banner: ./banner.jpeg
description: Ruby on Rails is a long journey that is full of magic. Before Rails, we have used Sinatra, which is similar to Rails, but less functionality and more codes.
---

[Ruby on Rails](https://edgeguides.rubyonrails.org/index.html) is a long journey that is full of magic. Before Rails, we have used Sinatra, which is similar to Rails, but less functionality and more codes. In Rails, we have one line of [macro](https://pragmaticstudio.com/tutorials/ruby-macros) that can actually achieve whole a lot of different things we want in our project.

I will give a similar code that I got impressed with:

**`accepts_nested_attributes_for :contacts_teams, allow_destroy: true`**

Now, look at the magic that this line of code is containing inside:

```
validate :at_least_one_contacts_team

  private
  def at_least_one_contacts_team
    # when creating a new contact: making sure at least one team exists
    return errors.add :base, "Must have at least one Team" unless contacts_teams.length > 0

    # when updating an existing contact: Making sure that at least one team would exist
    return errors.add :base, "Must have at least one Team" if contacts_teams.reject{|contacts_team| contacts_team._destroy == true}.empty?
  end
```

There is many more of the magical side of Rails to mention, from restful routes to nested restful routes, from magic form builders to magic nested form builders, many more. You can add some gems that can get things done for you, while building any projects with Rails. Some of the best gems that I have came across and implemented are: [Devise](https://github.com/heartcombo/devise) gem — which is a flexible authentication solution, [Twitter Bootstrap](https://github.com/seyhunak/twitter-bootstrap-rails) for Rails — that gives the CSS Bootstrap styling that you can install and use easily, and [Omniauth](https://github.com/omniauth/omniauth) gem — which is a library that standardizes multi-provider authentication for web applications.

When I started learning Rails, I felt myself wandering inside a magical adventure. But all of those give a little challenge for some time, until you get it working properly.

---

> My idea was to build simplistic web application that a programmer can track his own freelancing company’s clients and projects. I built this with these associations:

```
class User < ApplicationRecord
    has_many :projects
    has_many :clients, through: :projects
end
class Client < ApplicationRecord
    has_many :projects
    has_many :users, through: :projects
    validates_presence_of :name, :email
end
class Project < ApplicationRecord
    belongs_to :client, optional: true
    belongs_to :user, optional: true
    validates_presence_of :name, :description
end
```

From there I started building my controllers and views, then I build the routes for each view so that I can display them on the browser. I added login/logout/signup by the help of Devise gem, and added a “Login with GitHub” by the help of Omniauth gem.

Now I can be proud of myself that I can build a web application easily by using Ruby on Rails.

---
