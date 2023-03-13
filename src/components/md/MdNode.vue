<!-- prettier-ignore -->
<template>
  <component v-if="component" :is="component" :state="state" :node="node" />
  <span
    v-else
    class="border-rose-400 text-rose-400 font-bold border-2"
    title="Unhandled Markdown Node"
    >{{ node.kind }}</span
  >
</template>

<script setup>
import { Node } from '@xieyuheng/postmark'
import { computed } from 'vue'
import { MdPageState as State } from './md-page-state'

import { components } from './nodes'

const props = defineProps({ state: State, node: Node })

const component = computed(() => components[props.node.kind])
</script>
