<script setup lang="ts">
import { Head } from '@vueuse/head'
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ManualLayout from './ManualLayout.vue'
import ManualPage from './ManualPage.vue'
import ManualPageNotFound from './ManualPageNotFound.vue'
import { State } from './State'
import { stateCurrentDocument } from './stateCurrentDocument'
import { stateNextPath } from './stateNextPath'
import { statePrevPath } from './statePrevPath'
import { stateReactive } from './stateReactive'
import { stateReactivelyUpdateRoute } from './stateReactivelyUpdateRoute'
import { stateTitle } from './stateTitle'

const props = defineProps<{ state: State }>()
const state = stateReactive(props.state)
const route = useRoute()
const router = useRouter()

stateReactivelyUpdateRoute(state, router)

const currentDocument = computed(() => stateCurrentDocument(state))

watch(
  () => route.params.path,
  (value) => {
    state.path = value ? String(value) : state.config.main
  },
  { immediate: true },
)

window.addEventListener('keydown', (event) => {
  if (event.altKey) return
  if (event.ctrlKey) return

  if (event.key === 'ArrowLeft') {
    const path = statePrevPath(state)
    if (path !== undefined) {
      router.push(`/manuals/${state.url}/-/${path}`)
    }
  }

  if (event.key === 'ArrowRight') {
    const path = stateNextPath(state)
    if (path !== undefined) {
      router.push(`/manuals/${state.url}/-/${path}`)
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
