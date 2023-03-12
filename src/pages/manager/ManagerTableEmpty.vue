<script setup lang="ts">
import { ref } from 'vue'
import Lang from '../../components/Lang.vue'
import ManagerTableRowNewDialog from './ManagerTableRowNewDialog.vue'
import { State } from './State'

defineProps<{ state: State }>()

const isOpen = ref(false)

function close() {
  isOpen.value = false
}
</script>

<template>
  <div class="m-auto flex items-center justify-center">
    <button
      @click="isOpen = true"
      class="border border-black p-3 hover:bg-stone-100 focus:outline-none"
    >
      <Lang>
        <template #zh> 创建第一行 </template>
        <template #en> Create first row </template>
      </Lang>
    </button>

    <ManagerTableRowNewDialog :state="state" :isOpen="isOpen" :close="close" />
  </div>
</template>
