<script setup lang="ts">
defineProps<{
  error: Error
}>()
</script>

<template>
  <div class="m-3 whitespace-pre-wrap border border-red-600 p-3 text-red-600">
    {{ error.message }}
  </div>
</template>
