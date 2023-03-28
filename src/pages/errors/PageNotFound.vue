<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useRoute } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const lang = useGlobalLang()

const route = useRoute()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">404 | 只读</title>
      <title v-else>404 | Readonly</title>
    </Head>

    <div class="space-y-2 overflow-x-auto py-4">
      <div class="font-mono text-2xl">404</div>
      <div>
        <Lang>
          <template #zh> 没有这个页面。 </template>
          <template #en> Page not found. </template>
        </Lang>
      </div>
      <div class="overflow-x-auto font-mono text-sm">{{ route.fullPath }}</div>
    </div>
  </PageLayout>
</template>
