---
title: Book
---

A directory of Markdown files, plus a `book.json` config file, can be renderred as a book.

## Usage

You can enter link to a `book.json` config file in browser's address bar.

Format:

```
https://readonly.link/books/:link
```

You can also enter link directly in [**readonly.link/books**](https://readonly.link/books) page.

## Book Config

We can specify a book's title, author, date, contents and so on in its book config file.

Take Pieter Hintjens's ["The Great ØMQ Guide"](https://github.com/readonlylink/readonlylink-books/tree/master/zguide) as an example:

```json
{
  "kind": "Book",
  "title": "ZeroMQ",
  "subtitle": "Messaging for Many Applications",
  "version": "0.0.1",
  "authors": ["Pieter Hintjens"],
  "date": "2013-03-11",
  "src": "src",
  "contents": [
    "frontispiece.md",
    "dedication.md",
    "dedication.md",
    "preface.md",
    "part1.md",
    "chapter1.md",
    "chapter2.md",
    "chapter3.md",
    "chapter4.md",
    "chapter5.md",
    "part2.md",
    "chapter6.md",
    "chapter7.md",
    "chapter8.md",
    "postface.md"
  ]
}
```

Result:

<readonlylink href="https://books.readonly.link/zguide/book.json" />

The name of the config file does not matter,
I often just use `book.json`.

The following properties are required:

```typescript
{
  kind: 'Book'
  title: string
  version: string
  authors: Array<string>
  src: string
  contents: Array<string>
}
```

Where `src` denotes the directory of contents (I often just use `src/` as the directory).

The files listed in `contents` must be in the directory denoted by `src`.
