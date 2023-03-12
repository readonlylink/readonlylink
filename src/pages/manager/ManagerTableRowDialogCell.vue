<script setup lang="ts">
import { ref, watch } from 'vue'
import Lang from '../../components/Lang.vue'
import { Cell } from './Cell'
import { State } from './State'
import { stateSaveCellFromText } from './stateSaveCellFromText'

const props = defineProps<{
  state: State
  cell: Cell
}>()

const text = ref('')

watch(
  () => props.cell.value,
  (value) => {
    text.value = JSON.stringify(value || null, null, 2)
  },
  { immediate: true, deep: true },
)

const readonlyColumnNames = ['@path', '@revision', '@createdAt', '@updatedAt']

function isReadonly(cell: Cell): boolean {
  return readonlyColumnNames.includes(cell.columnName)
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between pb-1">
      <div class="font-bold">{{ cell.columnName }}</div>

      <button
        v-if="!isReadonly(cell)"
        class="rounded-sm border border-black px-2 py-0.5 hover:bg-stone-100"
        @click="stateSaveCellFromText(state, cell, text)"
      >
        <Lang>
          <template #zh> 保存 </template>
          <template #en> Save </template>
        </Lang>
      </button>
    </div>

    <textarea
      :disabled="isReadonly(cell)"
      class="w-full overflow-auto border border-black p-2 font-mono focus:outline-none disabled:bg-stone-100"
      :rows="text.split('\n').length"
      v-model="text"
    ></textarea>
  </div>
</template>
