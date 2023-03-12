<template>
  <div
    class="my-2 ml-px flex flex-col border-l-4 border-gray-300 pl-4 text-gray-600"
  >
    <div class="py-2" v-for="(child, index) in node.children" :key="index">
      <MdNode :state="state" :node="child" />
    </div>
  </div>
</template>

<script setup>
import { Nodes } from "@xieyuheng/postmark"
import { MdPageState as State } from "../../md-page-state"
import MdNode from "../../MdNode.vue"

defineProps({ state: State, node: Nodes.BlockQuote })
</script>
