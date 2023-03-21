<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { computed } from 'vue'
import { State } from '../../State'

const props = defineProps<{
  state: State
  node: Nodes.Image
}>()

const src = computed(() => {
  if (props.state.url === undefined) {
    return props.node.href
  }

  if (
    props.node.href.startsWith('http://') ||
    props.node.href.startsWith('https://')
  ) {
    return props.node.href
  }

  return new URL(props.node.href, props.state.url).href
})
</script>

<template>
  <img class="py-1" :src="src" :alt="node.title" />
</template>
