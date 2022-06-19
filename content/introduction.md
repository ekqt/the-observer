The **Intersection Observer API** provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport). As the web has matured, Intersection information is needed for many reasons.

You can use this for:

-   Lazy-loading of images or other content as a page is scrolled, like implementing "infinite scrolling" web sites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
-   Reporting visibility of advertisements in order to calculate User viewership and/or ad revenues among other use cases.
-   Deciding whether or not to perform tasks or animation processess based on whether or not the user will see the result.

The **Intersection Observer API** registers a callback function that is executed when a specified element enters or exists in another element (or in the viewport) by a given threshold.

## How to create an observer?

Create the intersection observer by calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other:

```javascript
let options = {
  root: document.querySelector('#observedElement');
  threshold: 1.0
}

const observer = new IntersectionObserver(callback, options);

const callback = () => console.log('Hello world');
```

The `options` object passed into the `IntersectionObserver()` constructor lets you control the circumstances under which the observer's callback is invoked. It has the following fields:

-   `root` is the element that is used as the viewport for checking visibility of the target. Defaults to the browser viewport if not specified or if `null`.
-   `rootMargin` is the margin around the root. It can have similar values to the CSS [margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) property. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.
-   `threshold` Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.
