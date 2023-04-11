<script setup lang="ts">
import { Document } from '@xieyuheng/x-markdown'
import { join } from 'path-browserify'
import { computed, watch } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import BookPageNav from './BookPageNav.vue'
import { State } from './State'

const props = defineProps<{
  state: State
  document: Document
}>()

watch(
  () => props.state.path,
  () => {
    window.scrollTo(0, 0)
  },
)

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
  <div class="flex h-screen flex-col px-6">
    <BookPageNav class="py-6" :state="state" />
    <MdPage :key="state.path" :document="document" :url="url" />
    <BookPageNav class="py-6" :state="state" />
  </div>
</template>
