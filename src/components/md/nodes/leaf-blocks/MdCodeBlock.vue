<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import Highlight from '../../../Highlight.vue'
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
      class="mx-4 overflow-x-auto text-base"
    ><code>{{ node.text }}</code></pre>

    <Highlight
      v-else
      class="mx-4 overflow-x-auto text-base"
      :text="node.text"
    />
  </div>
</template>
