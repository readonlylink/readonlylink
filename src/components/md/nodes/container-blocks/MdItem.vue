<script setup lang="ts">
import { Nodes } from '@xieyuheng/x-markdown'
import MdNode from '../../MdNode.vue'
import { State } from '../../State'

defineProps<{
  state: State
  node: Nodes.Item
}>()
</script>

<template>
  <li class="ml-5 list-square">
    <div class="py-1.5" v-for="(child, index) in node.children" :key="index">
      <MdNode :state="state" :node="child" />
    </div>
  </li>
</template>
