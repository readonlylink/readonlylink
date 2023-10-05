<script setup lang="ts">
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
        class="hover:text-black"
        :class="{ 'text-black': route.path === '/' }"
        href="/"
      >
        <Lang>
          <template #zh> 首页 </template>
          <template #en> Homepage </template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        class="hover:text-black"
        :class="{ 'text-black': route.path === '/authors' }"
        href="/authors"
      >
        <Lang>
          <template #zh> 作者 </template>
          <template #en> Authors </template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        class="hover:text-black"
        :class="{ 'text-black': route.path === '/following' }"
        href="/following"
      >
        <Lang>
          <template #zh> 关注 </template>
          <template #en> Following </template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        class="hover:text-black"
        :class="{ 'text-black': route.path === '/history' }"
        href="/history"
      >
        <Lang>
          <template #zh> 历史 </template>
          <template #en> History </template>
        </Lang>
      </Hyperlink>
    </div>

    <div class="flex flex-col space-y-1 pr-8 pb-6">
      <a
        href="/editor"
        class="hover:text-black"
        :class="{ 'text-black': route.path === '/editor' }"
        target="_blank"
      >
        <Lang>
          <template #zh> 编辑器 </template>
          <template #en> Editor </template>
        </Lang>
      </a>

      <a
        :href="
          lang.isZh()
            ? `${origin}/manuals/${origin}/contents/manual/zh.json`
            : `${origin}/manuals/${origin}/contents/manual/en.json`
        "
        class="hover:text-black"
        :class="{ 'text-black': route.path === '/docs' }"
        target="_blank"
      >
        <Lang>
          <template #zh> 手册 </template>
          <template #en> Manual </template>
        </Lang>
      </a>

      <Hyperlink
        class="hover:text-black"
        :class="{ 'text-black': route.path === '/about' }"
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
