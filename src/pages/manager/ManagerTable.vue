<script setup lang="ts">
import ManagerTableEmpty from './ManagerTableEmpty.vue'
import ManagerTableHead from './ManagerTableHead.vue'
import ManagerTableLoading from './ManagerTableLoading.vue'
import ManagerTableRow from './ManagerTableRow.vue'
import ManagerTableRowNew from './ManagerTableRowNew.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex h-full w-full flex-col overflow-auto border-r border-black">
    <ManagerTableLoading v-if="state.datasetIsLoading" :state="state" />
    <ManagerTableEmpty v-else-if="state.dataset.length === 0" :state="state" />
    <table v-else>
      <thead class="sticky top-0 z-10 bg-white">
        <ManagerTableHead class="ring-1 ring-black" :state="state" />
      </thead>

      <tbody>
        <ManagerTableRow
          v-for="(row, index) of state.table.rows"
          :key="index"
          :state="state"
          :row="row"
        />
        <ManagerTableRowNew :state="state" />
      </tbody>
    </table>
  </div>
</template>
