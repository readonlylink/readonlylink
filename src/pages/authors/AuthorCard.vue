<script setup lang="ts">
import { AuthorConfig } from './AuthorConfig'

defineProps<{ authorConfig: AuthorConfig }>()
</script>

<template>
  <div>{{ authorConfig }}</div>
</template>
