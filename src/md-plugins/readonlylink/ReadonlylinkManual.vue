<script setup lang="ts">
import {
  CalendarDaysIcon,
  LanguageIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import { ManualConfig } from '../../pages/manual/ManualConfig'
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
        <div class="font-bold">
          {{ config.title }}
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
    </div>
  </div>
</template>
