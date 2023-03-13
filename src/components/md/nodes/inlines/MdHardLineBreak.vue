<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { MdPageState as State } from '../../md-page-state'

defineProps({ state: State, node: Nodes.HardLineBreak })
</script>

<template>
  <br />
</template>
