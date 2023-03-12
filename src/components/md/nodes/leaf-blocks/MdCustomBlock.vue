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

<script setup>
import { computed } from "vue"
import { Nodes } from "@xieyuheng/postmark"
import { MdPageState as State } from "../../md-page-state"

const props = defineProps({ state: Object, node: Object })

const plugin = computed(() =>
  props.state.customComponents.find(
    (component) =>
      component.kind === "CustomBlock" &&
      component.customKind === props.node.customKind
  )
)
</script>
