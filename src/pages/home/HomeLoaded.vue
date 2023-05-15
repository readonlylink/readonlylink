<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { stateActivitiesForShow } from '../subscription/stateActivitiesForShow'
import SubscriptionActivity from '../subscription/SubscriptionActivity.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
</script>

<template>
  <div>
    <Lang class="font-logo text-2xl font-bold">
      <template #zh> 作者动态 </template>
      <template #en> Authors' activities </template>
    </Lang>

    <div class="border-b border-stone-500 pb-1"></div>

    <div v-if="state.isLoadingActivities">
      <Lang
        class="border-b border-dashed border-stone-500 py-2 font-sans text-stone-500"
      >
        <template #zh> 作者动态逐渐加载中⋯⋯ </template>
        <template #en>
          Loading authors' activities, little by little ...
        </template>
      </Lang>
    </div>

    <div class="flex flex-col divide-y divide-stone-600">
      <SubscriptionActivity
        v-for="activity of stateActivitiesForShow(state.subscriptionState)"
        :key="activity.author.url + ' ' + activity.path"
        :state="state.subscriptionState"
        :activity="activity"
      />
    </div>
  </div>
</template>
