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

# Principle

I almost quit using vue because of this problem.

Remember that these are just tools,
made by other programmers like you,
open source for free.

When a tool does not work well,
and you can not fix it,
just put it down,
and do not have bad feelings about it.
