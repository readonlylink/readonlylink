<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import HomeSlogan from './HomeSlogan.vue'
</script>

<template>
  <PageLayout>
    <div>
      <HomeSlogan />

      <div class="flex items-baseline space-x-4">
        <Lang class="font-logo text-2xl font-semibold text-stone-800">
          <template #zh> 评介 </template>
          <template #en> Reviews </template>
        </Lang>
      </div>

      <div>TODO</div>
    </div>
  </PageLayout>
</template>
