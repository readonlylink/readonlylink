<script setup lang="ts">
import { Document } from '@xieyuheng/x-markdown'
import { join } from 'path-browserify'
import { computed, watch } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import AuthorAvatar from './AuthorAvatar.vue'
import AuthorPageNotFound from './AuthorPageNotFound.vue'
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
  <div class="h-screen-dynamic relative mx-auto flex max-w-3xl flex-col">
    <AuthorAvatar
      class="absolute -left-[3.8rem] top-[1.5rem] hidden h-[4rem] w-[4rem] shrink-0 object-contain md:block"
      :state="state"
    />

    <div class="p-5">
      <div class="hidden items-baseline space-x-3 md:flex">
        <div class="text-3xl font-bold">
          {{ state.config.name }}
        </div>

        <AuthorToolbar :state="state" />
      </div>

      <div class="flex items-center space-x-3 overflow-auto md:hidden">
        <AuthorAvatar
          class="block h-[4rem] w-[4rem] shrink-0 object-contain md:hidden"
          :state="state"
        />

        <div class="flex flex-col overflow-auto">
          <div class="overflow-x-auto whitespace-pre text-2xl font-bold">
            {{ state.config.name }}
          </div>

          <AuthorToolbar :state="state" />
        </div>
      </div>

      <MdPage
        v-if="document"
        :key="state.url"
        :document="document"
        :url="url"
      />
      <AuthorPageNotFound v-else :state="state" />
    </div>
  </div>
</template>
