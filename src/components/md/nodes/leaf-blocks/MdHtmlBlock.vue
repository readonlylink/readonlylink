<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { isElement, parseNodes } from '@xieyuheng/x-node'
import { computed } from 'vue'
import { safeHtml } from '../../../../utils/safeHtml'
import { State } from '../../State'

const props = defineProps<{
  state: State
  node: Nodes.HtmlBlock
}>()

const [element] = parseNodes(props.node.text)

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
  <component v-if="plugin" :is="plugin.component" :element="element" />
  <div v-else v-html="safeHtml(node.text)"></div>
</template>
