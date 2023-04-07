<script setup lang="ts">
import { computed } from 'vue'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/lang/Lang.vue'
import { AuthorConfig } from '../../pages/author/AuthorConfig'
import { State } from './State'

const props = defineProps<{
  state: State
  config: AuthorConfig
}>()

const avatarURL = computed(() => new URL(props.config.avatar, props.state.url))
</script>

<template>
  <div>
    <Lang class="font-sans text-base text-stone-500">
      <template #zh> 作者 </template>
      <template #en> Author </template>
    </Lang>

    <div class="flex items-center space-x-2">
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
            class="overflow-x-auto overflow-y-hidden whitespace-pre py-1 font-sans font-bold hover:text-stone-500"
          >
            {{ config.name }}
          </div>
        </Hyperlink>

        <Hyperlink v-if="state.url" :href="`/authors/${state.url}`">
          <div
            class="overflow-x-auto overflow-y-hidden whitespace-pre py-0.5 font-mono text-base text-xs hover:underline"
          >
            {{ state.url }}
          </div>
        </Hyperlink>

        <div
          v-if="config.tagline"
          class="overflow-x-auto overflow-y-hidden whitespace-pre font-serif text-base italic"
        >
          {{ config.tagline }}
        </div>
      </div>
    </div>
  </div>
</template>
