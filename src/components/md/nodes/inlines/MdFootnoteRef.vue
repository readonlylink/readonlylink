<script setup lang="ts">
import { Nodes } from '@readonlylink/x-markdown'
import { State } from '../../State'

const props = defineProps<{
  state: State
  node: Nodes.FootnoteRef
}>()
</script>

<template>
  <span class="align-text-top text-sm text-blue-600 hover:underline"
    >[^{{ node.name || '#' + node.id }}]</span
  >
</template>
