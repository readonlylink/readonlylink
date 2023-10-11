<script setup lang="ts">
import { Nodes } from '@xieyuheng/x-markdown'
import Highlight from '../../../highlight/Highlight.vue'
import { State } from '../../State'

const props = defineProps<{
  state: State
  node: Nodes.CodeBlock
}>()

function noHighlight() {
  if (!props.node.info) {
    return true
  }

  if (props.node.info.startsWith('plaintext')) {
    return true
  }

  return false
}
</script>

<template>
  <div>
    <pre
      v-if="noHighlight()"
      class="mx-4 overflow-x-auto font-mono text-base"
      >{{ node.text }}</pre
    >

    <Highlight
      v-else
      class="mx-4 overflow-x-auto font-mono text-base"
      :text="node.text"
    />
  </div>
</template>
