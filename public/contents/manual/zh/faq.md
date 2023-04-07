---
title: 常见问题
---

- **问：** 为什么不像其他基于 Markdown 的文档生成器那样，生成静态的 HTML？
  -- 比如 [hexojs](https://hexo.io) 和 [mdbook](https://rust-lang.github.io/mdBook)

- **答：** 生成静态的 HTML 需要一个预先的构建步骤（build step），
  而我的目的之一就是，发现我可以纯动态地解析 Markdown 内容，
  并渲染出来前端视图，因此我想试试如果取消这个构建步骤，会有什么后果。
