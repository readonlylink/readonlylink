<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { computed } from 'vue'
import { State } from '../../State'
import { isExternalLink } from '../../isExternalLink'

const props = defineProps<{
  state: State
  node: Nodes.Image
}>()

const src = computed(() => {
  if (isExternalLink(props.node.href)) {
    return props.node.href
  }

  return new URL(props.node.href, props.state.url).href
})
</script>

<template>
  <img class="py-1" :src="src" :alt="node.title" />
</template>
