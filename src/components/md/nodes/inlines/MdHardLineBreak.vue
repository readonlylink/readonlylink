<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { MdPageState as State } from '../../MdPageState'

defineProps({ state: State, node: Nodes.HardLineBreak })
</script>

<template>
  <br />
</template>
