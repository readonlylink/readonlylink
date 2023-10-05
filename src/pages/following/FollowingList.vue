<script setup lang="ts">
import Activity from '../../components/activity/Activity.vue'
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import FollowingAuthor from './FollowingAuthor.vue'
import { State } from './State'
import { stateActivitiesForShow } from './stateActivitiesForShow'

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <div class="flex items-baseline justify-between">
      <Lang class="text-2xl font-bold">
        <template #zh> 关注 </template>
        <template #en> Following </template>
      </Lang>

      <div>
        <Hyperlink
          href="/following?kind=Editor"
          class="text-stone-400 hover:text-black dark:hover:text-white"
        >
          <Lang class="">
            <template #zh> 编辑 </template>
            <template #en> Edit </template>
          </Lang>
        </Hyperlink>
      </div>
    </div>

    <div
      v-if="state.authors.length > 0"
      class="flex space-x-2 overflow-x-auto py-1"
    >
      <FollowingAuthor
        v-for="author of state.authors"
        :key="author.url"
        :state="state"
        :author="author"
      />
    </div>

    <template v-if="state.list.length > 0">
      <div class="border-b border-black dark:border-white"></div>

      <div class="flex flex-col divide-y divide-black">
        <Activity
          v-for="activity of stateActivitiesForShow(state)"
          :key="activity.author.url + ' ' + activity.path"
          :activity="activity"
        />
      </div>
    </template>

    <template v-else>
      <Lang class="py-3 text-xl text-stone-500 dark:text-stone-400">
        <template #zh> 还未关注任何作者。 </template>
        <template #en> Not following any author yet. </template>
      </Lang>
    </template>
  </div>
</template>
