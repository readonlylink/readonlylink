<script setup lang="ts">
import { Author } from './Author'
import AuthorCard from './AuthorCard.vue'

defineProps<{ authors: Array<Author> }>()
</script>

<template>
  <div>
    <AuthorCard
      v-for="(author, index) of authors"
      :key="index"
      :author="author"
    />
  </div>
</template>
