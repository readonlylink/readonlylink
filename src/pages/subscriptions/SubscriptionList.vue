<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SubscriptionListLoaded from './SubscriptionListLoaded.vue'
import SubscriptionListLoading from './SubscriptionListLoading.vue'
import { loadState, State } from './State'

const route = useRoute()

const state = ref<State | undefined>(undefined)

function useStateOptions() {
  return {}
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
  <SubscriptionListLoaded v-if="state" :state="state" />
  <SubscriptionListLoading v-else :options="useStateOptions()" />
</template>
