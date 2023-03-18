<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { State } from '../../State'

defineProps<{
  state: State
  node: Nodes.HardLineBreak
}>()
</script>

<template>
  <br />
</template>
