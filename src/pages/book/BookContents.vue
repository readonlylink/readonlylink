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
    <div

      v-for="(document, path) in state.documents"
      :key="path"
    >
      <div class="py-2">
        <div class="flex flex-wrap text-balance items-baseline">
          <Hyperlink
            :href="`/books/${state.url}/-/${path}`"
            class="font-ui hover:text-stone-500 font-bold"
          >
            {{ documentTitle(document) }}
          </Hyperlink>

          <Hyperlink
            :href="`/books/${state.url}/-/${path}`"
            class="font-ui pl-3 hover:text-stone-500"
          >
            {{ document.attributes.subtitle }}
          </Hyperlink>
        </div>

        <div
          class="py-0.5 text-right font-ui text-xs  leading-3 tracking-tight text-stone-500 hover:text-black"
        >
          <Hyperlink :href="`/books/${state.url}/-/${path}`">
            {{ path }}
          </Hyperlink>
        </div>
      </div>
    </div>
  </div>
</template>
