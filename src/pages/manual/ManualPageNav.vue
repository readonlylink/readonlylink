<script setup lang="ts">
import Hyperlink from '../../components/utils/Hyperlink.vue'

import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex flex-col overflow-y-auto border-r border-stone-300 bg-white px-6 pb-10 pt-6 dark:bg-black"
  >
    <div class="flex items-start space-x-1">
      <div class="text-xl font-bold">
        {{ state.config.title }}
      </div>

      <div v-if="state.config.version" class="text-sm">
        {{ state.config.version }}
      </div>
    </div>

    <div class="mb-3 border-b border-stone-400 pb-3"></div>

    <div
      v-for="(paths, name) in state.config.sections"
      :key="name"
      class="pb-3"
    >
      <div v-if="name !== 'default'" class="pb-1.5 text-xl font-bold">
        {{ name }}
      </div>
      <div v-for="path in paths" :key="path">
        <Hyperlink
          :href="`/manuals/${state.url}/-/${path}`"
          class="text-xl hover:text-stone-500 hover:dark:text-stone-400"
          :class="
            path === state.path &&
            'underline decoration-stone-500 decoration-wavy underline-offset-4'
          "
        >
          {{ state.documents[path].attributes.title }}
        </Hyperlink>
      </div>
    </div>
  </div>
</template>
