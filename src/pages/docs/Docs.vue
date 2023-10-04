<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { Head } from '@vueuse/head'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useCurrentOrigin } from '../../utils/useCurrentOrigin'

const origin = useCurrentOrigin()
const lang = useGlobalLang()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">文档 | 只读</title>
      <title v-else>Docs | Readonly</title>
    </Head>

    <Lang class="font-logo text-2xl font-bold">
      <template #zh> 文档 </template>
      <template #en> Docs </template>
    </Lang>

    <main class="space-y-3 py-4">
      <Lang>
        <template #zh>
          <a
            :href="`${origin}/manuals/${origin}/contents/manual/en.json`"
            class="inline-flex items-center underline"
            target="_blank"
            >只读链接手册（英文）<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500" /></a
          >。
        </template>
        <template #en>
          <a
            :href="`${origin}/manuals/${origin}/contents/manual/en.json`"
            class="inline-flex items-center underline"
            target="_blank"
            >Readonly.Link Manual<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500" /></a
          >.
        </template>
      </Lang>

      <Lang>
        <template #zh>
          <a
            :href="`${origin}/manuals/${origin}/contents/manual/zh.json`"
            class="inline-flex items-center underline"
            target="_blank"
            >只读链接手册<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500" /></a
          >。
        </template>
        <template #en>
          <a
            :href="`${origin}/manuals/${origin}/contents/manual/zh.json`"
            class="inline-flex items-center underline"
            target="_blank"
            >Readonly.Link Manual (Chinese)<ArrowTopRightOnSquareIcon
              class="w-4 shrink-0 text-stone-500" /></a
          >.
        </template>
      </Lang>
    </main>
  </PageLayout>
</template>
