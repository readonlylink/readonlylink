<script setup lang="ts">
import { AuthorConfig } from './AuthorConfig'

defineProps<{ config: AuthorConfig }>()
</script>

<template>
  <div>{{ config }}</div>
</template>
