<script setup lang="ts">
import { onMounted } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import SubscriptionActivity from '../subscription/SubscriptionActivity.vue'
import { stateActivitiesForShow } from '../subscription/stateActivitiesForShow'
import { State } from './State'
import { stateLoadActivitiesOnce } from './stateLoadActivitiesOnce'

const props = defineProps<{ state: State }>()

onMounted(() => {
  if (props.state.isLoadingActivities === undefined) {
    stateLoadActivitiesOnce(props.state)
  }
})
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
    <SubscriptionActivity
      v-for="activity of stateActivitiesForShow(state.subscriptionState)"
      :key="activity.author.url + ' ' + activity.path"
      :state="state.subscriptionState"
      :activity="activity"
    />
  </div>
</template>
