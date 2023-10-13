<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AuthorPage from './AuthorPage.vue'
import { State } from './State'
import { stateCurrentDocument } from './stateCurrentDocument'
import { stateReactivelyUpdateRoute } from './stateReactivelyUpdateRoute'
import { stateRefresh } from './stateRefresh'
import { stateTitle } from './stateTitle'

const props = defineProps<{ state: State }>()
const route = useRoute()
const router = useRouter()

stateReactivelyUpdateRoute(props.state, router)

onMounted(async () => {
  if (props.state.isLoadedFromCache) {
    await stateRefresh(props.state)
  }
})

watchEffect(() => {
  props.state.path = route.params.path
    ? String(route.params.path)
    : props.state.config.homepage
})
</script>

<template>
  <Head>
    <title>{{ stateTitle(state) }}</title>
  </Head>

  <AuthorPage
    :state="state"
    :document="stateCurrentDocument(state)"
    :key="state.path"
  />
</template>
