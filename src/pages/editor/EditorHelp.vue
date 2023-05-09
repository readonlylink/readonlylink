<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center">
    <div class="text-stone-300">Welcome to ro-editor</div>
  </div>
</template>
