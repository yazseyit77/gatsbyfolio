---
title: JavaScript with Ruby on Rails
date: 2019-12-19
template: blog
image: ./main.jpeg
banner: ./banner.png
description: For a start, when I was studying on my own, JavaScript looked like a total confusion to me. I was not able to understand the OOP (Object Oriented Programming) deep enough.
---

For a start, when I was studying on my own, JavaScript looked like a total confusion to me. I was not able to understand the OOP (Object Oriented Programming) deep enough. And also calling a function in another function, or Instantly Invoked a Function Expression (IIFE), Arrow Functions and etc, I was mad at myself for choosing this field. Gladly I started Flatiron School and now I’m so happy and excited that I understand and love JavaScript and its magics every time I code and produce something.

---

I will mention some of the parts that JavaScript gave me impressions:

-   Arrow Functions
-   Instantly-Invoked Function Expression
-   Map
-   Reduce
-   Filter
-   Find
-   Spread Operators, and etc.

######Arrow Functions

They are a total magic, it is very short and clear to understand and it has so many benefits of use. Some rules for Arrow Functions:

-   If you pass only one argument, you don’t have to wrap the single parameter in ().
-   If there is only one expression, you don’t need to wrap it in {} and the result of that expression is automatically returned.
-   Anti-Shortcut: If you DO use {}, you must explicitly return the return value.

######When it comes to “this”:

"this" is different in arrow functions compared to regular functions. In arrow functions there are no binding of "this". In regular functions the "this" keyword represented the object that called the function, which could be the window, the document, a button or whatever. With arrow functions the "this" keyword always represents the object that defined the arrow function.

Let us take a look at two examples to understand the difference. Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

The first example uses a regular function, and the second example uses an arrow function.

![](https://miro.medium.com/max/963/1*mMuM6D53GW0SQ-QFh-otjw.jpeg)

> This example above returns ‘window object’ when it’s invoked first time, and ‘button object’ when it’s invoked the second time.
> The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice.

![](https://miro.medium.com/max/963/1*1WYvCDbfGx0s4Ff-PE9n7Q.jpeg)

> This example above returns ‘window object’ when it’s invoked first time, and ‘window object’ when it’s invoked the second time as well. It’s because window object is the “owner” of the function.

---

######Another cool thing I’ve learned is AJAX. What is AJAX?

AJAX is the shortened version of “asynchronous JavaScript and XML,” and it’s the general way we make requests to the server without reloading the web page, and then work with data we receive from the server. We give the user HTML and CSS first, then JavaScript, behind the scenes, fills in the rest of the action we want the page to offer.

The data that comes back from the server is not sent in HTML. While (once) sent back in XML, it’s now most-often sent back in a format known as JSON (“Jay-Sawn”). JavaScript Object Notation (JSON) is a String that JavaScript knows how to turn into an Object.

In AJAX we:

-   Deliver an initial, engaging page using HTML and CSS which browsers render quickly
-   Then we use JavaScript to add more to the DOM, behind the scenes

AJAX relies on several technologies:

-   Things called Promises
-   Things called XMLHttpRequestObjects
-   A serialization format called JSON for “JavaScript Object Notation”
-   asynchronous Input / Output
-   the event loop

Part of what makes AJAX complicated to learn is that to understand it thoroughly, you need to understand all these components. But we’re lucky that modern browsers have abstracted all those components into a single function called fetch().

Let’s learn to use fetch() to apply the AJAX technique: a way to load additional data after information is presented to the user.

![](https://miro.medium.com/max/649/1*6iaWeNgjz2EJJqldaJBUMQ.jpeg)

and the output of both are:

![](https://miro.medium.com/max/681/1*eN8fzrsog5sd1M70jWi3MQ.jpeg)

So far I’m deeply impressed by the magics that JavaScript gives to us. I hope to learn much more than all these in the future.
Thank you!

![](https://miro.medium.com/max/553/1*PiNl-pm0R5nJ1yddmBgxew.jpeg)
