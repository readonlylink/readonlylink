<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center">
    <Lang class="text-stone-500">
      <template #zh>欢迎使用只读编辑器</template>
      <template #en>Welcome to Readonly Editor</template>
    </Lang>
  </div>
</template>
