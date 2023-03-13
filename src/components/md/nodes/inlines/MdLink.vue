<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { MdPageState as State } from '../../md-page-state'

import IconExternalLink from '../../../icons/IconExternalLink.vue'
import MdNode from '../../../md/MdNode.vue'

defineProps({ state: State, node: Nodes.Link })

function isExternalLink(path) {
  return (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:')
  )
}
</script>

<template>
  <!-- NOTE A link starts with `http` is viewed as an external link. -->
  <a
    class="break-words underline decoration-stone-400"
    :href="node.href"
    :title="node.title"
    :target="isExternalLink(node.href) ? '_blank' : '_self'"
  >
    <MdNode
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
    />

    <IconExternalLink
      v-if="isExternalLink(node.href)"
      class="inline w-4 shrink-0 text-gray-500"
    />
  </a>
</template>
