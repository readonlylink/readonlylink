<script setup lant="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from '../../reactives/useGlobalLang'
import PageHead from './PageHead.vue'

const lang = useGlobalLang()
</script>

<template>
  <div
    class="mx-auto flex h-screen flex-col px-3 py-3 font-serif text-xl md:py-4 md:px-6"
    :class="{ 'max-w-3xl': true }"
  >
    <Head>
      <title v-if="lang.isZh()">只读</title>
      <title v-else>Readonly</title>

      <meta
        name="description"
        meta-key="description"
        content="
Readonly.Link
is a document rendering tool,
and a community for authors.

An invitation from books and articles.
"
      />
    </Head>

    <PageHead />

    <slot />
  </div>
</template>
