<script setup lang="ts">
import ArticleMarkdown from './ArticleMarkdown.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
</script>

<template>
  <div class="mx-auto max-w-3xl">
    <ArticleMarkdown :state="state" />
  </div>
</template>
