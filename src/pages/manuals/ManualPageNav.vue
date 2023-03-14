<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'

import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex flex-col overflow-y-auto border-r border-stone-300 px-6 pt-6 pb-10 font-sans"
  >
    <div class="mb-3 border-b border-stone-400 pb-3 text-xl font-bold">
      {{ state.config.title }}
    </div>

    <div v-for="(paths, name) in state.config.sections" :key="name">
      <div v-if="name !== 'default'" class="py-3 text-xl font-bold">
        {{ name }}
      </div>
      <div v-for="path in paths" :key="path">
        <div class="py-0.5">
          <Hyperlink
            :href="`/manuals/${state.url}/-/${path}`"
            class="text-xl hover:text-stone-500"
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
  </div>
</template>
