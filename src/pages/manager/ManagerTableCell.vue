<script setup lang="ts">
import { computed } from 'vue'
import { Cell } from './Cell'
import ManagerTableCellArray from './ManagerTableCellArray.vue'
import ManagerTableCellBoolean from './ManagerTableCellBoolean.vue'
import ManagerTableCellDate from './ManagerTableCellDate.vue'
import ManagerTableCellId from './ManagerTableCellId.vue'
import ManagerTableCellNull from './ManagerTableCellNull.vue'
import ManagerTableCellNumber from './ManagerTableCellNumber.vue'
import ManagerTableCellObject from './ManagerTableCellObject.vue'
import ManagerTableCellRevision from './ManagerTableCellRevision.vue'
import ManagerTableCellString from './ManagerTableCellString.vue'
import ManagerTableCellUnknown from './ManagerTableCellUnknown.vue'
import { State } from './State'

const props = defineProps<{
  state: State
  cell: Cell
}>()

const isOpen = computed(
  () =>
    props.state.currentCellIndex === props.cell.index &&
    props.state.currentCellColumnName === props.cell.columnName &&
    Boolean(props.state.currentCellIsOpen),
)

function select() {
  props.state.currentCellIndex = props.cell.index
  props.state.currentCellColumnName = props.cell.columnName
}

function open() {
  props.state.currentCellIsOpen = true
}

function close() {
  props.state.currentCellIsOpen = false
}
</script>

<template>
  <!-- prettier-ignore -->
  <div
    class="scrollbar-hide w-full max-w-prose overflow-x-auto whitespace-nowrap"
    :class="[state.isCurrentCell(cell) && 'ring-1 ring-stone-500']"
    @mouseover="select()"
  >
    <ManagerTableCellId v-if="cell.columnName === '@path'" v-bind="$props" :isOpen="isOpen" :open="open" :close="close" />
    <ManagerTableCellRevision v-else-if="cell.columnName === '@revision'" v-bind="$props" :isOpen="isOpen" :open="open" :close="close" />
    <ManagerTableCellDate v-else-if="cell.columnName === '@createdAt'" v-bind="$props" :isOpen="isOpen" :open="open" :close="close" disabled />
    <ManagerTableCellDate v-else-if="cell.columnName === '@updatedAt'" v-bind="$props" :isOpen="isOpen" :open="open" :close="close" disabled />
    <ManagerTableCellString v-else-if="cell.kind === 'String'" v-bind="$props" :isOpen="isOpen" :open="open" :close="close" />
    <ManagerTableCellNumber v-else-if="cell.kind === 'Number'" v-bind="$props" :isOpen="isOpen" :open="open" :close="close" />
    <ManagerTableCellNull v-else-if="cell.kind === 'Null'" v-bind="$props" :isOpen="isOpen" :open="open" :close="close" />
    <ManagerTableCellBoolean v-else-if="cell.kind === 'Boolean'" v-bind="$props" :isOpen="isOpen" :open="open" :close="close" />
    <ManagerTableCellArray v-else-if="cell.kind === 'Array'" v-bind="$props" :isOpen="isOpen" :open="open" :close="close" />
    <ManagerTableCellObject v-else-if="cell.kind === 'Object'" v-bind="$props" :isOpen="isOpen" :open="open" :close="close" />
    <ManagerTableCellUnknown v-else v-bind="$props" :isOpen="isOpen" :open="open" :close="close" />
  </div>
</template>
