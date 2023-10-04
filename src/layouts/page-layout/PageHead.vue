<script setup lang="ts">
import { useRoute } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { useGlobalTheme } from '../../models/theme'
import { currentOrigin } from '../../utils/currentOrigin'
import PageLogo from './PageLogo.vue'

const route = useRoute()
const origin = currentOrigin()
const theme = useGlobalTheme()
const lang = useGlobalLang()
</script>

<template>
  <div class="flex flex-col items-baseline justify-between pb-2">
    <div class="flex w-full flex-wrap items-baseline justify-between">
      <Hyperlink href="/">
        <PageLogo class="my-2" />
      </Hyperlink>
    </div>

    <div
      class="flex w-full flex-wrap justify-between py-1 font-ui text-stone-400"
    >
      <div class="flex flex-wrap">
        <div class="flex flex-col space-y-1 pr-6 pb-6">
          <button
            class="pr-3 hover:text-black whitespace-nowrap flex items-center hover:underline"
            @click="lang.isZh() ? (lang.tag = 'en') : (lang.tag = 'zh')"
          >
            <Lang>
              <template #zh>中文/English</template>
              <template #en>English/中文</template>
            </Lang>
          </button>

          <button
            class="pr-3 whitespace-nowrap flex items-center hover:text-black"
            @click="
              theme.name !== 'dark'
                ? (theme.name = 'dark')
                : (theme.name = 'light')
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

          <Hyperlink
            class="pr-3 hover:text-black"
            :class="{ 'text-black': route.path === '/about' }"
            href="/about"
          >
            <Lang>
              <template #zh> 关于 </template>
              <template #en> About </template>
            </Lang>
          </Hyperlink>
        </div>

        <div class="flex flex-col space-y-1 pr-6 pb-6">
          <Hyperlink
            class="pr-3 hover:text-black"
            :class="{ 'text-black': route.path === '/authors' }"
            href="/authors"
          >
            <Lang>
              <template #zh> 作者 </template>
              <template #en> Authors </template>
            </Lang>
          </Hyperlink>

          <Hyperlink
            class="pr-3 hover:text-black"
            :class="{ 'text-black': route.path === '/subscriptions' }"
            href="/subscriptions"
          >
            <Lang>
              <template #zh> 订阅 </template>
              <template #en> Subscriptions </template>
            </Lang>
          </Hyperlink>

          <Hyperlink
            class="pr-3 hover:text-black"
            :class="{ 'text-black': route.path === '/history' }"
            href="/history"
          >
            <Lang>
              <template #zh> 历史 </template>
              <template #en> History </template>
            </Lang>
          </Hyperlink>
        </div>

        <div class="flex flex-col space-y-1 pr-6 pb-6">


          <Hyperlink
            class="pr-3 hover:text-black"
            :class="{ 'text-black': route.path === '/editor' }"
            href="/editor"
          >
            <Lang>
              <template #zh> 编辑器 </template>
              <template #en> Editor </template>
            </Lang>
          </Hyperlink>

          <a
            :href="
              lang.isZh()
                ? `${origin}/manuals/${origin}/contents/manual/zh.json`
                : `${origin}/manuals/${origin}/contents/manual/en.json`
            "
            class="pr-3 hover:text-black"
            :class="{ 'text-black': route.path === '/docs' }"
            target="_blank"
          >
            <Lang>
              <template #zh> 手册 </template>
              <template #en> Manual </template>
            </Lang>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
