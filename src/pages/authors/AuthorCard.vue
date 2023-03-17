<script setup lang="ts">
import { Author } from './Author'

const props = defineProps<{ author: Author }>()
</script>

<template>
  <div>{{ author }}</div>
</template>
