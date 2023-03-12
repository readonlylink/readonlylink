<template>
  <span class="font-bold"
    ><MdNode
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
  /></span>
</template>

<script setup>
import { Nodes } from "@xieyuheng/postmark"
import { MdPageState as State } from "../../md-page-state"
import MdNode from "../../MdNode.vue"

defineProps({ state: State, node: Nodes.Strong })
</script>
