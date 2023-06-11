<script setup lang="ts">
import Activity from '../../components/activity/Activity.vue'
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { State } from './State'
import SubscriptionAuthor from './SubscriptionAuthor.vue'
import { stateActivitiesForShow } from './stateActivitiesForShow'

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <div class="flex items-baseline justify-between">
      <Lang class="font-logo text-2xl font-bold">
        <template #zh> 订阅 </template>
        <template #en> Subscriptions </template>
      </Lang>

      <div>
        <Hyperlink
          href="/subscriptions?kind=Editor"
          class="text-stone-400 hover:text-black"
        >
          <Lang class="font-sans">
            <template #zh> 编辑 </template>
            <template #en> EDIT </template>
          </Lang>
        </Hyperlink>
      </div>
    </div>

    <div
      v-if="state.authors.length > 0"
      class="flex space-x-2 overflow-x-auto py-1"
    >
      <SubscriptionAuthor
        v-for="author of state.authors"
        :key="author.url"
        :state="state"
        :author="author"
      />
    </div>

    <template v-if="state.list.length > 0">
      <div class="border-b border-black"></div>

      <div class="flex flex-col divide-y divide-black">
        <Activity
          v-for="activity of stateActivitiesForShow(state)"
          :key="activity.author.url + ' ' + activity.path"
          :activity="activity"
        />
      </div>
    </template>

    <template v-else>
      <Lang class="py-3 text-xl text-stone-500">
        <template #zh> 还未订阅任何作者。 </template>
        <template #en> Not subscribed to any author yet. </template>
      </Lang>
    </template>
  </div>
</template>
