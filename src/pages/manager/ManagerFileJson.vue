<script setup lang="ts">
import { ref, watch } from 'vue'
import ManagerFileLoading from './ManagerFileLoading.vue'
import { State } from './State'
import { stateFetchFile } from './stateFetchFile'

const props = defineProps<{
  state: State
  path: string
}>()

const jsonText = ref('')
const text = ref('')
const blob = ref<Blob | undefined>(undefined)
const error = ref<unknown | undefined>(undefined)

watch(
  () => props.path,
  async (path) => {
    try {
      text.value = ''
      jsonText.value = ''
      error.value = undefined
      blob.value = await stateFetchFile(props.state, path)
      if (blob.value) {
        text.value = await blob.value.text()
        const json = JSON.parse(text.value)
        jsonText.value = JSON.stringify(json, null, 2) + '\n'
      }
    } catch (errorValue) {
      error.value = errorValue
    }
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="flex h-full w-full flex-col overflow-auto border-r border-black">
    <ManagerFileLoading v-if="blob === undefined" :state="state" />
    <template v-else>
      <div v-if="error" class="flex h-full w-full flex-col">
        <div class="whitespace-pre-wrap border border-red-600 p-2 text-red-600">
          {{ error }}
        </div>
        <textarea
          class="h-full resize-none overflow-auto border border-black p-2 font-mono focus:outline-none"
          v-model="text"
        ></textarea>
      </div>

      <textarea
        v-else
        class="h-full resize-none overflow-auto border border-black p-2 font-mono focus:outline-none"
        v-model="jsonText"
      ></textarea>
    </template>
  </div>
</template>
