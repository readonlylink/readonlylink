<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageFoot from './PageFoot.vue'
import PageHead from './PageHead.vue'

const lang = useGlobalLang()
</script>

<template>
  <div
    class="h-screen-dynamic overflow-auto bg-white dark:bg-black text-black dark:text-white"
  >
    <Head>
      <title v-if="lang.isZh()">只读</title>
      <title v-else>Readonly</title>
    </Head>

    <div
      class="mx-auto min-h-full h-full justify-between flex max-w-3xl flex-col px-3 py-3 text-xl sm:px-6 sm:py-4"
    >
      <div>
        <PageHead />

        <div class="flex flex-col">
          <slot />
        </div>
      </div>

      <div class="pt-20">
        <PageFoot
          class="border-t dark:border-white border-black py-2"
        />
      </div>
    </div>
  </div>
</template>
