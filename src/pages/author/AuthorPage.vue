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
  <div class="h-screen-dynamic relative mx-auto flex max-w-3xl flex-col">
    <AuthorAvatar
      class="absolute -left-[3.8rem] top-[1.5rem] hidden h-[4.2rem] w-[4.2rem] shrink-0 object-contain sm:block"
      :state="state"
    />

    <div class="p-5">
      <div class="hidden flex-col items-baseline overflow-auto sm:flex">
        <div class="flex w-full items-baseline justify-between">
          <Hyperlink
            :href="`/authors/${state.url}/-/${state.config.homepage}`"
            class="overflow-x-auto overflow-y-hidden whitespace-pre text-3xl font-bold"
          >
            {{ state.config.name }}
          </Hyperlink>

          <AuthorContact
            v-if="state.config.contact"
            :state="state"
            :contact="state.config.contact"
          />
        </div>

        <AuthorToolbar class="py-1" :state="state" />
      </div>

      <div class="flex items-center space-x-3 overflow-auto sm:hidden">
        <AuthorAvatar
          class="block h-[4.2rem] w-[4.2rem] shrink-0 object-contain sm:hidden"
          :state="state"
        />

        <div class="flex w-full flex-col overflow-auto">
          <div class="flex w-full items-baseline justify-between">
            <Hyperlink
              :href="`/authors/${state.url}/-/${state.config.homepage}`"
              class="overflow-x-auto whitespace-pre text-2xl font-bold"
            >
              {{ state.config.name }}
            </Hyperlink>

            <AuthorContact
              v-if="state.config.contact"
              :state="state"
              :contact="state.config.contact"
            />
          </div>

          <AuthorToolbar :state="state" />
        </div>
      </div>

      <AuthorTabbar
        v-if="state.config.tabs"
        :state="state"
        :tabs="state.config.tabs"
      />

      <AuthorActivities v-if="state.path === 'ACTIVITIES'" :state="state" />
      <MdPage v-else-if="document" :document="document" :url="url" />
      <AuthorPageNotFound v-else :state="state" />
    </div>
  </div>
</template>
