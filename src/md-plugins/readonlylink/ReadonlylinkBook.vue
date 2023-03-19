<script setup lang="ts">
import { BookConfig } from '../../pages/book/BookConfig'
import { State } from './State'

defineProps<{
  state: State
  config: BookConfig
}>()
</script>

<template>
  <div>ReadonlylinkBook</div>
</template>
