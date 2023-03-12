<script setup lang="ts">
import { Dialog, DialogPanel } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ref, watch } from 'vue'
import Lang from '../../components/Lang.vue'
import { Cell } from './Cell'
import { State } from './State'
import { stateSaveCellFromText } from './stateSaveCellFromText'

const props = defineProps<{
  state: State
  isOpen: boolean
  close: () => void
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
              <span>{{ cell.index }}</span>
              <span class="font-bold">{{ cell.columnName }}</span>
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

          <textarea
            class="overflow-auto border border-black p-2 font-mono focus:outline-none"
            :rows="text.split('\n').length"
            v-model="text"
          ></textarea>

          <div class="border-t border-black"></div>

          <div class="flex justify-start">
            <button
              class="rounded-sm border border-black p-3 hover:bg-stone-100"
              @click="stateSaveCellFromText(state, cell, text)"
            >
              <Lang>
                <template #zh> 保存 </template>
                <template #en> Save </template>
              </Lang>
            </button>
          </div>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>
