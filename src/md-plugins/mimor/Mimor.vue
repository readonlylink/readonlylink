<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
import 'mimor'
import { ref, watch } from 'vue'
import Lang from '../../components/lang/Lang.vue'
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
  <div class="relative">
    <!-- Using one element as background for loading view. -->

    <div
      class="broder absolute flex h-[36rem] w-full flex-col border border-stone-500 p-2 md:w-[36rem]"
    >
      <Lang class="font-sans text-stone-500">
        <template #zh> 加载中⋯⋯ </template>
        <template #en> Loading... </template>
      </Lang>
    </div>

    <div
      class="relative z-20 h-[36rem] w-full md:w-[36rem]"
      title="An embedded mimor."
    >
      <x-mimor v-if="state" class="h-full" :url="state.url" />
    </div>
  </div>
</template>
