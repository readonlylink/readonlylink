<script setup lang="ts">
import { reactive, ref } from 'vue'
import Lang from '../../components/Lang.vue'
import { createCell } from './Cell'
import { Row } from './Row'
import { State } from './State'
import { stateSaveCellFromText } from './stateSaveCellFromText'
import { stateStatusError } from './stateStatus'

const props = defineProps<{
  state: State
  row: Row
}>()

const cell = reactive(createCell(props.row.index, '', null))
const text = ref('')

async function create() {
  const state = props.state
  const row = props.row

  if (!cell.columnName) {
    return
  }

  if (row.cells.find(({ columnName }) => columnName === cell.columnName)) {
    stateStatusError(state, {
      who: 'create',
      message: 'property exists',
      data: { name: cell.columnName },
    })
    return
  }

  await stateSaveCellFromText(state, cell, text.value)

  if (state.status === 'ok') {
    cell.columnName = ''
    cell.value = null
    text.value = ''
  }
}
</script>

<template>
  <div>
    <div class="font-bold">
      <Lang>
        <template #zh> 新属性 </template>
        <template #en> New property </template>
      </Lang>
    </div>

    <div class="flex items-center justify-between pb-1">
      <input
        class="border border-black px-1 font-bold focus:outline-none"
        v-model="cell.columnName"
      />

      <button
        class="rounded-sm border border-black px-2 py-0.5 hover:bg-stone-100"
        @click="create()"
      >
        <Lang>
          <template #zh> 创建 </template>
          <template #en> Create </template>
        </Lang>
      </button>
    </div>

    <textarea
      class="w-full overflow-auto border border-black p-2 font-mono focus:outline-none"
      :rows="text.split('\n').length"
      v-model="text"
    ></textarea>
  </div>
</template>
