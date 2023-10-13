<script setup lang="ts">
import EditorLayout from './EditorLayout.vue'
import { State } from './State'
import { stateWatch } from './stateWatch'
import { stateisModified } from './stateisModified'

const props = defineProps<{ state: State }>()

stateWatch(props.state)

window.addEventListener('beforeunload', (event) => {
  if (stateisModified(props.state)) {
    event.preventDefault()
  }
})
</script>

<template>
  <EditorLayout :state="state" />
</template>
