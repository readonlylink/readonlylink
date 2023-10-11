<script setup lang="ts">
import Hyperlink from '../../components/utils/Hyperlink.vue'
import AuthorAvatar from './AuthorAvatar.vue'
import AuthorContact from './AuthorContact.vue'
import AuthorMenu from './AuthorMenu.vue'
import AuthorTabbar from './AuthorTabbar.vue'
import { State } from './State'

defineProps<{
  state: State
}>()
</script>

<template>
  <div class="flex flex-col">
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

    <div class="flex flex-col py-3">
      <AuthorMenu :state="state" />

      <AuthorTabbar
        v-if="state.config.tabs"
        class="py-3"
        :state="state"
        :tabs="state.config.tabs"
      />
    </div>
  </div>
</template>
