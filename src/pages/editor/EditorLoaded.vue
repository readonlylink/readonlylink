<script setup lang="ts">
import EditorLayout from './EditorLayout.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <EditorLayout :state="state" />
</template>
