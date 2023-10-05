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
    <div class="flex h-full max-w-3xl flex-col">
      <Head>
        <title v-if="lang.isZh()">历史 | 只读</title>
        <title v-else>History | Readonly</title>
      </Head>

      <Lang class="text-2xl font-bold">
        <template #zh> 历史 </template>
        <template #en> History </template>
      </Lang>

      <Lang
        v-if="Object.keys(state.history.record).length === 0"
        class="py-3 text-xl text-stone-500 dark:text-stone-400"
      >
        <template #zh> 还没有历史记录。 </template>
        <template #en> No history record yet. </template>
      </Lang>

      <div class="flex flex-col space-y-4 py-3">
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
