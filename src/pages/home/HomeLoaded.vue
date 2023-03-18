<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import { stateActivitiesForShow } from '../subscription/stateActivitiesForShow'
import SubscriptionActivity from '../subscription/SubscriptionActivity.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <Lang class="font-logo text-2xl font-semibold text-stone-800">
      <template #zh> 作者动态 </template>
      <template #en> Authors' activities </template>
    </Lang>

    <div class="border-b border-black pb-1"></div>

    <div class="flex flex-col divide-y divide-black">
      <SubscriptionActivity
        v-for="activity of stateActivitiesForShow(state.subscriptionState)"
        :key="activity.author.url + ' ' + activity.path"
        :state="state.subscriptionState"
        :activity="activity"
      />
    </div>
  </div>
</template>
