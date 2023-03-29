<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { Nodes } from '@xieyuheng/postmark'
import MdNode from '../../../md/MdNode.vue'
import { State } from '../../State'
import { isExternalLink } from '../../isExternalLink'

defineProps<{
  state: State
  node: Nodes.Link
}>()
</script>

<template>
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

    <ArrowTopRightOnSquareIcon
      v-if="isExternalLink(node.href)"
      class="inline w-4 shrink-0 text-stone-500"
    />
  </a>
</template>
