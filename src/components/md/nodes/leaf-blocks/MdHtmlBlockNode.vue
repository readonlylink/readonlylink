<script setup lang="ts">
import { Nodes } from '@readonlylink/x-markdown'
import { XNode, isElement } from '@readonlylink/x-node'
import { computed } from 'vue'
import { safeHtml } from '../../../../utils/safeHtml'
import { State } from '../../State'

const props = defineProps<{
  state: State
  node: Nodes.HtmlBlock
  element: XNode
}>()

const who = 'MdHtmlBlockNode'

console.log({ who, element: props.element })

const plugin = computed(() =>
  props.state.plugins.find(
    (plugin) =>
      plugin['@kind'] === 'ElementPlugin' &&
      isElement(props.element) &&
      plugin.tag === props.element.tag,
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
