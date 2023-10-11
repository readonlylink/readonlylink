<script setup lang="ts">
import { onMounted } from 'vue'
import { documentTitle } from '../../components/md/documentTitle'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { State } from './State'

defineProps<{ state: State }>()

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div
    class="min-h-screen-dynamic flex flex-col justify-center px-6 py-12 text-2xl"
  >
    <div v-for="(document, path) in state.documents" :key="path">
      <div class="py-2">
        <div class="text-balance flex flex-wrap items-baseline">
          <Hyperlink
            :href="`/books/${state.url}/-/${path}`"
            class="font-bold hover:text-stone-500 hover:dark:text-stone-400"
          >
            {{ documentTitle(document) }}
          </Hyperlink>

          <Hyperlink
            :href="`/books/${state.url}/-/${path}`"
            class="pl-3 hover:text-stone-500 hover:dark:text-stone-400"
          >
            {{ document.attributes.subtitle }}
          </Hyperlink>
        </div>

        <div class="py-0.5 text-right">
          <Hyperlink
            :href="`/books/${state.url}/-/${path}`"
            class="text-xs leading-3 tracking-tight text-stone-500 hover:text-black dark:text-stone-400 dark:hover:text-white"
          >
            {{ path }}
          </Hyperlink>
        </div>
      </div>
    </div>
  </div>
</template>
