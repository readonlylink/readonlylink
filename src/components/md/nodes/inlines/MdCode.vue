<template>
  <code
    class="break-words rounded-sm bg-gray-200 px-1 py-0.5 font-mono text-base opacity-80"
    >{{ node.text }}</code
  >
</template>

<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { MdPageState as State } from '../../md-page-state'

defineProps({ state: State, node: Nodes.Code })
</script>
