<script setup lang="ts">
import { PlayIcon } from '@heroicons/vue/24/outline'
import { Base64 } from 'js-base64'
import Lang from '../../components/lang/Lang.vue'
import { useCurrentOrigin } from '../../reactives/useCurrentOrigin'
import { State } from './State'

defineProps<{ state: State }>()

const origin = useCurrentOrigin()
</script>

<template>
  <div class="flex space-x-4">
    <a
      v-if="state.currentTab && state.currentTab.file.name.endsWith('.md')"
      :href="`${origin}/articles/data:text/plain;base64,${Base64.encode(
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
  </div>
</template>
