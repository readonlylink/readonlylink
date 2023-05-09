<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex space-x-2 bg-stone-200">
    <div>EditorMenubar</div>
  </div>
</template>
