<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { State } from '../../State'

defineProps<{
  state: State
  node: Nodes.Text
}>()
</script>

<template>
  <span class="break-words">{{ node.text }}</span>
</template>
