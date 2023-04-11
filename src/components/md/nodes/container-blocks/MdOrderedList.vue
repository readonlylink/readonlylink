<script setup lang="ts">
import { Nodes } from '@xieyuheng/x-markdown'
import MdNode from '../../MdNode.vue'
import { State } from '../../State'

defineProps<{
  state: State
  node: Nodes.OrderedList
}>()
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
