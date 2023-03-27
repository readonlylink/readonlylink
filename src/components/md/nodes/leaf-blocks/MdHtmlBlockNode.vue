<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { XNode, isElement } from '@xieyuheng/x-node'
import { computed } from 'vue'
import { safeHtml } from '../../../../utils/safeHtml'
import { State } from '../../State'

const props = defineProps<{
  state: State
  node: Nodes.HtmlBlock
  element: XNode
}>()

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
  <component v-if="plugin" :is="plugin.component" :element="element" />
  <div v-else v-html="safeHtml(node.text)"></div>
</template>
