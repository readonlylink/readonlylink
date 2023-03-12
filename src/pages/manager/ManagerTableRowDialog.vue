<script setup lang="ts">
import { Dialog, DialogPanel } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/Lang.vue'
import ManagerTableRowDialogCell from './ManagerTableRowDialogCell.vue'
import ManagerTableRowDialogCellNew from './ManagerTableRowDialogCellNew.vue'
import { Row } from './Row'
import { State } from './State'
import { stateDeleteRow } from './stateDeleteRow'

const props = defineProps<{
  state: State
  isOpen: boolean
  close: () => void
  row: Row
}>()

async function deleteRow(state: State, row: Row) {
  const message = `Delete row: ${row.index}`
  if (window.confirm(message)) {
    await stateDeleteRow(state, row.index)
    props.close()
  }
}
</script>

<template>
  <Dialog as="div" :open="isOpen" @close="close()" class="relative z-10">
    <div
      class="fixed inset-0 flex h-screen w-screen items-center justify-center"
    >
      <DialogPanel
        class="h-4/5 w-5/6 overflow-auto border border-black bg-white md:w-3/5"
      >
        <div class="flex h-full flex-col space-y-3 overflow-auto p-6">
          <div class="flex justify-between">
            <div class="flex space-x-1">
              <span class="font-bold"> # </span>
              <span>{{ row.index }}</span>
            </div>

            <button
              class="border border-black hover:bg-stone-100"
              @click="close()"
            >
              <XMarkIcon class="h-6 w-6 stroke-1 p-0.5" />
            </button>
          </div>

          <div class="border-t border-black"></div>

          <button v-focus class="h-0 focus:outline-none"></button>

          <ManagerTableRowDialogCell
            v-for="cell of row.cells"
            :key="cell.columnName"
            :state="state"
            :cell="cell"
          />

          <ManagerTableRowDialogCellNew :state="state" :row="row" />

          <div class="border-t border-black"></div>

          <div class="flex justify-end">
            <button
              class="rounded-sm border border-black p-3 hover:bg-stone-100"
              @click="deleteRow(state, row)"
            >
              <Lang>
                <template #zh> 删除 </template>
                <template #en> Delete </template>
              </Lang>
            </button>
          </div>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>
