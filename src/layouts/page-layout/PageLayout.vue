<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageHead from './PageHead.vue'

const lang = useGlobalLang()
</script>

<template>
  <div
    class="h-screen-dynamic mx-auto flex max-w-3xl flex-col px-3 py-3 font-serif text-xl sm:px-6 sm:py-4"
  >
    <Head>
      <title v-if="lang.isZh()">只读</title>
      <title v-else>Readonly</title>
    </Head>

    <PageHead />

    <slot />
  </div>
</template>
