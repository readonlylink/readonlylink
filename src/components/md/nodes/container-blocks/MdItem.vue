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
  <li
    class="marker ml-5 marker:flex marker:items-center marker:text-xl"
    style="list-style-type: square"
  >
    <div class="py-1.5" v-for="(child, index) in node.children" :key="index">
      <MdNode :state="state" :node="child" />
    </div>
  </li>
</template>
