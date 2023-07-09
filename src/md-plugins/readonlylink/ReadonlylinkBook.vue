<script setup lang="ts">
import {
  CalendarDaysIcon,
  LanguageIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { BookConfig } from '../../models/book/BookConfig'
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
        <div class="text-balance font-bold">
          {{ config.title }}
        </div>
        <div v-if="config.subtitle" class="text-balance text-base font-bold">
          {{ config.subtitle }}
        </div>
      </div>
    </Hyperlink>

    <div class="flex flex-col font-sans text-base text-stone-700">
      <div
        class="flex items-center space-x-2"
        v-if="config.authors && config.authors.length > 0"
      >
        <PencilIcon class="w-4 shrink-0" />
        <span class="font-bold">{{ config.authors.join(', ') }}</span>
      </div>

      <div
        class="flex items-center space-x-2"
        v-if="config.translators && config.translators.length > 0"
      >
        <LanguageIcon class="w-4 shrink-0" />
        <span>{{ config.translators.join(', ') }}</span>
      </div>

      <div class="flex items-center space-x-2" v-if="config.date">
        <CalendarDaysIcon class="w-4 shrink-0" />
        <span>{{ config.date }}</span>
      </div>
    </div>
  </div>
</template>
