<script setup lang="ts">
import { useRoute } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'

const route = useRoute()

const origin = window.location.origin
</script>

<template>
  <div
    class="flex w-full flex-wrap justify-between py-1 font-ui text-stone-400"
  >
    <div class="flex flex-wrap">
      <Hyperlink
        class="pr-3 hover:text-black"
        :class="{ 'text-black': route.path === '/' }"
        href="/"
      >
        <Lang>
          <template #zh> 首页 </template>
          <template #en> HOME </template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        class="pr-3 hover:text-black"
        :class="{ 'text-black': route.path === '/authors' }"
        href="/authors"
      >
        <Lang>
          <template #zh> 作者 </template>
          <template #en> AUTHORS </template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        class="pr-3 hover:text-black"
        :class="{ 'text-black': route.path === '/docs' }"
        href="/docs"
      >
        <Lang>
          <template #zh> 文档 </template>
          <template #en> DOCS </template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        class="pr-3 hover:text-black"
        :class="{ 'text-black': route.path === '/history' }"
        href="/history"
      >
        <Lang>
          <template #zh> 历史 </template>
          <template #en> HISTORY </template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        class="pr-3 hover:text-black"
        :class="{ 'text-black': route.path === '/subscriptions' }"
        href="/subscriptions"
      >
        <Lang>
          <template #zh> 订阅 </template>
          <template #en> SUBSCRIPTIONS </template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        class="pr-3 hover:text-black"
        :class="{ 'text-black': route.path === '/editor' }"
        href="/editor"
      >
        <Lang>
          <template #zh> 编辑器 </template>
          <template #en> EDITOR </template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        class="pr-3 hover:text-black"
        :class="{ 'text-black': route.path === '/about' }"
        href="/about"
      >
        <Lang>
          <template #zh> 关于 </template>
          <template #en> ABOUT </template>
        </Lang>
      </Hyperlink>
    </div>
  </div>
</template>
