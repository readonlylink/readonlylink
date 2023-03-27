<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { parseNodes } from '@xieyuheng/x-node'
import { State } from '../../State'
import MdHtmlBlockNode from './MdHtmlBlockNode.vue'

const props = defineProps<{
  state: State
  node: Nodes.HtmlBlock
}>()

const elements = parseNodes(props.node.text)
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
