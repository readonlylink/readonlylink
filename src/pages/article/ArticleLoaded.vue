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
  <div class="mx-auto max-w-3xl">
    <Head>
      <title>{{ stateTitle(state) }}</title>
    </Head>

    <ArticleMarkdown v-if="stateIsMarkdown(state)" :state="state" />
    <ArticlePlaintext v-else :state="state" />
  </div>
</template>
