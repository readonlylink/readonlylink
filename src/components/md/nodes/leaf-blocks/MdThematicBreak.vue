<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { State } from '../../State'

defineProps<{
  state: State
  node: Nodes.ThematicBreak
}>()
</script>

<template>
  <div class="mt-4 mb-8 border-b-2 border-stone-400"></div>
</template>
