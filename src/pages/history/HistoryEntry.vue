<script setup lang="ts">
import { CalendarDaysIcon, TrashIcon } from '@heroicons/vue/24/outline'
import ReadonlylinkCard from '../../md-plugins/readonlylink/ReadonlylinkCard.vue'
import { HistoryEntry } from '../../models/history/History'
import { formatDateTime } from '../../utils/formatDate'
import { State } from './State'

defineProps<{
  state: State
  entry: HistoryEntry
}>()
</script>

<template>
  <div class="flex flex-col space-y-1">
    <div class="flex items-center space-x-2">
      <button
        class="flex items-center space-x-1"
        @click="delete state.history.record[entry.url]"
      >
        <TrashIcon class="h-5 w-5" />
      </button>

      <div class="flex items-center space-x-1">
        <CalendarDaysIcon class="h-5 w-5" />
        <span>{{ formatDateTime(entry.time) }}</span>
      </div>
    </div>
    <ReadonlylinkCard :url="entry.url" />
  </div>
</template>
