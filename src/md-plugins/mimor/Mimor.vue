<script setup lang="ts">
import 'mimor'

defineProps<{
  src: string
}>()
</script>

<template>
  <div class="h-[36rem] w-full sm:w-[36rem]" title="An embedded mimor.">
    <x-mimor class="h-full" :src="src" />
  </div>
</template>
