<script setup lang="ts">
import { Nodes } from '@readonlylink/x-markdown'
import { join } from 'path-browserify'
import { computed } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import ManualPageEnding from './ManualPageEnding.vue'
import { State } from './State'

const props = defineProps<{
  state: State
  document: Nodes.Document
}>()

const url = computed(() => {
  if (props.state.path === undefined) {
    return undefined
  }

  return new URL(
    join(props.state.config.src, props.state.path),
    props.state.url,
  )
})
</script>

<template>
  <div class="flex max-w-4xl flex-col px-6 md:px-10 xl:mx-auto">
    <MdPage :key="state.path" :document="document" :url="url" />
    <ManualPageEnding class="py-6" :state="state" />
  </div>
</template>
