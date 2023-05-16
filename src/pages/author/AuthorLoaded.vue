<script setup lang="ts">
import { Head } from '@vueuse/head'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AuthorPage from './AuthorPage.vue'
import { State } from './State'
import { stateCurrentDocument } from './stateCurrentDocument'
import { stateReactive } from './stateReactive'
import { stateReactivelyUpdateRoute } from './stateReactivelyUpdateRoute'
import { stateTitle } from './stateTitle'

const props = defineProps<{ state: State }>()
const state = stateReactive(props.state)
const route = useRoute()
const router = useRouter()

stateReactivelyUpdateRoute(state, router)

watch(
  () => route.params.path,
  (value) => {
    state.path = value ? String(value) : state.config.homepage
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <Head>
    <title>{{ stateTitle(state) }}</title>
  </Head>

  <AuthorPage :state="state" :document="stateCurrentDocument(state)" />
</template>
