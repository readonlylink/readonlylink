<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
import { ref, watch } from 'vue'
import { State as PageState } from '../../components/md/State'
import { stateResolveLink as pageStateResolveLink } from '../../components/md/stateResolveLink'
import { State } from './State'
import { loadState } from './loadState'

const props = defineProps<{
  element: XElement
  pageState: PageState
}>()

const state = ref<State | undefined>(undefined)

function useStateOptions() {
  const url = pageStateResolveLink(
    props.pageState,
    props.element.attributes.src,
  )

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
    class="h-[36rem] w-full md:w-[36rem]"
    :src="`https://mimor.app/mimors/${state.url}`"
  />
</template>
