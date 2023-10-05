---
title: 作者
---

一个 `author.json` 配置文件，会被渲染成一名作者。

## 使用方式

你可以在浏览器的地址栏输入 `author.json` 配置文件的链接。

格式如下：

```
https://readonly.link/authors/:link
```

## 作者的配置文件

我们可以在作者的配置文件中，声明作者的名字、头像、动态、等等。

```json
{
  "kind": "Author",
  "name": "Xie Yuheng",
  "contact": {
    "bilibili": "https://space.bilibili.com/550104600",
    "github": "https://github.com/xieyuheng",
    "email": "xyheme@gmail.com",
    "twitter": "https://twitter.com/CicadaLanguage",
    "readonlylink": "https://readonly.link/authors/https://inner.xieyuheng.com/author.json"
  },
  "tagline": "A programmer who created readonly.link.",
  "homepage": "HOME.md",
  "avatar": "assets/images/xieyuheng-square.jpg",
  "tabs": {
    "HOME": "HOME.md",
    "PROJECTS": "PROJECTS.md",
    "TRANSLATIONS": "TRANSLATIONS.md",
    "PAPERS": "PAPERS.md",
    "RESUME": "RESUME.md"
  },
  "activities": [
    "activities/2023-05-05-an-introduction-to-cell-complex.md",
    "activities/2023-04-12-reading-refactoring-ui.md",
    "activities/2023-04-08-craftinginterpreters-zh.md",
    "activities/2023-03-18-vv-foundations-of-mathematics.zh.md",
    "activities/2023-03-18-vv-foundations-of-mathematics.en.md",
    "activities/2023-03-17-hello-readonlylink.md"
  ]
}
```

效果如下：

<readonlylink href="https://inner.xieyuheng.com/author.json" />

在配置文件中，下面的属性是必填的：

```typescript
{
  kind: 'Author'
  name: string
  avatar: string
  homepage: string
  activities: Array<string>
}
```

你可以用 `tagline` 这个属性来写一句话的介绍，或者任何你想写的一行信息。

## 作者动态

你可以通过作者配置文件中的 `activities` 属性，来发布动态。

只要在这个数组中填写一些代表动态的 Markdown 文件链接就可以。

注意：

- Markdown 文件链接要是就 `author.json` 而言的相对路径，而不是 URL。
- 作为动态的 Markdown 文件，必须带有 `date` 属性，这将作为排序的依据。
- 建议写简短的动态 Markdown 文件，长的动态在显示的时候会带有滚动条。
- 动态中很适合使用 [`<readonlylink>`](../custom-elements/readonlylink.md) 这个定制元素。

## 关注作者动态

你可以以动态的方式，介绍你新写的文章和书籍，等等。

你的读者可以通过将你的作者 `author.json` 链接加入 [关注列表](https://readonly.link/following?kind=Editor) 的方式，来关注你发布的动态。

在你的作者主页的右上角，也会有一个 `关注` 按钮，
你的读者在访问你的作者主页时，也可以直接点击这个按钮来关注你的动态。
