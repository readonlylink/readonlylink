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
    class="min-h-screen-dynamic flex flex-col justify-center px-6 py-12 font-content text-2xl"
  >
    <div v-for="(document, path) in state.documents" :key="path">
      <div>
        <Hyperlink
          :href="`/books/${state.url}/-/${path}`"
          class="font-ui hover:text-stone-500"
        >
          {{ documentTitle(document) }}
        </Hyperlink>

        <div
          class="text-right font-ui text-xs italic leading-3 tracking-tight text-stone-500 hover:text-black"
        >
          <Hyperlink :href="`/books/${state.url}/-/${path}`">
            {{ path }}
          </Hyperlink>
        </div>
      </div>
    </div>
  </div>
</template>
