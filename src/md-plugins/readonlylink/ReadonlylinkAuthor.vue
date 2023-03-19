<script setup lang="ts">
import { AuthorConfig } from '../../pages/author/AuthorConfig'
import { State } from './State'

defineProps<{
  state: State
  config: AuthorConfig
}>()
</script>

<template>
  <div>ReadonlylinkAuthor</div>
</template>
