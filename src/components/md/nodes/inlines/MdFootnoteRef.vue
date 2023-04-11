<script setup lang="ts">
import { Nodes } from '@xieyuheng/x-markdown'
import { State } from '../../State'

const props = defineProps<{
  state: State
  node: Nodes.FootnoteRef
}>()
</script>

<template>
  <a
    :href="`#-footnote-${node.id}`"
    :id="`-footnote-ref-${node.id}`"
    class="align-text-top text-sm text-blue-600 hover:underline"
    >[{{ node.name || '#' + node.id }}]</a
  >
</template>
