<template>
  <span class="break-words">{{ node.text }}</span>
</template>

<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { MdPageState as State } from '../../md-page-state'

defineProps({ state: State, node: Nodes.Text })
</script>
