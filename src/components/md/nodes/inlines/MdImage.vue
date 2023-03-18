<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { MdPageState as State } from '../../MdPageState'

defineProps<{
  state: State
  node: Nodes.Image
}>()
</script>

<template>
  <img class="py-1" :src="node.href" :alt="node.title" />
</template>
