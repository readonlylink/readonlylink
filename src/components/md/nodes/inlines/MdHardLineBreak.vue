<script setup lang="ts">
import { Nodes } from '@xieyuheng/x-markdown'
import { State } from '../../State'

defineProps<{
  state: State
  node: Nodes.HardLineBreak
}>()
</script>

<template>
  <br />
</template>
