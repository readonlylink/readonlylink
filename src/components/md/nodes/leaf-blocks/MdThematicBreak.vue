<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { MdPageState as State } from '../../md-page-state'

defineProps({ state: State, node: Nodes.ThematicBreak })
</script>

<template>
  <div class="mt-4 mb-8 border-b-2 border-gray-400"></div>
</template>
