<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { useFollowing } from '../../models/following'
import { useGlobalTheme } from '../../models/theme'
import { currentOrigin } from '../../utils/currentOrigin'
import { State } from './State'

const props = defineProps<{ state: State }>()

const route = useRoute()
const origin = currentOrigin()
const theme = useGlobalTheme()
const lang = useGlobalLang()
const following = useFollowing()

function isFollowed() {
  return following.list.includes(props.state.url)
}

function follow() {
  if (!isFollowed()) {
    following.list = [...following.list, props.state.url]
  }
}

function unfollow() {
  following.list = following.list.filter((url) => url !== props.state.url)
}
</script>

<template>
  <div class="flex flex-wrap text-xl text-stone-400">
    <div class="flex flex-col items-start space-y-1 pb-6 pr-8">
      <button
        class="flex items-center whitespace-nowrap hover:text-black hover:underline dark:hover:text-white"
        @click="lang.isZh() ? (lang.tag = 'en') : (lang.tag = 'zh')"
      >
        <Lang>
          <template #zh>中文/English</template>
          <template #en>English/中文</template>
        </Lang>
      </button>

      <button
        class="flex items-center whitespace-nowrap hover:text-black dark:hover:text-white"
        @click="
          theme.name !== 'dark' ? (theme.name = 'dark') : (theme.name = 'light')
        "
      >
        <Lang>
          <template #zh>
            <span v-if="theme.name === 'dark'">深色/浅色</span>
            <span v-else>浅色/深色</span>
          </template>
          <template #en>
            <span v-if="theme.name === 'dark'">Dark/Light</span>
            <span v-else>Light/Dark</span>
          </template>
        </Lang>
      </button>

      <button
        v-if="!isFollowed()"
        class="hover:text-black dark:hover:text-white"
        @click="follow()"
      >
        <Lang>
          <template #zh> 取关/关注 </template>
          <template #en> Unfollow/Follow </template>
        </Lang>
      </button>

      <button
        v-if="isFollowed()"
        class="hover:text-black dark:hover:text-white"
        @click="unfollow()"
      >
        <Lang>
          <template #zh> 关注/取关 </template>
          <template #en> Follow/Unfollow </template>
        </Lang>
      </button>
    </div>

    <div class="flex flex-col items-start space-y-1 pb-6 pr-8">
      <Hyperlink
        :href="`/authors/${state.url}/-/${state.config.homepage}`"
        class="hover:text-black dark:hover:text-white"
        :class="{
          'text-black dark:text-white': state.path === state.config.homepage,
        }"
      >
        <Lang>
          <template #zh> 首页 </template>
          <template #en> Homepage </template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        :href="`/authors/${state.url}/-/activities`"
        class="hover:text-black dark:hover:text-white"
        :class="{
          'text-black dark:text-white': state.path === 'activities',
        }"
      >
        <Lang>
          <template #zh> 动态 </template>
          <template #en> Activities </template>
        </Lang>
      </Hyperlink>
    </div>

    <div class="flex flex-col items-start space-y-1 pb-6 pr-8">
      <a
        href="/"
        target="_blank"
        class="flex items-center hover:text-black dark:hover:text-white"
      >
        <Lang>
          <template #zh> 只读链接 </template>
          <template #en> Readonly.Link </template>
        </Lang>

        <ArrowTopRightOnSquareIcon class="ml-0.5 h-4 w-4" />
      </a>
    </div>
  </div>
</template>
