<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { computed, reactive } from 'vue'
import { MdPageState as State } from './md-page-state'

import { components } from './pages'

const props = defineProps({
  document: Nodes.Document,
  customComponents: Array,
})

const state = reactive(
  new State({
    document: props.document,
    customComponents: props.customComponents || [],
  }),
)

const kind = computed(() => state.document.attributes.kind || 'Default')
const component = computed(() => components[kind.value])
</script>

<template>
  <component :is="component" :state="state" />
</template>
