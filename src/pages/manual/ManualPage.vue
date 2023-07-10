<script setup lang="ts">
import { Document } from '@xieyuheng/x-markdown'
import { join } from 'path-browserify'
import { computed } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import ManualPageEnding from './ManualPageEnding.vue'
import { State } from './State'

const props = defineProps<{
  state: State
  document: Document
}>()

const url = computed(() => {
  if (props.state.path === undefined) {
    return new URL(props.state.url)
  }

  return new URL(
    join(props.state.config.src, props.state.path),
    props.state.url,
  )
})
</script>

<template>
  <div class="flex max-w-3xl flex-col px-6 sm:px-10 xl:mx-auto">
    <MdPage :key="state.path" :document="document" :url="url" />
    <ManualPageEnding class="py-6" :state="state" />
  </div>
</template>
