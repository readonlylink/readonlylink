<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import { useGlobalSubscription } from '../../reactives/useGlobalSubscription'
import { State } from './State'
import { stateActivitiesSorted } from './stateActivitiesSorted'
import SubscriptionActivity from './SubscriptionActivity.vue'
import SubscriptionAuthor from './SubscriptionAuthor.vue'

const subscription = useGlobalSubscription()

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <div class="flex items-baseline justify-between">
      <Lang class="font-logo text-2xl font-semibold text-stone-800">
        <template #zh> 动态 </template>
        <template #en> Activities </template>
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

    <div class="flex space-x-2 overflow-x-auto py-2">
      <SubscriptionAuthor
        v-for="(author, index) of state.authors"
        :key="author.url"
        :state="state"
        :author="author"
      />
    </div>

    <template v-if="subscription.list.length > 0">
      <div class="border-b border-black"></div>

      <div class="flex flex-col divide-y divide-black">
        <SubscriptionActivity
          v-for="(activity, index) of stateActivitiesSorted(state)"
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
