---
title: 作者
---

一个 `author.json` 配置文件，会被渲染成一名作者。

## 使用方式

你可以在浏览器的地址栏输入 `author.json` 配置文件的连接。

格式如下：

```
https://readonly.link/authors/:link
```

## 作者的配置文件

我们可以在作者的配置文件中，声明作者的名字、头像、动态，等等。

```json
{
  "kind": "Author",
  "name": "Xie Yuheng",
  "tagline": "A programmer who created readonly.link.",
  "homepage": "README.md",
  "avatar": "assets/images/xieyuheng-square.jpg",
  "activities": [
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

只要在这个数组中填写一些代表动态的 Markdown 文件连接就可以。

注意：

- Markdown 文件连接要是就 `author.json` 而言的相对路径，而不是 URL。
- 作为动态的 Markdown 文件，必须带有 `date` 属性，这将作为排序的依据。
- 建议写简短的动态 Markdown 文件，长的动态在显示的时候会带有滚动条。

## 动态中的只读连接

在动态 Markdown 文件中，你可以用下面的格式来显示一个只读连接。

比如，下面这个连接，就连接到了这个手册：

```xml
<readonlylink href="https://readonly.link/contents/manual/zh.json" />
```

## 订阅作者动态

你可以以动态的方式，介绍你新写的文章和书籍，等等。

你的读者可以通过将你的作者 `author.json` 连接加入 [订阅列表](https://readonly.link/subscriptions?kind=Editor) 的方式，来订阅你发布的动态。

在你的作者主页的右上角，也会有一个 `订阅` 按钮，
你的读者在访问你的作者主页时，也可以直接点击这个按钮来订阅你的动态。
