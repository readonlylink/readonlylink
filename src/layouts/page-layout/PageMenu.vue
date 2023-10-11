<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { useGlobalTheme } from '../../models/theme'
import { currentOrigin } from '../../utils/currentOrigin'

const route = useRoute()
const origin = currentOrigin()
const theme = useGlobalTheme()
const lang = useGlobalLang()
</script>

<template>
  <div class="flex flex-wrap text-stone-400">
    <div class="flex flex-col items-start space-y-1 pb-6 pr-8">
      <button
        class="hover:text-black dark:hover:text-white"
        @click="lang.isZh() ? (lang.tag = 'en') : (lang.tag = 'zh')"
      >
        <Lang>
          <template #zh>中文/English</template>
          <template #en>English/中文</template>
        </Lang>
      </button>

      <button
        class="hover:text-black dark:hover:text-white"
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
    </div>

    <div class="flex flex-col items-start space-y-1 pb-6 pr-8">
      <Hyperlink
        class="hover:text-black dark:hover:text-white"
        :class="{ 'text-black dark:text-white': route.path === '/' }"
        href="/"
      >
        <Lang>
          <template #zh> 首页 </template>
          <template #en> Homepage </template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        class="hover:text-black dark:hover:text-white"
        :class="{ 'text-black dark:text-white': route.path === '/authors' }"
        href="/authors"
      >
        <Lang>
          <template #zh> 作者 </template>
          <template #en> Authors </template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        class="hover:text-black dark:hover:text-white"
        :class="{ 'text-black dark:text-white': route.path === '/following' }"
        href="/following"
      >
        <Lang>
          <template #zh> 关注 </template>
          <template #en> Following </template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        class="hover:text-black dark:hover:text-white"
        :class="{ 'text-black dark:text-white': route.path === '/history' }"
        href="/history"
      >
        <Lang>
          <template #zh> 历史 </template>
          <template #en> History </template>
        </Lang>
      </Hyperlink>
    </div>

    <div class="flex flex-col items-start space-y-1 pb-6 pr-8">
      <a
        href="/editor"
        class="flex items-center hover:text-black dark:hover:text-white"
        :class="{ 'text-black dark:text-white': route.path === '/editor' }"
        target="_blank"
      >
        <Lang>
          <template #zh> 编辑器 </template>
          <template #en> Editor </template>
        </Lang>

        <ArrowTopRightOnSquareIcon class="ml-0.5 h-4 w-4" />
      </a>

      <a
        :href="
          lang.isZh()
            ? `${origin}/manuals/${origin}/contents/manual/zh.json`
            : `${origin}/manuals/${origin}/contents/manual/en.json`
        "
        class="flex items-center hover:text-black dark:hover:text-white"
        :class="{ 'text-black dark:text-white': route.path === '/docs' }"
        target="_blank"
      >
        <Lang>
          <template #zh> 手册 </template>
          <template #en> Manual </template>
        </Lang>

        <ArrowTopRightOnSquareIcon class="ml-0.5 h-4 w-4" />
      </a>

      <Hyperlink
        class="hover:text-black dark:hover:text-white"
        :class="{ 'text-black dark:text-white': route.path === '/about' }"
        href="/about"
      >
        <Lang>
          <template #zh> 关于 </template>
          <template #en> About </template>
        </Lang>
      </Hyperlink>
    </div>
  </div>
</template>
