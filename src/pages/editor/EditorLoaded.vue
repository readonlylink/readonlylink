<script setup lang="ts">
import EditorLayout from './EditorLayout.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
</script>

<template>
  <EditorLayout :state="state" />
</template>
