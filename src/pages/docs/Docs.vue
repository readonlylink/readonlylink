<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { Head } from '@vueuse/head'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalLang } from '../../reactives/useGlobalLang'

const lang = useGlobalLang()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">文档 | 只读</title>
      <title v-else>Docs | Readonly</title>
    </Head>

    <Lang class="font-logo text-2xl font-semibold text-stone-800">
      <template #zh> 文档 </template>
      <template #en> Docs </template>
    </Lang>

    <main class="space-y-3 py-4">
      <Lang>
        <template #zh>
          <a
            href="https://xieyuheng.com"
            class="inline-flex items-center underline"
            target="_blank"
          >
            Readonly.Link Manual
            <ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500"
            /> </a
          >。
        </template>
        <template #en>
          The project was founded by
          <a
            href="https://xieyuheng.com"
            class="inline-flex items-center underline"
            target="_blank"
          >
            Xie Yuheng
            <ArrowTopRightOnSquareIcon class="w-4 shrink-0 text-stone-500" />
          </a>
          at the end of 2021.
        </template>
      </Lang>
    </main>
  </PageLayout>
</template>
