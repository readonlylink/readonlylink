<script setup lang="ts">
import { Document } from '@xieyuheng/x-markdown'
import { join } from 'path-browserify'
import { computed, watch } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import BookPageNav from './BookPageNav.vue'
import BookPageNotFound from './BookPageNotFound.vue'
import { State } from './State'

const props = defineProps<{
  state: State
  document?: Document
}>()

watch(
  () => props.state.path,
  () => {
    window.scrollTo(0, 0)
  },
  {
    immediate: true,
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
  <div class="h-screen-dynamic flex flex-col px-6">
    <BookPageNav class="py-6" :state="state" />
    <MdPage v-if="document" :key="state.path" :document="document" :url="url" />
    <BookPageNotFound v-else :state="state" />
    <BookPageNav class="py-6" :state="state" />
  </div>
</template>
