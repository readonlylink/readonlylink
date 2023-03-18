<script setup lang="ts">
import { BookOpenIcon, LanguageIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import { normalizeAttributes } from '../../components/md/pages/default/normalize-attributes'
import { State } from './State'

const props = defineProps<{ state: State }>()

const attributes = computed(() => normalizeAttributes(props.state.config))
</script>

<template>
  <div
    class="flex h-screen flex-col items-center justify-between py-12 font-serif text-2xl"
  >
    <div
      class="flex flex-col items-center py-4 font-sans text-3xl font-bold md:text-4xl"
    >
      <h1 class="text-center">
        <span class="px-2">{{ state.config.title }}</span>
      </h1>

      <h2
        class="px-2 py-2 text-center font-sans text-xl font-normal md:text-2xl"
      >
        <span>{{ state.config.subtitle }}</span>
      </h2>

      <Hyperlink :href="`/books/${state.url}?front-matter=contents`">
        <div
          class="flex items-center space-x-1.5 py-4 text-stone-400 hover:text-stone-900"
        >
          <BookOpenIcon class="w-5 pb-0.5" />

          <Lang class="text-xl">
            <template #zh> 阅读 </template>
            <template #en> READ </template>
          </Lang>
        </div>
      </Hyperlink>
    </div>

    <section class="py-4">
      <div v-if="attributes.authors.length > 0">
        <div
          class="py-1 text-center font-sans font-bold"
          v-for="({ name }, index) in attributes.authors"
          :key="index"
        >
          {{ name }}
        </div>
      </div>

      <div v-if="attributes.translators.length > 0">
        <div
          class="flex items-center text-center font-sans text-xl font-bold"
          title="Translators"
        >
          <LanguageIcon class="w-5 pr-1" />
          {{ attributes.translators.join(', ') }}
        </div>
      </div>
    </section>

    <section class="flex flex-col items-center px-2">
      <a
        :href="state.url"
        class="flex flex-col items-center py-1 font-sans text-lg hover:text-stone-500 md:flex-row"
        target="_blank"
      >
        <span class="text-center">{{ state.url }}</span>
      </a>

      <div v-if="state.config.year" class="text font-sans text-base">
        {{ state.config.year }}
      </div>
      <div v-else-if="state.config.date" class="text font-sans text-base">
        {{ state.config.date }}
      </div>
    </section>
  </div>
</template>
