<script setup lang="ts">
import { Document } from '@xieyuheng/x-markdown'
import { join } from 'path-browserify'
import { computed, watch } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import AuthorActivities from './AuthorActivities.vue'
import AuthorHead from './AuthorHead.vue'
import AuthorPageNotFound from './AuthorPageNotFound.vue'
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
)

const url = computed(() => {
  if (props.state.path === undefined) {
    return new URL(props.state.url)
  }

  if (props.state.config.src) {
    return new URL(
      join(props.state.config.src, props.state.path),
      props.state.url,
    )
  }

  return new URL(props.state.path, props.state.url)
})
</script>

<template>
  <div
    class="h-screen-dynamic overflow-auto bg-white text-black dark:bg-black dark:text-white"
  >
    <div class="relative mx-auto flex max-w-3xl flex-col p-5">
      <AuthorHead :state="state" />
      <AuthorActivities v-if="state.path === 'activities'" :state="state" />
      <MdPage v-else-if="document" :document="document" :url="url" />
      <AuthorPageNotFound v-else :state="state" />
    </div>
  </div>
</template>
