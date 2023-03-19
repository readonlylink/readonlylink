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
  <div class="mb-1.5 max-w-[640px] border border-black p-3">
    <ReadonlylinkLoaded v-if="state" :state="state" />
    <ReadonlylinkLoading v-else :options="useStateOptions()" />
  </div>
</template>
