# author

[author] `AuthorPage` take `document` as a prop

[author] `author.json` has `tabs`

[author] `loadState` load `documents` from tabs

[author] `AuthorPage` fix the compute of `url`

[author] `AuthorConfig` has optional `src`

- use the directory of the config as the src by default

# config

[config] `src` should be optional for `books/` and `manuals/`

- use the directory of the config as the src by default

# page-layout

[page-layout] active link

# searchable file list

searchable file list as a markdown plugin -- using code block?

- for `authors/`

# editor-fallback

[editor-fallback] fallback when there is no file system access api

- https://developer.chrome.com/articles/file-system-access
- https://developer.chrome.com/articles/browser-fs-access
- https://github.com/GoogleChromeLabs/browser-fs-access

# md

> For https://readonly.link/books/https://cicada-monologues.netlify.app/book.json
> But we can do this only after we have a good markdown parser
> that can handle XML with newline.

[md] `<poem-vertical>`
[md] `<question>`
[md] `<answer>`
[md] `<katex>`

# editor maybe

[editor] [maybe] use custom `<dialog>` instead of `callWithConfirm` -- to default to CANCEL.

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog

[editor] [maybe] rename file and directory

- not possible for now: https://github.com/WICG/file-system-access/issues/413
