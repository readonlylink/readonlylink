<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { computed } from 'vue'
import { State } from '../../State'

const props = defineProps<{
  state: State
  node: Nodes.CustomBlock<any>
}>()

const plugin = computed(() =>
  props.state.customComponents.find(
    (component) =>
      component.kind === 'CustomBlock' &&
      component.customKind === props.node.customKind,
  ),
)
</script>

<template>
  <component
    v-if="plugin"
    :is="plugin.component"
    v-bind="plugin.props(node)"
    :pageState="state"
  />
  <span
    v-else
    class="border-2 border-rose-400 font-bold text-rose-400"
    title="Unhandled CustomBlock"
    >{{ node.customKind }}</span
  >
</template>
