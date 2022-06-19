## What does a real-life example look like?

This demo was built as a React application. However, keep in mind that the **Intersection Observer API** is able to be integrated across all major browsers and frameworks with full support (with the exception of _Internet Explorer_, see [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#browser_compatibility) for more).

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
