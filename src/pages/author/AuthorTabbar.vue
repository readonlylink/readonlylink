<script setup lang="ts">
import { useRoute } from 'vue-router'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { State } from './State'

defineProps<{
  state: State
  tabs: Record<string, string>
}>()

const route = useRoute()
</script>

<template>
  <div class="flex flex-wrap py-2">
    <Hyperlink
      v-for="(path, name) of tabs"
      :key="name"
      class="mr-3 text-xl hover:text-black dark:hover:text-white"
      :class="{
        'text-black dark:text-white': route.path.endsWith(`/-/${path}`),
        'text-stone-400': !route.path.endsWith(`/-/${path}`),
      }"
      :href="`/authors/${state.url}/-/${path}`"
    >
      {{ name }}
    </Hyperlink>
  </div>
</template>
