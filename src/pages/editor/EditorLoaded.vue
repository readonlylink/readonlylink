<script setup lang="ts">
import EditorLayout from './EditorLayout.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'
import { stateisModified } from './stateisModified'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)

window.addEventListener('beforeunload', (event) => {
  if (stateisModified(state)) {
    event.preventDefault()
  }
})
</script>

<template>
  <EditorLayout :state="state" />
</template>
