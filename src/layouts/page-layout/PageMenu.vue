<script setup>
import Lang from "../../components/Lang.vue"
</script>

<template>
  <div
    class="flex w-full flex-wrap justify-between py-1 font-sans text-gray-400"
  >
    <div class="flex flex-wrap">
      <Link class="pr-3 hover:text-gray-900" href="/authors">
        <Lang>
          <template #zh> 作者 </template>
          <template #en> AUTHORS </template>
        </Lang>
      </Link>

      <Link class="pr-3 hover:text-gray-900" href="/docs">
        <Lang>
          <template #zh> 文档 </template>
          <template #en> DOCS </template>
        </Lang>
      </Link>

      <Link class="pr-3 hover:text-gray-900" href="/history">
        <Lang>
          <template #zh> 历史 </template>
          <template #en> HISTORY </template>
        </Lang>
      </Link>

      <Link class="pr-3 hover:text-gray-900" href="/about">
        <Lang>
          <template #zh> 关于 </template>
          <template #en> ABOUT </template>
        </Lang>
      </Link>
    </div>
  </div>
</template>
