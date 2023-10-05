<script setup lang="ts">
import { Head } from '@vueuse/head'
import ArticleMarkdown from './ArticleMarkdown.vue'
import ArticlePlaintext from './ArticlePlaintext.vue'
import { State } from './State'
import { stateIsMarkdown } from './stateIsMarkdown'
import { stateReactive } from './stateReactive'
import { stateTitle } from './stateTitle'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
</script>

<template>
  <div
    class="h-screen-dynamic overflow-auto bg-white dark:bg-black text-black dark:text-white"
  >
    <Head>
      <title>{{ stateTitle(state) }}</title>
    </Head>

    <div class="mx-auto max-w-3xl">
      <ArticleMarkdown v-if="stateIsMarkdown(state)" :state="state" />
      <ArticlePlaintext v-else :state="state" />
    </div>
  </div>
</template>
