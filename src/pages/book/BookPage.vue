<script setup lang="ts">
import { Document } from '@xieyuheng/x-markdown'
import { join } from 'path-browserify'
import { computed, ref, watch } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import BookPageNav from './BookPageNav.vue'
import BookPageNotFound from './BookPageNotFound.vue'
import { State } from './State'

const props = defineProps<{
  state: State
  document?: Document
}>()

const topElement = ref<HTMLDivElement | undefined>()

watch(
  () => props.state.path,
  () => {
    topElement.value?.scrollIntoView()
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
    <div ref="topElement"></div>
    <BookPageNav class="py-6" :state />
    <MdPage v-if="document" :key="state.path" :document="document" :url="url" />
    <BookPageNotFound v-else :state />
    <BookPageNav class="py-6" :state />
  </div>
</template>
