<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import MdNode from '../../MdNode.vue'
import { State } from '../../State'

defineProps<{
  state: State
  node: Nodes.Item
}>()
</script>

<template>
  <li class="ml-5">
    <div
      class="relative py-1.5"
      v-for="(child, index) in node.children"
      :key="index"
    >
      <div class="absolute -left-[1.25rem] font-mono">-</div>
      <MdNode :state="state" :node="child" />
    </div>
  </li>
</template>
