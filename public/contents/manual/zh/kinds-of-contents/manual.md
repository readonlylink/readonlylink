---
title: 手册
---

在一个文件夹内的多个 Markdown 文件，外加一个 `manual.json` 配置文件，会被渲染成一本手册。

## 使用方式

你可以在浏览器的地址栏输入 `manual.json` 配置文件的链接。

格式如下：

```
https://readonly.link/manuals/:link
```

你也可以在 [**readonly.link/manuals**](https://readonly.link/manuals) 页面直接输入链接。

## 手册的配置文件

我们可以在手册的配置文件中，声明书籍的标题、作者、日期、目录，等等。

比如当前这个 [只读链接手册](https://github.com/readonlylink/readonlylink/tree/master/public/contents/manual) 的配置如下：

```json
{
  "kind": "Manual",
  "title": "只读链接手册",
  "version": "0.0.1",
  "authors": ["谢宇恒"],
  "date": "2022",
  "src": "zh",
  "main": "introduction.md",
  "sections": {
    "default": ["introduction.md"],
    "内容类型": [
      "kinds-of-contents/article.md",
      "kinds-of-contents/book.md",
      "kinds-of-contents/manual.md",
      "kinds-of-contents/author.md"
    ]
  }
}
```

效果如下：

<readonlylink href="https://readonly.link/contents/manual/zh.json" />

配置文件的文件名是无所谓的，比如这个手册有中文和英文两个版本，
所以我用了 `zh.json` 和 `en.json`。

在配置文件中，下面的属性是必填的：

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

其中 `src` 代表内容文件所在的文件夹（我通常就用 `src/` 这个文件夹）。

`sections` 代表手册的不同部分，其中的文件，都是在这个文件夹中的。

而 `main` 代表浏览这个手册时的第一个页面。
