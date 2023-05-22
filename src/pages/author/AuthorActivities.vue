<script setup lang="ts">
import Activity from '../../components/activity/Activity.vue'
import { sortActivities } from '../../models/activity/sortActivities'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col divide-y divide-black">
    <Activity
      v-for="activity of sortActivities(state.activities)"
      :key="activity.author.url + ' ' + activity.path"
      :activity="activity"
    />
  </div>
</template>
