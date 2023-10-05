<script setup lang="ts">
defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <button
    :disabled="disabled"
    class="rounded-sm border border-black dark:border-white py-3 font-bold disabled:opacity-50"
    :class="[!disabled && `hover:bg-stone-100 hover:dark:bg-stone-800`]"
    type="submit"
  >
    <slot />
  </button>
</template>
