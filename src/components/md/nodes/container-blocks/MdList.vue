<template>
  <ul class="flex flex-col">
    <MdNode
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
    />
  </ul>
</template>

<script setup>
import { Nodes } from "@xieyuheng/postmark"
import { MdPageState as State } from "../../md-page-state"
import MdNode from "../../MdNode.vue"

defineProps({ state: State, node: Nodes.List })
</script>
