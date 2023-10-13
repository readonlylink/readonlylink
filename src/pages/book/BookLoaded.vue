<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { Head } from '@vueuse/head'
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BookContents from './BookContents.vue'
import BookPage from './BookPage.vue'
import BookTitlePage from './BookTitlePage.vue'
import { State } from './State'
import { stateCurrentDocument } from './stateCurrentDocument'
import { stateNextPath } from './stateNextPath'
import { statePrevPath } from './statePrevPath'
import { stateRefresh } from './stateRefresh'
import { stateTitle } from './stateTitle'

const props = defineProps<{ state: State }>()
const route = useRoute()
const router = useRouter()

onMounted(async () => {
  if (props.state.isLoadedFromCache) {
    await stateRefresh(props.state)
  }
})

watch(
  () => route.query['front-matter'],
  (value) => {
    props.state.frontMatter = value ? String(value) : undefined
  },
)

watch(
  () => route.params.path,
  (value) => {
    props.state.path = value ? String(value) : undefined
  },
)

useEventListener(window, 'keydown', (event) => {
  if (event.altKey) return
  if (event.ctrlKey) return

  if (event.key === 'ArrowLeft') {
    const path = statePrevPath(props.state)
    if (path !== undefined) {
      router.push(`/books/${props.state.url}/-/${path}`)
    }
  }

  if (event.key === 'ArrowRight') {
    const path = stateNextPath(props.state)
    if (path !== undefined) {
      router.push(`/books/${props.state.url}/-/${path}`)
    }
  }
})
</script>

<template>
  <div
    class="h-screen-dynamic overflow-auto bg-white text-black dark:bg-black dark:text-white"
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
