<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <Lang class="font-sans text-base text-stone-500">
      <template #zh> 文章 </template>
      <template #en> Article </template>
    </Lang>

    <Hyperlink
      :href="`/articles/${state.url}`"
      class="font-sans hover:text-stone-500"
    >
      <div class="font-bold">
        {{ state.config.title }}
      </div>
      <div v-if="state.config.attributes.subtitle" class="text-base font-bold">
        {{ state.config.attributes.subtitle }}
      </div>
    </Hyperlink>
  </div>
</template>
