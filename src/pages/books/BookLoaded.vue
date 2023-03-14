<script setup lang="ts">
import { Head } from '@vueuse/head'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import BookContents from './BookContents.vue'
import BookPage from './BookPage.vue'
import BookTitlePage from './BookTitlePage.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()
const state = stateReactive(props.state)
const route = useRoute()

watch(
  () => route.query['front-matter'],
  (value) => {
    state.frontMatter = value ? String(value) : undefined
  },
)

watch(
  () => route.params.path,
  (value) => {
    state.path = value ? String(value) : undefined
  },
)
</script>

<template>
  <Head>
    <title>{{ state.config.title }}</title>
  </Head>

  <BookContents v-if="state.frontMatter === 'contents'" :state="state" />
  <BookPage v-else-if="state.path" :state="state" :path="state.path" />
  <BookTitlePage v-else :state="state" />
</template>
