<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import IconGithub from '../../components/icons/IconGithub.vue'
import Lang from '../../components/Lang.vue'
import PageLang from './PageLang.vue'
import PageLogo from './PageLogo.vue'
</script>

<template>
  <div class="flex items-center justify-between">
    <Hyperlink href="/" class="hover:underline">
      <PageLogo />
    </Hyperlink>

    <div class="flex items-center space-x-3">
      <Hyperlink href="/manager" class="whitespace-nowrap hover:underline">
        <Lang>
          <template #zh> 管理器 </template>
          <template #en> Manager </template>
        </Lang>
      </Hyperlink>

      <Hyperlink href="/docs" class="whitespace-nowrap hover:underline">
        <Lang>
          <template #zh> 文档 </template>
          <template #en> Docs </template>
        </Lang>
      </Hyperlink>

      <PageLang class="z-30 whitespace-nowrap hover:underline" />

      <a href="https://github.com/fidb-official/fidb" target="_blank">
        <IconGithub class="h-5 w-5" />
      </a>
    </div>
  </div>
</template>
