<script setup lang="ts">
import { Nodes } from '@xieyuheng/x-markdown'
import MdNode from '../../MdNode.vue'
import { State } from '../../State'

defineProps<{
  state: State
  node: Nodes.OrderedItem
}>()
</script>

<template>
  <li class="ml-5 list-decimal marker:text-xl marker:text-stone-400">
    <div class="py-1.5" v-for="(child, index) in node.children" :key="index">
      <MdNode :state="state" :node="child" />
    </div>
  </li>
</template>
