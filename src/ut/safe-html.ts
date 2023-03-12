import sanitizeHtml from "sanitize-html"

// NOTE https://github.com/apostrophecms/sanitize-html#default-options

export function safeHtml(html: string): string {
  // prettier-ignore
  return sanitizeHtml(html, {
    allowedTags: [
      "address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4",
      "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div",
      "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre",
      "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn",
      "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp",
      "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption",
      "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "img",
      "svg", "path",
    ],
    disallowedTagsMode: "discard",
    allowedAttributes: {
      "*": [ "class", "style" ],
      a: [ "href", "name", "target" ],
      img: [ "src", "srcset", "alt", "title", "width", "height", "loading" ],
      svg: [
        "xmlns",
        "width",
        "height",
        "viewbox",
        "preserveaspectratio",
      ],
      path: [
        "d",
      ]
    },
    // Lots of these won't come up by default because we don"t allow them
    selfClosing: [ "img", "br", "hr" ],
    // URL schemes we permit
    allowedSchemes: [ "http", "https", "ftp", "mailto", "tel" ],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: [ "href", "src", "cite" ],
    allowProtocolRelative: true,
    enforceHtmlBoundary: false
  })
}
