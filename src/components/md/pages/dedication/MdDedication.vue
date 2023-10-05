<script setup lang="ts">
import MdNode from '../../MdNode.vue'
import { State } from '../../State'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="text-balance flex h-full flex-col items-center justify-center text-2xl"
  >
    <div
      class="my-2 text-stone-600"
      v-for="(child, index) in state.document.children"
      :key="index"
    >
      <MdNode :state="state" :node="child" />
    </div>
  </div>
</template>
