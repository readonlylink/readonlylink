<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
import { ref, watch } from 'vue'
import ReadonlylinkLoaded from './ReadonlylinkLoaded.vue'
import ReadonlylinkLoading from './ReadonlylinkLoading.vue'
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
  <div class="mb-1.5 border border-black py-2.5 px-3 md:max-w-[40rem]">
    <ReadonlylinkLoaded v-if="state" :state="state" />
    <ReadonlylinkLoading v-else :options="useStateOptions()" />
  </div>
</template>
