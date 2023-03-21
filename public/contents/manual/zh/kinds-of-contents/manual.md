---
title: 手册
---

A repository of Markdown files, and a manual.json config file, can be viewed as a manual.

## URL Format

```plaintext
readonly.link/manuals/:host/:repo
```

Example URLs:

- [readonly.link/manuals/gitlab.com/cicada-lang/cicada](https://readonly.link/manuals/gitlab.com/cicada-lang/cicada)
- [readonly.link/manuals/github.com/readonlylink/readonlylink-manual](https://readonly.link/manuals/github.com/readonlylink/readonlylink-manual)

## Manual Config

Example `manual.json`:

```json
{
  "title": "Readonly.Link Manual",
  "version": "0.0.1",
  "authors": ["Xie Yuheng"],
  "date": "2021",
  "src": "src",
  "sections": [
    "default",
    "Kinds of Renders",
    "Kinds of Pages",
    "Code Block Extensions",
    "List Item Extensions"
  ]
}
```
