extract function to resolve of relative url

- used by:

  - components/md/nodes/inlines/MdImage.vue

pass `pageState: MdPageState` to component of md-plugin

<readonlylink> -- resolve relative url

[docs] manual/zh/custom-elements/readonlylink.md
[docs] manual/zh/custom-elements/mimor.md

[docs] manual/en/custom-elements/
[docs] manual/en/custom-elements/readonlylink.md
[docs] manual/en/custom-elements/mimor.md

<mimor> -- resolve relative url before passing to <iframe>

- http://localhost:5173/articles/http://localhost:5173/contents/examples/mimor.md

- md-plugin takes url

[docs] about <mimor>

[bug] fix list style on mobile:

- example https://readonly.link/manuals/https://mimor.app/contents/manual/zh.json/-/intro.md

[bug] `/authors` should handle http error

[md] support footnote

# author

> An author can have many pages -- not just homepage.

[author] `State` has `path`
[author] `AuthorConfig` has optional `src`

# history

[history] store visited links to `localStorage`

# md-plugin

> For https://readonly.link/books/https://cicada-monologues.netlify.app/book.json

[md-plugin] `<poem-vertical>`
[md-plugin] `<question>`
[md-plugin] `<answer>`

# later

[refactor] improve `@xieyuheng/postmark` API

[md] add katex extensions back
