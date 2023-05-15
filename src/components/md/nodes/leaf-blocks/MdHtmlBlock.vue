<script setup lang="ts">
import { Nodes } from '@xieyuheng/x-markdown'
import { format, isElement, parse, XElement } from '@xieyuheng/x-node'
import { safeHtml } from '../../../../utils/safeHtml'
import { Plugin } from '../../Plugin'
import { State } from '../../State'

const props = defineProps<{
  state: State
  node: Nodes.HtmlBlock
}>()

const who = 'MdHtmlBlock'

const nodes = parse(props.node.text)

console.log({ who, node: props.node, nodes })

function elementPlugin(element: XElement): Plugin | undefined {
  return props.state.plugins.find(
    (plugin) =>
      plugin['@kind'] === 'ElementPlugin' &&
      isElement(element) &&
      plugin.tag === element.tag,
  )
}
</script>

<template>
  <template v-for="(node, index) of nodes" :key="index">
    <template v-if="isElement(node)">
      <component
        v-if="elementPlugin(node)"
        :is="elementPlugin(node)?.component"
        v-bind="elementPlugin(node)?.propsBuilder({ state, element: node })"
      />

      <div v-else v-html="safeHtml(format([node]))"></div>
    </template>

    <div v-else>{{ node }}</div>
  </template>
</template>
