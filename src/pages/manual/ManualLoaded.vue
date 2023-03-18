<script setup lang="ts">
import { Head } from '@vueuse/head'
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ManualLayout from './ManualLayout.vue'
import ManualPage from './ManualPage.vue'
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

const currentDocument = computed(() => stateCurrentDocument(state))

watch(
  () => route.params.path,
  (value) => {
    state.path = value ? String(value) : undefined
  },
)
</script>

<template>
  <Head>
    <title>{{ stateTitle(state) }}</title>
  </Head>

  <ManualLayout :state="state">
    <ManualPage
      v-if="currentDocument"
      :state="state"
      :document="currentDocument"
    />
    <div v-else>Error, no currentDocument</div>
  </ManualLayout>
</template>
