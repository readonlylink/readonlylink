<script setup lang="ts">
import { ref } from 'vue'
import ManagerTableRowNewDialog from './ManagerTableRowNewDialog.vue'
import { State } from './State'

defineProps<{ state: State }>()

const isOpen = ref(false)

function close() {
  isOpen.value = false
}
</script>

<template>
  <tr
    class="bg-white hover:bg-stone-200"
    @click="isOpen = true"
    @mouseover="
      () => {
        state.currentRowIndex = undefined
        state.currentCellIndex = undefined
        state.currentCellColumnName = undefined
      }
    "
  >
    <td class="sticky left-0 border border-black ring-1 ring-black">
      <!-- negative margin for chrome (must use div) -->
      <div class="-m-0.5 border-r border-black px-3 text-right font-bold">
        +
      </div>
    </td>

    <td
      v-for="{ name } of state.table.columns"
      :key="name"
      class="border border-black"
    ></td>

    <ManagerTableRowNewDialog :state="state" :isOpen="isOpen" :close="close" />
  </tr>
</template>
