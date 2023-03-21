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

Take [Olivia's translation of Rework](https://github.com/readonlylink/readonlylink-books/tree/master/rework) as an example:

```json
{
  "kind": "Book",
  "title": "REWORK",
  "version": "0.0.2",
  "authors": ["37signals"],
  "translators": ["Olivia Han"],
  "year": "2010",
  "src": "src",
  "contents": [
    "00.0.md",
    "00.9.md",
    "01.md",
    "02.md",
    "03.md",
    "04.md",
    "05.md",
    "06.md",
    "07.md",
    "08.md",
    "09.md",
    "10.md",
    "11.md",
    "12.md",
    "13.md",
    "14.md"
  ]
}
```

Result:

<readonlylink href="https://readonlylink-books.netlify.app/rework/book.json" />

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

Files in `src` can be listed in `contents`.
