<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { computed } from 'vue'
import { createState } from './State'
import { components } from './pages'
import { stateReactive } from './stateReactive'

const props = defineProps<{
  document: Nodes.Document
}>()

const state = stateReactive(createState(props.document))

const kind = computed(() => state.document.attributes.kind || 'Default')
const component = computed(() => components[kind.value])
</script>

<template>
  <component :is="component" :state="state" />
</template>
