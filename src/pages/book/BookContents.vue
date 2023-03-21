<script setup lang="ts">
import { onMounted } from 'vue'
import Hyperlink from '../../components/Hyperlink.vue'
import { documentTitle } from '../../utils/postmark/documentTitle'
import { State } from './State'

defineProps<{ state: State }>()

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div
    class="flex min-h-screen flex-col justify-center px-6 py-12 font-serif text-2xl"
  >
    <div v-for="(document, path) in state.documents" :key="path">
      <div>
        <Hyperlink
          :href="`/books/${state.url}/-/${path}`"
          class="font-sans hover:text-stone-500"
        >
          {{ documentTitle(document) }}
        </Hyperlink>

        <div
          class="text-right font-sans text-xs italic leading-3 tracking-tight text-stone-500 hover:text-black"
        >
          <Hyperlink :href="`/books/${state.url}/-/${path}`">
            {{ path }}
          </Hyperlink>
        </div>
      </div>
    </div>
  </div>
</template>
