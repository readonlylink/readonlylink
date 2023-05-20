<script setup lang="ts">
import Activity from '../../components/activity/Activity.vue'
import Lang from '../../components/lang/Lang.vue'
import { stateActivitiesForShow } from '../subscription/stateActivitiesForShow'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div
    v-if="state.isLoadingActivities"
    class="py-2 font-sans text-xl text-stone-500"
  >
    <Lang>
      <template #zh> 作者动态加载中⋯⋯ </template>
      <template #en> Loading authors' activities ... </template>
    </Lang>
  </div>

  <div v-else class="flex flex-col divide-y divide-black">
    <Activity
      v-for="activity of stateActivitiesForShow(state.subscriptionState)"
      :key="activity.author.url + ' ' + activity.path"
      :activity="activity"
    />
  </div>
</template>
