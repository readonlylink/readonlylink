<script setup lang="ts">
import AuthorCard from './AuthorCard.vue'
import { AuthorConfig } from './AuthorConfig'

defineProps<{ authorConfigs: Array<AuthorConfig> }>()
</script>

<template>
  <div>
    <AuthorCard
      v-for="(authorConfig, index) of authorConfigs"
      :key="index"
      :authorConfig="authorConfig"
    />
  </div>
</template>
