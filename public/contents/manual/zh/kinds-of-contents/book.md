---
title: 书籍
---

多个 Markdown 文件，外加一个 `book.json` 配置文件，会被渲染成书籍。

## 使用方式

你可以在浏览器的地址栏输入 `book.json` 配置文件的连接。

格式如下：

```
https://readonly.link/books/:link
```

你也可以在 [**readonly.link/books**](https://readonly.link/articles) 页面直接输入连接。

## 书籍的配置文件

我们可以在书籍的配置文件中，声明书籍的标题、作者、日期、目录，等等。

比如 [Olivia 所翻译的 Rework](https://github.com/readonlylink/readonlylink-books/tree/master/rework) 这本书的配置如下：

```json
{
  "kind": "Book",
  "title": "REWORK",
  "version": "0.0.2",
  "authors": ["37signals"],
  "translators": ["Olivia Han"],
  "year": "2010",
  "contents": [
    "src/00.0.md",
    "src/00.9.md",
    "src/01.md",
    "src/02.md",
    "src/03.md",
    "src/04.md",
    "src/05.md",
    "src/06.md",
    "src/07.md",
    "src/08.md",
    "src/09.md",
    "src/10.md",
    "src/11.md",
    "src/12.md",
    "src/13.md",
    "src/14.md"
  ]
}
```

效果如下：

<readonlylink href="https://readonlylink-books.netlify.app/rework/book.json" />

在配置文件中，下面的属性是必填的：

```typescript
{
  kind: 'Book'
  title: string
  version: string
  authors: Array<string>
  contents: Array<string>
}
```
