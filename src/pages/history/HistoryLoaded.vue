<script setup lang="ts">
import { Head } from '@vueuse/head'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import HistoryEntry from './HistoryEntry.vue'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <PageLayout>
    <div class="flex h-full max-w-3xl flex-col overflow-auto">
      <Head>
        <title v-if="lang.isZh()">历史</title>
        <title v-else>History</title>
      </Head>

      <Lang class="font-logo text-2xl font-bold text-stone-800">
        <template #zh> 历史 </template>
        <template #en> History </template>
      </Lang>

      <div class="flex flex-col overflow-y-auto py-3">
        <HistoryEntry
          v-for="(entry, key) of state.history.record"
          :key="key"
          :state="state"
          :entry="entry"
        />
      </div>
    </div>
  </PageLayout>
</template>
