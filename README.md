# Why you need to start using Intersection Observer

The [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with the document's [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport). As the web has matured, Intersection information is needed for many reasons.

You can use this for:

-   Lazy-loading of images or other content as a page is scrolled. Would also be useful for implementing "infinite scrolling" on web sites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
-   Reporting visibility of marketing content, campaigns, advertisements in order to calculate viewership among other use cases.
-   Deciding whether or not to perform tasks or animation processes based on whether the user will see the result.
-   Scroll-spying for contextual content (navigation bars, table of contents, etc).

**So how does it work?** The _Intersection Observer API_ registers a callback function that is executed when a specified element enters or intersects in/with another element (or in the viewport) by a given threshold.

> This article was written based on building the sample project: [The Observer](https://observe.vercel.app/). Go and check it out, it includes this same content plus a banner which is being observed by the **Intersection Observer** API.

## How to create an observer?

Create an observer instance by calling its constructor and passing a callback function to be run whenever its target element is intersects in one direction or the other by its threshold:

```javascript
const callback = (entries) => {
    entries.map((entry) => {
        console.log("Hello world!");
    });
};

const options = { threshold: 1 };

const observer = new IntersectionObserver(callback, options);
observer.observe(target);
```

### Intersection observer options

The `options` object passed into the `IntersectionObserver()` constructor lets you control the configuration under which the observer's callback is run. It has the following fields:

-   `root` is the element that is used as the viewport for checking visibility of the target.
-   `rootMargin` is the margin around the root. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections.
-   `threshold` Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. The default is `0` (meaning as soon as even one pixel is visible, the callback will be run). `1.0` means that the threshold isn't considered passed until every pixel is visible.

### Targeting an element to be observed

Whenever the target meets a threshold specified for the `IntersectionObserver`, the callback is invoked. The callback receives a list of [IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) objects and the observer:

```javascript
const callback = (entries) => {
    entries.forEach((entry) => {
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.intersectionRatio
        //   entry.isIntersecting
        //   entry.target
        //   entry.time
    });
};
```

The code snippet below shows a callback which keeps a counter of how many times elements intersected the root by at least 75%. For a threshold value of 0.0 (default) the callback is called upon transition of the value of `isIntersecting`. The snippet thus first checks that the transition is a positive one, then determines whether `intersectionRatio` is above 75%, in which case it increments the counter.

```javascript
let counter = 0;

const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.intersectionRatio >= 0.75 && counter++;
        }
    });
};
```

## What does a real-life example look like?

Our demo was built as a React application. However, keep in mind that the **Intersection Observer API** is able to be integrated across all major browsers and frameworks with full support (with the exception of _Internet Explorer_, see [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#browser_compatibility) for more).

Identifying an element to be observed is as easy as selecting a DOM element based on a CSS selector. You can either define your own selector of choice (like data attribute, id or class) or choose one from the existing markup. In this case, this is how the markup looks like:

```html
<section id="campaign" ref="{campaignRef}">
    <HeroText />
</section>
```

> Refs provide a way to access DOM nodes or React elements created in the render method.

Once I have identified (and defined) what content I want to observe, I initialize an instance of `IntersectionObserver` and with a callback and configuration options.

```javascript
const callback = (entries: any) => {
    entries.map((i: any) => {
        i.isIntersecting ? setVisible(true) : setVisible(false);
    });
};

const observer = new IntersectionObserver(callback, {
    rootMargin: "-50% 0% -50% 0%",
});

observer.observe(campaignRef.current);
```

Every framework has its own state management solution, in this case we are storing the state of the element observed in React's `useState` to render the DOM conditionally on its state and that is literally it.

## Conclusion

Here are a couple of additional examples to take a look at:

-   [Intersection Observer Playground](https://wilsotobianco.com/experiments/intersection-observer-playground/#end)
-   [Scroll spy Navigation](https://codepen.io/wilsotobianco/pen/dyVZbYz)
-   [Timing element visibility](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#result)
-   [Lazy Load plus animation](https://codepen.io/rpsthecoder/pen/pByZjR)
-   [Auto-pausing video](https://codepen.io/rpsthecoder/pen/ZZLyaG)
-   [Content viewed](https://codepen.io/rpsthecoder/pen/QPdgzL)

When it comes to User interaction, regardless of the technologies you are using and the problem you're trying to solve, _Intersection Observer_ may be the way to go. Therefore, I believe it's worth your while understanding the tools that modern browsers are building for us to come up with creative ways of delivering great User experience.