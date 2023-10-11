<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { Nodes } from '@xieyuheng/x-markdown'
import MdNode from '../../../md/MdNode.vue'
import Hyperlink from '../../../utils/Hyperlink.vue'
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
    class="break-words text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline dark:text-sky-300 dark:decoration-sky-300 visited:dark:text-purple-300 visited:dark:decoration-purple-300"
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

    <ArrowTopRightOnSquareIcon class="mb-1 inline h-4 w-4 shrink-0" />
  </a>

  <Hyperlink
    v-else
    class="break-words text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline dark:text-sky-300 dark:decoration-sky-300 visited:dark:text-purple-300 visited:dark:decoration-purple-300"
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
