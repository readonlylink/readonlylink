<script setup lang="ts">
import { ref, watch } from 'vue'
import { arrayFromRange } from '../../utils/arrayFromRange'
import { State } from './State'
import { Tab } from './Tab'

const props = defineProps<{
  state: State
  tab: Tab
}>()

const rootElement = ref<HTMLElement | undefined>(undefined)

watch(
  () => props.tab.scrollTop,
  (value) => {
    if (rootElement.value) {
      rootElement.value.scrollTop = value
    }
  },
  { immediate: true },
)

function handleScroll(event: Event, tab: Tab) {
  const element = event.target as HTMLTextAreaElement
  tab.scrollTop = element.scrollTop
}
</script>

<template>
  <div
    ref="rootElement"
    class="scrollbar-w-0 scrollbar-h-8 flex h-full flex-col items-end overflow-y-auto px-3 py-2 font-mono"
    :class="{ 'overflow-x-scroll': tab.isHeightOverflow }"
    @scroll="handleScroll($event, tab)"
  >
    <div
      v-for="n of arrayFromRange({
        start: 1,
        length: tab.text.split('\n').length,
      })"
      :key="n"
    >
      {{ n }}
    </div>
  </div>
</template>
