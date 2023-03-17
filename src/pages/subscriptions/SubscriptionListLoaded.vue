<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'
import SubscriptionListAuthor from './SubscriptionListAuthor.vue'
import SubscriptionListActivity from './SubscriptionListActivity.vue'

const props = defineProps<{ state: State }>()
const state = stateReactive(props.state)
</script>

<template>
  <PageLayout>
    <div class="flex space-x-3 py-4">
      <SubscriptionListAuthor
        v-for="(author, index) of state.authors"
        :key="index"
        :state="state"
        :author="author"
      />
    </div>

    <div class="border-b border-black"></div>

    <div class="flex flex-col divide-y divide-black">
      <SubscriptionListActivity
        v-for="(activity, index) of state.activities"
        :key="index"
        :state="state"
        :activity="activity"
      />
    </div>
  </PageLayout>
</template>
