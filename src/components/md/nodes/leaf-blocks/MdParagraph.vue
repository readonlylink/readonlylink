<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { computed } from 'vue'
import MdNode from '../../MdNode.vue'
import { MdPageState as State } from '../../MdPageState'

const props = defineProps({ state: State, node: Nodes.Paragraph })

const indent = computed(() => props.state.document.attributes.paragraph?.indent)
</script>

<template>
  <div
    :style="{
      'text-indent': indent && `${indent}rem`,
    }"
  >
    <MdNode
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
    />
  </div>
</template>
