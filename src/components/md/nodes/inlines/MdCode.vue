<script setup lang="ts">
import { Nodes } from '@readonlylink/x-markdown'
import { State } from '../../State'

defineProps<{
  state: State
  node: Nodes.Code
}>()
</script>

<template>
  <code
    class="break-words rounded-sm bg-sky-100 px-1 py-0.5 font-mono text-base text-sky-900 opacity-80"
    >{{ node.text }}</code
  >
</template>
