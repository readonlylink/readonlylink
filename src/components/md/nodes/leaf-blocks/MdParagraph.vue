<script setup lang="ts">
import { Nodes } from '@xieyuheng/x-markdown'
import { computed } from 'vue'
import MdNode from '../../MdNode.vue'
import { State } from '../../State'

const props = defineProps<{
  state: State
  node: Nodes.Paragraph
}>()

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
