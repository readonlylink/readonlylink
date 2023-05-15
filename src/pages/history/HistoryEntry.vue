<script setup lang="ts">
import { CalendarDaysIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Readonlylink from '../../md-plugins/readonlylink/Readonlylink.vue'
import { HistoryEntry } from '../../models/history/History'
import { formatDateTime } from '../../utils/formatDate'
import { State } from './State'

defineProps<{
  state: State
  entry: HistoryEntry
}>()

const lang = useGlobalLang()
</script>

<template>
  <div class="flex flex-col space-y-1">
    <div class="flex items-center space-x-2">
      <button
        class="flex items-center space-x-1"
        :title="lang.isZh() ? '删除这条记录' : 'Remove this record'"
        @click="delete state.history.record[entry.url]"
      >
        <TrashIcon class="h-5 w-5" />
      </button>

      <div class="flex items-center space-x-1 overflow-auto">
        <CalendarDaysIcon class="h-5 w-5 shrink-0" />
        <span class="overflow-x-auto whitespace-pre">{{
          formatDateTime(entry.time)
        }}</span>
      </div>
    </div>
    <Readonlylink :url="entry.url" />
  </div>
</template>
