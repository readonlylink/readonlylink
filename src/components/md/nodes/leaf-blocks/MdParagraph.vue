<template>
  <div
    :style="{
      'text-indent': indent && `${indent}rem`,
    }"
  >
    <MdNode
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
    />
  </div>
</template>

<script setup>
import { computed } from "vue"
import { Nodes } from "@xieyuheng/postmark"
import { MdPageState as State } from "../../md-page-state"
import MdNode from "../../MdNode.vue"

const props = defineProps({ state: State, node: Nodes.Paragraph })

const indent = computed(() => props.state.document.attributes.paragraph?.indent)
</script>
