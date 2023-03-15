---
title: Article
---

A Markdown file can be viewed as a single article.

## URL Format

```plaintext
readonly.link/articles/{host}/{username}/{project}/-/{path}
```

Example URLs:

- [readonly.link/articles/github.com/xieyuheng/postmark/-/README.md](https://readonly.link/articles/github.com/xieyuheng/postmark/-/README.md)
- [readonly.link/articles/github.com/cicada-lang/cicada/-/README.md](https://readonly.link/articles/github.com/cicada-lang/cicada/-/README.md)

## Article Attributes

We can set attributes of a Markdown file at the front of the file,
like the following.

- It is optional but recommend to set the `title` attribute.

```yaml
---
title: My Article
---
Content of my article.
```
