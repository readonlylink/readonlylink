<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import { State } from './State'
import SubscriptionActivity from './SubscriptionActivity.vue'
import SubscriptionAuthor from './SubscriptionAuthor.vue'

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <div class="flex items-baseline justify-between space-x-4">
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

    <div class="flex space-x-3 overflow-x-auto py-2">
      <SubscriptionAuthor
        v-for="(author, index) of state.authors"
        :key="index"
        :state="state"
        :author="author"
      />
    </div>

    <div class="border-b border-black"></div>

    <div class="flex flex-col divide-y divide-black">
      <SubscriptionActivity
        v-for="(activity, index) of state.activities"
        :key="index"
        :state="state"
        :activity="activity"
      />
    </div>
  </div>
</template>
