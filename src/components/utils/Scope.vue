<script setup lang="ts">
import { reactive } from 'vue'

defineProps<{ scope: any }>()
</script>

<template>
  <slot :scope="reactive(scope)" />
</template>
