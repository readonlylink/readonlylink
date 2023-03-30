<script setup lang="ts">
import { XElement } from '@readonlylink/x-node'
import { ref, watch } from 'vue'
import { State as PageState } from '../../components/md/State'
import { stateResolveLink as pageStateResolveLink } from '../../components/md/stateResolveLink'
import ReadonlylinkLoaded from './ReadonlylinkLoaded.vue'
import ReadonlylinkLoading from './ReadonlylinkLoading.vue'
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
    props.element.attributes.href,
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
  <div class="mb-1.5 border border-black px-3 py-2.5 md:max-w-[40rem]">
    <ReadonlylinkLoaded v-if="state" :state="state" />
    <ReadonlylinkLoading v-else :options="useStateOptions()" />
  </div>
</template>
