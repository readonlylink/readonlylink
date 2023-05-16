<script setup lang="ts">
import { Head } from '@vueuse/head'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import BookContents from './BookContents.vue'
import BookPage from './BookPage.vue'
import BookTitlePage from './BookTitlePage.vue'
import { State } from './State'
import { stateCurrentDocument } from './stateCurrentDocument'
import { stateReactive } from './stateReactive'
import { stateTitle } from './stateTitle'

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
  <div class="mx-auto max-w-3xl">
    <Head>
      <title>{{ stateTitle(state) }}</title>
    </Head>

    <BookContents v-if="state.frontMatter === 'contents'" :state="state" />
    <BookTitlePage v-else-if="!state.path" :state="state" />
    <BookPage v-else :state="state" :document="stateCurrentDocument(state)" />
  </div>
</template>
