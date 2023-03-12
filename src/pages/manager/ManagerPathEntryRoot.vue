<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import ManagerPathEntry from './ManagerPathEntry.vue'
import ManagerPathEntryRootControl from './ManagerPathEntryRootControl.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex h-full flex-col overflow-y-auto border-l border-black">
    <div class="flex w-full justify-between border-b border-black">
      <div
        class="scrollbar-hide overflow-x-auto whitespace-nowrap px-2 font-bold"
      >
        <Lang>
          <template #zh> 根目录 </template>
          <template #en> Root </template>
        </Lang>
      </div>

      <ManagerPathEntryRootControl :state="state" />
    </div>

    <div v-for="pathEntry of state.pathEntries" :key="pathEntry.path">
      <ManagerPathEntry :state="state" :pathEntry="pathEntry" />
    </div>
  </div>
</template>
