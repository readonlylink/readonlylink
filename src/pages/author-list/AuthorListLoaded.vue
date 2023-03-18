<script setup lang="ts">
import { Author } from '../author/Author'
import AuthorCard from './AuthorCard.vue'

defineProps<{ authors: Array<Author> }>()
</script>

<template>
  <div class="flex flex-col space-y-3 py-2">
    <AuthorCard
      v-for="(author, index) of authors"
      :key="index"
      :author="author"
    />
  </div>
</template>
