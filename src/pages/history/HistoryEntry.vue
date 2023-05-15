<script setup lang="ts">
import { HistoryEntry } from '../../models/history/History'
import { State } from './State'

defineProps<{
  state: State
  entry: HistoryEntry
}>()
</script>

<template>
  <div>
    <div>{{ entry.time }}</div>
    <div>{{ entry.url }}</div>
  </div>
</template>
