<script setup lang="ts">
import { Head } from '@vueuse/head'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalLang } from '../../reactives/useGlobalLang'

const lang = useGlobalLang()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">404 | 只读</title>
      <title v-else>404 | Readonly</title>
    </Head>

    <div class="space-y-2 py-4">
      <div class="font-mono text-2xl">404</div>
      <div>
        <Lang>
          <template #zh> 没有这个页面。 </template>
          <template #en> Page not found. </template>
        </Lang>
      </div>
    </div>
  </PageLayout>
</template>
