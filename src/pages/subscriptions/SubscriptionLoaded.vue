<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { PencilSquareIcon } from '@heroicons/vue/24/outline'
import Hyperlink from '../../components/Hyperlink.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'
import SubscriptionAuthor from './SubscriptionAuthor.vue'
import SubscriptionActivity from './SubscriptionActivity.vue'
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
  <SubscriptionEditor v-if="state.kind === 'Editor'" :state="state" />
  <SubscriptionList v-else :state="state" />
</template>
