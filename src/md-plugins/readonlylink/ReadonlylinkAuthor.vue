<script setup lang="ts">
import { computed } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { authorAvatarURL } from '../../models/author'
import { AuthorConfig } from '../../models/author/AuthorConfig'
import { State } from './State'

const props = defineProps<{
  state: State
  config: AuthorConfig
}>()

const avatarURL = computed(() =>
  authorAvatarURL({
    url: props.state.url,
    config: props.config,
  }),
)
</script>

<template>
  <div>
    <Lang class="text-base text-stone-500 dark:text-stone-400">
      <template #zh> 作者 </template>
      <template #en> Author </template>
    </Lang>

    <div class="flex items-center space-x-2 pt-1">
      <Hyperlink
        :href="`/authors/${state.url}`"
        class="shrink-0 object-contain"
      >
        <img
          :alt="config.name"
          :src="avatarURL.href"
          class="h-[5rem] w-[5rem]"
        />
      </Hyperlink>

      <div class="overflow-x-auto">
        <Hyperlink :href="`/authors/${state.url}`">
          <div
            class="overflow-x-auto overflow-y-hidden whitespace-pre py-1 font-bold hover:text-stone-500 hover:dark:text-stone-400"
          >
            {{ config.name }}
          </div>
        </Hyperlink>

        <Hyperlink v-if="state.url" :href="`/authors/${state.url}`">
          <div
            class="overflow-x-auto overflow-y-hidden whitespace-pre py-0.5 font-mono text-xs hover:underline"
          >
            {{ state.url }}
          </div>
        </Hyperlink>

        <div
          v-if="config.tagline"
          class="overflow-x-auto overflow-y-hidden whitespace-pre text-base"
        >
          {{ config.tagline }}
        </div>
      </div>
    </div>
  </div>
</template>
