<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useGlobalSubscription } from '../../reactives/useGlobalSubscription'
import { State } from './State'
import SubscriptionLoaded from './SubscriptionLoaded.vue'
import SubscriptionLoading from './SubscriptionLoading.vue'
import { loadState } from './loadState'

const route = useRoute()

const state = ref<State | undefined>(undefined)

function useStateOptions() {
  const subscription = useGlobalSubscription()
  const list = subscription.list
  const kind = route.query['kind'] ? String(route.query['kind']) : undefined

  return {
    kind,
    list,
  }
}

watch(
  () => route.params.url,
  async () => {
    state.value = await loadState(useStateOptions())
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <SubscriptionLoaded v-if="state" :state="state" />
  <SubscriptionLoading v-else :options="useStateOptions()" />
</template>
