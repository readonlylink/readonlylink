<script setup lang="ts">
import { BookOpenIcon, LanguageIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import { normalizeAttributes } from '../../components/md/normalizeAttributes'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const attributes = computed(() => normalizeAttributes(props.state.config))
</script>

<template>
  <div
    class="h-screen-dynamic flex flex-col items-center justify-between py-12 text-2xl"
  >
    <div class="flex flex-col items-center space-y-2 py-4 text-3xl sm:text-4xl">
      <div class="px-2 text-center font-bold">
        {{ state.config.title }}
      </div>

      <div class="px-2 text-center text-xl sm:text-2xl">
        {{ state.config.subtitle }}
      </div>

      <div v-if="state.config.version" class="px-2 text-lg">
        {{ state.config.version }}
      </div>

      <Hyperlink :href="`/books/${state.url}?front-matter=contents`">
        <div
          class="flex items-center space-x-0.5 py-2 font-bold text-stone-400 hover:text-black dark:hover:text-white"
        >
          <BookOpenIcon class="w-5 pb-0.5" />

          <Lang class="text-xl">
            <template #zh> 阅读 </template>
            <template #en> Read </template>
          </Lang>
        </div>
      </Hyperlink>
    </div>

    <section class="py-4">
      <div
        v-if="attributes.authors.length > 0"
        class="flex flex-col items-center py-1.5"
      >
        <div
          class="py-1 font-bold"
          v-for="(name, index) in attributes.authors"
          :key="index"
        >
          {{ name }}
        </div>
      </div>

      <div
        v-if="attributes.translators.length > 0"
        class="flex flex-col items-center"
      >
        <div class="flex items-center pr-3 text-center text-xl font-bold">
          <LanguageIcon class="w-5 pr-1" />
          {{ attributes.translators.join(', ') }}
        </div>
      </div>

      <div class="flex flex-col items-center px-2">
        <div v-if="state.config.year" class="text text-lg">
          {{ state.config.year }}
        </div>
        <div v-else-if="state.config.date" class="text text-lg">
          {{ state.config.date }}
        </div>
      </div>
    </section>

    <section class="flex flex-col items-center px-2">
      <a
        :href="state.url"
        class="flex flex-col items-center break-all py-1 font-mono text-base hover:text-stone-500 hover:dark:text-stone-400 sm:flex-row"
        target="_blank"
      >
        <span class="text-center">{{ state.url }}</span>
      </a>
    </section>
  </div>
</template>
