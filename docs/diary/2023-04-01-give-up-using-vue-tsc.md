---
title: Give up using vue-tsc
date: 2023-04-01
---

Too many bugs:

- [vue-tsc --noEmit --watch can not catch errors that can be catched by vue-tsc --noEmit](https://github.com/vuejs/language-tools/issues/2543)
- [vue-tsc behavior inconsistent with Volar](https://github.com/vuejs/language-tools/issues/2360)

And I can not understand [the codebase](https://github.com/vuejs/language-tools/tree/master/packages/vue-tsc) to fix the bugs.

# Workaround

We should only use more stable `tsc`, to only check `.ts` files,
and leave the `.vue` files for the IDE (such as vscode).
