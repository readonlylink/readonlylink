<script setup lang="ts">
import {
  CalendarDaysIcon,
  HashtagIcon,
  LanguageIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/lang/Lang.vue'
import { normalizeAttributes } from '../../components/md/normalizeAttributes'
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
    <Lang class="font-sans text-base text-stone-500">
      <template #zh> 文章 </template>
      <template #en> Article </template>
    </Lang>

    <Hyperlink :href="`/articles/${state.url}`">
      <div class="py-1 font-sans hover:text-stone-500">
        <div class="font-bold">
          {{ config.title }}
        </div>
        <div v-if="config.attributes.subtitle" class="text-base font-bold">
          {{ config.attributes.subtitle }}
        </div>
      </div>
    </Hyperlink>

    <div class="flex flex-col font-sans text-base text-stone-700">
      <div
        class="flex items-center font-bold"
        v-if="attributes.authors.length > 0"
      >
        <PencilIcon class="w-5 shrink-0 pr-1" />
        <span>{{ attributes.authors.join(', ') }}</span>
      </div>
      <div class="flex items-center" v-if="attributes.translators.length > 0">
        <LanguageIcon class="w-5 shrink-0 pr-1" />
        <span>{{ attributes.translators.join(', ') }}</span>
      </div>
      <div class="flex items-center" v-if="attributes.date">
        <CalendarDaysIcon class="w-5 shrink-0 pr-1" />
        {{ attributes.date }}
      </div>
      <div class="flex items-center" v-if="attributes.venue">
        <MapPinIcon class="w-5 shrink-0 pr-1" />
        {{ attributes.venue }}
      </div>
      <div class="flex items-center" v-if="attributes.keywords.length > 0">
        <HashtagIcon class="w-5 shrink-0 pr-1" />
        <span>{{ attributes.keywords.join(', ') }}</span>
      </div>
    </div>
  </div>
</template>
