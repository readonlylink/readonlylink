<script setup lang="ts">
import AuthorCard from './AuthorCard.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col space-y-3 py-2">
    <AuthorCard
      v-for="(author, index) of state.authors"
      :key="index"
      :author="author"
    />
  </div>
</template>
