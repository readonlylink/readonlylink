<script setup lang="ts">
import { useRoute } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { useSubscription } from '../../models/subscription'
import { useGlobalTheme } from '../../models/theme'
import { currentOrigin } from '../../utils/currentOrigin'
import { State } from './State'

const props = defineProps<{ state: State }>()

const route = useRoute()
const origin = currentOrigin()
const theme = useGlobalTheme()
const lang = useGlobalLang()
const subscription = useSubscription()

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
  <div class="flex text-xl text-stone-400">
    <div class="flex flex-col space-y-1 pr-8 pb-6">
      <button
        class="hover:text-black whitespace-nowrap flex items-center hover:underline"
        @click="lang.isZh() ? (lang.tag = 'en') : (lang.tag = 'zh')"
      >
        <Lang>
          <template #zh>中文/English</template>
          <template #en>English/中文</template>
        </Lang>
      </button>

      <button
        class="whitespace-nowrap flex items-center hover:text-black"
        @click="
          theme.name !== 'dark' ? (theme.name = 'dark') : (theme.name = 'light')
        "
      >
        <Lang>
          <template #zh>
            <span v-if="theme.name === 'dark'">深色/普通</span>
            <span v-else>普通/深色</span>
          </template>
          <template #en>
            <span v-if="theme.name === 'dark'">Dark/Light</span>
            <span v-else>Light/Dark</span>
          </template>
        </Lang>
      </button>
    </div>

    <div class="flex flex-col space-y-1 pr-8 pb-6">
      <Hyperlink
          :href="`/authors/${state.url}/-/${state.config.homepage}`"
        class="hover:text-black"
        :class="{
          'text-black': state.path === state.config.homepage,
        }"
      >
        <Lang>
          <template #zh> 首页 </template>
          <template #en> Homepage </template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        :href="`/authors/${state.url}/-/activities`"
        class="hover:text-black"
        :class="{
          'text-black': state.path === 'activities',
        }"
      >
        <Lang>
          <template #zh> 动态 </template>
          <template #en> Activities </template>
        </Lang>
      </Hyperlink>

      <a
        v-if="!isSubscribed()"
        class="hover:text-black"
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
        class="hover:text-black"
        :title="lang.isZh() ? '订阅与退订' : 'Subscribe or unsubscribe'"
        @click="unsubscribe()"
      >
        <Lang>
          <template #zh> 已订阅 </template>
          <template #en> Subscribed </template>
        </Lang>
      </button>
    </div>

    <div class="flex flex-col space-y-1 pr-8 pb-6">
      <Hyperlink href="/" class="hover:text-black">
        <Lang>
          <template #zh> 只读链接 </template>
          <template #en> Readonly.Link </template>
        </Lang>
      </Hyperlink>
    </div>
  </div>
</template>
