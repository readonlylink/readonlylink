<script setup lang="ts">
import AuthorCard from './AuthorCard.vue'
import { AuthorConfig } from './AuthorConfig'

defineProps<{ authorConfigs: Array<AuthorConfig> }>()
</script>

<template>
  <div>
    <AuthorCard
      v-for="(config, index) of authorConfigs"
      :key="index"
      :config="config"
    />
  </div>
</template>
