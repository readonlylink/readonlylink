<script setup lang="ts">
import { MapPinIcon } from '@heroicons/vue/24/outline'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import { AuthorConfig } from '../../pages/author/AuthorConfig'
import { State } from './State'

defineProps<{
  state: State
  config: AuthorConfig
}>()
</script>

<template>
  <div>
    <Lang class="font-sans text-base text-stone-500">
      <template #zh> 作者 </template>
      <template #en> Author </template>
    </Lang>

    <Hyperlink :href="`/books/${state.url}`">
      <div class="py-1 font-sans hover:text-stone-500">
        <div class="font-bold">
          {{ config.name }}
        </div>
      </div>
    </Hyperlink>

    <div class="flex flex-col font-sans text-base text-stone-700">
      <div class="flex items-center" v-if="config.tagline">
        {{ config.tagline }}
      </div>

      <div class="flex items-center" v-if="config.venue">
        <MapPinIcon class="w-5 shrink-0 pr-1" />
        {{ config.venue }}
      </div>
    </div>
  </div>
</template>
