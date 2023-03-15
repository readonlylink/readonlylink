<script setup>
import { MdPageState as State } from '../../md-page-state'

import Highlight from '../../../Highlight.vue'

defineProps({ state: State, node: Object })
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
