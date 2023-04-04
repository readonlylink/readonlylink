---
title: 书籍
---

在一个文件夹内的多个 Markdown 文件，外加一个 `book.json` 配置文件，会被渲染成一本书籍。

## 使用方式

你可以在浏览器的地址栏输入 `book.json` 配置文件的链接。

格式如下：

```
https://readonly.link/books/:link
```

你也可以在 [**readonly.link/books**](https://readonly.link/books) 页面直接输入链接。

## 书籍的配置文件

我们可以在书籍的配置文件中，声明书籍的标题、作者、日期、目录，等等。

比如 [Olivia 翻译的 Rework](https://github.com/readonlylink/readonlylink-books/tree/master/rework) 这本书的配置如下：

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

效果如下：

<readonlylink href="https://books.readonly.link/rework/book.json" />

配置文件的文件名是无所谓的，但是我通常会用 `book.json`。

在配置文件中，下面的属性是必填的：

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

其中 `src` 代表内容文件所在的文件夹（我通常就用 `src/` 这个文件夹）。

`contents` 中的文件，都是在这个文件夹中的。
