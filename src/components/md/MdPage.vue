<script setup lang="ts">
import { Document } from '@xieyuheng/x-markdown'
import { computed } from 'vue'
import { stateCreate } from './State'
import { components } from './pages'
import { stateReactive } from './stateReactive'

const props = defineProps<{
  url: URL
  document: Document
}>()

const state = stateReactive(
  stateCreate({
    url: props.url,
    document: props.document,
  }),
)

const kind = computed(() => state.document.attributes.kind || 'Default')
const component = computed(() => components[kind.value])
</script>

<template>
  <component :is="component" :state="state" />
</template>
