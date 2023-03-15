<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
</script>

<template>
  <div
    class="flex w-full flex-wrap justify-between py-1 font-sans text-stone-400"
  >
    <div class="flex flex-wrap">
      <Hyperlink
        class="pr-3 hover:text-stone-900"
        href="/manuals/https://raw.githubusercontent.com/readonlylink/readonlylink-manual/master/manual.json"
      >
        <Lang>
          <template #zh> 文档 </template>
          <template #en> DOCS </template>
        </Lang>
      </Hyperlink>

      <!-- <Hyperlink class="pr-3 hover:text-stone-900" href="/history">
           <Lang>
           <template #zh> 历史 </template>
           <template #en> HISTORY </template>
           </Lang>
           </Hyperlink> -->

      <Hyperlink class="pr-3 hover:text-stone-900" href="/about">
        <Lang>
          <template #zh> 关于 </template>
          <template #en> ABOUT </template>
        </Lang>
      </Hyperlink>
    </div>
  </div>
</template>
