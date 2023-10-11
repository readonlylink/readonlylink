<script setup lang="ts">
import { ref, watch } from 'vue'
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

function handleInput(event: Event, tab: Tab) {
  const element = event.target as HTMLTextAreaElement
  tab.isHeightOverflow = element.scrollHeight > element.clientHeight
}
</script>

<template>
  <textarea
    ref="rootElement"
    class="scrollbar-w-8 scrollbar-h-8 h-full w-full resize-none whitespace-pre bg-white px-3 py-2 font-mono text-black caret-red-500 focus:outline-none dark:bg-black dark:text-white"
    spellcheck="false"
    v-model="tab.text"
    @scroll="handleScroll($event, tab)"
    @input="handleInput($event, tab)"
  />
</template>
