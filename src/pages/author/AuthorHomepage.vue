<script setup lang="ts">
import MdPage from '../../components/md/MdPage.vue'
import AuthorHomepageToolbar from './AuthorHomepageToolbar.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="relative mx-auto flex h-screen max-w-3xl flex-col">
    <AuthorHomepageToolbar
      class="absolute top-0 right-0 p-2 md:p-3"
      :state="state"
    />

    <div class="m-6">
      <MdPage :key="state.url" :document="state.homepage.document" />
    </div>
  </div>
</template>
