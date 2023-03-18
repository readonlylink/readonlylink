<!-- prettier-ignore -->
<script setup>
import { Node } from '@xieyuheng/postmark';
import { computed } from 'vue';
import { MdPageState as State } from "./MdPageState";

import { components } from './nodes';

const props = defineProps({ state: State, node: Node })

const component = computed(() => components[props.node.kind])
</script>

<template>
  <component v-if="component" :is="component" :state="state" :node="node" />
  <span
    v-else
    class="border-2 border-rose-400 font-bold text-rose-400"
    title="Unhandled Markdown Node"
    >{{ node.kind }}</span
  >
</template>
