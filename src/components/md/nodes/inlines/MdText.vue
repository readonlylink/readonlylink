<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { MdPageState as State } from '../../MdPageState'

defineProps({ state: State, node: Nodes.Text })
</script>

<template>
  <span class="break-words">{{ node.text }}</span>
</template>
