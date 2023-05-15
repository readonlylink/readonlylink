---
title: Article
---

The simplest kind of content is article.

One Markdown file can be renderred as an article.

## Usage

You can enter link to a Markdown file in browser's address bar.

Format:

```
https://readonly.link/articles/:link
```

You can also enter link directly in [**readonly.link/articles**](https://readonly.link/articles) page.

You can also use [**readonly.link/editor**](https://readonly.link/eidtor) to edit Markdown files and preview rendering results.

## Article Attributes

At the front of a Markdown file, we can sue YAML to set attributes of the article.

For example:

```yaml
---
title: How I became interested in foundations of mathematics
author: Vladimir Voevodsky
date: 2015
venue: The 9th Asian Science Camp, Thailand
---
```

Result:

<readonlylink href="https://inner.xieyuheng.com/persons/vladimir-voevodsky/how-i-became-interested-in-foundations-of-mathematics.md" />

The formats of `date` are:

```
yyyy
yyyy-mm
yyyy-mm-dd
yyyy-mm-dd hh:mm
yyyy-mm-dd hh:mm-offset
yyyy-mm-dd hh:mm+offset
```

For example:

```
date: 2023
date: 2023-03
date: 2023-03-17
date: 2023-03-17 16:43
date: 2023-03-17 16:43+08:00
```

Take the timezone of China as an example, the offset is `+08:00`.

If the article is a translation, we can use `translator` attribute.

If there are many authors or translators, we can use `authors` and `translators`.

For example:

```yaml
---
authors: [Vladimir Voevodsky, ...]
translators: [谢宇恒, ...]
---
```
