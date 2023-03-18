<script setup>
import { Node } from '@xieyuheng/postmark'
import MdNode from '../../MdNode.vue'
import { MdPageState as State } from '../../MdPageState'

defineProps({ state: State, node: Node })
</script>

<template>
  <span class="italic"
    ><MdNode
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
  /></span>
</template>
