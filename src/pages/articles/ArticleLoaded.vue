<script setup lang="ts">
import ArticleMarkdown from './ArticleMarkdown.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
</script>

<template>
  <ArticleMarkdown :state="state" />
</template>
