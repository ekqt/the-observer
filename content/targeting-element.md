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
