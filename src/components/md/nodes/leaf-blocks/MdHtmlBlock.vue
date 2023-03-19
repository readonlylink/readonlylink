<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { parseNodes } from '@xieyuheng/x-node'
import { State } from '../../State'
import MdHtmlBlockElement from './MdHtmlBlockElement.vue'

const props = defineProps<{
  state: State
  node: Nodes.HtmlBlock
}>()

const who = 'MdHtmlBlock'

const elements = parseNodes(props.node.text)

console.log({ who, node: props.node })
</script>

<template>
  <MdHtmlBlockElement
    v-for="(element, index) of elements"
    :key="index"
    :state="state"
    :node="node"
    :element="element"
  />
</template>
