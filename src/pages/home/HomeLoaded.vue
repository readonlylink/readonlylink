<script setup lang="ts">
import Activity from '../../components/activity/Activity.vue'
import Lang from '../../components/lang/Lang.vue'
import { sortActivities } from '../../models/activity/sortActivities'
import { State } from './State'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
</script>

<template>
  <div>
    <Lang class="text-2xl font-bold">
      <template #zh> 作者动态 </template>
      <template #en> Authors' activities </template>
    </Lang>

    <div class="border-b border-black dark:border-white pb-1"></div>

    <div class="flex flex-col divide-y divide-black dark:divide-white">
      <Activity
        v-for="activity of sortActivities(state.activities)"
        :key="activity.author.url + ' ' + activity.path"
        :activity="activity"
      />
    </div>
  </div>
</template>
