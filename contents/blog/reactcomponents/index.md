---
title: React.js, Presentational and Container Components
date: 2020-01-12
template: blog
image: ./main.jpeg
banner: ./banner.png
description: React is a JavaScript Front End Framework that is used for building user interfaces. It is the most loved among some other frameworks because of performance, size and easy to debug.
---

######What is React?
React is a JavaScript Front End Framework that is used for building user interfaces. It is the most loved among some other frameworks because of performance, size and easy to debug. It lets you compose complex UIs from small and isolated pieces of code called “components”.

Components can be of two types:

-   Functional Components - A functional component is basically a JavaScript (or ES6) function which returns a React element. It is also called as Stateless Component, because with functions we don’t need to use states, and we don’t need to render the return like in Class Components:
-   Class Component - With ES6 , we can use classes to create React components. This means that instead of object as argument with properties, we use class members to define behavior.

According to Dan Abramov, we could use a simplification on the components to keep our code much cleaner and more understandable. He split the components into two types: Presentational Components vs Container Components.

1. Presentational Components: are used only to render the user interface, it’s only for how things look. It doesn’t contain any logic in it and in most cases it doesn’t even need a state. It could be of ES6 Class Component or JavaScript Functional Component, but people mostly prefer Functional Component since it doesn’t have state. We can use them for: Page, Sidebar, Story, UserInfo, List.

2. Container Components: are for how things work. It contains the logic, as it provides the data and behavior to presentational or other container components.We can use them for: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.

![](https://miro.medium.com/max/1858/1*hBxHOCphEySUoldhv4e7oA.png)
