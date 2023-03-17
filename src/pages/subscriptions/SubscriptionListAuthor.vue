<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import { Author, State } from './State'

defineProps<{
  state: State
  author: Author
}>()
</script>

<template>
  <Hyperlink :href="`/authors/${author.url}`">
    {{ author.config.name }}
  </Hyperlink>
</template>
