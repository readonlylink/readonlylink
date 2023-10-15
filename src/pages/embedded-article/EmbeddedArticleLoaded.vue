<script setup lang="ts">
import EmbeddedArticleMarkdown from './EmbeddedArticleMarkdown.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()
</script>

<template>
  <div class="overflow-auto bg-white text-black dark:bg-black dark:text-white">
    <div class="mx-auto max-w-3xl">
      <EmbeddedArticleMarkdown :state="state" />
    </div>
  </div>
</template>
