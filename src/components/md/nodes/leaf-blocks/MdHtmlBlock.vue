<script setup lang="ts">
import { parseNodes } from '@readonlylink/x-node'
import { Nodes } from '@xieyuheng/postmark'
import { State } from '../../State'
import MdHtmlBlockNode from './MdHtmlBlockNode.vue'

const props = defineProps<{
  state: State
  node: Nodes.HtmlBlock
}>()

const who = 'MdHtmlBlock'

const elements = parseNodes(props.node.text)

console.log({ who, node: props.node })
</script>

<template>
  <MdHtmlBlockNode
    v-for="(element, index) of elements"
    :key="index"
    :state="state"
    :node="node"
    :element="element"
  />
</template>
