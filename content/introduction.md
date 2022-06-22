The [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with the document's [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport). As the web has matured, Intersection information is needed for many reasons.

> Trust is good, but observation is better.

You can use this for:

-   Lazy-loading of images or other content as a page is scrolled. Would also be useful for implementing "infinite scrolling" on web sites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
-   Reporting visibility of marketing content, campaigns, advertisements in order to calculate viewership among other use cases.
-   Deciding whether or not to perform tasks or animation processes based on whether the user will see the result.
-   Scroll-spying for contextual content (navigation bars, table of contents, etc).

**So how does it work?** The _Intersection Observer API_ registers a callback function that is executed when a specified element enters or intersects in/with another element (or in the viewport) by a given threshold.

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
