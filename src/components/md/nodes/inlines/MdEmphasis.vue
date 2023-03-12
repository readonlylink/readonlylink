<template>
  <span class="italic"
    ><MdNode
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
  /></span>
</template>

<script setup>
import { Node } from "@xieyuheng/postmark"
import { MdPageState as State } from "../../md-page-state"
import MdNode from "../../MdNode.vue"

defineProps({ state: State, node: Node })
</script>
