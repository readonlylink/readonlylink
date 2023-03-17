<script setup lang="ts">
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { State } from './State'
import { stateReactive } from './stateReactive'
import SubscriptionList from './SubscriptionList.vue'
import SubscriptionEditor from './SubscriptionEditor.vue'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)

const route = useRoute()

watch(
  () => route.query['kind'],
  (value) => {
    const kind = value ? String(value) : undefined
    state.kind = kind
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <PageLayout>
    <SubscriptionEditor v-if="state.kind === 'Editor'" :state="state" />
    <SubscriptionList v-else :state="state" />
  </PageLayout>
</template>
