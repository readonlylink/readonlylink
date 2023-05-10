<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'

const origin = window.location.origin
</script>

<template>
  <div
    class="flex w-full flex-wrap justify-between py-1 font-sans text-stone-400"
  >
    <div class="flex flex-wrap">
      <Hyperlink class="pr-3 hover:text-stone-900" href="/authors">
        <Lang>
          <template #zh> 作者 </template>
          <template #en> AUTHORS </template>
        </Lang>
      </Hyperlink>

      <Hyperlink class="pr-3 hover:text-stone-900" href="/docs">
        <Lang>
          <template #zh> 文档 </template>
          <template #en> DOCS </template>
        </Lang>
      </Hyperlink>

      <Hyperlink class="pr-3 hover:text-stone-900" href="/history">
        <Lang>
          <template #zh> 历史 </template>
          <template #en> HISTORY </template>
        </Lang>
      </Hyperlink>

      <Hyperlink class="pr-3 hover:text-stone-900" href="/subscriptions">
        <Lang>
          <template #zh> 订阅 </template>
          <template #en> SUBSCRIPTIONS </template>
        </Lang>
      </Hyperlink>

      <Hyperlink class="pr-3 hover:text-stone-900" href="/about">
        <Lang>
          <template #zh> 关于 </template>
          <template #en> ABOUT </template>
        </Lang>
      </Hyperlink>
    </div>
  </div>
</template>
