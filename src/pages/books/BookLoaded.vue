<script setup lang="ts">
import { State } from './State'
import { stateReactive } from './stateReactive'
// import BookTitlePage from "./BookTitlePage.vue"
// import BookContents from "./BookContents.vue"
// import BookPage from "./BookPage.vue"

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
</script>

<template>
  <Head>
    <!-- <title >{{ state.config.title }}</title> -->
  </Head>

  <BookContents v-if="state.frontMatter === 'contents'" :state="state" />
  <BookPage v-else-if="state.path" :state="state" />
  <BookTitlePage v-else :state="state" />
</template>
