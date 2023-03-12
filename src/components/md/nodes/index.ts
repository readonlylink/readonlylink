// organize-imports-ignore

import Paragraph from "./leaf-blocks/MdParagraph.vue"
import Table from "./leaf-blocks/MdTable.vue"
import Headline from "./leaf-blocks/MdHeadline.vue"
import ThematicBreak from "./leaf-blocks/MdThematicBreak.vue"
import HtmlBlock from "./leaf-blocks/MdHtmlBlock.vue"
import CodeBlock from "./leaf-blocks/MdCodeBlock.vue"
import CustomBlock from "./leaf-blocks/MdCustomBlock.vue"

import BlockQuote from "./container-blocks/MdBlockQuote.vue"
import List from "./container-blocks/MdList.vue"
import Item from "./container-blocks/MdItem.vue"
import OrderedList from "./container-blocks/MdOrderedList.vue"
import OrderedItem from "./container-blocks/MdOrderedItem.vue"
import CustomItem from "./container-blocks/MdCustomItem.vue"

import Emphasis from "./inlines/MdEmphasis.vue"
import Strong from "./inlines/MdStrong.vue"
import HardLineBreak from "./inlines/MdHardLineBreak.vue"
import SoftLineBreak from "./inlines/MdSoftLineBreak.vue"
import Link from "./inlines/MdLink.vue"
import Image from "./inlines/MdImage.vue"
import Code from "./inlines/MdCode.vue"
import HtmlTag from "./inlines/MdHtmlTag.vue"
import Text from "./inlines/MdText.vue"

export const components = {
  Paragraph,
  Table,
  Headline,
  ThematicBreak,
  HtmlBlock,
  CodeBlock,
  CustomBlock,

  BlockQuote,
  List,
  Item,
  OrderedList,
  OrderedItem,
  CustomItem,

  Emphasis,
  Strong,
  HardLineBreak,
  SoftLineBreak,
  Link,
  Image,
  Code,
  HtmlTag,
  Text,
}
