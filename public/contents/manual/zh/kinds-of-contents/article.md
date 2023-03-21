---
title: 文章
---

最简单的内容类型是单独的文章。

一个 Markdown 文件，会被渲染成一篇文章。

## 使用方式

你在浏览器的地址栏输入到 Markdown 文件的连接。

格式如下：

```
https://readonly.link/articles/:link
```

你也可以在 [**readonly.link/articles**](https://readonly.link/articles) 页面直接输入连接。

## 文章的属性

在 Markdown 文件的开头，可以用 YAML 的格式来设置文章的属性。

比如：

```yaml
---
title: 我是如何开始关心数学基础的
subtitle: How I became interested in foundations of mathematics
author: Vladimir Voevodsky
translator: 谢宇恒
date: 2015
venue: 泰国，第九届亚洲科学营
---
```

效果如下：

<readonlylink href="https://inner.xieyuheng.com/translations/zh/how-i-became-interested-in-foundations-of-mathematics.md" />

如果文章有多个作者或者译者，也可以写成数组：

```yaml
authors: [Vladimir Voevodsky, ...]
translators: [谢宇恒, ...]
```
