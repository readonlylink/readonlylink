<script setup lang="ts">
import {
  CalendarDaysIcon,
  HashtagIcon,
  LanguageIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import { normalizeAttributes } from '../../components/md/normalizeAttributes'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { ArticleConfig } from './Config'
import { State } from './State'

const props = defineProps<{
  state: State
  config: ArticleConfig
}>()

const attributes = computed(() => normalizeAttributes(props.config.attributes))
</script>

<template>
  <div>
    <Lang class="text-base text-stone-500 dark:text-stone-400">
      <template #zh> 文章 </template>
      <template #en> Article </template>
    </Lang>

    <Hyperlink :href="`/articles/${state.url}`">
      <div class="py-1 hover:text-stone-500 hover:dark:text-stone-400">
        <div class="text-balance font-bold">
          {{ config.title }}
        </div>
        <div
          v-if="config.attributes.subtitle"
          class="text-balance text-base font-bold"
        >
          {{ config.attributes.subtitle }}
        </div>
      </div>
    </Hyperlink>

    <div class="flex flex-col text-base text-black dark:text-white">
      <div
        class="flex items-center space-x-2"
        v-if="attributes.authors.length > 0"
      >
        <PencilIcon class="w-4 shrink-0" />
        <span class="font-bold">{{ attributes.authors.join(', ') }}</span>
      </div>

      <div
        class="flex items-center space-x-2"
        v-if="attributes.translators.length > 0"
      >
        <LanguageIcon class="w-4 shrink-0" />
        <span>{{ attributes.translators.join(', ') }}</span>
      </div>

      <div class="flex items-center space-x-2" v-if="attributes.date">
        <CalendarDaysIcon class="w-4 shrink-0" />
        <span>{{ attributes.date }}</span>
      </div>

      <div class="flex items-center space-x-2" v-if="attributes.venue">
        <MapPinIcon class="w-4 shrink-0" />
        <span>{{ attributes.venue }}</span>
      </div>

      <div
        class="flex items-center space-x-2"
        v-if="attributes.keywords.length > 0"
      >
        <HashtagIcon class="w-4 shrink-0" />
        <span>{{ attributes.keywords.join(', ') }}</span>
      </div>
    </div>
  </div>
</template>
