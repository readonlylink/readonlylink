<script setup lang="ts">
import { Nodes } from '@xieyuheng/x-markdown'
import { State } from '../../State'

defineProps<{
  state: State
  node: Nodes.Text
}>()
</script>

<template>
  <span class="hyphens-auto break-words">{{ node.text }}</span>
</template>
