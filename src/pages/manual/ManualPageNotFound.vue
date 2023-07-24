<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <div class="space-y-2 overflow-x-auto p-3">
      <div class="font-code text-2xl">404</div>
      <div>
        <Lang>
          <template #zh> 没有这个页面。 </template>
          <template #en> Page not found. </template>
        </Lang>
      </div>
      <div class="overflow-x-auto font-code text-sm">{{ state.path }}</div>
    </div>
  </div>
</template>
