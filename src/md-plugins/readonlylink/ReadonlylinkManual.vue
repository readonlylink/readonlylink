<script setup lang="ts">
import {
  CalendarDaysIcon,
  LanguageIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { ManualConfig } from '../../models/manual/ManualConfig'
import { State } from './State'

defineProps<{
  state: State
  config: ManualConfig
}>()
</script>

<template>
  <div>
    <Lang class="font-sans text-base text-stone-500">
      <template #zh> 手册 </template>
      <template #en> Manual </template>
    </Lang>

    <Hyperlink :href="`/manuals/${state.url}`">
      <div class="py-1 font-sans hover:text-stone-500">
        <div class="text-balance font-bold">
          {{ config.title }}
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
