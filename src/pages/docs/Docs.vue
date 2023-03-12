<script setup lang="ts">
import { Head } from '@vueuse/head'
import IconExternalLink from '../../components/icons/IconExternalLink.vue'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalLang } from '../../reactives/useGlobalLang'
import DocsSlogan from './DocsSlogan.vue'

const lang = useGlobalLang()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">文档 | 只读</title>
      <title v-else>Docs | Readonly</title>
    </Head>

    <DocsSlogan class="my-4" />

    <div class="flex items-baseline space-x-4">
      <Lang class="font-logo text-2xl font-semibold text-gray-800">
        <template #zh> 文档 </template>
        <template #en> Documents </template>
      </Lang>
    </div>

    <div class="flex flex-col space-y-3 py-4">
      <a
        href="https://readonly.link/manuals/readonlylink/readonlylink-manual"
        target="_blank"
      >
        <Lang class="font-sans font-bold underline">
          <template #zh>
            只读链接手册 <IconExternalLink class="inline w-4" />
          </template>
          <template #en>
            Readonly.Link Manual <IconExternalLink class="inline w-4" />
          </template>
        </Lang>
      </a>

      <Lang class="font-sans text-xl font-bold">
        <template #zh> 只读链接规则 </template>
        <template #en> Readonly.Link Rules </template>
      </Lang>

      <Lang>
        <template #zh>
          <b>规则一：</b>当成功渲染您的内容时，我们将不会显示任何额外内容。
          包括任何形式的广告，以及我们的标识。
        </template>
        <template #en>
          <b>Rule 1:</b> When your contents are rendered successfully, we will
          not display any extra contents. Including any form of advertisement,
          and our logo.
        </template>
      </Lang>

      <Lang>
        <template #zh>
          <b>规则二：</b
          >您拥有您的内容与数据，但是我们将删除违反法律的内容，或者我们认为不合适的内容。
        </template>
        <template #en>
          <b>Rule 2:</b> You own your contents and data, but we will delete
          anything that breaks the laws or considered inappropriate by us.
        </template>
      </Lang>
    </div>
  </PageLayout>
</template>
