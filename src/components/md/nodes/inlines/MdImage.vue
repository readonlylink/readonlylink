<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { MdPageState as State } from '../../md-page-state'

defineProps({ state: State, node: Nodes.Image })
</script>

<template>
  <img class="py-1" :src="node.href" :alt="node.title" />
</template>
