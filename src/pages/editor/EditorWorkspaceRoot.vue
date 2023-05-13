<script setup lang="ts">
import { State } from './State'
import { Workspace } from './Workspace'

defineProps<{
  state: State
  workspace: Workspace
}>()
</script>

<template>
  <div class="px-3 py-1 font-bold">
    {{ workspace.root.handle.name }}
  </div>
</template>
