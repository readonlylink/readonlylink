<script setup lang="ts">
import EditorModeline from './EditorModeline.vue'
import EditorTextarea from './EditorTextarea.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex h-full flex-col">
    <EditorTextarea
      v-if="state.currentText"
      :state="state"
      :currentText="currentText"
    />
    <EditorModeline :state="state" />
  </div>
</template>
