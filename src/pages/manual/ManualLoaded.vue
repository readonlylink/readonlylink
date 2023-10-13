<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { Head } from '@vueuse/head'
import { computed, onMounted, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ManualLayout from './ManualLayout.vue'
import ManualPage from './ManualPage.vue'
import ManualPageNotFound from './ManualPageNotFound.vue'
import { State } from './State'
import { stateCurrentDocument } from './stateCurrentDocument'
import { stateNextPath } from './stateNextPath'
import { statePrevPath } from './statePrevPath'
import { stateReactivelyUpdateRoute } from './stateReactivelyUpdateRoute'
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

stateReactivelyUpdateRoute(props.state, router)

const currentDocument = computed(() => stateCurrentDocument(props.state))

watchEffect(() => {
  props.state.path = route.params.path
    ? String(route.params.path)
    : props.state.config.main
})

useEventListener(window, 'keydown', (event) => {
  if (event.altKey) return
  if (event.ctrlKey) return

  if (event.key === 'ArrowLeft') {
    const path = statePrevPath(props.state)
    if (path !== undefined) {
      router.push(`/manuals/${props.state.url}/-/${path}`)
    }
  }

  if (event.key === 'ArrowRight') {
    const path = stateNextPath(props.state)
    if (path !== undefined) {
      router.push(`/manuals/${props.state.url}/-/${path}`)
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

    <ManualLayout :state="state">
      <ManualPage
        v-if="currentDocument"
        :state="state"
        :document="currentDocument"
      />
      <ManualPageNotFound v-else :state="state" />
    </ManualLayout>
  </div>
</template>
