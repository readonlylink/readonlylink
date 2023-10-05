<script setup lang="ts">
import MdNode from '../../MdNode.vue'
import { State } from '../../State'

const props = defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col text-xl">
    <div
      class="my-2"
      v-for="(child, index) in state.document.children"
      :key="index"
    >
      <MdNode :state="state" :node="child" />
    </div>
  </div>
</template>
