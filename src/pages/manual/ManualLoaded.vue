<script setup lang="ts">
import { Head } from '@vueuse/head'
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Lang from '../../components/Lang.vue'
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

const who = 'ManualLoaded'

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
    <div v-else>
      <div class="space-y-2 overflow-x-auto p-3">
        <div class="font-mono text-2xl">404</div>
        <div>
          <Lang>
            <template #zh> 没有这个页面。 </template>
            <template #en> Page not found. </template>
          </Lang>
        </div>
        <div class="overflow-x-auto font-mono text-sm">{{ state.path }}</div>
      </div>
    </div>
  </ManualLayout>
</template>
