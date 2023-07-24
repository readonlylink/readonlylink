<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { Config } from './Config'
import { State } from './State'

defineProps<{
  state: State
  config: Config
}>()
</script>

<template>
  <div>
    <Lang class="font-ui text-base text-stone-500">
      <template #zh> 未知 </template>
      <template #en> Unknown </template>
    </Lang>

    <div class="overflow-x-auto whitespace-pre font-code text-sm">
      {{ config }}
    </div>
  </div>
</template>
