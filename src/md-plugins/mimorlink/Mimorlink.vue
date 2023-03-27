<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
import { ref, watch } from 'vue'
import { State } from './State'
import { loadState } from './loadState'

const props = defineProps<{ element: XElement }>()

const state = ref<State | undefined>(undefined)

function useStateOptions() {
  const url = props.element.attributes.href

  return { url }
}

watch(
  () => useStateOptions(),
  async () => {
    state.value = await loadState(useStateOptions())
  },
  {
    deep: true,
    immediate: true,
  },
)
</script>

<template>
  <iframe
    v-if="state"
    class="h-[36rem] md:w-[30rem]"
    :src="`https://mimor.app/mimors/${state.url}`"
  />
</template>
