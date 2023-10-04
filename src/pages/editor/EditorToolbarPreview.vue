<script setup lang="ts">
import { PlayIcon } from '@heroicons/vue/24/outline'
import { Base64 } from 'js-base64'
import Lang from '../../components/lang/Lang.vue'
import { currentOrigin } from '../../utils/currentOrigin'
import { State } from './State'

defineProps<{ state: State }>()

const origin = currentOrigin()
</script>

<template>
  <a
    v-if="state.currentTab && state.currentTab.file.name.endsWith('.md')"
    :href="`${origin}/articles/data:text/markdown;base64,${Base64.encode(
      state.currentTab.text,
    )}`"
    class="flex items-center space-x-1 hover:underline"
    target="_blank"
  >
    <PlayIcon class="h-5 w-5" />
    <Lang>
      <template #zh>预览 Markdown</template>
      <template #en>Preview Markdown</template>
    </Lang>
  </a>

  <a
    v-if="state.currentTab && state.currentTab.file.name.endsWith('.mimor')"
    :href="`https://mimor.app/mimors/data:text/plain;base64,${Base64.encode(
      state.currentTab.text,
    )}`"
    class="flex items-center space-x-1 hover:underline"
    target="_blank"
  >
    <PlayIcon class="h-5 w-5" />
    <Lang>
      <template #zh>预览 Mimor</template>
      <template #en>Preview Mimor</template>
    </Lang>
  </a>
</template>
../../utils/currentOrigin
