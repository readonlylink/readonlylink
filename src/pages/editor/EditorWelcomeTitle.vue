<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <Lang class="text-2xl sm:text-3xl">
    <template #zh>
      <span>欢迎使用</span>
      <br class="block sm:hidden" />
      <span><b>只读编辑器</b></span>
    </template>
    <template #en>
      <span> Welcome to use </span>
      <br class="block sm:hidden" />
      <span><b> Readonly Editor </b></span>
    </template>
  </Lang>
</template>
