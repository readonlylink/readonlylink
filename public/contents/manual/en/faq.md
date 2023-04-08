---
title: FAQ
---

- **Q:** Why not build static HTML from Markdown like [hexojs](https://hexo.io) and [mdbook](https://rust-lang.github.io/mdBook).

  **A:** Becasue one of my aim is to remove this build step,
  by interpreting Markdown content purely at frontend.
  I want to experience the trade off.

  Pros:

  - Does not require a build step, the tool feels much simpler,
    user can concentrate on the pure content.

  Cons:

  - A visitor need to run code to see the view, not as fast as static HTML files.

  We can say, for the problem of rendering Markdown,
  there are two main solution spaces,
  I want to explore the space of "runtime dynamicly interpreting",
  instead of the space of "compile-time building static files".
