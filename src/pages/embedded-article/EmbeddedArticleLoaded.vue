<script setup lang="ts">
import { Head } from '@vueuse/head'
import EmbeddedArticleMarkdown from './EmbeddedArticleMarkdown.vue'
import { State } from './State'
import { stateTitle } from './stateTitle'

const props = defineProps<{ state: State }>()
</script>

<template>
  <div class="overflow-auto bg-white text-black dark:bg-black dark:text-white">
    <Head>
      <title>{{ stateTitle(state) }}</title>
    </Head>

    <div class="mx-auto max-w-3xl">
      <EmbeddedArticleMarkdown :state="state" />
    </div>
  </div>
</template>
