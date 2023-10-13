<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { StateOptions } from './stateLoad'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <PageLayout>
    <Lang class="text-2xl font-bold">
      <template #zh> 关注 </template>
      <template #en> Following </template>
    </Lang>

    <div class="text-xl text-stone-500 dark:text-stone-400">
      <Lang>
        <template #zh> 关注列表加载中⋯⋯ </template>
        <template #en> Loading following ... </template>
      </Lang>
    </div>
  </PageLayout>
</template>
