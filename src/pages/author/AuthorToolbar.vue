<script setup lang="ts">
import {
  BookmarkIcon,
  BookmarkSlashIcon,
  MegaphoneIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { useCurrentOrigin } from '../../utils/useCurrentOrigin'
import { useSubscription } from '../../models/subscription'
import { State } from './State'

const props = defineProps<{ state: State }>()

const lang = useGlobalLang()
const subscription = useSubscription()
const origin = useCurrentOrigin()

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
  <div class="flex overflow-x-auto text-xl">
    <Hyperlink
      :href="`/authors/${state.url}/-/ACTIVITIES`"
      class="mr-3 flex shrink-0 items-center space-x-0.5 hover:text-black"
      :class="{
        'text-black': state.path === 'ACTIVITIES',
        'text-stone-400': state.path !== 'ACTIVITIES',
      }"
    >
      <MegaphoneIcon class="h-4 w-4" />

      <Lang>
        <template #zh> 动态 </template>
        <template #en> ACTIVITIES </template>
      </Lang>
    </Hyperlink>

    <a
      v-if="!isSubscribed()"
      class="mr-3 flex shrink-0 items-center space-x-0.5 text-stone-400 hover:text-black"
      :title="lang.isZh() ? '订阅与退订' : 'Subscribe or unsubscribe'"
      @click="subscribe()"
      :href="`${origin}/subscriptions`"
      target="_blank"
    >
      <BookmarkIcon class="h-4 w-4" />

      <Lang>
        <template #zh> 订阅 </template>
        <template #en> SUBSCRIBE </template>
      </Lang>
    </a>

    <button
      v-if="isSubscribed()"
      class="mr-3 flex shrink-0 items-center space-x-0.5 text-stone-400 hover:text-black"
      :title="lang.isZh() ? '订阅与退订' : 'Subscribe or unsubscribe'"
      @click="unsubscribe()"
    >
      <BookmarkSlashIcon class="h-4 w-4" />
      <Lang>
        <template #zh> 退订 </template>
        <template #en> UNSUBSCRIBE </template>
      </Lang>
    </button>
  </div>
</template>
../../models/subscription
