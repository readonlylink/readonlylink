<script setup lang="ts">
import { arrayFromRange } from '../../utils/arrayFromRange'
import { State } from './State'
import { Tab } from './Tab'

defineProps<{
  state: State
  tab: Tab
}>()

function syncScroll(event: Event) {
  console.log()
}
</script>

<template>
  <div class="flex h-full w-full overflow-y-auto">
    <div
      class="flex h-full flex-col items-end overflow-y-auto px-3 py-2 font-mono"
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

    <textarea
      class="h-full w-full resize-none overflow-y-auto px-3 py-2 font-mono caret-red-500 focus:outline-none"
      spellcheck="false"
      v-model="tab.text"
      @scroll="syncScroll($event)"
    />
  </div>
</template>
