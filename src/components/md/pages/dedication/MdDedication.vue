<template>
  <div class="flex h-full flex-col items-center justify-center text-2xl">
    <div
      class="my-2 font-serif text-gray-600"
      v-for="(child, index) in state.document.children"
      :key="index"
    >
      <MdNode :state="state" :node="child" />
    </div>
  </div>
</template>

<script setup>
import { MdPageState as State } from "../../md-page-state"

import MdNode from "../../MdNode.vue"

defineProps({ state: State })
</script>
