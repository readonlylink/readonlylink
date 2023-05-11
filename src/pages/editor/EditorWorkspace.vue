<script setup lang="ts">
import { State } from './State'
import { Workspace } from './Workspace'

defineProps<{
  state: State
  workspace: Workspace
}>()
</script>

<template>
  <div class="flex h-full w-full flex-col overflow-auto">
    <div class="px-3 py-1">EditorWorkspace</div>
  </div>
</template>
