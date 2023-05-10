<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex space-x-3 px-3">
    <div>EditorMenubar</div>
  </div>
</template>
