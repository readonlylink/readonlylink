<script setup lang="ts">
import { Nodes } from '@xieyuheng/x-markdown'
import { State } from '../../State'
import { stateResolveLink } from '../../stateResolveLink'

const props = defineProps<{
  state: State
  node: Nodes.Image
}>()
</script>

<template>
  <img
    class="py-1"
    :src="stateResolveLink(state, node.href)"
    :alt="node.title"
  />
</template>
