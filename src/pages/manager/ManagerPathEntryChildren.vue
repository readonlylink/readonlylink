<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import ManagerPathEntry from './ManagerPathEntry.vue'
import ManagerPathEntryChildrenPagination from './ManagerPathEntryChildrenPagination.vue'
import { PathEntryDirectory } from './PathEntry'
import { State } from './State'

defineProps<{
  state: State
  pathEntry: PathEntryDirectory
}>()
</script>

<template>
  <div v-if="pathEntry.kind === 'Directory' && pathEntry.isOpen" class="pl-2">
    <template v-if="pathEntry.children.length === 0">
      <Lang class="border-l border-black pl-2 text-stone-400">
        <template #zh> 空 </template>
        <template #en> empty </template>
      </Lang>
    </template>

    <template v-else>
      <ManagerPathEntry
        class="border-l border-black"
        v-for="child of pathEntry.children"
        :key="child.path"
        :state="state"
        :pathEntry="child"
      />
    </template>

    <div class="border-l border-black">
      <div
        class="flex justify-center border-t border-dotted text-sm"
        :class="[
          'transition duration-150',
          pathEntry.isChildrenLoading
            ? 'border-yellow-300 bg-yellow-200 text-yellow-900'
            : 'border-black text-black',
        ]"
      >
        <ManagerPathEntryChildrenPagination
          :state="state"
          :pathEntry="pathEntry"
        />
      </div>
    </div>
  </div>
</template>
