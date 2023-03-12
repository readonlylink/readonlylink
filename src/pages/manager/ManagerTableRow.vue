<script setup lang="ts">
import { computed } from 'vue'
import ManagerTableCell from './ManagerTableCell.vue'
import ManagerTableRowDialog from './ManagerTableRowDialog.vue'
import { Row } from './Row'
import { State } from './State'

const props = defineProps<{
  state: State
  row: Row
}>()

const isOpen = computed(
  () =>
    props.state.currentRowIndex === props.row.index &&
    Boolean(props.state.currentRowIsOpen),
)

function select() {
  props.state.currentRowIndex = props.row.index
}

function open() {
  props.state.currentRowIsOpen = true
}

function close() {
  props.state.currentRowIsOpen = false
}
</script>

<template>
  <tr :class="[state.currentRowIndex === row.index && 'bg-stone-200']">
    <td
      class="sticky left-0 border border-black ring-1 ring-black"
      :class="[
        state.currentRowIndex === row.index ? 'bg-stone-200' : 'bg-white',
      ]"
    >
      <!-- negative margin for chrome (must use div) -->
      <div
        class="-m-0.5 border-r border-black px-3 text-right"
        @mouseover="select()"
        @click="open()"
      >
        {{ row.index }}
      </div>
    </td>

    <td
      v-for="(cell, index) of row.cells"
      :key="index"
      class="overflow-auto whitespace-nowrap border border-black"
    >
      <ManagerTableCell :state="state" :row="row" :cell="cell" />
    </td>

    <ManagerTableRowDialog
      :state="state"
      :isOpen="isOpen"
      :close="close"
      :row="row"
    />
  </tr>
</template>
