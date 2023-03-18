<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { computed, reactive } from 'vue'
import { components } from './pages'

const props = defineProps<{
  document: Nodes.Document
}>()

const state = reactive({
  document: props.document,
  plugins: [],
})

const kind = computed(() => state.document.attributes.kind || 'Default')
const component = computed(() => components[kind.value])
</script>

<template>
  <component :is="component" :state="state" />
</template>
