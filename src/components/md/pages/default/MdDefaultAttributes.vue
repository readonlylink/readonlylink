<script setup lang="ts">
import {
  CalendarDaysIcon,
  HashtagIcon,
  LanguageIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import { State } from '../../State'
import { normalizeAttributes } from '../../normalizeAttributes'

const props = defineProps<{ state: State }>()

const attributes = computed(() =>
  normalizeAttributes(props.state.document.attributes),
)
</script>

<template>
  <div class="flex flex-col text-black dark:text-white">
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
      <span> {{ attributes.venue }}</span>
    </div>

    <div
      class="flex items-center space-x-2"
      v-if="attributes.keywords.length > 0"
    >
      <HashtagIcon class="w-4 shrink-0" />
      <span>{{ attributes.keywords.join(', ') }}</span>
    </div>
  </div>
</template>
