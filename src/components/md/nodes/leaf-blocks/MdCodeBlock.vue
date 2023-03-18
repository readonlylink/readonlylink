<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import Highlight from '../../../Highlight.vue'
import { MdPageState as State } from '../../MdPageState'

defineProps<{
  state: State
  node: Nodes.CodeBlock
}>()
</script>

<template>
  <div>
    <pre
      v-if="!node.info"
      class="mx-4 overflow-x-auto text-base"
    ><code>{{ node.text }}</code></pre>

    <Highlight
      v-else
      class="mx-4 overflow-x-auto text-base"
      :text="node.text"
    />
  </div>
</template>
