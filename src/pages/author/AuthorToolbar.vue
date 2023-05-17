<script setup lang="ts">
import { BookmarkIcon, BookmarkSlashIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
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
  <button
    v-if="!isSubscribed()"
    class="flex items-center font-sans text-stone-400 hover:text-black"
    @click="subscribe()"
  >
    <BookmarkIcon class="w-4 w-4" />

    <Lang>
      <template #zh> 订阅 </template>
      <template #en> SUBSCRIBE </template>
    </Lang>
  </button>

  <button
    v-else
    class="flex items-center font-sans text-stone-400 hover:text-black"
    @click="unsubscribe()"
  >
    <BookmarkSlashIcon class="w-4 w-4" />

    <Lang>
      <template #zh> 退订 </template>
      <template #en> UNSUBSCRIBE </template>
    </Lang>
  </button>
</template>
