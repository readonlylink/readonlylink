<script setup lang="ts">
import { ref, watch } from 'vue'
import ManagerFileLoading from './ManagerFileLoading.vue'
import { State } from './State'
import { stateFetchFile } from './stateFetchFile'

const props = defineProps<{
  state: State
  path: string
}>()

const text = ref<string>('')
const blob = ref<Blob | undefined>(undefined)

watch(
  () => props.path,
  async (path) => {
    blob.value = await stateFetchFile(props.state, path)
    if (blob.value) {
      text.value = await blob.value.text()
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
    <textarea
      v-else
      class="h-full resize-none overflow-auto border border-black p-2 font-mono focus:outline-none"
      v-model="text"
    ></textarea>
  </div>
</template>
