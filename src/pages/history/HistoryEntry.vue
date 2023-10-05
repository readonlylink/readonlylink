<script setup lang="ts">
import { CalendarDaysIcon, TrashIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
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
    <div class="flex items-center space-x-1 overflow-auto">
      <CalendarDaysIcon class="h-5 w-5 shrink-0" />
      <span class="overflow-x-auto whitespace-pre">{{
        formatDateTime(entry.time)
      }}</span>
    </div>

    <button
      class="flex items-center space-x-1 hover:text-stone-500 hover:dark:text-stone-400"
      :title="lang.isZh() ? '删除这条记录' : 'Remove this record'"
      @click="delete state.history.record[entry.url]"
    >
      <TrashIcon class="h-5 w-5 shrink-0" />

      <Lang class="text-lg">
        <template #zh>删除</template>
        <template #en>Remove</template>
      </Lang>
    </button>

    <Readonlylink :url="entry.url" />
  </div>
</template>
