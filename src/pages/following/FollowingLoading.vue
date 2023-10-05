<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { StateOptions } from './loadState'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <PageLayout>
    <Lang class="font-logo text-2xl font-bold">
      <template #zh> 订阅 </template>
      <template #en> Following </template>
    </Lang>

    <div class="font-ui text-xl text-stone-500">
      <Lang>
        <template #zh> 订阅列表加载中⋯⋯ </template>
        <template #en> Loading following ... </template>
      </Lang>
    </div>
  </PageLayout>
</template>
