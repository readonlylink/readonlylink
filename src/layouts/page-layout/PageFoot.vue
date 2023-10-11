<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'

const lang = useGlobalLang()
</script>

<template>
  <div class="text-sm">
    <Lang>
      <template #zh>
        <a href="https://xieyuheng.com" target="_blank"> 谢宇恒软件工作室 </a>
      </template>
      <template #en>
        <a href="https://xieyuheng.com" target="_blank">
          Xie Yuheng Software Studio
        </a>
      </template>
    </Lang>
  </div>
</template>
