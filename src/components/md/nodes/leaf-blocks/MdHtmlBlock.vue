<script setup lang="ts">
import { Nodes } from '@xieyuheng/x-markdown'
import { isElement, parse } from '@xieyuheng/x-node'
import { computed } from 'vue'
import { safeHtml } from '../../../../utils/safeHtml'
import { State } from '../../State'

const props = defineProps<{
  state: State
  node: Nodes.HtmlBlock
}>()

const who = 'MdHtmlBlock'

const elements = parse(props.node.text)
const element = elements[0]

console.log({ who, node: props.node, element })

const plugin = computed(() =>
  props.state.plugins.find(
    (plugin) =>
      plugin['@kind'] === 'ElementPlugin' &&
      isElement(element) &&
      plugin.tag === element.tag,
  ),
)
</script>

<template>
  <component
    v-if="plugin"
    :is="plugin.component"
    :element="element"
    :pageState="state"
  />

  <div v-else v-html="safeHtml(node.text)"></div>
</template>
