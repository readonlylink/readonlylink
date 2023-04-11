<script setup lang="ts">
import { Nodes } from '@xieyuheng/x-markdown'
import { State } from '../../State'

defineProps<{
  state: State
  node: Nodes.ThematicBreak
}>()
</script>

<template>
  <div class="mb-8 mt-4 border-b-2 border-stone-400"></div>
</template>
