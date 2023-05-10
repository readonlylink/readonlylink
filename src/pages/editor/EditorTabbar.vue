<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex px-3">
    <div v-for="(tab, index) of state.tabs" :key="index">
      {{ tab.file.name }}
    </div>
  </div>
</template>
