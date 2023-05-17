<script setup lang="ts">
import {
  BookmarkIcon,
  BookmarkSlashIcon,
  MegaphoneIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { useGlobalSubscription } from '../../reactives/useGlobalSubscription'
import { State } from './State'

const props = defineProps<{ state: State }>()

const subscription = useGlobalSubscription()

function isSubscribed() {
  return subscription.list.includes(props.state.url)
}

function subscribe() {
  if (!isSubscribed()) {
    subscription.list = [...subscription.list, props.state.url]
  }
}

function unsubscribe() {
  subscription.list = subscription.list.filter((url) => url !== props.state.url)
}
</script>

<template>
  <div class="flex text-xl">
    <Hyperlink
      :href="`/authors/${state.url}/-/ACTIVITIES`"
      class="mr-3 flex items-center space-x-0.5 text-stone-400 hover:text-black"
    >
      <MegaphoneIcon class="w-4 w-4" />

      <Lang>
        <template #zh> 动态 </template>
        <template #en> ACTIVITY </template>
      </Lang>
    </Hyperlink>

    <button
      class="mr-3 flex items-center space-x-0.5 text-stone-400 hover:text-black"
      @click="isSubscribed() ? unsubscribe() : subscribe()"
    >
      <template v-if="!isSubscribed()">
        <BookmarkIcon class="w-4 w-4" />

        <Lang>
          <template #zh> 订阅 </template>
          <template #en> SUBSCRIBE </template>
        </Lang>
      </template>
      <template v-else>
        <BookmarkSlashIcon class="w-4 w-4" />
        <Lang>
          <template #zh> 退订 </template>
          <template #en> UNSUBSCRIBE </template>
        </Lang>
      </template>
    </button>
  </div>
</template>
