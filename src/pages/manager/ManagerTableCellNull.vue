<script setup lang="ts">
import { Cell } from './Cell'
import ManagerTableCellJsonDialog from './ManagerTableCellJsonDialog.vue'
import { State } from './State'

const props = defineProps<{
  state: State
  cell: Cell
  isOpen: boolean
  open: () => void
  close: () => void
}>()

function columnKind(): string | undefined {
  const column = props.state.table.columns.find(
    (column) => column.name === props.cell.columnName,
  )

  return column?.kind
}
</script>

<template>
  <div
    class="w-full min-w-max px-1 text-stone-600 focus:outline-none"
    :class="[
      state.isCurrentCell(cell) && 'bg-stone-100',
      columnKind() === 'Number' && 'text-right',
      columnKind() === 'Boolean' && 'text-right',
    ]"
    @click="open()"
  >
    null

    <ManagerTableCellJsonDialog
      :state="state"
      :isOpen="isOpen"
      :close="close"
      :cell="cell"
    />
  </div>
</template>
