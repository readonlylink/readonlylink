<script setup>
import { Nodes } from '@xieyuheng/postmark'
import MdNode from '../../MdNode.vue'
import { MdPageState as State } from '../../md-page-state'

defineProps({ state: State, node: Nodes.Strong })
</script>

<template>
  <span class="font-bold"
    ><MdNode
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
  /></span>
</template>
