<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import { StateOptions } from './loadState'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <div class="font-sans text-xl text-stone-500">
    <Lang class="">
      <template #zh> 只读连接加载中⋯⋯ </template>
      <template #en> Loading readonlylink ... </template>
    </Lang>
  </div>
</template>
