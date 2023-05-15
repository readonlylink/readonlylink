<script setup lang="ts">
import ReadonlylinkCard from '../../md-plugins/readonlylink/ReadonlylinkCard.vue'
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
    <ReadonlylinkCard :url="entry.url" />
  </div>
</template>
