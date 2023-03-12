<script setup lang="ts">
import { computed } from 'vue'
import Hyperlink from '../../components/Hyperlink.vue'
import { pathEntryBasename, pathEntryPartialSummation } from './PathEntry'
import { State } from './State'

const props = defineProps<{ state: State }>()

const prefixEntries = computed(() => {
  if (props.state.currentPathEntry === undefined) {
    return []
  }

  const entries = pathEntryPartialSummation(props.state.currentPathEntry)
  return entries.slice(0, entries.length - 1)
})

const lastEntry = computed(() => {
  if (props.state.currentPathEntry === undefined) {
    return undefined
  }

  const entries = pathEntryPartialSummation(props.state.currentPathEntry)
  return entries[entries.length - 1]
})
</script>

<template>
  <div class="overflow-x-auto overflow-y-hidden whitespace-nowrap pt-2 pb-1">
    <span class="font-bold">
      <Hyperlink class="hover:underline" href="/">fidb</Hyperlink>
    </span>

    <span>+</span>

    <span>{{ state.url }}/</span>

    <template v-if="state.currentPathEntry">
      <button
        v-for="(entry, index) of prefixEntries"
        :key="index"
        class="hover:underline"
        @click="state.currentPathEntry = entry"
      >
        <span>{{ pathEntryBasename(entry) }}</span>
        <span>/</span>
      </button>
      <button v-if="lastEntry" disabled>
        <span>{{ pathEntryBasename(lastEntry) }}</span>
        <span v-if="state.currentPathEntry?.kind === 'Directory'">/</span>
      </button>
    </template>
  </div>
</template>
