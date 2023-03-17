<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { StateOptions } from './loadState'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <PageLayout>
    <div class="font-sans text-xl text-stone-500">
      <Lang class="font-bold">
        <template #zh> 订阅列表加载中⋯⋯ </template>
        <template #en> Loading subscriptions ... </template>
      </Lang>
    </div>
  </PageLayout>
</template>
