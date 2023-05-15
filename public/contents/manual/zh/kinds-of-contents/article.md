---
title: 文章
---

最简单的内容类型是单独的文章。

一个 Markdown 文件，会被渲染成一篇文章。

## 使用方式

你可以在浏览器的地址栏输入 Markdown 文件的链接。

格式如下：

```
https://readonly.link/articles/:link
```

你也可以在 [**readonly.link/articles**](https://readonly.link/articles) 页面直接输入链接。

你也可以在 [**readonly.link/editor**](https://readonly.link/editor) 编辑 Markdown 文件，并预览文章染结果。

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

日期 `date` 的格式是：

```
年
年-月
年-月-日
年-月-日 时:分
年-月-日 时:分-时差
年-月-日 时:分+时差
```

比如：

```
date: 2023
date: 2023-03
date: 2023-03-17
date: 2023-03-17 16:43
date: 2023-03-17 16:43+08:00
```

注意我们中国的时区是 `+08:00`。

如果文章有多个作者或者译者，也可以用 `authors` 和 `translators`。

比如：

```yaml
---
authors: [Vladimir Voevodsky, ...]
translators: [谢宇恒, ...]
---
```
