<script setup>
import { Nodes } from '@xieyuheng/postmark'
import MdNode from '../../MdNode.vue'
import { MdPageState as State } from '../../md-page-state'

defineProps({ state: State, node: Nodes.OrderedList })
</script>

<template>
  <ol class="flex flex-col">
    <MdNode
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
    />
  </ol>
</template>
