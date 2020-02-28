---
title: React-Redux Portfolio Project - Designed with React Semantic UI
date: 2020-01-26
template: blog
image: ./reactproject.jpeg
banner: ./banner.jpeg
description: At first I didn’t really believe that React is a number one front-end framework and everyone really like this. Sitting here, exploring more and more about React and Redux makes me amazed by their awesome functionalities.
---

At first I didn’t really believe that React is a number one front-end framework and everyone really like this. Sitting here, exploring more and more about React and Redux makes me amazed by their awesome functionalities. There are 5 key concepts of React that every starter should learn very well. They are:

        1. Components
        2. Component Types
        3. JSX
        4. Props & State
        5. The Component API

######Components
So, what is Components? Components is the main structure that creates React and makes it so clean and easy to understand. Components can be of the regular JavaScript classes or functions. Any React codebase is just a huge pile of big Components that call smaller Components and pass props from parent Component to the Children Components.
In practice, the most common way to write React components is as an ES6 class containing a render method that returns HTML.
######Component Types
Components are usually of two types, and there’s so many ways of calling them and using those two types. But the most meaningful one according to my experience is the one Dan Abramov introduced to us: Presentational and Container Components.
Presentational Components are to display/render only, mostly should not contain any logic or should not have a state, whereas Container Components are used for storing your state and all the logic inside. Which gives the credit for Container Components to be the parent Components.
######JSX
JSX is a shortened version of JavaScript XML, which is a format that JavaScript reads similar to JSON (JavaScript Object Notation). JSX is a language that React uses to compile HTML and JavaScript into one file and renders it to the browser. I was always encouraged to stay away from mixing JavaScript code within HTML, but JSX is actually supporting it. Especially when you need to use ternary operators to display something or not.
######Props & State
We use props (short for “properties”) to make the Components communicate with each other, especially the Parent Components with their Children Components. That’s where “this.props.handleSomething” comes from. You keep the logic and state in the Parent Components and pass down the props to their Children Components, then render them to the Browser.
Sometimes though, a component needs to react to data that doesn’t come from a parent component (such as user input for example). And this is where the state comes in.
In practice, the vast majority of data in a React app will be a prop. It’s only when you need to accept user input that you’ll use state to handle the change.
######The Component API
You might already have heard of render and setState , and of course maybe theconstructor that you can use to initialize your state and bind methods. Besides all these three useful methods, React also gives us some useful methods called Lifecycle Methods. They are very handy to fetch data and display data before rendering, before mounting, after loading and so on and on. These all come in so handy once you grasp how React actually works behind the scenes.

---

<br>

######React Semantic UI
Now, what really amazed me is the React Semantic UI, a useful library similar to Bootstrap or Bulma. Semantic UI is a modern front-end development framework powered by LESS and jQuery. It is used for designing, especially for Login/SignUp forms, Dropdown Menu, Cards, Sidebar and etc.
The React Semantic UI works really cool with the app that is build with React and Redux.
To be able to use Semantic UI React in your React app, run this command:
**< npm install — save semantic-ui-react >**

You’ll see a few prompts asking where you want to save the semantic folder. After finishing installing, you can import the components like **{ Button, Checkbox, Form, Input, Radio, Select, TextArea }** you’d like to use from **‘semantic-react-ui’**

> See, that easy and handy. We can do the designing part quickly with Semantic UI and spend some time on coding the better logic for our app.
