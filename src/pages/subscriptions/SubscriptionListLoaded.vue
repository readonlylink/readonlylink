<script setup lang="ts">
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
    <div class="flex">
      <SubscriptionListAuthor
        v-for="(author, index) of state.authors"
        :key="index"
        :state="state"
        :author="author"
      />
    </div>

    <div class="flex flex-col">
      <SubscriptionListActivity
        v-for="(activity, index) of state.activities"
        :key="index"
        :state="state"
        :activity="activity"
      />
    </div>
  </PageLayout>
</template>
