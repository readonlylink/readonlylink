<script setup lang="ts">
import {
  CalendarDaysIcon,
  HashtagIcon,
  LanguageIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import SpanJoin from '../../../atoms/SpanJoin.vue'
import { normalizeAttributes } from './normalize-attributes'

const props = defineProps({ attributes: Object })

const attributes = computed(() => normalizeAttributes(props.attributes))
</script>

<template>
  <div class="flex flex-col font-sans text-stone-700">
    <div
      class="flex items-center font-bold"
      v-if="attributes.authors.length > 0"
    >
      <PencilIcon class="w-5 shrink-0 pr-1" />
      <SpanJoin :items="attributes.authors">
        <template #item="{ name }">
          <span>{{ name }}</span>
        </template>
        <template #delimiter>
          <span class="pr-1">,</span>
        </template>
      </SpanJoin>
    </div>
    <div class="flex items-center" v-if="attributes.translators.length > 0">
      <LanguageIcon class="w-5 shrink-0 pr-1" />
      <SpanJoin :items="attributes.translators">
        <template #item="{ name }">
          <span>{{ name }}</span>
        </template>
        <template #delimiter>
          <span class="pr-1">,</span>
        </template>
      </SpanJoin>
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
      <SpanJoin :items="attributes.keywords.map((keyword) => ({ keyword }))">
        <template #item="{ keyword }">
          <span>{{ keyword }}</span>
        </template>
        <template #delimiter>
          <span class="pr-1">,</span>
        </template>
      </SpanJoin>
    </div>
  </div>
</template>
