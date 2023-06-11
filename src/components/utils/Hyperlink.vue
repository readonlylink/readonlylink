<script setup lang="ts">
/*

   We use our custom <Hyperlink> instead of <RouterLink>,
   so that we can add some behaviors to every links.

 */

const props = defineProps<{
  href: string
}>()
</script>

<template>
  <RouterLink v-bind="props" :to="props.href"><slot /></RouterLink>
</template>
