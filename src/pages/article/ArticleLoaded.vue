<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted } from 'vue'
import ArticleMarkdown from './ArticleMarkdown.vue'
import ArticlePlaintext from './ArticlePlaintext.vue'
import { State } from './State'
import { stateIsMarkdown } from './stateIsMarkdown'
import { stateRefresh } from './stateRefresh'
import { stateTitle } from './stateTitle'

const props = defineProps<{ state: State }>()

onMounted(async () => {
  if (props.state.isLoadedFromCache) {
    await stateRefresh(props.state)
  }
})
</script>

<template>
  <div class="overflow-auto bg-white text-black dark:bg-black dark:text-white">
    <Head>
      <title>{{ stateTitle(state) }}</title>
    </Head>

    <div class="mx-auto max-w-3xl">
      <ArticleMarkdown v-if="stateIsMarkdown(state)" :state />
      <ArticlePlaintext v-else :state />
    </div>
  </div>
</template>
