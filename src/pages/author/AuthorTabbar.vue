<script setup lang="ts">
import { useRoute } from 'vue-router'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { State } from './State'

const props = defineProps<{
  state: State
  tabs: Record<string, string>
}>()

const route = useRoute()

console.log(route.path)
console.log(props.tabs)
</script>

<template>
  <div class="flex flex-wrap py-2">
    <Hyperlink
      v-for="(path, name) of tabs"
      :key="name"
      class="pr-3 text-xl hover:text-black"
      :class="{
        'text-black': route.path.endsWith(`/-/${path}`),
        'text-stone-400': !route.path.endsWith(`/-/${path}`),
      }"
      :href="`/authors/${state.url}/-/${path}`"
    >
      {{ name }}
    </Hyperlink>
  </div>
</template>
