<script setup lang="ts">
import { Dialog, DialogPanel } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import Lang from '../../components/Lang.vue'
import { State } from './State'
import { stateCreateRowFromTexts } from './stateCreateRowFromTexts'
import { stateStatusError } from './stateStatus'

const props = defineProps<{
  state: State
  isOpen: boolean
  close: () => void
}>()

const generatedNames = ['@path', '@revision', '@createdAt', '@updatedAt']

const keys = props.state.table.columnNames.filter(
  (name) => !generatedNames.includes(name),
)

const texts = ref(Object.fromEntries(keys.map((name) => [name, ''])))

const id = ref('')

const newPropertyName = ref('')
const newPropertyText = ref('')

async function create(state: State) {
  if (id.value.trim() === '') {
    stateStatusError(state, {
      message: 'id can not be empty',
    })
    return
  }

  if (!state.currentPathEntry) {
    stateStatusError(state, {
      message: 'no current directory',
    })
    return
  }

  if (id.value.includes('/')) {
    stateStatusError(state, {
      message: 'id should not includes /',
      data: {
        id: id.value,
      },
    })
    return
  }

  await stateCreateRowFromTexts(state, {
    '@path': `"${state.currentPathEntry.path}/${id.value}"`,
    ...texts.value,
  })

  if (state.status === 'ok') {
    props.close()
    id.value = ''
    newPropertyName.value = ''
    newPropertyText.value = ''
    texts.value = Object.fromEntries(keys.map((name) => [name, '']))
  }
}

function createProperty(state: State) {
  if (newPropertyName.value) {
    if (!texts.value[newPropertyName.value] === undefined) {
      stateStatusError(state, {
        who: 'createProperty',
        message: 'property already exists',
        data: { name: newPropertyName.value },
      })
      return
    }

    texts.value[newPropertyName.value] = newPropertyText.value
    newPropertyName.value = ''
    newPropertyText.value = ''
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
            <Lang class="font-bold">
              <template #zh> 新行 </template>
              <template #en> New row </template>
            </Lang>

            <button
              class="border border-black hover:bg-stone-100"
              @click="close()"
            >
              <XMarkIcon class="h-6 w-6 stroke-1 p-0.5" />
            </button>
          </div>

          <div class="border-t border-black"></div>

          <button v-focus class="h-0 focus:outline-none"></button>

          <div>
            <div class="flex items-center justify-between pb-1">
              <div class="font-bold">@path</div>
            </div>

            <div class="overflow-auto whitespace-nowrap pb-1 font-bold">
              <span>{{ state.currentPathEntry?.path }}/</span>
            </div>

            <div class="flex items-baseline space-x-1">
              <span class="text-lg font-bold">"</span>

              <input
                class="w-full resize-none overflow-auto border border-black p-2 font-mono focus:outline-none disabled:bg-stone-100"
                v-model="id"
              />
              <span class="text-xl font-bold">"</span>
            </div>
          </div>

          <div v-for="(text, key) of texts" :key="key">
            <div class="flex items-center justify-between pb-1">
              <div class="font-bold">{{ key }}</div>
            </div>

            <textarea
              class="w-full overflow-auto border border-black p-2 font-mono focus:outline-none disabled:bg-stone-100"
              :rows="text.split('\n').length"
              :value="text"
              @input="
                (event: any) => {
                  texts[key] = event.target.value
                }
              "
            ></textarea>
          </div>

          <div>
            <div class="pb-1 font-bold">
              <Lang>
                <template #zh> 新属性 </template>
                <template #en> New property </template>
              </Lang>
            </div>

            <div class="flex items-center justify-between pb-1">
              <input
                class="border border-black px-1 font-bold focus:outline-none"
                v-model="newPropertyName"
              />

              <button
                class="rounded-sm border border-black px-2 py-0.5 hover:bg-stone-100"
                @click="createProperty(state)"
              >
                <Lang>
                  <template #zh> 增加属性 </template>
                  <template #en> Add property </template>
                </Lang>
              </button>
            </div>

            <textarea
              class="w-full overflow-auto border border-black p-2 font-mono focus:outline-none disabled:bg-stone-100"
              :rows="newPropertyText.split('\n').length"
              v-model="newPropertyText"
            ></textarea>
          </div>

          <div class="border-t border-black"></div>

          <div class="flex justify-start">
            <button
              class="rounded-sm border border-black p-3 hover:bg-stone-100"
              @click="create(state)"
            >
              <Lang>
                <template #zh> 创建 </template>
                <template #en> Create </template>
              </Lang>
            </button>
          </div>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>
