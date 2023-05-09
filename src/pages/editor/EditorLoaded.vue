<script setup lang="ts">
import { reactive } from 'vue'
import EditorLayout from './EditorLayout.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const state = reactive(props.state)
</script>

<template>
  <EditorLayout :state="state" />
</template>
