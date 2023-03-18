<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { computed } from 'vue'
import { ItemPlugin } from '../../Plugin'
import { State } from '../../State'

const props = defineProps<{
  state: State
  node: Nodes.CustomItem<any>
}>()

const plugin = computed(
  () =>
    (props.state.plugins.find(
      (plugin) =>
        plugin['@kind'] === 'ItemPlugin' &&
        plugin.customKind === props.node.customKind,
    ) as ItemPlugin) || undefined,
)
</script>

<template>
  <component
    v-if="plugin"
    :is="plugin.component"
    v-bind="plugin.propsFromNode(node)"
    :pageState="state"
  />
  <span
    v-else
    class="border-2 border-rose-400 font-bold text-rose-400"
    title="Unhandled CustomItem"
    >{{ node.customKind }}</span
  >
</template>
