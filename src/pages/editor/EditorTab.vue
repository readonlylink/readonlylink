<script setup lang="ts">
import EditorModeline from './EditorModeline.vue'
import EditorTextarea from './EditorTextarea.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <EditorTextarea :state="state" />
    <EditorModeline :state="state" />
  </div>
</template>
