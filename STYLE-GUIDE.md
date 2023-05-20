---
title: Style Guide
---

**In general, observe the style of existing code and respect it.**

# Calling `stateReactive`

The `stateReactive` function (or `reactive` directly)
is used to create watchers, and it must
NOT be called in async function -- like in `loadState` or in
`onMounted(async () => { ... })`.

We should call `stateReactive` after the state is loaded.

> Watchers declared synchronously inside `setup()` or `<script setup>`
> are bound to the owner component instance, and will be automatically
> stopped when the owner component is unmounted.
>
> The key here is that the watcher must be created synchronously: if
> the watcher is created in an async callback, it won't be bound to
> the owner component and must be stopped manually to avoid memory
> leaks.
>
> -- [Vue Guide / Stopping a Watcher](https://vuejs.org/guide/essentials/watchers.html#stopping-a-watcher)
