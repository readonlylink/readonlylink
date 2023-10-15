<script setup lang="ts">
import { Document } from '@xieyuheng/x-markdown'
import { computed, reactive, ref, watchEffect } from 'vue'
import { State } from './State'
import { components } from './pages'
import { stateCreate } from './stateCreate'

const props = defineProps<{
  url?: URL
  document: Document
}>()

const state = ref<State | undefined>(undefined)

watchEffect(() => {
  if (!state.value) {
    state.value = reactive(
      stateCreate({ url: props.url, document: props.document }),
    )
  } else {
    Object.assign(
      state.value,
      stateCreate({ url: props.url, document: props.document }),
    )
  }
})

const kind = computed(() => state.value?.document.attributes.kind || 'Default')
const component = computed(() => components[kind.value])
</script>

<template>
  <component :is="component" :state="state" />
</template>
