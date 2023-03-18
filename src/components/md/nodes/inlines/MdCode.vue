<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { State } from '../../State'

defineProps<{
  state: State
  node: Nodes.Code
}>()
</script>

<template>
  <code
    class="break-words rounded-sm bg-stone-200 px-1 py-0.5 font-mono text-base opacity-80"
    >{{ node.text }}</code
  >
</template>
