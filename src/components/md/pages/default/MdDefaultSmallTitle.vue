<script setup>
defineProps({ attributes: Object, href: String })
</script>

<template>
  <Link
    v-if="attributes.title"
    class="overflow-x-auto py-3 font-bold text-gray-900 hover:text-gray-400"
    :href="href"
  >
    <div class="text-xl">{{ attributes.title }}</div>
    <div v-if="attributes.subtitle" class="text-lg">
      {{ attributes.subtitle }}
    </div>
  </Link>
</template>
