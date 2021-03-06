# Vue3 Notes

## Vue3 Features

* Composition API (Now built-in)
  - Better organization
  - Sharing/reusing the code
* Multiple root elements (Template syntax )
* Suspense
* Multiple V-models
* Better Reactivity
* Portals

## There are currently three limitations you may have run into when working with Vue2

* As your components get larger readability gets difficult.
* The current code reuse patterns all come with drawbacks.
  - **Mixins**
    - ✅ Mixins can be organized by feature.
    - ❎ They are `conflict-prone`, and you can end up with property name conflicts.
    - ❎ `Unclear relationships` on how mixins interact, if they do.
    - ❎ `Not easily reusable` if I want to configure the Mixin to use across other components.
  - **Mixin Factories**
    - ✅ `Easily reusable` now that we can configure the code.
    - ✅ We have `more explicit relationships` of how our Mixins interact.
    - ❎ Namespacing requires strong conventions and discipline.
    - ❎ We still have implicit property additions, meaning we have to look inside the Mixin to figure out what properties it exposes.
    - ❎ There’s no instance access at runtime, so Mixin factories can’t be dynamically generated.
  - **Scoped Slots**
    - ✅ Addresses just about every downside of Mixins.
    - ❎ Your configuration ends up in your template, which ideally should only contain what we want to render.
    - ❎ They increases indentation in your template, which can decrease readability.
    - ❎ Exposed properties are only available in the template.
    - ❎ It’s a bit less performant.
  - ❤️ **Composition API**
    - ✅ We’re writing less code, so it’s easier to pull a feature from your component into a function.
    - ✅ It builds on your existing skills since you’re already familiar with functions.
    - ✅ It’s more flexible than Mixins and Scoped Slots since they’re just functions.
    - ✅ Intellisense, autocomplete, and typings already work in your code editor.
    - ❎ Requires learning a new low-level API to define composition functions.
    - ❎ There are now two ways to write components instead of just the standard syntax.
* Vue 2 has limited TypeScript support out of the box.

## When to use the Composition API?

> When any of the following are true:

* You want optimal TypeScript support.
* The component is too large and needs to be organized by feature.
* Need to reuse code across other components.
* You & your team prefer the alternative syntax.

## LifeCycle

### Composition API LifeCycle Methods

* onBeforeMount
* onMounted
* onBeforeUpdate
* onUpdated
* onBeforeUnmount
* onUnmounted
* onActivated
* onDeactivated
* onErrorCaptured

### Lifecycle Hooks

* `beforeCreate`: Called immediately after instance is initialized, before options are processed.
* `created`: Called after the instance has been created.
* `beforeMount`: Right before mounting of the DOM begins.
* `mounted`: Called when the instance has been mounted (browser updated).
* `beforeUpdate`: Called when reactive data has changed, before the DOM is re-rendered.
* `updated`: Called when reactive data has changed, and the DOM has been re-rendered.
* `beforeDestroy`: Called right before the Vue instance is destroyed.
* `destroyed`: Called after the Vue instance has been destroyed.

### Two New Vue 3 LifeCycle Methods

* `onRenderTracked`: called when a reactive dependency is first being accessed in the render function, during render. This dependency will now be tracked. This is helpful to see which dependencies are being tracked, for debugging.
* `onRenderTriggered`: Called when a new render is triggered, allowing you to inspect what dependency triggered a component to re-render.

## Setup & Reactive References

The setup executes before any of the following options are evaluated

* Components
* Props
* Data
* Methods
* Computed Properties
* Lifecycle Methods

```js
import { ref, watch } from 'vue';

export default {
  props: {
    name: String
  },

  // `setup` method does not have access `this`
  // in order to get access to the properties we normally would access using this, setup has two optional arguments.
  setup(props, context) {
    context.attrs;
    context.slots;
    context.parent;
    context.root;
    context.emit;

    // it’s wrapping our primitive integer (0) in an object, which will allow us to track changes.
    const count = ref(0);

    watch(() => {
      console.log(props.name);
    });

    // we need to explicitly return an object with properties our template will need to render properly.
    return { count };
  }
};
```
