<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { StateOptions } from './stateLoad'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <div class="text-xl text-stone-500 dark:text-stone-400">
    <Lang>
      <template #zh> 只读链接加载中⋯⋯ </template>
      <template #en> Loading readonlylink ... </template>
    </Lang>
  </div>
</template>
