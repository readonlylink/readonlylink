<script setup lang="ts">
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'
import { Workspace } from './Workspace'

defineProps<{
  state: State
  workspace: Workspace
}>()

const lang = useGlobalLang()
</script>

<template>
  <div class="flex justify-between space-x-2 py-1 pl-3 pr-1">
    <div class="font-bold">{{ workspace.root.handle.name }}</div>
    <div class="flex space-x-1"></div>
  </div>
</template>
