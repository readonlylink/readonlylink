<script setup>
import { MdPageState as State } from '../../md-page-state'
import MdNode from '../../MdNode.vue'

const props = defineProps({ state: State })
</script>

<template>
  <div class="flex flex-col text-xl">
    <div
      class="my-2 font-serif"
      v-for="(child, index) in state.document.children"
      :key="index"
    >
      <MdNode :state="state" :node="child" />
    </div>
  </div>
</template>
