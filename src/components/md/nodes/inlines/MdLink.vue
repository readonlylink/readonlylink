<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { Nodes } from '@xieyuheng/x-markdown'
import Hyperlink from '../../../Hyperlink.vue'
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
    v-if="isExternalLink(node.href)"
    class="break-words text-sky-600 underline decoration-sky-600 visited:text-purple-600 visited:decoration-purple-600"
    :href="node.href"
    :title="node.title"
    target="_blank"
  >
    <MdNode
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
    />

    <ArrowTopRightOnSquareIcon class="inline w-4 shrink-0 text-stone-500" />
  </a>

  <Hyperlink
    v-else
    class="break-words text-sky-600 underline decoration-sky-600 visited:text-purple-600 visited:decoration-purple-600"
    :href="node.href"
    :title="node.title"
  >
    <MdNode
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
    />
  </Hyperlink>
</template>
