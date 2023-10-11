<script setup lang="ts">
import { Nodes } from '@xieyuheng/x-markdown'
import MdNode from '../../MdNode.vue'
import { State } from '../../State'

defineProps<{
  state: State
  node: Nodes.BlockQuote
}>()
</script>

<template>
  <div
    class="my-2 ml-px flex flex-col border-l-4 border-stone-300 pl-4 text-stone-600 dark:border-stone-500 dark:text-stone-300"
  >
    <div class="py-2" v-for="(child, index) in node.children" :key="index">
      <MdNode :state="state" :node="child" />
    </div>
  </div>
</template>
