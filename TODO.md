support dark mode

support sellect font -- for unifont

highlight each code block by type

动态详情页面 -- more space

有些 headline 是类似分隔符的，比如 “part 1”，可以不占用一级 headline，用定制的 element 处理。

# author

[author] author can provide different contents for different languages
[author] support switch lang to switch contents

# searchable file list

searchable file list as a markdown plugin -- using code block?

- for `authors/`

# editor-fallback

[editor-fallback] fallback when there is no file system access api

- https://developer.chrome.com/articles/file-system-access
- https://developer.chrome.com/articles/browser-fs-access
- https://github.com/GoogleChromeLabs/browser-fs-access

# md

> For https://readonly.link/books/https://cicada-monologues.vercel.app/book.json
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

# dictionaries

support `dictionaries/` -- one word one file?

- need indexing about case insensitive?

- https://en.wikipedia.org/wiki/DICT#DICT_file_format
- https://github.com/soshial/xdxf_makedict/tree/master/format_standard
- https://github.com/soshial/xdxf_makedict/wiki/Why-is-XDXF-better-than-other-dictionary-formats%3F
- https://github.com/huzheng001/stardict-3/blob/master/dict/doc/StarDictFileFormat
