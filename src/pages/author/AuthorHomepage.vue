<script setup lang="ts">
import MdPage from '../../components/md/MdPage.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="mx-auto flex h-screen max-w-3xl flex-col">
    <div class="m-6">
      <MdPage
        :key="state.url"
        :document="state.homepage.document"
        :customComponents="state.extensions.components"
      />
    </div>
  </div>
</template>
