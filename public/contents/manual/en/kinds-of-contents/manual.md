---
title: Manual
---

A directory of Markdown files, plus a `manual.json` config file, can be renderred as a manual.

## Usage

You can enter link to a `manual.json` config file in browser's address bar.

Format:

```
https://readonly.link/manuals/:link
```

You can also enter link directly in [**readonly.link/manuals**](https://readonly.link/manuals) page.

## Manual Config

We can specify a manual's title, author, date, contents and so on in its manual config file.

Take this [Readonly.Link Manual](https://github.com/readonlylink/readonlylink/tree/master/public/contents/manual) as an example:

```json
{
  "kind": "Manual",
  "title": "Readonly.Link Manual",
  "version": "0.0.1",
  "authors": ["Xie Yuheng"],
  "date": "2022",
  "src": "en",
  "main": "introduction.md",
  "sections": {
    "default": ["introduction.md"],
    "Kinds of Contents": [
      "kinds-of-contents/article.md",
      "kinds-of-contents/book.md",
      "kinds-of-contents/manual.md",
      "kinds-of-contents/author.md"
    ]
  }
}
```

Result:

<readonlylink href="https://readonly.link/contents/manual/en.json" />

The name of config file does not matter,
since this manual has both Chinese and English version,
I used `zh.json` and `en.json`.

The following properties are required:

```typescript
{
  kind: 'Manual'
  title: string
  version: string
  authors: Array<string>
  src: string
  main: string
  sections: Record<string, Array<string>>
}
```

Where `src` denotes the directory of contents (I often just use `src/` as the directory).

And `sections` denotes different sections of a manual,
the files listed in each section must be in the directory denoted by `src`.

The `main` denotes the first page of the manual.
