<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import { State } from './State'
import { stateActivitiesForShow } from './stateActivitiesForShow'
import SubscriptionActivity from './SubscriptionActivity.vue'
import SubscriptionAuthor from './SubscriptionAuthor.vue'

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <div class="flex items-baseline justify-between">
      <Lang class="font-logo text-2xl font-semibold text-stone-800">
        <template #zh> 订阅 </template>
        <template #en> Subscriptions </template>
      </Lang>

      <div>
        <Hyperlink
          href="/subscriptions?kind=Editor"
          class="text-stone-400 hover:text-stone-900"
        >
          <Lang class="font-sans">
            <template #zh> 编辑 </template>
            <template #en> EDIT </template>
          </Lang>
        </Hyperlink>
      </div>
    </div>

    <div class="flex space-x-2 overflow-x-auto py-1">
      <SubscriptionAuthor
        v-for="author of state.authors"
        :key="author.url"
        :state="state"
        :author="author"
      />
    </div>

    <template v-if="state.list.length > 0">
      <div class="border-b border-black"></div>

      <div class="flex flex-col divide-y divide-stone-600">
        <SubscriptionActivity
          v-for="activity of stateActivitiesForShow(state)"
          :key="activity.author.url + ' ' + activity.path"
          :state="state"
          :activity="activity"
        />
      </div>
    </template>

    <template v-else>
      <Lang>
        <template #zh> 还未订阅任何作者。 </template>
        <template #en> Not subscribed to any author yet. </template>
      </Lang>
    </template>
  </div>
</template>
