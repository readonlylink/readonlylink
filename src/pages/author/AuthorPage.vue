<script setup lang="ts">
import { Document } from '@xieyuheng/x-markdown'
import { join } from 'path-browserify'
import { computed, watch } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import AuthorActivities from './AuthorActivities.vue'
import AuthorAvatar from './AuthorAvatar.vue'
import AuthorContact from './AuthorContact.vue'
import AuthorPageNotFound from './AuthorPageNotFound.vue'
import AuthorTabbar from './AuthorTabbar.vue'
import AuthorToolbar from './AuthorToolbar.vue'
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
  <div class="h-screen-dynamic relative mx-auto flex max-w-3xl flex-col p-5">
    <div class="flex">
      <div class="flex pr-4">
        <AuthorAvatar
          class="h-[4.5rem] w-[4.5rem] shrink-0 object-contain"
          :state="state"
        />
      </div>

      <div class="flex flex-col justify-center space-y-2">
        <Hyperlink
          :href="`/authors/${state.url}/-/${state.config.homepage}`"
          class="text-3xl font-bold"
        >
          {{ state.config.name }}
        </Hyperlink>

        <AuthorContact
          v-if="state.config.contact"
          :state="state"
          :contact="state.config.contact"
        />
      </div>
    </div>

    <div class="flex pt-3 pb-6 flex-col">
      <AuthorToolbar :state="state" />

      <AuthorTabbar
        v-if="state.config.tabs"
        class="py-3"
        :state="state"
        :tabs="state.config.tabs"
      />
    </div>

    <AuthorActivities v-if="state.path === 'ACTIVITIES'" :state="state" />
    <MdPage v-else-if="document" :document="document" :url="url" />
    <AuthorPageNotFound v-else :state="state" />
  </div>
</template>
