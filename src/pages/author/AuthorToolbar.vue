<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { useSubscription } from '../../models/subscription'
import { currentOrigin } from '../../utils/currentOrigin'
import { State } from './State'

const props = defineProps<{ state: State }>()

const lang = useGlobalLang()
const subscription = useSubscription()
const origin = currentOrigin()

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
      :href="`/authors/${state.url}/-/activities`"
      class="mr-3 flex shrink-0 items-center space-x-0.5 hover:text-black"
      :class="{
        'text-black': state.path === 'activities',
        'text-stone-400': state.path !== 'activities',
      }"
    >
      <Lang>
        <template #zh> 动态 </template>
        <template #en> Activities </template>
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
      <Lang>
        <template #zh> 订阅 </template>
        <template #en> Subscribe </template>
      </Lang>
    </a>

    <button
      v-if="isSubscribed()"
      class="mr-3 flex shrink-0 items-center space-x-0.5 text-stone-400 hover:text-black"
      :title="lang.isZh() ? '订阅与退订' : 'Subscribe or unsubscribe'"
      @click="unsubscribe()"
    >
      <Lang>
        <template #zh> 已订阅 </template>
        <template #en> Subscribed </template>
      </Lang>
    </button>
  </div>
</template>
