<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import MdNode from '../../MdNode.vue'
import { MdPageState as State } from '../../MdPageState'

defineProps<{
  state: State
  node: Nodes.List
}>()
</script>

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
