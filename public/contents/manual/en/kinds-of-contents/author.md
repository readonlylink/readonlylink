---
title: Author
---

A `author.json` config file, can be renderred as an author.

## Usage

You can enter link to a `author.json` config file in browser's address bar.

Format:

```
https://readonly.link/authors/:link
```

## Author Config

We can specify an author's name, avatar, activities and so on in the config file.

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

Result:

<readonlylink href="https://inner.xieyuheng.com/author.json" />

The following properties are required:

```typescript
{
  kind: 'Author'
  name: string
  avatar: string
  homepage: string
  activities: Array<string>
}
```

You can use `tagline` to write a one-liner self introduction,
or any information in one line.

## Author's Activities

You can use the `activities` attribute to publish activities.

Just link to Markdown files in the array.

Notes:

- A path to a Markdown file is relative to `author.json`, NOT full URL.
- A Markdown file must have `date` attribute, which will be used for orderring the activities.
- It is adviced to write short activity Markdown file, for a long activity will show a scrollbar.
- The custom element [`<readonlylink>`](../custom-elements/readonlylink.md) can be used when writing activity.

## Subscribe to Author's Activities

You can use activities to introduce your new article, new book or new update of a book and so on.

Your reader can subscribe to your activities
by adding your `author.json` link
to [subscription list](https://readonly.link/subscriptions?kind=Editor).

In your author's homepage, there will be a `SUBSCRIBE` button,
your reader can also click this button to subscribe to your activities.
