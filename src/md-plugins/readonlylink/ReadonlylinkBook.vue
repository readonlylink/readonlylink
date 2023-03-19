<script setup lang="ts">
import {
  CalendarDaysIcon,
  HashtagIcon,
  LanguageIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import { BookConfig } from '../../pages/book/BookConfig'
import { State } from './State'

defineProps<{
  state: State
  config: BookConfig
}>()
</script>

<template>
  <div>
    <Lang class="font-sans text-base text-stone-500">
      <template #zh> 书籍 </template>
      <template #en> Book </template>
    </Lang>

    <Hyperlink :href="`/books/${state.url}`">
      <div class="py-1 font-sans hover:text-stone-500">
        <div class="font-bold">
          {{ state.config.title }}
        </div>
        <div v-if="state.config.subtitle" class="text-base font-bold">
          {{ state.config.subtitle }}
        </div>
      </div>
    </Hyperlink>

    <div class="flex flex-col font-sans text-base text-stone-700">
      <div
        class="flex items-center font-bold"
        v-if="config.authors && config.authors.length > 0"
      >
        <PencilIcon class="w-5 shrink-0 pr-1" />
        <span>{{ config.authors.join(', ') }}</span>
      </div>

      <div
        class="flex items-center"
        v-if="config.translators && config.translators.length > 0"
      >
        <LanguageIcon class="w-5 shrink-0 pr-1" />
        <span>{{ config.translators.join(', ') }}</span>
      </div>

      <div class="flex items-center" v-if="config.date">
        <CalendarDaysIcon class="w-5 shrink-0 pr-1" />
        {{ config.date }}
      </div>

      <div class="flex items-center" v-if="config.venue">
        <MapPinIcon class="w-5 shrink-0 pr-1" />
        {{ config.venue }}
      </div>

      <div
        class="flex items-center"
        v-if="config.keywords && config.keywords.length > 0"
      >
        <HashtagIcon class="w-5 shrink-0 pr-1" />
        <span>{{ config.keywords.join(', ') }}</span>
      </div>
    </div>
  </div>
</template>
