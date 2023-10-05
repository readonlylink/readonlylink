<script setup lang="ts">
import { Head } from '@vueuse/head'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BookContents from './BookContents.vue'
import BookPage from './BookPage.vue'
import BookTitlePage from './BookTitlePage.vue'
import { State } from './State'
import { stateCurrentDocument } from './stateCurrentDocument'
import { stateNextPath } from './stateNextPath'
import { statePrevPath } from './statePrevPath'
import { stateReactive } from './stateReactive'
import { stateTitle } from './stateTitle'

const props = defineProps<{ state: State }>()
const state = stateReactive(props.state)
const route = useRoute()
const router = useRouter()

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

window.addEventListener('keydown', (event) => {
  if (event.altKey) return
  if (event.ctrlKey) return

  if (event.key === 'ArrowLeft') {
    const path = statePrevPath(state)
    if (path !== undefined) {
      router.push(`/books/${state.url}/-/${path}`)
    }
  }

  if (event.key === 'ArrowRight') {
    const path = stateNextPath(state)
    if (path !== undefined) {
      router.push(`/books/${state.url}/-/${path}`)
    }
  }
})
</script>

<template>
  <div
    class="h-screen-dynamic overflow-auto bg-white dark:bg-black text-black dark:text-white"
  >
    <Head>
      <title>{{ stateTitle(state) }}</title>
    </Head>

    <div class="mx-auto max-w-3xl">
      <BookContents v-if="state.frontMatter === 'contents'" :state="state" />
      <BookTitlePage v-else-if="!state.path" :state="state" />
      <BookPage v-else :state="state" :document="stateCurrentDocument(state)" />
    </div>
  </div>
</template>
