<script setup lang="ts">
import { emulateTab } from 'emulate-tab'
import { ref } from 'vue'

/*

   List of entries where up and down keys emulate tab.

*/

defineProps<{
  entries: Array<any>
}>()

const cursor = ref<number>(0)
</script>

<template>
  <ul
    @keydown.up="
      () => {
        if (cursor > 0) {
          emulateTab.backwards()
        }
      }
    "
    @keydown.down="
      () => {
        if (cursor < entries.length - 1) {
          emulateTab()
        }
      }
    "
  >
    <li
      v-for="(entry, index) of entries"
      @focus.capture="cursor = index"
      :key="index"
    >
      <slot name="entry" :entry="entry" />
    </li>
  </ul>
</template>
