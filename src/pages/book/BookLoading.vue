<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { StateOptions } from './stateLoad'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <PageLayout>
    <div class="text-xl text-stone-500 dark:text-stone-400">
      <Lang>
        <template #zh> 书籍加载中⋯⋯ </template>
        <template #en> Loading book ... </template>
      </Lang>

      <div class="overflow-x-auto whitespace-pre py-1 font-mono text-sm">
        {{ options }}
      </div>
    </div>
  </PageLayout>
</template>
