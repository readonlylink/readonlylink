<script setup lang="ts">
import { Document } from '@xieyuheng/x-markdown'
import { computed, reactive } from 'vue'
import { stateCreate } from './State'
import { components } from './pages'

const props = defineProps<{
  url: URL
  document: Document
}>()

const state = reactive(
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
