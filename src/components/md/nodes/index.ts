// organize-imports-ignore

import Paragraph from './leaf-blocks/MdParagraph.vue'
import Table from './leaf-blocks/MdTable.vue'
import Headline from './leaf-blocks/MdHeadline.vue'
import ThematicBreak from './leaf-blocks/MdThematicBreak.vue'
import HtmlBlock from './leaf-blocks/MdHtmlBlock.vue'
import CodeBlock from './leaf-blocks/MdCodeBlock.vue'

import BlockQuote from './container-blocks/MdBlockQuote.vue'
import List from './container-blocks/MdList.vue'
import Item from './container-blocks/MdItem.vue'
import OrderedList from './container-blocks/MdOrderedList.vue'
import OrderedItem from './container-blocks/MdOrderedItem.vue'

import Emphasis from './inlines/MdEmphasis.vue'
import Strong from './inlines/MdStrong.vue'
import HardLineBreak from './inlines/MdHardLineBreak.vue'
import SoftLineBreak from './inlines/MdSoftLineBreak.vue'
import Link from './inlines/MdLink.vue'
import FootnoteRef from './inlines/MdFootnoteRef.vue'
import Image from './inlines/MdImage.vue'
import Code from './inlines/MdCode.vue'
import HtmlInline from './inlines/MdHtmlInline.vue'
import Text from './inlines/MdText.vue'
import { Component } from 'vue'

export const components: Record<string, Component> = {
  Paragraph,
  Table,
  Headline,
  ThematicBreak,
  HtmlBlock,
  CodeBlock,

  BlockQuote,
  List,
  Item,
  OrderedList,
  OrderedItem,

  Emphasis,
  Strong,
  HardLineBreak,
  SoftLineBreak,
  Link,
  FootnoteRef,
  Image,
  Code,
  HtmlInline,
  Text,
}
