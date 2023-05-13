[editor] `stateWorkspaceFilterNodes` -- based on `state.showDotFiles`

- and do sort in a single place

# editor welcome

[editor] `EditorWelcome` -- show recent files
[editor] `EditorWelcome` -- show recent directories

# article

[article] support data url

[editor] link to article data url

# editor-fallback

[editor-fallback] fallback when there is no file system access api

- https://developer.chrome.com/articles/file-system-access
- https://developer.chrome.com/articles/browser-fs-access
- https://github.com/GoogleChromeLabs/browser-fs-access

# author

[author] `State` has `path`

[author] `AuthorConfig` has optional `src`

- if it is so, `src` should be optional for all `books/` and `manuals/` too

[author] searchable file list as a plugin -- using code block?

[author] `author.json` has `tabs`

[author] [maybe] web components to let xieyuheng.com use `authors/` with good route names

# history

[history] store visited links to `localStorage`

# md

> For https://readonly.link/books/https://cicada-monologues.netlify.app/book.json

[md] `<poem-vertical>`
[md] `<question>`
[md] `<answer>`
[md] `<katex>`

# editor

[editor] [maybe] use custom `<dialog>` instead of `callWithConfirm` -- to default to CANCEL.

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog

[editor] rename file and directory

- not possible for now: https://github.com/WICG/file-system-access/issues/413
