<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
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

const iframeElement = ref<HTMLIFrameElement | undefined>(undefined)

function useStateOptions() {
  const url = pageStateResolveLink(
    props.pageState,
    props.element.attributes.src,
  )

  return { url }
}

const who = 'Mimor / <iframe>'

window.addEventListener('message', async (event: MessageEvent) => {
  const data = event.data

  console.log({ who, data })

  if (data.message === 'fullscreen-enter') {
    await iframeElement.value?.requestFullscreen()
  }

  if (data.message === 'fullscreen-exit') {
    document.exitFullscreen()
  }
})

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    iframeElement.value?.contentWindow?.postMessage(
      {
        message: 'fullscreen-entered',
      },
      '*',
    )
  } else {
    iframeElement.value?.contentWindow?.postMessage(
      {
        message: 'fullscreen-exited',
      },
      '*',
    )
  }
})

function supportFullscreen() {
  iframeElement.value?.contentWindow?.postMessage(
    {
      message: 'fullscreen-supported',
    },
    '*',
  )
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

    <iframe
      ref="iframeElement"
      v-if="state"
      title="An embedded mimor."
      class="relative z-20 h-[36rem] w-full md:w-[36rem]"
      allow="fullscreen"
      allowfullscreen
      :src="`https://mimor.app/mimors/${state.url}`"
      @ready="supportFullscreen()"
    />
  </div>
</template>
