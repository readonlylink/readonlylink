<script setup lang="ts">
import { watch } from 'vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

watch(
  () => props.state.url,
  () => {
    window.scrollTo(0, 0)
  },
)
</script>

<template>
  <div class="m-6 overflow-x-auto whitespace-pre font-mono">
    {{ state.text }}
  </div>
</template>
